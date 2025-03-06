import { getUsers } from "../services/calls.js"

const register= document.getElementById("Register")

const mostrarDatos = async () => {
    const users = await getUsers("users")
    const estudiantes = users.filter(user => user.rolUsuario === "estudiante")
    estudiantes.forEach(user => {
        const pbtn = document.createElement("button")
        pbtn.setAttribute("class","btn")
        pbtn.textContent = user.user_Name
        const div = document.createElement("div")
        pbtn.textContent = user.user_Name
        div.appendChild(pbtn)
        register.appendChild(div)
        pbtn.addEventListener("click", () => {
            console.log(user.user_Email);
            let div2=document.createElement("div")
            div2.setAttribute("class","containerDates")
            let p2=document.createElement("p")  
            let p3=document.createElement("p")
            p3.textContent=user.Edad + " años"
            p2.textContent=user.user_Email
            div2.appendChild(p2)
            div2.appendChild(p3)
            register.appendChild(div2)
        })

    })
}
mostrarDatos()
