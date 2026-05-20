// Fungsi khusus ambil data produk dari FakeStoreAPI
async function fetchPosts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Gagal mengambil data dari server.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    document.getElementById("error-msg").textContent =
      "⚠️ " + error.message + " Silakan coba lagi nanti.";
    return null;
  }
}
