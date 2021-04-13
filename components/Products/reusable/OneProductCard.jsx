import React, { useState, useEffect } from 'react';
import { Card, Button, Space, Row, Col, notification } from 'antd';
import { ShoppingTwoTone } from '@ant-design/icons';

const oneProductCard = (props) => {
  const addCart = (item) => {
    add_cart(item);
    // setOpacity('opacity-0')
    setDisableButton(true)
    openNotificationWithIcon('success')
  };

  const [cart, setCart] = useState([]);
  const [opacity, setOpacity] = useState('opacity-100')
  const add_cart = (item) => {
    console.log(cart.filter(product => product.itemId !== item.itemId));
    setCart([...cart, item]);

    return console.log(cart);
  };

  const [disableButton, setDisableButton] = useState(false)

  const remove_single = (itemId) => {
    cart.filter(value => value.itemId != itemId)
  }

  const openNotificationWithIcon = type => {
    notification[type]({
      style: {
        color: '#1DA57A',
        fontWeight: 'bold',
        opacity: 0.9,
        cursor: 'pointer',
      },
      placement: 'topRight',
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };


  return (
    <Card className="oneProductCard" key={props.itemId}>
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
          twoToneColor="#52c41a"
        />}
        type='primary'
        size='small'
        className={`w-8 mt-2 ml-40 ${opacity}`}
        shape='circle'
      />

      <img src={props.itemImage} className="oneProductCard_MainPic" />
      <h3 className="ProductCard_MainTitle">{props.itemName}</h3>
      <p className="ProductCard_Description">{props.itemPrice}</p>
      <div className="ProductCard_Additional_Info">
        <p className="ProductCard_Additional_Info_time">
          {/* {data.infoTime} */} {props.itemDescription}
        </p>
        <div className="ProductCard_Additional_Info_ratings">
          <img
            className="ProductCard_Additional_Info_ratings_star"
            src="../../../Star.png"
          />
          <p className="ProductCard_Additional_Info_ratings_txt">
            {/* {data.infoRatingsText} */} 4.2+
                    </p>
          <p className="ProductCard_Additional_Info_ratings_text2">
            {/* {data.infoRatingsText2} */} (200)
                    </p>
        </div>
      </div>
    </Card>
  );
}

export default oneProductCard