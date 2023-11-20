import {ADD_TO_CART, ADD_TO_MY_ORDERS} from '../actiontypes/cartTypes';

const initialState = {
    cartData: [],
    myOrders: [],
};
export default function commomReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartData: action.cartData,
            };
        case ADD_TO_MY_ORDERS:
            return {
                ...state,
                myOrders: action.myOrders,
            };
        default: {
            return state;
        }
    }
}
