
let divCont = document.querySelector("#container");
document.body.addEventListener('onload', addDiv(16));

function addDiv(side){
    divCont.style.gridTemplateRows = `repeat(${side}, 1fr)`;
    divCont.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
    let n = side * side// change to prompt, let number multiply by itself
   
    for (let i = 0; i < n; i++){
        let box = document.createElement('div');
        box.classList.add('divBox');
        box.style.g
        divCont.appendChild(box); 
    
    box.addEventListener('mouseenter', event => {
            box.style.background = "red";
        })
         
    }
    
}

