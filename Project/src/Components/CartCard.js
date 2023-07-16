import crossBtn from '../Images/Icons/crossBtn.png';
import { useDispatch, useSelector } from 'react-redux'
import { removeItemsFromCart, increaseItem, decreaseItem, setTotalAmount, setTotalBillAmount } from '../DataManagement/AddToCartSlice'
import { useEffect, useState } from 'react';
import './CartCard.css';

function CartCard(props) {
  const { item: { name, price, img, quantity, totalAmount }, index: ind } = props;
  const { addToCartItems } = useSelector(state => state.addToCartList);
  const [sum, setSum] = useState(0); // To update useEffect (No use in functionality)
  const Dispatch = useDispatch();

  useEffect(() => {
    addToCartItems.reduce((acc, item) => {
      acc += item.totalAmount;
      Dispatch(setTotalBillAmount(acc));
      return acc;
    }, 0)
  }, [sum])
  
  function handleDeleteItem() {
    Dispatch(removeItemsFromCart(ind));
    setSum(sum+1);
  }

  function increaseFoodItem() {
    Dispatch(increaseItem(ind));
    Dispatch(setTotalAmount(ind));
    setSum(sum+1);
  }

  function decreaseFoodItem() {
    if (quantity > 1) {
      Dispatch(decreaseItem(ind));
      Dispatch(setTotalAmount(ind));
      setSum(sum-1);
    }
  }

  return (
    <>
      <div className="cartContainer">
        <img className='cartFoodImage' src={img} alt='foodImage' />
        <p className='cartFoodName'>{name}</p>
        <p className='cartFoodPrice'>{price}</p>
        <div className="cartQtyContainer">
          <button className='cartQtyBtn' onClick={() => decreaseFoodItem()}>-</button>
          <input type="text" className='cartFoodItemQty' readOnly value={quantity} />
          <button className='cartQtyBtn' onClick={() => increaseFoodItem()}>+</button>
        </div>
        <input type='text' className='cartFoodTotalPrice' value={totalAmount} readOnly />
        <img src={crossBtn} className='cartFoodCrossBtn' alt='crossBtn' onClick={() => handleDeleteItem()} />
      </div>
    </>
  )
}

export default CartCard
