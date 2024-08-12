// Assign buttons**************

let btn1= document.querySelector("#btn1");
btn1.addEventListener('click',()=>{
    console.log(1);
})
let btn2= document.querySelector("#btn2");
btn2.addEventListener('click',()=>{
    console.log(2);
})
let btn3= document.querySelector("#btn3");
btn3.addEventListener('click',()=>{
    console.log(3);
})
let btn4= document.querySelector("#btn4");
btn4.addEventListener('click',()=>{
    console.log(4);
})
let btn5= document.querySelector("#btn5");
btn5.addEventListener('click',()=>{
    console.log(5);
})
let btn6= document.querySelector("#btn6");
btn6.addEventListener('click',()=>{
    console.log(6);
})
let btn7= document.querySelector("#btn7");
btn7.addEventListener('click',()=>{
    console.log(7);
})
let btn8= document.querySelector("#btn8");
btn8.addEventListener('click',()=>{
    console.log(8);
})
let btn9= document.querySelector("#btn9");
btn9.addEventListener('click',()=>{
    console.log(9);
})
let btn0= document.querySelector("#btn0");
btn0.addEventListener('click',()=>{
    console.log(0);
})
let btnAc= document.querySelector("#btnAc");
btnAc.addEventListener('click',()=>{
    console.log("clear");
})
let btndiv= document.querySelector("#btndiv");
btndiv.addEventListener('click',()=>{
    console.log("/");
})
let btnmul= document.querySelector("#btnmul");
btnmul.addEventListener('click',()=>{
    console.log("X");
})
let btnadd= document.querySelector("#btnadd");
btnadd.addEventListener('click',()=>{
    console.log("+");
}
)
let btnmin= document.querySelector("#btnmin");
btnmin.addEventListener('click',()=>{
    console.log("-");
}
)
let btneql= document.querySelector("#btneql");
btneql.addEventListener('click',()=>{
    console.log("=");
})

// Display
let screen= document.querySelector(".display");
let btns=document.querySelectorAll('.btn');

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

