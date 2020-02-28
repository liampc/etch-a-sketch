
let divCont = document.querySelector("#container");

function addDiv(){
    let n = 256;
    for (let i = 0; i < n; i++){
        let box = document.createElement('div');
        box.classList.add('divBox');
        divCont.appendChild(box);
    }
    
}
