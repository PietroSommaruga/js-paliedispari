//  definisco la variabile output per html
const output = document.getElementById('output');

// chiedo la parola
const parola = prompt('dimmi una parola e ti dirò se è palindroma!');

// divido la parola in caratteri con .split
const parolaDivisa = parola.split('');

// cambio l'ordiene dei carattere con .reverse
const parolaReverse = parolaDivisa.reverse();

// unisco i caratteri rovesciati con .join
const parolaReverseUnita = parolaReverse.join('')

// con un if capisco se la parola al contrario è uguale a quella inserita
if (parola === parolaReverseUnita) {
    // stampo esito
     output.innerHTML = ('La tua parola è palindroma!')
} else {
    // stampo esito
     output.innerHTML = ('La tua parola non è palindroma :(')
}

// -----------------------------------------------------------------------

// chiedo all'utente di sciegliere pari o discpari
const user = prompt('Sciegli pari o dispari?');
console.log ('Ho scelto ' + user);

// chiedo all'utente un numero da 1 a 5
const userNumber = parseInt(prompt('un numero da 1 a 5?'));
console.log ('il numero scelto da me è '+ userNumber)

//  genero un numero random da 1 a 5 per la cpu
function randomNumber(minNum, maxNum) {
    const result = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return result;
}
const cpuNumber = randomNumber(1, 5);
console.log('il numero generato per la cpu è ' + cpuNumber);

//  if controllo pari o dispari
function pariDispari (value) {
    if (value %2 == 0){
		return true;
    } else {
		return false;
}}

// somma dei due elementi
const somma = userNumber + cpuNumber;
let calc = pariDispari(somma);

// creo la variabile esito che avrà come valore (2 = pari) o (1 = dispari)
let esito;

// creo un if per controllare se vince pari o dispari 
if (calc) {
    console.log('Ha vinto il numero pari');
    esito = 2;
} else {
    console.log('Ha vinto il numero dispari');
    esito = 1;
}

// creo un if per controllare chi ha vinto 
if (user === 'pari' && esito === 2) {
    console.log('L\'utente vince')
} else if (user === 'dispari' && esito === 1) {
    console.log('L\'utente vince')
} else {
     console.log('La cpu vince')

}



