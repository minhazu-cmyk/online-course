import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const cart = props.cart;
  //  let total = 0;
  //  for (let i = 0; i <cart.length; i++) {
  //      const element = cart[i];
  //       total = total+element.price;
  //  }
  const total = cart.reduce((total,setTotal)=>total+Number(setTotal.price),0)

    return (
        <div className="cart-area">
          <h3>Your cart</h3>
          <h4>Add purchase:{cart.length}</h4>
          <h4> Total purchase: ${total.toFixed(2)}</h4>  
        </div>
    );
 };

export default Cart;