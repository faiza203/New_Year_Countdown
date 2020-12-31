const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
year.innerText = currentYear + 1;

function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    days.innerHTML = d > 0 ? `<h2>0${d}</h2> <small> Days </small>` : "";
    hours.innerHTML = h > 0 ? h < 10 ? `<h2>0${h}</h2> <small> Hours </small>` : `<h2>${h}</h2> <small> Hours </small>` : null;
    minutes.innerHTML = m > 0 ? m < 10 ? `<h2>0${m}</h2> <small> Minutes </small>` : `<h2>${m}</h2> <small> Minutes </small>` : null;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}
setTimeout(() => {
    loading.remove();
    countdown.style.display = "flex";
}, 1000);
setInterval(updateCountdown, 1000);