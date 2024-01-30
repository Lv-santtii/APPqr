function generarCodigoQR() {
    // Obtener el texto ingresado por el usuario
    var texto = document.getElementById('texto').value;

    // URL base del servicio de generación de códigos QR de GoQR.me
    var urlBase = 'https://api.qrserver.com/v1/create-qr-code/?data=';

    // URL completa con el texto codificado
    var urlQR = urlBase + encodeURIComponent(texto);

    // Crear un elemento de imagen para mostrar el código QR
    var imgCodigoQR = document.createElement('img');
    imgCodigoQR.src = urlQR;

    // Agregar la imagen al elemento con id 'codigoQRContainer'
    var contenedorQR = document.getElementById('codigoQRContainer');
    contenedorQR.innerHTML = ''; // Limpiar cualquier código QR anterior
    contenedorQR.appendChild(imgCodigoQR);

    // Crear un enlace de descarga
    var enlaceDescarga = document.getElementById('enlaceDescarga');
    enlaceDescarga.href = urlQR;
    enlaceDescarga.style.display = 'block';
    
}
