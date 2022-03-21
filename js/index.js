


let fichas = ["O", "X"];
let turno = 1;
let fichasPuestasTablero = 0;
let endGame = false;
let buttonUpdate = document.getElementById("buttonUpdate");
let articleTextWinner = document.getElementById("articleTextWinner");
let buttons = Array.from(document.querySelectorAll(".article__boar__button"));
let tablero = document.getElementById("tablero");

buttons.forEach(
	x => x.addEventListener("click", ponerFicha)
);

function ponerFicha(event){
	let buttonPresed = event.target;
	if(!endGame && buttonPresed.innerHTML == ""){
		buttonPresed.innerHTML = fichas[turno];
		fichasPuestasTablero += 1;
		
		let estadoPartida = estado();
		if(estadoPartida == 0){
			cambiarTurno();
			if(fichasPuestasTablero < 9){
				pseudoBot();
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
		valuesButtons = args.map(x=>x.innerHTML);
		if(valuesButtons[0] != "" && valuesButtons.every((x, i, arr) => x===arr[0])){
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

const pseudoBot=()=>{

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let valuesButtons = buttons.map(x=>x.innerHTML);
  let positionFree = -1;

  if(valuesButtons[4]==""){
      positionFree = 4;
  }
  else{
      let n = aleatorio(0, buttons.length-1);
      while(valuesButtons[n]!=""){
          n = aleatorio(0, buttons.length-1); 
      }
      positionFree = n;
  }

  buttons[positionFree].innerHTML = "O";
  return positionFree;

}



const clearButtons=()=>{
	
	    
	
	for (let index = 0; index < buttons.length; index++) {
		
		buttons[index].innerHTML="";
		buttons[index].style.backgroundColor = "#efefef"
		
	}
	turno = 1;
	fichasPuestasTablero = 0;
	endGame = false;
	articleTextWinner.style.visibility="hidden";

}

buttonUpdate.addEventListener("click",clearButtons)





