import React from 'react'
import addToCartBtn from '../Images/addToCart.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar() {
    const addToCartList = useSelector(state => state.addToCartList.addToCartItems);

    return (
        <>
            <div className="header">
                <h2>RK Restaurant</h2>
                <div className="nav">
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/menu">Menu</Link></li>
                        <li> <Link to="/">Services</Link></li>
                        <li> <Link to="/">Contact Us</Link></li>
                        <li> <Link to="/cart">Cart</Link></li>
                    </ul>
                </div>
                <div className="btn">
                    <Link className='atcBtnContainer' to='/cart'>
                        <img src={addToCartBtn} alt="atcbtn" />
                        <span className='cartItemCount'>{addToCartList.length}</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;

