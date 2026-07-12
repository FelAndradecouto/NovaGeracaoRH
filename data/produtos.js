// Copia embutida de produtos.json, usada como reserva quando a pagina
// e aberta direto do disco (file://) e o fetch() e bloqueado pelo navegador.
// Sempre que editar data/produtos.json, gere este arquivo de novo.
window.PRODUTOS_DATA = [
  {
    "id": "alianca-zirconia-solitaria",
    "nome": "Aliança Trio Zircônia Solitária",
    "categoria": "aneis",
    "material": "Banhado a ouro 18k",
    "preco": 129.9,
    "descricao": "Conjunto com aro liso, aro texturizado e solitário cravejado com zircônia. Vem em estojo de veludo vermelho, pronto para presentear.",
    "imagem": "assets/img/aneis/fotos/alianca-zirconia-solitaria.jpg",
    "imagens": [
      "assets/img/aneis/fotos/alianca-zirconia-solitaria.jpg",
      "assets/img/aneis/fotos/alianca-zirconia-solitaria-2.jpg"
    ]
  },
  {
    "id": "alianca-coracao-batimento-prata",
    "nome": "Aliança Coração & Batimento Prata",
    "categoria": "aneis",
    "material": "Aço prateado",
    "preco": 99.9,
    "descricao": "Par com recorte de coração vazado em um aro e gravação de batimento cardíaco no outro — símbolo de conexão.",
    "imagem": "assets/img/aneis/fotos/alianca-coracao-batimento-prata.jpg",
    "imagens": [
      "assets/img/aneis/fotos/alianca-coracao-batimento-prata.jpg",
      "assets/img/aneis/fotos/alianca-coracao-batimento-prata-2.jpg"
    ]
  },
  {
    "id": "alianca-fosca-friso-dourada",
    "nome": "Aliança Fosca com Friso Dourada",
    "categoria": "aneis",
    "material": "Banhado a ouro 18k",
    "preco": 89.9,
    "descricao": "Acabamento fosco com friso central polido, criando contraste elegante entre as texturas.",
    "imagem": "assets/img/aneis/fotos/alianca-fosca-friso-dourada.jpg",
    "imagens": [
      "assets/img/aneis/fotos/alianca-fosca-friso-dourada.jpg",
      "assets/img/aneis/fotos/alianca-fosca-friso-dourada-2.jpg"
    ]
  },
  {
    "id": "alianca-preta-dourada-listrada",
    "nome": "Aliança Preta e Dourada Listrada",
    "categoria": "aneis",
    "material": "Aço inox banhado",
    "preco": 94.9,
    "descricao": "Design moderno com listras alternadas em preto fosco e dourado, para quem busca algo diferente do tradicional.",
    "imagem": "assets/img/aneis/fotos/alianca-preta-dourada-listrada.jpg"
  },
  {
    "id": "alianca-bicolor-prata-dourado",
    "nome": "Aliança Bicolor Prata e Dourado",
    "categoria": "aneis",
    "material": "Aço bicolor",
    "preco": 99.9,
    "descricao": "Combinação clássica de prata e dourado no mesmo aro, versátil para compor com outras peças.",
    "imagem": "assets/img/aneis/fotos/alianca-bicolor-prata-dourado.jpg",
    "imagens": [
      "assets/img/aneis/fotos/alianca-bicolor-prata-dourado.jpg",
      "assets/img/aneis/fotos/alianca-bicolor-prata-dourado-2.jpg"
    ]
  },
  {
    "id": "alianca-lisa-dourada-larga",
    "nome": "Aliança Lisa Dourada Larga",
    "categoria": "aneis",
    "material": "Banhado a ouro 18k",
    "preco": 84.9,
    "descricao": "Aro largo e liso com brilho contínuo — o modelo clássico que nunca sai de moda.",
    "imagem": "assets/img/aneis/fotos/alianca-lisa-dourada-larga.jpg",
    "imagens": [
      "assets/img/aneis/fotos/alianca-lisa-dourada-larga.jpg",
      "assets/img/aneis/fotos/alianca-lisa-dourada-larga-2.jpg"
    ]
  },
  {
    "id": "alianca-coracao-vazado-dourada",
    "nome": "Aliança Coração Vazado Dourada",
    "categoria": "aneis",
    "material": "Banhado a ouro 18k",
    "preco": 94.9,
    "descricao": "Detalhe de coração vazado no centro do aro, delicado e romântico.",
    "imagem": "assets/img/aneis/fotos/alianca-coracao-vazado-dourada.jpg",
    "imagens": [
      "assets/img/aneis/fotos/alianca-coracao-vazado-dourada.jpg",
      "assets/img/aneis/fotos/alianca-coracao-vazado-dourada-2.jpg"
    ]
  },
  {
    "id": "anel-solitario-zirconia-dourado",
    "nome": "Anel Solitário Zircônia Dourado",
    "categoria": "aneis",
    "material": "Banhado a ouro 18k",
    "preco": 59.9,
    "descricao": "Aro fino com zircônia central em garras, discreto e atemporal para uso avulso ou combinado.",
    "imagem": "assets/img/aneis/fotos/anel-solitario-zirconia-dourado.jpg",
    "imagens": [
      "assets/img/aneis/fotos/anel-solitario-zirconia-dourado.jpg",
      "assets/img/aneis/fotos/anel-solitario-zirconia-dourado-2.jpg"
    ]
  },
  {
    "id": "anel-solitario-zirconia-prata",
    "nome": "Anel Solitário Zircônia Prata",
    "categoria": "aneis",
    "material": "Aço prateado",
    "preco": 54.9,
    "descricao": "Versão prateada do solitário clássico, com zircônia central cravejada em garras.",
    "imagem": "assets/img/aneis/fotos/anel-solitario-zirconia-prata.jpg",
    "imagens": [
      "assets/img/aneis/fotos/anel-solitario-zirconia-prata.jpg",
      "assets/img/aneis/fotos/anel-solitario-zirconia-prata-2.jpg"
    ]
  },
  {
    "id": "alianca-preta-batimento-cardiaco",
    "nome": "Aliança Preta Batimento Cardíaco",
    "categoria": "aneis",
    "material": "Aço preto fosco",
    "preco": 99.9,
    "descricao": "Acabamento preto fosco com gravação de linha de batimento cardíaco — estilo marcante e simbólico.",
    "imagem": "assets/img/aneis/fotos/alianca-preta-batimento-cardiaco.jpg"
  },
  {
    "id": "alianca-rose-torcida",
    "nome": "Aliança Rosé Torcida",
    "categoria": "aneis",
    "material": "Ouro rosé",
    "preco": 89.9,
    "descricao": "Torção suave no aro em tom rosé, um toque contemporâneo no design tradicional de aliança.",
    "imagem": "assets/img/aneis/fotos/alianca-rose-torcida.jpg"
  },
  {
    "id": "alianca-dourada-diagonal",
    "nome": "Aliança Dourada Diagonal",
    "categoria": "aneis",
    "material": "Banhado a ouro 18k",
    "preco": 84.9,
    "descricao": "Cortes diagonais texturizados que capturam a luz em diferentes ângulos.",
    "imagem": "assets/img/aneis/fotos/alianca-dourada-diagonal.jpg"
  },
  {
    "id": "alianca-rose-fina",
    "nome": "Aliança Rosé Fina",
    "categoria": "aneis",
    "material": "Ouro rosé",
    "preco": 74.9,
    "descricao": "Aro fino e delicado em ouro rosé, ideal para uso diário ou empilhado com outros anéis.",
    "imagem": "assets/img/aneis/fotos/alianca-rose-fina.jpg",
    "imagens": [
      "assets/img/aneis/fotos/alianca-rose-fina.jpg",
      "assets/img/aneis/fotos/alianca-rose-fina-2.jpg"
    ]
  },
  {
    "id": "alianca-prata-torcida",
    "nome": "Aliança Prata Torcida",
    "categoria": "aneis",
    "material": "Aço prateado",
    "preco": 84.9,
    "descricao": "Design torcido em acabamento prateado, elegante e discreto.",
    "imagem": "assets/img/aneis/fotos/alianca-prata-torcida.jpg"
  },
  {
    "id": "alianca-prata-fina",
    "nome": "Aliança Prata Fina",
    "categoria": "aneis",
    "material": "Aço prateado",
    "preco": 69.9,
    "descricao": "Modelo fino e leve em prata, combina fácil com qualquer produção do dia a dia.",
    "imagem": "assets/img/aneis/fotos/alianca-prata-fina.jpg",
    "imagens": [
      "assets/img/aneis/fotos/alianca-prata-fina.jpg",
      "assets/img/aneis/fotos/alianca-prata-fina-2.jpg"
    ]
  },
  {
    "id": "colar-luar",
    "nome": "Colar Luar",
    "categoria": "colares",
    "material": "Banhado a ouro 18k",
    "preco": 129.9,
    "descricao": "Corrente fina com pingente de lua em zircônia.",
    "imagem": "assets/img/colares/icone-colar.svg"
  },
  {
    "id": "colar-gota",
    "nome": "Colar Gota Cristal",
    "categoria": "colares",
    "material": "Ouro rosé",
    "preco": 139.9,
    "descricao": "Pingente em formato de gota com cristal facetado.",
    "imagem": "assets/img/colares/icone-colar.svg"
  },
  {
    "id": "colar-ponto-luz",
    "nome": "Colar Ponto de Luz",
    "categoria": "colares",
    "material": "Banhado a ouro 18k",
    "preco": 99.9,
    "descricao": "Discreto e versátil, ideal para uso diário.",
    "imagem": "assets/img/colares/icone-colar.svg"
  },
  {
    "id": "brinco-argola",
    "nome": "Brinco Argola Classic",
    "categoria": "brincos",
    "material": "Banhado a ouro 18k",
    "preco": 79.9,
    "descricao": "Argola média com fecho de pressão reforçado.",
    "imagem": "assets/img/brincos/icone-brinco.svg"
  },
  {
    "id": "brinco-gota",
    "nome": "Brinco Gota Cristal",
    "categoria": "brincos",
    "material": "Ouro rosé",
    "preco": 84.9,
    "descricao": "Par com pedra em formato de gota, leve para o dia a dia.",
    "imagem": "assets/img/brincos/icone-brinco.svg"
  },
  {
    "id": "brinco-ponto-luz",
    "nome": "Brinco Ponto de Luz",
    "categoria": "brincos",
    "material": "Banhado a ouro 18k",
    "preco": 59.9,
    "descricao": "Zircônia cravejada, discreto e atemporal.",
    "imagem": "assets/img/brincos/icone-brinco.svg"
  },
  {
    "id": "pulseira-riviera",
    "nome": "Pulseira Riviera",
    "categoria": "pulseiras",
    "material": "Banhado a ouro 18k",
    "preco": 119.9,
    "descricao": "Fileira de zircônias cravejadas em elo contínuo.",
    "imagem": "assets/img/pulseiras/icone-pulseira.svg"
  },
  {
    "id": "pulseira-elos",
    "nome": "Pulseira Elos Cartier",
    "categoria": "pulseiras",
    "material": "Ouro rosé",
    "preco": 99.9,
    "descricao": "Elos entrelaçados em design clássico e resistente.",
    "imagem": "assets/img/pulseiras/icone-pulseira.svg"
  },
  {
    "id": "pulseira-veneziana",
    "nome": "Pulseira Veneziana",
    "categoria": "pulseiras",
    "material": "Banhado a ouro 18k",
    "preco": 74.9,
    "descricao": "Malha veneziana fina, maleável e confortável.",
    "imagem": "assets/img/pulseiras/icone-pulseira.svg"
  }
];
