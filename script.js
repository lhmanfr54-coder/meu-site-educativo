// ==========================================
// PROGRAMAR FÁCIL - JAVASCRIPT COMPLETO
// ==========================================

// 15 AULAS DO CURSO
const lessons = [
  // MÓDULO 1 - HTML
  {
    module: "HTML",
    title: "O que é HTML?",
    time: "20 min",
    desc: "Conheça a linguagem que estrutura as páginas da internet.",
    sections: [
      ["O que é HTML?", "HTML significa HyperText Markup Language, ou Linguagem de Marcação de Hipertexto. Ele organiza o conteúdo de uma página, indicando ao navegador o que é um título, parágrafo, imagem, link ou formulário."],
      ["Como funciona?", "O HTML utiliza elementos chamados tags. Geralmente, um elemento possui uma tag de abertura, conteúdo e uma tag de fechamento. O navegador interpreta essas marcações e apresenta o conteúdo na tela."],
      ["HTML é uma linguagem de programação?", "HTML é uma linguagem de marcação, não uma linguagem de programação tradicional. Ele define a estrutura e o significado do conteúdo. O CSS cuida da aparência e o JavaScript adiciona interatividade."]
    ],
    code: `<h1>Meu primeiro site</h1>
<p>Estou aprendendo HTML!</p>
<a href="https://developer.mozilla.org/pt-BR/">Aprender mais</a>`,
    tip: "HTML é a base estrutural de uma página. Comece aprendendo o significado das tags, em vez de apenas decorar seus nomes.",
    task: "Crie uma página com um título, um parágrafo de apresentação e um link para um site educativo."
  },
  {
    module: "HTML",
    title: "Estrutura básica de uma página",
    time: "25 min",
    desc: "Aprenda a organizar corretamente um documento HTML.",
    sections: [
      ["DOCTYPE e HTML", "A declaração DOCTYPE informa ao navegador que o documento utiliza HTML moderno. A tag html envolve todo o conteúdo da página. O atributo lang indica o idioma principal."],
      ["Head e Body", "O head contém informações sobre o documento, como título da aba, codificação e configurações. O body contém o conteúdo que aparece na página, como textos, imagens e botões."],
      ["Configurações importantes", "A configuração UTF-8 permite exibir acentos corretamente. A meta viewport ajuda a adaptar a página para celulares e outros dispositivos."]
    ],
    code: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha página</title>
</head>
<body>
  <h1>Olá, mundo!</h1>
  <p>Minha primeira página.</p>
</body>
</html>`,
    tip: "Todo documento HTML deve começar com a estrutura básica. Ela ajuda o navegador a interpretar corretamente a página.",
    task: "Crie um arquivo chamado index.html com a estrutura completa, um título para a aba e dois parágrafos."
  },
  {
    module: "HTML",
    title: "Títulos, parágrafos e listas",
    time: "20 min",
    desc: "Organize textos e informações de maneira clara.",
    sections: [
      ["Títulos", "O HTML possui seis níveis de títulos, de h1 até h6. O h1 representa o título principal e os demais organizam os assuntos e subseções da página."],
      ["Parágrafos e destaques", "A tag p cria parágrafos. A tag strong indica importância e em representa ênfase. Essas tags ajudam a organizar e dar significado ao conteúdo."],
      ["Listas", "A tag ul cria listas sem numeração. A tag ol cria listas numeradas. Cada item deve ficar dentro de uma tag li."]
    ],
    code: `<h1>Meu aprendizado</h1>
<h2>Meus objetivos</h2>
<p>Quero aprender a desenvolver sites.</p>
<p><strong>Praticar</strong> é muito importante.</p>
<ul>
  <li>Estudar HTML</li>
  <li>Aprender CSS</li>
  <li>Praticar JavaScript</li>
</ul>`,
    tip: "Utilize os títulos em uma ordem lógica. Não escolha uma tag apenas pelo tamanho visual do texto.",
    task: "Crie uma página sobre um hobby, utilizando h1, h2, parágrafos, palavras em destaque e uma lista."
  },
  {
    module: "HTML",
    title: "Links e imagens",
    time: "25 min",
    desc: "Aprenda a conectar páginas e adicionar imagens.",
    sections: [
      ["Criando links", "A tag a cria um link. O atributo href indica o endereço para onde a pessoa será direcionada. Links podem levar a outras páginas, documentos ou sites."],
      ["Adicionando imagens", "A tag img permite inserir imagens. O atributo src indica o caminho da imagem e o atributo alt fornece uma descrição textual para acessibilidade."],
      ["Caminhos dos arquivos", "Se a imagem estiver na mesma pasta do HTML, você pode utilizar seu nome diretamente. Se estiver em uma pasta chamada imagens, utilize imagens/nome-da-imagem.jpg."]
    ],
    code: `<a href="https://www.gov.br/">
  Acessar o portal Gov.br
</a>

<img src="imagem.jpg" alt="Descrição da imagem">`,
    tip: "O atributo alt é importante para pessoas que utilizam leitores de tela e também quando a imagem não consegue carregar.",
    task: "Adicione uma imagem à sua página, escreva uma descrição para ela e crie dois links para sites diferentes."
  },
  {
    module: "HTML",
    title: "Formulários e tabelas",
    time: "30 min",
    desc: "Conheça os recursos para organizar dados e receber informações.",
    sections: [
      ["Formulários", "A tag form agrupa campos que permitem receber informações. Os campos podem ser utilizados para solicitar nome, e-mail, senha e outros dados."],
      ["Tipos de campos", "O elemento input possui diferentes tipos, como text, email, password e number. O atributo required permite indicar que um campo precisa ser preenchido."],
      ["Tabelas", "A tag table cria uma tabela. As tags tr representam linhas, th representam cabeçalhos e td representam células de dados."]
    ],
    code: `<form>
  <label for="nome">Nome:</label>
  <input id="nome" type="text" required>

  <label for="email">E-mail:</label>
  <input id="email" type="email" required>

  <button type="submit">Enviar</button>
</form>

<table>
  <tr><th>Curso</th><th>Aulas</th></tr>
  <tr><td>HTML</td><td>5</td></tr>
</table>`,
    tip: "Sempre associe um label ao campo correspondente. Um formulário HTML sozinho não armazena informações em um banco de dados.",
    task: "Crie um formulário com nome, e-mail e idade. Depois, monte uma tabela com três cursos fictícios."
  },

  // MÓDULO 2 - CSS
  {
    module: "CSS",
    title: "O que é CSS?",
    time: "20 min",
    desc: "Descubra como transformar a aparência de uma página.",
    sections: [
      ["Conhecendo o CSS", "CSS significa Cascading Style Sheets, ou Folhas de Estilo em Cascata. É uma linguagem utilizada para controlar a apresentação visual de documentos HTML."],
      ["O que podemos modificar?", "Com CSS podemos alterar cores, fontes, tamanhos, margens, espaçamentos, bordas, posicionamento e até criar animações."],
      ["HTML e CSS trabalhando juntos", "O HTML define a estrutura do conteúdo, enquanto o CSS determina como esse conteúdo será apresentado. Separar estrutura e aparência facilita a manutenção do site."]
    ],
    code: `<h1>Meu site</h1>
<p>Estou aprendendo CSS.</p>

<style>
  h1 {
    color: blue;
  }

  p {
    font-size: 18px;
  }
</style>`,
    tip: "É possível escrever CSS dentro do HTML, mas o mais recomendado é utilizar um arquivo separado com extensão .css.",
    task: "Crie um arquivo style.css e altere a cor de um título e o tamanho da fonte de um parágrafo."
  },
  {
    module: "CSS",
    title: "Cores, fontes e textos",
    time: "25 min",
    desc: "Personalize os textos e escolha uma identidade visual.",
    sections: [
      ["Cores", "A propriedade color modifica a cor do texto. A propriedade background-color modifica a cor do fundo. As cores podem ser definidas por nomes, códigos hexadecimais ou RGB."],
      ["Fontes", "A propriedade font-family define a família tipográfica. A propriedade font-size controla o tamanho do texto e font-weight controla sua espessura."],
      ["Alinhamento", "A propriedade text-align permite alinhar o texto à esquerda, direita, centro ou de maneira justificada."]
    ],
    code: `body {
  background-color: #f2f5fa;
  font-family: Arial, sans-serif;
}

h1 {
  color: #3478f6;
  font-size: 32px;
  text-align: center;
}

p {
  color: #555555;
  font-size: 16px;
}`,
    tip: "Escolha cores com bom contraste entre texto e fundo. Isso melhora a leitura e a acessibilidade.",
    task: "Escolha três cores para seu site, defina uma fonte e personalize o alinhamento dos títulos."
  },
  {
    module: "CSS",
    title: "Margens, bordas e espaçamentos",
    time: "25 min",
    desc: "Entenda como organizar os espaços dos elementos.",
    sections: [
      ["Margin", "A propriedade margin controla o espaço externo de um elemento. Ela ajuda a separar um elemento dos outros que estão próximos."],
      ["Padding", "A propriedade padding controla o espaço interno entre o conteúdo e a borda do elemento."],
      ["Bordas e arredondamento", "A propriedade border cria bordas. A propriedade border-radius arredonda os cantos de caixas, imagens e botões."]
    ],
    code: `.cartao {
  background-color: white;
  margin: 20px;
  padding: 25px;
  border: 1px solid #dddddd;
  border-radius: 12px;
}`,
    tip: "Margin é o espaço externo. Padding é o espaço interno. Essa diferença é fundamental para organizar layouts.",
    task: "Crie um cartão com fundo branco, margem, espaçamento interno, borda e cantos arredondados."
  },
  {
    module: "CSS",
    title: "Flexbox e organização de layouts",
    time: "30 min",
    desc: "Aprenda a posicionar elementos de forma flexível.",
    sections: [
      ["O que é Flexbox?", "Flexbox é um modelo de layout CSS que facilita a organização de elementos em linhas ou colunas. Ele é muito utilizado em menus, cartões e áreas de conteúdo."],
      ["Propriedade display", "Para ativar o Flexbox em um elemento, utilizamos display: flex. Os elementos filhos passam a ser organizados de acordo com as propriedades do contêiner."],
      ["Alinhamento", "justify-content organiza os elementos no eixo principal. align-items controla o alinhamento no eixo transversal. gap define o espaço entre os elementos."]
    ],
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.cartao {
  padding: 20px;
  background: #eaf1ff;
}`,
    tip: "Flexbox é especialmente útil para organizar menus e grupos de cartões sem precisar usar posicionamentos complicados.",
    task: "Crie três cartões dentro de um contêiner e utilize Flexbox para organizá-los lado a lado."
  },
  {
    module: "CSS",
    title: "Responsividade e media queries",
    time: "30 min",
    desc: "Adapte seu site para computadores, tablets e celulares.",
    sections: [
      ["O que é responsividade?", "Um site responsivo adapta seu conteúdo e seu layout às diferentes dimensões de tela. Isso evita que a pessoa precise ampliar ou arrastar a página horizontalmente para conseguir ler."],
      ["Media queries", "As media queries permitem aplicar regras CSS de acordo com características do dispositivo, como a largura da tela."],
      ["Boas práticas", "Utilize larguras flexíveis, imagens que respeitem o tamanho do contêiner e tamanhos de texto legíveis. Teste o site em diferentes resoluções."]
    ],
    code: `.container {
  display: flex;
  gap: 20px;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}`,
    tip: "Uma página pode ficar ótima em um computador e apresentar problemas no celular. Sempre teste os dois formatos.",
    task: "Crie três cartões que ficam lado a lado no computador e um abaixo do outro quando a tela tiver até 600px."
  },

  // MÓDULO 3 - JAVASCRIPT
  {
    module: "JavaScript",
    title: "Introdução ao JavaScript",
    time: "20 min",
    desc: "Conheça a linguagem que adiciona interatividade às páginas.",
    sections: [
      ["O que é JavaScript?", "JavaScript é uma linguagem de programação muito utilizada no desenvolvimento web. Ela permite criar interações, validar formulários, atualizar conteúdos e responder às ações das pessoas."],
      ["HTML, CSS e JavaScript", "Imagine uma casa: HTML é a estrutura, CSS é a decoração e JavaScript representa os mecanismos que permitem que as coisas funcionem e reajam."],
      ["Onde o JavaScript funciona?", "Ele pode ser executado diretamente nos navegadores modernos. Também pode ser utilizado no desenvolvimento de servidores, aplicativos e outras ferramentas."]
    ],
    code: `let nome = "Maria";

alert("Olá, " + nome + "!");

console.log("Meu primeiro código");`,
    tip: "O console do navegador é uma ferramenta muito útil para visualizar mensagens e encontrar erros no JavaScript.",
    task: "Crie uma variável com seu nome e utilize alert() para mostrar uma mensagem de boas-vindas."
  },
  {
    module: "JavaScript",
    title: "Variáveis e tipos de dados",
    time: "25 min",
    desc: "Aprenda a guardar informações e trabalhar com valores.",
    sections: [
      ["O que são variáveis?", "Variáveis são espaços identificados por nomes que permitem guardar valores para utilização durante a execução do programa."],
      ["let e const", "let declara uma variável que pode receber outro valor. const declara uma variável que não pode ser reatribuída. Prefira const quando não precisar alterar a referência."],
      ["Tipos de dados", "JavaScript trabalha com diferentes tipos, como strings (textos), numbers (números), booleans (verdadeiro ou falso), arrays e objetos."]
    ],
    code: `const nome = "Ana";
let idade = 20;

const estudante = true;

console.log(nome);
console.log(idade);
console.log(estudante);`,
    tip: "Use nomes claros para suas variáveis. Isso facilita entender o que cada informação representa.",
    task: "Crie variáveis para guardar seu nome, idade, cidade e se você gosta de programação."
  },
  {
    module: "JavaScript",
    title: "Operadores e condições",
    time: "25 min",
    desc: "Faça o programa tomar decisões com base em informações.",
    sections: [
      ["Operadores matemáticos", "JavaScript possui operadores como +, -, *, / e %. Eles permitem realizar operações matemáticas com números."],
      ["Comparações", "Operadores como >, <, >=, <=, == e === permitem comparar valores. O operador === compara valor e tipo, sendo geralmente preferível ao ==."],
      ["Estruturas condicionais", "A estrutura if permite executar um bloco de código quando uma condição é verdadeira. else permite executar outro bloco quando a condição não é atendida."]
    ],
    code: `const idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}`,
    tip: "Condições são utilizadas em cadastros, validações, sistemas de acesso e muitas outras aplicações.",
    task: "Crie um programa que receba uma idade e informe se a pessoa é maior ou menor de idade."
  },
  {
    module: "JavaScript",
    title: "Repetições e funções",
    time: "30 min",
    desc: "Evite repetir código e organize suas instruções.",
    sections: [
      ["Laços de repetição", "Estruturas como for e while permitem executar um conjunto de instruções várias vezes. Elas são úteis quando precisamos percorrer listas ou repetir tarefas."],
      ["O que são funções?", "Uma função é um bloco de código que pode ser executado quando chamado. Ela ajuda a dividir um programa em partes menores e reutilizáveis."],
      ["Parâmetros e retorno", "Funções podem receber informações por meio de parâmetros e devolver um resultado utilizando return."]
    ],
    code: `function somar(a, b) {
  return a + b;
}

const resultado = somar(10, 5);

console.log(resultado);

for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
    tip: "Uma função deve ter uma responsabilidade clara. Dividir tarefas em funções torna o programa mais fácil de entender.",
    task: "Crie uma função que receba dois números e devolva a soma deles. Depois, utilize um for para mostrar os números de 1 a 10."
  },
  {
    module: "JavaScript",
    title: "DOM e eventos",
    time: "35 min",
    desc: "Aprenda a modificar elementos HTML com JavaScript.",
    sections: [
      ["O que é DOM?", "DOM significa Document Object Model. É uma representação da página HTML que permite ao JavaScript localizar e modificar elementos, textos, atributos e estilos."],
      ["Selecionando elementos", "O método document.querySelector() permite selecionar um elemento utilizando seletores CSS. O método getElementById() permite localizar um elemento pelo seu identificador."],
      ["Eventos", "Eventos representam ações, como cliques, digitação e envio de formulários. O método addEventListener() permite executar uma função quando um evento acontece."]
    ],
    code: `<h1 id="titulo">Olá!</h1>
<button id="botao">Clique aqui</button>

<script>
  const botao = document.querySelector("#botao");
  const titulo = document.querySelector("#titulo");

  botao.addEventListener("click", function() {
    titulo.textContent = "Você clicou!";
  });
</script>`,
    tip: "O JavaScript pode modificar o conteúdo de uma página sem precisar recarregá-la.",
    task: "Crie um botão que altere o texto de um título quando for clicado."
  }
];

// ==========================================
// ATIVIDADES E PROJETOS
// ==========================================

const challenges = [
  {
    tag: "ATIVIDADE 01 • HTML",
    title: "Minha primeira página",
    desc: "Crie uma página de apresentação pessoal, contando um pouco sobre você.",
    items: [
      "Título principal com seu nome",
      "Dois parágrafos de apresentação",
      "Uma lista de interesses",
      "Um link para um site educativo"
    ],
    guide: "Crie um arquivo atividade1.html. Utilize h1, h2, p, ul, li e a para organizar o conteúdo."
  },
  {
    tag: "ATIVIDADE 02 • CSS",
    title: "Personalize seu site",
    desc: "Desenvolva uma identidade visual para uma página HTML.",
    items: [
      "Defina três cores principais",
      "Escolha uma fonte legível",
      "Crie cartões com bordas e sombras",
      "Ajuste margens e espaçamentos"
    ],
    guide: "Crie um arquivo style.css e conecte-o ao HTML. Experimente color, background-color, font-family, padding, margin e border-radius."
  },
  {
    tag: "ATIVIDADE 03 • JAVASCRIPT",
    title: "Calculadora básica",
    desc: "Monte uma calculadora simples que receba dois números e apresente um resultado.",
    items: [
      "Dois campos numéricos",
      "Botões para operações matemáticas",
      "Validação dos campos vazios",
      "Área para mostrar o resultado"
    ],
    guide: "Utilize input type number, leia os valores com value, converta-os com Number() e apresente o resultado na página."
  },
  {
    tag: "ATIVIDADE 04 • HTML + CSS",
    title: "Cartão de apresentação",
    desc: "Desenvolva um cartão digital para uma pessoa ou empresa fictícia.",
    items: [
      "Nome e breve descrição",
      "Imagem ou logotipo",
      "Informações de contato fictícias",
      "Layout organizado e responsivo"
    ],
    guide: "Utilize article ou div para agrupar o conteúdo. Aplique padding, border-radius, max-width e uma media query para telas menores."
  },
  {
    tag: "ATIVIDADE 05 • JAVASCRIPT",
    title: "Lista de tarefas",
    desc: "Crie uma aplicação para adicionar e remover tarefas.",
    items: [
      "Campo de texto para nova tarefa",
      "Botão para adicionar",
      "Lista atualizada na tela",
      "Opção para remover cada tarefa"
    ],
    guide: "Utilize querySelector, document.createElement(), append() e remove() para manipular os elementos da página."
  },
  {
    tag: "PROJETO FINAL • HTML, CSS E JS",
    title: "Crie seu próprio site",
    desc: "Reúna tudo o que aprendeu em um projeto com tema escolhido por você.",
    items: [
      "Menu de navegação e seções",
      "Conteúdo estruturado com HTML",
      "Estilo visual com CSS",
      "Pelo menos duas interações em JavaScript",
      "Adaptação para telas pequenas"
    ],
    guide: "Escolha um tema como biblioteca, portfólio, loja fictícia ou página educativa. Planeje as seções, desenvolva o HTML, estilize com CSS e implemente duas interações.",
    featured: true
  }
];

// ==========================================
// QUESTIONÁRIO
// ==========================================

const quiz = [
  {
    q: "Qual é a principal função do HTML?",
    a: [
      "Criar a estrutura e o significado do conteúdo",
      "Definir apenas as cores do site",
      "Armazenar dados em um servidor",
      "Editar imagens"
    ],
    correct: 0,
    why: "HTML organiza o conteúdo com títulos, parágrafos, links, imagens e outros elementos."
  },
  {
    q: "Qual elemento contém o conteúdo visível de uma página?",
    a: ["head", "body", "meta", "title"],
    correct: 1,
    why: "O body contém o conteúdo apresentado na página."
  },
  {
    q: "Qual tag cria um link?",
    a: ["img", "p", "a", "link-text"],
    correct: 2,
    why: "A tag a cria um hiperlink e utiliza href para indicar o destino."
  },
  {
    q: "Para que serve o CSS?",
    a: [
      "Executar consultas SQL",
      "Estilizar e organizar visualmente a página",
      "Criar a estrutura sem HTML",
      "Substituir o navegador"
    ],
    correct: 1,
    why: "CSS controla cores, fontes, espaçamentos, bordas e layouts."
  },
  {
    q: "Qual propriedade cria espaço interno entre o conteúdo e a borda?",
    a: ["margin", "padding", "display", "position"],
    correct: 1,
    why: "Padding é o espaçamento interno. Margin é o espaçamento externo."
  },
  {
    q: "Qual recurso CSS ajuda a adaptar estilos a telas menores?",
    a: ["alert", "for", "@media", "console.log"],
    correct: 2,
    why: "Media queries permitem aplicar regras conforme as características da tela."
  },
  {
    q: "Qual palavra declara uma variável que pode receber outro valor?",
    a: ["let", "const", "static", "fixed"],
    correct: 0,
    why: "let permite reatribuição. const impede reatribuir a variável."
  },
  {
    q: "Qual operador verifica igualdade de valor e tipo em JavaScript?",
    a: ["=", "==", "===", "!="],
    correct: 2,
    why: "O operador === compara valor e tipo sem conversão automática."
  },
  {
    q: "Qual estrutura é usada para repetir instruções?",
    a: ["if", "for", "return", "const"],
    correct: 1,
    why: "for é uma estrutura de repetição. Também existem while e do...while."
  },
  {
    q: "Qual método registra um evento em um elemento?",
    a: ["addEventListener()", "createStyle()", "writeCSS()", "newEvent()"],
    correct: 0,
    why: "addEventListener() permite executar uma função quando ocorre um evento, como um clique."
  }
];

// ==========================================
// PROGRESSO DO ALUNO
// ==========================================

let completed = [];

try {
  completed = JSON.parse(localStorage.getItem("pf-completed") || "[]");
  if (!Array.isArray(completed)) completed = [];
} catch (error) {
  completed = [];
}

completed = completed.filter(id =>
  Number.isInteger(id) && id >= 1 && id <= 15
);

const $ = selector => document.querySelector(selector);

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function showToast(message) {
  const toast = $("#toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// ==========================================
// EXIBIR AS AULAS
// ==========================================

function renderLessons() {
  const container = $("#lesson-modules");

  if (!container) {
    console.error("Elemento #lesson-modules não encontrado.");
    return;
  }

  const modules = [
    {
      name: "HTML",
      subtitle: "Estrutura e conteúdo das páginas",
      icon: "5",
      color: "html",
      start: 1,
      end: 5
    },
    {
      name: "CSS",
      subtitle: "Aparência, organização e responsividade",
      icon: "#",
      color: "css",
      start: 6,
      end: 10
    },
    {
      name: "JavaScript",
      subtitle: "Lógica, funções e interatividade",
      icon: "JS",
      color: "js",
      start: 11,
      end: 15
    }
  ];

  container.innerHTML = modules.map((mod, moduleIndex) => {
    const moduleLessons = lessons.slice(mod.start - 1, mod.end);

    return `
      <section class="module">
        <div class="module-head">
          <div class="module-icon ${mod.color}">
            ${mod.icon}
          </div>

          <div>
            <h3>Módulo ${String(moduleIndex + 1).padStart(2, "0")} — ${mod.name}</h3>
            <p>${mod.subtitle}</p>
          </div>

          <span class="module-count">5 aulas</span>
        </div>

        ${moduleLessons.map((lesson, index) => {
          const id = mod.start + index;
          const done = completed.includes(id);

          return `
            <details class="lesson ${done ? "done" : ""}">
              <summary class="lesson-summary">
                <span class="lesson-number">
                  ${done ? "✓" : String(id).padStart(2, "0")}
                </span>

                <span class="lesson-title">
                  <strong>${lesson.title}</strong>
                  <span>${lesson.desc}</span>
                </span>

                <span class="lesson-time">${lesson.time}</span>
                <span class="lesson-chevron">›</span>
              </summary>

              <div class="lesson-content">

                ${lesson.sections.map(section => `
                  <h4>${section[0]}</h4>
                  <p>${section[1]}</p>
                `).join("")}

                <h4>Exemplo de código</h4>

                <pre><code>${escapeHTML(lesson.code)}</code></pre>

                <div class="lesson-tip">
                  <strong>LEMBRETE</strong>
                  <p>${lesson.tip}</p>
                </div>

                <div class="lesson-task">
                  <strong>ATIVIDADE DA AULA</strong>
                  <p>${lesson.task}</p>
                </div>

                <button
                  class="complete-btn"
                  data-complete="${id}"
                  ${done ? "disabled" : ""}
                >
                  ${done ? "✓ Aula concluída" : "Marcar aula como concluída"}
                </button>

              </div>
            </details>
          `;
        }).join("")}
      </section>
    `;
  }).join("");

  container.querySelectorAll("[data-complete]").forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.complete);

      if (!completed.includes(id)) {
        completed.push(id);

        localStorage.setItem(
          "pf-completed",
          JSON.stringify(completed)
        );

        renderLessons();
        updateProgress();

        showToast("Aula marcada como concluída!");
      }
    });
  });

  updateProgress();
}

// ==========================================
// ATUALIZAR BARRA DE PROGRESSO
// ==========================================

function updateProgress() {
  const label = $("#progress-label");
  const percentElement = $("#progress-percent");
  const bar = $("#progress-bar");

  if (!label || !percentElement || !bar) return;

  const percent = Math.round((completed.length / 15) * 100);

  label.textContent = `${completed.length} de 15 aulas concluídas`;
  percentElement.textContent = `${percent}%`;
  bar.style.width = `${percent}%`;
}

// ==========================================
// EXIBIR ATIVIDADES
// ==========================================

function renderChallenges() {
  const container = $("#challenge-grid");

  if (!container) return;

  container.innerHTML = challenges.map(challenge => `
    <article class="challenge-card ${challenge.featured ? "featured" : ""}">

      <span class="challenge-tag">${challenge.tag}</span>

      <h3>${challenge.title}</h3>

      <p>${challenge.desc}</p>

      <h4>O que precisa conter?</h4>

      <ul>
        ${challenge.items.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <details>
        <summary>Ver orientação da atividade</summary>
        <p>${challenge.guide}</p>
      </details>

    </article>
  `).join("");
}

// ==========================================
// QUESTIONÁRIO INTERATIVO
// ==========================================

let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;
let answered = false;

function renderQuestion() {
  const content = $("#quiz-content");
  const count = $("#quiz-count");
  const progress = $("#quiz-progress");
  const feedback = $("#quiz-feedback");
  const nextButton = $("#next-question");

  if (!content || !count || !progress || !feedback || !nextButton) {
    console.error("Elementos do questionário não encontrados.");
    return;
  }

  const question = quiz[currentQuestion];

  count.textContent = `Questão ${currentQuestion + 1} de ${quiz.length}`;

  progress.style.width =
    `${(currentQuestion / quiz.length) * 100}%`;

  content.innerHTML = `
    <h3 class="quiz-question">
      ${currentQuestion + 1}. ${question.q}
    </h3>

    <div class="quiz-options">
      ${question.a.map((answer, index) => `
        <button class="quiz-option" data-answer="${index}">
          ${String.fromCharCode(65 + index)}. ${answer}
        </button>
      `).join("")}
    </div>
  `;

  feedback.textContent = "Escolha uma alternativa para continuar.";

  nextButton.disabled = true;
  nextButton.textContent =
    currentQuestion === quiz.length - 1
      ? "Ver resultado"
      : "Próxima pergunta →";

  answered = false;
  selectedAnswer = null;

  content.querySelectorAll("[data-answer]").forEach(button => {
    button.addEventListener("click", () => {
      if (answered) return;

      answered = true;

      selectedAnswer = Number(button.dataset.answer);

      const correct = selectedAnswer === question.correct;

      if (correct) score++;

      content.querySelectorAll("[data-answer]").forEach((option, index) => {
        option.disabled = true;

        if (index === question.correct) {
          option.classList.add("correct");
        } else if (index === selectedAnswer) {
          option.classList.add("wrong");
        }
      });

      feedback.textContent =
        (correct ? "Correto! " : "Não foi dessa vez. ") + question.why;

      nextButton.disabled = false;
    });
  });
}

function showQuizResult() {
  const content = $("#quiz-content");
  const count = $("#quiz-count");
  const progress = $("#quiz-progress");
  const feedback = $("#quiz-feedback");
  const nextButton = $("#next-question");

  const percentage = Math.round((score / quiz.length) * 100);

  progress.style.width = "100%";
  count.textContent = "Questionário finalizado";

  content.innerHTML = `
    <div class="result-box">

      <strong>${score}/${quiz.length}</strong>

      <h3>${percentage >= 70 ? "Muito bem!" : "Continue praticando!"}</h3>

      <p>
        Você acertou ${score} de ${quiz.length} perguntas,
        alcançando ${percentage}% de aproveitamento.
      </p>

      <button class="btn btn-primary" id="retry-quiz">
        Refazer questionário
      </button>

    </div>
  `;

  feedback.textContent = "Resultado calculado automaticamente.";

  nextButton.style.display = "none";

  $("#retry-quiz").addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;

    nextButton.style.display = "inline-flex";

    renderQuestion();
  });
}

function nextQuizQuestion() {
  if (!answered) return;

  if (currentQuestion < quiz.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showQuizResult();
  }
}

// ==========================================
// LABORATÓRIO DE CÓDIGO
// ==========================================

const starterCode = `<h1>Olá, mundo!</h1>
<p>Estou aprendendo a criar páginas com HTML.</p>
<button onclick="document.querySelector('p').textContent = 'Você clicou no botão!'">
  Clique aqui
</button>`;

function runCode() {
  const editor = $("#code-editor");
  const preview = $("#preview-frame");

  if (!editor || !preview) return;

  const code = editor.value;

  preview.srcdoc = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">

      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          color: #24364d;
        }

        button {
          padding: 10px 15px;
          border: none;
          border-radius: 6px;
          background: #3478f6;
          color: white;
          cursor: pointer;
        }
      </style>
    </head>

    <body>
      ${code}
    </body>
    </html>
  `;
}

// ==========================================
// MENU DE NAVEGAÇÃO
// ==========================================

function setupMenu() {
  const toggle = $("#menu-toggle");
  const nav = $("#main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    toggle.setAttribute(
      "aria-expanded",
      nav.classList.contains("open") ? "true" : "false"
    );
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ==========================================
// INICIALIZAÇÃO DO SITE
// ==========================================

function initializeSite() {
  console.log("Programar Fácil iniciado!");

  renderLessons();
  renderChallenges();
  renderQuestion();
  setupMenu();

  runCode();

  const nextButton = $("#next-question");

  if (nextButton) {
    nextButton.addEventListener("click", nextQuizQuestion);
  }

const editor = $("#code-editor");

if (editor) {
  editor.addEventListener("input", runCode);
}

  const resetButton = $("#reset-code");

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      $("#code-editor").value = starterCode;

      runCode();

      showToast("Exemplo restaurado!");
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeSite);
} else {
  initializeSite();
}
