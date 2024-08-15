import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

  const [allproducts,setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('https://nostalgiafy.onrender.com/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async (id)=>{
    await fetch('https://nostalgiafy.onrender.com/removeproduct',{
      method:'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>List of All Products</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Name</p>
        <p>Description</p>
        <p>Cost</p>
        <p>Rating</p>
        <p>Rating Image</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
          return <>
          <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.img} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>${product.cost}</p>
            <p>{product.rating}</p>
            <p>{product.rating_img}</p>
            <img onClick={()=>{remove_product(product.id)}} className="listproduct-remove-icon" src={cross_icon} alt="" />
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
