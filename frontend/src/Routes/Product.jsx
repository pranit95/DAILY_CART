import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { addtoCart } from '../Redux/cart/action'
import { getProductById } from '../Redux/product/action'
import styles from "./Product.module.css"
import {ImSpinner11} from "react-icons/im"

const Product = () => {
    const {id} = useParams()
    const [qty,setQty] = useState(1)
    const dispatch = useDispatch()
    const {isLoading,isError,product} = useSelector(state => state.productDetail,shallowEqual)
    const history = useHistory()

    useEffect(() => {
        dispatch(getProductById(id))
    },[id,dispatch])

    const handleClick = () => {
        dispatch(addtoCart(id,qty))
        history.push('/cart')
    }
    return (
        <div style={{ margin:"1rem auto"}}>
            {isLoading ? <div><ImSpinner11 className={styles.loading} size="40px"/></div> : isError ? <h2>Something went wrong</h2>:
            (<div className={styles.productscreen}>
                <div className={styles.productscreen__left}>
                    <div className={styles.left__image}>
                        <img src={product.imageUrl} style={{height:"400px"}} alt={product.name}/>
                    </div>
                    <div className={styles.left__info}>
                        <p className={styles.left__name}>{product.name}</p>
                        <p >Price: ${product.price}</p>
                        <p className={styles.left__description}>
                            Description: {product.description}
                        </p>
                    </div>
                </div>
                <div className={styles.productscreen__right}>
                    <div className={styles.right__info}>
                        <p >Price: <span>${product.price}</span></p>
                        <p>
                            Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
                        </p>
                        <p>
                            Qty
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                {new Array(product.countInStock).fill(0)?.map((count,index) => (
                                    <option key={index+1} value={index+1}>
                                        {index + 1}
                                    </option>
                                ))}
                            </select>
                        </p>
                        <p>
                            <button type="button" onClick={handleClick}>Add to Cart</button>
                        </p>
                    </div>
                </div>
                </div>)}
            </div>
    )
}

export default Product
