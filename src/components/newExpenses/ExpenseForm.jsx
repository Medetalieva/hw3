import './ExpenseForm.css'
import React, { useState } from 'react';


const ExpenseForm = () => {
    const [userInput,setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    })



    const titleChangeHandler = (event) =>{
        setUserInput((prevState) => {
            return{
                ...prevState,
                title: event.target.value
            }
        })
    };
    const amountChangeHandler = (event) =>{
        setUserInput ((prevState) => {
           return {
            ...prevState,
            amount: event.target.value
           }
        })  
    };
    const dateChangeHandler = (event) =>{
        setUserInput((prevState) => {
           return {
            ...prevState, 
            date:event.target.value
           }
        })  
    };

    

    const submitHandler = (event) => {
        event.preventDefault( )
        console.log(userInput.title);
        console.log(userInput.amount);
        console.log(userInput.date);
    };



    return(
        <form onSubmit={submitHandler}>
         <div className='new-expense__controls'>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text"
                     onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                     name='amount' 
                     type="number" 
                     min={"1"} 
                     id="1"
                      onChange={amountChangeHandler}  
                      />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input name='date'
                     type="date" 
                     min='2023-01-01' 
                     max={'2026-01-01'}
                      onChange={dateChangeHandler} 
                      />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
            </div>
        </form>
    );
};
export default ExpenseForm;
