import styles from "./Styles/CartItem.module.css";
import { Link } from "react-router-dom";
import {BsFillTrashFill} from "react-icons/bs"

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className={styles.cartitem}>
      <div className={styles.cartitem__image}>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item._id}`} className={styles.cartItem__name}>
        <p>{item.name}</p>
      </Link>
      <p className={styles.cartitem__price}>${item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item._id, e.target.value)}
        className={styles.cartItem__select}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className={styles.cartItem__deleteBtn}
        onClick={() => removeHandler(item._id)}
      >
        <BsFillTrashFill />
      </button>
    </div>
  );
};

export default CartItem;