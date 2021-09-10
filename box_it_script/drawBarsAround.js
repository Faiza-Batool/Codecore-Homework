function drawBarsAround(str){
    console.log("┃",str,"┃");
}

//drawBarsAround(process.argv[2]);

drawBarsAround("My name is Dan") // returns "┃My name is Dan┃"
console.log("\n");
drawBarsAround("You are Jane  ") // returns "┃You are Jane  ┃"
console.log("\n");
drawBarsAround("  You are Bill") // returns "┃  You are Bill┃"


