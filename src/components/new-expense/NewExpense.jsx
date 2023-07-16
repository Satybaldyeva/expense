import React, { useState } from 'react'
import Button from '../UI/button/Button'
import ExpenseForm from './ExpenseForm'

// hook == function

const NewExpense = ({ onAddNewExpense }) => {
	const [isFormShow, setIsFormShow] = useState(false)

	const showFormHandler = () => {
		setIsFormShow(true)
	}
	const closeFormHandler = () => setIsFormShow(false)

	return (
		<div style={{ background: '#AD9BE9', padding: '20px' }}>
			{isFormShow ? (
				<ExpenseForm
					onAddNewExpense={onAddNewExpense}
					onCloseForm={closeFormHandler}
				/>
			) : (
				<Button onClick={showFormHandler}>Добавить новый расход</Button>
			)}
		</div>
	)
}

export default NewExpense