const plusIcons = document.querySelectorAll(".plus");
const minusIcon = document.querySelectorAll(".minus");
const pra = document.querySelectorAll(".pra");


for(let i = 0; i < plusIcons.length; i++) {
    let plus = plusIcons[i];
    let minus = minusIcon[i];
    let p = pra[i];
    
    plus.addEventListener("click", () => {
        if(plus.classList.contains("d-none")) {
            plus.classList.remove("d-none");
            p.classList.add("d-none");
            minus.classList.add("d-none");
        }else {
            plus.classList.add("d-none");
            p.classList.remove("d-none");
            minus.classList.remove("d-none");
        }
    })
    minus.addEventListener("click", () => {
        plus.classList.remove("d-none");
        p.classList.add("d-none");
        minus.classList.add("d-none");
    })
}
