let i=0;
let move;
let btnRight = document.getElementById("btnRight");
let btnLeft = document.getElementById("btnLeft");
let wrap = document.getElementById("wrap");
function sliderRight(){
    i++;
    while(i<=5){
        // move = i * (-310) + "px";
        // wrap.style.left= move;
         move = i * (-310) + "px";
        // wrap.style.left= move;
        wrap.style.transform= `translateX(${move})`;
        break;
    }

    if(i!=0){
        btnLeft.disabled=false;
    }
    if(i===5){
        btnRight.disabled=true;
    }
    console.log("i: ",i);
    console.log("move: ",move);
}
function sliderLeft(){
    i--;
    while(i<=4){
        // move = i * (-310) + "px";
        move = i * (-310) + "px";
        // wrap.style.left= move;
        wrap.style.transform= `translateX(${move})`;
        break;
    }
    if(i===0){
        btnLeft.disabled=true;
    }
    else{
        btnRight.disabled=false;
    }
    console.log("i: ",i);
    console.log("move: ",move);
}

function init(){
    let btnRight = document.getElementById("btnRight");
    let btnLeft = document.getElementById("btnLeft");
    btnRight.onclick = sliderRight;
    btnLeft.onclick = sliderLeft;
}
window.addEventListener("load", init, false);