console.log("Bienvenido a mi pagina")

// Cambia entre el modo claro y el modo oscuro usando el switch del HTML.
const switchModo = document.getElementById("switch");

switchModo.addEventListener("change", () => {
    document.body.classList.toggle("modo-oscuro", switchModo.checked);
});
