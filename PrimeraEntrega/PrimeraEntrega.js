var Nombre =  prompt ("Cual es tu nombre?");

alert ("Hola " + Nombre);

var pedido =  prompt ("Cual hamburguesa queres ordenar? Actualmente tenemos cheddar, bacon y clasica");

alert ("Ya estamos más cerca " + Nombre + ".Tu combo " + pedido + " está en proceso.");

var Pedido2 =  prompt ("¿Queres ordenar otro pedido?)");

if (Pedido2 === "si" )  {
    var pedidoNuevo =  prompt ("Cual?");
    alert ("Ya agregamos el segundo pedido " + Nombre + ".Tu carrito se actualizó, tus pedidos son: Combos " + pedido +  " y combo " + pedidoNuevo);

     }
    
     else  {
        alert ("Tu combo " + pedido + "continúa en el carrito")
         
        }




    var pago =  prompt ("¿Queres pagar en efectivo? Tenes $100 de descuento");
    var descuento = 100;
    var PrecioHamburguesa = 1000;

    if (pago === "si" )  {
    console.log ("Gracias por tu compra.Tu pedido costaba: $" + PrecioHamburguesa + " pero ahora en efectivo te sale: $" + ( parseInt (PrecioHamburguesa) - parseInt (descuento)) )
     }
    
     else  {
        alert ("Gracias por tu compra. Tu pedido sale: $ " + PrecioHamburguesa)
         
        }