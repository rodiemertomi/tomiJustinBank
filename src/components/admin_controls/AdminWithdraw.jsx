import React, { useState } from 'react'

const AdminWithdraw = () => {
	const [userName, setUsername] = useState('')
	const [amount, setAmount] = useState(null)

	const handleWithdraw = () => {
		const user = JSON.parse(localStorage.getItem(`${userName}`))

		if (checkUser(userName)) {
			if (userName !== '' && amount !== null) {
				if (checkBalance(user)) {
					user.balance -= amount
					localStorage.setItem(`${userName}`, JSON.stringify(user))
					alert(`${userName} withdrew ${amount}`)
				} else {
					alert(`${userName} has insufficient balance.`)
				}
			} else {
				alert('Fields can not be empty.')
			}
		} else {
			alert(`${userName} does not exist.`)
		}
	}

	const checkUser = name => {
		if (localStorage.getItem(`${name}`) !== null) {
			return true
		} else {
			return false
		}
	}

	const checkBalance = user1 => {
		if (user1.balance >= amount) {
			return true
		} else {
			return false
		}
	}

	return (
		<div className='withdraw-form'>
			<h1>Withdraw Form</h1>
			<label className='labels'>Withdraw From:</label>
			<input
				type='text'
				className='inputs'
				placeholder='Enter Username'
				onChange={e => {
					setUsername(e.target.value)
				}}
			/>

			<label className='labels'>Amount</label>
			<input
				type='number'
				className='inputs'
				placeholder='Enter Amount'
				onChange={e => {
					setAmount(e.target.value)
				}}
			/>

			<button type='submit' onClick={handleWithdraw}>
				Withdraw
			</button>
		</div>
	)
}

export default AdminWithdraw
