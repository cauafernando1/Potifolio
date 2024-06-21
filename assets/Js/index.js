const fund1 = document.querySelector("#fundo-1");
const calcjuros = document.querySelector(".calc-juros");
const fechar1 = document.querySelector("#fechar-1");
const fund2 = document.querySelector("#fundo-2");
const telalog = document.querySelector(".tela-login");
const fechar2 = document.querySelector("#fechar-2");
calcjuros.addEventListener('click', ()=> { 
    fund1.classList.add('abrir-jane')
});
fechar1.addEventListener('click', ()=>  {
    fund1.classList.remove('abrir-jane')
}
);
telalog.addEventListener('click', ()=> { 
    fund2.classList.add('abrir-jane')
});
fechar2.addEventListener('click', ()=>  {
    fund2.classList.remove('abrir-jane')
}
);