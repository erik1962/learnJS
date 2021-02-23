let count = 0;

function greeting(delay) {
    if (count < 5) {
        console.log("Hello World. " + delay);
        count++;
    } else {
        clearInterval(id)
        delay += 100;
        count = 0;
        id = setInterval(greeting, delay, delay);
    }
}

let id = setInterval(greeting, 100, 100);