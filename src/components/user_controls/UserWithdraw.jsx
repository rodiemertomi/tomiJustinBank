import React, { useState } from 'react'
import { formatPrice } from '../helpers'

const UserWithdraw = ( {userobj={}}) => {
    const [amount, setAmount] = useState(null)

    const handleWithdraw = () => {
        if(userobj.username !== '' && amount !== null){
            if(checkUser(userobj.username)){
                if(checkBalance(userobj.balance)){
                    userobj.balance -= parseInt(amount*100)
                    localStorage.setItem(`${userobj.username}`, JSON.stringify(userobj))
                    alert(`${userobj.username} withdrew ${formatPrice(amount)}`)
    
                }else{
                    alert(`${userobj.username} has insufficient balance.`)
                }
    
            }else{
                alert(`${userobj.username} does not exist.`)
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

    const checkBalance = (balance) => {
        if(balance >= amount){
            return true

        }else{
            return false

        }

    }

    return (

        <div className='withdraw-form'>
            <h1>Withdraw From: {userobj.username}</h1>

            <label className='labels'>Amount</label>
            <input type="number" className="inputs" placeholder='Enter Amount' onChange={(e) => {setAmount(e.target.value)}}/>

            <button type='submit' className='buttons' onClick={handleWithdraw}>Withdraw</button>
        </div>
    )
}

export default UserWithdraw
