
import './App.css';
// import Expense from './components/Expense';
 import {ExpenseItem} from './components/ExpenseItem';

function App() {
const expense = [
  {
    id:'el1',
    title:'Toilet Paper',
    date: new Date(2023, 4, 12),
    amount: 1.5
  },
  {
    id:'el2',
    title:'Car Insurance',
    date: new Date(2023, 2, 20),
    amount: 1.5
  },
]

  return (
    <div className="App">
      <ExpenseItem 
      title={expense[0].title}
      date={expense[0].date} 
      amount={expense[0].amount} 
      />

      <ExpenseItem 
      title={expense[1].title}
      date={expense[1].date} 
      amount={expense[1].amount} 
      />
    </div>
  );
}

export default App;












