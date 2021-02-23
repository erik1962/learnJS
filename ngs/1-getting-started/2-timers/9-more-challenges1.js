function printWithDelay(delay) {
    console.log("Hello World. " + delay / 1000);
    setTimeout(printWithDelay, delay + 1000, delay + 1000);
}

setTimeout(printWithDelay, 1000, 1000);