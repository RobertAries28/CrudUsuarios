import React, { useEffect, useState } from 'react';
import './App.css';

const UsersForm = ({addUsers,updateUsers,userEdit,selectUsers}) => {
  
        const [name,setName]= useState("");

        const [lastName, setLatName] = useState("");
        const [email,setEmail]= useState("");
    
    
        const [birthday, setBirthday] = useState("")
        const [password, setPassword] = useState("")
    
      useEffect(()=>{
          console.log("Cambio productEdit")
    
          if(userEdit){
              setName(userEdit.first_name);
              setLatName(userEdit.last_Name);
              setEmail(userEdit.email)
              setBirthday(userEdit.birthday)
              setPassword(userEdit.password)
          } else{
              setName("");
              setLatName("");
              setEmail("");
              setBirthday("");
              setPassword("")
          }
      },[userEdit])
    
        const submit=(e)=>{
            e.preventDefault();
            const user={
              
                name:name,
                last_Name:lastName,
              email:email,
              birthday:birthday,
              password:password
            }
            
           if(userEdit){
               user.id= userEdit.id
             updateUsers(user);
           }else{
           
            addUsers(user)
        }
    
            
         
        }
        return (
            <div className='formUser'>
                <form onSubmit={submit}>
                  <h2>New User</h2>
                <div className='dateUsers'>
                  
                      <input placeholder='Name' type="text"
                             id="name"
                             onChange={e=> setName(e.target.value)}
                                 value={name}
                             />
                  
                     
                      <input placeholder='Last Name' type="text"
                             id="lastname"
                             onChange={e=> setLatName(e.target.value)}
                                 value={lastName}
                             />
                  </div>
    
                  <div className='dateUsers'>
                     
                      <input placeholder='Email' className='date' type="email"
                             id="email"
                             onChange={e=> setEmail(e.target.value)}
                                 value={email}
                             />
                  </div>

                  <div className='dateUsers'>
                    
                      <input placeholder='Password' className='date' type="password"
                      id='password'
                      onChange={e=> setPassword(e.target.value)}
                      value={password} />
                  </div>

                  <div className='dateUsers'>
                     
                      <input placeholder='mm/dd/yyyy' className='date' type="text"
                      id='birthday'
                      onChange={e=> setBirthday(e.target.value)}
                      value={birthday} />
                  </div>

                  
    
                  <button className='buttonDate' >Upload</button>
    
                  {
                      userEdit &&
                      <button type='button'
                        onClick={()=> selectUsers(null)}
                      >Cancelar</button>
                  }
                </form>
            </div>
    );
}

export default UsersForm;
