import React from "react";
import ExpenseDate from "../expenses/ExpenseDate";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = () => {
    return <div className="new-expense">
  <ExpenseForm/>
    </div>
};

export default NewExpense;