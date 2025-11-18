function convert() {
    let value = document.getElementById("inputValue").value;
    let unit = document.getElementById("inputUnit").value;
    let result = document.getElementById("result");

    if (value === "") {
        result.innerText = "Enter a valid number!";
        return;
    }

    value = parseFloat(value);

    if (unit === "C") {
        let f = (value * 9/5) + 32;
        result.innerText = `${value}°C = ${f.toFixed(2)}°F`;
    } else {
        let c = (value - 32) * 5/9;
        result.innerText = `${value}°F = ${c.toFixed(2)}°C`;
    }
}
