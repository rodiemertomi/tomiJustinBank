/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import UserExpenseList from './UserExpenseList'
import { formatPrice } from '../helpers'

const UserExpenseTracker = ({ username = '', balance, updateUserBalance }) => {
	const userObj = JSON.parse(localStorage.getItem(`${username}`))
	const userExpenses = userObj.expense
	const [transaction, setTransaction] = useState('')
	const [amount, setAmount] = useState('')
	const [id, setId] = useState(Date.now())
	const [status, setStatus] = useState('add')
	const [transacList, setTransacList] = useState(userExpenses)
	const [expenses, setExpenses] = useState(0)

	const handleAdd = () => {
		if (transaction === '' || amount === 0 || amount === '') {
			alert('Fields cannot be empty.')
		} else {
			if (!(amount < 0)) {
				if (status === 'add' && !(amount < 0)) {
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
			} else {
				alert('Amount cannot be zero or less than zero.')
			}
		}

		resetStates()
	}

	const saveExpenses = () => {
		userObj.expense = []
		transacList.forEach(item => {
			userObj.expense.push(item)
		})

		localStorage.setItem(`${username}`, JSON.stringify(userObj))
	}

	const resetStates = () => {
		setTransaction('')
		setAmount('')
		setStatus('add')
	}

	const addExpense = price => {
		let updatedExpense = 0
		price.forEach(value => {
			updatedExpense += value * 100
		})
		setExpenses(updatedExpense)
	}

	const handleEdit = val => {
		const { id, transaction, amount } = val
		setTransaction(transaction)
		setAmount(amount)
		setId(id)
		setStatus('edit')
	}

	const handleDelete = id => {
		const deletedExpense = transacList.find(item => item.id === id)
		console.log(deletedExpense)
		let updatedExpense = expenses
		updatedExpense -= deletedExpense.amount * 100
		setExpenses(updatedExpense)

		setTransacList(
			transacList.filter(item => {
				return item.id !== id
			})
		)

		resetStates()
	}

	useEffect(() => {
		addExpense(transacList.map(item => item.amount))
	}, [transacList])
	return (
		<div>
			<div>
				<h1>Balance: {formatPrice(balance)}</h1>
				<br />
				<h1>Expenses: {formatPrice(expenses)}</h1>
				<br />
				<h1>Total Balance: {formatPrice(balance - expenses)}</h1>
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
					Add Expense
				</button>
				<button className='buttons' onClick={saveExpenses}>
					Save Expenses
				</button>
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
