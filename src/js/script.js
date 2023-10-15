let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
let btnMenuCursos = document.getElementById("openMenu");
let menuCursos = document.getElementById("menu-cursos");
let arrowIcon = document.getElementById("arrow");

btnMenuCursos.addEventListener("click", () => {
  if (menuCursos.style.display === "none" || menuCursos.style.display === "") {
    menuCursos.style.display = "block"; // Mostra o menu
    arrowIcon.classList.replace("bi-caret-down-fill", "bi-caret-right-fill");
  } else {
    menuCursos.style.display = "none"; // Oculta o menu
    arrowIcon.classList.replace("bi-caret-right-fill", "bi-caret-down-fill");
  }
});
document.addEventListener("click", (event) => {
  if (event.target !== btnMenuCursos && event.target !== menuCursos) {
    // Se o clique não foi no botão ou no menu, fecha o menu
    menuCursos.style.display = "none";
    arrowIcon.classList.replace("bi-caret-right-fill", "bi-caret-down-fill");
  }
});
