const readline = require("readline");

const real = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(pertanyaan) {
    return new Promise((resolve) => {
        real.question(pertanyaan, resolve);
    });
};



