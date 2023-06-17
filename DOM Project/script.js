const decrementbtn=document.getElementById("decrementbtn");
const incrementbtn=document.getElementById("incrementbtn");
const restbtn=document.getElementById("resetbtn");
const displayValue=document.getElementById("displayvalue");

// for decrement button click
decrementbtn.addEventListener("click",() =>  {
    const value=Number(displayvalue.innerText);
    if (value > 0) {
        displayvalue.innerText=value-1;
    }else{

    alert("Negative Value not allowed");
    }
});

// for increment button click
incrementbtn.addEventListener("click",() => {
    const value=Number(displayvalue.innerText);
    if (value >=10){
        alert("10+ value are not allowed")
    } else {
        displayvalue.innerText=value+1;
    }
});

//for reset button click
resetbtn.addEventListener("click",() => {
    displayvalue.innerText= 0;
});