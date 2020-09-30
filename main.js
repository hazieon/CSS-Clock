const hand = document.querySelector(".hand");
//hand.style.transform.transform-origin =10%;
//hand.style.transform = `rotate(90deg)`; // example of how to rotate the hand
let second =  0; 

function handRotate(){

hand.style.transform = `rotate(+${second}deg)`;
second = second +6;
console.log("hello");
}

let secondHand = setInterval(handRotate, 1000); 




//"rotate(" + sdegree + "deg)";
//handRotate();


// define the seconds hand element in HTML to JS
// create a function that rotates the second hand by 6 degrees
// use setInterval to run every second (1000 ms)
// 
//