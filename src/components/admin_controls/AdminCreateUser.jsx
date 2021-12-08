import React from 'react'
import { useState, useEffect } from 'react'

const AdminCreateUser = () => {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [accountNumber, setAccountNumber] = useState(0)
    const [password, setPassword] = useState('')

    const handleUser = (event) => {
        event.preventDefault()
        if(userName !== "" && firstName !== "" && lastName !== "" && password !== ""){
            const user = {
                balance: 0.00,
                username: userName,
                accountnumber: accountNumber,
                password: password,
                firstname: firstName,
                lastname: lastName,
                fullname: `${firstName} ${lastName}`,
                expense: [{}]
            }
            if(localStorage.getItem(`${userName}`) !== null){
                alert(`${userName} already exists`)

            }else{
                localStorage.setItem(`${userName}`, JSON.stringify(user))
                alert(`Account created for ${firstName} ${lastName}`)
                resetStates()
            }

        }else{
            alert(`Fields must not be empty.`)

        }
    }

    const resetStates = () => {
        setUserName('')
        setFirstName('')
        setLastName('')
        setPassword('')
        setAccountNumber('')
    }

    useEffect(()=> {
        setAccountNumber(Date.now())
    },[userName])

    return (
        <div>
            <form className="create-user-form">
                <h1>Create User</h1>            
                <label className="labels">Username</label>
                <input required type="text" className="inputs" value={userName} placeholder='Enter Username'onChange={(e) => {setUserName(e.target.value)}}/>
                <label className="labels">First Name</label>
                <input required type="text" className="inputs" value={firstName} placeholder='Enter First Name'onChange={(e) => {setFirstName(e.target.value)}}/>
                <label className="labels">Last Name</label>
                <input required type="text" className="inputs" value={lastName} placeholder='Enter Last Name'onChange={(e) => {setLastName(e.target.value)}}/>
                <label className="labels">Password</label>
                <input required type="password" className="inputs" value={password} placeholder='Enter Password'onChange={(e) => {setPassword(e.target.value)}}/>
                <button type='submit' onClick={handleUser}>Create User</button>
            </form>
        </div>
    )
}

export default AdminCreateUser
