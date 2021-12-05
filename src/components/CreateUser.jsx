import React from 'react'
import { useNavigate } from 'react-router-dom' 
import { useState, useEffect } from 'react'
import { randAcctNo } from './helpers'

const CreateUser = () => {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleUser = () => {
        if(userName !== "" && firstName !== "" && lastName !== "" && password !== ""){
            const user = {
                balance: 0,
                accountnumber: accountNumber,
                password: password,
                firstname: firstName,
                lastname: lastName,
            }
            if(localStorage.getItem(`${userName}`) !== null){
                alert(`${userName} already exists`)

            }else{
                localStorage.setItem(`${userName}`, JSON.stringify(user))
                alert(`Account created for ${firstName} ${lastName}`)
                navigate('/admin')
            }

        }else{
            alert(`Fields must not be empty.`)

        }
    }

    useEffect(()=> {
        setAccountNumber(randAcctNo())
    },[userName])

    return (
        <div>
            <form className="create-user-form">
                <h1>Create User</h1>            
                <label className="labels">Username</label>
                <input required type="text" className="inputs" onChange={(e) => {setUserName(e.target.value)}}/>
                <label className="labels">First Name</label>
                <input required type="text" className="inputs" onChange={(e) => {setFirstName(e.target.value)}}/>
                <label className="labels">Last Name</label>
                <input required type="text" className="inputs" onChange={(e) => {setLastName(e.target.value)}}/>
                <label className="labels">Password</label>
                <input required type="password" className="inputs" onChange={(e) => {setPassword(e.target.value)}}/>
                <button onClick={handleUser}>Create User</button>
                <button onClick={() => {
                    navigate(`/admin`)
                }}>Cancel</button>
            </form>
        </div>
    )
}

export default CreateUser
