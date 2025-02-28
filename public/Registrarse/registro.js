import { postUsers, getUsers } from "../services/calls.js";

const user_Name = document.getElementById("user_Name");
const password = document.getElementById("password");
const edad = document.getElementById("edad");
const Sede = document.getElementById("Sede");
const send = document.getElementById("send");

send.addEventListener("click", async (e) => {
    e.preventDefault();

    const usuarios = await getUsers("users");
    let userExists = false;

    usuarios.forEach(usuario => {
        if (usuario.user_Name === user_Name.value) {
            userExists = true;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El nombre de usuario ya existe.",
                footer: '<a href="#">¿Por qué tengo este problema?</a>'
            });
        }
    });

    if (!userExists) {
        let registrado = {
            "user_Name": user_Name.value,
            "password": password.value,
            "Sede": Sede.value,
            "Edad": edad.value,
            "rolUsuario": "estudiante"
        };
        await postUsers(registrado, "users");
        Swal.fire("Te has registrado");
    }
});
