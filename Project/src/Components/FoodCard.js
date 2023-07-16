import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemsToCart } from '../DataManagement/AddToCartSlice'
import './FoodCard.css'

function FoodCard(props) {
    const { name, price, priceType : type, img} = props.item;
    const Dispatch = useDispatch();

    function handleBuyNowBtn(){
        alert('Clicked Buy Now');
    }

    function handleAddToCartBtn(){
        Dispatch(addItemsToCart(props.item));
    }
    
    return (
        <>
            <div className="foodCard">
                <div className="foodImgContainer" >
                    <img className="foodImg" src={img} alt="foodImg" />
                </div>
                <div className="foodDataContainer">
                    <h2 className="cardFoodName">{name}</h2>
                    <h6 className="cardFoodPrice">₹{price} / {type}</h6>
                    <div className="cardBtnContainer">
                        <input className="cardBtn addToCart" type="button" onClick={handleAddToCartBtn} value="Add to Thali" />
                        <input className="cardBtn buyNow" type="button" onClick={handleBuyNowBtn} value="Buy Now" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodCard
