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
  console.log("Daftar Menu :");

  daftar.menu.forEach((item) => {
    if (item.kode === "ET") {
        console.log(`- (${item.kode}) ${item.nama} Manis - ${item.harga}`);
    } else {
        console.log(`- (${item.kode}) ${item.nama} - ${item.harga}`);
    }
  });

  pilihOpsi();
}

async function inputPesan() {
  const kode = (await tanya("Masukkan kode makanan : ")).toUpperCase();
  const pesan = daftar.menu.find((data) => data.kode === kode);

  daftar.pesanan.push(pesan);
  console.log(`
----------------------------
Pesanan berhasil ditambahkan
----------------------------`);
  pilihOpsi()
}

const daftarPesanan = () => {
    if (daftar.pesanan.length === 0) {
        console.log(`
=========================
Anda belum memesan apapun
=========================`);
            return pilihOpsi(); 
    };
    let total = 0;
    console.log(`
 Daftar pesanan`);
    
    daftar.pesanan.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nama} - ${item.harga}`);
        total += item.harga;
    });
    console.log(`
Total Bayar : Rp.${total}`);
    pilihOpsi();
};
async function pilihOpsi() {
  console.log(`
Opsi :
1. Pesan
2. Daftar Pesanan Saya
3. Keluar`);

  const pilih = parseInt(await tanya("Pilih (1/2/3) : "));
  if (pilih === 1) {
    inputPesan();
    return;
  }

  if (pilih === 2) {
      daftarPesanan();
      return;
  }

if (pilih === 3) {
  console.log("Terima kasih telah berkunjung ke warung kami ..");
  real.close();
  return;
}
}
tampilkan();
