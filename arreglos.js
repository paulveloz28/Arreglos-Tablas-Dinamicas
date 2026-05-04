// Arreglos
let edadesIzquierda = [];
let edadesDerecha = [];

function agregarEdad() {

    // obtiene el valor de la caja de texto
    let cajaEdad = document.getElementById("edad");
    let valor = cajaEdad.value;
    
    // convierte a entero
    let edad = parseInt(valor);

    // agrega la edad al arreglo izquierdo
    edadesIzquierda.push(edad);

    // vuelve a pintar el arreglo izquierdo
    pintarArregloIzquierdo();
}