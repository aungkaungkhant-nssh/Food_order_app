import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
function MealItem({name,description,price}) {
    const p=`$${price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{p}</div>
            </div>
            <MealItemForm />
        </li>
    )
}

export default MealItem
