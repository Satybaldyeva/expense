import React from 'react'
import { Input } from './Input'

const FormInput = ({ inputType = 'text', onChange, label, id, ...rest }) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<br />
			<Input id={id} type={inputType} {...rest} onChange={onChange} />
		</div>
	)
}

export default FormInput
