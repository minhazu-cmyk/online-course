import React from 'react';
import courses from '../fake data/Information';
import { useState } from 'react';
import Body from '../body/Body';
import Cart from '../cart/Cart';
import "./Course.css"

const Course = () => {
   const[user, setUser]=  useState(courses);
   const[cart, setCart] = useState([]);

   const handleAdded = (product)=>{
     const newCart= [...cart, product]
     setCart(newCart);
   }
   
    return (
        <div className="container">

            <div>
        { 
            user.map(x=><Body item={x} handleAdded={handleAdded}></Body>)
       }
       </div>

      <div>
       <Cart cart={cart}></Cart>
       </div>

        </div>
    );
};

export default Course;