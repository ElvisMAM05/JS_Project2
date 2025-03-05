import { postUsers, getUsers } from "../services/calls.js";

const user_Name = document.getElementById("user_Name");
const password = document.getElementById("password");
const user_Email = document.getElementById("user_Email");
const edad = document.getElementById("edad");
const Sede = document.getElementById("Sede");
const send = document.getElementById("send");

send.addEventListener("click", async (e) => {
    console.log("Helo")
    e.preventDefault();
    

    const usuarios = await  getUsers("users");
    let userExists = false;

    usuarios.forEach(usuario => {


        if (usuario.user_Email === user_Email.value) {
            userExists = true;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El correo ya existe.",
                footer: '<a href="#">¿Por qué tengo este problema?</a>'
            });
        }
        

        if(user_Name.value ===""||user_Email.value===""||password.value===""||edad.value===""||Sede.value===""){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Los campos están vacios .",
                footer: '<a href="#">¿Por qué tengo este problema?</a>'
            });


        }else{
            if (!userExists) {
                let registrado = {
                    "user_Name": user_Name.value,
                    "user_Email": user_Email.value,
                    "password": password.value,
                    "Sede": Sede.value,
                    "Edad": edad.value,
                    "rolUsuario": "estudiante"
                };
                postUsers(registrado, "users");
                Swal.fire("Te has registrado");
                setTimeout(() => {
                    window.location.href = "/sesion/inicioSesion.html"
                }, 1000);
        
            }
        }
            


        


    });


    
  
});
