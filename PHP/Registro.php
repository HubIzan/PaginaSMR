<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $gender = $_POST["gender"];
    $message = $_POST["message"];
    $interests = isset($_POST["interests"]) ? $_POST["interests"] : [];
    $notification = $_POST["notification"];

    echo "<h2>Información recibida:</h2>";
    echo "<p><strong>Nombre:</strong> $name</p>";
    echo "<p><strong>Correo electrónico:</strong> $email</p>";
    echo "<p><strong>Género:</strong> $gender</p>";
    echo "<p><strong>Mensaje:</strong> $message</p>";
    echo "<p><strong>Intereses:</strong> " . implode(", ", $interests) . "</p>";
    echo "<p><strong>Preferencia de notificación:</strong> $notification</p>";
} else {
    echo "<p>No se recibieron datos del formulario.</p>";
}
?>
