class productosBelleza {
   constructor (nombre, marca, modoDeUso, precio){
        this.nombre=nombre;
        this.marca=marca;
        this.modoDeUso=modoDeUso;
        this.precio=precio;
   }
   
};

// API - Application Programming Interface
// Consumiendo una API
// https://username.github.io/reponame/file.json

fetch("https://2006dll.github.io/Codoacodo24264mio/datos.json")
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data);
    })
.catch(error => console.log("Ocurrió un error! " + error));




