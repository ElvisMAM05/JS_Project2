import { getUsers } from "../services/calls"

const register= document.getElementById("register")
let nombre=""
let fecha=""
let sede=""
let edad=""



const usuarios= await getUsers("users")
const exitDates=await getUsers("pc")
usuarios.forEach(usuario => {
     



});