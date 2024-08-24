let precio = parseInt(prompt("precio del producto"));

let iva = 0.21;

let precioFinal = ((precio * iva) + precio)

console.log("el precio final es: " + precioFinal)