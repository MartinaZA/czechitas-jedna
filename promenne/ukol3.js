/*Přijměte jméno jako vstup od uživatele, dále nechte 
zadat jeho věk a vypište na základě věku jednu ze 
dvou vět ve tvaru:
a) Vaše jméno je Marian, je vám 30 let a tak máte 
právo řídit auto.
b) Vaše jméno je Marian, je vám 14 let a tak musíte 
počkat ještě 4 let, než budete moci řídit aut
*/

let menoUzivatela = prompt("Ako sa volas?");
let vekUzivatela = Number (prompt ("Kolko mas rokov?"));

if(vekUzivatela>18) {
console.log(`Vase meno je ${menoUzivatela}, je Vam ${vekUzivatela} a tak mate pravo riadit auto`)
}
else {
console.log(`Vase meno je ${menoUzivatela}, je Vam ${vekUzivatela} a tak musite este pockat ${18-vekUzivatela} rokov, aby ste mohli riadit auto`)
}