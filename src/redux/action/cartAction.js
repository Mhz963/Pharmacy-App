import {ADD_TO_CART, ADD_TO_MY_ORDERS} from '../actiontypes/cartTypes';

export const add_cart = (cartProduct) => dispatch => {
    dispatch({type: ADD_TO_CART, cartData: cartProduct});
};

export const add_my_order = (myOrdersInfo) => dispatch => {
    dispatch({type: ADD_TO_MY_ORDERS, myOrders: myOrdersInfo});
};
