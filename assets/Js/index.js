const imgproject = document.querySelectorAll(".img-project")
const fundo = document.querySelectorAll(".fundo")
const fechar = document.querySelectorAll(".fechar")

imgproject.forEach((imagebtn, indice) =>{
    imagebtn.addEventListener("click", ()=>{
        fundo[indice].classList.add("abrir-jane")
    })
})
fechar.forEach((fecharb, indice) =>{
    fecharb.addEventListener("click", ()=>{
        fundo[indice].classList.remove("abrir-jane")
    })
})