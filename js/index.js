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

function ponerFicha(event){
	let botonPulsado = event.target;
	if(!partidaAcabada && botonPulsado.innerHTML == ""){
		botonPulsado.innerHTML = fichas[turno];
		puestas += 1;
		
		let estadoPartida = estado();
		if(estadoPartida == 0){
			cambiarTurno();
			if(puestas < 9){
				bot();
				estadoPartida = estado();
				puestas += 1;
				cambiarTurno();	
			}	
		}
		
		if(estadoPartida == 1){
			textoVictoria.style.visibility = "visible";
			partidaAcabada = true;
		}
		else if(estadoPartida == -1){
			textoVictoria.innerHTML = "😥Has perdido mi leader 😥"
			partidaAcabada = true;
			textoVictoria.style.visibility = "visible";
		}
	}	
}




