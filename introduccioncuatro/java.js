function cambiaTítulo(){
    let miTítulo = document.getElementById ( "título" );
    
    if (miTítulo.innerHTML == "Título de página") {
        miTítulo.innerHTML = "Hola gente del github";
    } else {
        miTítulo.innerHTML = "SA MATO PAAACOOOOO";
    } 
}
function cambiarAncho(){
    let miImage = document.getElementById("paco")
    miImage.width = "500";
}
function cambiarImage(){
    let miImage = document.getElementById("paco")
    // miImage.src = "images/paddock.jpg"
    miImage.src = "images/nose.jpg"
}
function cambiarTitle(){
    let title = document.getElementById("título");
    title.style.color = "red";
    title.style.fontSize = "4em";
    title.style.fontStyle = "italic";
}
function desaparecerImage(){
    let miImage = document.getElementById("paco")
    miImage.style.display = "none"
}