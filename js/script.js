const imagen1 = document.querySelector(".remol");
const imagen2 = document.querySelector(".luz");
const imagen3 = document.querySelector(".punos");
const cruz = document.querySelector(".divCruz");

function cambiarColor (){
    cruz.style.backgroundColor = "blue";
}
function cambiarPosicion (){
    imagen3.style.order = -1;
}
function volverAtras (){
    cruz.style.backgroundColor = "white";
    imagen3.style.order = 0;
}
imagen1.addEventListener("click", cambiarColor);
imagen2.addEventListener("click", cambiarPosicion);
imagen3.addEventListener("click", volverAtras);