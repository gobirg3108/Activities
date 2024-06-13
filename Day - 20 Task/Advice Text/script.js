//Function to fetch a random piece of advice from the Advice Slip API

function fetchRandomAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      document.getElementById("adviceText").textContent = advice;
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
    });
}

// Add event listener to the button to fetch random advice on click

document
  .getElementById("fetchAdviceButton")
  .addEventListener("click", fetchRandomAdvice);

// Initial fetch to display random advice when the page loads

fetchRandomAdvice();
