import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 600,
    easing: "ease-out",
    once: true
  });
});
