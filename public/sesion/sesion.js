import { getUsers } from "../services/calls.js"

const user_Name = document.getElementById("user_Name")
const password = document. getElementById("password")
const send = document.getElementById("send")

send.addEventListener("click",async (e)=> {
    
    e.preventDefault()
    const usuarios = await getUsers("users")
    usuarios.forEach(usuario=>{
        if (usuario.User_Name === user_Name.value && usuario.password === password.value && usuario.rolUsuario === "estudiante") {
            
            window.location.href = "/estudiantes/estudiantes.html"
            localStorage.setItem("nombreUsuario",usuario.user_Name)
            localStorage.setItem("Sede",usuario.Sede)
    
            return
        }
        else if(usuario.user_Name === user_Name.value && usuario.password === password.value && usuario.rolUsuario === "admin"){
            console.log("b");
            window.location.href = "/administradores/admin.html"

            return
        }
    })
})