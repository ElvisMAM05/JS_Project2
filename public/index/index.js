import { postUsers } from "../services/calls.js"
const user_Name=document.getElementById("user_Name")
let password=document.getElementById("password")
const send=document.getElementById("send")

send.addEventListener("click",async(event)=>{
    console.log("Hola");
    
    event.preventDefault()
    let usuario = {
        "user_Name": user_Name.value,
        "password": password.value,
        "tipoUsuario": "estud"   
    }
    await postUsers(usuario,"users")

})

