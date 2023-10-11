import {ADD_TO_CART} from '../actiontypes/cartTypes';

const initialState = {
    cartData: [],
};
export default function commomReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartData: action.cartData,
            };
        default: {
            return state;
        }
    }
}
