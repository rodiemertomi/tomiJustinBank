import React, { useState, useEffect } from 'react'
import { formatPrice } from '../helpers'

const AdminDeposit = () => {
	const [userName1, setUserName1] = useState('')
	const [amount, setAmount] = useState(0)
	const [users, setUsers] = useState([])
	// const [user, setUser] = useState('')
	const userObj = JSON.parse(localStorage.getItem(`${userName1}`))

	const sendTo = (username1, peso) => {
		if (peso < 0 || peso === 0) {
			alert('Amount cannot be less than or equal to zero.')
		} else {
			userObj.balance += parseInt(peso * 100)
			localStorage.setItem(`${username1}`, JSON.stringify(userObj))
			alert(`${formatPrice(amount)} deposited to ${userName1}`)

			setUserName1('')
			setAmount(0)
		}
	}

	const checkUser = event => {
		event.preventDefault()
		if (userName1 !== '' && amount !== null && amount !== 0) {
			if (userObj !== null) {
				sendTo(userName1, amount)
			} else {
				alert(`${userName1} does not exist.`)
			}
		} else {
			alert(`Fields cannot be empty.`)
		}
	}

	useEffect(() => {
		let updatedUsers = []
		getUserKeys(updatedUsers)
		setUsers(updatedUsers)
	}, [])

	const getUserKeys = updatedUsers => {
		for (let i = 0; i < localStorage.length; ++i) {
			updatedUsers.push(localStorage.key(i))
		}
	}
	return (
		<div>
			<form className='deposit-form'>
				<h1>Deposit Form</h1>
				<label className='labels'>To:</label>
				<select
					value={userName1}
					onChange={e => {
						setUserName1(e.target.value)
					}}
				>
					{users.map(item => (
						<option key={Date.now} value={`${item}`}>
							{`${item}`}
						</option>
					))}
				</select>
				<label className='labels'>Amount:</label>
				<input
					type='number'
					className='inputs'
					placeholder='Enter Amount'
					onChange={e => {
						setAmount(e.target.value)
					}}
				/>
				<button type='submit' className='buttons' onClick={checkUser}>
					Deposit
				</button>
			</form>
		</div>
	)
}

export default AdminDeposit
