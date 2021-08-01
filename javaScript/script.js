let lista = document.querySelector(".lista");
let a = [];
let quantidade = Number(prompt('Escolha o número de cartas (números pares de 4 a 14)'));

while (!(quantidade >= 4 && quantidade <= 14 && !(quantidade%2))){
    quantidade = Number(prompt('Escolha o número de cartas (números pares de 4 a 14)'));
}

const cartinhaAleatoria = function (){
    let imagens = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif" ];
    let indice = Math.ceil(Math.random() * 7) - 1;
    console.log(indice);

    let cartinha = `
    <li onclick = "virarCarta(this)">
        <div class = "face front-face">
            <img src = "Images/front.png" class = "front-parrot">
        </div>
        <div class = "face back-face">
            <img src = "Images/${imagens[indice]}" class = "gif">
        </div>
    </li>`;

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

const virarCarta = function(elemento) {
    let backFace = elemento.querySelector(".face .back-face")
    let face = elemento.querySelector(".face .front-face")
    backFace.transform = "rotateY(0)"
    face.transform = "rotateY(-180)"
}


