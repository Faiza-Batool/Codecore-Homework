const readline = require('readline');
const fs = require('fs');
//const { INSPECT_MAX_BYTES } = require('buffer');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout, 
    prompt: "> "
})

let list = [];
//let list = ['Take out the trash','Buy toothpaste','Buy Snickerdoodles','Fix the climate','Find a cure for aging']

let completedItems = [];
//let completedItems = ['Take out the trash','Buy toothpaste']
    
let deletedItem = '';

let menu = "(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit";
console.log(`Welcome to Todo CLI! \n--------------------\n${menu}`);
 
rl.prompt();
rl.on('line', (line) => {
    
if (line === 'v'){ 
  view();

    } else if(line === 'n'){
        neww();

    } else if(line[0] === 'c'){  
        complete(parseInt(line[1]));

    } else if(line[0] === 'd'){  
        ddelete(parseInt(line[1]));  

    }else if(line === 'q'){   
        quit(); 
    }
})

//functions

function view(){ 

    if (list.length == 0) {
        console.log("List is empty!");
    } else {
        for (let i=0;i< list.length;i++){
            if (completedItems.includes(list[i])) {
                console.log(`${i} [✓] ${list[i]}`)
            } else {
                console.log(`${i} [ ] ${list[i]}`) 
            }
        }
    }
    console.log(menu);
    rl.prompt(); 
}


function neww(){

    rl.question('What? \n', (answer) => {
    list.push(answer);
    console.log(menu);
    rl.prompt();
})  
}


function complete(x){
  
  for(let i = 0; i<list.length;i++){
    if(x === i){
        completedItems += list[i];
        console.log(`Completed "${list[i]}"`)
      
        console.log(menu);
        rl.prompt();
    }
  }
}

function ddelete(x){ 

    for (i = 0; i< list.length;i++){
        if(x ===i){
            deletedItem = list.splice(i,1);
            console.log(`Deleted "${deletedItem}"`);
        }
    }  
    console.log(menu);
    rl.prompt(); 
}
    

function quit(){
console.log('See you soon :)')
rl.close();
}


