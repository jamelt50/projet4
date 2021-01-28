
const switchy = document.querySelector(".btn-switch");
const body = document.querySelector(".body");
//

switchy.addEventListener("click",mouv);



function mouv(){
    switchy.classList.toggle("btn-mouv");
    body.classList.toggle("Dark");
}