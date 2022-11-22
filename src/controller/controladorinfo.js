//Obteniendo datos de la memoria
let peliculaConsultadaenMemoria=JSON.parse(localStorage.getItem("pelicula")) 
console.log(peliculaConsultadaenMemoria)

//Asignando valores a las etiquetas que quiero controlar:


let etiquetaImagen=document.getElementById("imagenPelicula")
etiquetaImagen.src=peliculaConsultadaenMemoria.imagen

let etiquetaTitulo=document.getElementById("nombrePelicula")
etiquetaTitulo.textContent=peliculaConsultadaenMemoria.titulo

let etiquetaDuracion=document.getElementById("duracionPelicula")
etiquetaDuracion.textContent=peliculaConsultadaenMemoria.duracion

let etiquetcaSinopsis=document.getElementById("sinopsisPelicula")
etiquetcaSinopsis.textContent=peliculaConsultadaenMemoria.sinopsis

let etiquetaBanner=document.getElementById("bannerpelicula")
etiquetaBanner.textContent=peliculaConsultadaenMemoria.banner