// mouseOver
//The mouseover event is fired at an when pointing device button (such as a mouse  or trackpad)
// is used to move the cursor onto the element or on its chils elemente.

const boxElement=document.getElementById("box");

// adding a mouseOver event listner to the element
boxElement.addEventListener("mouseover",function() {
    alert("You entered in restricted area")
});