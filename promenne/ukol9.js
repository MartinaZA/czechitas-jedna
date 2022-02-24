/*Úkol 2
Nechte uživatele zadat horní mez – číslo. Vypište všechny 
čísla od nuly do této horní meze VČETNĚ, které jsou sudá.
Vstup: 8
Výstup: 
2
4
6
8*/

let HorniMez = Number ( prompt ("zadaj horni mez:"));

while(i = 0; i <= HorniMez; i++ ) 
{
  if (i % 2 === 0) {
    console.log(i);
  }
}