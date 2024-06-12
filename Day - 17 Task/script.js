document.addEventListener("DOMContentLoaded", function () {
  const countriesContainer = document.getElementById("countries-container");

  // Fetch countries data from REST Countries API
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        createCountryCard(country);
      });
    })
    .catch((error) => console.error("Error fetching countries:", error));

  // Function to create a Bootstrap card for a country
  function createCountryCard(country) {
    const { name, flags, cioc, capital, region, latlng } = country;
    const flagURL = flags.png;
    const latitude = latlng[0];
    const longitude = latlng[1];

    const card = document.createElement("div");
    card.className = "col-lg-4 col-sm-12";

    const cardHTML = `
      <div class="card ">
        <div class="card-header text-center bg-primary h5" >${name.common}</div>
        
        <img src="${flagURL}" alt="${name.common}'s Flag" class="img-fluid">
        <div class="card-body text-center">
          <p><strong>Capital:</strong> ${capital}</p>
          <p><strong>Region:</strong> ${region}</p>
          <p><strong>Country Code:</strong> ${cioc}</p>
          <button class="btn btn-primary mt-3" onclick="fetchWeather(${latitude}, ${longitude}, '${name.common}')">Click for Weather</button>
          <div id="${name.common}-weather"></div>
        </div>
      </div>
    `;

    card.innerHTML = cardHTML;
    countriesContainer.appendChild(card);
  }

  // Function to fetch weather data for a given latitude, longitude, and country name
  function fetchWeather(lat, lng, name) {
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=6e360078f35d5a0f22a372a53bf72e9b`;

    fetch(weatherAPI)
      .then((response) => response.json())
      .then((data) => {
        const weatherInfo = `
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          <p><strong>Temperature:</strong> ${data.main.temp} K</p>
          <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
          <p><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
        `;
        document.getElementById(`${name}-weather`).innerHTML = weatherInfo;
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }
  fetchWeather();
});
