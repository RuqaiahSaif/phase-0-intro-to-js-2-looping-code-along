// Code your solutions in this file
let myArray=[];

let newArray = [];
function writeCards(myArray,event){
    
    for(let i =0 ; i<myArray.length; i++){
       
        newArray.push(`Thank you, ${myArray[i]}, for the wonderful ${event} gift!`);
       
    }
    console.log(newArray)
    // return newArray
} 

function countDown(num){
    let j = num;
    while (j >= 0) {
        console.log(j--);
    }
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")
countDown(10)