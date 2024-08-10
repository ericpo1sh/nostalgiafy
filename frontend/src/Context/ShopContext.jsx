import React, { createContext, useState } from 'react'
import products from '../Components/Assets/products'

export const ShopContext = createContext(null);

const getDefualtCart = () => {
  let cart = [];
  for (let index = 0; index < products.length + 1; index++) {
    cart[index] = 0;
  };
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefualtCart())

  const addToCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
    console.log(cartItems)
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId] - 1}))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item))
        totalAmount += itemInfo.cost * cartItems[item];
      }
    }
    return parseFloat(totalAmount.toFixed(2));
  }

  const contextValue = {products, cartItems, addToCart, removeFromCart, getTotalCartAmount};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
