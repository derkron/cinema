let peliculas=[
    {
        nombre:"Hallowen la noche final",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=4cc9a9c8-c7bb-4462-9675-2dd057e889f0",
        sinopsis:"Cuatro años después de la desaparición de Michael Myers, el joven Corey lo encuentra maltrecho en las alcantarillas. Poco a poco, se establece un extraño vínculo entre estos dos personajes unidos por la venganza y la locura"

    },
    {
        nombre:"La noche del demonio",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/jeeppers.jpg?alt=media&token=c6c07002-c476-4095-900f-011047e967dc",
        sinopsis:"Josh y Renai se mudan a una nueva casa, donde su hijo tiene un terrible accidente y queda en estado de coma."
    },
    {
        nombre:"Minions",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/minions2posternuevo.jpg?alt=media&token=dc7c97ca-ebb7-4342-b0c9-a9fd7b0f1af1",
        sinopsis:"En los años 70, Gru crece siendo un gran admirador de "+"Los salvajes seis"+", un supergrupo de villanos. Para demostrarles que puede ser malvado, diseña un plan con la esperanza de formar parte de la banda."
    },
    {
        nombre:"Tadeo",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/tadeo3nuevoposter.jpg?alt=media&token=3b31d4c0-3c0b-4317-ba8a-fc47a47e2a84",
        sinopsis:"Tadeo vuelve a meter la pata. Esta vez, el disparatado arqueólogo destroza un sarcófago y libera la maldición de la momia que había dentro. Los amigos de Tadeo están en peligro, y solo él puede salvarlos."
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690",
        sinopsis:"Una secuela que seguirá explorando el incomparable mundo de Wakanda y todos los ricos y variados personajes presentados en la película de 2018"
    },
    {
        nombre: "Los reyes del mundo",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/LOS%20REYES%20DEL%20MUNDO1.jpg?alt=media&token=bd8c16f5-b51d-48b2-921e-3199ce7e9ef4",
        sinopsis:"Los reyes del mundo es una película de carretera dramática dirigida por Laura Mora. Ambientado en Medellín, el drama trata sobre cinco adolescentes amigos que viven en las calles. Como resultado, abandonan una ciudad colombiana para comenzar de nuevo en el campo"
    },
    {
        nombre: "Quantumania",
        duracion:125,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/QUANTUMANIA1.jpg?alt=media&token=7db61d12-f9aa-4832-b138-120c8a7c6ce0",
        sinopsis:"Junto a los padres de Hope, Hank Pymy Janet Van Dyne, la familia se encuentra explorando el Reino Cuántico, mientras interactúan con extrañas nuevas criaturas y se embarcan en una aventura que los llevará más allá de los límites de lo que pensaban que era posible."
    },
    {
        nombre: "Super Mascotas",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/SUPERMASCOTASNUEVO.jpg?alt=media&token=400f6053-e290-41b8-aa28-7f2660e1e967",
        sinopsis:"En DC Liga De Súper-Mascotas,Krypto el superperro y Superman son mejores amigos inseparables que comparten los mismos superpoderes y luchan juntos contra el crimen en Metropolis. Cuando Superman y el resto de la Liga de la Justicia son secuestrados, Krypto debe convencer a una banda de animales (Ace el sabueso, PB el minicerdo, Merton la tortuga y Chip la ardilla) a dominar sus propios poderes recién descubiertos y ayudarlo a rescatar a los superhéroes."
    },
    {
        nombre: "La llorona",
        duracion:75,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/LA%20LEYENDA%20DE%20LA%20LLORONA.jpg?alt=media&token=c1a5301d-affe-4b99-a976-b5019878985f",
        sinopsis:"Mientras están de vacaciones en México, una pareja descubre que la desaparición de su hijo está ligada a una maldición sobrenatu"
    },
    {
        nombre: "La noche del apocalipsis",
        duracion:135,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/LA%20NOCHE%20DEL%20APOCALIPSIS1.jpg?alt=media&token=a4a73f19-da64-4129-a697-4331d531dba3",
        sinopsis:"Un fin de semana tranquilo de una pareja devota toma un giro extraño cuando los integrantes de un extraño culto y su maníaco líder llegan para cumplir una profecía apocalíptica."
    }
]

//creamos una referencia al espacio html donde queremos 
//hacer el render (PINTAR ETIQUETAS)

let etiquetafila=document.getElementById("fila")

//SI YA TENGO DATOS QUE NORMALMENTE LLEGAN AL FRONT 
//COMO UN ARREGLO DE OBJETOS DEBEMOS RECORRER Y DEPURAR
//DICHA INFORMACION

peliculas.forEach(function(pelicula){
    //para pintar la informacion de cada pelicula debemos
    //aplicar una tecnica conocida como traversing
    //TRAVERSING== CREAR ETIQUETAS DE HTML DESDE JS 
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let poster=document.createElement("img")
    poster.classList.add("img-fluid","w-100")
    poster.src=pelicula.poster

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center","fw-bold")
    nombre.textContent=pelicula.nombre

    let duracion=document.createElement("h5")
    duracion.classList.add("text-start","fw-bold")
    duracion.textContent="Duracion:"+ pelicula.duracion+" Min"

    let sinopsis=document.createElement("p")
    sinopsis.classList.add("d-none")
    sinopsis.textContent=pelicula.sinopsis


    //padres  e hijos
    etiquetafila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
    tarjeta.appendChild(sinopsis)
    
    
    

})


//Escuchando el evento clic en alguna pelicula de la cartelera
let peliculaSeleccionada={}
etiquetafila.addEventListener("click",function(evento){
    if(evento.target.classList.contains("img-fluid")){
        
        //Obteniendo los datos de la pelicula
        peliculaSeleccionada.imagen=evento.target.parentElement.querySelector("img").src
        peliculaSeleccionada.titulo=evento.target.parentElement.querySelector("h3").textContent //console.log(evento.target.parentElement.querySelector("h3").textContent)
        peliculaSeleccionada.duracion=evento.target.parentElement.querySelector("h5").textContent
        peliculaSeleccionada.sinopsis=evento.target.parentElement.querySelector("p").textContent

        //Enviando nuestros datos de la pelicula seleccionada a la memoria
        localStorage.setItem("pelicula",JSON.stringify(peliculaSeleccionada))

        window.location.href="./src/view/verinfopelicula.html"
    }
})