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

async function tampilMenu() {
    console.log(`
    --=( Warung BABA CHAN)=--

Daftar Menu:`);
    menu.forEach(element => {
        console.log(`- (${element.kode}) ${element.nama} - ${element.harga}`);
        
    });
};

