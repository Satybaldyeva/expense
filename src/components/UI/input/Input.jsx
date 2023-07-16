import React from 'react'
import './Input.css'

export const Input = ({ type, ...rest }) => {
	return <input {...rest} type={type}></input>
}
