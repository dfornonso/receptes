import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", () => {
  // Inicialitza AOS
  AOS.init({
    duration: 600,
    easing: "ease-out",
    once: true
  });


  const links = document.querySelectorAll("nav ul li a");

  // 1) Quan carreguem la pàgina, posem .actiu al link guardat
  const guardat = localStorage.getItem("menu-actiu");
  if (guardat) {
    links.forEach(a => {
      if (a.getAttribute("href") === guardat) {
        a.classList.add("actiu");
      }
    });
  }
  else {
    guardat="/index.html"
  }

  // 2) Quan CLICO, actualitzo el .actiu
  links.forEach(link => {
    link.addEventListener("click", () => {

      // trec els actius
      links.forEach(a => a.classList.remove("actiu"));

      // poso actiu al clicat
      link.classList.add("actiu");

      // guardo quin link he clicat
      localStorage.setItem("menu-actiu", link.getAttribute("href"));
    });
  });
});
