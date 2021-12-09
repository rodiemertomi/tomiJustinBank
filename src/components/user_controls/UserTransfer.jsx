import React, { useState } from 'react'
import { formatPrice } from '../helpers'

const UserTransfer = ({ userobj1 = {} }) => {
	const [user2, setUser2] = useState('')
	const [amount, setAmount] = useState(0)

	const sendFromTo = event => {
		event.preventDefault()

		if (user2 !== null && amount !== 0 && amount !== null) {
			const userobj2 = JSON.parse(localStorage.getItem(`${user2}`))
			if (userobj2 !== null) {
				if (checkBalance(userobj1.balance)) {
					userobj1.balance = userobj1.balance - parseInt(amount * 100)
					localStorage.setItem(`${userobj1.username}`, JSON.stringify(userobj1))
					userobj2.balance = userobj2.balance + parseInt(amount * 100)
					localStorage.setItem(`${user2}`, JSON.stringify(userobj2))
					alert(
						`${userobj1.username} deposited ${formatPrice(amount * 100)} to ${
							userobj2.username
						}`
					)
				} else {
					alert(`${userobj1.username} has insufficient funds`)
				}
			} else {
				alert(`${userobj2.username} does not exist.`)
			}
		} else {
			alert(`Fields cannot be empty`)
		}
	}

	const checkBalance = balance => {
		if (balance >= amount) {
			return true
		} else {
			return false
		}
	}

	return (
		<div>
			<form className='transfer-form'>
				<h1>Transfer from: {`${userobj1.username}`}</h1>
				<label className='labels'>Transfer to:</label>
				<input
					type='text'
					className='inputs'
					placeholder='Enter Username'
					onChange={e => {
						setUser2(e.target.value)
					}}
				/>
				<label className='labels'>Amount:</label>
				<input
					type='number'
					className='inputs'
					placeholder='Enter Amount'
					onChange={e => {
						setAmount(e.target.value)
					}}
				/>
				<button type='submit' className='buttons' onClick={sendFromTo}>
					Transfer
				</button>
			</form>
		</div>
	)
}

export default UserTransfer
