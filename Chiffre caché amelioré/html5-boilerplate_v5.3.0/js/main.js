var chiffre = 21 ; 
var rep = prompt ("Devines le chiffre entre 1 & 30") ;


var result=parseInt(rep) ;



if ( chiffre > rep){
    alert ("c'est plus ");
}
 else  {
    alert ("c'est mois ");
}



if (chiffre === result) {
    alert("Bravo tu à trouvé !!");
}



else {
    alert ("perdu tu peux Rejouer !!");

    location.reload ();

}