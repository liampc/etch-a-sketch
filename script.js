
let divCont = document.querySelector("#container");

function addDiv(){
    n = 256; // change to prompt, let number multiply by itself
   
    for (let i = 0; i < n; i++){
        let box = document.createElement('div');
        box.classList.add('divBox');
        divCont.appendChild(box) ; 
        
    }
    
}


