/*
FOR - Úkol 1
Nechte uživatele zadat 2 čísla, které značí dolní a horní mez
na číselné ose celých čísel – včetně.
Pokud tedy zadá 3 a 7, uvažujme čísla 3, 4, 5, 6, 7.
Vypište pomocí FOR*/

let a = Number (prompt ("zadaj cislo A"));
let b = Number (prompt ("zadaj cislo B, ktore je vacsie ako A"));

for (let i = a; i <= b; i = i + 1) 
{
console.log("cislo i je" + i);
}
