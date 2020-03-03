
let divCont = document.querySelector("#container");
document.body.addEventListener('onload', addDiv(16));

function addDiv(side){
     let n = side * side// change to prompt, let number multiply by itself
   
    for (let i = 0; i < n; i++){
        let box = document.createElement('div');
        box.classList.add('divBox');
        divCont.appendChild(box); 
        box.addEventListener('mouseenter', event => {
            box.style.background = "red";
        })
         
    }
    
}

let frame;
let btn = document.querySelector('button');
btn.addEventListenerss('click', event => {
    frame = prompt("How many squares per side do you want?");
    console.log(addDiv(frame));
})