import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { Card, Spinner } from 'react-bootstrap';
import { RestroCard } from './RestroCard';
import { setLatitude, setLongitude } from '../redux/action';
import { MdLocationPin } from "react-icons/md";
import { Footer } from './Footer';
export const Restaurant = () => {
  const [hotels, sethotels] = useState([])
  const dispatch = useDispatch()
  const { lati, long, city } = useSelector((store) => {
    return store
  })

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(latitude, longitude);
          dispatch(setLatitude(latitude))
          dispatch(setLongitude(longitude))
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    (async () => {

      try {
        // console.log("updated", lati, long)
        let restaurants_api = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lati}&lng=${long}&page_type=DESKTOP_WEB_LISTING`;
        const response = await axios.get(restaurants_api);

        const data = response.data.data?.cards;
        if (data) {
          const elements = data.filter(
            (card) => card.card?.card?.gridElements?.infoWithStyle.restaurants
          );
       
          // console.log(elements[0]);

          const restroData =elements[0].card.card.gridElements.infoWithStyle.restaurants;
          sethotels(restroData)
          // console.log(restroData)
        }
        
      } catch (error) {
  console.log(error,"error while fetching")

      }
    })()
  }, [lati, long])





  return (
    <>
    <div className=' main-scroll-restaurants mt-3'>
      {city != "" ? (<div>
        <MdLocationPin style={{ color: "green", fontSize: "larger" }} />
        <h2> {city} </h2>
      </div>) : (
        <div>
          <MdLocationPin style={{ color: "green", fontSize: "larger" }} />
          <h2> Search food in your own city</h2>
        </div>
      )}

      {hotels && hotels.length > 0 ? (<><div className='row main-scroll-restaurants ' style={{ padding: "10px 30px" }}>
          <RestroCard hotels={hotels} />
        </div><Footer /></>
      ) : <Spinner animation="border" variant="danger" />}
    </div></>
  )
}
