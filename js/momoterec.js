const frm = document.querySelector("form")
const presente= document.querySelector("#presente")
const resp = document.querySelector("#pequeno")
const cita = document.querySelector("#cita")


frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    presente.className= "ocultar"
    resp.innerHTML= `<i>"Mas ela não é uma rosa comum,\n é a tua rosa foi o tempo que perdeste com\n a tua rosa que fez a tua rosa tão importante,\ntua rosa é entre outras a unica no mundo e deves cuida-la"</i>`
    cita.innerText= "Pequeno Princípe"
})