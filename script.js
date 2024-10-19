// Function to determine the greeting based on the current time
function getGreeting() {
    const date = new Date();
    const hours = date.getHours(); // Get current hour (0 - 23)

    if (hours < 12) {
        return "Good Morning!";
    } else if (hours < 18) {
        return "Good Afternoon!";
    } else {
        return "Good Evening!";
    }
}

// Function to display greeting in an alert and on the webpage
function showGreeting() {
    const greetingMessage = getGreeting();
    alert(greetingMessage); // Show the greeting in an alert box
    document.getElementById("greetingMessage").innerText = greetingMessage; // Display on the page
}

// Automatically display the greeting when the page loads
window.onload = showGreeting;
