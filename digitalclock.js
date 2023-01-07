let section = document.querySelector("section"),
    icons = document.querySelector(".icons");

icons.onclick = () => {
    section.classList.toggle("dark");
}

//creating a function and calling

setInterval(() => {
    let date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    //condition for AM and PM
    let dat;
    dat = hour < 12 ? "AM" : "PM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? hour - 12 : hour;


    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = dat;
}, 1000)