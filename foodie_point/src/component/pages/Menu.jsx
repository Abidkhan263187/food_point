import React from 'react'
import { useParams, NavLink } from "react-router-dom";
import { HotelMenue } from './HotelMenue'
import { IoStar } from 'react-icons/io5';

export const Menu = () => {
    const { id } = useParams();
    console.log(id)
    const { menu, restaurantInfo, menuError } = HotelMenue(id)

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
    return  (
        name && (
            <div className="container">
    <div className="row justify-content-center">
      <div className="row-md-6  mt-4 p-2" style={{border:"1px solid rgb(226, 223, 223) ",borderRadius:"10px"}}>
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
                <div  className="d-flex justify-content-center align-items-center">
                  <div style={{color:"green"}} className="bg-slate-200 px-2 rounded d-flex justify-content-center align-items-center gap-1" >
                    <IoStar style={{color:"green"}} className="color-green" />
                    <p style={{color:"green",fontWeight:"600"}} className="text-green-700 font-bold m-0">{avgRating}</p>
                  </div>
                  <p className="m-2">({totalRatingsString})</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className=" col-sm-2 col-md-4 col-lg-2 ">
            <div className="d-flex justify-content-evenly align-items-center"
             style={{ borderRadius:"10px",backgroundColor:" rgb(226, 223, 223)",padding:"0px 6px"}}>
            <i className="fa-solid fa-clock"></i>
              <p className="font-bold m-2 text-danger font-weight-bold"><strong>{sla?.slaString}</strong></p>
              <p className="font-bold m-2">
              <i style={{color:"green"}} className="fa-solid fa-indian-rupee-sign"></i><strong> {costForTwo && costForTwo / 100}</strong> 
              </p>
            </div>
          </div>
        </div>

        {/* finish */}
      </div>
    </div>
  </div>
          )
    )
        }
      

