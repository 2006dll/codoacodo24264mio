class productoDeBelleza {
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

console.log (AceiteFacialAntioxidante)
console.log (CremaCorporalBodyMilk)
console.log (ContornodeOjosEyeCream)


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




