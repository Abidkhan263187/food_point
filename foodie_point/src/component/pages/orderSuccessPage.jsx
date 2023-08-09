import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 


export const OrderSuccessPage = () => {
  return (
    <div className="container text-center mt-2">
      <h1>Order Successful</h1>
      <p className="text-muted">Your order has been successfully placed. Thank you for shopping with us!</p>

      <img src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="Order Success" className="img-fluid w-50 smaller-image" />

      <div >
        <Link to="/" >
            <Button  variant="outline"  style={{backgroundColor:"#198754",color:"white"}}> Continue Shopping</Button>
         
        </Link>
      </div>
    </div>
  );
};


