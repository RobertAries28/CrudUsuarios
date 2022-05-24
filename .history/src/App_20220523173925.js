
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const App=()=> {
 
  const [users,setUsers]= useState([])
  useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/swagger/')
    .then(res=>setUsers(res.data))
  },[]);
  console.log(setUsers)
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
