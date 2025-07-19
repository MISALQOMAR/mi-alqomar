const infoBoxes = document.querySelectorAll(".info-box");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  infoBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    }
  });
}

// sambutan

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

const welcomeSection = document.querySelector(".welcome-container");

function showWelcome() {
  const trigger = window.innerHeight * 0.85;
  const top = welcomeSection.getBoundingClientRect().top;

  if (top < trigger) {
    welcomeSection.classList.add("show");
  }
}

window.addEventListener("scroll", showWelcome);
window.addEventListener("load", showWelcome);

// program

const programItems = document.querySelectorAll(".program-item");

function showProgramItems() {
  const trigger = window.innerHeight * 0.85;

  programItems.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showProgramItems);
window.addEventListener("load", showProgramItems);

// prestasi

const prestasiItems = document.querySelectorAll(".prestasi-item");

function showPrestasiItems() {
  const trigger = window.innerHeight * 0.85;

  prestasiItems.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showPrestasiItems);
window.addEventListener("load", showPrestasiItems);

// galeri

const galeriItems = document.querySelectorAll(".galeri-item");

function showGaleriItems() {
  const trigger = window.innerHeight * 0.85;

  galeriItems.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showGaleriItems);
window.addEventListener("load", showGaleriItems);

// testimoni

let currentTestimoni = 0;
const items = document.querySelectorAll(".testimoni-item");

function showNextTestimoni() {
  items[currentTestimoni].classList.remove("active");
  currentTestimoni = (currentTestimoni + 1) % items.length;
  items[currentTestimoni].classList.add("active");
}

setInterval(showNextTestimoni, 5000); // ganti setiap 5 detik

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
    elements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", showOnScroll);
  showOnScroll();
});
