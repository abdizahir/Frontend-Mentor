const main = document.querySelector(".main");
let mainPostion = main.getBoundingClientRect();
const success = document.querySelector(".success");
const card = document.querySelector(".card");
const form = document.querySelector('#form');
const btn = document.querySelector("#btn");
const emailAddress = document.querySelector(".email-address");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email");

    if(email.value === "") {
        email.style.backgroundColor = "hsl(4deg 100% 67% / 40%)";
        email.style.color = "hsl(4deg 100% 67%)"
        const span = document.createElement("span");
        form.appendChild(span);
        form.style.position = "relative";
        span.style.float = "left";
        span.style.position = "absolute";
        span.style.right = "4em";
        span.textContent = "Valid email required";
        span.style.color = "hsl(4deg 100% 67%)";
        span.style.fontWeight = "bold";
    }else {
        success.classList.remove("hidden");
        card.style.display = "none";
        emailAddress.textContent = email.value;
    }
})

