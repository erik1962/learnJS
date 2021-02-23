// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let printCount = 0;

function printHelloWorld() {
    console.log("Hello World");
    printCount++;
}

function stopHelloWorld(id) {
    clearInterval(id);
}

let id = setInterval(printHelloWorld, 1000);

setInterval(() => {
    if (printCount == 5) {
        clearInterval(id);
        console.log("Done");
    }
}, 300);


