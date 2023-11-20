// Pari e Dispari:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userGameChoose = prompt('choose odd or even').toLocaleLowerCase();
const userGameNumber = parseInt(prompt('choose a number betwen 1 and 5'));
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const pcGameNumber = randomNumber(1, 5);

function randomNumber(min, max){
  return Math.floor(Math.random(max - min + 1) + min)
}
// Sommiamo i due numeri
const sumGameNumber = userGameChoose + pcGameNumber
// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
function oddOrEven(num){
  if (num % 2 === 0){
    return 'even'
  } else{
    return 'odd'
  }
}
// Dichiariamo chi ha vinto.
if (oddOrEven(sumGameNumber) == userGameChoose){
  console.log('user win')
} else {
  console.log('pc win')
}







// Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// E' vietato usare split(), reverse() e simili.