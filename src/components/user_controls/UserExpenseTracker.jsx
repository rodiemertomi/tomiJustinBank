import React, { useState } from 'react'
import UserExpenseList from './UserExpenseList'

const UserExpenseTracker = ({ username = '', balance, updateUserBalance }) => {
	const [transaction, setTransaction] = useState('')
	const [amount, setAmount] = useState('')
	const [id, setId] = useState(Date.now())
	const [status, setStatus] = useState('add')
	const [transacList, setTransacList] = useState([])

	const handleAdd = () => {
		if (transaction === '' || amount === 0 || amount === '') {
			alert('Fields cannot be empty.')
		} else {
			if (status === 'add') {
				const updatedList = [
					...transacList,
					{
						id,
						transaction,
						amount,
					},
				]
				setTransacList([...updatedList])
				setId(Date.now())
			} else if (status === 'edit') {
				setId(Date.now())
				const editTransaction = transacList.find(item => item.id === id)
				setTransacList(
					transacList.map(item => {
						if (item.id === editTransaction.id) {
							return {
								id,
								transaction,
								amount,
							}
						}
						return item
					})
				)
			}
		}

		resetStates()
	}
	const resetStates = () => {
		setTransaction('')
		setAmount('')
		setStatus('add')
	}

	const handleEdit = val => {
		const { id, transaction, amount } = val
		setTransaction(transaction)
		setAmount(amount)
		setId(id)
		setStatus('edit')
	}

	const handleDelete = id => {
		setTransacList(
			transacList.filter(item => {
				return item.id !== id
			})
		)

		resetStates()
	}

	return (
		<div>
			<div className='header'>
				<h1>Expenses</h1>
			</div>
			<div className='add-expense-row'>
				<label className='labels'>Transaction: </label>{' '}
				<input
					value={transaction}
					type='text'
					className='inputs'
					placeholder='Enter Transaction'
					onChange={e => {
						setTransaction(e.target.value)
					}}
				/>
				<label className='labels'>Amount: </label>{' '}
				<input
					value={amount}
					type='number'
					className='inputs'
					placeholder='Enter Amount'
					onChange={e => {
						setAmount(e.target.value)
					}}
				/>
				<button
					className={status === 'add' ? 'add-button' : 'edit-button'}
					onClick={handleAdd}
				>
					Save Expense
				</button>
				<button className='buttons'>Clear Expenses</button>
			</div>
			<div className='expense-rows'>
				<UserExpenseList
					expenses={transacList}
					onEdit={handleEdit}
					onDelete={handleDelete}
				/>
			</div>
		</div>
	)
}

export default UserExpenseTracker
