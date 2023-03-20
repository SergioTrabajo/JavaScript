function calcularCuadrado(){
    let numero = prompt ("Dime un número que calculo su cuadrado");
    let cuadrado = numero * numero;
    alert(" El cuadrado de " + numero + " es " + cuadrado); 
}
function areaRectangulo(){
 let base = prompt ("Dime la base del rectangulo");  
 let altura = prompt ("Dime la base del rectangulo");
 let areaRectangulo = base * altura;
 alert(" El area del rectagulo con base" + base + " y altura "+ altura + " es " + areaRectangulo);
}
function areaCuadrado(){
    let base = prompt ("Dime la base del cuadrado");
    let altura = prompt ("Dime la altura del cuadrado");
    let areaCuadrado = base * altura;
    alert(" El area del cuadrado con base " + base + " y altura " + altura +" es " + areaCuadrado);
}
function division(){
    let dividiendo = prompt ("Dime el primer numero");
    let divisor = prompt ("Dime el segundo numero");
    let cociente = dividiendo/divisor;
    if (divisor == 0) {
        alert("ERROR");
    } else {
        alert(" El resultado de la division de  " + dividiendo + " entre " + divisor + " es " + cociente);
    }
}
function login(){
    let name = prompt ("Nombre de usuario")
    if (name == "Admin") {
        alert("BIENVENIDO")
    } else {
        alert("ACCESO DENEGADO")
    }
}
