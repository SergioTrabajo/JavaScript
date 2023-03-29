function validaForm(){
    let miEdad = document.getElementById("edad");

    if (miEdad.value < 18) {
        alert ("No puede ser menor de 18 años");
         return false;    
        //  devuelve false y se sale de función
    } 
    let miNombre = document.getElementById("name")
    
    if (miNombre.value =="") {
        alert ("El nombre tiene que estar completo");
         return false;    
        //  devuelve false y se sale de función
    } 
    alert("Datos correctos, procedo a enviar");
    return true; //datos correctos y sale
}