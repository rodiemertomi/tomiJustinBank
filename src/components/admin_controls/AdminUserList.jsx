import React, { useState, useEffect } from 'react'
import { formatPrice } from '../helpers'

const AdminUserList = ({ objArray = [{}], searchKeyword = '' }) => {
	const [filteredNames, setFilteredNames] = useState(objArray)

	useEffect(() => {
		if (searchKeyword === '') {
			setFilteredNames(objArray)
		} else {
			setFilteredNames(
				objArray.filter(name => {
					return name.fullname
						.toLowerCase()
						.includes(searchKeyword.toLowerCase())
				})
			)
		}
	}, [objArray, searchKeyword])

	return (
		<table>
			<thead>
				<tr>
					<th>Username</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Balance</th>
				</tr>
			</thead>

			<tbody>
				{filteredNames.map(name => (
					<tr key={name.accountnumber}>
						<td>{name.username}</td>
						<td>{name.firstname}</td>
						<td>{name.lastname}</td>
						<td>{formatPrice(name.balance)}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default AdminUserList
