import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserDeposit from './UserDeposit'
import UserWithdraw from './UserWithdraw'
import Modal from '../../modal/Modal'
import UserTransfer from './UserTransfer'
import UserExpenseTracker from './UserExpenseTracker'
import { formatPrice } from '../helpers'

const Dashboard = () => {
	const navigate = useNavigate()
	const { username } = useParams()
	const userObj = JSON.parse(localStorage.getItem(`${username}`))
	const [showDeposit, setShowDeposit] = useState(false)
	const [showWithdraw, setShowWithdraw] = useState(false)
	const [showTransfer, setShowTransfer] = useState(false)

	return (
		<>
			<div className='dashboard-container'>
				{userObj.username}'s Dashboard
				<br />
				<br />
				{formatPrice(userObj.balance)}
				<br />
				<br />
				Account number
				<br />
				<br />
				{userObj.accountnumber}
				<button
					className='buttons'
					onClick={() => {
						navigate(`/`)
					}}
				>
					Logout
				</button>
				{/* BUTTON THAT SHOWS DEPOSIT MONEY MODAL */}
				<button
					className='buttons'
					onClick={() => {
						setShowDeposit(true)
					}}
				>
					Deposit
				</button>
				<Modal
					onClose={() => {
						setShowDeposit(false)
					}}
					show={showDeposit}
				>
					<UserDeposit userobj={userObj} />
				</Modal>
				{/* BUTTON THAT SHOWS DEPOSIT MONEY MODAL */}
				{/* BUTTON THAT SHOWS WITHDRAW MONEY MODAL */}
				<button
					className='buttons'
					onClick={() => {
						setShowWithdraw(true)
					}}
				>
					Withdraw
				</button>
				<Modal
					onClose={() => {
						setShowWithdraw(false)
					}}
					show={showWithdraw}
				>
					<UserWithdraw userobj={userObj} />
				</Modal>
				{/* BUTTON THAT SHOWS WITHDRAW MONEY MODAL */}
				{/* BUTTON THAT SHOWS TRANSFER MONEY MODAL */}
				<button
					className='buttons'
					onClick={() => {
						setShowTransfer(true)
					}}
				>
					Transfer Money
				</button>
				<Modal
					title='Transfer Money To'
					onClose={() => {
						setShowTransfer(false)
					}}
					show={showTransfer}
				>
					<UserTransfer userobj1={userObj} />
				</Modal>
				{/* BUTTON THAT SHOWS TRANSFER MONEY MODAL */}
			</div>
			<div>
				<UserExpenseTracker username={username} balance={userObj.balance} />
			</div>
		</>
	)
}

export default Dashboard
