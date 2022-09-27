
var botonEncriptar = document.getElementById("boton-encriptar");
var botonDesencriptar = document.getElementById("boton-desencriptar");
var botonCopiar = document.getElementById("boton-copiar");
var resultado = document.getElementById("cajaResultado");
botonCopiar.style.display = "none";

function desaparecerObjeto(){
    document.getElementById("llave").style.display = "none";
    document.getElementById("texto").style.display = "none";
}

function encriptarTexto(){
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var textoEncriptado = "";  

    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoEncriptado = textoEncriptado + "ai";
        } else if(texto[i] == "e"){
            textoEncriptado = textoEncriptado + "enter";
        } else if(texto[i] == "i"){
            textoEncriptado = textoEncriptado + "imes";
        } else if(texto[i] == "o"){
            textoEncriptado = textoEncriptado + "ober";
        } else if(texto[i] == "u"){
            textoEncriptado = textoEncriptado + "ufat";
        } else {
            textoEncriptado = textoEncriptado + texto[i];
        }
    } 

    return textoEncriptado;
}

function encriptar(){
    desaparecerObjeto();
    document.getElementById("cajaResultado").innerText = encriptarTexto();
    botonCopiar.style.display = "inline-block";
}

function copiarTexto(){
    console.log("aca");
    var resultado = document.getElementById("cajaResultado").value;
    console.log(resultado);
    document.getElementById("input-texto").innerText = resultado;
}

function desencriptarTexto(){

    var texto = document.getElementById("input-texto").value.toLowerCase();
    var textoDesencriptado = texto.replaceAll("enter", "e");
    textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
    textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
    textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");

    return textoDesencriptado;
}

function desencriptar(){
    desaparecerObjeto();
    document.getElementById("cajaResultado").innerText = desencriptarTexto();
    botonCopiar.style.display = "inline-block";
}    

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;
    
//textoCifrado = texto.replaceAll("e", "enter");
//textoCifrado = textoCifrado.replaceAll("o", "ober");
//textoCifrado = textoCifrado.replaceAll("i", "imes");
//textoCifrado = textoCifrado.replaceAll("a", "ai");
//textoCifrado = textoCifrado.replaceAll("u", "ufat");
//document.getElementById("ingresa-texto").style.height = "80%";
//document.getElementById("ingresa-texto").innerHTML = textoCifrado;
//document.getElementById("boton-copiar").style.display = "show";
//document.getElementById("boton-copiar").style.display = "inherit";


//function desencriptarTexto() {
//
//    var texto = document.getElementById("input-texto").value.toLowerCase();
//    var textoCifrado = texto.replace(/enter/, "e");
//    textoCifrado = textoCifrado.replaceAll("ober", "o");
//    textoCifrado = textoCifrado.replaceAll("imes", "i");
//    textoCifrado = textoCifrado.replaceAll("ai", "a");
//    textoCifrado = textoCifrado.replaceAll("ufat", "u");
//
//    document.getElementById("llave").style.display = "none";
//    document.getElementById("texto").style.display = "none";
//    document.getElementById("ingresa-texto").innerHTML = textoCifrado;
//    document.getElementById("boton-copiar").style.display = "show";
//    document.getElementById("boton-copiar").style.display = "inherit";
//}