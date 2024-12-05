const frm = document.querySelector("form")
const code = document.querySelector("#outCode")
const desc = document.querySelector("#outDesc")
const hobby = document.querySelector("#outHobby")
const video = document.querySelector("#video")
const img = document.querySelector("img")
frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nome = frm.inCode.value
    if (nome =="BNS2211"){
        code.innerHTML = "BRUNO NASCIMENTO SANTIAGO(fofoso)"
        desc.innerHTML = "DESCRIÇÂO: Estudante de TI, e ama programar e ficar com a namorada \n "
        hobby.innerHTML = "HOBBY : Programar,cozinhar,ler e sentir saudades da mo dele(Isabelly Kely)"
        img.setAttribute("src","js/bruno.jpg")
        
        video.innerText = "Homenagem de fofoso"
    }else{
        code.innerText = "Nome Invalido, quem é esse?😒"}
})