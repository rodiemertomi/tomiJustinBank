import React, { useState } from 'react'
import Modal from '../../modal/Modal'
import { useNavigate } from 'react-router-dom'
import AdminCreateUser from './AdminCreateUser'
import AdminDeposit from './AdminDeposit'
import AdminListUsers from './AdminListUsers'
import AdminWithdraw from './AdminWithdraw'
import AdminTransfer from './AdminTransfer'
import CreditCard from '../user_controls/CreditCard'
import '../../css/admindashboard.css'

import logo from '../../img/logo.png'
import deposit from '../../img/deposit.png'
import withdraw from '../../img/withdrawal.png'
import transfer from '../../img/money-transfer.png'
import addUser from '../../img/add-user.png'
import listUser from '../../img/shortlist.png'

import { Paper } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const Admin = () => {
	const navigate = useNavigate()
	const [showCreateUser, setShowCreateUser] = useState(false)
	const [ShowListUsers, setShowListUsers] = useState(false)
	const [showDeposit, setShowDeposit] = useState(false)
	const [showWithdraw, setShowWithdraw] = useState(false)
	const [showTransfer, setShowTransfer] = useState(false)

	return (
     <>
    <div>
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
				onClick={() => navigate('/')}
			>
				<LogoutIcon fontSize='inherit' />
			</IconButton>

   <Container style={{marginLeft: -220}}>
			<div className='main-container'>
				<div>
					<CreditCard />
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
									onClick={() => setShowDeposit(true)}
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
									onClick={() => setShowWithdraw(true)}
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
									style={{ width: 120, display: 'block', margin: '0 auto',marginLeft: 50,
								    marginRight: 50, }}
								/>
								<Button
									fullWidth
									
									variant='contained'
									size='large'
									onClick={() => setShowTransfer(true)}
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
			

				
				</div>
				</Container>
				</div>
    <Container style={{marginTop: 0, }}>
				<div className="userbtn-container">
	   <div>
						<Paper
							elevation={24}
							style={{ borderRadius: 25, backgroundColor: 'inherit' }}
							className='btn-background'
						>
					<Box p={1}>
								<img
									src={addUser}
									alt='Create User'
									style={{ width: 120, display: 'block', margin: '0 auto',marginLeft: 50,
								    marginRight: 50, }}
								/>
					<Button 
					fullWidth
									variant='contained'
									size='large'
									style={{
										marginTop: 10,
										borderRadius: 25,
										fontFamily: 'Norwester',
										fontSize: 20,
										color: '#E1C20E',
									}}
					onClick={() => setShowCreateUser(true)}>
					Create User
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
									src={listUser}
									alt='User List'
									style={{ width: 120, display: 'block', margin: '0 auto',marginLeft: 50,
								    marginRight: 50, }}
								/>
					<Button 
					fullWidth
									variant='contained'
									size='large'
									style={{
										marginTop: 10,
										borderRadius: 25,
										fontFamily: 'Norwester',
										fontSize: 20,
										color: '#E1C20E',
									}}
					onClick={() => setShowListUsers(true)}>
					List Users
				</Button>
				</Box>
				</Paper>
				</div>
				</div>
</Container>
				<Modal
					onClose={() => {
						setShowCreateUser(false)
					}}
					show={showCreateUser}
				>
					<AdminCreateUser />
				</Modal>

				

				<Modal
					onClose={() => {
						setShowListUsers(false)
					}}
					show={ShowListUsers}
				>
					<AdminListUsers />
				</Modal>



				<Modal
					onClose={() => {
						setShowDeposit(false)
					}}
					show={showDeposit}
				>
					<AdminDeposit />
				</Modal>

	

				<Modal
					onClose={() => {
						setShowWithdraw(false)
					}}
					show={showWithdraw}
				>
					<AdminWithdraw />
				</Modal>

			
				<Modal
					onClose={() => {
						setShowTransfer(false)
					}}
					show={showTransfer}
				>
					<AdminTransfer />
				</Modal>
  
		</>
	)
}

export default Admin
