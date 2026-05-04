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

function pintarArregloIzquierdo() {

    let tabla = document.getElementById("tablaIzquierda");

    let contenido = "";

    for (let i = 0; i < edadesIzquierda.length; i++) {

        contenido += `
      <tr>
         <td>${edadesIzquierda[i]}</td>

            <td>
                <button onclick="eliminarIzquierdo(${i})"
                    class="btn-eliminar">
                    Eliminar
                </button>
            </td>

            <td>
                <button onclick="moverHaciaDerecha(${i})"
                    class="btn-mover">
                    ➜
                </button>   
            </td>
      </tr>
      `;
    }
    tabla.innerHTML = contenido;
}

function eliminarIzquierdo(indice) {

    edadesIzquierda.splice(indice, 1);

    pintarArregloIzquierdo();
    //eliminarIzquierdo(indice);

}

function pintarArregloDerecha(){

   let tabla = document.getElementById("tablaDerecha");

   let contenido = "";

   for(let i=0; i<edadesDerecha.length; i++){

      contenido += `
      <tr>

         <td>
            <button onclick="moverHaciaIzquierda(${i})"
                class="btn-mover">
                ⬅
            </button>
         </td>

         <td>
            ${edadesDerecha[i]}
         </td>

            <td>
                <button onclick="eliminarDerecho(${i})"
                    class="btn-eliminar">
                    Eliminar
                </button>
            </td>
      </tr>
      `;
   }

   tabla.innerHTML = contenido;

}