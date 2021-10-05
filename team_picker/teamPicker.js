// // function myFunction() {
// //   let quantity = document.getElementById("Quantity").value;
// //   let members = document.getElementById("members").innerHTML.split(",");

// //   if (document.getElementById("TeamCount").checked) {
// //     // Set its contents:

// //     let i = 0, n = members.length, len = n / quantity, j = 1;
// //     while (i < n) {
// //       let item = document.createElement('li');
// //       item.appendChild(document.createTextNode(members.slice(i, i += len)));
// //       // Add it to the list:
// //       list.appendChild(item);
// //     }
// //     // Finally, return the constructed list:
// //     return list;
// //   }
// //   else if (document.getElementById('NumberPerTeam').checked) {
// //     // Set its contents:

// //     let i = 0, n = members.length;
// //     while (i < n) {
// //       let item = document.createElement('li');
// //       item.appendChild(document.createTextNode(members.slice(i, i += quantity)));
// //       // Add it to the list:
// //       list.appendChild(item);
// //     }
// //     // Finally, return the constructed list:
// //     return list;
// //   }
// // }



// // shuffle function
// function shuffle(names){
//         if (names.length > 0) {
//             for (let i = 0; i < cards.length; i++) {
//                 const randomNum = parseInt(Math.random() * (names.length - 1));
//                 const temp = names[randomNum];
                
//                 names[randomNum] = names[index];
//                 names[index] = temp;
//             }
//         } 
// }


// function countingTeam(quantity,names){
//     listOfNames,numOfTeams

// arr = []
// subArr = []
// output = [];

// let shuff = shuffle(names)
// for(i=0,j= i<=quantity;i++){
//     // for (j=0; j<=;j++)
//         subArr[i].push(names)
       
// }
// arr.push(subArr)
// }

// function numPerTeam(quantity,names){
// arr = [];
// subArr = [];
// for (i=0;i<names.length;i++){
//     subArr.push(names[i]);
//     if (subArr.length == quantity){
//         arr.push(subArr)
//     }
//     subArr = [];
// }

// }

// module.exports = {
//     countingTeam: countingTeam,
//     numPerTeam: numPerTeam
// }

