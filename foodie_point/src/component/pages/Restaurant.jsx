import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import {  Spinner } from 'react-bootstrap';
import { RestroCard } from './RestroCard';
import { setLatitude, setLongitude } from '../redux/action';
import { MdLocationPin } from "react-icons/md";
import { Footer } from './Footer';
import { cityName } from '../redux/action';
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
          // console.log(position)
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          // console.log(latitude, longitude);
          dispatch(setLatitude(latitude))
          dispatch(setLongitude(longitude))
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  const getCityName = async (latitude, longitude) => {
    if(latitude && longitude){
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_API_RESTAURANT}`);
      const { results } = response.data;
      //  console.log(results)
      let GetcityName = results[0].components.state_district
      let city = GetcityName.split(' ')[0];
      
      localStorage.setItem('city', JSON.stringify(city))
      dispatch(cityName(city))


    } catch (error) {
      console.log("Error while fetching city name:", error);
    }
  }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getCityName(lati, long);
  }, [lati, long]);

  useEffect(() => {
    (async () => {

      try {
        // console.log("updated", lati, long)
        let restaurants_api = `https://corsproxy.io/?${process.env.REACT_APP_SWIGGY}?lat=${lati}&lng=${long}&page_type=DESKTOP_WEB_LISTING`;
        const response = await axios.get(restaurants_api);

        const data = response.data.data?.cards;

        if (data) {
          const elements = data.filter(
            (card) => card.card?.card?.gridElements?.infoWithStyle.restaurants
          );

          // console.log(elements[0]);
        
          const restroData =
          elements[0].card.card.gridElements.infoWithStyle.restaurants;
            sethotels(restroData)
        }
        // else{
        //   dispatch(cityName("service not available in this city"))
        //  localStorage.setItem('city', JSON.stringify("service not available in this city"))
        //  }

      } catch (error) {
        console.log(error, "error while fetching")
     

      }
    })()
  }, [lati, long])





  return (
    <>
      <div className=' main-scroll-restaurants mt-3'>
        {city !== "" ? (<div style={{ textAlign: "end", paddingRight: "30px" }}>
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
