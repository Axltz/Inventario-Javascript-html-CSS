let usuarioAdmin = "admin1234"; 
let contraseñaAdmin = "12345"; 
let users = [];

let usuarioInput = document.querySelector('.usuario');
let contraseñaInput = document.querySelector('.contraseña');


function acceso(){
    let usuarioIngresado = usuarioInput.value.trim();
    let contraseñaIngresada = contraseñaInput.value.trim(); 

    if (usuarioIngresado === usuarioAdmin && contraseñaIngresada === contraseñaAdmin) {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado, usuario y/o contraseña incorrectos");
    }
}
function registro(){
    let usuarioIngresado = usuarioInput.value.trim(); 
    let contraseñaIngresada = contraseñaInput.value.trim();

    
    if (usuarioIngresado === usuarioAdmin && contraseñaIngresada === contraseñaAdmin) {
        alert("Acceso permitido");
        window.location.href = "registro.html";
    } else {
        alert("Acceso denegado, usuario y/o contraseña incorrectos");
    }  
  

}