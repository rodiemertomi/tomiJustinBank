import React, { useState } from 'react'

const UserDeposit = ({ username='' }) => {
    const [amount, setAmount] = useState(0) 
    console.log(username)
    
    const handleDeposit = () => {
        if(amount !== 0 && amount !== null){
            const userObj = JSON.parse(localStorage.getItem(`${username}`))
            userObj.balance += parseInt(amount)
            localStorage.setItem(`${username}`, JSON.stringify(`${userObj}`))

            setAmount(0)
        }else{
            alert(`Fields cannot be empty.`)
        }
    }

    return (
        <div>
            <form className="deposit-form">
                <h1>Deposit To: {username}</h1>
                <label className="labels">Amount:</label>
                <input type="number" className="inputs" placeholder="Enter Amount" onChange={(e) => {setAmount(e.target.value)}}/>
                <button type='submit' className="buttons" onClick={handleDeposit}>Deposit</button>
            </form>
        </div>
    )
}

export default UserDeposit
