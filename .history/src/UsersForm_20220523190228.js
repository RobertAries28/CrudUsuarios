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
              setName(userEdit.name);
              setLatName(userEdit.lastName);
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
                lastName:lastName,
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
                      <label htmlFor='name'>Name</label>
                      <input type="text"
                             id="name"
                             onChange={e=> setName(e.target.value)}
                                 value={name}
                             />
                  
                      <label htmlFor='lastname'>Last Name</label>
                      <input type="text"
                             id="lastname"
                             onChange={e=> setLatName(e.target.value)}
                                 value={lastName}
                             />
                  </div>
    
                  <div className='dateUsers'>
                      <label htmlFor='email'>Email</label>
                      <input type="email"
                             id="email"
                             onChange={e=> setEmail(e.target.value)}
                                 value={email}
                             />
                  </div>
                  <div className='dateUsers'>
                      <label htmlFor='birthday'>Birtday</label>
                      <input type="text"
                      id='birthday'
                      onChange={e=> setBirthday(e.target.value)}
                      value={birthday} />
                  </div>

                  <div className='dateUsers'>
                      <label htmlFor='Password'>Password</label>
                      <input type="password"
                      id='password'
                      onChange={e=> setPassword(e.target.value)}
                      value={password} />
                  </div>
    
                  <button >Submit</button>
    
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
