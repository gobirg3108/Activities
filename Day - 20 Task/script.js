// Fetches a random cat fact from the Cat Facts API

function fetchCatFact() {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("catFact").innerText = data.fact;
    })
    .catch((error) => {
      console.error("Error fetching cat fact:", error);
      document.getElementById("catFact").innerText = "Failed to fetch cat fact";
    });
}

// Fetches a random dog image from the Dog CEO's Dog API

function fetchDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("dogImage").src = data.message;
    })
    .catch((error) => {
      console.error("Error fetching dog image:", error);
      document.getElementById("dogImage").src = "";
      document.getElementById("dogImage").alt = "Failed to fetch dog image";
    });
}

// Fetches a random joke from the JokeAPI

function fetchJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
      let joke = data.joke || `${data.setup} - ${data.delivery}`;
      document.getElementById("joke").innerText = joke;
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
      document.getElementById("joke").innerText = "Failed to fetch joke";
    });
}
