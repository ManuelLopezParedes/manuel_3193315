horizontal();
vertical();
cuadro();
tablas();
canasta();

function horizontal(){
    numero=parseInt(prompt("escribe numero de caracteres en vertical"))
    cadena=""

    for(let i=1;i<=numero;i++){
        cadena=cadena + "x "
    }
    console.log(cadena)
}

function vertical(){
    numero2=parseInt(prompt("escribe numero de caracteres en horizontal"))
    cadena2=""

    for(let i=1;i<=numero2;i++){
        cadena2=cadena2 + "x \n"
    }
    console.log(cadena2)
}

function cuadro(){
    numero=parseInt(prompt("escribe numero de caracteres en horizontal para el cuadrado"))

    for(let i =1; i <=numero; i++){
        cadena=""
        for(let j=1; j<=numero; j++){
            cadena = cadena + "x"
        }
    console.log(cadena + "\n")
    }
}

function tablas(){
    for(let i =1; i <=10; i++){
        for(let j=1; j<=10; j++){
            res=i*j
            console.log(i + "x" + j + "=" + res)
        }
    }
}

function canasta(){
    frutas = ["manzana","pera","mango","platano","uva","mamey","sandia","fresa","papaya","mora"]
    for(let i=0; i< frutas.length; i++){
        console.log(i+1 + ".-" + frutas[i])
    }
}