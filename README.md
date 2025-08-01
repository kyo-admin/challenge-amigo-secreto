<h1 align="center">Challenge amigo secreto</h1>
<img alt="Static Badge" src="https://img.shields.io/badge/challenge_amigo_secreto-One_%7C_Alura-blue">

<h2>Reseña</h2>
<p>En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".</p>

![Screenshot_2](https://github.com/user-attachments/assets/28663296-724f-4d15-b615-91a44a39b68b)


<h2>Funcionalidades</h2>

<ul>- Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".</ul>
<ul>- Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.</ul>
<ul>- Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.</ul>
<ul>- Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.</ul>

<h2>Implementa una función para agregar amigos</h2>
<p>Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.</p> 
<h3>Tareas específicas: </h3>
<ul>- Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.</ul>
<ul>- Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."</ul> 
<ul>- Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el 
 
  ```
  método.push()
  ```
</ul>
<ul>- Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.</ul>

<img width="797" height="412" alt="image" src="https://github.com/user-attachments/assets/77365a33-540b-4711-9e39-2e7e81e7e583" />


<h2>Implementa una función para actualizar la lista de amigos</h2>

<p>Descripción: Crea una función que recorra el array amigos y agregue cada nombre como un elemento 
  
  ```<li>``` dentro de una lista HTML.  Usa ```innerHTML``` para limpiar la lista antes de agregar nuevos elementos.</p>
   
 <h3>Tareas específicas:</h3>

 <ul>- Obtener el elemento de la lista: 
 Utilizar  
   
   ```document.getElementById()``` ó  ```document.querySelector()``` para seleccionar la lista donde se mostrarán los amigos.</ul>

 <ul>- Limpiar la lista existente: Establecer  
   
   ```lista.innerHTML = "" ```  para asegurarse de que no haya duplicados al actualizar.</ul>

 <ul>- Iterar sobre el arreglo: 
 Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista 
   
   ```(<li>)``` para cada título.</li>

 <ul>- Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.</ul>
 
<img width="981" height="259" alt="image" src="https://github.com/user-attachments/assets/84ccde01-170f-483c-a02f-052ee3946c67" />

<h2>Implementa una función para sortear los amigos</h2>

<p>Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
Usa 
  
  ``` Math.random() ``` y ``` Math.floor()``` para obtener un índice aleatorio.</p>

<h3>Tareas específicas:</h3>

<ul>- Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.</ul>

<ul>- Generar un índice aleatorio: Usar  
  
  ``` Math.random() ``` y ``` Math.floor()```para seleccionar un índice aleatorio del arreglo.</ul>

<ul>- Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.</ul>

<ul>- Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando 
  
  ```document.getElementById()``` e ```innerHTML``` para mostrar el amigo sorteado.</ul>
<img width="1152" height="246" alt="image" src="https://github.com/user-attachments/assets/7fb99130-c8b8-4f9d-a4e9-82bc25f1e040" />

<h2>Implementa una función para actualizar la lista de amigos</h2>
<p>Si bien se aborda todo lo solicitado en este ejercicio no se consideran una serie de elementos que se debería incluir en futuros desarrollos</p>
<h3>Mejoras pendientes a implementar</h3>
<ul>- verificar el input sea un nombre con regular expression regex.</ul>
<ul>- validar un máximo de nombres.</ul>
<ul>- validar nombres repetidos en el array.</ul>
<ul>- reiniciar el juego.</ul>

<p>Pueden incorporarse mas observaciones, pero esto es una idea de lo que se puede mejorar</p>
