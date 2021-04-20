import React, { useState, useEffect } from 'react';
import { Card, Button, Space, Row, Col, notification } from 'antd';
import { ShoppingTwoTone, StarFilled, CloseCircleTwoTone } from '@ant-design/icons';


const oneProductCard = (props) => {
  const addCart = (item) => {
    add_cart(item);
    setAddItemOpacity('opacity-0')
    setRemoveItemOpacity('opacity-100')
    setDisableButton(true)
    openNotification();
  };

  const removeCart = (itemId) => {
    remove_single(itemId);
    setAddItemOpacity('opacity-100')
    setRemoveItemOpacity('opacity-0')
    setDisableButton(false)
    openNotification();
  };

  const [cart, setCart] = useState([]);
  const [allItems, setAllItems] = useState([])
  const [addItemOpacity, setAddItemOpacity] = useState('opacity-100')
  const [removeItemOpacity, setRemoveItemOpacity] = useState('opacity-0')

  const add_cart = (item) => {
    console.log(cart.indexOf(item));
    setCart([...cart, item]);
  };

  const [disableButton, setDisableButton] = useState(false)

  const remove_single = (itemId) => {
    cart.filter(value => value.itemId != itemId)
  }

  const openNotification = () => {
    notification.open({
      style: {
        color: '#1DA57A',
        fontWeight: 'bold',
        opacity: 0.9,
        cursor: 'pointer',
      },
      placement: 'bottomRight',
      message: 'Item Added',
      description: `${props.itemName} is added to your cart.`,
      duration: 4,
    });
  };

  return (
    <Card className="oneProductCard" key={props.itemId}>
      <div className={`mt-2 flex content-between w-full`}>
        <Button
          title={`Order Now ${props.itemName}`}
          onClick={() =>
            removeCart({
              itemId: props.itemId,
            })
          }
          icon={<CloseCircleTwoTone
            className='text-5xl rounded'
            twoToneColor="#a15353"
          />}
          type='primary'
          size='small'
          className={`w-8 ml-4 ${removeItemOpacity}`}
          shape='circle'
          disabled={disableButton}
        />
        <Button
          title={`Order Now ${props.itemName}`}
          onClick={() =>
            addCart({
              itemId: props.itemId,
              itemName: props.itemName,
              itemPrice: props.itemPrice,
              itemDescription: props.itemDescription,
            })
          }
          icon={<ShoppingTwoTone
            className='text-4xl rounded'
            twoToneColor="#54fc00"
            width={6}
            height={6}
          />}
          type='primary'
          size='middle'
          className={`w-16 h-16 ml-32 ${addItemOpacity}`}
          shape='circle'
          disabled={disableButton}
          width={6}
          height={6}
          ghost
        />
      </div>

      <img src={props.itemImage} className="oneProductCard_MainPic" />
      <h3 className="ProductCard_MainTitle">{props.itemName}</h3>
      <p className="ProductCard_Description">{props.itemPrice} Frw</p>
      <div className="ProductCard_Additional_Info">
        <p className="ProductCard_Additional_Info_time">
          {/* {data.infoTime} */} {props.itemDescription}
        </p>
        <div className="ProductCard_Additional_Info_ratings">
          <StarFilled
            fill='#52c41a'
            twoToneColor="#a15353"
          />
          <p className="ProductCard_Additional_Info_ratings_txt">
            {/* {data.infoRatingsText} */} 4.2+
                    </p>
        </div>
      </div>
    </Card>
  );
}

export default {oneProductCard, cart}