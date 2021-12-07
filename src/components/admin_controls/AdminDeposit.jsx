import React, { useState } from 'react'

const AdminDeposit = () => {
    const [userName1, setUserName1] = useState('')
    const [amount, setAmount] = useState(0)

    const sendTo = (username1, peso) => {
        if(peso < 0 || peso === 0){
            alert('Amount cannot be less than or equal to zero.')
        }else{
            const userObj = JSON.parse(localStorage.getItem(`${userName1}`))
            userObj.balance += parseInt(peso)
            localStorage.setItem(`${username1}`, JSON.stringify(userObj))
            alert(`${amount} deposited to ${userName1}`)

            setUserName1('')
            setAmount(0)
        }
    }

    const checkUser = (event) => {
        event.preventDefault()
        const userObj = JSON.parse(localStorage.getItem(`${userName1}`))
        if(userName1 !== '' && amount !== null && amount !== 0){
            if(userObj !== null){
                sendTo(userName1, amount)

            }else{
                alert(`${userName1} does not exist.`)
            }
            
        }else{
            alert(`Fields cannot be empty.`)
        }
        
    }
    
    return (
        <div>
            <form className="deposit-form">
                <h1>Deposit Form</h1>
                <label className="labels">To:</label>
                <input type="text" className="inputs" placeholder="Enter Username" onChange={(e) => {setUserName1(e.target.value)}}/>
                <label className="labels">Amount:</label>
                <input type="number" className="inputs" placeholder="Enter Amount" onChange={(e) => {setAmount(e.target.value)}}/>
                <button type='submit' className="buttons" onClick={checkUser}>Deposit</button>
            </form>
        </div>
    )
}

export default AdminDeposit
