let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".calc-screen");

document.querySelector('.calc-btns').addEventListener("click", function (event) {
    buttonClick(event.target.innerText)
});

let buttonClick = function (value) {
    if (!isNaN(parseInt(value))) {
        handleNumber(value)
    } else {
        handleSymbols(value)
    }
    rerender(value)
}

let handleNumber = function (value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
};

let handleSymbols = function (value) {
    switch (value) {
        case "C":
            screen.innerText = 0;
            runningTotal = 0;
            buffer = "0";
            previousOperator = null;
            break;
        case "←":
            if (buffer.length >1) {
                buffer = buffer.substring(0, (buffer.length - 1));
            } else {
                screen.innerText = 0;
                buffer = "0";
                runningTotal = 0;
                previousOperator = null;
            }
            break;
        case "=":
            buffer = runningTotal;
            // 
            break;
    }
};

let handleMath = function (value) {

}

let flushOperation =function(value) {

}

let rerender = function (value) {
    screen.innerText = buffer;
};