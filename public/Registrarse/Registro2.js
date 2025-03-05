import { getUsers, postUsers } from "../services/calls.js";

const user_Name = document.getElementById("user_Name");
const password = document.getElementById("password");
const user_Email = document.getElementById("user_Email");
const edad = document.getElementById("edad");
const Sede = document.getElementById("Sede");
const send = document.getElementById("send");


send.addEventListener("click",async(e)=>{
e.preventDefault()
const usuarios=await getUsers("users")



    let registrado={

        "User_Name": user_Name.value,
        "User_Email": user_Email.value,
        "password":password.value,
        "edad": edad.value,
        "sede": Sede.value,
        "rolUsuario": "estudiante"
    
    }
    postUsers(registrado,"users")
    
});



