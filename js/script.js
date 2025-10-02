document.addEventListener("DOMContentLoaded", () => {
    // ===============================
    // Modal general (Index + Proyectos)
    // ===============================
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const cerrar = document.querySelector(".cerrar");

    // ----- Certificados (Index.html: flip-card) -----
    const imagenesCertificados = document.querySelectorAll(".flip-card-back img");

    imagenesCertificados.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    // ----- Imágenes generales (Proyectos.html + presentación) -----
    const imagenesProyectos = document.querySelectorAll(".proyectos img, .presentacion img");

    imagenesProyectos.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    // ----- Cerrar modal -----
    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar modal si hago clic fuera de la imagen
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});



/*
let nombres = "Leandro Ticliahuanca";
let datos = ["Leandro Ticliahuanca", "SENATI", "Estudiante"];

console.log(nombres);
console.log(datos[2]);

//Esto es un comentario
//let edad = prompt("Ingresa tu edad: ");
console.log(edad);

//Trabajando con funciones 
function mostrarMensaje(){
    alert("Hola mundo");
}

function sumar(){
    let n1 = parseInt(prompt("Ingresa tu primer numero: "));
    let n2 = parseInt(prompt("Ingresa tu segundo numero: "));
    alert("El resultado es: "+(n1 + n2));
}

function cambiarColor(){
    let texto = document.getElementById("texto");
    texto.style.color= "red";
}
*/