// ============================================================
// MENU SUSPENSO (DROPDOWN) DO TOPO
// Controla abrir/fechar do dropdown "Mais" que reúne todas as
// páginas do site em um único menu.
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".nav-dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".nav-dropdown-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", (evento) => {
      evento.stopPropagation();
      const estaAberto = dropdown.classList.toggle("open");
      toggle.setAttribute("aria-expanded", estaAberto ? "true" : "false");

      dropdowns.forEach((outro) => {
        if (outro !== dropdown) {
          outro.classList.remove("open");
          outro.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
        }
      });
    });
  });

  document.addEventListener("click", (evento) => {
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("open") && !dropdown.contains(evento.target)) {
        dropdown.classList.remove("open");
        dropdown.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");
        dropdown.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
      });
    }
  });
});
