import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./cart/reducer";
import {getProductDetailReducer,getProductReducer} from "./product/reducer"

const rootReducer = combineReducers({
  cart:cartReducer,
  listProduct:getProductReducer,
  productDetail:getProductDetailReducer,
})  

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer,enhancer)


export {store}