import React, { Component, useState, useEffect } from 'react';


const FoodSideCart = () => {
    const [count, setCount] = useState(1);
    const handleClick = () => {
        return setCount(count + 1)
    };

    const [value, setValue] = React.useState(1);

    return (
        <div class='cartSideFoodPar'>
            <div class='cartSideFoodChil1'>
                <div className='cartSideFoodChil2'>

                    <p className='cartSideFoodChil3'>Your Cart</p>
                    <img src='../cartPic1.png' className='cartSideFoodChil4' />
                </div>
                <hr className='cartSideFoodChil5'></hr>
                <div>
                    <div className='cartSideFoodChil7'>
                        <div><img src='../drinkSide1.png' className='cartSideFoodChil8' /></div>
                        <div className='cartSideFoodChil9'>
                            <p>Blue whisky</p>
                            <p>HandMade</p>
                            <p>whisky</p>
                            <p>50 ml</p>
                            <a href=''>Remove</a>
                        </div>
                        <div className='cartSideFoodChil11'>
                            <button className='cartSideFoodChil6' onClick={() => {
                                return setCount(count + 1);
                            }}>{count} + </button>
                            <p className='cartSideFoodChil10'>5,000rwf</p>
                        </div>
                    </div>
                    <div className='cartSideFoodChil7'>
                        <img src='../drinkSide1.png' className='cartSideFoodChil8' />
                        <div className='cartSideFoodChil9'>
                        <p>Blue whisky</p>
                            <p>HandMade</p>
                            <p>whisky</p>
                            <p>50 ml</p>
                            <a href=''>Remove</a>
                        </div>
                        <div className='cartSideFoodChil11'>
                            <button className='cartSideFoodChil6' onClick={() => {
                                return setCount(count + 1);
                            }}>{count} + </button>
                            <p className='cartSideFoodChil10'>5,000rwf</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FoodSideCart;

