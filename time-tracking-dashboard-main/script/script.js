const btn =[...document.querySelectorAll(".btn")];
const title = [...document.querySelectorAll(".title")]
const currentHrs = [...document.querySelectorAll(".current-hrs")];
const previousHrs = [...document.querySelectorAll(".previous-hrs")];

fetch("/data.json").then(res => res.json()).then(res => {
    btn[1].classList.add('active');
    for(i = 0; i < res.length; i++) {
        title[i].innerHTML = `${res[i].title}`;
        currentHrs[i].innerHTML = `${res[i].timeframes.weekly.current}hrs`;
        previousHrs[i].innerHTML = `previous - ${res[i].timeframes.weekly.previous}hrs`;
    }
    btn.forEach((el) => {
        el.addEventListener("click", (ev) => {
            const button = ev.target;
                button.classList.toggle('active');
                if(button.id === 'daily') {
                    for(i = 0; res.length; i++) {
                        btn[1].classList.remove('active');
                        btn[2].classList.remove('active');
                        title[i].innerHTML = `${res[i].title}`;
                        currentHrs[i].innerHTML = `${res[i].timeframes.daily.current}hrs`;
                        previousHrs[i].innerHTML = `Previous - ${res[i].timeframes.daily.previous}hrs`;
                    }
                }else if (button.id === 'weekly') {
                    for(i = 0; i < res.length; i++) {
                        btn[0].classList.remove('active');
                        btn[2].classList.remove('active');
                        title[i].innerHTML = `${res[i].title}`;
                        currentHrs[i].innerHTML = `${res[i].timeframes.weekly.current}hrs`;
                        previousHrs[i].innerHTML = `previous - ${res[i].timeframes.weekly.previous}hrs`;
                    }
                }else if(button.id === 'monthly') {
                    btn[0].classList.remove('active');
                    btn[1].classList.remove('active');
                    for(i = 0; i < res.length; i++) {
                        title[i].innerHTML = `${res[i].title}`;
                        currentHrs[i].innerHTML = `${res[i].timeframes.monthly.current}hrs`;
                        previousHrs[i].innerHTML = `previous - ${res[i].timeframes.monthly.previous}hrs`;
                    }
                }
        })
    })
});