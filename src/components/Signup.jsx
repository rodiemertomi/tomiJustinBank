import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/forms.css'
import logo from '../img/logo.png'

import TextField from '@mui/material/TextField'
import { Button, Paper } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Signup = () => {
	const navigate = useNavigate()
	const [userName, setUserName] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [accountNumber, setAccountNumber] = useState(0)
	const [password, setPassword] = useState('')

	const handleUser = event => {
		event.preventDefault()
		if (
			userName !== '' &&
			firstName !== '' &&
			lastName !== '' &&
			password !== ''
		) {
			const user = {
				balance: 0.0,
				username: userName,
				accountnumber: accountNumber,
				password: password,
				firstname: firstName,
				lastname: lastName,
				fullname: `${firstName} ${lastName}`,
				expense: [],
			}
			if (localStorage.getItem(`${userName}`) !== null) {
				alert(`${userName} already exists`)
			} else {
				localStorage.setItem(`${userName}`, JSON.stringify(user))
				alert(`Account created for ${firstName} ${lastName}`)
				resetStates()
				navigate('/')
			}
		} else {
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

	useEffect(() => {
		setAccountNumber(Date.now())
	}, [userName])

	return (
		<div
			style={{ backgroundColor: '#282c34', paddingTop: 1, paddingBottom: 1 }}
		>
			<Container
				component='main'
				maxWidth='xs'
				style={{ backgroundColor: '#282c34' }}
			>
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
						<form className='create-user-form'>
							<img
								src={logo}
								style={{ width: 330, marginTop: 20, marginBottom: -5 }}
								alt='logo'
							/>

							<Typography variant='h3' style={{ fontFamily: 'norwester' }}>
								Sign Up
							</Typography>

							<TextField
								className='inputs'
								id='outlined-basic'
								label='Enter Username'
								variant='outlined'
								value={userName}
								onChange={e => {
									setUserName(e.target.value)
								}}
								required
								fullWidth
							/>

							<TextField
								className='inputs'
								id='outlined-basic'
								label='Enter First Name'
								variant='outlined'
								value={firstName}
								onChange={e => {
									setFirstName(e.target.value)
								}}
								required
								fullWidth
							/>

							<TextField
								className='inputs'
								id='outlined-basic'
								label='Enter Last Name'
								variant='outlined'
								value={lastName}
								onChange={e => {
									setLastName(e.target.value)
								}}
								required
								fullWidth
							/>

							<TextField
								type='password'
								className='inputs'
								id='outlined-basic'
								label='Enter Password'
								variant='outlined'
								value={password}
								onChange={e => {
									setPassword(e.target.value)
								}}
								required
								fullWidth
							/>

							<Button
								className='buttons'
								type='submit'
								fullWidth
								variant='contained'
								onClick={handleUser}
								style={{ fontFamily: 'norwester', fontSize: 25 }}
							>
								Sign Up
							</Button>

							<Link to='/' className='links'>
								Already have an account? Click here!
							</Link>
						</form>
					</Box>
				</Paper>
			</Container>
		</div>
	)
}

export default Signup
