import { getUsers, postUsers } from "../services/calls.js"


const code = document.getElementById("code");
const leaveDate = document.getElementById("leave_Date");
const outB = document.getElementById("outB");
let estudianteNombre=document.getElementById("estudianteNombre")

let name=localStorage.getItem("nombreUsuario")
let sede=localStorage.getItem("Sede")

estudianteNombre.textContent= name +"/"+ sede;


outB.addEventListener("click", async function (a) {

    if (!code.value || !leaveDate.value){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor llena todos los campos',
        });
        return;
    }

else{
let usuarios = await getUsers("pc");

    if(code.value==code){}

    const { value: accept } = await Swal.fire({
        title: "Terminos y condiciones",
        input: "checkbox",
        inputValue: 1,

        
        text: `
          Si viajas en transporte público, debes resguardar tu equipo en tu bolso personal, no exponerlo.
          Si llevas el equipo, procura ir acompañado.
          Si está lloviendo, procura llevar el equipo en un vehículo apropiado para evitar algún daño.
        Evitar jugar, descargar o utilizar el equipo para otros motivos que no sean relacionados con el estudio.
          `,
        inputPlaceholder: `
          I agree with the terms and conditions
        `,
        confirmButtonText: `
          Continue&nbsp;<i class="fa fa-arrow-right"></i>
        `,
        inputValidator: (result) => {
          return !result && "Tienes que aceptar los términos y condiciones";
        }
      });
      if (accept) {
        Swal.fire("Excelente, Proximamente el profesor se comunicará contigo :)");
      }
    a.preventDefault();  
    const Dates = {
        "nombre":name,
        "code": code.value,
        "leaveDate": leaveDate.value,
        "Sede": sede,
    };

    

    await postUsers(Dates, "pc");
}




});
