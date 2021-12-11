import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserDeposit from './UserDeposit'
import UserWithdraw from './UserWithdraw'
import Modal from '../../modal/Modal'
import CreditCard from '../user_controls/CreditCard'
import UserExpenseTracker from './UserExpenseTracker'
import UserTransfer from './UserTransfer'
import logo from '../../img/logo.png'
import deposit from '../../img/deposit.png'
import withdraw from '../../img/withdrawal.png'
import transfer from '../../img/money-transfer.png'
import '../../css/dashboard-copy.css'
import { Paper } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const Dashboard = () => {
	const navigate = useNavigate()
	const { username } = useParams()
	const userObj = JSON.parse(localStorage.getItem(`${username}`))
	const [showDeposit, setShowDeposit] = useState(false)
	const [showWithdraw, setShowWithdraw] = useState(false)
	const [showTransfer, setShowTransfer] = useState(false)

	return (
		<React.Fragment>
			<img
				src={logo}
				style={{
					width: 330,
					marginTop: 20,
					marginLeft: 25,
					marginBottom: 45,
					display: 'inline',
				}}
				alt='logo'
			/>
			<IconButton
				aria-label='logout'
				size='large'
				style={{ position: 'fixed', right: 10, top: 5, fontSize: 45 }}
				onClick={() => {
					navigate(`/`)
				}}
			>
				<LogoutIcon fontSize='inherit' />
			</IconButton>

			<div className='main-container'>
				<div>
					<CreditCard username={username} userbalance={userObj.balance} />
				</div>

				<div className='button-container'>
					<div>
						<Paper
							elevation={24}
							style={{ borderRadius: 25, backgroundColor: 'inherit' }}
							className='btn-background'
						>
							<Box p={1}>
								<img
									src={deposit}
									alt='deposit'
									style={{
										width: 120,
										display: 'block',
										marginLeft: 50,
										marginRight: 50,
									}}
								/>
								<Button
									fullWidth
									variant='contained'
									size='large'
									onClick={() => {
										setShowDeposit(true)
									}}
									style={{
										marginTop: 10,
										borderRadius: 25,
										fontFamily: 'Norwester',
										fontSize: 20,
										color: '#E1C20E',
									}}
								>
									Deposit
								</Button>
							</Box>
						</Paper>
					</div>
					<div>
						<Paper
							elevation={24}
							style={{ borderRadius: 25, backgroundColor: 'inherit' }}
							className='btn-background'
						>
							<Box p={1}>
								<img
									src={withdraw}
									alt='withdraw'
									style={{
										width: 120,
										display: 'block',
										marginLeft: 50,
										marginRight: 50,
									}}
								/>
								<Button
									fullWidth
									variant='contained'
									size='large'
									onClick={() => {
										setShowWithdraw(true)
									}}
									style={{
										marginTop: 10,
										borderRadius: 25,
										fontFamily: 'Norwester',
										fontSize: 20,
										color: '#E1C20E',
									}}
								>
									Withdraw
								</Button>
							</Box>
						</Paper>
					</div>
					<div className='transfer-btn'>
						<Paper
							elevation={24}
							style={{ borderRadius: 25, backgroundColor: 'inherit' }}
							className='btn-background'
						>
							<Box p={1}>
								<img
									src={transfer}
									alt='transfer'
									style={{ width: 120, display: 'block', margin: '0 auto' }}
								/>
								<Button
									fullWidth
									variant='contained'
									size='large'
									onClick={() => {
										setShowTransfer(true)
									}}
									style={{
										marginTop: 10,
										borderRadius: 25,
										fontFamily: 'Norwester',
										fontSize: 20,
										color: '#E1C20E',
									}}
								>
									Transfer Money
								</Button>
							</Box>
						</Paper>
					</div>
				</div>
				<div>
					<UserExpenseTracker username={username} balance={userObj.balance} />
				</div>
			</div>

			<Modal
				onClose={() => {
					setShowDeposit(false)
				}}
				show={showDeposit}
				user={username}
			>
				<UserDeposit username={username} userobj={userObj} />
			</Modal>
			{/* BUTTON THAT SHOWS DEPOSIT MONEY MODAL */}

			<Modal
				onClose={() => {
					setShowWithdraw(false)
				}}
				show={showWithdraw}
			>
				<UserWithdraw username={username} userobj={userObj} />
			</Modal>

			<Modal
				title='Transfer Money To'
				onClose={() => {
					setShowTransfer(false)
				}}
				show={showTransfer}
				user={username}
			>
				<UserTransfer username={username} userobj={userObj} />
			</Modal>
			{/* BUTTON THAT SHOWS TRANSFER MONEY MODAL */}
			{/* { username }'s Dashboard
            <br />
            <br />
            {formatPrice(user.balance)}
            <br />
            <br />
            Account number
            <br />
            <br />
            {user.accountnumber}
            */}
		</React.Fragment>
	)
}

export default Dashboard
