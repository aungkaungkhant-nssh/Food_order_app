import React, { useReducer } from 'react'
import CartContext from './cart-context'

const initialCartContext={
    items:[],
    totalAmount:0

}
const cartReducer=(state,action)=>{
        switch(action.type){
            case "ADD_ITEM":return {items:[...state.items,action.item],totalAmount:state.totalAmount+action.item.price*action.item.amount}
               
            default :return initialCartContext;
        }
}
const CartContextProvider=(props)=>{
    const [cartState,dispatch]=useReducer(cartReducer,initialCartContext)
    const addItemToCartHandler=(item)=>{
            dispatch({type:"ADD_ITEM",item:item})
    }
    const removeItemToCartHandler=(item)=>{
        
    }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;