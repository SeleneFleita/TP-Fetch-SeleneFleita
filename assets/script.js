let miurl = "https://rickandmortyapi.com/api/character"

//Nombre la variable como mi url y defini con la url de la API de los personajes de ricky and morty.

//con la siguiente funcion procesamos el fetch, se obtiene el contenido de la API; 
//en caso de que no se pueda obtener el contenido, en la consola se mostrara la leyenda "Hubo un error"
//y se le mostrara la parte del codigo donde ocurrio el error
const procesarFetch = async (miurl) => {
    try {
        const respuesta = await fetch(miurl)
        const info = await respuesta.json()
        return info
    } catch (error) {
        console.log("Hubo un error", error)
    }
}
//definimos un id "container" que esta en el HTML 

let container = document.getElementById("container")

//Se utiliza a la funcion para llamar a la API y con el id que definimos  anteriormente 
//se utilizo el inner html en el cual se agrego contenido html, 
//seleccionando los elementos del API que se quiere mostrar.

procesarFetch(miurl)

    .then((info) => {
        console.log(info)

        info.results.forEach((elemento) => {
            container.innerHTML += `
        <div class="personaje">
        <img src="${elemento.image}"/>
        <div class="p">
        <h2>${elemento.name}</h2>
        <p>${elemento.species}</p>  
        <p>${elemento.status}</p> 
        <p>${elemento.gender}</p> 
        <p>${elemento.type}</p> 
        </div> 
        </div>
        `
        })
    })
