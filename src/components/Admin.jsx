import React from 'react'
import {useNavigate} from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate()     
    
    return (
        <div className="admin-container">
            <h1>Welcome, almighty Admin</h1>
            <div className="buttons-container">
                <button onClick={() => {navigate(`/admin/create-user`)}} className="buttons">Create User</button>
                <button onClick={() => {navigate(`/admin/deposit`)}} className="buttons">Deposit</button>
                <button onClick={() => {navigate(`/admin/withdraw`)}} className="buttons">Withdraw</button>
                <button onClick={() => {navigate(`/admin/transfer-money`)}} className="buttons">Transfer Money</button>
                <button onClick={() => {navigate(`/`)}} className="buttons">Logout</button>
            </div>
        </div>
    )
}

export default Admin
