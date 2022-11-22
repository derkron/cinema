let proximosEstrenos=[
    {
        nombre:"Venus",
        duracion:100,
        banner:"",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/venus_95598.jpg?alt=media&token=ea48ab2f-0d34-4a98-b671-1973110bc523",
        sinopsis:"Lucía es bailarina en una discoteca tecno de Madrid. Una noche, después de un espectáculo, roba una bolsa de viaje repleta de pastillas de éxtasis de la taquilla del dueño del club. Sorprendida por el portero, logra escapar, pero es apuñalada en una pierna en el último segundo. Sangrando profundamente y queriendo evitar el hospital, Lucía busca refugio en casa de su hermana y su sobrinita, que viven en el extrarradio en un bloque de pisos ruinoso llamado ¨Venus¨ Enseguida, Lucía empieza a notar que hay algo extraño en aquel lugar, así como en el comportamiento de los vecinos que lo habitan. Cuando su hermana desaparece una mañana, Lucía no tiene más remedio que velar por su sobrina y protegerla de un horror antiguo que se esconde tras las paredes del viejo edificio."

    },
    {
        nombre:"Noche de paz",
        duracion:101,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/noche_de_paz_95197.jpg?alt=media&token=b4f3f7da-6621-4231-9453-3b85402d1d3a",
        sinopsis:"El día de Nochebuena, un grupo de mercenarios se cuela en la propiedad de una familia adinerada secuestrando a todos los miembros. Pero no cuentan con que les hará frente el oponente menos esperado: Santa Claus (David Harbour), quien pasaba por ahí y está a punto de demostrar que de santo no tiene nada."
    },
    {
        nombre:"Kung Food, una aventura deliciosa",
        duracion:99,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/kung_food_una_aventura_deliciosa_95475.jpg?alt=media&token=82230d66-aafc-4f2d-8d2a-dcfab8c6368c",
        sinopsis:"Super Bao, un panecillo hecho al vapor, sueña con convertirse en un gran héroe, así que, a pesar de haber pasado todo tipo de penurias y tener unas habilidades de artes marciales bastante normales, decide unirse a la flota de ¨El Barco de vapor¨ y salir a combatir el mal.Durante el viaje, descubre que el objetivo real de su convoy es encontrar la ¨Piedra de los cinco sabores¨, una roca mágica que controla los sabores salado, dulce, amargo, agrio y picante, pero que en manos de un enemigo puede hacer que todo el mundo en el que viven se derrumbe.Tras una fuerte tormenta y un ataque pirata, Super Bao y Salmón, un gunkan de huevas de salmón que lucha en el bando contrario, caen al mar y, atónitos, no encuentran ningún rastro del barco. Juntos, se embarcan en busca del resto de la tripulación."
    },
    {
        nombre:"Avatar: The Way of Water",
        duracion:192,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/AVATAR%20EL%20CAMINO%20DEL%20AGUA1.jpg?alt=media&token=3bf5f9a1-32d6-4598-8e6b-d45440864bb0",
        sinopsis:"Ambientada más de una década después de los acontecimientos de la primera película, 'Avatar: El sentido del agua' empieza contando la historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que los persiguen, lo que tienen que hacer para mantenerse a salvo, las batallas que libran para seguir con vida y las tragedias que sufren."
    },
    {
        nombre: "El protector (The Enforcer)",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/el_protector_95501.jpg?alt=media&token=86b8a737-8f4e-426f-8bc2-bf24b42f62ff",
        sinopsis:"Un sicario de la mafia de Miami (Antonio Banderas) deberá sacrificarlo todo para salvar a una joven que se ha juntado con quién no debía: la jefa de la organización criminal para la que él trabaja. El protagonista se verá obligado a tirar de contactos, y otros recursos menos ortodoxos, para salvar a la chica y resolver sus problemas."
    }
]

let etiquetafila2=document.getElementById("fila2")


proximosEstrenos.forEach(function(proximoEstreno){
 
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let banner=document.createElement("h4")
    banner.classList.add("d-none")
    banner.textContent=proximoEstreno.banner

    let poster=document.createElement("img")
    poster.classList.add("img-fluid","w-100")
    poster.src=proximoEstreno.poster

    let estrenosNombre=document.createElement("h3")
    estrenosNombre.classList.add("text-center","fw-bold")
    estrenosNombre.textContent=proximoEstreno.nombre

    let estrenosDuracion=document.createElement("h5")
    estrenosDuracion.classList.add("text-start","fw-bold")
    estrenosDuracion.textContent="Duracion:"+ proximoEstreno.duracion+" Min"

    let estrenosSinopsis=document.createElement("p")
    estrenosSinopsis.classList.add("d-none")
    estrenosSinopsis.textContent=proximoEstreno.sinopsis


    //padres  e hijos
    etiquetafila2.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(estrenosNombre)
    tarjeta.appendChild(estrenosDuracion)
    tarjeta.appendChild(estrenosSinopsis)
    
    
    

})

let peliculaSeleccionadaEstreno={}
etiquetafila2.addEventListener("click",function(evento){
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
