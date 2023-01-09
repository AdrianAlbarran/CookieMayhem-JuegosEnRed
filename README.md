# COOKIE MAYHEM - JUEGOS EN RED

Este proyecto está sujeto a cambios.

Somos un grupo de estudiantes de Diseño y Desesarrollo de Videojuegos en la Universidad Rey Juan Carlos desarrollando un juego multijugador con Phaser3.0

- Concepto principal:
 Bullet Hell cooperativo 2D con estética pastelera donde el objetivo es defender tú base de oleadas de galletas que atacan la base y a los jugadores. Según los jugadores consiguen recursos, mejoran sus armas y habilidades. Estas van convirtiendo el juego en un bullet hell según las mejoras.

- Estilo Visual:
Se utilizará una estética "muy azucarada", donde se utilizarán colores planos, formas redonda estética relacionada con la repostería.

- Gameplay:
El juego sostiene un sistema de oleados en la que diversos enemigos intentaran destruir la estructura central donde los jugadores deberán defenderla disparando frenéticamente, después de cada ronda los jugadores podrán acceder a una tienda para comprar mejoras para las rondas posteriores.

- Sonido:
Tanto el estilo de la música como el estilo de los sonidos será en 8 bits.
Exisistirán diversos tonos durante todo el juego dependiedo del estado de este:
 -El menú tendrá una música más relajada
 -Durante el gameplay, la música será radicalmente distinta.
 -La música de fin del juego será una melodía triste

- Historia:
En el reino chuchería las galletas se rebelan contra el reino para detener la masacre de galletas que se lleva a cabo en la gran tetera desde tiempos inmemorables.
Sois los últimos soldados de la legión expresso y vuestro deber la revolución o morir en el intento.


- Motor de Juego:
Usaremos <a href = "https://phaser.io/phaser3"> Phaser3 </a> 
- Coordinación del equipo.
Para la coordinación del equipo se usará Trello, usando <a href = "https://trello.com/invite/b/JZrPiCv6/ATTI46729dd3a9ab2625894f6d3f58aaac69019100A5/juegos-en-red">este tablero</a> .

- Video demostración del juego para las entregas 4 y 5.
(![image](https://user-images.githubusercontent.com/81293611/211415616-e2cd2aaf-bc9d-4d33-b15d-bb5c7a0c2e9a.png)](https://youtu.be/8Mn0MbisQS4)


 ## Team:
 <table>
  <thead>
    <tr>
      <th> INTEGRANTES </th> 
      <th> CORREO UNIVERSITARIO </th> 
      <th> GITHUB </th> 
      <th> ROL </th> 
    </tr>
  </thead>
  <tbody>
    <tr> 
      <td> Adrián Albarrán Alcalde </td>
      <td> a.albarran.2020@alumnos.urjc.es </td>
      <td> <a href = "https://github.com/AdrianAlbarran"> AdrianAlbarran </a> </td>
      <td> Lider Proyecto </td>
    </tr>
    <tr> 
      <td> Luis Morón Álvarez </td>
      <td> l.moron.2020@alumnos.urjc.es </td>
      <td> <a href = "https://github.com/Moromon"> Moromon </a> </td>
      <td> Programador </td>
    </tr>
    <tr> 
      <td> Gloria Turati Domínguez </td>
      <td> g.turati.2020@alumnos.urjc.es </td>
      <td> <a href = "https://github.com/glorimm"> Glorimm </a> </td>
      <td> Arte </td>
    </tr>
    <tr> 
      <td> Marco Ozaeta Velasco </td>
      <td> m.ozaeta.2020@alumnos.urjc.es </td>
      <td> <a href = "https://github.com/Marcooza"> Marcooza </a> </td>
      <td> Guionista </td>
    </tr>
    <tr> 
      <td> Adrián Serrano Monteiro </td>
      <td> a.serranom.2020@alumnos.urjc.es </td>
      <td> <a href = "https://github.com/PinguinoTocho"> PinguinoTocho </a> </td>
      <td> Redes sociales y Arte </td>
    </tr>
    <tr> 
      <td> Daniel Salguero Fernández </td>
      <td> d.salguero.2020@alumnos.urjc.es </td>
      <td> <a href = "https://github.com/DaniSF1"> DaniSF1 </a> </td>
      <td> Música </td>
    </tr>
   </tbody>
  </table>


 ## Controles del Juego:
 
![Controles Cookie Mayhem](https://user-images.githubusercontent.com/115086690/204564478-79935e8f-d9c1-4fed-bfc3-10086d00edc6.png)

## Diagrama de navegación

Este diagrama indica los estados del juego y cómo se relacionan entre ellos, iniciando y acabando en la pantalla de inicio

![image10](https://user-images.githubusercontent.com/93784360/204644030-d96a0419-2dc5-407f-b56e-acacba258eba.png)

## Pantalla de Inicio

![image](https://user-images.githubusercontent.com/97071556/208744609-49372749-58c6-4c86-a851-434581dc04ec.png)

El juego comienza con una pantalla de menú de inicio que ofrece las siguientes posibilidades: el botón PLAY, que avanza hacia la escena de gameplay, el botón SETTINGS, que por el momento permite silenciar el sonido del juego, un botón para activar la pantalla completa y otro botón en la parte inferior derecha para ver los controles del juego.

## Pantalla de Ajustes

![image](https://user-images.githubusercontent.com/97071556/208744826-5f57679e-5374-4d98-9d95-e1bf69cd7189.png)

Al presionar el botón de SETTINGS se muestra un menú que permite silenciar el juego y un botón de EXIT para regresar al menú principal.

## Pantalla de Controles

![image](https://user-images.githubusercontent.com/97071556/208744918-385df242-4492-4708-a0ae-685534d5978c.png)

Al presionar el botón de controles, se muestran en pantalla los controles del juego. Al volver a presionar este botón, se vuelve al menú principal.


## Gameplay


Al presionar el botón PLAY comienza una escena en la que el jugador puede interactuar con el escenario, progresar en el sistema de oleadas y abrir la tienda para comprar mejoras.

![image](https://user-images.githubusercontent.com/97071556/208745145-6b1115bb-a535-4232-b819-ee39e58cbf50.png)

La tienda del juego se puede abrir presionando la tecla P, desde esta pantalla se pueden comprar objetos a cambio de la moneda del juego para obtener mejoras de velocidad de movimiento, daño, más proyectiles por disparo y cadencia de disparo.

![image](https://user-images.githubusercontent.com/97071556/208745286-020726e0-6d8a-41e9-8064-e0bb207c2fca.png)

## Pantalla de Derrota

![image](https://user-images.githubusercontent.com/97071556/208745581-9de98029-2a2c-404b-852e-fcdddd7b892e.png)


La escena cambia a la pantalla de derrota cuando la vida de la tetera llega a 0 o cuándo ambos jugadores son eliminados. Desde esta pantalla se puede regresar al menú de inicio mediante el botón EXIT o volver a reiniciar el gameplay desde el botón RESTART.

## Diagrama de Clases API REST

![JeR Clases](https://user-images.githubusercontent.com/115086690/208757343-23f091bd-2aec-4f31-b093-4ff6b9b62629.png)

## Instrucciones para ejecutar el .jar

- Descomprimir jar.zip
- Abrir la consola de comandos
- Poner java -jar Direccion del Jar
- Abrir localhost:8080

(Se puede producir un error si java no está actualizado)

## Protocolo Usado en WebSocket

![image](https://user-images.githubusercontent.com/115086690/211213815-7d77c28b-90b2-4188-b8b6-ccece34ca06c.png)

- Método onopen(): Método ejecutado cuando se establece conexión con el servidor. La clase WSLobbyHandler implementa este método.
- Método onerror(): Método que se ejecuta cuando salta algún error dentro de la ejecución en el servidor. No se ha llegado a implementar en ninguna clase.
- Método onmessage(): Método que se ejecuta cuando se recibe un mensaje. Cada clase implementa este método de forma propia debido a que se quiere hacer una determinada funcionalidad dado un websocket concreto.
- Método sendWS(): Método encargado de enviar atributos necesarios para realizar el juego en línea. Por ejemplo, el WSMovHandler, implementa este método enviando la posición de los jugadores y sus direcciones, siendo estos atributos necesarios para poder ejecutar el movimiento en el servidor

## Diagrama de Clases WebSocket

![Diagrama sin título drawio (3)](https://user-images.githubusercontent.com/115086690/211384102-a4df6029-1b38-4a5b-a442-0b42e87b0f6d.png)

## Diseño de Enemigos, Personajes y Mejoras

## Enemigos

![image9](https://user-images.githubusercontent.com/93784360/204644243-75009f2b-4770-46c1-8b61-004ca3b51416.png)
![image8](https://user-images.githubusercontent.com/93784360/204644251-57ee0afc-e85a-432c-a0fd-6f5ce8516eb8.png)
![image17](https://user-images.githubusercontent.com/93784360/204644267-d967f1b7-94bf-451a-9632-81437fca5c32.png)
![image2](https://user-images.githubusercontent.com/93784360/204644292-61ea7eeb-445e-4a4e-becc-b0cf35d49a66.png)
![image5](https://user-images.githubusercontent.com/93784360/204644304-6386e182-05f1-4bf3-94de-5e2b5f2c4abb.png)


## Player y tetera

![image4](https://user-images.githubusercontent.com/93784360/204644318-e9d8732f-ccb7-4957-a98c-270a3468e063.png)
![image21](https://user-images.githubusercontent.com/93784360/204644351-ae23cb98-f139-453f-91f8-92f1d886b37e.png)
![image19](https://user-images.githubusercontent.com/93784360/204644358-ff386dfe-d1e4-490f-8c1d-78a8a1e2a9ce.png)


## Iconos

![image20](https://user-images.githubusercontent.com/93784360/204644370-6a91e800-82a2-4934-a886-980cdac6d890.png)
![image18](https://user-images.githubusercontent.com/93784360/204644373-7cc74687-ade4-4454-8a4a-db6ccab6d1a6.png)
![iconoEscopeta](https://user-images.githubusercontent.com/93784360/204644507-038bd81e-bcb8-4f35-886f-0022a55557da.png)
![image14](https://user-images.githubusercontent.com/93784360/204644554-56a4f5d3-554b-4775-8f26-e6c55c5c37b4.png)
![image3](https://user-images.githubusercontent.com/93784360/204644561-33c1bf16-0ac5-4532-a99b-62b2ae7a190d.png)
![image11](https://user-images.githubusercontent.com/93784360/204644570-e1f4936f-daed-4e72-8125-590c8c9bc008.png)
![image6](https://user-images.githubusercontent.com/93784360/204644584-671d8d2e-1471-414a-bc7f-c99887e5823b.png)



