import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from "./Styles/SideDrawer.module.css"
import {useSelector} from "react-redux"

const SideDrawer = ({show,click}) => {
    // let sideDrawerClass = ["sidedrawer"]
    const cart = useSelector((state) => state.cart);
    const { cartItem } = cart;
  
    const getCartCount = () => {
      return cartItem.reduce((qty, item) => Number(item.qty) + qty, 0);
    };
  
    return show && (
        <div className={show ? styles.show : styles.sidedrawer}>
            <ul className={styles.sidedrawer__links} onClick={click}>
                <li>
                    <Link to="/cart">
                        <FaShoppingCart/>
                        <span>
                            Cart
                            <span className={styles.sidedrawer__cartbadge}>{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
            
        </div>
    )
}

export default SideDrawer


//   const sideDrawerClass = ["sidedrawer"];

  

//   if (show) {
//     sideDrawerClass.push("show");
//   }

//   return (
//     <div className={sideDrawerClass.join(" ")}>
//       <ul className="sidedrawer__links" onClick={click}>
//         <li>
//           <Link to="/cart">
//             <i className="fas fa-shopping-cart"></i>
//             <span>
//               Cart{" "}
//               <span className="sidedrawer__cartbadge">{getCartCount()}</span>
//             </span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/">Shop</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };
