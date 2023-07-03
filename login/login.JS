document.getElementById("myButton").addEventListener("click", function(event){
    event.preventDefault();
   const username= document.getElementById("username").value;
    const password= document.getElementById("password").value;
    
    console.log("Datos ingresados: ");
    console.log("Nonmbre:", username);
    console.log("Contraseña", password);

})





/*    if(username === "usuario" && password === "contraseña"){
        alert("Inicio de sesion exitoso");
        window.location.href = "../contentMisTareas/misTareas.html";
    }else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
} );*/

/*document.addEventListener("DOMContentLoaded", function(){
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get("name");
    var email = urlParams.get("email");

    document.getElementById("username").value = name;
    document.getElementById("email").value = email;

    document.getElementById("myButton").addEventListener("click", function (event){
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        if (username === "usuario" && password === "contraseña"){
            alert("Inicio de sesion exitoso");
            window.location.href="../content/content.html";
        }else {
            alert("Nombre de usuario o contraseña incorrecta.");
        }
    });
}) ; */
