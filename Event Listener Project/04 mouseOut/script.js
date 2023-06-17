// mouseOut
//The mouseout event is fired at an element when pointing device usually a mouse
// is used to move the cursor so that it is no longer contained within the element or one its chils elemente.

const boxElement=document.getElementById("box");

// adding a mouseOut event listner to the element
boxElement.addEventListener("mouseout",function() {
    alert("you left the safe zone (mouse out event working properly)")
});