function hamburguesa (nombre, carne, ingredientes, salsas, precio) {
    this.nombre = nombre;
    this.carne= carne;
    this.ingredientes= ingredientes;
    this.salsas= salsas;
    this.precio=precio; 
    this.hablar= function () {console.log("Hola ya esta en camino tu hamburguesa "+ this.nombre + " de " + this.carne + " con un costo de $ " + this.precio)}
    
}


const hamburguesa1 = new hamburguesa  ("Cheddar","ternera","cheddar y bacon","barbacoa", 750,);
hamburguesa1.hablar();

const hamburguesa2 = new hamburguesa  ("Doble Cheddar ","bondiola","doble cheddar, huevo frito y bacon ","barbacoa", 1050,);
hamburguesa2.hablar();
