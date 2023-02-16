import { GET_USERS, GET_PROFILE } from "../types";


// vamos arecibir el state (Como esta el estado) action(Que quiero hacer con el State)
// payload son los datos que me estan pasando en esta funtion y type es por ejemplo GET_PROFILE
export default (state, action) => { 
    const {payload, type} = action;

    switch(type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_PROFILE:
            return{
                ...state,
                selectedUser: payload
            }
            default:
                return state;
    }

}