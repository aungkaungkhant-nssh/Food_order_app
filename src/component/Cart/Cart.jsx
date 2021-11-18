import React,{useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
function Cart(props) {
    const {items,totalAmount}=useContext(CartContext);
    const cartItems=<ul className={classes["cart-items"]}>
        {
            items.map((cart)=><li>{cart.name}</li>)
        }
    </ul>
    return (
        <Modal onClick={props.onHideShow}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideShow}>Close</button>
                <button className={classes.button}>Order</button>
             </div>
        </Modal>
    )
}

export default Cart
