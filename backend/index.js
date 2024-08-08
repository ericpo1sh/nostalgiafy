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
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: req.body.cartData
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

app.listen(port,(error) => {
  if (!error) {
    console.log("Server Running on Port " + port)
  }
  else
  {
    console.log("Error : " + error)
  }
})

