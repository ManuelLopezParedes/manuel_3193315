let horas = (parseInt(prompt("dame las horas")));
let minutos = (parseInt(prompt("dame los minutos")));

let segundos = ((horas * 3600) + (minutos * 60));

console.log("hay " + segundos + " segundos en " + horas + ":" + minutos + " horas");