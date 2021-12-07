import React, { useState, useEffect } from 'react'

const AdminUserList = ({keyList = [], searchKeyword=''}) => {
    let objArray = [{}]
    for(let i = 0; i<keyList.length; i++){
        objArray[i] = (JSON.parse(localStorage.getItem(`${keyList[i]}`)))
    }
    const [filteredNames, setFilteredNames] = useState(objArray)

    useEffect(() => {
        if(searchKeyword === ''){
            setFilteredNames(objArray)
        }else{
            setFilteredNames(
                objArray.filter((name) => {
                    return name.fullname.toLowerCase().includes(searchKeyword.toLowerCase())
                })
            )
        }
    }, [keyList, searchKeyword])

    return (
        <table>
            <tr>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Balance</th>
            </tr>

            {filteredNames.map((name) => (
                <tr key={name.username} >
                    <td>{name.username}</td>
                    <td>{name.firstname}</td>
                    <td>{name.lastname}</td>
                    <td>₱ {name.balance}</td>
                </tr>
            ))}
        </table>
    )
}

export default AdminUserList
