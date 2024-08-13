import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext(null);

const getDefualtCart = () => {
  let cart = [];
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  };
  return cart;
}

const ShopContextProvider = (props) => {

  const [products, setAllProducts] = useState('[]')

  const [cartItems, setCartItems] = useState(getDefualtCart())

  useEffect(() => {
    fetch('https://nostalgiafy.onrender.com/allproducts')
    .then((response) => response.json())
    .then((data) => setAllProducts(data))

    if (localStorage.getItem('auth-token')) {
      fetch('https://nostalgiafy.onrender.com/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/from-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: '',
      }).then((response) => response.json())
      .then((data) => setCartItems(data));
    }
  },[])

  const addToCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
    // if (localStorage.getItem('auth-token')) {
    //   fetch('https://nostalgiafy.onrender.com/addtocart', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/form-data',
    //       'auth-token': `${localStorage.getItem('auth-token')}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({'itemId': itemId})
    //   })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    // }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId] - 1}));
    // if (localStorage.getItem('auth-token')) {
    //   fetch('https://nostalgiafy.onrender.com/removefromcart', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/form-data',
    //       'auth-token': `${localStorage.getItem('auth-token')}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({'itemId': itemId})
    //   })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    // }
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
