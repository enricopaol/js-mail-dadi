// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero random da 1 a 6 per il giocatore e il computer
var numeroGiocatore = Math.floor(Math.random() * 6) + 1;
alert('Il tuo numero è: ' + numeroGiocatore);

var numeroComputer = Math.floor(Math.random() * 6) + 1;
alert('Il numero del computer è: ' + numeroComputer);

// Stabilisco e stampo il numero del vincitore
if (numeroGiocatore < numeroComputer) {
    alert('Hai perso');
} else if (numeroComputer < numeroGiocatore) {
    alert('Hai vinto');
} else {
    alert('Il risultato è pareggio');
}

