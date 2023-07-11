document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".wrapper").classList.toggle("collapse");
});

// Obtenemos todos los enlaces de la barra lateral
const sidebarLinks = document.querySelectorAll(".sidebar a");

// Iteramos sobre cada enlace y agregamos el evento de clic
sidebarLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Removemos la clase 'active' de todos los enlaces
    sidebarLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Agregamos la clase 'active' al enlace que se hizo clic
    this.classList.add("active");
  });
});

// Cuenta regresiva
