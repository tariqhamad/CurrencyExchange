let dollar = document.getElementById('usd');
let aed = document.getElementById('aed');
let button = document.querySelector('button');
let error = document.getElementById('error');

button.onclick = function () {
    let usdValue = dollar.value.trim();
    let aedValue = aed.value.trim();
    error.textContent = ""; // Clear previous error

    if (usdValue && isNaN(usdValue)) {
        error.textContent = "Please enter a valid number in USD.";
        return;
    }

    if (aedValue && isNaN(aedValue)) {
        error.textContent = "Please enter a valid number in AED.";
        return;
    }

    if (usdValue) {
        aed.value = (usdValue * 3.65).toFixed(2);
    } else if (aedValue) {
        dollar.value = (aedValue / 3.65).toFixed(2);
    } else {
        error.textContent = "Please enter a number in either field.";
    }
};

