import React, { useState } from 'react'
import { useParams, NavLink } from "react-router-dom";
import { HotelMenue } from './HotelMenue'
import Button from 'react-bootstrap/Button';
import { IoStar } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { MenueCard } from './MenueCard';

export const Menu = () => {
  const { id } = useParams();
  const { cartItems } = useSelector((store) => store);
  const dispatch = useDispatch();
  const { menu, restaurantInfo, menuError } = HotelMenue(id)
  const [menuSearchInput, setMenuSearchInput] = useState("");
  const {
    totalRatingsString,
    avgRating,
    city,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    isOpen,
    locality,
    name,
    sla,
  } = restaurantInfo;
  const restaurantImg = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`;
  return (
    name && (
      <div className="container">


            <div className="sticky-top pt-4">
              {cartItems.length > 0 && (
                <NavLink to="/cart" className='nav-link'>
                  <div className="bg-light rounded p-3">
                    <p className="m-0 text-center">
                      <strong >{cartItems.length} Items</strong> | <span  style={{color:"#008000" ,fontWeight:"700"}}>  View Cart</span>
                    </p>
                  </div>
                </NavLink>
              )}
            </div>
     
        <div className="row justify-content-center">
          <div className="row-md-6  mt-4 p-2" style={{ border: "1px solid rgb(226, 223, 223) ", borderRadius: "10px" }}>
            <div className="card border-0">
              <div className="row">
                <div className=" col-md-3 d-flex align-items-center  p-4" >
                  <img
                    src={restaurantImg}
                    alt={name}
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body" >
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text d-none d-md-block">{cuisines && cuisines.join(", ")}</p>
                    <p className="card-text">
                      {locality}, {city}
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div style={{ color: "green" }} className="bg-slate-200 px-2 rounded d-flex justify-content-center align-items-center gap-1" >
                        <IoStar style={{ color: "green" }} className="color-green" />
                        <p style={{ color: "green", fontWeight: "600" }} className="text-green-700 font-bold m-0">{avgRating}</p>
                      </div>
                      <p className="m-2">({totalRatingsString})</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div id="searchMenue" className="row d-flex justify-content-between  align-items-center" >
              <div className='  col-md-5 col-lg-3 d-flex justify-content-between  align-items-center' id="menueSearch" >
                <input id="inputMenueCArd" type="text" placeholder="add more items.. ..." onChange={(e) => setMenuSearchInput(e.target.value)} />&nbsp;&nbsp;
                <Button variant="success" >Search</Button>
              </div>
              <div className=" col-sm-2 col-md-4 col-lg-2 " id="price_time">
                <div className="d-flex justify-content-evenly align-items-center"
                  style={{ borderRadius: "10px", backgroundColor: " rgb(226, 223, 223)", padding: "0px 3px" }}>
                  <i className="fa-solid fa-clock"></i>
                  <p className="font-bold m-2 text-danger font-weight-bold"><strong>{sla?.slaString}</strong></p>
                  <p className="font-bold m-2">
                    <i style={{ color: "green" }} className="fa-solid fa-indian-rupee-sign"></i><strong> {costForTwo && costForTwo / 100}</strong>
                  </p>
                </div>
              </div>
            </div>


            {/* finish */}
          </div>
          
          <div class="main-scroll border-top mt-5">
            <div class="card">
              <div class="card-body">
                <MenueCard
                  menu={menu}
                  currentRestaurantInfo={restaurantInfo}
                  menuError={menuError}
                  menuSearchInput={menuSearchInput}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}


