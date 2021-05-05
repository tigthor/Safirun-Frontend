
import React, { Component, useState, useEffect } from 'react';


const FoodCart = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    return setCount(count + 1)
  };

  const [value, setValue] = React.useState(1);

  return (
    <div class='cartFoodpar'>
      <div class='cartFoodchil1'>
        <div className='cartFoodchil3'>
          <p className='cartFoodchil2'>Your Cart</p>
          <img src='../cartPic1.png' className='cartFoodchil4' />
        </div>

        <p className='cartFoodchil5'><b>Camellia Restaurant</b> (Kacyiru, Rwanda)</p>
        <div className='cartFoodchil8'>
          <div className='cartFoodchil12'>
            <img src='../cartPic2.png' className='cartFoodchil7'></img>
            <p className='cartFoodchil11'>Change Location</p>
          </div>
          <div className='cartFoodchil6'>
            <p className='cartFoodchil9'>3rd Floor, Fairview building, KG 622</p>
            <p className='cartFoodchil9'> Kimihurura, Gasabo District, Kigali,</p>
            <p className='cartFoodchil9'> Rwanda</p>
            <p className='cartFoodchil10'>Add Instruction</p>
          </div>
          
        </div>
        <hr className='cartFoodchil13'></hr>
        <div className='cartFoodchil14'>
          <img src='../cartPic3.png' className='cartFoodchil17'></img>
          <p className='cartFoodchil15'>Delivery</p>
        </div>
        <hr className='cartFoodchil13'></hr>
        <div className='cartFoodchil14'>
          <img src='../cartPic4.png' className='cartFoodchil17'></img>
          <p className='cartFoodchil16'>Delivery Time: 40-50 Min</p>
        </div>
        <hr className='cartFoodchil13'></hr>
        <div className='cartFoodchil22'>
          <p className='cartFoodchil18'>Your Order</p>
          <p className='cartFoodchil19'>See Menu</p>
        </div>
        <div className='cartFoodchil22'>
          <p className='cartFoodchil20'>Classic Buritto</p>
          <p className='cartFoodchil21'>5000Rwf</p>
        </div>
        <hr className='cartFoodchil13'></hr>
        <div className='cartFoodchil14'>
          <img src='../cartPic3.png' className='cartFoodchil17'></img>
          <p className='cartFoodchil15'>Add Items</p>
        </div>
        <hr className='cartFoodchil13'></hr>
        <div className='cartFoodchil24'>
          <button  className='cartFoodchil23' onClick={() => {
            return setCount(count + 1);
          }}>{count} + Add Items</button>
        </div>
        <hr className='cartFoodchil13'></hr>
        <div className='cartFoodchil14'>
          <img src='../cartPic5.png' className='cartFoodchil17'></img>
          <p className='cartFoodchil25'>Add Promo Code</p>
        </div>
        <hr className='cartFoodchil13'></hr>
        <div className='cartFoodchil22'>
          <p className='cartFoodchil20'>Subtotal</p>
          <p className='cartFoodchil21'>5000Rwf</p>
        </div>
        <hr className='cartFoodchil13'></hr>
        <div className='cartFoodchil22'>
          <p className='cartFoodchil20'>Container Fee</p>
          <p className='cartFoodchil21'>500Rwf</p>
        </div>
        <div className='cartFoodchil22'>
          <p className='cartFoodchil20'>Delively Fee</p>
          <p className='cartFoodchil21'>1,000Rwf</p>
        </div>
        <hr className='cartFoodchil13'></hr>

        <div className='cartFoodchil22'>
          <p className='cartFoodchil20'>VAT(18%)</p>
          <p className='cartFoodchil21'>500Rwf</p>
        </div>
        <div className='cartFoodchil22'>
          <p className='cartFoodchil20'>Total</p>
          <p className='cartFoodchil21'>7000Rwf</p>
        </div>
        <hr className='cartFoodchil13'></hr>
        <div className='cartFoodchil29'>
          
          <div className='cartFoodchil26'>
          <p className='cartFoodchil27'>Continue</p>
          </div>
          <div className='cartFoodchil26'>
          <p className='cartFoodchil27'>Checkout</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FoodCart;

