let counter = 0
function clickMe() {
    updateDisplay(++counter)
}

function resetCounter() {
    counter = 0
    updateDisplay(counter)
}

function updateDisplay(val) {
    document.querySelector('.counter').innerHTML = val
}