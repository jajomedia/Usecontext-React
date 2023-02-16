import './App.css';
import React from "react";
import Profile from './components/Profile';
import UserList from './components/UserList';

// Importar el CONTEXT
import UserState from './context/User/UserState';
// Importar componentes

function App() {
  return (
    <UserState>
      <UserList />
      <Profile />
    </UserState>
  );
}

export default App;
