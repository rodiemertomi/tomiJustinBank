import React, { useState } from 'react'
import Modal from '../../modal/Modal'
import { useNavigate } from 'react-router-dom'
import AdminCreateUser from './AdminCreateUser'
import AdminDeposit from './AdminDeposit'
import AdminListUsers from './AdminListUsers'
import AdminWithdraw from './AdminWithdraw'
import AdminTransfer from './AdminTransfer'

const Admin = () => {
	const navigate = useNavigate()
	const [showCreateUser, setShowCreateUser] = useState(false)
	const [ShowListUsers, setShowListUsers] = useState(false)
	const [showDeposit, setShowDeposit] = useState(false)
	const [showWithdraw, setShowWithdraw] = useState(false)
	const [showTransfer, setShowTransfer] = useState(false)

	return (
		<div className='admin-container'>
			<h1>Welcome, almighty Admin</h1>
			<div className='buttons-container'>
				<button onClick={() => setShowCreateUser(true)} className='buttons'>
					Create User
				</button>
				<Modal
					onClose={() => {
						setShowCreateUser(false)
					}}
					show={showCreateUser}
				>
					<AdminCreateUser />
				</Modal>

				<button onClick={() => setShowListUsers(true)} className='buttons'>
					List Users
				</button>
				<Modal
					onClose={() => {
						setShowListUsers(false)
					}}
					show={ShowListUsers}
				>
					<AdminListUsers />
				</Modal>

				<button onClick={() => setShowDeposit(true)} className='buttons'>
					Deposit
				</button>
				<Modal
					onClose={() => {
						setShowDeposit(false)
					}}
					show={showDeposit}
				>
					<AdminDeposit />
				</Modal>

				<button onClick={() => setShowWithdraw(true)} className='buttons'>
					Withdraw
				</button>
				<Modal
					onClose={() => {
						setShowWithdraw(false)
					}}
					show={showWithdraw}
				>
					<AdminWithdraw />
				</Modal>

				<button onClick={() => setShowTransfer(true)} className='buttons'>
					Transfer
				</button>
				<Modal
					onClose={() => {
						setShowTransfer(false)
					}}
					show={showTransfer}
				>
					<AdminTransfer />
				</Modal>

				<button onClick={() => navigate('/')} className='buttons'>
					Logout
				</button>
			</div>
		</div>
	)
}

export default Admin
