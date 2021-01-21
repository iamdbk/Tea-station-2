const ham = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-bar");
const form = document.querySelector(".form");

ham.addEventListener("click", slide);
function slide() {
  menu.classList.toggle("scale");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
