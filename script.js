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
const userWord = prompt('type a word');
console.log(palindromaCheck(userWord));

// Trasformare stringa in array
function stringToArray(string){
  const array = [];
  for (let i = 0; i < string.length; i++) {
    let str = string.charAt(i)
    array.push(str)
  }
  return array
}

// Creare una funzione per capire se la parola inserita è palindroma
function palindromaCheck(word){
  const wordArray = stringToArray(word);
  let reverseWordArray = [];
  let reverseWord = '';
  for (let i = wordArray.length; i > 0; i--){
    reverseWordArray.push(wordArray[i-1]);
  }
  for (let i = 0; i<reverseWordArray.length; i++){
    reverseWord += reverseWordArray[i]
  }
  if(word === reverseWord){
    return 'palindroma'
  } else {
    return 'non palindroma'
  }
}