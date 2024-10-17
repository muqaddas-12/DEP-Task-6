// Array of quote objects
const quotes = [
  { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { quote: "In the end, we only regret the chances we didn’t take.", author: "Lewis Carroll" }
];

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to display the random quote
function displayQuote() {
  const quoteObject = getRandomQuote();
  document.getElementById('quote').textContent = `"${quoteObject.quote}"`;
  document.getElementById('author').textContent = `- ${quoteObject.author}`;
}

// Event listener for the button
document.getElementById('new-quote').addEventListener('click', displayQuote);
