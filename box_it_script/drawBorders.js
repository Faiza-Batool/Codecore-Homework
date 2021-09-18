
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

//drawTopBorder(process.argv[2]);
//drawMiddleBorder(process.argv[2]);
//drawBottomBorder(process.argv[2]);

drawTopBorder(4);
drawTopBorder(0);
console.log("\n")
drawMiddleBorder(8);
console.log("\n")
drawMiddleBorder(0);
console.log("\n")
drawBottomBorder(2)
drawBottomBorder(5)
