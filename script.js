// script.js

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Optional: Form validation feedback (basic)
document.addEventListener("DOMContentLoaded", function () {
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

// Toggle menu responsive
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Tambahan: validasi form dasar
// Menandai input kosong saat form disubmit
window.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form.formulir");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll("input, textarea");
      let allValid = true;

      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          input.classList.add("invalid");
          allValid = false;
        } else {
          input.classList.remove("invalid");
        }
      });

      if (!allValid) {
        e.preventDefault();
        alert("Mohon lengkapi semua isian dengan benar.");
      }
    });
  });
});

