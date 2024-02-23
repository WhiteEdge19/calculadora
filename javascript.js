const botones = document.querySelectorAll("button");
const pantalla = document.querySelector(".display");

const cuandoSeHaceClick = function (evento) {
	// Recuerda, this es el elemento
	console.log("El texto que tiene es: ", this.value);
    pantalla.innerText = this.value;
	// Podemos cambiar cualquier cosa, p.ej. el estilo
	this.style.borderColor = "cyan";
}
botones.forEach(boton => {
	//Agregar listener
	boton.addEventListener("click", cuandoSeHaceClick);
});