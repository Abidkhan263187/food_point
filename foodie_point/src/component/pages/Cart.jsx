import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, NavLink } from "react-router-dom";
import { BsFillCartFill, BsFillRupeeFill, BsHeartFill, BsXCircleFill } from 'react-icons/bs';
import { addToCart, cartTotal, clearCart, decreItem, increItem, removeCartItem } from '../redux/action'
import AlternateMenuImg from "../images/food-alternate-img.jpg";
import CartImg from "../images/cart-img.webp";
import { BiRupee } from 'react-icons/bi';

const restroImgUrl = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
const menuImgUrl = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";


export const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [flag, setFlag] = useState(false)
  const { restaurantInfo, cartItems, total } = useSelector((store) => store)

  const handleIncre = (item) => {
    dispatch(increItem(item))
    setFlag(!flag)
  }

  const handleDecre = (item) => {
    dispatch(decreItem(item))
    setFlag(!flag)
  }
const handleDelete=(item)=>{
  dispatch(removeCartItem(item))
  setFlag(!flag)
}

  useEffect(() => {
    dispatch(cartTotal());
  }, [cartItems, flag])
  return (
    <div className="container mt-4">
      {cartItems.length > 0 ? (
        <div className="row">
          <div className="  col-lg-8 ">
            {cartItems.map((item) => (
              <><div className=" d-flex mb-2 align-items-center" key={item.id} >
                <div className="w-25">
                  <img
                    src={item.imageId ? menuImgUrl + item.imageId : AlternateMenuImg}
                    className=" img-fluid rounded"
                    alt="menu" 
                    id="cartOrderImg"/>
                </div>
                <div id="name_price_cart" className="w-50  d-flex justify-content-evenly">
                  <strong> <p className="mb-2 text-base text-danger">{item.name}</p></strong>
                  <div className="d-flex font-weight-bold">
                    <BiRupee className="menu-price-icon mt-1" style={{ color: "green" }} />
                    <strong> {item.price / 100 || 200}</strong>
                  </div>
                </div>
                <div >
                  <div className="btn-group" role="group">
                    <button
                   
                      disabled={item.itemCount === 1}
                      className="btn btn-outline-success  rounded "
                      onClick={() => handleDecre(item)}
                    >
                      -
                    </button>
                    <span className="btn ">    <strong> {item.itemCount} </strong></span>
                    <button
                  
                      className="btn btn-outline-success rounded   " 
                      onClick={() => handleIncre(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="d-md-flex transition-all hover-text-red-600 cursor-pointer p-2 rounded my-auto">
                  <button
                    className="btn btn-link text-decoration-none"
                    onClick={() => handleDelete(item)}
                  >
                    <span className="text-orange">
                      <BsXCircleFill className="fs-4" style={{ color: '#e03a00' }} />
                    </span>
                  </button>
                </div>
              </div><hr /></>
            ))}
          </div>
        

          <div className="col-lg-4">
            <div className="bg-green-100 p-4 text-center rounded shadow">
              <div className="mb-2">
                <img
                  src={restroImgUrl + restaurantInfo.cloudinaryImageId}
                  className="img-fluid rounded shadow h-14"
                  alt="restro"
                />
                <div className="text-left">
                  <p className="mb-1 font-bold">{restaurantInfo.name}</p>
                  <p className="mb-0 text-sm">
                    {restaurantInfo.areaName}, {restaurantInfo.city}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <strong>  <p className="mb-0">Total</p></strong>
                <div className="d-flex align-items-center">
                  <BiRupee className="menu-price-icon " style={{ color: "green" }} />
                  <strong>{total.toFixed(0)}</strong>
                </div>
              </div>
              <button
                className="btn btn-success mt-3"
                onClick={() => alert('Order Successful')}
              >
                Checkout
              </button>
            </div>

            <div className="mt-3 d-flex gap-3">
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => navigate('/restaurant')}
              >
                Order More
              </button>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" className="img-fluid md:w-30" alt="cart" />
          <p className="mb-2 text-xl font-bold text-success">Order you favroute meal!</p>
          <button className="btn btn-success btn-sm">
            <NavLink to="/restaurant" className="nav-link">
              hurry up  Order now !
            </NavLink>
          </button>
        </div>
      )}

    </div>
  )
}
