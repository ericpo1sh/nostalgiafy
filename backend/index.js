const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

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
  id:{
    type: Number,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  cost:{
    type:Number,
    required:true,
  },
  img:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  rating:{
    type:Number,
    required:true,
  },
  available:{
    type:Boolean,
    default:true,
  }
})

// POST method for adding products
app.post('/addproduct',async (req,res)=>{
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

app.listen(port,(error)=>{
  if (!error) {
    console.log("Server Running on Port"+port)
  }
  else
  {
    console.log("Error : "+error)
  }
})
