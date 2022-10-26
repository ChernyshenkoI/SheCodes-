function citySearch(event) {
    event.preventDefault();
    let cityDisplayed = document.querySelector("#current-city-display");
    let cityInput = document.querySelector("#city-search-input");
    cityDisplayed.innerHTML = `${cityInput.value}`;
  }
  
  let searchForm = document.querySelector("form");
  searchForm.addEventListener("submit", citySearch);
  
  // city display END
  
  // current time Display
  
  let now = new Date();
  let currentTime = document.querySelector("#time");
  
  let hours = now.getHours();
  let date = now.getDate();
  let year = now.getFullYear();
  let minutes = now.getMinutes();
  
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "October",
    "November",
    "December"
  ];
  let month = months[now.getMonth()];
  
  currentTime.innerHTML = `${hours}:${minutes} , ${day} ${date} ${month} ${year} `;
  
  // current time Display END
  