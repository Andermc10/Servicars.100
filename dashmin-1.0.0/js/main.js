(function ($) {
    "use strict";

    // Spinner
    // Función para ocultar un spinner (cargando) después de un breve tiempo
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show'); // Remueve la clase 'show' para ocultar el spinner
            }
        }, 1);
    };
    spinner(); // Llama a la función spinner para ejecutarla

    // Botón "Volver arriba"
    // Muestra el botón al hacer scroll más de 300px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow'); // Muestra el botón
        } else {
            $('.back-to-top').fadeOut('slow'); // Oculta el botón
        }
    });
    // Acción al hacer clic en el botón "Volver arriba"
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo'); // Desplaza suavemente hacia arriba
        return false; // Previene el comportamiento predeterminado
    });

    // Toggler de la barra lateral
    // Cambia la clase "open" en la barra lateral y el contenido al hacer clic
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false; // Previene el comportamiento predeterminado
    });

    // Barra de progreso
    // Inicializa la barra de progreso al llegar a un cierto punto de desplazamiento
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%'); // Ajusta el ancho de la barra según su valor
        });
    }, {offset: '80%'}); // Se activa al llegar al 80% de la vista

    // Calendario
    // Inicializa un selector de fecha en línea
    $('#calender').datetimepicker({
        inline: true,
        format: 'L' // Formato de fecha
    });

    // Carrusel de testimonios
    // Inicializa un carrusel para mostrar testimonios
    $(".testimonial-carousel").owlCarousel({
        autoplay: true, // Reproduce automáticamente
        smartSpeed: 1000, // Velocidad de transición
        items: 1, // Número de elementos a mostrar
        dots: true, // Muestra puntos de navegación
        loop: true, // Hace que el carrusel vuelva a empezar
        nav : false // Desactiva la navegación
    });

    // Gráfico de citas agendadas
    $(document).ready(function () {
        // Gráfico de citas agendadas
        var ctx = document.getElementById('appointmentsChart').getContext('2d');
        var appointmentsChart = new Chart(ctx, {
            type: 'bar', // Tipo de gráfico
            data: {
                labels: ['Juan Pérez', 'Laura Gómez', 'Carlos Ruiz', 'Ana Torres'], // Nombres de las personas
                datasets: [{
                    label: 'Citas Agendadas', // Nombre del conjunto de datos
                    data: [1, 1, 1, 1], // Cada cliente cuenta como una cita agendada
                    backgroundColor: 'rgba(75, 192, 192, 0.5)', // Color de fondo
                    borderColor: 'rgba(75, 192, 192, 1)', // Color del borde
                    borderWidth: 1 // Ancho del borde
                }]
            },
            options: {
                responsive: true, // Hace que el gráfico sea responsivo
                scales: {
                    y: {
                        beginAtZero: true // Empieza el eje y desde cero
                    }
                }
            }
        });
    });

    // grafico clientes registrados 
    $(document).ready(function () {
        // Gráfico de clientes registrados
        var ctx = document.getElementById('clientsChart').getContext('2d');
        var clientsChart = new Chart(ctx, {
            type: 'bar', // Tipo de gráfico
            data: {
                labels: ['Juan Pérez', 'Laura Gómez', 'Carlos Ruiz', 'Ana Torres', 'Pedro Martínez'], // Nombres de los clientes
                datasets: [{
                    label: 'Clientes Registrados', // Nombre del conjunto de datos
                    data: [1, 1, 1, 1, 1], // Cada cliente cuenta como uno
                    backgroundColor: 'rgba(75, 192, 192, 0.5)', // Color de fondo
                    borderColor: 'rgba(75, 192, 192, 1)', // Color del borde
                    borderWidth: 1 // Ancho del borde
                }]
            },
            options: {
                responsive: true, // Hace que el gráfico sea responsivo
                scales: {
                    y: {
                        beginAtZero: true // Empieza el eje y desde cero
                    }
                }
            }
        });
    });
    
    
    


    

    

    
   
    

  

})(jQuery);

// Editar citas agendadas 

function setAppointmentData(button) {
    const row = button.closest('tr');
    document.getElementById('appointmentName').value = row.cells[1].innerText;
    document.getElementById('appointmentPhone').value = row.cells[2].innerText;
    document.getElementById('appointmentEmail').value = row.cells[3].innerText;
    document.getElementById('appointmentService').value = row.cells[4].innerText;
    document.getElementById('appointmentDate').value = row.cells[5].innerText; // Asegúrate de que el formato de fecha sea correcto
    document.getElementById('appointmentVehicle').value = row.cells[6].innerText;
}


// Agregar cliente 
function setClientData(button) {
    const row = button.closest('tr'); // Encuentra la fila de la tabla
    document.getElementById('clientName').value = row.cells[0].innerText; // Nombre completo
    document.getElementById('clientEmail').value = row.cells[1].innerText; // Correo electrónico
}

// Agregar servicios 


    function setServiceData(button) {
        const row = button.closest('tr'); // Encuentra la fila de la tabla

        // Asigna los valores de las celdas correspondientes a los campos del modal
        document.getElementById('editServiceName').value = row.cells[0].innerText; // Servicio
        document.getElementById('editServiceTitle').value = row.cells[2].querySelector('strong').innerText; // Título de Más Información
        document.getElementById('editServiceDescription').value = row.cells[2].innerText.split('\n')[1]; // Descripción
    }

