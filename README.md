<h1 align="center">Challenge amigo secreto</h1>
<img alt="Static Badge" src="https://img.shields.io/badge/challenge_amigo_secreto-One_%7C_Alura-blue">

<h2>Reseña</h2>
<p>En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".</p>

![Screenshot_2](https://github.com/user-attachments/assets/28663296-724f-4d15-b615-91a44a39b68b)

<h2>Indice</h2>

<a href="https://github.com/kyo-admin/challenge-amigo-secreto?tab=readme-ov-file#funcionalidades"># Funcionalidades</a>

<a href="https://github.com/kyo-admin/challenge-amigo-secreto?tab=readme-ov-file#implementa-una-funci%C3%B3n-para-agregar-amigos"># Implementa una función para agregar amigos</a>

<a href="https://github.com/kyo-admin/challenge-amigo-secreto?tab=readme-ov-file#implementa-una-funci%C3%B3n-para-actualizar-la-lista-de-amigos"># Implementa una función para actualizar la lista de amigos</a>

<a href="https://github.com/kyo-admin/challenge-amigo-secreto?tab=readme-ov-file#implementa-una-funci%C3%B3n-para-sortear-los-amigos"># Implementa una función para sortear los amigos</a>

<a href="https://github.com/kyo-admin/challenge-amigo-secreto?tab=readme-ov-file#implementa-una-funci%C3%B3n-para-actualizar-la-lista-de-amigos-1"># Implementa una función para actualizar la lista de amigos</a>

<a href="https://github.com/kyo-admin/challenge-amigo-secreto?tab=readme-ov-file#mejoras-pendientes-a-implementar"># Mejoras pendientes a implementar</a>

<a href="https://github.com/kyo-admin/challenge-amigo-secreto/edit/main/README.md#-adicional---reiniciar-el-juego-"># *** Adicional - reiniciar el juego ***</a>
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
<img width="1316" height="342" alt="image" src="https://github.com/user-attachments/assets/2e92e584-4c44-4cc4-afb1-41af0574cd94" />

<h2>*** Adicional - reiniciar el juego ***</h2>
<p>Permite reiniciar el juego una vez seleccionado el ganador</p>
<img width="1191" height="216" alt="image" src="https://github.com/user-attachments/assets/45579a49-a1da-4cb5-bcec-1534b1bbfe98" />
<ul>Se incorpora un botón adicional para ejecutar la función reiniciar juego </ul>
<img width="865" height="573" alt="image" src="https://github.com/user-attachments/assets/6fdc565f-f4fb-47ec-b25e-759d10ca2e99" />
<ul> Al sortear la lista de amigos el boton se deshabilita</ul>
<img width="826" height="565" alt="image" src="https://github.com/user-attachments/assets/faf7a120-d6b8-4186-9ef5-c6606fb68cf9" />
<ul> Al reiniciar el juego los parametros se restablecen </ul>
<img width="675" height="489" alt="image" src="https://github.com/user-attachments/assets/3d53cdaa-4b3e-4fd2-bb53-0a5a86b6f9fa" />

<h2>Implementa una función para actualizar la lista de amigos</h2>
<p>Si bien se aborda todo lo solicitado en este ejercicio no se consideran una serie de elementos que se debería incluir en futuros desarrollos</p>
<h3>Mejoras pendientes a implementar</h3>
<ul>- verificar el input sea un nombre con regular expression regex.</ul>
<ul>- validar un máximo de nombres.</ul>
<ul>- validar nombres repetidos en el array.</ul>

<p>Pueden incorporarse mas observaciones, pero esto es una idea de lo que se puede mejorar</p>
