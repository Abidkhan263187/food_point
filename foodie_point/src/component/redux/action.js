import { ADD_RESTR_INFO, ADD_TO_CART, CART_TOTAL, CITY_NAME, CLEAR_CART, DECREMENT, DELETE_CART_ITEMS, INCREMENT, LATITUDE, LONGITUDE, UPDATE_CORDS } from "./action_type"

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
    // console.log(payload)
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

export const addToCart=(payload)=>{

    return {
        type:ADD_TO_CART,
        payload
    }
}
export const addRestaurantInfo=(payload)=>{

return {
    type:ADD_RESTR_INFO,
    payload
}
}


export const clearCart=()=>{
    return{
        type:CLEAR_CART
    }
}

export const cartTotal=()=>{
    return{
        type:CART_TOTAL
    }
}
export const decreItem=(payload)=>{
   
    return {
        type:DECREMENT,
        payload
    }
}
export const increItem=(payload)=>{
   
    return {
        type:INCREMENT,
        payload
    }
}

export const removeCartItem=(payload)=>{
   return {
     type:DELETE_CART_ITEMS,
    payload
   }
}