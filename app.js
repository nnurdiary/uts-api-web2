let semuaData = [];

// Render data sebagai card
function renderCard(data) {
  const grid = document.getElementById("produk-grid");
  const info = document.getElementById("info-jumlah");
  grid.innerHTML = "";

  info.textContent = `Menampilkan ${data.length} produk`;

  if (data.length === 0) {
    grid.innerHTML =
      '<p style="text-align:center;color:#999;">Produk tidak ditemukan.</p>';
    return;
  }

  data.forEach(function (item) {
    const card = `
      <div class="card">
        <img src="${item.image}" alt="${item.title}">
        <span class="card-kategori">${item.category}</span>
        <p class="card-judul">${item.title}</p>
        <p class="card-harga">Rp ${(item.price * 16000).toLocaleString("id-ID")}</p>
      </div>
    `;
    grid.insertAdjacentHTML("beforeend", card);
  });
}

// Fitur search
document.getElementById("search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const hasil = semuaData.filter(function (item) {
    return (
      item.title.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword)
    );
  });
  renderCard(hasil);
});

// Jalankan saat halaman dibuka
async function init() {
  const data = await fetchPosts();

  document.getElementById("loading").style.display = "none";

  if (!data) return;

  semuaData = data;
  renderCard(semuaData);
}

init();
