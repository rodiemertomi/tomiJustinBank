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
                balance: 0,
                username: userName,
                accountnumber: accountNumber,
                password: password,
                firstname: firstName,
                lastname: lastName,
                fullname: `${firstName} ${lastName}`
            }
            if(localStorage.getItem(`${userName}`) !== null){
                alert(`${userName} already exists`)

            }else{
                localStorage.setItem(`${userName}`, JSON.stringify(user))
                alert(`Account created for ${firstName} ${lastName}`)
                setUserName('')
                setFirstName('')
                setLastName('')
                setPassword('')
                setAccountNumber('')
            }

        }else{
            alert(`Fields must not be empty.`)

        }
    }

    useEffect(()=> {
        setAccountNumber(Date.now())
    },[userName])

    return (
        <div>
            <form className="create-user-form">
                <h1>Create User</h1>            
                <label className="labels">Username</label>
                <input required type="text" className="inputs" value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
                <label className="labels">First Name</label>
                <input required type="text" className="inputs" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                <label className="labels">Last Name</label>
                <input required type="text" className="inputs" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                <label className="labels">Password</label>
                <input required type="password" className="inputs" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <button type='submit' onClick={handleUser}>Create User</button>
            </form>
        </div>
    )
}

export default AdminCreateUser
