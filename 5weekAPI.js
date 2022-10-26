
let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";
let city = "Sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);


function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("h1");
    temperatureElement.innerHTML = `It is ${temperature}°C in ${city}`;
  }
  