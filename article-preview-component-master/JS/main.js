
const prodDetails = document.querySelector(".prod-details");
const main = document.querySelector("main");
var mainPostion = main.getBoundingClientRect();
var mainWidth = mainPostion.width;
const btn = document.querySelector(".btn"); 
const personInfo = document.querySelector(".person-info");
const shareIcon = document.querySelector(".fa-share");
btn.addEventListener("click", () => {
    if(mainWidth < 600) {
        personInfo.style.display = "none";
    }else {
        personInfo.style.display = "display";
        shareIcon.style.display = "none";
    }
    const share = document.createElement("div");
    share.className = "share";
    prodDetails.appendChild(share);
    const icons = document.createElement("div");
    icons.className = "icons";
    share.appendChild(icons)
    const shareTxt = document.createElement("span");
    shareTxt.className = "span-txt";
    shareTxt.textContent = "S H A R E";
    icons.appendChild(shareTxt);
    const facebookIcon = document.createElement("i");
    facebookIcon.className = "fa-brands fa-square-facebook";
    icons.appendChild(facebookIcon);
    const twiter = document.createElement("i");
    twiter.className = "fa-brands fa-twitter";
    icons.appendChild(twiter);
    const pinterest = document.createElement("i");
    pinterest.className = "fa-brands fa-pinterest";
    icons.appendChild(pinterest);
    const shareLogo = document.createElement("i");
    shareLogo.className = "fa-solid fa-share";
    share.appendChild(shareLogo);
})