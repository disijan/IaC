// Locate the HTML elements by their unique IDs
const button = document.getElementById('action-btn');
const greeting = document.getElementById('greeting');

// Listen for a click event on the button
button.addEventListener('click', function() {
    // Change the text content of the h1 heading
    greeting.textContent = "🚀 Code is Working!";
    
    // Optionally alert the user or log to the browser console
    console.log("The button was clicked successfully!");
});
