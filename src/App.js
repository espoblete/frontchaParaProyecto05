import './App.css';
import React, { useEffect } from 'react';
import { Users } from './components/Users';
import { UserItem } from './components/UserItem';
import { getUsers } from './api/Api';

function App() {

  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    getUsers()
    .then((data) => {
      setUsers (data);
  })
    .catch((err) => {
      console.log(err)
    });
  });

  return (
    <div className="App">
      <h1>Listado de Usuarios</h1>
      
      <Users>
        {
          users.map((user) => (
             <UserItem
                key={user._id}
                name={user.name}
                username={user.username}
                active={user.active}
             />        
          ))
        }
       
      </Users>

    </div>
  );
}

export default App;
