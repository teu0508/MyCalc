console.log("JavaScript is loaded");

let calculated = false;
let ans = ''
const operators = ["+", "-", "/", "*"]

function appendValue(val) {
    const display = document.getElementById("display");
    if (calculated && val == operators) {
        display.value += val;
        calculated = false;
    } else if (calculated && val != operators) {
        display.value = val;
        calculated = false;
    } else {
        display.value += val;
    }
}

function calculate() {
    const display = document.getElementById("display");
    try {
        ans = eval(display.value)
        display.value = ans;
        calculated = true;
    } catch (e) {
        display.value = "Error";
        calculated = true;
    }
}

function clearDisplay() {
    document.getElementById("display").value = '';
    calculated = false;
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function displayAns() {
    const display = document.getElementById("display");
    if (ans)
        appendValue(ans)
}