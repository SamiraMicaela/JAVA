/*document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    const name =document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Datos ingresados: ");
    console.log("Nombre: "+ name);
    console.log("Email: "+ email);
    console.log("Contraseña: "+ password);

    window.location.href = "../login/login.html?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email);
});*/
/*este codigo escucha el evento SUBMIT del formulario y captura los valores de los campos NAME, EMAIL, PASSWORD.*/
/*muestra los datos por  consola */
/*La redireccion se realiza utilizando WINDOW.LOCATION.HREF*/
/*y pase los valores de NAME y EMAIL como parametros de la URL*/
/*los pude pasar utilizando el formato "? nombreParametro=valorParametro"*/
/*utilice ENCODEURICOMPONENT()  para asegurarme de que los valores se codifiquen +*/
/*correctamente en caso de contener caracteres especiales */

document.getElementById("form").addEventListener("submit", function (event){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log("Datos ingresados: ");
    console.log("Nombre: " + name);
    console.log("Email: "+ email);
    console.log("Contraseña: "+ password);

})