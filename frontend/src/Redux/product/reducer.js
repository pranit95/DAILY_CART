import { GET_PRODUCT_DETAILS_FAILURE, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_RESET, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"


const getProductState = {
    products:[],
    isLoading:false,
    isError:false
}   


export const getProductReducer = (state = getProductState,{type,payload}) => {
    switch(type){
        case GET_PRODUCT_REQUEST:{
            return {
                ...state,
                isLoading:true
            }
        }

        case GET_PRODUCT_SUCCESS:{
            return {
                ...state,
                isLoading:false,
                products:payload
            }
        }

        case GET_PRODUCT_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        
        default:
            return state
    }
}


const getProductDetailState = {
    product:{},
    isLoading:false,
    isError:false
}   


export const getProductDetailReducer = (state = getProductDetailState,{type,payload}) => {
    switch(type){
        case GET_PRODUCT_DETAILS_REQUEST:{
            return {
                ...state,
                isLoading:true
            }
        }

        case GET_PRODUCT_DETAILS_SUCCESS:{
            return {
                ...state,
                isLoading:false,
                product:payload
            }
        }

        case GET_PRODUCT_DETAILS_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        
        case GET_PRODUCT_DETAILS_RESET:{
            return {
                ...state,
                product:{}
            }
        }
        default:
            return state
    }
}