var result = 0;

function add(a, b) {
    result = a + b;
    return result;
}

function isZero(b) {
    return (b == 0) ? true : false;
}

function divide(a, b) {
    return isZero(b) ? "Cannot divide by zero" : result = a / b;
}

function substract(a, b) {
    return result = a - b;
}

function multiply(a, b) {
    return result = a * b;
}