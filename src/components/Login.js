import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
    
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        userName === 'admin' ? navigate(`/admin`) : checkUser(userName)
    }

    const handleSignUp = () => {
        navigate(`/signup`)
    }

    const checkUser = (name) => {
        const user = JSON.parse(localStorage.getItem(`${userName}`))
        if(localStorage.getItem(`${userName}`) !== null && user.password === password){
            navigate(`/user/${userName}`)

        } else {
            alert(`Wrong username or password`)
        }
    }

    return (
        <div className="login-container">
            <form className="login-form">
                <h1><span>EZ</span> Money</h1>
                <h1>LOGIN</h1>
                <label className="labels">Username</label>
                <input 
                 type="text" 
                 className="inputs" 
                 placeholder="Input Username"
                 value={userName} 
                 onChange={(e) => {
                    setUserName(e.target.value)}}
                />
                <label className="labels">Password</label>
                <input 
                 type="password" 
                 className="inputs"
                 placeholder="Input Password" 
                 value={password} 
                 onChange={(e) => {
                    setPassword(e.target.value)}}
                />
                <button type='submit' className="buttons" onClick={handleSubmit}>Login</button>
                <span>or</span>
                <button className="buttons" onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
    )
}

export default Login
