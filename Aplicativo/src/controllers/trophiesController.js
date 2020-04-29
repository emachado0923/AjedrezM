// Esta es la función creada en el allTemplate.js que saca una alerta con el mensaje de "Selecciona una categoría" cada 10 segundos
SelectMessage(10000);

$(document).ready(() => {
    // Aquí ejecutamos una función de hover en jQuery para ambos contenedores
    // Le estamos diciendo que agregue la animación de pulseTada con margin a ambos contenedores al poner el cursor encima
    $('#offlineIcon').hover(
        function() {
        $('#offlineIcon').addClass('pulseTada');
        $('#offlineText').addClass('m-50');
        $('#offlineText').removeClass('m-0P');
        }, function() {
        $('#offlineIcon').removeClass('pulseTada');
        $('#offlineText').addClass('m-0P');
        $('#offlineText').removeClass('m-50');
        }
    );

    $('#onlineIcon').hover(
        function() {
        $('#onlineIcon').addClass('pulseTada');
        $('#onlineText').addClass('m-50');
        $('#onlineText').removeClass('m-0P');
        }, function() {
        $('#onlineIcon').removeClass('pulseTada');
        $('#onlineText').addClass('m-0P');
        $('#onlineText').removeClass('m-50');
        }
    );
    
});