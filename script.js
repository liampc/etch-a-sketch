
let divCont = document.querySelector("#container");

function addDiv(){
    n = 256;
   //change it in the future based on dimensions of screen
    for (let i = 0; i < n; i++){
        let box = document.createElement('div');
        box.classList.add('divBox');
        divCont.appendChild(box);
    }
    
}

