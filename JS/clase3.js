const numero1 = parseInt(prompt ("Ingrese un número"));
console.log (numero1);

let resulado = numero1;

for( let i=0; i<5; i++) {
const numero2 = parseInt(prompt ("Ingrese otro "));
resulado += numero2;
alert (resulado);
}

const texto = prompt ("ingrese un texto");

let textoCompleto = texto;
console.log (textoCompleto);

for (let i=0; i<4; i++ ) {
    const nuevoTexto = prompt ("ingrese un texto");
    textoCompleto += nuevoTexto;
    console.log (textoCompleto);
}



const Año = parseInt( prompt("Ingrese año del último mundial"));
console.log (Año);

let resultado = Año;

for( let i=0; i<5; i++){
    const numero2 = 4;
     resultado += numero2;
     console.log ("Los primeros 5 mundiales se juegan " + resultado);
    
}

