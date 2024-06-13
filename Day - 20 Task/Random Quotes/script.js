// Function to fetch a random quote from Quotable API
function fetchRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quoteText = data.content;
            const authorText = data.author;
            document.getElementById('quoteText').textContent = `"${quoteText}"`;
            document.getElementById('authorText').textContent = `- ${authorText}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
}

// Add event listener to the button to fetch random quote on click
document.getElementById('fetchQuoteButton').addEventListener('click', fetchRandomQuote);

// Initial fetch to display random quote when the page loads
fetchRandomQuote();
