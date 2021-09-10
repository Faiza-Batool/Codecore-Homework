function box_it(array){
    let longest =[];

   for (i=0; i<array.length; i++) {
    if(array[i].length > longest.length){
        longest = array[i];
        }
    }

    if (array.length == 0){
        console.log("┏┓");
        console.log("┗┛");
        return 
  
} else { 

    drawTopBorder(longest.length+1);

    for (a=0; a<array.length-1; a++) {
     console.log(`\n┃${array[a]}┃\n`)
    drawMiddleBorder(longest.length+1);
    } 
    console.log(`\n┃${array[a]}┃\n`)
    drawBottomBorder(longest.length+1);
}
}
box_it(['Jon Snow', 'Cersei Lannister']);
box_it(['Jon Snow']);
box_it([]);


function drawTopBorder(num){
    let str=""
        for (i=0; i<=num;i++){
            str +="━";   
        }
        console.log("┏"+str+"┓");   
    }
    
      function drawMiddleBorder(num){
        let str=""
        for (i=0; i<=num;i++){
            str +="━";   
        }
        console.log("┣"+str+"┫");   
    }
    
    function drawBottomBorder(num){
        let str=""
        for (i=0; i<=num;i++){
            str +="━";   
        }
        console.log("┗"+str+"┛");   
    }