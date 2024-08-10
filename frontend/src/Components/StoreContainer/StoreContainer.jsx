import React, { useState, useEffect, useContext } from 'react';
import './StoreContainer.css'
import { ShopContext } from '../../Context/ShopContext';

function StoreContainer() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const {addToCart} = useContext(ShopContext);

  useEffect(() => {
    fetch(`https://nostalgiafy.onrender.com/paginatedItems?page=${currentPage}&limit=8`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items);
        setTotalPages(data.totalPages);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className='main_container'>
        <button className='prev' onClick={handlePreviousPage} disabled={currentPage === 1}>
        <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.4957 41.8877L2.97888 21.9983L37.462 2.05059L37.4957 41.8877Z" fill="white" stroke="black" stroke-width="2"/>
        </svg>
        </button>
      {/* <div>
        <span>{` Page ${currentPage} of ${totalPages} `}</span>
      </div> */}
      <div className='items_container'>
        {items.map((item) => (
          <div className='item_card' key={item.id}>
            <img className='item_img' src={item.img} alt={item.name}/>
            <p className='item_title'>{item.name}</p>
            <div className='item_desc'>
              <p>{item.description}</p>
            </div>
            <div className='bottom_container'>
              <div className='rating_container'>
                <p>{item.rating}</p>
                <img className='rating_img' src={item.rating_img} width={'80px'}></img>
              </div>
              <div className='purchase_container'>
                <div className='price'><p>${item.cost}</p></div>
                <div className='add_to_cart'><button onClick={()=>{addToCart(item.id)}}>Add to cart</button></div>
              </div>
            </div>
          </div>
        ))}
      </div>
        <button className='next' onClick={handleNextPage} disabled={currentPage === totalPages}>
        <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.50151 2.09223L36.0074 22.0006L1.51331 41.9294L1.50151 2.09223Z" fill="white" stroke="#1E1E1E" stroke-width="2"/>
        </svg>
        </button>
    </div>
  );
}

export default StoreContainer;
