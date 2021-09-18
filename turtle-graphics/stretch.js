class Turtle{
    constructor(x=0, y=0){
    this.x = x;
    this.y = y;   

    this.currentDirection = "right";
    this.array=[[x,y]];
    this.arr = [];

    this.max =[];
    this.xMax = 0;
    this.yMax = 0;
    this.grid = "";
    }

    forward(steps){

        if(this.currentDirection === "right"){
            for (let i=1;i<=steps;i++){
                this.x += 1;  
                this.array.push([this.x,this.y]);     
            } 
        } 
        if (this.currentDirection === "left"){
            for (let i=1;i<=steps;i++){
                this.x -= 1; 
                this.array.push([this.x,this.y]);    
            }       
        }
        if(this.currentDirection === "up"){
            for (let i=1;i<=steps;i++){
                this.y -= 1;  
                this.array.push([this.x,this.y]); 
            }
        }
        if(this.currentDirection === "down"){
            for (let i=1;i<=steps;i++){
                this.y += 1;  
                  
                this.array.push([this.x,this.y]); 
            }
        }
    return this;  
    }
      
    right(){
        switch(this.currentDirection){
            case 'right':
                this.currentDirection = "down";   
                break;
            case 'left':
                 this.currentDirection = "up";   
                break;
            case 'up':
                this.currentDirection = "right";   
                break;
            case 'down':
                this.currentDirection = "left";   
                break;
        }
        return this; 
    }
       
    left(){
        switch(this.currentDirection){
            case 'right':
                this.currentDirection = "up";   
                break;
            case 'left':
                this.currentDirection = "down";   
                break;
            case 'up':
                this.currentDirection = "left";   
                break;
            case 'down':
                this.currentDirection = "right";   
                break;
        }
        return this; 
    }
    
    allPoints(){
        console.log(this.array);   
    }
    
    print(){
        
        this.arr=this.array.sort();
        this.max=this.arr[this.arr.length-1];
        
        this.xMax = this.max[0];
        this.yMax = this.max[1];
    
       
        console.log("x ", this.xMax, "y",this.yMax);

        for(let i = 0; i <= this.yMax; i++) { 
            for(let j = 0; j <= this.xMax; j++) { 
                if(!this.array.find(v => v[1] === i && v[0] === j)){
                    this.grid += '□ ';
                }else{
                    this.grid += '■ ';
                } 
            }
            this.grid += '\n';
        }
        console.log(this.grid);
    }
}

const t = new Turtle();
t.print();
t.allPoints();

const commands = process.argv[2].split("-");

commands.forEach((command) => {
    // console.log("current command is ", command);
    // console.log(command[0]);

    switch (command[0]){
        case "t":
            let mn = command.slice(1).split(',');
            console.log(mn[0],mn[1]);
            const t = new Turtle(mn[0],mn[1]);
            break;
        case "f":
            t.forward(parseInt(command.slice(1)));
            break;
        case "l":
            t.left();
            break;
        case "r":
            t.right();
            break;
        default:
            break;
    }
});         


const fs = require('fs');

output = fs.readFile('./turtle.js', 'utf8', (err, data) => {
    if (err){
        console.log('there was an error',err);
    } else {
        console.log(`--output=[${turtle}<]/code> `)
    }
});  

fs.writeFile(('new-turtle.js', result,err) => {
    console.log('write was completed');
});