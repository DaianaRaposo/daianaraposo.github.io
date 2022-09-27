var zonaCanvas = document.getElementById("horca").getContext("2d");

function dibujarCanvas(){
    zonaCanvas.lineWidth = 6;
    zonaCanvas.lineCap = "round";
    zonaCanvas.lineJoin = "round";
    zonaCanvas.fillStyle = "white";
    zonaCanvas.strokeStyle = "black";
    zonaCanvas.fillRect(0,0,1200,800);
}

function dibujarLinea(){
    zonaCanvas.lineWidth = 6;
    zonaCanvas.lineCap = "round";
    zonaCanvas.lineJoin = "round";
    zonaCanvas.fillStyle = "white";
    zonaCanvas.strokeStyle = "#2d2c55";

    var ancho = 800 / palabraSecreta.length;
    for(var i=0; i < palabraSecreta.length; i++){
        zonaCanvas.moveTo(200 + (ancho*i), 640);
        zonaCanvas.lineTo(250 + (ancho*i), 640);
    }

    zonaCanvas.stroke();
    zonaCanvas.closePath();
}

function dibujarParte(x1, y1, x2, y2, color){
    zonaCanvas.lineWidth = 6;
    zonaCanvas.lineCap = "round";
    zonaCanvas.lineJoin = "round";
    zonaCanvas.fillStyle = "white";
    zonaCanvas.strokeStyle = color;

    zonaCanvas.beginPath();
    zonaCanvas.moveTo(x1, y1);
    zonaCanvas.lineTo(x2, y2);
    zonaCanvas.stroke();
    zonaCanvas.closePath();
}

function dibujarCabeza(x1, y1, color){
    zonaCanvas.lineWidth = 6;
    zonaCanvas.lineCap = "round";
    zonaCanvas.lineJoin = "round";
    zonaCanvas.fillStyle = "white";
    zonaCanvas.strokeStyle = color;

    zonaCanvas.beginPath();
    zonaCanvas.arc(x1, y1, 40, 0, 2* Math.PI);
    zonaCanvas.stroke();

}

function dibujarMunieco(intentos){
   
    switch (intentos) {

        case 9:
            dibujarParte(500, 500, 800, 500, "#320000");//base
            break;
        case 8:
            dibujarParte(550, 500, 550, 100, "#320000");//mastil
            break;
        case 7:
            dibujarParte(550, 100, 750, 100, "#320000");//palo de arriba
            break;  
        case 6:
            dibujarParte(750, 100, 750, 145, "#320000");//cuerda
            break;
        case 5:
            dibujarCabeza(750, 185, "#252240");//cabeza
            break;
        case 4:
            dibujarParte(750, 225, 750, 375, "#252240");//cuerpo
            break;  
        case 3:
            dibujarParte(750, 240, 822, 312, "#252240");//mano derecha
            break;
        case 2:
            dibujarParte(750, 240, 680, 303, "#252240");//mano izquierda
            break;
        case 1:
            dibujarParte(750, 375, 678, 447, "#252240");//pierna derecha
            break;
        case 0:
            dibujarParte(750, 375, 822, 447, "#252240");//pierna izquierda
            break;
    }
}   

function dibujarLetraCorrecta(index){
    zonaCanvas.font = 'bold 60px Arial';
    zonaCanvas.lineWidth = 6;
    zonaCanvas.lineCap = "round";
    zonaCanvas.lineJoin = "round";
    zonaCanvas.fillStyle = "blue";

    var anchura = 800 / palabraSecreta.length;
    zonaCanvas.fillText(palabraSecreta[index], 200+(anchura*index), 620);
    zonaCanvas.stroke();
}

function dibujarLetraIncorrecta(letra, errorsLeft){
    zonaCanvas.font = 'bold 40px Arial';
    zonaCanvas.lineWidth = 6;
    zonaCanvas.lineCap = "round";
    zonaCanvas.lineJoin = "round";
    zonaCanvas.fillStyle = "#004173";
    
    zonaCanvas.fillText(letra, 300 + (60*(10-errorsLeft)), 720, 60);
}

function dibujarMensaje(mensaje, color){
    zonaCanvas.fillStyle = color;
    zonaCanvas.font = 'bold 1.8em Inter';
    zonaCanvas.fillText(mensaje, 800, 200);
}
