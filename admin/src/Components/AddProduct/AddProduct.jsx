import React, { useState } from 'react'
import './AddProduct.css'

const AddProduct = () => {

  const [productDetails,setProductDetails] = useState({
    id:"",
    name:"",
    cost:"",
    img:"",
    description:"",
    rating:"",
    rating_img:"",
  })

  const changeHandler = (e) =>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product = async () => {
    console.log(productDetails);
    let product = productDetails;
  
    await fetch('https://nostalgiafy.onrender.com/addproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.success ? alert('Product Added') : alert('Product not added');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while adding the product');
      });    
  };
  

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Product Description</p>
        <input value={productDetails.description} onChange={changeHandler} type="text" name='description' placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Cost</p>
        <input value={productDetails.cost} onChange={changeHandler} type="text" name="cost" placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Image URL</p>
        <input value={productDetails.img} onChange={changeHandler} type="text" name='img' placeholder='Paste Image URL here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Rating</p>
        <input value={productDetails.rating} onChange={changeHandler} type="text" name='rating' placeholder='Enter Rating here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Rating Image</p>
        <input value={productDetails.rating_img} onChange={changeHandler} type="text" name='rating_img' placeholder='Paste Star Rating Image URL here' />
      </div>
      <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct
