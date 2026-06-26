function convertTemp() {

    // Get input value
    let temp = document.getElementById("temperature").value;

    // Get selected unit
    let unit = document.getElementById("unit").value;

    // Result display
    let result = document.getElementById("result");

    // Validate input
    if (temp === "" || isNaN(temp)) {
        result.innerHTML = "⚠ Please enter a valid number.";
        result.style.color = "red";
        return;
    }

    // Convert string to number
    temp = parseFloat(temp);

    let celsius, fahrenheit, kelvin;

    // Conversion Logic
    if (unit === "C") {

        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;

        result.innerHTML = `
            <h3>Result</h3>
            <p><b>${temp.toFixed(2)} °C</b></p>
            <p>🌡 Fahrenheit : <b>${fahrenheit.toFixed(2)} °F</b></p>
            <p>🌡 Kelvin : <b>${kelvin.toFixed(2)} K</b></p>
        `;

    }

    else if (unit === "F") {

        celsius = (temp - 32) * 5 / 9;
        kelvin = celsius + 273.15;

        result.innerHTML = `
            <h3>Result</h3>
            <p><b>${temp.toFixed(2)} °F</b></p>
            <p>🌡 Celsius : <b>${celsius.toFixed(2)} °C</b></p>
            <p>🌡 Kelvin : <b>${kelvin.toFixed(2)} K</b></p>
        `;

    }

    else if (unit === "K") {

        celsius = temp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

        result.innerHTML = `
            <h3>Result</h3>
            <p><b>${temp.toFixed(2)} K</b></p>
            <p>🌡 Celsius : <b>${celsius.toFixed(2)} °C</b></p>
            <p>🌡 Fahrenheit : <b>${fahrenheit.toFixed(2)} °F</b></p>
        `;

    }

    // Change result color
    result.style.color = "#222";
}