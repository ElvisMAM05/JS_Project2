import { getUsers, postUsers } from "../services/calls.js"

let name = document.getElementById("name");
const code = document.getElementById("code");
const leaveDate = document.getElementById("leave_Date");
const outB = document.getElementById("outB");
let estudianteNombre=document.getElementById("estudianteNombre")


estudianteNombre.textContent= localStorage.getItem("nombreUsuario") +"/"+ localStorage.getItem("Sede")


outB.addEventListener("click", async function (a) {

    a.preventDefault();  
    const Dates = {
        "code": code.value,
        "leaveDate": leaveDate.value,
    };

    await postUsers(Dates, "pc");
});
