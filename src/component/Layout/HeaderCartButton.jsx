import React,{useContext} from 'react';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context'
const HeaderCartButton=(props)=>{
    const {items}=useContext(CartContext)
    const amt=items.reduce((prev,item)=>{
        return prev+item.amount
    },0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <i class="fas fa-cart-plus"></i>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{amt}</span>
      </button>
    )
}
export default HeaderCartButton