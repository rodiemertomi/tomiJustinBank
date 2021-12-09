import React, { useState } from 'react'
import AdminUserList from './AdminUserList'

const AdminListUsers = () => {
	const [searchKeyword, setSearchKeyword] = useState('')
	const keyList = Object.keys(localStorage)
	let objArray = [{}]
	for (let i = 0; i < keyList.length; i++) {
		objArray[i] = JSON.parse(localStorage.getItem(`${keyList[i]}`))
	}
	return (
		<div>
			<h1>Users List</h1>
			<input
				type='text'
				className='inputs'
				value={searchKeyword}
				placeholder='Search User...'
				onChange={e => {
					setSearchKeyword(e.target.value)
				}}
			/>
			<AdminUserList objArray={objArray} searchKeyword={searchKeyword} />
		</div>
	)
}

export default AdminListUsers
