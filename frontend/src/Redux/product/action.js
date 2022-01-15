import axios from 'axios'
import { GET_PRODUCT_DETAILS_FAILURE, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_RESET, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from './actionTypes'


const getProductRequest = () => {
    return {
        type:GET_PRODUCT_REQUEST,
    }
}


const getProductSuccess = (data) => {
    return {
        type:GET_PRODUCT_SUCCESS,
        payload:data
    }
}

const getProductFailure = (error) => {
    return {
        type:GET_PRODUCT_FAILURE,
        payload:error
    }
}
const getProductDetailRequest = () => {
    return {
        type:GET_PRODUCT_DETAILS_REQUEST,
    }
}


const getProductDetailSuccess = (data) => {
    return {
        type:GET_PRODUCT_DETAILS_SUCCESS,
        payload:data
    }
}

const getProductDetailFailure = (error) => {
    return {
        type:GET_PRODUCT_DETAILS_FAILURE,
        payload:error
    }
}

const getProductDetailReset = () => {
    return {
        type:GET_PRODUCT_DETAILS_RESET,
    }
}



export const getProducts =  () => async dispatch => {
    dispatch(getProductRequest())
    try{
        const {data} = await axios.get('/api/products')
        dispatch(getProductSuccess(data))
    }
    catch(error) {
        dispatch(getProductFailure(error))
    }
}


export const getProductById =  (id) => async dispatch => {
    dispatch(getProductDetailRequest())
    try{
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch(getProductDetailSuccess(data))
    }
    catch(error) {
        dispatch(getProductDetailFailure(error))
    }
}


export const resetProductDetail = () => dispatch => {
    dispatch(getProductDetailReset())
}
