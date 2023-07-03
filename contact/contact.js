const form = document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    

    console.log("Datos ingresados: ");
    console.log("Nombre: ", name);
    console.log("Email: ", email);
    console.log("Mensaje: ", message);
})