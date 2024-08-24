var var1 = prompt("dame un valor");
var var2 = prompt("dame otro valor")

console.log("antes de cambiar var1 = " + var1 + " y var2 = " + var2);

var tmp = var1;
var1 = var2;
var2 = tmp;

console.log("despues de cambiar var1 = " + var1 + " y var2 = " + var2);