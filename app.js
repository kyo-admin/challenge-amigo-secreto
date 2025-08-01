// 💡 Sobre el Desafío 💡
// Amigo secreto
// En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos 
// en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

// El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". 
// Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, 
// un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.


// Fucionalidades:
// Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo 
// agregarán a una lista visible al hacer clic en "Adicionar".
// Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
// Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente 
// un nombre de la lista y se mostrará en la página.

/***************************************************************************************************************************
 * Crear un array para almacenar los nombres
 * Descripción
Editar
Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. Ejemplo:

let amigos = []
Para saber mas sobre array puedes revisar la siguiente documentación:

Array - JavaScript | MDN
 ****************************************************************************************************************************/
let amigos = [];
// let amigos = [
//     "Argentina",
//     "Brasil",
//     "Chile",
//     "Colombia",
//     "México",
//     "Perú",
//     "Uruguay",
//     "Venezuela",
//     "Ecuador",
//     "Bolivia"
// ];

/***************************************************************************************************************************
 * Implementa una función para agregar amigos
 * Descripción
Implementa una función para agregar amigos
Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.

Tareas específicas: 

Capturar el valor del campo de entrada: 
Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

Validar la entrada: 
Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

Actualizar el array de amigos: 
Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

Limpiar el campo de entrada: 
Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
 ****************************************************************************************************************************/
function agregarAmigo (){
    /*Capturo el valor del campo input y se guarda en una variable */
    let nombreAmigo = document.getElementById('amigo').value;
    /*Valida que el nombre no esté vacio*/
    if (nombreAmigo == ""){
        alert("Por favor, inserte un nombre.")
    }else{
       amigos.push(nombreAmigo);
       console.log(amigos);
       console.log(amigos.length);
       limpiarCaja();   
       listarAmigos();              
    }

}

/*Esta Función Limpia la caja donde el usuario ingresa el nombre del amigo*/
function limpiarCaja() {
   document.getElementById('amigo').value = '';          
}



//****************************************************************************************************************************/
/*Implementa una función para actualizar la lista de amigos*/

//Descripción
// Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
// Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
// Tareas específicas:

// Obtener el elemento de la lista: 
// Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

// Limpiar la lista existente: Establecer lista.innerHTML = "" 
// para asegurarse de que no haya duplicados al actualizar.

// Iterar sobre el arreglo: 
// Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

// Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
//****************************************************************************************************************************/
function listarAmigos(){
    let lista = document.getElementById('listaAmigos');// Obtenemos el <ul>
    lista.innerHTML= "";  // Limpiamos el contenido anterior
    for(let i = 0; i < amigos.length; i++){ // for clásico
        let elementoHtml =document.createElement('li'); // Creamos un <li>
        //elementoHtml.innerText = amigos[i]; // Insertamos el nombre del amigo al array
        elementoHtml.innerHTML = amigos[i]; // Insertamos el nombre del amigo al array
        lista.appendChild(elementoHtml); // Lo agregamos a la lista
    }
}

//****************************************************************************************************************************/
//Implementa una función para sortear los amigos
// Descripción
// Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
// Usa Math.random() y Math.floor() para obtener un índice aleatorio.

// Tareas específicas:

// Validar que haya amigos disponibles: 
// Antes de sortear, comprobar si el array amigos no está vacío.

// Generar un índice aleatorio: 
// Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

// Obtener el nombre sorteado: 
// Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

// Mostrar el resultado: 
// Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
//****************************************************************************************************************************/

function sortearAmigo() {
    if (amigos.length > 0){
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        console.log(`indiceAleatorio: ${indiceAleatorio} ; corresponde a: ${amigos[indiceAleatorio]}` );
        let nombreSeleccionado = document.getElementById('resultado');// Obtenemos el <ul>
        nombreSeleccionado.innerHTML= `El nombre sorteado es: ${indiceAleatorio} - ${amigos[indiceAleatorio]}`;  // Limpiamos el contenido anterior
    } else {
        alert("debes agregar al menos un nombre a la lista");
    }
    
  
}        