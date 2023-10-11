import {ADD_TO_CART} from '../actiontypes/cartTypes';

export const add_cart = (cartProduct) => dispatch => {
    dispatch({type: ADD_TO_CART, cartData: cartProduct});
};
