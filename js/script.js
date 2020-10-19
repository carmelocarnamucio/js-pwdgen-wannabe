// nome utente
var nomeUtente = prompt('Come ti chiami?')
console.log(nomeUtente)

// cognome utente
var cognomeUtente = prompt ('Quale è il tuo cognome?');
console.log (cognomeUtente);

// colore preferito
var colorePreferito = prompt('ora dimmi quale è il tuo colore preferito');
console.log (colorePreferito);

// resoconto dati utente
var infoUtente = nomeUtente + cognomeUtente + colorePreferito + "19";
console.log (infoUtente);

// output
document.getElementById('output').innerHTML = infoUtente;
