
// - Il software riceve in input un lungo testo e una serie di parole
// da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un "badword index" calcolato come il numero di
// parole censurate su il numero di parole totali

// - Il software riceve in input un lungo testo e una serie di parole
// da censurare.
var testo = prompt('Inserisci del testo');
var paroleVietate = ['in', 'un', 'il'];

// trasformo il testo inserito nel prompt in un array le cui componenti
// sono le singole parole del testo inserito
var paroleTesto = testo.split(" ");
console.log(paroleTesto);

//Ciclo l'array del testo e faccio sostituire la parola 'xxx' alle parole vietate.
//Inizializzo a zero una variabile contatore e la faccio
// aumentare di 1 ogni volta che nel ciclo viene trovata una parola vietata
var contatore_censurate = 0;
for (i=0; i<paroleTesto.length; i++) {
  if (paroleVietate.includes(paroleTesto[i])) {
  paroleTesto[i] = 'xxx';
  contatore_censurate++;
  }
}
// console.log(paroleTesto);
// rimetto insieme le parole del testo con 'xxx' al posto delle parole vietate
paroleTesto.join(" ");
document.writeln(paroleTesto.join(" ") + '<br>');

// faccio stampare quante parole sono state censurate
document.writeln('Sono state censurate ' + contatore_censurate + ' parole' + '<br>');

// inizializzo il badword index
var badword_index = 0;
if (paroleTesto.length !=='0') {
  badword_index = contatore_censurate/paroleTesto.length;
}
// scrivo il badword index
document.writeln('Il badword index è ' + badword_index);
