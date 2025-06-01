// script.js

// Fungsi toggle menu responsive
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Jalankan saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Validasi formulir (opsional)
  const forms = document.querySelectorAll("form.formulir");
  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      const inputs = form.querySelectorAll("input, textarea");
      let valid = true;
      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          valid = false;
          input.classList.add("invalid");
        } else {
          input.classList.remove("invalid");
        }
      });
      if (!valid) {
        event.preventDefault();
        alert("Mohon lengkapi semua isian dengan benar.");
      }
    });
  });
});
