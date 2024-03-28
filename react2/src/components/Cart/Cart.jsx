import React from 'react'
import './Cart.css'


const Cart = ({ image, title,price }) => {
  
    return (
        <div className='cart'>
            <img src={image} alt="image product" />
            <p className='cart_name'>{title}</p>
            <p className='cart_price'>{price} $</p>
            <button className='cart_add'>Add to cart</button>
        </div>
    )
}

export default Cart