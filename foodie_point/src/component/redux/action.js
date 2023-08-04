import { CITY_NAME, LATITUDE, LONGITUDE, UPDATE_CORDS } from "./action_type"

export const setLongitude=(payload)=>{
    return {
        type:LONGITUDE,
        payload
    }
}
export const setLatitude=(payload)=>{
    return {
        type:LATITUDE,
        payload
    }
}

export const  cordinates=(payload)=>{
    console.log(payload)
return {
    type:UPDATE_CORDS,
    payload
}
}

export const cityName=(payload)=>{
    return {
        type:CITY_NAME,
        payload
    }
}
