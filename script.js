'use strict'
const first_div=document.querySelector(".div-1");
const second_div=document.querySelector(".div-2");
const third_div=document.querySelector(".div-3");
const fourth_div=document.querySelector(".div-4");
const h1=document.querySelector("h1");

let randomNumber=Math.trunc(Math.random()*4+1);
let randomNumber_forLoop=Math.trunc(Math.random()*10+1);
const div=document.querySelector(`.div-${randomNumber}`);
let lebel=1;

let keydownEvent=document.addEventListener("keydown",function(event){
    playaudio(`sound-div-${randomNumber}.wav`);
   h1.textContent="Level 1";
     document.querySelector(`.div-${randomNumber}`).style.zIndex="-1";
})
document.addEventListener("keyup",function(event){
    document.querySelector(`.div-${randomNumber}`).style.zIndex="1";
})

function playaudio(audioName) {
    let audio = new Audio(audioName);
    audio.play(); 
}

    function onMousdownTime(){
        div.style.boxShadow="3px 5px 7px 9px wheat";
        div.style.borderColor="white";
        div.style.backgroundColor="darkgray"; 
        playaudio(`sound-div-${randomNumber}.wav`);
        h1.textContent="Level 2"; }
        
    function onMouseupTime(event){
        div.style.boxShadow="none";
        div.style.borderColor="black";
        randomNumber; 
        if(randomNumber == 1){
            first_div.style.backgroundColor="rgb(8, 187, 8)";  
        } 
        else if(randomNumber == 2){
            second_div.style.backgroundColor="red";  
        }
        else if(randomNumber == 3){ 
            third_div.style.backgroundColor="yellow"; 
        }
        else{
            fourth_div.style.backgroundColor="blue";  
        } 
    }
    div.addEventListener("mousedown",onMousdownTime );
    div.addEventListener("mouseup",onMouseupTime);

















































