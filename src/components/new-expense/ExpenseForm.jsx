import React, { useState } from 'react'
import FormInput from '../UI/input/FormInput'
import Button from '../UI/button/Button'
import './ExpenseForm.css'

const ExpenseForm = ({ onCloseForm, onAddNewExpense }) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState(0)
	const [date, setDate] = useState('')

	const isFormValid = 
	   title.trim().length !==0 &&
	   amount.trim().length !==0 &&
	   date.trim().length !==0

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
		if (isFormValid) {
			const expense = {
				date: new Date(date),
				title,
				amount: Number(amount),
				id: Date.now().toString(),
			}
		
		
		   onAddNewExpense(expense)
		   setTitle('')
		   setAmount('')
		   setDate('')
		   onCloseForm()
		} else {
			alert ('Заполните все поля!')
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
			<FormInput
				onChange={titleChangeHandler}
				label={'Заголовок'}
				inputType='text'
				value = {title}
			/>
			<FormInput
				onChange={amountChangeHandler}
				label={'Количество'}
				inputType='number'
				value = {amount}
			/>
			<FormInput
				onChange={dateChangeHandler}
				label={'Датировать'}
				inputType='date'
				value = {date}
			/>
			</div>

			<div className='new-expense__action'>
			<Button type='button' onClick={onCloseForm}>
				Отмена
			</Button>
			<Button type='submit'>Добавить расходы</Button>
			</div>
			
		
		</form>
	)
}

export default ExpenseForm
