import React from 'react'
import './CheckoutCard.css'

function CheckoutCard(props) {
    const { item: { name, img, quantity, priceType }, index: ind } = props;
    return (
        <>
            <div className='checkoutCardContainer'>
                <p className='checkoutFood checkoutFoodIndex'>{ind + 1}.</p>
                <img className='checkoutFoodImage' src={img} alt='foodImage' />
                <p className='checkoutFood checkoutFoodName'>{name}</p>
                <p className='checkoutFood checkoutFoodQty'>{quantity} {priceType}</p>
            </div>
        </>
    )
}

export default CheckoutCard
