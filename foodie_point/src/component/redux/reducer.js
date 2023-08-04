import { CITY_NAME, LATITUDE, LONGITUDE, UPDATE_CORDS } from "./action_type"

const initVal={
lati:'',
long:'',
city:''
}
export const reducer=(store=initVal,action)=>{

    switch(action.type){
        case LATITUDE:{
            return{...store,lati:action.payload}
        }
        case LONGITUDE:{
            return {...store,long:action.payload}
        }
        case UPDATE_CORDS:{
            return {...store,lati:action.payload.lat,long:action.payload.lon}
        }
        case CITY_NAME:{
            return{...store,city:action.payload}
        }
        default: return store
    }

}