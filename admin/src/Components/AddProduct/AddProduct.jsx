import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
  
  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input type="text" name='name' placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Product Description</p>
        <input type="text" name='description' placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="price" placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor='file-input'>
          <img src={upload_area} className='addproduct-thumbnail-img' alt="" />
        </label>
        <input type="file" name='image' id='file-input' hidden/>
      </div>
      <button className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct
