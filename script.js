// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk toggle menu navigasi mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Validasi formulir
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
