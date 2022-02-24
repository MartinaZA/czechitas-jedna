/*
Zadání:
• Žádej si od uživatele zadávat číslo TAK DLOUHO, dokud ti
nezadá číslo odlišné od 0.
• Pokud ti zadá 0, vypiš mu, že musí zadat číslo odlišné od 
0.
• Po úspěšném zadání čísla, číslo vypiš*/

let cislo;
cislo = Number (prompt ('Zadej cislo odlisne od 0:'))
while (cislo === 0)
{
  console.log("Prosim zadej cislo odlisne od nuly")
  cislo = Number ()
}