import { getUsers } from "../services/calls"

const register= document.getElementById("register")
let nombre=""
let fecha=""
let sede=""
let edad=""



const usuarios= await getUsers("users")
const exitDates=await getUsers("pc")
usuarios.forEach(usuario => {

    const user=usuario.data()
    const id=usuario.id
    const name=user.User_Name
    const rol=user.rolUsuario                   
    const sede=user.Sede
    const fecha=user.Fecha
    const edad=user.Edad

});