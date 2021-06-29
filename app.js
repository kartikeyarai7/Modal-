let btn = document.querySelector("button");
let modal = document.querySelector(".content");
let mod = document.querySelector(".mod");
let close = document.querySelector(".close");

btn.addEventListener("click",() => {
    modal.classList.toggle("vis");    
    mod.classList.add = ("vis");
});

close.addEventListener("click",()=>{
    modal.classList.toggle("vis");
});