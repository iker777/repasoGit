const btnJs = document.querySelector('.btn__js');
console.log(btnJs)


function cambiarColorArticle1(){
    const titulo = document.querySelector('.dago__titulo')
    const parrafo = document.querySelector('.dago__parrafo')
    titulo.classList.add('cambiarColorTitulo')
    parrafo.classList.add('cambiarColorTitulo')  
}
function cambiarColorArticle2(){

}

btnJs.addEventListener('click', cambiarColorArticle1)