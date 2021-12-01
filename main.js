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
            runningTotal = 0;
            buffer = "0";
            previousOperator = null;
            break;
        case "←":
            if (buffer.length >1) {
                buffer = buffer.substring(0, (buffer.length - 1));
            } else {
                buffer = "0";
                runningTotal = 0;
                previousOperator = null;
            }
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
        default:
            handleMath(value)
    }
};

let handleMath = function (value) {
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0){
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = value;

    buffer ="0";
}

let flushOperation =function(intBuffer) {
    switch (previousOperator) {
        case "+":
            runningTotal += intBuffer;
            break;
        case "-":
            runningTotal -= intBuffer;
            break;
        case "×":
            runningTotal *= intBuffer;
            break;
        case "÷":
            runningTotal /= intBuffer;
            break;
    }
}

let rerender = function (value) {
    screen.innerText = buffer;
};
