function isMobileDevice() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function showQrOrButton() {
    var ctaContainer = document.getElementById('ctaContainer');

    if (isMobileDevice() && window.innerWidth <= 768) {
        // Es un dispositivo móvil con ancho de ventana menor o igual a 768 pixels, mostrar el botón de descarga
        console.log("Hola")
    } else {
        // Es una computadora o un dispositivo móvil con ancho de ventana mayor a 768 pixels, mostrar el código QR
    }
}

window.onload = showQrOrButton;

function descargarApp() {
    // Aquí puedes poner el código que necesitas al hacer clic en el botón
    // Por ejemplo, redirigir al enlace de descarga:
    window.location.href = "https://drive.google.com/file/d/1tHrgh6gCLjG4j3qNVbDVFkA7OQ54odhV/view";
    console.log("Hola")
}