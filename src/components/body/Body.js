import React from 'react';
import "./Body.css";
import { Button } from 'react-bootstrap';
const Body = (props) => {
    const {name,price} = props.item;
    const handleAdded = props.handleAdded;
    return (
        <div className='text-center'>
           <div className="main-text">
           <h3>{name}</h3> 
           <h5>{price}</h5>
           <Button variant="primary" onClick={()=>handleAdded(props.item)}>Enroll now</Button>
            </div>
        </div>
    );
};

export default Body;
