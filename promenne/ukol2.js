Nadefinujme si proměnné a jejich hodnoty potřebné k uložení následujících informací:
 Jméno muže a ženy ​
 Rok a měsíc narození muže i ženy​
Spočteme rozdíl věku muže a ženy v měsících a vypíšeme ve formátu​ "[muz] a [zena] jsou od sebe věkově vzdáleni [XY] měsíců​"
Pro zjednodušení úkolu počítejme, že je muž vždy starší! (ať nemusíme řešit absolutní hodnotu z Math.abs())


let muz = 'Jozef';
let zena = 'Martina';
let rokNarozeniMuze = 1982;
let rokNarozeniZeny = 1984;
let mesicNarozeniMuze = 5;
let mesicNarozeniZeny = 4;
let rozdiel = (rokNarozeniMuze * 12 + mesicNarozeniMuze) - (rokNarozeniZeny * 12 + mesicNarozeniZeny);
console.log( muz + ' a ' + zena + ' su od seba vekove vzdialeni ' + rozdiel + ' mesiacov.')
