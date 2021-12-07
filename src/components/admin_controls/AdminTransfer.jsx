import React, { useState } from 'react'

const AdminTransfer = () => {
    
    const [userName1, setUserName1] = useState('')
    const [userName2, setUserName2] = useState('')
    const [amount, setAmount] = useState(0)    

    const sendFromTo = (name1, name2) => {
        const user1 = JSON.parse(localStorage.getItem(`${name1}`))
        const user2 = JSON.parse(localStorage.getItem(`${name2}`))

        if(user1 !== null){
            if(user2 !== null){
                if(checkBalance(user1)){
                    user1.balance = user1.balance - parseInt(amount)
                    localStorage.setItem(`${userName1}`, JSON.stringify(user1))
                    user2.balance = user2.balance + parseInt(amount)
                    localStorage.setItem(`${userName2}`, JSON.stringify(user2))
                    alert(`${userName1} deposited ${amount} to ${userName2}`)
        
                }else{
                    alert(`${userName1} has insufficient funds`)
                    
                }
            }else{
                alert(`${userName2} does not exist.`)
            }
        }else{
            alert(`${userName1} does not exist.`)
        }
    }
    
    const checkBalance = (user1) => {
        if(user1.balance >= amount){
            return true

        }else{
            return false

        }

    }    

    const checkUser = (event) => {
        event.preventDefault()
        
        if(userName1 !== '' && userName2 !== ''){
            sendFromTo(userName1, userName2)

        }else{
            alert('Fields can not be empty.')
        }
    }
    
    return (
        <div>
            <form className="deposit-form">
                <h1>Deposit Form</h1>
                <label className="labels">From:</label>
                <input type="text" className="inputs" placeholder="Username of depositor" value={userName1} onChange={(e) => {setUserName1(e.target.value)}}/>
                <label className="labels">To:</label>
                <input type="text" className="inputs" placeholder="Username of destination" value={userName2} onChange={(e) => {setUserName2(e.target.value)}}/>
                <label className="labels">Amount:</label>
                <input type="number" className="inputs" placeholder="Amount to deposit:" value={amount} onChange={(e) => {setAmount(e.target.value)}}/>
                <button type='submit' className="buttons" onClick={checkUser}>Deposit</button>
            </form>
        </div>
    )
}

export default AdminTransfer