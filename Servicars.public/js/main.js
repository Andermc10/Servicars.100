(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            // Verifica si el elemento con id 'spinner' existe
            if ($('#spinner').length > 0) {
                // Elimina la clase 'show' del spinner para ocultarlo
                $('#spinner').removeClass('show');
            }
        }, 1); // Se ejecuta después de 1 milisegundo
    };
    spinner(0); // Llama a la función spinner

    // Initiate the wowjs
    new WOW().init(); // Inicializa WOW.js para animaciones en scroll

    // Sticky Navbar
    $(window).scroll(function () {
        // Verifica la posición del scroll
        if ($(this).scrollTop() > 45) {
            // Agrega clases para hacer que la navbar sea 'sticky' y añadir sombra
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            // Elimina las clases cuando el scroll es menor a 45px
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true, // Activa el autoplay del carrusel
        smartSpeed: 1500, // Tiempo de transición entre slides
        center: false, // No centra el ítem actual
        dots: true, // Muestra puntos de navegación
        loop: true, // Hace que el carrusel se repita
        margin: 25, // Margen entre elementos
        nav: true, // Activa las flechas de navegación
        navText: [
            '<i class="fa fa-angle-right"></i>', // Ícono de la flecha derecha
            '<i class="fa fa-angle-left"></i>'   // Ícono de la flecha izquierda
        ],
        responsiveClass: true, // Activa la clase responsive
        responsive: {
            // Configuración de los ítems en diferentes tamaños de pantalla
            0: {
                items: 1 // 1 ítem en pantallas pequeñas
            },
            576: {
                items: 1 // 1 ítem en pantallas pequeñas
            },
            768: {
                items: 1 // 1 ítem en pantallas medianas
            },
            992: {
                items: 2 // 2 ítems en pantallas grandes
            },
            1200: {
                items: 2 // 2 ítems en pantallas extra grandes
            }
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5, // Tiempo de retraso entre incrementos
        time: 2000 // Tiempo total para contar hasta el número final
    });

    // Back to top button
    $(window).scroll(function () {
        // Verifica la posición del scroll
        if ($(this).scrollTop() > 300) {
            // Muestra el botón 'back to top' si el scroll es mayor a 300px
            $('.back-to-top').fadeIn('slow');
        } else {
            // Oculta el botón si el scroll es menor a 300px
            $('.back-to-top').fadeOut('slow');
        }
    });

    // Click event for back to top button
    $('.back-to-top').click(function () {
        // Anima el scroll hacia arriba de manera suave
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false; // Evita el comportamiento predeterminado del botón
    });

})(jQuery); // Fin de la función autoejecutable

  
    


