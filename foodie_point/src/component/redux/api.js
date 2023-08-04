import axios from "axios";
import { cordinates } from "./action";

export const updateCords=(city)=>async(dispatch)=>{
await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0283978172435ad5118d34fc15a1afe4`).then(({data})=>{
    // console.log(data.coord)
    dispatch(cordinates(data.coord));
})

    
}