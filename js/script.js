/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
**Prima di partire a scrivere codice poniamoci qualche domanda:**
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
**Consigli del giorno:**
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
**BONUS:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
Applica stili differenti agli elementi aggiunti al DOM, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.*/




// 1 generare una sequenza di numeri da 1 a 100 usando un contatore

// 2 applicare uno stile ai multipli di 3 , 5 o entrambi (uso 3 stili differenti)
const boxesContainer = document.querySelector('.box-container')
for(let i = 1 ; i <= 100 ; i++) {
  console.log(i);
 
 
  // const box = document.createElement('div');
  // box.classList.add('box');
  // box.append(i + 1)


if(i % 3 === 0){
  console.log(i + 10)
}
if(i % 5 === 0){
  console.log('fizz')
}    
 }

