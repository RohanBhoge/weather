// API Key.
const api_key = "24f8d437e02c31ebb3c7dfcdf94de149";

// Accessing HTML element.
let humidity = document.querySelector("humidity div h");
let wind = document.querySelector("wind div h");
let weatherimg = document.querySelector(".weather img");
let temp = document.querySelector(".weather temp");
let input = document.querySelector(".search input");
let city = document.querySelector("city");
let search = document.querySelector(".search button");
let defcity = "pune";

// Add EventListner to Search Button.
search.addEventListener("click", () => {
  let cityval = input.value;
  weather(cityval);
});

// Function which write temp, humidity, city, wind speed.
async function weather(cityval) {
  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=${api_key}&units=metric`;

  const response = await fetch(api_url);
  let data = await response.json();
  const descriptions = data.weather[0].main;
  let humidityval = data.main.humidity;
  let tempval = data.main.temp;
  let windval = data.wind.speed;

  humidity.innerHTML = `${humidityval}%`;
  wind.innerHTML = `${windval} km/h`;
  temp.innerHTML = `${Math.round(tempval)}&#176;c`;
  city.innerHTML = `${cityval[0].toUpperCase() + cityval.slice(1)}`;

  // Adding Cloud image discribe weather condition.
  if (descriptions === "Clouds") {
    weatherimg.src = "assets/img/cloudy.png";
  } else if (descriptions === "Clear") {
    weatherimg.src = "assets/img/sun.png";
  } else if (descriptions === "Rain") {
    weatherimg.src = "assets/img/cloudy (2).png";
  } else if (descriptions === "Drizzle") {
    weatherimg.src = "assets/img/cloudy (1).png";
  }
}
weather(defcity);
