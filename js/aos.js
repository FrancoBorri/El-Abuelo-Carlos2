document.addEventListener("DOMContentLoaded", () => {
  // Inicializar AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 200,
  });
  AOS.refresh();

  // Scroll suave para anclas con compensación del header
  const headerOffset = 0; // ajustá al tamaño de tu navbar
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return; // por si el id no existe
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
});
