// on keydown and key up event


// key down
//The keydown event id fired when a key is pressed

//key up
//The key up event is fired whwn a key is released.
let container=document.getElementById("container")
let dispay=document.getElementById("display")

// adding a key down event listner to the document
document.addEventListener("keydown",function(e) {
    dispay.style.color="red"
    dispay.innerText=e.key + " is keyDown"
})

//adding a keyup event listner to the document
document.addEventListener("keyup",function(e) {
    dispay.style.color="green"
    dispay.innerText=e.key +  " is keyUp"
})