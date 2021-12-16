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
