import React, { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import styles from "./Home.module.css"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { getProducts } from '../Redux/product/action'
import {ImSpinner11} from "react-icons/im"


const Home = () => {
    const dispatch = useDispatch()
    const {products,isLoading,isError} = useSelector(state => state.listProduct,shallowEqual)

    useEffect(() => {
        dispatch(getProducts())
    },[])

    return (
        <div className={styles.homescreen}>
                {isLoading ? <div  ><ImSpinner11 className={styles.loading} size="40px"/></div>: isError ? <div>Something went wrong</div> :
                 (<div >
                     <h2 className={styles.homescreen__title}>Latest Products</h2>
                     <div className={styles.homescreen__products}>
                      {products?.map(item => (
                        <div key={item._id}>
                            <ProductCard {...item}/>
                        </div>
                    ))}
                    </div>
                </div>
                )}
            </div>
    )
}

export default Home
