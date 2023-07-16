import React from 'react'

const ExpenseItem = ({ date, title, amount }) => {
	return (
		<li>
			<p>{date}</p>
			<p>{title}</p>
			<p>{amount}</p>
		</li>
	)
}

export default ExpenseItem
