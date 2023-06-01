import React, { useState } from 'react';
import './App.css';

import Title from './components/Title';
import UsersList from './components/UsersList';

function App() {
	const [users, setUsers] = useState([]);

	const newUser = async () => {
		try {
			const respuesta = await fetch('https://randomuser.me/api/?gender=female');
			const { results } = await respuesta.json();
			const newUsers = results.map(user => ({ ...user, activo: true }));
			setUsers(prevUsers => [...newUsers, ...prevUsers]);
		} catch (error) {
			// Manejar el error aquí
		}
	};

	const cambiarActivo = (id) => {
		setUsers(prevUsers =>
			prevUsers.map(user =>
				user.login.uuid === id ? { ...user, activo: !user.activo } : user
			)
		);
	};

	const deleteUsers = () => {
		setUsers(prevUsers => prevUsers.filter(user => user.activo));
	};

	return (
		<>
			<Title newUser={newUser} deleteUsers={deleteUsers} />
			<div className='container'>
				<UsersList
					users={users}
					cambiarActivo={cambiarActivo}
				/>
			</div>
		</>
	);
}

export default App;
