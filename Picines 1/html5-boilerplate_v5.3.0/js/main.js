alert ("Nous allons calculer le temps de remplisages de votre picine !! répondai aux question suivante ")

var debit= parseInt (prompt("Quelles est le debit de l'eaux ?")) ;
var  largeur= parseInt (prompt("Quelles est la largeur de votre picine ?")) ;
var pronfondeur = parseInt (prompt("Qeulles et la pronfondeur de votre picine "))
var  longeur = parseInt (prompt ("Quelle est la longeur de votre picine ???"))




function test (parametre1,parametre2,parametre3,parametre4){


 return  parametre1*parametre2*parametre3/parametre4 ;


}


alert(test(largeur,pronfondeur,longeur,debit));
 