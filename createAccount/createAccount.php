<!-- createAccount.php (Personal Home Page Tools)-->

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validar los datos 
    // Guardar los datos en un archivo o en una base de datos

    //guardado en un archivo de texto
    $data = "Nombre: $name\nEmail: $email\nPassword: $password\n";
    file_put_contents('accounts.txt', $data, FILE_APPEND);

    // Redireccionar a la página de inicio de sesión
    header('Location: ../login/login.html');
    exit;
}
?>
