function boxIt(){
    
    if (arguments.length == 0){
        console.log("┌┐");
        console.log("└┘");
        return 
  
} else { 

    var longest = '';
    for (i=0; i < arguments.length; i++) {
        if (arguments[i].length >= longest.length) {
          longest = arguments[i];
        }
    }
         // top corner
        let str3="";
        for (n=0; n<=longest.length+1;n++){
            str3 += "─";
        }console.log('┌'+str3+'┐');  
      
  for (j=0; j<arguments.length-1; j++){
        
      console.log("│",arguments[j],"│"); 
      let str4 = "";
      for (k=0; k<=longest.length+1;k++){
          str4 += "─";
      }    
      console.log('├'+str4+'┤'); 
   }
   
   console.log("│",arguments[j],"│"); 
   let str5 = "";
         for (i=0; i<=longest.length+1;i++){
         str5 += "─";
         }
         console.log('└'+str5+'┘'); 
   } 
 }   
boxIt("Jon Snow","Cersei Lannister","Daenerys Targaryen");
boxIt("Cersei Lannister");
boxIt();

