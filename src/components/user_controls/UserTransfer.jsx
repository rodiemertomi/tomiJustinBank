import React, { useState } from 'react'

const UserTransfer = ( { username='' } ) => {
    const [user, setUser] = useState('')
    const [amount, setAmount] = useState(0) 

    const sendFromTo = (event) => {
        event.preventDefault()
        const user1 = JSON.parse(localStorage.getItem(`${username}`))
        const user2 = JSON.parse(localStorage.getItem(`${user}`))

        if(user1 !== null && amount !== 0 && amount !== null){
            if(user2 !== null){
                if(checkBalance(user1)){
                    user1.balance = user1.balance - parseInt(amount)
                    localStorage.setItem(`${username}`, JSON.stringify(user1))
                    user2.balance = user2.balance + parseInt(amount)
                    localStorage.setItem(`${user}`, JSON.stringify(user2))
                    alert(`${username} deposited ${amount} to ${user}`)
        
                }else{
                    alert(`${username} has insufficient funds`)
                    
                }
            }else{
                alert(`${user} does not exist.`)
            }
        }else{
            alert(`Fields cannot be empty`)
        }
    }

    const checkBalance = (user1) => {
        if(user1.balance >= amount){
            return true

        }else{
            return false

        }

    }

    return (
        <div>
            <form className="transfer-form">
                <h1>Transfer from: {username}</h1>
                <label className="labels">Transfer to:</label>
                <input type="text" className="inputs" placeholder="Input username:" value={user} onChange={(e) => {setUser(e.target.value)}}/>
                <label className="labels">Amount:</label>
                <input type="number" className="inputs" placeholder="Amount to deposit:" onChange={(e) => {setAmount(e.target.value)}}/>
                <button type='submit' className="buttons" onClick={sendFromTo}>Transfer</button>
            </form>
        </div>
    )
}

export default UserTransfer
