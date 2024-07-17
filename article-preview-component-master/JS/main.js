const btn = document.querySelector(".btn");
const share = document.querySelector(".share");
const personInfo = document.querySelector(".person-info");
const share1 = document.querySelector(".share-1");
const main = document.querySelector(".main");
const mainPostions = main.getBoundingClientRect();
btn.addEventListener("click", () => {
    console.log(mainPostions.width);
    // personInfo.classList.add("hidden");
    if(mainPostions.width < 600) {
        personInfo.style.display = "none";
    }else {
        personInfo.style.display = "flex";
    }
    share1.style.display = "none";
    // share.classList.add("flex");
    share.style.display = "flex";
})