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
import '../../css/dashboard.css'
import { Paper } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

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
					marginLeft: -220,
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

            <Container style={{marginLeft: -220}}>
			<div className='main-container'>
				<div>
					<CreditCard username={username} userbalance={userObj.balance} />
				</div>

				{/* <div className='button-container'> */}
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
					<div >
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
					<div>
						<Paper
							elevation={24}
							style={{ borderRadius: 25, backgroundColor: 'inherit' }}
							className='btn-background'
						>
							<Box p={1}>
								<img
									src={transfer}
									alt='transfer'
									style={{ width: 120, display: 'block', margin: '0 auto',marginLeft: 50,
								    marginRight: 50, }}
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
										color: '#E1C20E'
									}}
								>
									Transfer Money
								</Button>
							</Box>
						</Paper>
					</div>
          		</div>
				</Container>
				<div>
					<UserExpenseTracker username={username} balance={userObj.balance} />
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

		</React.Fragment>
	)
}

export default Dashboard
