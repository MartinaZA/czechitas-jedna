/*
Nechte uživatele zadat 3 čísla a určete největší z nich
- výsledek vypište do konzole ve formátu
"Největší číslo je A: 37".
*/

let a = Number ( prompt("Zadajte cislo A") );
let b = Number ( prompt("Zadajte cislo B") );
let c = Number ( prompt("Zadajte cislo C") );
console.log(`A = ${a}, B = ${b}, C = ${c}`);
if (a>b) {
  if (a>c) {
    console.log(`Najvacsie cislo je ${a}`)
  }
  else {console.log(`Najvacie cislo je ${c}`)}
}
else {
  if (b>c) {
    console.log(`Najvacsie cislo je ${b}`)
  }
  else {
    console.log(`Najvacsie cislo je ${c}`)
  }

}
