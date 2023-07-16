import React from 'react'
import CartCard from '../Components/CartCard'
import { useSelector } from 'react-redux'
import './AddToCart.css'
import { useNavigate } from 'react-router-dom';


function AddToCart() {
  const { addToCartItems, totalBillAmount } = useSelector(state => state.addToCartList);
  const Navigate = useNavigate();

  function onCheckOutBtnClick() {
    if(addToCartItems.length >= 2){
      Navigate('/checkout');
    } else {
      alert('Minimum 2 items should be added to your Thali. \nPlease add minimum 2 items.😊');
    }
  }

  return (
    <>
      <div className="container">
        <h1 className='pageHeading'>Add To <span>Cart</span></h1>
        <div className="addToCartContainer">
          {addToCartItems.map((item, ind) => <CartCard key={ind} index={ind} item={item} />)}
          {addToCartItems.length !== 0 ?
            <>
              <div className="line"></div>
              <div className="container flexContainer">
                <div className="detailsContainer">
                  <div className="totalDetailsContainer">
                    <div className="addToCartDetails">Total Items : </div>
                    <div className="addToCartValues">{addToCartItems.length}</div>
                  </div>
                  <div className="totalDetailsContainer">
                    <div className="addToCartDetails">Total Amount : </div>
                    <div className="addToCartValues">₹ {totalBillAmount}</div>
                  </div>
                </div>
                <div className="detailsContainer checkoutContainer">
                  <input type="button" className='checkoutBtn' onClick={()=>onCheckOutBtnClick()} value="Checkout" />
                </div>
              </div>
            </> :
            <>
              <h4 className='errorMsg'>You haven't added anything yet.</h4>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default AddToCart
