/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number1 = 3
const number2 = 2

if (number1 > number2) {
    console.log("Il numero 1 è maggiore del secondo")
}
else if (number1 === number2) {
    console.log("Il numero 1 è uguale al secondo")
}
else {
    console.log("Il numero 1 è minore del secondo")
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (num!==2)
console.log('not equal')

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (number1 % 5=== 0) {
  console.log('divisibile per 5')
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number3 = 12
const number4 = 4
if (number3 - number4 === 8 || number3 + number4 === 8)
{
  console.log("la sottrazione è uguale a 8")
}
else if(number3|| number4===8)
{
  console.log("Uno dei 2 numeri è uguale a 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totale = 20
if (totale>50) {
  console.log ('spedizione gratuita', totale)
}
else {
  console.log('spedizione non gratuita', totale)
 
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let black_friday = totale - (totale*20/100)
if (black_friday > 50) {
  console.log('spedizione gratuita',black_friday)
}
else {
  console.log ('Spedizione 10', black_friday +10)
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const var1 = 8
const var2 = 1
const var3 = 4

if (var1>var2 && var2>var3){console.log (var1, var2, var3)}
else if (var1>var3 && var3>var2){console.log(var1, var3, var2)}
else if (var2>var1 && var1>var3){console.log(var2, var1, var3)}
else if (var2>var3 && var3>var1){console.log(var2, var3, var1)}
else if (var3>var1 && var1>var2){console.log(var3, var1, var2)}
else if (var3>var2 && var2>var1){console.log(var1, var3, var2)}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(typeof 14);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (14 %2 === 0){
  console.log("il numero è pari")
}
else (console.log("è dispari"))


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 4
if (val < 10 && val >= 5 ) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log ("Uguale a 10 o maggiore");

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city='Toronto'
console.log("John", me
)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log("John", me
)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop(2)
console.log("array", me.skills)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myArray = []
myArray.push (1)
myArray.push (2)
myArray.push (3)
myArray.push (4)
myArray.push (5)
myArray.push (6)
myArray.push (7)
myArray.push (8)
myArray.push (9)
myArray.push (10)
console.log("il mio array", myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myArray.splice(9)
myArray.push(100)
console.log(" nuovo array", myArray)