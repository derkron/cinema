 let peliculas=[
    {
        nombre:"AVATAR EL CAMINO DEL AGUA",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/AVATAR%20EL%20CAMINO%20DEL%20AGUA1.jpg?alt=media&token=3bf5f9a1-32d6-4598-8e6b-d45440864bb0"
    },
    {
        nombre:"Black adam",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/Black%20adam%20ultimonuevo.jpg?alt=media&token=01a9c348-4f88-4af1-8b91-6389a3173567"
    },
    {
        nombre:"EL MENU",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/EL%20MENU1.jpg?alt=media&token=7c49f33f-34ed-43d1-9215-d811a2a8667d"
    },
    {
        nombre:"ERASE UNA VEZ UN GENIO",
        duracion:105,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/ERASE%20UNA%20VEZ%20UN%20GENIO1.jpg?alt=media&token=c0e399a0-c075-4681-a2e3-6d11ff773a1c"
    },
    {
        nombre:"FOBIAS",
        duracion:66,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/FOBIAS1.jpg?alt=media&token=c3c98683-d9d6-46d1-b39a-fa3bfccc0be5"
    },
    {
        nombre:"QUANTUMANIA",
        duracion:105,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/QUANTUMANIA1.jpg?alt=media&token=7db61d12-f9aa-4832-b138-120c8a7c6ce0"
    },
    {
        nombre:"SONRIE",
        duracion:70,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/SONRIE1.jpg?alt=media&token=a002c95e-e0dd-4edf-b594-c3bcd08622d7"

    },
    {
        nombre:"LA LEYENDA DE LA LLORONA",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/LA%20LEYENDA%20DE%20LA%20LLORONA.jpg?alt=media&token=c1a5301d-affe-4b99-a976-b5019878985f"
    },
    {
        nombre:"LA LEYENDA DE LA LLORONA",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/LA%20LEYENDA%20DE%20LA%20LLORONA.jpg?alt=media&token=c1a5301d-affe-4b99-a976-b5019878985f"
    },
    {
        nombre:"LA LEYENDA DE LA LLORONA",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/LA%20LEYENDA%20DE%20LA%20LLORONA.jpg?alt=media&token=c1a5301d-affe-4b99-a976-b5019878985f"
    },
    {
        nombre:"LA LEYENDA DE LA LLORONA",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/LA%20LEYENDA%20DE%20LA%20LLORONA.jpg?alt=media&token=c1a5301d-affe-4b99-a976-b5019878985f"
    },
    {
        nombre:"LA LEYENDA DE LA LLORONA",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/LA%20LEYENDA%20DE%20LA%20LLORONA.jpg?alt=media&token=c1a5301d-affe-4b99-a976-b5019878985f"
    },
    {
        nombre:"LA LEYENDA DE LA LLORONA",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/LA%20LEYENDA%20DE%20LA%20LLORONA.jpg?alt=media&token=c1a5301d-affe-4b99-a976-b5019878985f"
    }
 ]

 let fila=document.getElementById("fila")

 peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid","w-100")

    fila.appendChild(foto)

 })