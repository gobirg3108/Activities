// Function to fetch a random dog image from Dog CEO's API

function fetchRandomDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("dogImage").src = data.message;
    })
    .catch((error) => {
      console.error("Error fetching dog image:", error);
    });
}

// Add event listener to the button to fetch a new dog image on click

document
  .getElementById("fetchDogImageButton")
  .addEventListener("click", fetchRandomDogImage);

// Initial fetch to display a dog image when the page loads

fetchRandomDogImage();
