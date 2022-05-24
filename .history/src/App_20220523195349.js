
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './UsersForm';
import UsersList from './UsersList';

const App=()=> {
 
  const [users,setUsers]= useState([])
  const [userEdit, setUserEdit]= useState(null)  
  useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res=>setUsers(res.data))
    
  },[]);
  console.log(users)

  const getUsers=()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res=>setUsers(res.data))
  }
  
    const addUsers= user=>{
      axios.post('https://users-crud1.herokuapp.com/users/',user).then(()=>getUsers())
      setUsers([...users,user])
    }
  
    const removeUsers=(id)=>{
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`).then(()=>getUsers())
      
  
    }
  
    const selectUsers=user=> setUserEdit(user);
    
    const updateUsers= userInfo=>{
  
      axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`,userInfo)
      const index= users.findIndex(user=>
        user.id === userInfo.id);
  
        users[index]= userInfo;
        setUsers([...users])
    }
  return (
    <div className="App">
     <UsersList users={users} selectUsers={selectUsers} removeUsers={removeUsers}/>
     <UsersForm addUsers={addUsers}
         userEdit={userEdit}
         selectUsers={selectUsers}
         updateUsers={updateUsers}/>
    </div>
  );
}

export default App;
