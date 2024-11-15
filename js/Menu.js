document.addEventListener("DOMContentLoaded", function() {
    var coches = document.querySelector('.coches');
    var piezas = document.querySelector('.piezas');
    var accesorios = document.querySelector('.accesorios');

    coches.addEventListener('mouseover', function() {
        document.querySelector('.submenu').style.display = 'block';
    });

    coches.addEventListener('mouseout', function() {
        document.querySelector('.submenu').style.display = 'none';
    });

    piezas.addEventListener('mouseover', function() {
        document.querySelector('.submenu2').style.display = 'block';
    });

    piezas.addEventListener('mouseout', function() {
        document.querySelector('.submenu2').style.display = 'none';
    });

    accesorios.addEventListener('mouseover', function() {
        document.querySelector('.submenu3').style.display = 'block';
    });

    accesorios.addEventListener('mouseout', function() {
        document.querySelector('.submenu3').style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var cookieNotice = document.getElementById("cookieNotice");
    var acceptCookiesBtn = document.getElementById("acceptCookies");

    var cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!cookiesAccepted) {
        cookieNotice.style.display = "block";
    }

    acceptCookiesBtn.addEventListener("click", function() {
        cookieNotice.style.opacity = "0";
        setTimeout(function() {
            cookieNotice.style.display = "none";
        }, 500); 

        localStorage.setItem("cookiesAccepted", "true");
    });
});
