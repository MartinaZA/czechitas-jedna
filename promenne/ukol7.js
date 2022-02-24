/*
Čti od uživatele čísla tak dlouho, dokud nezadá 0 a vždy
vypiš NAAKUMULOVANÝ součet těchto čísel
Vstup: 2
Součet: 2
Vstup: 4
Součet: 6
Vstup: 11
Součet: 17
Vstup: 0
Finální součet: 17 */

let cislo;
let sucet = 0;
cislo = Number (prompt ('Zadaj cislo:'));
while 
(cislo !== 0)
{
  sucet = sucet + cislo;
  console.log("sucet cisel je" + sucet);
  cislo = Number(prompt ('Zadaj cislo:'));
}