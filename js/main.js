const openMenu = document.getElementById("open-icon");
const closeMenu = document.getElementById("close-icon");
const sideMenu = document.querySelector("nav");

// listen for open menu click
openMenu.addEventListener("click", () => {
  sideMenu.classList.remove("hidden");
  openMenu.classList.add("hidden");
});

// Listen for close menu click
closeMenu.addEventListener("click", () => {
  sideMenu.classList.add("hidden");
  openMenu.classList.remove("hidden");
});
