import { getUsers, postUsers } from "../services/calls.js"


const code = document.getElementById("code");
const leaveDate = document.getElementById("leave_Date");
const outB = document.getElementById("outB");
let estudianteNombre=document.getElementById("estudianteNombre")

let name=localStorage.getItem("nombreUsuario")
let sede=localStorage.getItem("Sede")

estudianteNombre.textContent= name +"/"+ sede;


outB.addEventListener("click", async function (a) {

    a.preventDefault();  
    const Dates = {
        "nombre":name,
        "code": code.value,
        "leaveDate": leaveDate.value,
        "Sede": sede,
    };

    await postUsers(Dates, "pc");
});
