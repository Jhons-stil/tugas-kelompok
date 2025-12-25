const readline = require("readline");
const daftar = require("./data.js")
const real = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(pertanyaan) {
    return new Promise((resolve) => {
        real.question(pertanyaan, resolve);
    });
};


function tampilkan () {
console.log("\n--= ( WARUNG BABA CHAN ) =--\n");
console.log("Daftar Menu:");

daftar.menu.forEach((item) => {
    console.log(`- (${item.kode}) ${item.nama} - ${item.harga}`);
    
})
console.log("\n Opsi");
console.log("1. Pesan");
console.log("2. Daftar Pesanan Saya");
console.log("3. Keluar");
pilihOpsi();
};

async function pilihOpsi() {
    const pilih = await tanya("Pilih (1/2/3): ");
}
tampilkan()