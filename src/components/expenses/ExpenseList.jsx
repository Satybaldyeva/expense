import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ expenses = [] }) => {
	return (
		<ul>
			{expenses.map((expense) => {
				return <ExpenseItem {...expense} />
			})}
		</ul>
	)
}

export default ExpenseList
