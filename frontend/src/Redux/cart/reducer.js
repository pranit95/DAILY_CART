import { loadData, saveData } from "../../Utils/localStorage"
import {ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAILURE, REMOVE_FROM_CART} from "./actionTypes"


const initState = {
    cartItem:loadData('product') || [],
    isLoading:false,
    isError:false
}
export const cartReducer = (state = initState,{type,payload}) => {
    switch(type){
        case ADD_TO_CART_REQUEST:{
            return {
                ...state,
                isLoading:true
            }
        }

        case ADD_TO_CART_SUCCESS:
            const item = payload;
      
            const existItem = state.cartItem.find((x) => x._id === item._id);
      
            if (existItem) {
                const newData = state.cartItem.map((x) => x._id === existItem._id ? item : x)
                saveData('product',newData)
              return {
                ...state,
                isLoading:false,
                cartItem: newData
              };
            } else {
                const oldData = [...state.cartItem, item]
                saveData('product',oldData)
              return {
                  ...state,
                isLoading:false,
                cartItem: oldData
              };
            }
        
            case ADD_TO_CART_FAILURE:{
                return {
                    ...state,
                    isLoading:false,
                    isError:true
                }
            }
        case REMOVE_FROM_CART:{
            const updatedData = state.cartItem?.filter(item => item._id !== payload.id)
            return {
                ...state,
                cartItem:updatedData
            }
        }
        default:
            return state
    }
}