import {  ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, REMOVE_FROM_CART } from './actionTypes'
import axios from 'axios'

const addToCartRequest = () => {
    return {
        type:ADD_TO_CART_REQUEST,
    }
}
const addToCartSuccess = (data) => {
    return {
        type:ADD_TO_CART_SUCCESS,
        payload:data
    }
}
const addToCartFailure = (error) => {
    return {
        type:ADD_TO_CART_FAILURE,
        payload:error
    }
}

export const addtoCart = (id,qty) => async dispatch => {
    dispatch(addToCartRequest())
    try{
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch(addToCartSuccess({...data,qty}))
    }
    catch (error) {
        dispatch(addToCartFailure(error))
    }
}

const removeFromCartItem = (id) => {
    return {
        type:REMOVE_FROM_CART,
        payload:{
            id
        }
    }
} 

export const removeFromCart = (id) => (dispatch,getState) => {
    
    dispatch(removeFromCartItem(id))
    localStorage.setItem("product", JSON.stringify(getState().cart.cartItem));
}




