import { createContext } from "react";
// Este es un estado que cualquier componente puede consumir
const UserContext = createContext() // Es una funtion que te retorna un estado - Separar ese estdo de otros estados

export default UserContext;