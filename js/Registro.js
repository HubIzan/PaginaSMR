document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.backvideo video');
    const toggleButton = document.querySelector('.boton');
    const iconoPausa = document.querySelector('.pause');
    const iconoReanudar = document.querySelector('.play');

    toggleButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            iconoPausa.style.display = 'block';
            iconoReanudar.style.display = 'none';
        } else {
            video.pause();
            iconoPausa.style.display = 'none';
            iconoReanudar.style.display = 'block';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var nameInput = document.querySelector("input[name='name']");
        var emailInput = document.querySelector("input[name='email']");
        var messageInput = document.querySelector("textarea[name='message']");

        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var message = messageInput.value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Por favor, complete todos los campos del formulario.");
            return;
        }

        
        if (/[$@#]/.test(name)) {
            alert("El nombre no puede contener los caracteres: $, @, #");
            return; 
        }

       
        if (/[$#]/.test(email)) {
            alert("El correo electrónico no puede contener los caracteres: $, #");
            return; 
        }

      
        if (/[$@#]/.test(message)) {
            alert("El mensaje no puede contener los caracteres: $, @, #");
            return; 
        }

       
        if (/^\d/.test(name)) {
            alert("El nombre no puede comenzar con un número.");
            return; 
        }

       
        form.submit();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        var nameInput = document.querySelector("input[name='name']");
        var emailInput = document.querySelector("input[name='email']");
        var issueInput = document.querySelector("textarea[name='issue']");

        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var issue = issueInput.value.trim();


        if (name === "" || email === "" || issue === "") {
            alert("Por favor, complete todos los campos del formulario.");
            return; 
        }

 
        if (/[$@#]/.test(name)) {
            alert("El nombre no puede contener los caracteres: $, @, #");
            return; 
        }

  
        if (/[$#]/.test(email)) {
            alert("El correo electrónico no puede contener los caracteres: $, #");
            return; 

        }
        if (/[$@#]/.test(issue)) {
            alert("La descripción del problema no puede contener los caracteres: $, @, #");
            return; 
        }

     
        if (/^\d/.test(name)) {
            alert("El nombre no puede comenzar con un número.");
            return; 

        }
        form.submit();
    });
});
