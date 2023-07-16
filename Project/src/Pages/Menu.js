import React from 'react';
import FoodCard from '../Components/FoodCard';
import './Menu.css';
import { useSelector } from 'react-redux';

function Menu() {
  const list = useSelector(state=> state.itemList);
  return (
    <>
      <div className="container">
        <h1 className='pageHeading'>Create Your Own <span>Thali</span>.</h1>
        <div className="foodCardContainer">
          {list.map((item, ind)=> <FoodCard key={ind} index={ind} item={item} />)}
        </div>
      </div>
    </>
  )
}

export default Menu
