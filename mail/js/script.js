// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull’esito del controllo.


// Creo lista email
var listaMail = ['paolazzienrico@gmail.com', 'erni1@live.com', 'pinco.pallino@alice.it', 'erni1@live.com', 'mario.bianchi@libero.it', 'valentino.rossi@outlook.com'];
console.log(listaMail);

// Chiedo all'utente la sua mail
var mailUtente = prompt('qual è la tua mail?');

// Controllo se la sua mail è presente
var isMailInList = false;

for (var i = 0; i < listaMail.length; i++) {
    var thisMail = listaMail[i];

    if (thisMail == mailUtente) {
        isMailInList = true;
    }
}

// Stampo messaggio sull'esito del controllo
if (isMailInList == true) {
    alert('Ok, la tua mail è nella lista');
} else {
    alert('Ops, la tua mail non è in lista');
}

