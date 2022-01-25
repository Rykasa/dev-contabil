
let formulario = document.getElementById("formulario-contato")

function mostrarFormulario(){
    //formulario.className = "mostrar-formulario"
    if (formulario.classList.contains('mostrar-formulario')){
        formulario.classList.remove('mostrar-formulario');
    }else{
        formulario.classList.add('mostrar-formulario');
    }
}

function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top');

    if(window.scrollY >= 500){
        backToTopButton.classList.add('show');
    }else{
        backToTopButton.classList.remove('show');
    }
}

window.addEventListener('scroll', function(){
    backToTop();
})