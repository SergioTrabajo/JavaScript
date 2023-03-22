function juegoSecreto(){
    let numsecret = 8;
    let num = prompt(" Dime un número del 1 al 10 ");


    if (num == numsecret){
        alert("Es el numero secreto");
    } 
    if (num > 10 || num < 0) {
        alert(" No puede ser mayor de 10 ni menor de 0");
        return;
    } 
    if (num < numsecret){
        alert(" POR POCO!!!");
    }
    if(num > numsecret){
        alert(" TE HAS PASADO!!!!");
    }
    else {
        
    }
}
function userPassword(){
    let user = prompt(" Introduzca usuario ");
    let password = prompt(" Introduzca contraseña");
    
    if (user == "admin" && password == "1234") {
        alert(" Acceso autorizado ");
    } else {
        alert(" Acceso denegado: Usuario o Contraseña Incorrecta ");
        
    }
}
function cambiarPassword(){
    let cambiarpassword = prompt(" Introduzca su contraseña");
    let nuevapassword = prompt(" Introduzca la nueva contraseña");
    let confirmarpassword = prompt(" Confirmar contraseña nueva")
    
    if(nuevapassword == confirmarpassword){
        alert(" Contraseña cambiada ");

    }else{
        alert(" Contraseña incorrecta ");
    }
}