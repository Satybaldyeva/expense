import React from 'react'
import ExpenseList from './ExpenseList'

const Expenses = ({ expenses = [] }) => {
	return (
		<div>
			<ExpenseList expenses={expenses} />
		</div>
	)
}

export default Expenses
