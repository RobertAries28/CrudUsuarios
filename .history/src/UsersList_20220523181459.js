import React from 'react';

const UsersList = ({users,removeProduct,selecProduct}) => {
    return (
        <div>
               <ul>
                {
                    users.map(user=>(
                        <li style={{marginBottom:"10px"}} key={user.id}>
                            <ul>
                                <li><b>Nombre: </b>{user.first_name}</li>
                                <li><b>Apellido: </b>{user.last_name}</li>
                                <li><b>Email: </b>{user.email}</li>
                                <li><b>Brithday: </b>{user.brithday}</li>
                            </ul>
                            
                            <button onClick={()=>removeProduct(user.id)}>Eliminar</button>
                       <button onClick={()=>selecProduct(user)}>Actualizar</button> 
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default UsersList;
