import React, { useState } from 'react'

const Login = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleLogin = () => {
        alert(`${firstName}, ${lastName}`)
    }

    return (
        <div className="login-container">
            <form action="" className="login-form">
                <h1><span>EZ</span> Money</h1>
                <h1>LOGIN</h1>
                <label htmlFor="" className="labels">Username</label>
                <input 
                 type="text" 
                 className="inputs" 
                 placeholder="Input username" 
                 value={firstName} 
                 onChange={(e) => {
                    setFirstName(e.target.value)}}
                />
                <label htmlFor="" className="labels">Password</label>
                <input 
                 type="text" 
                 className="inputs"
                 placeholder="Input password" 
                 value={lastName} 
                 onChange={(e) => {
                    setLastName(e.target.value)}}
                />
                <button className="buttons" onClick={handleLogin}>Login</button>
                <span>or</span>
                <button className="buttons">Sign Up</button>
            </form>
        </div>
    )
}

export default Login
