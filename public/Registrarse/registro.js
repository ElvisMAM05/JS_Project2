
import Swal from "sweetalert2";
import { postUsers } from "../services/calls.js";

const user_Name = document.getElementById("user_Name");
const password = document.getElementById("password");
const edad = document.getElementById("edad");
const Sede = document.getElementById("Sede");
const send = document.getElementById("send");

send.addEventListener("click", async (e) => {
    e.preventDefault();

    let registrado = {
        "user_Name": user_Name.value,
        "password": password.value,
        "Sede": Sede.value,
        "Edad": edad.value,
        "rolUsuario": "estudiante"
    };
    await postUsers(registrado, "users");


    if(user_Name.value===) {
        
    }
    Swal.fire("Te has registrado");


})
