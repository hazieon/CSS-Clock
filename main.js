const hand = document.querySelector(".hand");
const minhand = document.querySelector(".minhand");
//hand.style.transform.transform-origin =10%;
//hand.style.transform = `rotate(90deg)`; // example of how to rotate the hand
let second =  0; 
let minute = 0;

function handRotate(){

hand.style.transform = `rotate(+${second}deg)`;
    second = second +6;
    console.log("hello");
}


/* MINUTE HAND
let secondHand = setInterval(handRotate, 1000); 

function minhandRotate(){

    hand.style.transform = `rotate(+${minute}deg)`;
        minute = minute +6;
        console.log("hello");
    }
    
let minuteHand = setInterval(minhandRotate, 10000); 

*/



// define the seconds hand element in HTML to JS
// create a function that rotates the second hand by 6 degrees
// use setInterval to run every second (1000 ms)
// 
//