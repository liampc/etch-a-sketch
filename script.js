let divCont = document.querySelector("#container");
document.body.addEventListener('onload', addDiv(16));


function addDiv(side){
    divCont.style.gridTemplateRows = `repeat(${side}, 1fr)`;
    divCont.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
    let boxes = side * side;

    for (let i = 0; i < boxes; i++){
        let box = document.createElement('div');
        box.classList.add('divBox');
        divCont.appendChild(box);
        box.addEventListener('mouseenter', hover);
      }
}

function hover(){
    this.style.background = "blue";
}


let resetBtn = document.querySelector('button');

resetBtn.addEventListener('click', event => {
    let grid = prompt("How many boxes per side do you want?");
    let boxes = document.getElementsByClassName('divBox');
        while(boxes.length > 0){
            boxes[0].parentNode.removeChild(boxes[0]); 
        }
    addDiv(grid);
});

