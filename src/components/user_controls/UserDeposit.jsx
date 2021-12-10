import React, { useState } from 'react'

const UserDeposit = ({ username='' }) => {
    const [amount, setAmount] = useState(0) 

    const handleDeposit = () => {
        const userObj = JSON.parse(localStorage.getItem(`${username}`))
        userObj.balance += amount
        localStorage.setItem(`${username}`, JSON.stringify(userObj))
    }

    return (
        <div>
            <form className="deposit-form">
                <h1>Deposit To: {username}</h1>
                <label className="labels">Amount:</label>
                <input type="number" className="inputs" placeholder="Amount to deposit:" value={amount} onChange={(e) => {setAmount(e.target.value)}}/>
                <button type='submit' className="buttons" onClick={handleDeposit}>Deposit</button>
            </form>
        </div>
    )
}

export default UserDeposit
