

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

swich (age){
    case 20:
        console.log('20 ans');
        break;
    
}


