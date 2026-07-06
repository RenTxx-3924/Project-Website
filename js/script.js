/**
 * Fungsi untuk berpindah halaman
 * @param {string} pageId - ID dari section yang ingin ditampilkan
 */
function showPage(pageId) {
    // 1. Ambil semua elemen dengan class 'page'
    const pages = document.querySelectorAll('.page');
    
    // 2. Sembunyikan semua halaman dengan menghapus class 'active'
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 3. Tampilkan halaman yang dipilih dengan menambah class 'active'
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // 4. Update status menu navigasi agar terlihat mana yang aktif
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Pasang class active pada link yang diklik
    document.getElementById('link-' + pageId).classList.add('active');

    // 5. Scroll ke atas otomatis setiap kali ganti menu
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// Fungsi untuk membuka preview gambar
function openPreview(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const captionText = document.getElementById("modal-caption");

    modal.style.display = "block";
    modalImg.src = element.src; // Ambil sumber gambar yang diklik
    captionText.innerHTML = element.alt; // Ambil teks dari atribut alt
}

// Logika untuk menutup modal saat tombol (x) diklik
document.querySelector(".modal-close").onclick = function() {
    document.getElementById("imageModal").style.display = "none";
}

// Logika agar modal tertutup jika kita klik di area kosong (di luar gambar)
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}