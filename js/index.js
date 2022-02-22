let turno = 1;
let fichas = ["O", "X"];
let puestas = 0;
let partidaAcabada = false;
let textoVictoria = 
	document.getElementById("textoVictoria");
let botones = 
	Array.from(document.getElementsByTagName("button"));

botones.forEach(
	x => x.addEventListener("click", ponerFicha)
);


