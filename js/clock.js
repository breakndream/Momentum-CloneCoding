const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,"0");
    const minutes = date.getMinutes().toString().padStart(2,"0");
    const seconds = date.getSeconds().toString().padStart(2,"0");
    clock.innerText =`${hours} : ${minutes} : ${seconds}`;
    
}
//1초 지나면 clock이 생기니까 처음에 로드 되자마자 clock 띄움
getClock();
setInterval(getClock, 1000);
