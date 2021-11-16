import React from 'react'
import classes from './MealItem.module.css'
function MealItem({name,description,price}) {
    const p=`$${price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{p}</div>
            </div>
        </li>
    )
}

export default MealItem
