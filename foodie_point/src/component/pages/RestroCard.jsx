import React from 'react'
import { Card } from 'react-bootstrap';
import { IoStar } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const restroImgUrl =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

let AlternateMenuImg = "c:\Users\a\Desktop\Interview_practice\Mock\Bootstrap\project\Foodie-react-app-main\src\img\food-alternate-img.jpg"
export const RestroCard = ({ hotels }) => {
const navigate=useNavigate()

  const HotelMenue = (id) => {
    navigate(`/hotelMenue/${id}`);
  };
  return (
    <div className="row" style={{ padding: "5px 10px" }}>
      {hotels && hotels.length > 0 && hotels.map(({ info }) => {
        const {
          name,
          id,
          cuisines,
          avgRating,
          costForTwo,
          cloudinaryImageId,
          sla,
        } = info;
        return (
          <div key={id} className="col-md-6 col-lg-3 mb-4">

            <div className="custom-card"   onClick={() => HotelMenue(id)}>
              <Card.Img variant="top" style={{borderRadius:"5px"}} src={
                cloudinaryImageId
                  ? restroImgUrl + cloudinaryImageId
                  : AlternateMenuImg
              } />
              <Card.Body className='mb-4'>
                <Card.Title className="display-12 mt-3" >{name}</Card.Title>
                <Card.Text className="small text-muted" >
                  {cuisines && cuisines.join(", ")}  </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center small gap-4">
                <div  className="d-flex justify-content-center align-items-center gap-1">
                  <p style={{marginTop:"5px"}}><IoStar style={{color:"green",}} /></p>
                  <p className="mb-1">{avgRating}</p>
                </div>
                <span style={{ color: 'orangered',fontWeight:"600" }} className="text-uppercase ">
                  {sla?.slaString}
                </span>
                <span className="text-uppercase">{costForTwo && costForTwo}</span>
              </Card.Footer>
            </div>
          </div>

        )
      })}
    </div>
  )
}
