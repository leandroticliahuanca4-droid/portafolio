// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
document.addEventListener("DOMContentLoaded", () => {
    //Almacenamos los id a trabajar dentro de sus variables modal - modalImg
    const modal = document.getElementById("modalImg");
    const modalImge = document.getElementById("modalImg");
    const cerrar = document.querySelector(".cerrar");

    const imagenes = document.querySelectorAll(".flip-card-back img");

    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            console.log("click", img.src);
            modal.style.display = "felx";
            modalImge.src = img.src;
        });
    });

    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none;"
        }
    });
});
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAjdXm5AMmgK0t7GlECRBgTR3EftlSGts",
    authDomain: "form-script-8fdb0.firebaseapp.com",
    projectId: "form-script-8fdb0",
    storageBucket: "form-script-8fdb0.firebasestorage.app",
    messagingSenderId: "752224323075",
    appId: "1:752224323075:web:50729533c2a9d73d1ab036",
    measurementId: "G-1T83261Q1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const form = document.getElementById("contacto-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    const fecha = new Date();
    try {
        await addDoc(collection(db, "Clientes"), {
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            fecha: fecha
        });
        console.log("Datos enviados");
        alert("Solicitud enviada");
        form.reset();
    } catch (error) {
        console.log("Error al enviar datos");
        alert("Hubo un error al enviar datos");
    }
});
