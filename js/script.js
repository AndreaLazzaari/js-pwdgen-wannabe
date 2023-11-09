
// dichiarazione e assegnazione mie variabili

const nomeUtente = prompt ('Inserisci il tuo nome');
const cognomeUtente = prompt ('Inserisci il tuo cognome');
const coloreUtente = prompt ('Inserisci il tuo colore preferito');

console.log (nomeUtente)



const risultatoEsercizio = nomeUtente + cognomeUtente + coloreUtente;

document.getElementById('dati-utente').innerHTML = risultatoEsercizio + 21
