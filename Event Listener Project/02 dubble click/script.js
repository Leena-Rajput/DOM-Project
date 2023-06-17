// dbclick  event

//the dblclick event fires when pointing device button such as a mouse'primary button)
// is double-clicked; that is, whwn it is rapidly clicked twice on a single element within a very short span of time.

const boxElement=document.getElementById("box");

// adding a dblclick event listner to the element
boxElement.addEventListener("dblclick",function() {
    alert("DoubleClick event is working properly")
});