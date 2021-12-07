import React, { useState, useEffect } from 'react'
import AdminUserList from './AdminUserList'

const AdminListUsers = () => {
    const [searchKeyword, setSearchKeyword] = useState('')
    const keyList = Object.keys(localStorage)
    console.log(keyList)
    return (
        <div>
            <h1>Users List</h1>
            <input
            type="text"
            className="inputs"
            value={searchKeyword}
            placeholder='Search User...'
            onChange={(e) => {setSearchKeyword(e.target.value)}}
            />
            <AdminUserList keyList={keyList} searchKeyword={searchKeyword} />
        </div>
    )
}

export default AdminListUsers

