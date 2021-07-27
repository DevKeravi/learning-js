const API_KEY = "";
function onGeoOk(postion) {
  const lat = postion.coords.latitude;
  const lon = postion.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}c`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("날씨를 위한 위치정보를 알 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
