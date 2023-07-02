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
    const datosMostrados = document.getElementById("datosMostrados");
    console.log("Datos ingresados: ");
    console.log("Nombre: " + name);
    console.log("Email: "+ email);
    console.log("Contraseña: "+ password);
    alert(name);
    alert(email);
    alert(password);
     

    const contenidoHTML = `<p>Nombre: ${name}</p> <p>Email: ${email}</p><p>Contraseña: ${password}</p>;`

    datosMostrados.innerHTML= contenidoHTML;

});


//3er forma
//const user ={
//    name: "",
//    email:"",
//    password:"",
//};

//const input =document.querySelectorAll("input");

//const form = document.querySelector("form");
//form.addEventListener("click", handleSubmit);
//function handleSubmit(e){
//    e.preventDefault();
//    user.name = input[0].value;
//    user.email = input[1].value;
//    user.password = input[2].value;
//    console.log(user);
//}

//const form = document.querySelector("form");
//form.addEventListener("submi",handleSubmit);
//function handleSubmit(e){
//    e.preventDefault();
//    const user = {
//        name : "",
//        email :"",
//        password : "",
//    };
//    const userInfo = FormData(form);
//    user.name= userInfo.get("name");
//    user.email= userInfo.get("email");
//    user.password= userInfo.get("password");
//    console.log(user)
//}