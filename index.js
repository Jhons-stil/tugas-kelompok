const { log } = require("node:console");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (q) => new Promise((resolve) => rl.question(q, resolve));

const daftarMakanan = [
  { id: 1, kode: "ng", nama: "Nasi Goreng", harga: 15000 },
  { id: 2, kode: "ag", nama: "Ayam Geprek", harga: 10000 },
  { id: 3, kode: "ab", nama: "Ayam Bakar", harga: 12000 },
  { id: 4, kode: "et", nama: "Es Teh Manis", harga: 5000 },
  { id: 5, kode: "ej", nama: "Es Jeruk Peras", harga: 8000 },
];

const pesanan = [];

log("--=( Warung BABA CHAN)=--\n");

function renderMakanan() {
  log("Daftar Menu :");
  daftarMakanan.forEach((element) => {
    log(
      ` - (${element.kode.toUpperCase()}) ${element.nama} - ${element.harga}`
    );
  });
  log("");
}

function tampilkanOpsi() {
  log("Opsi :");
  log("1. Pesan");
  log("2. Daftar pesanan saya");
  log("3. Keluar");
}
tampilkanOpsi();

async function inputMakanan() {
  renderMakanan();
  const kode = await question("Masukkan kode makanan :");
  const menu = daftarMakanan.find((menu) => menu.kode === kode.toLowerCase());

  if (!menu) {
    log("Kode tidak ditemukan");
    return;
  }
  pesanan.push(menu);
  log("Pesanan berhasil ditambahkan");
}

function tampilkanPesanan() {
  log("--=Daftar Makanan=--");

  if (pesanan.length === 0) {
    log("==================");
    log("Anda belum memesan");
    log("==================");
    return;
  }

  pesanan.forEach((pesanan, index) => {
    log(
      `${index + 1}. ${pesanan.nama} ${pesanan.harga.toLocaleString()}`
    );
  });

  const total = pesanan.reduce((acc, curr) => acc + curr.harga, 0);
  log("\nTotal Bayar : " + total.toLocaleString());
}

async function menuUtama() {
  renderMakanan();
  tampilkanOpsi();

  const pilih = await question("pilih (1/2/3):");

  switch (pilih) {
    case "1":
      await inputMakanan();
      break;
    case "2":
      tampilkanPesanan();
      break;
    case "3":
      log("Terima Kasih telah berkunjung ke restoran kami");
      rl.close();
      return;
    default:
      log("Tidak ada opsi lain");
  }
  await question("\nTekan Enter untuk kembali ke menu...");
  menuUtama();
}
menuUtama();
