import React from 'react'
import styles from "./Styles/Navbar.module.css"
import {Link, useHistory} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import {useSelector} from "react-redux"

const Navbar = ({click}) => {
    const cart = useSelector((state) => state.cart);
    const { cartItem } = cart;
    const history = useHistory()
  
    const getCartCount = () => {
      return cartItem.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const handleClick = ( ) => {
        history.push("/")
    }
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__logo} onClick={handleClick}>
                <img src="dailyCart.png" alt="Logo Cart" className={styles.logo__image}/>
                <h2>DailyCart</h2>
            </div>
            <ul className={styles.navbar__links}>
                <li>
                    <Link to="/cart" className={styles.cart__link}>
                        <span>
                            <FaShoppingCart size="30px" style={{marginRight:"10px"}}/>
                            Cart
                            <span className={styles.cartlogo__badge}>{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                {/* <li>
                    <Link to="/account" >
                        Login/Register
                    </Link>
                </li> */}
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
            <div className={styles.hamburger__menu} onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
