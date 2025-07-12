function lihatProduk(link) {
  window.location.href = link;
}

function tambahKeKeranjang(namaProduk) {
  alert("Produk '" + namaProduk + "' telah ditambahkan ke keranjang.");
}
function animasiTeks(teks, elemenId, kecepatan = 70) {
    let i = 0;
    const elemen = document.getElementById(elemenId);
    function ketik() {
      if (i < teks.length) {
        elemen.innerHTML += teks.charAt(i);
        i++;
        setTimeout(ketik, kecepatan);
      }
    }
    ketik();
  }
  
  window.onload = function () {
    animasiTeks("🎮 Selamat Datang di Gamers Room 🎮", "animasi-teks");
  };

  let keranjang = [];

function tambahKeKeranjang(namaProduk) {
  keranjang.push(namaProduk);
  document.getElementById("jumlah-keranjang").innerText = keranjang.length;
  alert("✅ '" + namaProduk + "' ditambahkan ke keranjang!");
}

function tampilkanKeranjang() {
  if (keranjang.length === 0) {
    alert("🛒 Keranjang masih kosong.");
  } else {
    alert("🛍️ Isi Keranjang:\n- " + keranjang.join("\n- "));
  }
}

