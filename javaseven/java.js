function validarForm(){
    let miYears = document.getElementById("years");
    if (miYears.value < 18) {
       alert("Si no es mayor de edad, eso es carcel NO NO");
       miYears.focus();
        return false;
    } 


    let miName = document.getElementById("name")
    if (miName.value.length < 6) {
        alert("El nombre no puede quedar vacío PEEERROOOOOOOOO");
        miName.focus();
         return false;
     } 


    let miComunidad = document.getElementById("comunidad");
    if (miComunidad.value == "Elija") {
        alert("Debe elegir comunidad");
        miComunidad.focus();
        return false;
        
    }

    let miAcepto = document.getElementById("acepto");
    if (miAcepto.checked == true) {
        alert("Debe aceptar terminos y condiciones");
        miAcepto.focus();
        return false;
        
    }
    let miPassword = document.getElementById("password");
    if (miPassword.value !="1234") {
        alert("Contraseña incorrecta")
        miPassword.focus();
        return false;
        
    }
     alert("Bienvendido al dios keo, secta drakukeo");
     return true;

}