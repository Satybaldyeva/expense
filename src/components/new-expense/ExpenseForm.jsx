import React, { useState } from 'react'
import FormInput from '../UI/input/FormInput'
import Button from '../UI/button/Button'

const ExpenseForm = ({ onCloseForm, onAddNewExpense }) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState(0)
	const [date, setDate] = useState('')

	const titleChangeHandler = (e) => {
		setTitle(e.target.value)
	}

	const amountChangeHandler = (e) => {
		setAmount(e.target.value)
	}

	const dateChangeHandler = (e) => {
		setDate(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		const expense = {
			date,
			title,
			amount,
		}
		onAddNewExpense(expense)
	}

	return (
		<form onSubmit={submitHandler}>
			<FormInput
				onChange={titleChangeHandler}
				label={'Заголовок'}
				inputType='text'
			/>
			<FormInput
				onChange={amountChangeHandler}
				label={'Количество'}
				inputType='number'
			/>
			<FormInput
				onChange={dateChangeHandler}
				label={'Датировать'}
				inputType='date'
			/>
			<Button type='button' onClick={onCloseForm}>
				Отмена
			</Button>
			<Button type='submit'>Добавить расходы</Button>
		</form>
	)
}

export default ExpenseForm
