const API_KEY = "d8caa78c1144fa60f493a840d628c576";

function onSuccess(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url  = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    console.log(url);

    fetch(url).then(response => response.json()).then(data => {
        const location = data.name;
        const weather = data.weather[0].main;

        const weatherContainer = document.getElementById("weather");
        const currentWeather = weatherContainer.querySelector("span:first-child");
        const city = weatherContainer.querySelector("span:last-child");
        currentWeather.innerText = `${weather} / ${Math.floor(data.main.temp)}°`;
        city.innerText = "@ " + location;
});
}

function onError() {
    alert("Can't retrieve your location");
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
