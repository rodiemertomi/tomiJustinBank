import React, { useState } from 'react'
import { formatPrice } from '../helpers'

const UserDeposit = ({ userobj }) => {
	const [amount, setAmount] = useState(0)

	const handleDeposit = () => {
		if (amount !== 0 && amount !== null) {
			amount < 0
				? alert('Amount can not be negative.')
				: (userobj.balance += parseInt(amount * 100))
			localStorage.setItem(`${userobj.username}`, JSON.stringify(userobj))
			alert(`${userobj.username} deposited ${formatPrice(amount * 100)}.`)
			setAmount(0)
		} else {
			alert(`Fields cannot be empty.`)
		}
	}

	return (
		<div>
			<form className='deposit-form'>
				<h1>Deposit To: {`${userobj.username}`}</h1>
				<label className='labels'>Amount:</label>
				<input
					type='number'
					className='inputs'
					placeholder='Enter Amount'
					onChange={e => {
						setAmount(e.target.value)
					}}
				/>
				<button type='submit' className='buttons' onClick={handleDeposit}>
					Deposit
				</button>
			</form>
		</div>
	)
}

export default UserDeposit
