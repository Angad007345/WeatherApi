const API_KEY = "1093ce05b7e6bee51ef9dbdacc03d22b";

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const errorDiv = document.getElementById("error");
    const box = document.getElementById("weatherBox");

    errorDiv.textContent = "";
    box.style.display = "none";

    if (!city) {
        errorDiv.textContent = "Please enter a city name";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("City not found");
        }

        const data = await res.json();

        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent =
            "Temperature: " + data.main.temp + " °C";
        document.getElementById("humidity").textContent =
            "Humidity: " + data.main.humidity + "%";
        document.getElementById("description").textContent =
            "Condition: " + data.weather[0].description;

        box.style.display = "block";
    } catch (err) {
        errorDiv.textContent = err.message;
    }
}
