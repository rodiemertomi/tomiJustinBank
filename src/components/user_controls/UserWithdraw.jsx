import React, { useState } from 'react'

const UserWithdraw = ( { username='' }) => {
    const [amount, setAmount] = useState(null)

    const handleWithdraw = () => {
        const userObj = JSON.parse(localStorage.getItem(`${username}`))

        if(username !== '' && amount !== null){
            if(checkUser(username)){            
                if(checkBalance(userObj)){
                    userObj.balance -= amount
                    localStorage.setItem(`${username}`, JSON.stringify(userObj))
                    alert(`${username} withdrew ${amount}`)
    
                }else{
                    alert(`${username} has insufficient balance.`)
                }
    
            }else{
                alert(`${username} does not exist.`)
            }

        }else{
            alert('Fields can not be empty.')

        }
        
        
    }

    const checkUser = (name) => {
        if(localStorage.getItem(`${name}`) !== null){
            return true

        } else {
            return false
        }
    }

    const checkBalance = (name) => {
        if(name.balance >= amount){
            return true

        }else{
            return false

        }

    }

    return (

        <div className='withdraw-form'>
            <h1>Withdraw From: {username}</h1>

            <label className='labels'>Amount</label>
            <input type="number" className="inputs" onChange={(e) => {setAmount(e.target.value)}}/>

            <button type='submit' onClick={handleWithdraw}>Withdraw</button>
        </div>
    )
}

export default UserWithdraw
