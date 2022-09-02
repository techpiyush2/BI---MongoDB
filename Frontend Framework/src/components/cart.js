import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart}) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="header2"><h3>You have Ordered:</h3>

    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
          </div>
          <div className="item-detail">
          <p className="title">{item.title}</p>
          <br></br>
          <p className="author">{item.author}</p>
          <p className="price">Price: Rs.{item.price}</p>

             </div>
            <div>
           
          </div>
          <div>
            <button className="button" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </article></div>
  );
};

export default Cart;
