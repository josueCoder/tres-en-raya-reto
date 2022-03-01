let fichas = ["O", "X"];
let turno = 1;
let fichasPuestasTablero = 0;
let endGame = false;
let buttonUpdate = document.getElementById("buttonUpdate");
let articleTextWinner = document.getElementById("articleTextWinner");
let buttons = Array.from(document.getElementsByTagName("button"));

buttons.forEach(
	x => x.addEventListener("click", ponerFicha)
);

function ponerFicha(event){
	let botonPulsado = event.target;
	if(!endGame && botonPulsado.innerHTML == ""){
		botonPulsado.innerHTML = fichas[turno];
		fichasPuestasTablero += 1;
		
		let estadoPartida = estado();
		if(estadoPartida == 0){
			cambiarTurno();
			if(fichasPuestasTablero < 9){
				bot();
				estadoPartida = estado();
				fichasPuestasTablero += 1;
				cambiarTurno();	
			}	
		}
		
		if(estadoPartida == 1){
			articleTextWinner.style.visibility = "visible";
			endGame = true;
		}
		else if(estadoPartida == -1){
			articleTextWinner.innerHTML = "😥Has perdido la partida 😥"
			endGame = true;
			articleTextWinner.style.visibility = "visible";
		}
	}	
}

function cambiarTurno(){
	if(turno==1){
		turno = 0;
        console.log(turno)
	}
	else{
		turno = 1;
	}
    console.log(turno)
	
}

const  estado=()=>{

    positionVictory = 0;
	nEstado = 0;

	function sonEquals(...args){
		valores = args.map(x=>x.innerHTML);
		if(valores[0] != "" && valores.every((x, i, arr) => x===arr[0])){
			args.forEach(x => x.style.backgroundColor = "Turquoise")
			return true;
		}
		else{
			return false;
		}
	}

	//Comprobando todas las posibilidades de ganar
	if(sonEquals(buttons[0], buttons[1], buttons[2])){
		positionVictory = 1;
	}

	else if(sonEquals(buttons[3], buttons[4], buttons[5])){
		positionVictory = 2;
	}

	else if(sonEquals(buttons[6], buttons[7], buttons[8])){
		positionVictory = 3;
	}

	else if(sonEquals(buttons[0], buttons[3], buttons[6])){
		positionVictory = 4;
	}

	else if(sonEquals(buttons[1], buttons[4], buttons[7])){
		positionVictory = 5;
	}

	else if(sonEquals(buttons[2], buttons[5], buttons[8])){
		positionVictory = 6;
	}

	else if(sonEquals(buttons[0], buttons[4], buttons[8])){
		positionVictory = 7;
	}

	else if(sonEquals(buttons[2], buttons[4], buttons[6])){
		positionVictory = 8;
	}

	//comprobando quien gano
	if(positionVictory > 0){
		if(turno == 1){
			nEstado = 1;
            
		}
		else{
			nEstado = -1;
		}
	}

	return nEstado;
}

const bot=()=>{

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let valores = buttons.map(x=>x.innerHTML);
  let pos = -1;

  if(valores[4]==""){
      pos = 4;
  }
  else{
      let n = aleatorio(0, buttons.length-1);
      while(valores[n]!=""){
          n = aleatorio(0, buttons.length-1); 
      }
      pos = n;
  }

  buttons[pos].innerHTML = "O";
  return pos;

}

const updateGame=()=>{
	location.reload();
}

buttonUpdate.addEventListener("click",updateGame)





