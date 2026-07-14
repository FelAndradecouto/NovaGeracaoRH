// ============================================================
// REDES SOCIAIS
// Cria o botão flutuante do WhatsApp e preenche os ícones e a lista
// por extenso de redes sociais do rodapé com base em js/config.js.
// ============================================================
function formatarTelefoneBR(numeroDigitos) {
  // Espera algo como "5551999999999" (55 + DDD + número) e devolve "(51) 99999-9999".
  const semDDI = numeroDigitos.length > 11 ? numeroDigitos.slice(-11) : numeroDigitos;
  const ddd = semDDI.slice(0, 2);
  const resto = semDDI.slice(2);
  if (resto.length === 9) return `(${ddd}) ${resto.slice(0, 5)}-${resto.slice(5)}`;
  if (resto.length === 8) return `(${ddd}) ${resto.slice(0, 4)}-${resto.slice(4)}`;
  return numeroDigitos;
}

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

  // Lista de contato no rodapé: só a PALAVRA do canal, já como hiperlink.
  // Sem número, sem @usuário, sem endereço escrito — só o link.
  const alvoContato = document.getElementById("foot-contato");
  if (alvoContato) {
    const linhas = [];
    if (linkWhatsapp) {
      linhas.push(`<li><a class="rotulo" href="${linkWhatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>`);
    }
    if (LOJA.instagram) {
      linhas.push(`<li><a class="rotulo" href="${LOJA.instagram}" target="_blank" rel="noopener">Instagram</a></li>`);
    }
    if (LOJA.facebook) {
      linhas.push(`<li><a class="rotulo" href="${LOJA.facebook}" target="_blank" rel="noopener">Facebook</a></li>`);
    }
    if (LOJA.email) {
      linhas.push(`<li><a class="rotulo" href="mailto:${LOJA.email}">E-mail</a></li>`);
    }
    alvoContato.innerHTML = linhas.join("");
  }
});
