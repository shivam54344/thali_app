import React from 'react'
import './Checkout.css'
import gPay from '../Images/FinTechLogos/gpay-logo.png'
import paytm from '../Images/FinTechLogos/paytm-logo.png'
import phonePe from '../Images/FinTechLogos/phone-pe-logo.png'
import { useSelector } from 'react-redux'
import CheckoutCard from '../Components/CheckoutCard'

function Checkout() {
  const { totalBillAmount, addToCartItems } = useSelector(state => state.addToCartList)

  function handlePayBill() { 
    alert('Bill Paid😍. Enjoy your Food.');
  }

  return (
    <>
      <div className='container'>
        <h1 className='pageHeading'>Check<span>out</span></h1>
        <div className="checkoutPageContainer">
          <section className='rightSection'>
            <h3 className='sectionHeading'>Our Thali is ready😋</h3>
            {addToCartItems.map((item, ind) => <CheckoutCard key={ind} index={ind} item={item} />)}
          </section>
          <section className='leftSection'>
            <div className="checkoutDetailContainer">
              <div className="checkoutDetails">
                <h5>You need to pay</h5>
                <h1>₹ {totalBillAmount}.00</h1>
                <p>Incl. All Taxes &#38; GST.</p>
              </div>
              <div className="paymentReceiverLogoIcons">
                <h6>We Accept:</h6>
                <div className="paymentSignLogoContainer">
                  <img src={gPay} alt="gpay" className="fintechLogo" />
                  <img src={paytm} alt="paytm" className="fintechLogo" />
                  <img src={phonePe} alt="phonePe" className="fintechLogo" />
                </div>
              </div>
              <button className='payNowBtn' onClick={() => handlePayBill()}>Pay Now</button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Checkout
