import './Title.css';

export default function Title({ newUser, deleteUsers }) {
	return (
		<>
			<h1 className='title'>Random Users v3.0</h1>
			<div className='buttons'>
				<button className='btn btn-add' onClick={newUser}>
					Añadir usuario
				</button>
				<button className='btn btn-delete' onClick={deleteUsers}>
					Eliminar suspendidas
				</button>
			</div>
		</>
	);
}

