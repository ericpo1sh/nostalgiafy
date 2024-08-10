import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/remove_icon.png'

const CartItems = () => {
  const {products, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartItems'>
      <div className='cart-items-format-main' id="titles">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return <div>
        <div className='cartitems-format cart-items-format-main'>
          <img className='cart-product-img' src={e.img}></img>
          <p>{e.name}</p>
          <p>${e.cost}</p>
          <button className='cartitems-quantity noselect'>{cartItems[e.id]}</button>
          <p>${parseFloat((e.cost * cartItems[e.id]).toFixed(2))}</p>
          <img className='cart-remove-item' src={remove_icon} onClick={() => {removeFromCart(e.id)}}></img>
        </div>
        <hr/>
      </div>
        }
        return null;
      })}
      <div className='cart-items-down'>
        <div className='cart-items-total'>
          <h1>Cart Total</h1>
          <div>
            <div className='cart-items-total-item'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-items-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr/>
            <div className='cart-items-total-item'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems
