const API_URL = "https://schjo7777.pythonanywhere.com"; // Replace with your actual API URL

function submitNumber(number) {
    fetch(`${API_URL}/add_spin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number: number })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById("suggestion").innerText = "Bet Suggestion: " + data.suggestion;
        }
    })
    .catch(error => console.error("Error:", error));
}

// Create roulette number buttons dynamically
const numbers = [...Array(37).keys()];
const rouletteContainer = document.getElementById("roulette-numbers");

numbers.forEach(number => {
    let button = document.createElement("button");
    button.innerText = number;
    button.onclick = () => submitNumber(number);
    rouletteContainer.appendChild(button);
});
