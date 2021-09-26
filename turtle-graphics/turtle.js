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
            
const flash1 = new Turtle(0,4).forward(3).left().forward(3);
    flash1.allPoints();
    flash1.print();
    
const flash2 = new Turtle(0,4).forward(3).left().forward(3).right().forward(5).right().forward(8).right().forward(5).right().forward(3).left().forward(3);
    flash2.allPoints();
    flash2.print();
