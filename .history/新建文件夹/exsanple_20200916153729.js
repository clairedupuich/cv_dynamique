

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