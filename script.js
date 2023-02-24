function verificarFormulario(){

  var nombre = document.getElementById("input-nombre").value;
  var email = document.getElementById("input-email").value;
  var asunto = document.getElementById("input-asunto").value;
  var mensaje = document.getElementById("input-mensaje").value;

  var expresion = /\w+@\w+\.+[a-z]/; 

  if(nombre === "" || email === "" || asunto === "" || mensaje === ""){
    alert("Todos los campos son obligatorios");
    return false;
  }

  else if(nombre.length > 50){
    alert("El nombre es demasiado largo");
    document.getElementById("input-nombre").focus;
    return false;
  }

  else if(asunto.length > 50){
    alert("El asunto es demasiado largo");
    document.getElementById("input-asunto").focus;
    return false;

  }
  
  else if(mensaje.length > 300){
    alert("El mensaje es demasiado largo");
    document.getElementById("input-mensaje").focus;
    return false;  
  }

}

