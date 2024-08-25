const imagen = document.getElementById("imagen");

const imagenOriginal = "Personaje.png"
const nuevaImagen = "Personaje2.png"

imagen.addEventListener("mouseover", function () {
    imagen.src = nuevaImagen;
})

imagen.addEventListener("mouseout", function () {
    imagen.src = imagenOriginal;
});
