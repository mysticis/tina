const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

// Scroll-reveal

window.sr = ScrollReveal();
sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

// Carousel mechanics
const items = document.querySelectorAll(".gallery");
const itemCount = items.length;
const nextItem = document.querySelector(".next");
const previousItem = document.querySelector(".previous");
let count = 0;

function showNextItem() {
  items[count].classList.remove("active");

  if (count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add("active");
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;

  if (e.keyCode == "37") {
    showPreviousItem();
  } else if (e.keyCode == "39") {
    showNextItem();
  }
}

nextItem.addEventListener("click", showNextItem);
previousItem.addEventListener("click", showPreviousItem);
document.addEventListener("keydown", keyPress);
