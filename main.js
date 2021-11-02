const btn = document.querySelectorAll(".btn")
const screen = document.querySelector(".screen");
const digits = document.querySelectorAll(".digit");
const clearScreen = document.querySelector(".clear");
const backSpace = document.querySelector(".backspace");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const minus = document.querySelector(".minus");
const plus = document.querySelector("plus");
const equals = document.querySelector(".equal")

// using functions and methods

clearScreen.addEventListener("click", function () {
    screen.textContent = "0"
});

digits.forEach(function (currentDigit) {
    currentDigit.addEventListener("click", function () {
        if (screen.textContent == 0) {
            screen.textContent = currentDigit.textContent
        } else {
            screen.textContent = screen.textContent + currentDigit.textContent
        }
    });
});


