// estas variables capturan el formulario y el input del email
var mailForm = document.querySelector('form');
var mailInput = document.querySelector('#mail');

// Aquí creamos el evento de envío con el formulario
mailForm.addEventListener('button', (e) => {
    // esto previene la recarga automática por defecto
    e.preventDefault();
    // aquí creamos una variable con un objeto que tiene el nombre de la tabla(base de datos), y el valor del input del email
    let datos = {tabla: "tbl_usuarios", email: mailInput.value};
    // Aquí enviamos la variable con el ipcRenderer para recibirlo en el index.js
    ipcRenderer.send('mailPassword', datos);
});




// capturamos el valor del input de password
let mail = document.querySelector('#enviarCorreo').value;
// en esta condición colocamos una alerta de error si el campo de usuario o contraseña están vacíos
if(mail == ''){
    typeV = 'error';
    type(typeV);
    new Noty({
        text: 'Por favor complete el campo',
        theme: 'bootstrap-v3',
        type: typeV,
        layout: 'bottomRight',
        timeout: 2000,
        progressBar: true,
        animation: burbujas
    }).show();
}

// Aquí recibimos a emailNoExiste que se activa cuando el email copiado no existe
ipcRenderer.on('emailNoExiste', () => {
    // Aquí se genera una alerta que nos indica que el email no existe
    typeV = 'error';

    type(typeV);

    new Noty({
        text: `El email no  existe, inténtelo nuevamente o registrese!`,
        theme: 'sunset',
        type: typeV,
        layout: 'bottomRight',
        timeout: 3000,
        progressBar: true,
        animation: burbujas
    }).show();
})

// para el envío de datos al correo electrónico se necesita una buena conexión a internet, por ello todo esto está comentado
ipcRenderer.on('emailCorrecto', () => {
     typeV = 'success';

     type(typeV);
     console.log('llega');

     new Noty({
         text: `Se ha enviado un codigo a su correo electronico.`,
         theme: 'bootstrap-v3',
         type: typeV,
         timeout: 3000,
         progressBar: true,
         animation: burbujas
     }).show();

     window.location.href = './codePassword.html';
})

ipcRenderer.on('ErrorEnvio', () => {
     typeV = 'error';

     type(typeV);

     new Noty({
         text: `El mensaje no se pudo enviar, revice su conexion a internet o intentelo nuevamente.`,
         theme: 'bootstrap-v3',
         type: typeV,
         timeout: 4000,
         progressBar: true,
         animation: burbujas
     }).show();
})