import { getUsers } from "../services/calls.js"

const user_Name = document.getElementById("user_Name")
const password = document. getElementById("password")
const send = document.getElementById("send")


send.addEventListener("click",async function(e) {
    e.preventDefault()
    const usuarios = await getUsers()
    usuarios.forEach(usuario=>{
        if (usuario.user_Name === user_Name.value && usuario.password === password.value && usuario.tipoUsuario === "estud") {
            window.location.href = "estudiantes.html"
            return
        }
        else if(usuario.user_Name === user_Name.value && usuario.password === password.value && usuario.tipoUsuario === "admin"){
            window.location.href = "admin.html"
            return
        }
    })
})