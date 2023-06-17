// on key press

//The key press event id fired when a key that produce a character value is pressed down.

let inputBox=document.getElementById("input-box")
let dispay=document.getElementById("display")

// adding a keypress event listner to the input box

inputBox.addEventListener("keypress",function(e){
    dispay.innerText="you have pressed "+e.key
})