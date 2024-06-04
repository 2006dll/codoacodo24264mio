/*class productoDeBelleza {
   constructor (nombre, marca, modoDeUso, precio){
        this.nombre=nombre;
        this.marca=marca;
        this.modoDeUso=modoDeUso;
        this.precio=precio;
   }
   
};

let AceiteFacialAntioxidante = new productoDeBelleza("Aceite Facial Antioxidante","Carpe Diem","Aplicar de 1 a 2 gotas sobre el rostro limpio. Con las manos higienizadas, distribuir sobre frente, mejillas, barbilla y cuello. Masajear con la yema de los dedos.",37000)
  
let CremaCorporalBodyMilk = new productoDeBelleza("Crema Corporal.Body Milk","Carpe Diem","Aplicar en todo el cuerpo la cantidad suficiente según necesidad. Masajear suavemente sobre la piel limpia hasta su  completa absorción. Se recomienda su uso después del baño o la ducha, hasta dos veces al día.",35000)

let ContornodeOjosEyeCream = new productoDeBelleza("Contorno de Ojos.Eye Cream.","Carpe Diem","Con las manos higienizadas, aplicar sobre el dedo anular y dar suaves toquecitos hasta que absorba, sin frotar ni estirar debajo y a lo largo del ojo. No se recomienda aplicar en el párpado superior. Utilizar hasta 2 veces por día.",29000)
*/

let productos = document.querySelector("#Productos");
let contenedor = document.querySelector("#Contenedor");

let botonAgregar = document.querySelector("#Agregar");
let botonQuitar = document.querySelector("#Quitar");

let referencia = productos.cloneNode(true);

productos.remove();

function AgregarArticulo() {
    fetch("https://2006dll.github.io/codoacodo24264mio/datos.json")     // API - Application Programming Interface 
    .then(response => response.json())                                  // Consumiendo una API    https://username.github.io/reponame/file.json
    .then(data => {
        // Procesamiento de la info que llega de la API
    
        console.log(data.results[0].nombre.results + " " + data.results[0].marca.results + " " +data.results[0].mododeuso.results + " "+ data.results[0].precio.results + " " )
        console.log(data.results[1].nombre.results + " " + data.results[1].marca.results + " " +data.results[1].mododeuso.results + " "+ data.results[1].precio.results + " " )
        console.log(data.results[2].nombre.results + " " + data.results[2].marca.results + " " +data.results[2].mododeuso.results + " "+ data.results[2].precio.results + " " )
       
    
        let nuevoProducto = referencia.cloneNode(true);
    
        
        nuevoProducto.querySelector("p").innerHTML = data.results[0].nombre.results + " " + data.results[0].marca.results + " " +data.results[0].mododeuso.results + " "+ data.results[0].precio.results + " "
        nuevoProducto.querySelector("p").innerHTML = data.results[1].nombre.results + " " + data.results[1].marca.results + " " +data.results[1].mododeuso.results + " "+ data.results[1].precio.results + " "
        nuevoProducto.querySelector("p").innerHTML = data.results[2].nombre.results + " " + data.results[2].marca.results + " " +data.results[2].mododeuso.results + " "+ data.results[2].precio.results + " "
        contenedor.appendChild(nuevoProducto);
        })
    .catch(error => console.log("Ocurrió un error! " + error));
}                                                                    
                                                                        
    

function QuitarArticulo() {
    if(contenedor.childElementCount > 0){
        contenedor.removeChild(contenedor.lastChild);
    }
}

// Eventos
botonAgregar.addEventListener("click", function(){
    AgregarArticulo();
});

botonQuitar.addEventListener("click", function(){
    QuitarArticulo();
});









