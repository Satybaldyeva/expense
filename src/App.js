import { useState } from 'react'
import './App.css'
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/new-expense/NewExpense'

function App() {
	const [expenses, setExpenses] = useState([])
	// state, setState
	const addNewExpenseHandler = (newExpense = {}) => {
		setExpenses((prevExpenses) => {
			return [...prevExpenses, newExpense]
		})
	}

	return (
		<div>
			<NewExpense onAddNewExpense={addNewExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	)
}

export default App

// Props => children, function props
// Understanding React State, Why do we need them?
// useState hook | What is hook? | What useState hook returns?
// What is difference between render and re-render?
// What is setState function used for? || Arguments: callback || newValue
// Why we should change state via setState function?
// Infinity render loop, why this happens?
// Lifting-up

// hook => useState, useEffect
