const billInput = document.querySelector("#bill-input");
const customInput = document.querySelector("#custom");
const btnReset = document.querySelector("#btn-rest");
const peopleInput = document.querySelector("#peopleInput");
const percentBtn = document.querySelectorAll(".percent-btn");
const tipResult = document.querySelector(".tip-result");
const tipTotal = document.querySelector(".tip-total");


let totalBill = 0;
let totalPeople = 1;
let tipPercentage = 0.15;

billInput.addEventListener("input", biilFunc);
custom.addEventListener("input", customFunc)
peopleInput.addEventListener("input", peopleInputFunc);
btnReset.addEventListener("click", reset);

percentBtn.forEach((value) => {
    value.addEventListener("click", selectTip)
});

function biilFunc() {
    totalBill = parseFloat(billInput.value);
    calcTip();
}



function peopleInputFunc() {
    totalPeople = parseInt(peopleInput.value);
    if(peopleInput.value == 0 && peopleInput.value != "") {
        peopleInput.parentElement.classList.add("error");;
    }else {
        peopleInput.parentElement.classList.remove("error");;
    }
    calcTip();
}

function selectTip() {
    percentBtn.forEach((radio) => {
        radio.addEventListener("click", (e) => {
            tipPercentage = e.target.value;
        });
        calcTip();
    })
}

function calcTip() {
    if(peopleInput.value >= 1) {
        let tipPerPerson = (totalBill * tipPercentage) / totalPeople;
        let totalPerPerson = (totalBill / totalPeople) + tipPerPerson;
        tipResult.innerHTML = `$${(tipPerPerson).toFixed(2)}`;
        tipTotal.innerHTML = `$${(totalPerPerson).toFixed(2)}`;
    };
};

function reset() {
    tipResult.innerHTML = `$${(0).toFixed(2)}`;
    tipTotal.innerHTML = `$${(0).toFixed(2)}`;
    console.log(tipResult);
    billInput.value = "";
    peopleInput.value = "";
}

function customFunc() {
    tipPercentage = parseFloat(customInput.value / 100);
    calcTip();
}