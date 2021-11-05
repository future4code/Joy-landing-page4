const btnAbrir = document.querySelector(".burger");
const caixa = document.querySelector(".caixa");
const linha = document.querySelector(".linha");
const nav = document.getElementById("nav");
const li = document.querySelectorAll(".li");

// btnAbrir.addEventListener('click', () => {
//    nav.classList.toggle('esconder')
//    linha.classList.toggle('esconde')
// });

document.addEventListener("click", (e) => {
  const alvo = e.target;
  if (alvo == btnAbrir || alvo == linha || alvo == caixa) {
    nav.classList.toggle("esconder");
    linha.classList.toggle("esconde");
   }
   
   if (!nav.classList.contains("esconder")) {
      for (let i = 0; i < li.length; i++) {
         if(li[i]==alvo){
            nav.classList.add("esconder");
            linha.classList.remove("esconde");
      }
    }
  }
});
