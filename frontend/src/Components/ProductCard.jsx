import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Styles/ProductCard.module.css"

const ProductCard = ({description,name,price,countInStock,imageUrl,_id}) => {
    return (
        <div className={styles.product}>
             <img src={imageUrl} alt={name}/>
             <div className={styles.product__info}>
                 <p className={styles.info__name}>{name}</p>
                 <p className={styles.info__description}>
                     {description.substring(0,100)}...
                 </p>
                 <p className={styles.info__price}>${price}</p>
                 <Link to={`/product/${_id}`} className={styles.info__button}>View</Link>
             </div>
        </div>
    )
}

export default ProductCard
