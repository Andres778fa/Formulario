// Coordenadas permitidas 
const allowedLatitude = 4.7180303;  // latitud permitida
const allowedLongitude = -74.1357292; // longitud permitida
const range = 0.01; // Rango permitido 

// Verificar la posición del usuario
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      // Mostrar las coordenadas 
      console.log(`Latitud: ${latitude}, Longitud: ${longitude}`);

      // Validar la posición
      if (
        Math.abs(latitude - allowedLatitude) <= range &&
        Math.abs(longitude - allowedLongitude) <= range
      ) {
        document.getElementById("status").textContent = "Ubicación válida.";
        document.getElementById("access").style.display = "block";
      } else {
        document.getElementById("status").textContent =
          "Ubicación no válida.";
        document.getElementById("denied").style.display = "block";
      }
    },
    (error) => {
      document.getElementById("status").textContent =
        "No se pudo obtener tu ubicación.";
      console.error("Error al obtener la ubicación:", error);
    }
  );
} else {
  document.getElementById("status").textContent =
    "Tu navegador no soporta la geolocalización.";
}
