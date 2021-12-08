import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => { 
    
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        userName === 'admin' && password === 'admin' ? navigate(`/admin`) : checkUser(userName)
    }

    

    const checkUser = (name) => {
        const user = JSON.parse(localStorage.getItem(`${name}`))
        if(localStorage.getItem(`${name}`) !== null && user.password === password){
            navigate(`/user/${name}`)

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
                <Link to="/signup" className='links'>Already have an account? Log in</Link>
            </form>
        </div>
    )
    
}

export default Login
