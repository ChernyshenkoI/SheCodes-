











let cityName = ""
let apiKey = "e53a3ec273016795243d6681c997ded2"
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={apiKey}"


function showTemperature(response){
    console.log(response.data)
}


axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);