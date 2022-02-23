/*Nechte uživatele zadat 3 čísla - strany trojúhelníku a 
zjistěte, zda jde trojúhelník sestrojit
- trojuhelnik jde sestrojit, pokud soucet 2 
nejmensich stran je > nez treti strana
- principialne jde POUZE o podminku navic do 
prikladu 2... 
*/


let a = Number ( prompt("Zadajte dlzku strany trojuholnika A") );
let b = Number ( prompt("Zadajte dlzku strany trojuholnika B") );
let c = Number ( prompt("Zadajte dlzku strany trojuholnika C") );
console.log(`Strana trojuholnika A = ${a}, strana trojuholnika B = ${b}, strana trojuholnika C = ${c}`);
if (a>b) {
  if (a>c) {
    if ((b+c)>a) {
    console.log(`Najvacsie cislo je ${a}. Trojuholnik je mozne zostrojit.`)
  } else {
    console.log(`Trojuholnik nie je mozne zostrojit, pretoze sucet dvoch mensich stran je mensi ako najdlhsia strana/`)
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