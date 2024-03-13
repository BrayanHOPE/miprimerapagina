//alert("Hola este es mi Javascript");

//let contenidoTitulo = 'Nombre';

//let titulo = document.querySelector();
//titulo.innerHTML = contenidoTitulo;


//let textoTitulo = titulo.innerTxt;
//console.log(textoTitulo);


// if(textoTitulo == 'Nombre'){
//     titulo.innerHTML = 'otro';
// } else {
//     console.log('no se cumple');
// }

// let titulo = 'ola';


// let acercaDeMi = document.getElementById('yo');
// acercaDeMi.innerHTML;



// let textAcercaDeMi = acercaDeMi.innerText;
// console.log(textAcercaDeMi);
// let nombre = 'Marco';
// let region = 'Piura';
// let ciudad = 'chimbote';

// let parrafo = document.querySelector('.parrafo2');

// function cambiarTexto(nombre ,region ,ciudad){
//     let contenido = 'Me llamo ' ${nombre}', nací en ' ${region} ' y vivo en'${ciudad}'. Me gusta los videojuegos y salir a jugar futbol. Me encantaría comentarte los diferente tipos de autos para poder ayudarte en tu seleccion de compra.Cualquier duda que tengas ,estoy aqui para ayudarte . No lo dudes en este blog estoy para ayudarte.';
//     return contenido;
// }
// parrafo.innerText = cambiarTexto(nombre , region, ciudad);

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
