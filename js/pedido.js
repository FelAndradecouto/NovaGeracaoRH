async function carregarProdutos() {
  try {
    const resposta = await fetch("data/produtos.json");
    return await resposta.json();
  } catch (erro) {
    // fetch() é bloqueado quando a página é aberta direto do disco (file://).
    // Nesse caso, usa a cópia embutida em data/produtos.js (carregado no HTML).
    if (window.PRODUTOS_DATA) return window.PRODUTOS_DATA;
    throw erro;
  }
}

function preencherSelectProdutos(select, produtos, idPreSelecionado) {
  select.innerHTML = '<option value="" disabled selected>Escolha uma peça</option>';
  const grupos = {};
  produtos.forEach((p) => {
    grupos[p.categoria] = grupos[p.categoria] || [];
    grupos[p.categoria].push(p);
  });

  const nomesCategoria = { aneis: "Anéis", colares: "Colares", brincos: "Brincos", pulseiras: "Pulseiras" };

  Object.entries(grupos).forEach(([categoria, itens]) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = nomesCategoria[categoria] || categoria;
    itens.forEach((p) => {
      const option = document.createElement("option");
      option.value = p.id;
      option.textContent = `${p.nome} — R$ ${p.preco.toFixed(2).replace(".", ",")}`;
      if (p.id === idPreSelecionado) option.selected = true;
      optgroup.appendChild(option);
    });
    select.appendChild(optgroup);
  });
}

function renderizarVariacoes(produto) {
  const container = document.getElementById("chips-variacao");
  const campoTexto = document.getElementById("detalhes");
  const label = document.getElementById("detalhes-label");
  const ajuda = document.getElementById("detalhes-ajuda");
  if (!container || !campoTexto) return;

  const configCategoria = produto && typeof VARIACOES_POR_CATEGORIA !== "undefined"
    ? VARIACOES_POR_CATEGORIA[produto.categoria]
    : null;
  const opcoes = produto && Array.isArray(produto.variacoes) && produto.variacoes.length
    ? produto.variacoes
    : (configCategoria ? configCategoria.opcoes : null);

  container.innerHTML = "";

  if (!opcoes || !opcoes.length) {
    // Sem opções configuradas para essa peça: volta pro campo de texto livre.
    container.hidden = true;
    ajuda.hidden = true;
    campoTexto.hidden = false;
    campoTexto.placeholder = "Ex: aro 18, tom dourado";
    label.textContent = "Tamanho / cor / variação";
    return;
  }

  label.textContent = (configCategoria && configCategoria.rotulo) || "Tamanho / cor / variação";
  campoTexto.hidden = true;
  campoTexto.value = "";
  container.hidden = false;
  ajuda.hidden = false;

  const selecionados = new Set();
  opcoes.forEach((opcao) => {
    const chip = document.createElement("label");
    chip.className = "chip";
    chip.innerHTML = `<input type="checkbox" value="${opcao}"><span>${opcao}</span>`;
    chip.querySelector("input").addEventListener("change", (evento) => {
      if (evento.target.checked) selecionados.add(opcao);
      else selecionados.delete(opcao);
      campoTexto.value = [...selecionados].join(", ");
    });
    container.appendChild(chip);
  });
}

async function iniciarFormularioPedido() {
  const form = document.getElementById("form-pedido");
  if (!form) return;

  const selectProduto = document.getElementById("produto");
  const erroBox = document.getElementById("pedido-erro");
  const params = new URLSearchParams(window.location.search);
  const produtos = await carregarProdutos();

  preencherSelectProdutos(selectProduto, produtos, params.get("produto"));

  const produtoInicial = produtos.find((p) => p.id === params.get("produto"));
  renderizarVariacoes(produtoInicial || null);

  selectProduto.addEventListener("change", () => {
    const produto = produtos.find((p) => p.id === selectProduto.value);
    renderizarVariacoes(produto || null);
  });

  form.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    erroBox.hidden = true;

    const dados = new FormData(form);
    const produtoEscolhido = produtos.find((p) => p.id === dados.get("produto"));

    const pedido = {
      nome: dados.get("nome").trim(),
      whatsapp: dados.get("whatsapp").trim(),
      endereco: (dados.get("endereco") || "").trim() || null,
      produto_id: produtoEscolhido.id,
      produto_nome: produtoEscolhido.nome,
      categoria: produtoEscolhido.categoria,
      preco: produtoEscolhido.preco,
      detalhes: (dados.get("detalhes") || "").trim() || null,
      observacoes: (dados.get("observacoes") || "").trim() || null,
      status: "Pendente",
    };

    const botao = form.querySelector('button[type="submit"]');
    botao.disabled = true;
    botao.textContent = "Enviando...";

    try {
      const { error } = await db.from("pedidos").insert(pedido);
      if (error) throw error;

      sessionStorage.setItem("ultimoPedido", JSON.stringify(pedido));
      window.location.href = "resumo.html";
    } catch (erro) {
      console.error(erro);
      erroBox.hidden = false;
      erroBox.textContent = "Não foi possível enviar seu pedido agora. Verifique sua conexão e tente novamente.";
      botao.disabled = false;
      botao.textContent = "Finalizar pedido";
    }
  });
}

document.addEventListener("DOMContentLoaded", iniciarFormularioPedido);
