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
    
    
    

    // CRUD de Citas Agendadas
    // Función para ver detalles de la cita
    window.verCita = function(id) {
        alert(`Viendo detalles de la cita con ID: ${id}`);
    };

    // Función para editar la cita
    window.editarCita = function(id) {
        alert(`Editando la cita con ID: ${id}`);
        // Aquí puedes añadir la lógica para mostrar un formulario y editar la cita
    };

    // Función para eliminar la cita
    window.eliminarCita = function(id) {
        if (confirm(`¿Estás seguro de que deseas eliminar la cita con ID: ${id}?`)) {
            alert(`Cita con ID: ${id} eliminada`);
            // Aquí puedes agregar la lógica para eliminar la cita de la tabla y del almacenamiento
        }
    };

    // Función para agendar una nueva cita
    window.agendarCita = function() {
        alert('Agendar nueva cita');
        // Aquí puedes agregar la lógica para mostrar un formulario para agendar una nueva cita
    };

    // Inicialización de citas (puedes adaptarlo para usar localStorage o backend)
    function inicializarCitas() {
        // Aquí podrías cargar las citas desde un almacenamiento local o base de datos
    }

    // Se ejecuta cuando el documento está listo
    $(document).ready(function() {
        inicializarCitas(); // Llama a la función para inicializar las citas
    });

    // Función para establecer datos del cliente en el formulario
    function setClientData(name, email) {
        document.getElementById('clientName').value = name; // Asigna el nombre al campo
        document.getElementById('clientEmail').value = email; // Asigna el correo al campo
    }
    
    // Maneja el evento de envío del formulario de edición de cliente
    document.getElementById('editClientForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado
        // Aquí puedes agregar lógica para guardar los cambios
        alert('Cliente editado: ' + document.getElementById('clientName').value);
    });

    // Función para establecer datos de la cita en el formulario
    function setAppointmentData(name, phone, email, service, date, vehicle) {
        document.getElementById('appointmentName').value = name;
        document.getElementById('appointmentPhone').value = phone;
        document.getElementById('appointmentEmail').value = email;
        document.getElementById('appointmentService').value = service;
        document.getElementById('appointmentDate').value = date;
        document.getElementById('appointmentVehicle').value = vehicle;
    }
    
    // Maneja el evento de envío del formulario de edición de cita
    document.getElementById('editAppointmentForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado
        // Aquí puedes agregar lógica para guardar los cambios
        alert('Cita editada: ' + document.getElementById('appointmentName').value);
    });

    

  

})(jQuery);

