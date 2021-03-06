/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { formatPrice } from '../helpers'

const UserExpenseList = ({ expenses = [], onEdit, onDelete }) => {
	const [expenseDetail, setExpenseDetail] = useState(expenses)

	useEffect(() => {
		setExpenseDetail(expenses)
	}, [expenses])

	return (
		<ul>
			{expenseDetail.map(item => (
				<li
					key={item.id}
				>
					<div
						onClick={() => onEdit(item)}
					>
						{`${item.transaction} ${formatPrice(item.amount * 100)}`}
					</div>
					<button onClick={() => onDelete(item.id)}>Delete</button>
				</li>
			))}
		</ul>
	)
}

export default UserExpenseList
