let opPlayer;
let opComputer;
let verification;
let confirmation = true;


function choosePlayer() {
   
    do {
        opPlayer = prompt("A continuación elija su opción:\n1 = Piedra.\n2 = Papel.\n3 = Tijeras.", 1);
        if (opPlayer >= 1 && opPlayer <= 3) {
            verification = true;
        }
        else {
            verification = false;
            alert("Por favor, elija una opción válida...");
        }
    }
    while (!verification);

    opPlayer = assing(opPlayer);
    return opPlayer;
}


function trigger() {
    opComputer = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    opComputer = assing(opComputer);
    return opComputer;
}


function assing(n) {
    if (n == 1) {
        n = "Piedra";
    }
    else if (n == 2) {
        n = "Papel";
    }
    else if (n == 3) {
        n = "Tijera";
    }
    return n;
}

function asses(opComputer, opPlayer) {
    if (opComputer == opPlayer) {
        resultado = "Empate";
    }
    else if (opComputer == "Piedra" && opPlayer == "Tijera") {
        resultado = "Perdiste";
    }
    else if (opComputer == "Papel" && opPlayer == "Piedra") {
        resultado = "Perdiste";
    }
    else if (opComputer == "Tijera" && opPlayer == "Papel") {
        resultado = "Perdiste";
    }
    else {
        resultado = "Ganaste";
    }
    if (resultado == "Empate") {
        alert("Elegiste " + opPlayer + ".\n" + "Yo elegí " + opComputer + ".\n" + "Por lo cual, hemos empatado.");
    }
    else {
        alert("Elegiste " + opPlayer + ".\n" + "Yo elegí " + opComputer + ".\n" + "Por lo cual, tú " + resultado + "!");
    }
}


alert("Bienvenido a piedra papel o tijera...");
while (confirmation == true) {
    choosePlayer();
    trigger();
    asses(opComputer, opPlayer);
    confirmation = confirm("¿Jugamos de nuevo?");
}