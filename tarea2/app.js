let numeroMaquina = Math.floor(Math.random()*(10 - 1)+1);

let numeroUsuario = parseInt ( prompt("Adivine un numero del 1 al 10"));

let vidas= 3;
 while (numeroMaquina !== numeroUsuario && vidas > 1){
    if (numeroMaquina < numeroUsuario){
        alert("el numero a adivinar es menor al numero ingresado")
    }else{
        alert("el numero a adivinar es mayor al numero ingresado")
    }
    vidas --;
    numeroUsuario = parseInt (prompt ("Vuelve a intentarlor , tus vidas son: "+vidas));
 }

 if (numeroMaquina === numeroUsuario){
    console.log("Ganaste");
 }else {
    console.log("Perdiste");
    console.log("El numero secreto era: "+numeroMaquina);

 }