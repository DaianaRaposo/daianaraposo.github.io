//**Requisitos:**
//- Debe funcionar solo con letras mayúsculas; LISTO
//- No deben ser utilizadas letras con acentos ni caracteres especiales; LISTO
//- Al completar o dibujo de la horca, debe ser mostrado un mensaje "Fin del juego" en la pantalla;
//- Si se completa la palabra correcta antes de que se acaben los intentos, debe ser mostrado un mensaje de "Ganaste, Felicidades!" en la pantalla.
//- La página debe tener los guiones indicando cada letra da palabra, separados por un espacio;
//- Para comenzar el juego la página debe tener un botón de "Iniciar Juego";
//- No debe ser posible escribir números dentro del juego.
//- Las letras equivocadas deben aparecer en la pantalla, pero no pueden aparecer de forma repetida;
//- Las letras correctas deben aparecer en la pantalla encima de los guiones, en la posición correcta em relación a la palabra.
//
//**Extras:**
//- La página debe tener un campo para inserción de texto con la finalidad de adicionar nuevas palabras al juego, e un botón "Agregar palabra". 


var palabras = ["HTML","CSS","JAVASCRIPT","ALURA","INTERNET","ORACLE", "ONE","PANTALLA","INDEX","CODIGO"];
var palabraSecreta = "";
var intentos = 10;
var intentosCorrectos = 0;
var letras = [];
var mensajeGanador = "Ganaste, felicidades!";
var mensajePerdedor = "Fin del Juego";

document.getElementById("zonaCanvas").style.display = "none";
document.getElementById("boton-nuevoJuego").style.display = "none";
document.getElementById("boton-desistir").style.display = "none";
document.getElementById("input-agregarPalabra").style.display = "none";
document.getElementById("boton-guardarEmpezar").style.display = "none";
document.getElementById("boton-cancelar").style.display = "none";
document.getElementById("aclaracion").style.display = "none";


function iniciarJuego(){
    document.getElementById("zonaCanvas").style.display = "block";
    document.getElementById("boton-nuevoJuego").style.display = "inline-block";
    document.getElementById("boton-desistir").style.display = "inline-block";
    document.getElementById("botones-iniciarJuego").style.display = "none";

    elegirPalabra();
    dibujarCanvas();
    dibujarLinea();


    document.onkeydown = (e) => {
        var letra = e.key.toUpperCase();

        if(verificarTecla(letra)){
            if(palabraSecreta.includes(letra)){
                for(var i = 0; i < palabraSecreta.length; i++){
                    if(palabraSecreta[i] == letra){
                        intentosCorrectos++;
                        dibujarLetraCorrecta(i);
                    } 
                }
            } else {
                intentos--;
                dibujarLetraIncorrecta(letra, intentos);
                dibujarMunieco(intentos);
            }

            verificarGanador();
        }
    }
}

function verificarTecla(key){
    var value = key.charCodeAt(0);

    if (value >= 65 && value <= 90) {
        if (letras.indexOf(key) >= 0) {
            return false;
        }

        letras.push(key);
        return true;
    } 

    return false;

}

function elegirPalabra(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)]; 
    palabraSecreta = palabra.toUpperCase();
    console.log(palabra);
} 

function verificarGanador(){
    if (intentosCorrectos >= palabraSecreta.length && intentos != 0){
         dibujarMensaje(mensajeGanador, "green");
     } else if (intentos == 0){
         dibujarMensaje(mensajePerdedor, "red");
     }
 }

 function nuevoJuego(){
    desistir();
    iniciarJuego();

 }

 function desistir(){
    window.location.reload()
 }

 function agregarPalabra(){
    document.getElementById("input-agregarPalabra").style.display = "block";
    document.getElementById("aclaracion").style.display = "block";
    document.getElementById("boton-guardarEmpezar").style.display = "inline-block";
    document.getElementById("boton-cancelar").style.display = "inline-block";
    document.getElementById("botones-iniciarJuego").style.display = "none";
}

//unction guardarEmpezar(){
//   var nuevaPalabra = document.getElementById("#input-agregarPalabra");
//   agregarPalabra();
//   
//   palabras.push(nuevaPalabra);  
//   console.log(palabras);  
//   iniciarJuego();
//