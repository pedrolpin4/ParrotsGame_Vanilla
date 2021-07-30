let lista = document.querySelector(".lista");
let a = "";
let quantidade = Number(prompt('Escolha o número de cartas (números pares de 4 a 14)'));
const cartinha = `<li onclick = "virarCarta()">
    <img src = "Images/front.png" class = "front-parrot">
</li>`;

console.log(lista);
console.log(a);


const adicionar = function (){
    if (quantidade >= 4 && quantidade <= 14 && !(quantidade%2)){
    a += cartinha;
    }    
}

for(let i = 0; i < quantidade; i++){
    adicionar();       
}    

lista.innerHTML = a;



