const rateLists = document.querySelectorAll(".rate-list");
const submitBtn = document.querySelector(".submit-btn");
const rate = document.querySelector(".rate");
const thankYou = document.querySelector(".thank-you");
const rateValue = document.querySelector(".rate-value");

let value;

rateLists.forEach((list) => {
    list.addEventListener("click", (e) => {
        rateLists.forEach((li) => li.classList.remove("active"));
        e.target.classList.add("active");
        value = e.target.textContent;
        console.log(e.target.textContent);
    })
})

submitBtn.addEventListener("click", () => {
    rate.classList.add("d-none");
    thankYou.classList.remove("d-none");
    rateValue.textContent = `You selected ${value} out of 5`
})