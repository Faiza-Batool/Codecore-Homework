function drawLine(num){
let str = "";

for (i=1;i<=num;i++){
    str += "━";
 }
 console.log(str)
}

drawLine(process.argv[2])
