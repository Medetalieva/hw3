import React from "react";
import {ExpenseItem} from "./ExpenseItem"
import Card from "../ui/Card";
import './Expenses.css'

const Expenses = (props) => {
    return (
        <Card className = 'expenses'>
            {props.expense.map((el) => {
               return (
               <ExpenseItem 
               key={el.id} 
               title = {el.title} 
               date={el.date}
               amount ={el.amount}/>
               );
            })}
    </Card>
  );
};

export default Expenses;