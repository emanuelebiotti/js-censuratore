// - Il software riceve in input un lungo testo e una serie di parole
// da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un "badword index" calcolato come il numero di
// parole censurate su il numero di parole totali

//creo una variabile contenente una stringa di testo
var testo = prompt('Inserisci del testo');

// creo un array contenente le singole parole della stringa di testo, utilizzando il metodo split

var paroleTesto = [];
paroleTesto = testo.split(" ");
console.log(paroleTesto);

// // creo un array contenente le parole vietate
var paroleVietate = ['in', 'un', 'di'];

// devo ciclare due array: quello contenente le parole del testo e quello delle parole vietate.
// nidifico un ciclo for dentro un altro ciclo for (???)
for (i=0; i<paroleTesto.length; i++) {

  for (j=0; j<paroleVietate.length; j++) {
    if (paroleTesto[i] === paroleVietate[j]) {
      // qui dentro devo fare in modo che le parole vietate vengano sostitituite con 'xxx'.
      //può essere questa (???)
      //paroleTesto.replace(paroleVietate[i], 'xxx');

     }
    }
  }

// oppure creo una funzione che sostituisce una parola con un'altra???
