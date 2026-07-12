# Áurea Semijoias — site de catálogo e pedidos

Site estático (HTML/CSS/JS puro, sem framework, sem PHP, sem servidor próprio)
para vitrine de joias/semijoias com pedido direto. Os pedidos são gravados no
**Supabase** — não coletamos e-mail, senha, CPF ou qualquer outro dado sensível.

## Estrutura de pastas

```
joias-site/
├── index.html          → página inicial (vitrine)
├── catalogo.html        → catálogo com filtro por categoria
├── pedido.html          → formulário de pedido (grava no Supabase)
├── resumo.html          → confirmação do pedido + PDF + WhatsApp
├── gestao.html          → painel interno de pedidos (trava simples, sem login)
├── css/
│   ├── tokens.css        → paleta de cores, tipografia, espaçamento
│   ├── base.css          → reset, navegação, rodapé, formulários, botões
│   ├── home.css           → estilos exclusivos da página inicial
│   ├── catalogo.css
│   ├── pedido.css
│   ├── resumo.css
│   └── gestao.css
├── js/
│   ├── config.js          → nome da loja, WhatsApp, Instagram (edite aqui)
│   ├── supabaseClient.js  → conexão com o Supabase (edite as chaves aqui)
│   ├── catalogo.js
│   ├── pedido.js
│   ├── resumo.js
│   └── gestao.js
├── data/
│   └── produtos.json      → catálogo de produtos (edite para add/remover peças)
└── assets/img/
    ├── aneis/  colares/  brincos/  pulseiras/  → ícones placeholder (SVG)
    └── marca/logo.svg      → logotipo placeholder
```

Cada página carrega só o CSS/JS que usa — não existe um arquivo gigante
misturando tudo, então é fácil achar o que precisa mexer.

## 1. Trocar as fotos pelas peças reais

Os ícones em `assets/img/*` são placeholders (desenhos simples em dourado).
Troque por fotos reais das peças e aponte o campo `"imagem"` de cada produto
em `data/produtos.json` para o novo arquivo.

## 2. Editar o catálogo

Abra `data/produtos.json` e edite/adicione itens. Cada produto:

```json
{
  "id": "anel-aurora",
  "nome": "Anel Aurora",
  "categoria": "aneis",
  "material": "Banhado a ouro 18k",
  "preco": 89.9,
  "descricao": "Texto curto da peça.",
  "imagem": "assets/img/aneis/sua-foto.jpg"
}
```

`categoria` precisa ser uma de: `aneis`, `colares`, `brincos`, `pulseiras`
(ou adicione uma nova categoria nos três lugares que a listam: `catalogo.html`,
`index.html` e `js/pedido.js`).

## 3. Configurar o Supabase (onde os pedidos são gravados)

1. Crie um projeto gratuito em [supabase.com](https://supabase.com).
2. No **SQL Editor**, rode:

```sql
create table pedidos (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  whatsapp text not null,
  endereco text,
  produto_id text not null,
  produto_nome text not null,
  categoria text not null,
  preco numeric not null,
  detalhes text,
  observacoes text,
  status text not null default 'Pendente',
  created_at timestamptz not null default now()
);

alter table pedidos enable row level security;

-- Qualquer visitante pode CRIAR um pedido (necessário para o formulário público)
create policy "clientes podem enviar pedidos"
  on pedidos for insert
  to anon
  with check (true);

-- Leitura/edição/exclusão só deveria acontecer pelo painel de gestão.
-- Como o painel NÃO tem login real (veja aviso abaixo), a política abaixo
-- ainda libera leitura/edição para a chave anônima. Se quiser reduzir o
-- risco, veja a seção "Deixando a gestão mais segura" mais abaixo.
create policy "leitura de pedidos"
  on pedidos for select
  to anon
  using (true);

create policy "atualizar status"
  on pedidos for update
  to anon
  using (true);

create policy "excluir pedidos"
  on pedidos for delete
  to anon
  using (true);
```

3. Em **Project Settings → API**, copie a **Project URL** e a **anon public key**.
4. Cole os dois valores em `js/supabaseClient.js`:

```js
const SUPABASE_URL = "https://SEU-PROJETO.supabase.co";
const SUPABASE_ANON_KEY = "SUA-ANON-KEY-AQUI";
```

Pronto — não precisa de nenhum outro backend, banco local, ou servidor PHP.

## 4. Configurar WhatsApp / Instagram / nome da loja

Edite `js/config.js`:

```js
const LOJA = {
  nome: "Áurea Semijoias",
  whatsapp: "5551999999999", // DDI + DDD + número, só dígitos
  instagram: "https://www.instagram.com/sualoja",
  instagramHandle: "@sualoja",
};
```

Os links de Instagram no rodapé de cada página estão fixos em HTML — troque
manualmente o `href="https://www.instagram.com/sualoja"` em cada arquivo
`.html`, ou peça para eu automatizar isso lendo de `config.js` também.

## 5. Rodar localmente

Como as páginas usam `fetch()` para carregar `data/produtos.json`, abrir o
`index.html` direto do disco (`file://`) não funciona — o navegador bloqueia
esse tipo de requisição. Suba um servidor simples na pasta:

```bash
cd joias-site
python3 -m http.server 8000
# depois abra http://localhost:8000
```

Ou publique a pasta inteira em qualquer hospedagem de site estático
(Netlify, Vercel, GitHub Pages, cPanel comum etc.) — não precisa de PHP nem
de Node no servidor.

## ⚠️ Sobre a página de "Gestão" (importante)

Você pediu para **não ter login nem banco de dados próprio**. Isso foi
respeitado à risca, mas é importante entender a troca feita:

- `gestao.html` tem apenas uma **trava de digitação de código** (em
  `js/gestao.js`, constante `CODIGO_ACESSO`). Isso impede que a página seja
  aberta *por acaso*, mas **não é segurança de verdade**: qualquer pessoa
  que abra o código-fonte da página vê o código.
- A política de RLS do Supabase sugerida acima libera leitura/edição de
  pedidos para qualquer um que tenha a `anon key` (que fica visível no
  navegador, é pública por natureza). Ou seja, hoje, tecnicamente, qualquer
  pessoa com um pouco de curiosidade técnica poderia ler os pedidos.
- Como não há dados sensíveis (sem CPF, sem pagamento, sem senha — só nome,
  WhatsApp e endereço opcional), o risco é baixo, mas não é zero.

**Se quiser fechar essa brecha sem reintroduzir login/senha tradicional**,
a forma mais simples é ativar a **Autenticação Anônima** do Supabase ou um
login por "magic link" (só e-mail, sem senha) restrito ao seu e-mail, e
trocar as políticas de `select`/`update`/`delete` de `to anon` para
`to authenticated`. Posso implementar isso se você quiser — é uma mudança
pequena.

## Personalizando o visual

As cores e fontes ficam centralizadas em `css/tokens.css` — mude os valores
de `--velvet`, `--gold`, `--bone` etc. para trocar a identidade visual do
site inteiro de uma vez.
