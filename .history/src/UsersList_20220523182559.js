import React from 'react';
import './App.css';

const UsersList = ({users,removeProduct,selecProduct}) => {
    return (
        <div className='infoUsers'>
               <ul>
                {
                    users.map(user=>(
                        <li className='users' style={{marginBottom:"10px"}} key={user.id}>
                            <ul>
                                <li><b>Nombre: </b>{user.first_name}</li>
                                <li><b>Apellido: </b>{user.last_name}</li>
                                <li><b>Email: </b>{user.email}</li>
                                <li><b>Brithday: </b>{user.birthday}</li>
                            </ul>
                            <div className='button'>
                            <button onClick={()=>removeProduct(user.id)}>Eliminar</button>
                       <button onClick={()=>selecProduct(user)}>Actualizar</button> 
                       </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default UsersList;
