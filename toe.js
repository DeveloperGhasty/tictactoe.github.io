console.log("hello");
const hint = document.getElementById("hint");
const start = document.getElementById("start");
const restart = document.getElementById("restart");
let turnO = true;
let chanse;
let boxes = document.querySelectorAll(".box");
let chance = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];
function disa (box) {
     box.style.pointerEvents = 'none';
      }

start.addEventListener("click", startgame);
function startgame () {
hint.innerText = "O turn"
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
        box.innerText = "O";
        hint.innerText = "X turn";
        
        turnO = false;
    }
    else{
        box.innerText = "X";
        hint.innerText = "O turn";
        turnO = true;
    }
              
    checkwin();
    });
});  
};
function checkwin () {
    for(let pattern of chance) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    
 if(pos1 != "" &&  pos2 != "" &&  pos3 != ""){
     if(pos1 == pos2 &&  pos2 == pos3){
         hint.innerText = boxes[pattern[0]].innerText + " winns"  ;
     for (var i = 0; i < boxes.length; i++) {
       boxes[i].style.pointerEvents = 'none'; 
       }        
     }}
     }}
 restart.addEventListener("click", rstrt);
function rstrt () {
 boxes.forEach((box) => box.innerText = " ");
 turnO = true;
 hint.innerText = "O turn" 
 };      
function abl (box) {
   for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.pointerEvents = 'auto'; 
     }
      }