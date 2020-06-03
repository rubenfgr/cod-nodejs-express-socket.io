
// @ts-ignore
var socket = io();

// Escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

// Emitir
socket.emit('enviarMensaje', {
    usuario: 'RubénFGR',
    mensaje: 'Hola Mundo!!!'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(data) {
    console.log(data);
});