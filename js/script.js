const output = document.getElementById('output');
const parola = prompt('Inserisci una parola palindroma!');
const parolaDivisa = parola.split('');
const parolaReverse = parolaDivisa.reverse();
const parolaReverseUnita = parolaReverse.join('')

if (parola === parolaReverseUnita) {
     output.innerHTML = ('La tua parola è palindroma')
} else {
     output.innerHTML = ('La tua parola non è palindroma')
}