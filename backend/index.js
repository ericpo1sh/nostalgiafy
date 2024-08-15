const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { request } = require("http");
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');

app.use(express.json());
app.use(cors());

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Database Connection with Mongo
mongoose.connect("mongodb+srv://michaelmoser:mSSsB2RFPxQqDCDc@graphql-cluster.yoqsz5r.mongodb.net/nostalgiafy");

/**
 * @swagger
 * /:
 *   get:
 *     summary: Check if the API is running
 *     responses:
 *       200:
 *         description: API is running successfully
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Express App is Running
 */
app.get("/",(req,res)=>{
  res.send("Express App is Running")
})

// Schema for Products
const Product = mongoose.model("Product",{
  id: {type: Number, required: false},
  name: {type: String, required: true},
  cost: {type: Number, required: true},
  img: {type: String, required: true},
  description: {type: String, required: true},
  rating: {type: Number, required: false},
  rating_img: {type: String, required: false},
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

/**
 * @swagger
 * /addproduct:
 *   post:
 *     summary: Add a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               cost:
 *                 type: number
 *               img:
 *                 type: string
 *               description:
 *                 type: string
 *               rating:
 *                 type: number
 *             required:
 *               - name
 *               - cost
 *               - img
 *               - description
 *     responses:
 *       200:
 *         description: Product added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 name:
 *                   type: string
 */
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

/**
 * @swagger
 * /removeproduct:
 *   post:
 *     summary: Remove an existing product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: Product removed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 name:
 *                   type: string
 */
app.post('/removeproduct', async (req, res) => {
  await Product.findOneAndDelete({id: req.body.id});
  console.log('Product successfully removed');
  res.json({
    success: true,
    name: req.body.name
  });
});

/**
 * @swagger
 * /allproducts:
 *   get:
 *     summary: Retrieve all products
 *     responses:
 *       200:
 *         description: List of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   cost:
 *                     type: number
 *                   img:
 *                     type: string
 *                   description:
 *                     type: string
 *                   rating:
 *                     type: number
 */
app.get('/allproducts', async (req, res) => {
  let products = await Product.find({});
  console.log('All items have been fetched.')
  res.send(products)
})

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 token:
 *                   type: string
 */
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

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid credentials
 */
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

/**
 * @swagger
 * /paginatedItems:
 *   get:
 *     summary: Retrieve paginated products
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: The page number to retrieve
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The number of items per page
 *     responses:
 *       200:
 *         description: Paginated list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       cost:
 *                         type: number
 *                       img:
 *                         type: string
 *                       description:
 *                         type: string
 *                 totalItems:
 *                   type: integer
 *                 totalPages:
 *                   type: integer
 *                 currentPage:
 *                   type: integer
 */
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

/**
 * @swagger
 * /addtocart:
 *   post:
 *     summary: Add an item to the user's cart
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemId:
 *                 type: integer
 *             required:
 *               - itemId
 *     responses:
 *       200:
 *         description: Item added to cart
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Added to cart
 */
app.post('/addtocart', fetchUser, async (req, res) => {
  let userData = await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId] + 1;
  await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData});
  res.send('Added to cart')
})

/**
 * @swagger
 * /removefromcart:
 *   post:
 *     summary: Remove an item from the user's cart
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemId:
 *                 type: integer
 *             required:
 *               - itemId
 *     responses:
 *       200:
 *         description: Item removed from cart
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Removed from cart
 */
app.post('/removefromcart', fetchUser, async (req, res) => {
  let userData = await Users.findOne({_id:req.user.id});
  if (userData.cartData[req.body.itemId] > 0) {
    userData.cartData[req.body.itemId] -= 1;
  }
  await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData});
  res.send('Removed from cart')
})

/**
 * @swagger
 * /getcart:
 *   post:
 *     summary: Retrieve the user's cart data
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Cart data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: integer
 */
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

