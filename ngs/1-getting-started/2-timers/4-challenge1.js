function theOneFunc(delay) {
    console.log('Hello after ' + delay + ' seconds');
 }

const delay1 = 4;
const delay2 = 8;

setTimeout(theOneFunc, delay1 * 1000, delay1);
setTimeout(theOneFunc, delay2 * 1000, delay2);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
