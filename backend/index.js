const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { request } = require("http");

app.use(express.json());
app.use(cors());

// Database Connection with Mongo
mongoose.connect("mongodb+srv://michaelmoser:mSSsB2RFPxQqDCDc@graphql-cluster.yoqsz5r.mongodb.net/nostalgiafy");

// API Creation
app.get("/",(req,res)=>{
  res.send("Express App is Running")
})

// Image Storage Engine
const storage = multer.diskStorage({
  destination: './upload/images',
  filename:(req,file,cb)=>{
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({storage:storage})

// Upload Endpoint for Images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
  res.json({
    success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
  })
})

// Schema for Products
const Product = mongoose.model("Product",{
  id: {type: Number, required: true},
  name: {type: String, required: true},
  cost: {type: Number, required: true},
  img: {type: String, required: true},
  description: {type: String, required: true},
  rating: {type: Number, required: true},
  rating_img: {type: String, required: true},
  available: {type: Boolean, default: true}
})

// schema for users

const Users = mongoose.model('Users', {
  name: {type: String},
  email: {type: String, unique: true},
  password: {type: String},
  cartData: {type: Object},
  date: {type: Date, defualt: Date.now}
})

// POST method for adding products
app.post('/addproduct', async (req,res)=>{
  const product = new Product({
    id:req.body.id,
    name:req.body.name,
    cost:req.body.cost,
    img:req.body.img,
    description:req.body.description,
    rating:req.body.rating,
  })
  console.log(product);
  await product.save();
  console.log("Product Saved!");
  res.json({
    sucess:true,
    name:req.body.name,
  })
})

// Route for removing products

app.post('/removeproduct', async (req, res) => {
  await Product.findOneAndDelete({id: req.body.id});
  console.log('Product successfully removed');
  res.json({
    success: true,
    name: req.body.name
  });
});

// Route for retrieving all products

app.get('/allproducts', async (req, res) => {
  let products = await Product.find({});
  console.log('All items have been fetched.')
  res.send(products)
})

// Route for registering the user

app.post('/signup', async (req, res) => {
  let check = await Users.findOne({email: req.body.email})
  if (check) {
    return res.status(400).json({success: false, error: 'Existing user found with the same email.'});
  };
  let cart = {};
  for (let i = 0; i < 100; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  })

  await user.save();

  const data = {
    user: {id: user.id}
  }

  const token = jwt.sign(data, 'secret_nostalgiafy');
  res.json({success: true, token})
});

// Route for logging in the user
app.post('/login', async (req, res) => {
  let user = await Users.findOne({email: req.body.email});
  if (user) {
    const comparePassword = req.body.password === user.password;
    if (comparePassword) {
      const data = { user: {id: user.id} }
      const token = jwt.sign(data, 'secret_nostalgiafy');
      res.json({success: true, token});
    } else {
      res.json({success: false, error: 'Incorrect password.'});
    };
  } else {
    res.json({success: false, error: 'Incorrect or non-existing.'});
  };
})

app.get('/paginatedItems', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;

  try {
    const items = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const totalItems = await Product.countDocuments();

    res.json({
      items,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// creating middleware to fetch user
  const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
      res.status(401).send({error: 'Authenticate using a valid token'})
    } else {
      try {
        const data = jwt.verify(token, 'secret_nostalgiafy');
        req.user = data.user;
        next();
      } catch (error) {
        res.status(401).send({error: 'Authenticate using a valid token'})
      }
    }
  }

// route for adding items into the cart and storing it in the users database

app.post('/addtocart', fetchUser, async (req, res) => {
  let userData = await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId] + 1;
  await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData});
  res.send('Added to cart')
})

// route for removing items from cart and updating user database

app.post('/removefromcart', fetchUser, async (req, res) => {
  let userData = await Users.findOne({_id:req.user.id});
  if (userData.cartData[req.body.itemId] > 0) {
    userData.cartData[req.body.itemId] -= 1;
  }
  await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData});
  res.send('Removed from cart')
})

// route for save the cart data

app.post('/getcart', fetchUser, async (req, res) => {
  console.log("Get the cart");
  let userData = await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);
})

app.listen(port,(error) => {
  if (!error) {
    console.log("Server Running on Port " + port)
  }
  else
  {
    console.log("Error : " + error)
  }
})

