import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Deposit = () => {
    const navigate = useNavigate()
    const [userName1, setUserName1] = useState('')
    const [userName2, setUserName2] = useState('')
    const [amount, setAmount] = useState(0)    

    const sendFromTo = (name1, name2) => {
        const user1 = JSON.parse(localStorage.getItem(`${name1}`))
        const user2 = JSON.parse(localStorage.getItem(`${name2}`))

        if(user1 !== null && user2 !== null){
            if(checkBalance(user1)){
                user1.balance = user1.balance - parseInt(amount)
                user2.balance = user2.balance + parseInt(amount)
    
            }else{
                alert(`${userName1} has insufficient funds`)
                
            }
        }else{
            alert(`Fields must not be empty`)
        }
    }
    
    const checkBalance = (user1) => {
        if(user1.balance > amount){
            return true

        }else{
            return false

        }

    }

    const sendTo = (username2, peso) => {
        const user2 = JSON.parse(localStorage.getItem(`${username2}`))
        alert(`${user2.balance}`)
        user2.balance += parseInt(peso)
        localStorage.setItem(`${username2}`, JSON.stringify(user2))
    }

    const checkUser = (event) => {
        event.preventDefault()
        if(userName1 !== ''){
            if(userName1 === 'admin'){
                sendTo(userName2, amount)

            }else{
                sendFromTo(userName1, userName2)

            }
        }
    }
    
    return (
        <div>
            <form className="deposit-form">
                <h1>Deposit</h1>
                <label className="labels">From:</label>
                <input type="text" className="inputs" placeholder="Username of depositor" onChange={(e) => {setUserName1(e.target.value)}}/>
                <label className="labels">To:</label>
                <input type="text" className="inputs" placeholder="Username of destination" onChange={(e) => {setUserName2(e.target.value)}}/>
                <label className="labels">Amount:</label>
                <input type="number" className="inputs" placeholder="Amount to deposit:" onChange={(e) => {setAmount(e.target.value)}}/>
                <button className="buttons" onClick={() => { navigate(`/admin`)}}>Cancel</button>
                <button type='submit' className="buttons" onClick={checkUser}>Deposit</button>
            </form>
        </div>
    )
}

export default Deposit
