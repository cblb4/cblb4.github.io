async function fetchWeather() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true";

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        document.getElementById("weather").innerHTML = `
            <h2>🌍 Philippines</h2>
            <p>🌡️ Temperature: ${data.current_weather.temperature}°C</p>
            <p>💨 Wind Speed: ${data.current_weather.windspeed} km/h</p>
        `;
    } catch (error) {
        document.getElementById("weather").innerHTML = "❌ Error loading data.";
    }
}
