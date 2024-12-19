const frmcod = document.querySelector("#frmCodigo")
const frmReclamacao = document.querySelector("#frmReclamacao")
const code = document.querySelector("#outCode")
const desc = document.querySelector("#outDesc")
const hobby = document.querySelector("#outHobby")
const video = document.querySelector("#video")
const img = document.querySelector("img")
frmcod.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nome = frmcod.inCode.value
    definirMomo(nome)
})

const definirMomo = (momo) =>{//definir momote
    if(momo.toUpperCase() =="BNS2211"){//momo BRUNO
        code.innerHTML = "BRUNO NASCIMENTO SANTIAGO(fofoso)"
        desc.innerHTML = "DESCRIÇÂO: Estudante de TI, e ama programar e ficar com a namorada \n "
        hobby.innerHTML = "HOBBY : Programar,cozinhar,ler e sentir saudades da mo dele(Isabelly Kely)"
        img.src = ("img/Bruno.png")
        
        video.innerText = "Homenagem de fofoso"
    }else if(momo.toUpperCase() == "IKSB1605"){//momo Isabelly
        code.innerHTML = "ISABELLY KELLY DOS SANTOS BRANDÃO (fofosa)"
        desc.innerHTML =" DESCRIÇÃO: Uma bailarina muito talentosa com artes em geral, a melhor bailarina do mundo"
        hobby.innerHTML = "HOBBY : Cantar,escrever,ler e sentir saudades do mo dela(Bruno)"
        img.src = ("img/Isabelly.png")

         video.innerText = ""
    
    }else if (momo.toUpperCase()=="MOMOTE"){//momo momote
        desc.innerHTML =""
        hobby.innerHTML = ""
        img.src = ("")
        code.innerHTML = "MOMOTE: Código secreto encontrado"
        video.innerText = "Ver surpresa"
        video.href = ("momoterec.html")

    } else{
        code.innerText = "Nome Invalido, quem é esse?😒"}
    }

frmReclamacao.btReclamar.addEventListener("click",()=>{
    alert("Reclamação enviada com sucesso")
    frmReclamacao.reset()
})