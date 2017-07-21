alert  (" Nous allons calculer en combien de temps votre picines va ce remplire ");

var debit = parseInt (  prompt("Quelles et le debit de l'eaux  ") );
var pronfondeur= parseInt (  prompt ("quelle est la pronfondeur de votre picines ") );
var  largeur = parseInt (  prompt ("Quelle et la largeur de votre picines  ") );
var longeur = parseInt (  prompt ("Quelle et la longeur de votre picine ") );



// var result1 =parseInt(debit)
// var result2=parseInt(pronfondeur)
// var result3=parseInt(largeur)
// var result4=parseInt(longeur)



function calcule (param1, param2,param3,param4)  {

return  param1 * param2 * param3 /param4 ; 


}


alert(calcule(pronfondeur,largeur,longeur,debit));
