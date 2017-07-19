// variables 

var prix1 = 20 ;  
var prix2 = 30 ;
var prix3 = 40 ;
var devise = "EURO"
var  resulat = prix1 + prix2 + prix3 ; 
var x = 20 ;
var y = 100 ;

var prixPromo = resulat % x ; 




document.querySelector(".prix1").innerHTML = ` 
  
  ${prix1} ${devise}
  `

  document.querySelector(".prix2").innerHTML = ` 
  
  ${prix2} ${devise}
  `
  document.querySelector(".prix3").innerHTML = ` 
  
  ${prix3} ${devise}
  `
document.querySelector(".total").innerHTML = ` 
  
   ${ prixPromo}    ${devise}` 

   document.querySelector(".totalr").innerHTML=`
    ${ resulat }
   
   `

 