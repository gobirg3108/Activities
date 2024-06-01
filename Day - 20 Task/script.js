// Fetch data from NASA API
function fetchNasaData() {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            document.getElementById('nasaImage').innerHTML = `
                <img src="${data.url}" alt="${data.title}" class="img-fluid">
                <p>${data.title}</p>
                <p>${data.explanation}</p>
            `;
        })
        .catch(error => console.error('Error fetching NASA data:', error));
}

// Fetch data from OpenWeatherMap API
function fetchWeatherData() {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=city_name&appid=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather').innerHTML = `
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Fetch data from Dog CEO API
function fetchDogImageData() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogImage').innerHTML = `
                <img src="${data.message}" alt="Random Dog" class="img-fluid">
            `;
        })
        .catch(error => console.error('Error fetching dog image data:', error));
}

// Call functions to fetch data
Promise.all([fetchNasaData(), fetchWeatherData(), fetchDogImageData()]);
