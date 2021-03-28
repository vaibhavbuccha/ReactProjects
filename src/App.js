import React, { useState } from 'react';
import Tweet from './tweet';
import './App.css';


function App(){
  const [users, setUsers] = useState([
    {name: "Vaibhav", message: "I am a developer"},
    {name: "John snow", message: "I'm a great king"},
    {name: "Winter is comming", message: "This is from GOT session 1."}
  ])
  
  return(
    <div className="app" >
      {
        users.map((user) => (
          <Tweet name={user.name} message={user.message} />
        ))
      }
    </div>
  )
}


export default App;