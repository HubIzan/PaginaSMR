<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $issue = $_POST['issue'];

    $to = 'drifts@gmail.com';

    $subject = 'Nuevo mensaje de contacto desde el sitio web';

    $message = 'Nombre: ' . $name . "\n" .
               'Correo electrónico: ' . $email . "\n" .
               'Duda/Problema: ' . $issue;

    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo '<p>Su mensaje ha sido enviado correctamente. Nos pondremos en contacto con usted lo antes posible.</p>';
    } else {
        echo '<p>Lo sentimos, ha habido un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.</p>';
    }
} else {
    echo '<p>Error: Acceso no autorizado.</p>';
}
?>
