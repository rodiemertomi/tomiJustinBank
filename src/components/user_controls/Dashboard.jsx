import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { slugify } from '../helpers'
import UserDeposit from './UserDeposit'
import UserWithdraw from './UserWithdraw'
import Modal from '../../modal/Modal'

const Dashboard = () => {
    const navigate = useNavigate()
    const { username } = useParams()
    const user = JSON.parse(localStorage.getItem(`${username}`))
    const [showDeposit, setShowDeposit] = useState(false)
    const [showWithdraw, setShowWithdraw] = useState(false)
    const [showTransfer, setShowTransfer] = useState(false)

    return (
        <div className='dashboard-container'>
            { username }'s Dashboard
            <br />
            <br />
            ₱ {slugify(user.balance)}
            <br />
            <br />
            Account number
            <br />
            <br />
            {user.accountnumber}
            <button className='buttons' onClick={() => {
                navigate(`/`)
            }}>Logout</button>

            {/* BUTTON THAT SHOWS DEPOSIT MONEY MODAL */}
            <button className="buttons" onClick={()=>{
                setShowDeposit(true)
            }}>Deposit</button>
            <Modal
                onClose={() => {
                    setShowDeposit(false)
                }}
                show={showDeposit}
                user={username}
                >
                <UserDeposit username={username} />
            </Modal>
            {/* BUTTON THAT SHOWS DEPOSIT MONEY MODAL */}

            {/* BUTTON THAT SHOWS WITHDRAW MONEY MODAL */}
            <button className="buttons" onClick={() =>{
                setShowWithdraw(true)
            }}>Withdraw</button>
            <Modal
                onClose={() => {
                    setShowWithdraw(false)
                }}
                show={showWithdraw}
                >
                <UserWithdraw username={username}/>
            </Modal>
            {/* BUTTON THAT SHOWS WITHDRAW MONEY MODAL */}
            
            {/* BUTTON THAT SHOWS TRANSFER MONEY MODAL */}
            <button className="buttons" onClick={() => {
                setShowTransfer(true)
            }}>Transfer Money</button>
            <Modal
                title="Transfer Money To"
                onClose={() => {
                    setShowTransfer(false)
                }}
                show={showTransfer}
                user={username}
                >
                <p>This is a modal body</p>
            </Modal>
            {/* BUTTON THAT SHOWS TRANSFER MONEY MODAL */}

        </div>
    )
}

export default Dashboard
