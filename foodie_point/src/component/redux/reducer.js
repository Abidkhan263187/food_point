import { ADD_RESTR_INFO, ADD_TO_CART, CART_TOTAL, CITY_NAME, CLEAR_CART, DECREMENT, DELETE_CART_ITEMS, INCREMENT, LATITUDE, LONGITUDE, UPDATE_CORDS } from "./action_type"

const initVal = {
    lati: '',
    long: '',
    city: '',
    cartItemsCount: 0,
    total: 0,
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    restaurantInfo: JSON.parse(localStorage.getItem('restaurantInfo')) || []
}
export const reducer = (store = initVal, action) => {

    switch (action.type) {
        case LATITUDE: {
            return { ...store, lati: action.payload }
        }
        case LONGITUDE: {
            return { ...store, long: action.payload }
        }
        case UPDATE_CORDS: {
            return { ...store, lati: action.payload.lat, long: action.payload.lon }
        }
        case CITY_NAME: {
            return { ...store, city: action.payload }
        }
        case ADD_TO_CART: {
            const itemExists = store.cartItems.some(item => item.id === action.payload.id);
        
            if (itemExists) {
                alert("Item already exists in the cart");
                return { ...store };
            } else {
                const updatedCartItem = { ...action.payload, itemCount: 1 };
                const updatedCartItems = [...store.cartItems, updatedCartItem];
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
                return { ...store, cartItems: updatedCartItems };
            }
        }
        

        case ADD_RESTR_INFO: {
            const restaurantInfo = action.payload;
            localStorage.setItem('restaurantInfo', JSON.stringify(restaurantInfo));
            return { ...store, restaurantInfo: restaurantInfo }
        }

        case CLEAR_CART: {
            localStorage.setItem('restaurantInfo', JSON.stringify([]))
            localStorage.setItem('cartItems', JSON.stringify([]));
            return { ...store, cartItems: [], restaurantInfo: [] }
        }
        case CART_TOTAL: {
            let { quantity, total } = store.cartItems.reduce((cartTotal, cartItem) => {
                // console.log(cartItem)
                const { price, itemCount } = cartItem;
                const itemTotal = (price / 100) * itemCount;

                cartTotal.total += itemTotal;
                cartTotal.quantity += itemCount;

                return cartTotal;
            }, { quantity: 0, total: 0, });
            return { ...store, cartItemsCount: quantity, total: total };
        }

        case INCREMENT: {
            const itemIdx = store.cartItems.findIndex((item) => item.id === action.payload.id);

            if (itemIdx !== -1) {
                store.cartItems[itemIdx].itemCount += 1;
            } else {
                const newItem = { ...action.payload, itemCount: 1 };
                store.cartItems.push(newItem);
            }
            localStorage.setItem('cartItems', JSON.stringify(store.cartItems));
            return { ...store };
        }

        case DECREMENT: {
            const itemIdx = store.cartItems.findIndex((elem) => elem.id === action.payload.id);

            if (itemIdx !== -1 && store.cartItems[itemIdx].itemCount > 1) {
                store.cartItems[itemIdx].itemCount -= 1;
                localStorage.setItem('cartItems', JSON.stringify(store.cartItems));
            }
            return { ...store };
        }
        case DELETE_CART_ITEMS:{
            const updated_array=store.cartItems.filter((item)=> item.id!=action.payload.id)
            store.cartItems=updated_array
            localStorage.setItem('cartItems', JSON.stringify(store.cartItems));
        }

        default: return store
    }

}