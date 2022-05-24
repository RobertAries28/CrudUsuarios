
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersList from './UsersList';

const App=()=> {
 
  const [users,setUsers]= useState([])
  useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res=>setUsers(res.data))
    
  },[]);
  console.log(users)
  return (
    <div className="App">
     <UsersList users={users}/>
    </div>
  );
}

export default App;
