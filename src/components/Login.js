import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import logo from '../img/logo.png'

import TextField from '@mui/material/TextField'
import { Button, Paper } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';





const Login = () => { 
    
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        userName === 'admin' && password === 'admin' ? navigate(`/admin`) : checkUser(userName)
    }

    const handleSignUp = () => {
      navigate(`/signup`)
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
        <div style={{backgroundColor: "#282c34", paddingTop: 1, paddingBottom: 1}}>
        <Container component="main" maxWidth="xs" style={{backgroundColor: "#282c34"}}>
            <Paper elevation={52}>
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '100%',
                margin: 18,
            }}
            >
            <form className="login-form">
                <img src={logo} style={{width: 330, marginTop: 20, marginBottom: -5}} alt="logo" />

                <Typography variant="h3" style={{fontFamily: "norwester"}} >
                LOGIN
                </Typography>
                <TextField
                  className="inputs"
                  id="outlined-basic" 
                  label="Enter Username" 
                  variant="outlined"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value)}}
                    required
                    fullWidth
                />
                <TextField
                  className="inputs"
                  id="outlined-basic" 
                  label="Enter Password" 
                  variant="outlined"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)}}
                    required
                    fullWidth
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                style={{fontFamily: "norwester", fontSize: 25}}
                >
                Sign In
                </Button>
                
                <Typography variant="h5" color="initial" style={{fontFamily: "norwester"}}>
                Don't Have an Account?
                </Typography>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSignUp}
                style={{marginBottom: 20, fontFamily: "norwester", fontSize: 25}}
                >
                Sign Up
                </Button>
            </form>
          </Box>
         </Paper>
        </Container>
     </div>
    )   
}

export default Login



