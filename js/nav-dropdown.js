// ============================================================
// MENU SUSPENSO (DROPDOWN) DO TOPO
// Controla abrir/fechar do dropdown "Mais" que reúne todas as
// páginas do site em um único menu, e também o menu mobile
// (hambúrguer) — inclui fechamento automático ao clicar fora,
// ao apertar Esc, ou ao clicar em um link do menu.
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".nav-dropdown");
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

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

  function fecharMenuMobile() {
    if (navLinks) navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", (evento) => {
      evento.stopPropagation();
      const estaAberto = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", estaAberto ? "true" : "false");
    });

    // Fecha ao clicar num link do menu (navegação para outra página/âncora)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", fecharMenuMobile);
    });
  }

  document.addEventListener("click", (evento) => {
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("open") && !dropdown.contains(evento.target)) {
        dropdown.classList.remove("open");
        dropdown.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
      }
    });

    if (
      navLinks &&
      navLinks.classList.contains("open") &&
      !navLinks.contains(evento.target) &&
      evento.target !== navToggle &&
      !navToggle?.contains(evento.target)
    ) {
      fecharMenuMobile();
    }
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");
        dropdown.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
      });
      fecharMenuMobile();
    }
  });
});
