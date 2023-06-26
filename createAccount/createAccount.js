document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    const name =document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Datos ingresados: ");
    console.log("Nombre: "+ name);
    console.log("Email: "+ email);
    console.log("Contraseña: "+ password);

});


/*este codigo escucha el evento SUBMIT del formulario y captura los valores de los campos NAME, EMAIL, PASSWORD.*/
/*muestra los datos por  consola */
/* */