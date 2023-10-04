import axios from "axios";
import { cordinates } from "./action";
import { cityName } from "./action"; 

export const updateCords = (city) => async (dispatch) => {
 const apiKey=process.env.REACT_APP_API
 console.log(apiKey)
    if (city === "" || city === undefined) {
        let currCityName = JSON.parse(localStorage.getItem('city'))
        city = currCityName
        dispatch(cityName(city))
    }
 
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(({ data }) => {
        console.log(data.coord)
    
        dispatch(cordinates(data.coord));
    }).catch((err) => {
        dispatch(cordinates({
            lat: 28.6667,
            lon: 77.2167
        }));
        dispatch(cityName("service not available in this city"))
        localStorage.setItem('city', JSON.stringify("service not available in this city"))
    })


}