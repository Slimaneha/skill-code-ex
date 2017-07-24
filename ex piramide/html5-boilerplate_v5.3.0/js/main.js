var result = ''


for (i=0; i<8; i++) {
  
  for (j=0; j<8; j++) {
    
     if (i % 2 === 0) {
      
       if (j % 2 === 0) {
         result += '#';
       } else { result += '0';
       }
        
    } else {
      
       if (j % 2 == 0) {
         result += '0';
       } else
         result += '#';      
     }    
   }
  result += '\n';
}

console.log(result);