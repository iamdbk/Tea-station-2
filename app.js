const ham = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-bar");
ham.addEventListener("click", slide);
function slide() {
  menu.classList.toggle("scale");
}
