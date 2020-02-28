
let divCont = document.querySelector("#container");

function addDiv(){
    n = 256;
   //change it in the future based on dimensions of screen
    first:for (let i = 0; i < n; i++){
        let box = document.createElement('div');
            for (let j = 0; j < 16; j++)
                box.classList.add('divBox');
                divCont.appendChild(box) ; 
                continue first;
        
    }
    
}


