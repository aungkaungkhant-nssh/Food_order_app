import React,{useState} from 'react'
import { useRef } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
function MealItemForm({id,onAddToCart}) {
    const [isValid,setIsValid]=useState(false);
    const inputRef=useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const enterAmount=+inputRef.current.value;
        if(enterAmount>5 || enterAmount<1 || enterAmount==0){
            setIsValid(true);
            return;
        }
        onAddToCart(enterAmount)
        
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Input 
            label="Amount"
            ref={inputRef}
            input={{
                id: 'amount_' + id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}/>
            <button>+ Add</button>
            {isValid&&<p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm
