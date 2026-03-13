import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 600,
    easing: "ease-out",
    once: true
  });
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 600, easing: "ease-out", once: true });

  // === 1) Obtén nom de pàgina REAL ===
  let current = location.pathname;

  // Si és "/" o acaba amb "/" → home
  if (current === "/" || current.endsWith("/")) {
    current = "index.html";
  } else {
    // Agafem l’última part
    current = current.split("/").pop();
  }

  // Si és buit o raru (file://) → index.html
  if (!current || current === "" || current.indexOf(".") === -1) {
    current = "index.html";
  }

  // === 2) Si és una pàgina de detall, activa Categoria ===
  if (/^det\d+\.html$/i.test(current)) {
    current = "categoria.html";
  }

  // === 3) Marca l’element actiu del menú ===
  document.querySelectorAll("nav a[href]").forEach(a => {
    const link = a.getAttribute("href").replace("./", "");

    if (link === current) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });
});


