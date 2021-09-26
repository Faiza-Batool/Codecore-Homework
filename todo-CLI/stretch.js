const readline = require('readline');
const fs = require('fs');
//const { INSPECT_MAX_BYTES } = require('buffer');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout, 
    prompt: "> "
})
var data=fs.readFileSync('todo-list.json', 'utf8');
var list=JSON.parse(data);
//console.log(list);
 
let deletedItem = {};
let completedItems = {};

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

    }else if(line === 's'){   
        save(); 
    }
})

//functions

function view(){ 

    //for (let value of Object.values(list))

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
       // ........
//        var output = '';

//        if($.isArray(list) || typeof(list) == 'object') {
//            for(var i in list) {
//                output += i + ' : ' + print_r(printthis[i], true) + '\n';
//            }
//        }else {
//            output += printthis;
//        }
//        if(returnoutput && returnoutput == true) {
//            return output;
//        }else {
//            alert(output);
//        }
//    }
        //.....
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
  
//   for(let i = 0; i<list.length;i++){
//     if(x === i){

    if (list['completed'] === true){
        completedItems += list[x];
        console.log(`Completed "${list[i]}"`)
    } 
    console.log(menu);
    rl.prompt();
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

function save(){
    
    rl.question('What? \n', (answer) => {
        if (answer === ''){

            fs.writeFile('myTodos.json', list, 'utf8', function(err) {
                if (err) {
                    console.log(err) 
                }
                console.log(`List saved to "myTodo.json"`);
            }) 
        }else{
            fs.writeFile(`${answer}`, list, 'utf8', function(err) {
                if (err) {
                    console.log(err) 
                }
                console.log(`List saved to "${answer}"`);
            }) 

        }
    
    console.log(menu);
    rl.prompt(); 
    })
}


