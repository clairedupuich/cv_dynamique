

var age = 33; //chaine
var b = 3;

var estVrai = true;
var estVraiChine = "true";

console.log(typeof age);
console.log(typeof b);
console.log(typeof estVrai);
console.log(typeof estVraiChine);

console.log(3 === '3');
console.log(3 == '3');

console.log(3 != '3');
console.log(3 ==='3');
console.log(3 !== '3');

console.log(3 > 2);
console.log(3 >= 2);
console.log(3 < 2);
console.log(3 <= 2);

console.log('autorise à passer ET : ');
console.log((age >= 18) && (age <= 30));

console.log('autorise à passer : ');
console.log((age >= 18) || (age <= 30));



//négation:
console.log( ! (age >= 18));

var age = 18;
if (age > 18){
    console.log('L\' UTILISATEUR EST MAJEUR');
}
else if (age == 18){
    console.log('egale à 18');
}
else {
    console.log('ko');
}

var age = 1;
switch (age){
    case 20:
        console.log('20 ans');
        break;
     case 12:
        console.log('12 ans');
        break;
    default:
        console.log('ni 12 ni 20 ans');
        break;
    
}

//if (age >18) {
 //    estMajeur = true;
// }
// eles {
    // estMajeur = false;
// }
// console.log(estMajeur);
// operateur ternaire

// var estMajeur = (age > 18) ? true : false;
// console.log(estMajeur);

var conditionDeTest = 1;
if (conditionDeTest) {
    console.log('vrai');
} else {
    console.log('faux');
}

var age = 18;
age++;
console.log(age);

console.log(++age);

// ++age
// age = age +1;                     
// console.log(age);

// age ++
// age = age +1;
// console.log(age);


age--;
console.log(age);
console.log(--age);


var anneeEnCours = 2020;
var alleeSaisie = prompt('quel est votre annee de naissance?');

if(alleeSaisie != parseInt(alleeSaisie)){
    console.log('erreur')
}
else if (anneeEnCours - alleeSaisie >= 18 ) {
        console.log("majeur");
    }
else{
        console.log(" tu n'est pas majeur");
    }
// parseInt()  它把字符串形式的 ''3" 转变成数字type的3.

// switch 只能用于确定的值，不能用于条件。此处只能是确切数字，不能有<>=等条件。
var anneeEnCours = 2020;
var alleeSaisie = prompt('quel est votre annee de naissance?');
switch (anneeEnCours - alleeSaisie ){
    case 18:
        console.log("just majeur");
        break;
     case 17:
        console.log('bientôt majeur');
        break;
    default:
        console.log('attend je reflicher');
        break;
    
}

// anneeBissextile 闰年练习
// 1 si l'annee est divisible par 4 et est ne divisible pas par100
// ou
// 2  si l'annee est divisible par 400
// 假如输入的年数可以被4整除没有余数即余数为0 同时 它不可以被100 整除，或者输入年数可以被400整除。则控制台显示 annee Bissextile 否
// 则显示"annee non Bissextile"

var anneeSaisie = parseInt(prompt('quel est votre annee de naissance: ?'));
if( ((anneeSaisie%4== 0) && !(anneeSaisie%100 == 0)) || (anneeSaisie%400 == 0)) {
    console.log('annee Bissextile')
}
else {
        console.log("Pas Bissextile");
    }

    //l'utilisateur X demande une subvention pour son entreprise:
    //- il est eligible a une reduction de 10% du CA si:
    //    -son revenue de l'annnee en cours est compris entre 30000 et 60000 annuel
    // -il est eligible a une reduction de 20% du CA si:
    //    -son revenue de l'annnee en cours est compris entre 0000 et 20999 annuel mais
    //     

var revenue = parseInt(prompt('combien vos gagnie ?'));
var anne = prompt("c'est le revenue de l'annee: ?")

if((revenue >= 30000)&&(revenue =< 60000) && (annee%400 == 0) {
    console.log(revenue*(1- 0.1 + 0.5 ));
}
else if((revenue >= 30000)&&(revenue =< 60000) && !(annee%400 == 0)) {
    console.log(revenue*(1- 0.1 ));
else if ((revenue >= 20000)&&(revenue =< 2900) &&(--revenue >= 50000) ) {
        console.log(revenue*(1-0.2));
else ((revenue >= 20000)&&(revenue =< 2900) &&(--revenue >= 50000) ) {
    console.log(revenue*(1-0.2));
}
revenue = revenue +5