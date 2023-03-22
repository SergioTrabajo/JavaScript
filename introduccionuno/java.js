
    //   función que multiplica dos números
function multiplicarDosNumeros(){
    let numero1=prompt("Dime un numero");
    let numero2=prompt("Dime otro");
    let producto=numero1*numero2;
    alert(" El proucto de " +numero1 +" y "+numero2+" es "+producto);    
}
function restoEntreTres(){
    let numero = prompt("Dime un numero");
    let resto = numero % 3; //resto de dividirlo entre 3
    // alert(" El resto de divir " + numero + " entre 3 es " + resto);
    if ( resto==0 ) {
        alert(" Es múltiplo de 3");
    }
    else{ 
        alert("NO es múltiplo de 3");
    }
}
function divisible( divisior ){
    numero=prompt("Dime un número");
    resto= numero % divisior
    if (resto==0) {
        alert("Es multiplo de " + divisor);
    } else {
      alert("NO es multiplo de " + divisor);  
    }
}
    