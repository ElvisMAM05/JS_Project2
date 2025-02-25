import { postUsers } from "../services/calls"

const name=document.getElementById("name")
const code=document.getElementById("code")
const leaveDate=document.getElementById("leave_Date")
const outB= document.getElementById("outB")

outB.addEventListener("click",async function(a) {
    a.preventDefault()  
    const Dates={
        "name": name.value,
        "code": code.value,
        "leaveDate": leaveDate.value,
    }

    postUsers(Dates)
        
    });
    