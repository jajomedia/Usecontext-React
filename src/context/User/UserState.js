// DEFINICION DEL ESTADO Y FUNCIONES ALTERAR EL ESTADO
import axios from "axios";
import React, { useReducer } from "react";
import UserContext from "./UserCotext";
import UserReducer from "./UserReducer" // Nos permite definir que funtion vamos a ejecutar y que dato le vamos a pasar

// State
// Esta es nuestra difinición del estado, aqui se escribe el estado a consumir y las funciones que van alterar ese estado
const UserState = (props) => { // Un state se define dentro de una objeto
    const initialState = {
        users: [],
        selectedUser: null
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)
    
    const getUsers = async () => { // Esta es la funtion para llenar el state - para que cuando profile y userList quieran consumir el estado se dirigan a UserState
      const respuesta =  await axios.get( 'https://reqres.in/api/users' )
      console.log(respuesta);
    }  
    // Obtener un unico usuario

    
    const getProfile = async (id) => { // Traer un unico usuario - nos trae un unico objeto para llenar UserState
        const resp =  await axios.get( 'https://reqres.in/api/users/' + id );
        console.log(resp);
     }
// Obtener todos los usuarios

    return (
        <UserContext.Provider value={{ 
            users: state.users, selectUser: state.selectUser, 
            getUsers, 
            getProfile 
        }}>
            {props.children} 
        </UserContext.Provider>
        // {props.children} van a ser losd componentes que van estar dentro del componente UserContext
    )
}

export default UserState;