const readline = require("readline");
const daftar = require("./data.js");
const real = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function tanya(pertanyaan) {
  return new Promise((resolve) => {
    real.question(pertanyaan, resolve);
  });
}

function tampilkan() {
  console.log("\n--= ( WARUNG BABA CHAN ) =--\n");
  console.log("Daftar Menu:");

  daftar.menu.forEach((item) => {
    console.log(`- (${item.kode}) ${item.nama} - ${item.harga}`);
  });

  pilihOpsi();
}

async function inputPesan() {
  const kode = await tanya("Masukkan kode :");
  const pesan = daftar.menu.find((data) => data.kode === kode);

  daftar.pesanan.push(pesan);
  console.log("Pesanan berhasil ditambahkan");

  pilihOpsi()
}
async function pilihOpsi() {
  console.log(`\n Opsi
  1. Pesan
  2. Daftar Pesanan Saya
  3. Keluar`);

  const pilih = parseInt(await tanya("Pilih (1/2/3) :"));
  if (pilih === 3) {
    console.log("Terima kasih telah berkunjung ke warung kami");
    real.close();
    return;
  }

  if (pilih === 1) {
    inputPesan();
    return;
  }

  if (pilih === 2) {
    
  }
}
tampilkan();
