// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// poi chiedi la sua età
// Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)

/*

prompt nome
prompt cognome
prompt colore pref
prompt eta

print nomecognomecolorepreferito21

*/

const nomeutente = prompt('come ti chiami?');
const cognomeutente = prompt('qual è il tuo cognome?');
const colore = prompt('qual è il tuo colore perferito? (in inglese)');
const eta = prompt('quanti anni hai?');
const frase = 
`
${nomeutente}, ${cognomeutente}, <span style="color:${colore}">il tuo colore preferito  &egrave; ${colore}</span> e hai ${eta} anni
`;
const inserire = document.getElementById('dati').innerHTML = frase;
console.log(inserire)
