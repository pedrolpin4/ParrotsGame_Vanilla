let lista = document.querySelector(".lista");
let a = [];
let quantidade = Number(prompt('Escolha o número de cartas (números pares de 4 a 14)'));
const imagens = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif" ];

while (!(quantidade >= 4 && quantidade <= 14 && !(quantidade%2))){
    quantidade = Number(prompt('Escolha o número de cartas (números pares de 4 a 14)'));
}

const cartinhaAleatoria = function (){
    let indice = Math.ceil(Math.random() * imagens.length) - 1;
    let cartinha = `
    <li onclick = "virarCarta(this)">
        <div class = "face front-face">
            <img src = "Images/front.png" class = "front-parrot">
        </div>
        <div class = "face back-face">
            <img src = "Images/${imagens[indice]}" class = "gif">
        </div>
    </li>`;
    imagens.splice(indice, 1);
    return cartinha;
}

const adicionarArray = function (){
    let cartinha = cartinhaAleatoria();
    a.push(cartinha, cartinha);
}

function ordemAleatoria() {
    return (Math.round(Math.random())-0.5);
}

const AdicionarEmbaralhar = function (){
    for(let i = 0; i < (quantidade/2); i++){
        adicionarArray();       
    }    
    a.sort(ordemAleatoria);
    for(let i = 0; i < quantidade; i++){
        lista.innerHTML += a[i];
    }
}

AdicionarEmbaralhar();

let contador = 0;
let ultimaCartaB = 0;
let ultimaCartaF = 0;

const virarCarta = function(elemento) {
    let backFace = elemento.querySelector(`.back-face`);
    let frontFace = elemento.querySelector(`.front-face`);
    if(!(backFace.classList.contains("back-face-virada"))){
        contador ++;
        frontFace.classList.add("front-face-virada");
        backFace.classList.add("back-face-virada"); 
        console.log(contador);
        if (!(contador%2)){
            console.log(ultimaCartaB);
            console.log(ultimaCartaF);
            let src1 = ultimaCartaB.childNodes[1].src;
            let src2 = backFace.childNodes[1].src;
            verificaSeIgual(src1, src2, frontFace, backFace);
            console.log(src1);
        }
        verificaSeAcabou();
        ultimaCartaB = backFace; 
        ultimaCartaF = frontFace;   
    }
}

const verificaSeIgual = function (a, b, c, d){
    let ub = ultimaCartaB;
    let uf = ultimaCartaF;
    if(a !== b){
        setTimeout(function (){
            c.classList.remove("front-face-virada");
            d.classList.remove("back-face-virada");
        }, 1000)
        setTimeout(function (){
            ub.classList.remove("back-face-virada");
            uf.classList.remove("front-face-virada");        
        }, 1000)
    }
}

const verificaSeAcabou = function () {
    let cartasViradas = document.querySelectorAll(".back-face-virada");
    if (cartasViradas.length === quantidade){
    alert(`Você ganhou em ${contador/2} jogadas e ${segundos - 1} segundos`);
    clearInterval(idRelogio);
    let simOuNao = prompt("Quer reiniciar?");
    if(simOuNao === "sim"){
        reiniciar();
    } else {
        parar();
    }
    }   
}

let segundos = 0;

let relogio = function (){
    let timer = document.querySelector(".relogio");
    console.log(timer);
    let inner = `Contador: ${segundos}`
    timer.innerHTML = inner;
    segundos++;
}

relogio();

let idRelogio = setInterval(relogio, 1000);

let reiniciar = function () {
    let cartasB = document.querySelectorAll(".back-face-virada");
    let cartasF = document.querySelectorAll(".front-face-virada");
    cartasB.forEach(removerBack);
    cartasF.forEach(removerFront);
    clearInterval(idRelogio);
    reiniciarRelogio();
    a.sort(ordemAleatoria);
    lista.innerHTML = "";
    a.forEach(add);
    segundos = 0;
    contador = 0;
}

let add = function(elemento) {
    lista.innerHTML += elemento;
}

let removerBack = function (elemento){
    elemento.classList.remove("back-face-virada");
}

let removerFront = function (elemento){
    elemento.classList.remove("front-face-virada");
}

let int = 0;

let reiniciarRelogio = function (){
    clearInterval(int);
    int = setInterval(relogio, 1000);
}

let parar = function () {
    clearInterval(int);
}