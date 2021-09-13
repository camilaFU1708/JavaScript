function Descuento (pPregunta) {
var numero= prompt (pPregunta)
var numeroNumerico = parseInt (numero)

return numeroNumerico;
    
}

var Producto1 = Descuento ( "ingrese el precio del primer producto");
var Producto2 = Descuento ( "ingrese el precio del segundoproducto");
var DescuentoSegundoAl50 = 2;
var TotalAPagar = Producto1 + (Producto2 / DescuentoSegundoAl50);
console.log (TotalAPagar);
