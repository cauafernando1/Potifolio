const fund = document.querySelector(".fundo");
const telalog = document.querySelector(".tela-login");
const fechar = document.querySelector(".fechar");

telalog.addEventListener('click', ()=> { fund.classList.add('abrir-jane')
});
fechar.addEventListener('click', ()=>  {
    fund.classList.remove('abrir-jane')
}
);