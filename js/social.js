// ============================================================
// REDES SOCIAIS
// Cria o botão flutuante do WhatsApp e preenche os ícones de
// redes sociais do rodapé com base nos dados de js/config.js.
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  if (typeof LOJA === "undefined") return;

  const numero = (LOJA.whatsapp || "").replace(/\D/g, "");
  const mensagem = encodeURIComponent(LOJA.whatsappMensagem || "Olá!");
  const linkWhatsapp = numero ? `https://wa.me/${numero}?text=${mensagem}` : null;

  // Botão flutuante do WhatsApp (em todas as páginas)
  if (linkWhatsapp) {
    const botao = document.createElement("a");
    botao.href = linkWhatsapp;
    botao.target = "_blank";
    botao.rel = "noopener";
    botao.className = "whatsapp-float";
    botao.setAttribute("aria-label", "Falar no WhatsApp");
    botao.innerHTML = '<img src="assets/img/imagens/whatsapp.png" alt="WhatsApp">';
    document.body.appendChild(botao);
  }

  // Ícones de redes sociais no rodapé
  const alvo = document.getElementById("foot-social");
  if (!alvo) return;

  const itens = [];
  if (LOJA.instagram) {
    itens.push(`<a href="${LOJA.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><img src="assets/img/social/instagram.svg" alt=""></a>`);
  }
  if (LOJA.facebook) {
    itens.push(`<a href="${LOJA.facebook}" target="_blank" rel="noopener" aria-label="Facebook"><img src="assets/img/social/facebook.svg" alt=""></a>`);
  }
  if (LOJA.email) {
    itens.push(`<a href="mailto:${LOJA.email}" aria-label="E-mail"><img src="assets/img/social/email.svg" alt=""></a>`);
  }
  if (linkWhatsapp) {
    itens.push(`<a href="${linkWhatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="assets/img/social/whatsapp.svg" alt=""></a>`);
  }
  alvo.innerHTML = itens.join("");
});
