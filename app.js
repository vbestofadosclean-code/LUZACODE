const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

const defaultCode=`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 40px; }
    h1 { color: #4f46e5; }
    button { padding: 10px 15px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Olá, LUZACODE!</h1>
  <p>Edite este código e clique em Executar.</p>
  <button onclick="saudar()">Clique aqui</button>
  <script>
    function saudar() {
      alert("Você executou JavaScript!");
      console.log("Botão clicado.");
    }
  </script>
</body>
</html>`;

const manual=[
{id:"html",name:"HTML",intro:"HTML é a linguagem usada para organizar o conteúdo de uma página. Pense nele como o esqueleto do site.",items:[
["Estrutura básica","É a base de uma página HTML. O <html> envolve a página, o <head> guarda informações e o <body> contém o que aparece.","<!DOCTYPE html>\n<html>\n<head><title>Minha página</title></head>\n<body>\n  <h1>Olá!</h1>\n</body>\n</html>","A estrutura básica deve ser o ponto de partida de quase toda página."],
["Títulos","Use h1 para o título principal e h2, h3... para subtítulos. Quanto maior o número, menor a importância visual.","<h1>Meu site</h1>\n<h2>Sobre mim</h2>\n<h3>Contacto</h3>","Evite usar vários h1 sem necessidade. Organize os títulos como capítulos."],
["Parágrafos","A tag p cria um bloco de texto.","<p>Este é um parágrafo.</p>\n<p>Este é outro parágrafo.</p>","Use p para textos normais em vez de colocar tudo em div."],
["Links","A tag a cria um link para outra página ou endereço.","<a href=\"https://exemplo.com\">Visitar site</a>","O atributo href diz para onde o link leva."],
["Imagens","A tag img apresenta uma imagem. O atributo alt descreve a imagem.","<img src=\"foto.jpg\" alt=\"Foto de uma paisagem\">","O caminho em src precisa apontar para uma imagem existente."],
["Listas","Use ul para listas sem ordem e ol para listas numeradas. Cada item usa li.","<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>","Listas são úteis para menus, tópicos e informações organizadas."],
["Botões","A tag button cria um botão que pode executar uma ação.","<button>Clicar aqui</button>","Por si só o botão não faz muita coisa; JavaScript pode dar-lhe uma ação."],
["Formulários","Form permite receber informações do utilizador.","<form>\n  <input type=\"text\" placeholder=\"Seu nome\">\n  <button>Enviar</button>\n</form>","Formulários são usados em inscrições, pesquisas e contactos."],
["Div e section","div é um recipiente genérico; section representa uma secção com significado.","<section>\n  <h2>Sobre</h2>\n  <p>Conteúdo...</p>\n</section>","Use section quando estiver a separar partes importantes da página."],
["Atributos","Atributos dão informações extras às tags, como id, class, href, src e alt.","<p class=\"destaque\">Olá!</p>","Os atributos aparecem normalmente dentro da tag de abertura."]]},
{id:"css",name:"CSS",intro:"CSS (Cascading Style Sheets) é a linguagem que define a aparência de uma página HTML. Com CSS você controla cores, letras, tamanhos, espaços, bordas, alinhamento, posições e a adaptação do site ao telemóvel.",items:[["O que é CSS e como funciona", "CSS significa Cascading Style Sheets. Ele trabalha junto com HTML: o HTML cria e organiza o conteúdo e o CSS diz como esse conteúdo deve aparecer. Uma regra CSS normalmente tem um seletor, uma propriedade e um valor.", "p { color: blue; }", "Serve para separar conteúdo de aparência e deixar a página organizada.", "O navegador encontra todos os <p> e aplica a cor azul ao texto."], ["Como aplicar CSS", "Existem três formas principais: CSS externo em um arquivo .css, CSS interno dentro de <style> e CSS inline no próprio elemento. Para projetos maiores, o arquivo externo costuma ser a melhor opção.", "/* style.css */\nh1 { color: #4f46e5; }\n\n<!-- no HTML -->\n<link rel=\"stylesheet\" href=\"style.css\">", "O CSS externo permite reutilizar os mesmos estilos em várias páginas e facilita a manutenção.", "Depois de ligar style.css ao HTML, o título h1 passa a usar a cor definida no arquivo."], ["Seletores, classes e IDs", "O seletor diz ao CSS qual elemento deve receber o estilo. Você pode selecionar uma tag, uma classe com ponto (.) ou um ID com (#). Classes podem ser reutilizadas em vários elementos.", "h1 { color: blue; }\n.caixa { padding: 20px; }\n#titulo { font-size: 32px; }", "Servem para escolher exatamente quais elementos você quer estilizar.", "Um elemento com class=\"caixa\" recebe o padding definido em .caixa."], ["Cores e fundos", "A propriedade color altera a cor do texto. background-color altera a cor de fundo. Você pode usar nomes de cores, hexadecimal, rgb, hsl e outros formatos.", "body {\n  color: #222;\n  background-color: #f5f7fb;\n}\nh1 { color: #4f46e5; }", "Servem para criar contraste e definir a identidade visual da página.", "O texto fica com a cor escolhida e o fundo da página recebe a cor indicada."], ["Tamanho e tipo de letra", "font-size controla o tamanho da letra. font-family escolhe a família da fonte. font-weight controla o peso, como normal ou negrito. line-height controla a distância entre linhas.", "p {\n  font-family: Arial, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.6;\n}", "Servem para deixar os textos legíveis e criar uma hierarquia visual.", "O parágrafo aparece com fonte Arial, tamanho 18px, peso normal e mais espaço entre as linhas."], ["Margin e Padding", "margin cria espaço do lado de fora do elemento. padding cria espaço dentro do elemento, entre o conteúdo e a borda. Esta diferença é fundamental para controlar espaços.", ".cartao {\n  margin: 20px;\n  padding: 15px;\n  background-color: white;\n}", "Servem para controlar a distância entre elementos e o espaço interno das caixas.", "A caixa fica afastada dos outros elementos por 20px e o conteúdo fica afastado da borda por 15px."], ["Bordas e cantos", "border cria uma borda. border-radius arredonda os cantos. Você pode controlar espessura, tipo e cor da borda.", ".cartao {\n  border: 1px solid #ddd;\n  border-radius: 12px;\n}", "Servem para destacar caixas, cartões, campos e outros componentes.", "O cartão passa a ter uma linha fina à volta e cantos arredondados."], ["Flexbox: alinhar elementos", "Flexbox organiza elementos em uma linha ou coluna. display:flex ativa o Flexbox; gap cria espaços; justify-content controla o eixo principal e align-items controla o eixo transversal.", ".menu {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  align-items: center;\n}", "É muito usado para menus, botões, cabeçalhos e grupos de elementos.", "Os elementos do .menu ficam organizados lado a lado, centralizados e com 15px de espaço entre eles."], ["Grid: criar colunas", "CSS Grid organiza elementos em linhas e colunas. grid-template-columns define quantas colunas existem e gap define o espaço entre elas.", ".cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}", "É ideal para cartões, galerias e páginas que precisam de várias colunas.", "Os cartões são distribuídos em três colunas com espaço de 20px entre eles."], ["Position: posicionar elementos", "position permite controlar a posição de um elemento. relative mantém o elemento no fluxo e cria uma referência; absolute posiciona em relação ao elemento de referência; fixed prende à janela.", ".caixa { position: relative; }\n.botao {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}", "Serve para colocar elementos em posições específicas, como um botão no canto de um cartão.", "O botão fica 10px do topo e 10px da direita da caixa que serve de referência."], ["Responsividade com Media Query", "Uma media query permite mudar os estilos de acordo com o tamanho do ecrã. Assim, um site pode ter uma aparência para computador e outra para telemóvel.", ".cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n@media (max-width: 700px) {\n  .cards { grid-template-columns: 1fr; }\n}", "Serve para criar sites que funcionam bem em computadores, tablets e telemóveis.", "Em ecrãs pequenos, os três cartões deixam de ficar lado a lado e passam para uma coluna."], ["Como ler uma regra CSS", "Uma regra CSS pode ser lida da esquerda para a direita: primeiro o seletor, depois as propriedades entre chaves e, dentro delas, propriedade: valor. Cada declaração normalmente termina com ponto e vírgula.", ".botao {\n  background-color: blue;\n  color: white;\n  padding: 10px 16px;\n}", "Entender esta estrutura permite criar e corrigir estilos sem decorar códigos de forma cega.", "Um elemento com class=\"botao\" recebe fundo azul, texto branco e espaço interno de 10px/16px."]]},
{id:"javascript",name:"JavaScript",intro:"JavaScript dá comportamento à página: cliques, cálculos, alterações de conteúdo, validações e muito mais.",items:[
["Variáveis","Variáveis guardam informações que o programa pode usar.","const nome = \"Maria\";\nlet idade = 20;\nconsole.log(nome, idade);","Use const quando o valor não precisa ser reatribuído e let quando pode mudar."],
["Tipos de dados","JavaScript trabalha com texto, números, booleanos, arrays, objetos e outros tipos.","const nome = \"Ana\";\nconst idade = 25;\nconst ativo = true;","Conhecer os tipos ajuda a evitar erros nos cálculos e comparações."],
["Operadores","Operadores fazem cálculos e comparações.","const total = 10 + 5;\nconst maior = total > 10;","Existem operadores matemáticos, de comparação e lógicos."],
["Condições","if permite executar código apenas quando uma condição é verdadeira.","const idade = 18;\nif (idade >= 18) {\n  console.log(\"Maior de idade\");\n}","Use else para indicar o que acontece quando a condição não é verdadeira."],
["Funções","Funções agrupam instruções que podem ser reutilizadas.","function somar(a, b) {\n  return a + b;\n}\nconsole.log(somar(2, 3));","Funções ajudam a evitar repetir o mesmo código."],
["Eventos","Eventos permitem reagir às ações do utilizador.","document.querySelector('button').addEventListener('click', () => {\n  alert('Olá!');\n});","click é apenas um exemplo; existem muitos outros eventos."],
["DOM","DOM é a representação da página que JavaScript consegue alterar.","document.querySelector('h1').textContent = 'Novo título';","Com o DOM você pode mudar textos, classes, estilos e elementos."],
["Arrays","Arrays guardam vários valores numa única variável.","const frutas = ['maçã', 'banana', 'laranja'];\nconsole.log(frutas[0]);","A primeira posição de um array é 0."],
["Loops","Loops repetem uma tarefa várias vezes.","for (let i = 0; i < 5; i++) {\n  console.log(i);\n}","Loops são úteis quando você precisa processar vários valores."],
["Console e erros","console.log mostra informações no console. try/catch ajuda a lidar com erros.","console.log('Teste');\ntry {\n  // código\n} catch (erro) {\n  console.log(erro.message);\n}","Durante o aprendizado, use o console para entender o que o código está fazendo."]]},
{id:"python",name:"Python",intro:"Python é uma linguagem de programação conhecida pela sintaxe simples. Nesta versão, o manual ensina Python, mas o editor do navegador executa HTML/CSS/JavaScript.",items:[
["Olá mundo","O primeiro exemplo tradicional de Python usa print.","print(\"Olá, mundo!\")","print mostra informação no ecrã."],
["Variáveis","Variáveis guardam valores.","nome = \"Maria\"\nidade = 25\nprint(nome, idade)","Python não exige declarar o tipo da variável antes de usá-la."],
["Condições","if permite tomar decisões.","idade = 18\nif idade >= 18:\n    print(\"Maior de idade\")","A indentação é muito importante em Python."],
["Listas","Listas guardam vários valores.","frutas = [\"maçã\", \"banana\", \"laranja\"]\nprint(frutas[0])","Tal como em JavaScript, a primeira posição é 0."],
["Ciclos","for pode repetir uma ação para cada item.","for fruta in [\"maçã\", \"banana\"]:\n    print(fruta)","Ciclos ajudam a trabalhar com listas e tarefas repetitivas."],
["Funções","def cria uma função reutilizável.","def somar(a, b):\n    return a + b\n\nprint(somar(2, 3))","Funções deixam programas maiores mais organizados."]]}];

const courseLevels={
  html:{title:"HTML do zero",desc:"Aprenda HTML desde a base até criar uma pequena página completa.",topics:[
    ["O que é HTML?","HTML é a linguagem de marcação que organiza o conteúdo de uma página. Ele diz ao navegador o que é título, texto, imagem, link, lista ou formulário.","<h1>Olá!</h1>"],
    ["Estrutura básica","Uma página HTML normalmente começa com DOCTYPE, html, head e body. O conteúdo visível fica no body.","<!DOCTYPE html>\n<html>\n<head><title>Site</title></head>\n<body><h1>Olá</h1></body>\n</html>"],
    ["Títulos e parágrafos","h1 até h6 organizam títulos e p cria parágrafos. Use os títulos numa ordem lógica.","<h1>Meu site</h1>\n<h2>Sobre mim</h2>\n<p>Eu estou a aprender HTML.</p>"],
    ["Links e imagens","a cria links e img mostra imagens. href indica o destino do link e src indica o caminho da imagem.","<a href=\"https://exemplo.com\">Visitar</a>\n<img src=\"foto.jpg\" alt=\"Minha foto\">"],
    ["Listas e botões","ul cria listas, ol cria listas numeradas, li representa cada item e button cria botões.","<ul><li>HTML</li><li>CSS</li></ul>\n<button>Começar</button>"],
    ["Formulários","form agrupa campos para receber dados. input cria campos e button pode enviar o formulário.","<form>\n  <input type=\"text\" placeholder=\"Nome\">\n  <button>Enviar</button>\n</form>"]
  ]},
  css:{title:"CSS do zero",desc:"Aprenda a dar estilo, organização e responsividade às suas páginas.",topics:[
    ["O que é CSS?","CSS é a linguagem usada para controlar a aparência de uma página: cores, fontes, espaços, bordas e layout.","h1 { color: blue; }"],
    ["Como escrever CSS","Um seletor escolhe o elemento e as propriedades definem o estilo. Cada declaração termina normalmente com ponto e vírgula.","p { color: #333; font-size: 18px; }"],
    ["Cores e fundos","color altera o texto e background-color altera o fundo. Hexadecimal é uma forma comum de definir cores.","body { background-color: #f5f7fb; }\nh1 { color: #4f46e5; }"],
    ["Margem, padding e borda","margin cria espaço fora; padding cria espaço dentro; border desenha uma borda.",".card { margin: 20px; padding: 20px; border: 1px solid #ddd; }"],
    ["Flexbox","Flexbox facilita alinhar elementos em linha ou coluna e distribuir espaço entre eles.",".menu { display: flex; gap: 15px; align-items: center; }"],
    ["Grid e responsividade","Grid organiza elementos em linhas e colunas. Media queries permitem adaptar o layout ao telemóvel.",".cards { display:grid; grid-template-columns:repeat(3,1fr); }\n@media (max-width:700px){.cards{grid-template-columns:1fr;}}"]
  ]},
  javascript:{title:"JavaScript do zero",desc:"Aprenda a dar comportamento às páginas com lógica, eventos e manipulação do conteúdo.",topics:[
    ["O que é JavaScript?","JavaScript é uma linguagem de programação que permite criar comportamentos e interações numa página.","const nome = \"LUZACODE\";\nconsole.log(nome);"],
    ["Variáveis e tipos","const e let guardam valores. Os dados podem ser textos, números, booleanos, arrays e objetos.","const nome = \"Ana\";\nlet idade = 20;\nconst ativo = true;"],
    ["Operadores e condições","Operadores fazem cálculos e comparações. if permite tomar decisões conforme uma condição.","const idade=18;\nif(idade>=18){ console.log(\"Maior\"); }"],
    ["Funções","Uma função agrupa instruções que podem ser chamadas várias vezes.","function somar(a,b){ return a+b; }\nconsole.log(somar(2,3));"],
    ["Eventos e DOM","Eventos permitem reagir a cliques. O DOM permite encontrar e alterar elementos da página.","document.querySelector('button').addEventListener('click',()=>{\n  document.querySelector('h1').textContent='Olá!';\n});"],
    ["Arrays, loops e projeto","Arrays guardam vários valores e loops repetem tarefas. Juntos, permitem criar pequenas aplicações interativas.","const frutas=['maçã','banana'];\nfor(const fruta of frutas){ console.log(fruta); }"]
  ]}
};
const courseExercises={
  html:[
    ["Iniciante 1","Crie um h1 com o texto 'A minha primeira página'."],["Iniciante 2","Crie um h1, um h2 e dois parágrafos sobre um tema que goste."],["Iniciante 3","Crie uma página com um título, um link e uma imagem com alt."],["Iniciante 4","Crie uma lista não ordenada com 5 tecnologias."],["Iniciante 5","Crie um botão e um formulário com nome e email."],["Iniciante 6","Mini projeto: crie uma página pessoal com título, descrição, lista e contacto."],
    ["Intermédio 1","Crie uma estrutura com header, main e footer."],["Intermédio 2","Crie uma secção com três cartões usando div e headings."],["Intermédio 3","Crie um menu com quatro links."],["Intermédio 4","Crie um formulário com nome, email, idade e botão."],["Intermédio 5","Crie uma página de produto com imagem, descrição, preço e botão."],["Intermédio 6","Mini projeto: crie uma página de apresentação com várias secções."],
    ["Avançado 1","Crie uma página semântica usando header, nav, main, section e footer."],["Avançado 2","Crie um formulário de inscrição com vários tipos de input."],["Avançado 3","Crie uma página de artigos usando article e section."],["Avançado 4","Crie uma tabela com cabeçalho e pelo menos 5 linhas."],["Avançado 5","Crie uma página com navegação interna usando id e links #."],["Avançado 6","Projeto final: combine semântica, formulário, tabela, links, imagens e listas numa página completa."]
  ],
  css:[
    ["Iniciante 1","Mude a cor de um título e o fundo da página."],["Iniciante 2","Altere font-size, font-family e line-height de um parágrafo."],["Iniciante 3","Crie um cartão com padding, margin e border."],["Iniciante 4","Arredonde os cantos de um cartão e adicione uma sombra."],["Iniciante 5","Crie um botão colorido com padding e border-radius."],["Iniciante 6","Mini projeto: estilize um cartão de perfil completo."],
    ["Intermédio 1","Use Flexbox para colocar três cartões numa linha."],["Intermédio 2","Centralize um conteúdo horizontal e verticalmente com Flexbox."],["Intermédio 3","Crie um menu horizontal com gap."],["Intermédio 4","Crie um layout de duas colunas usando Grid."],["Intermédio 5","Adicione um efeito :hover a botões e cartões."],["Intermédio 6","Mini projeto: crie uma página de cartões responsiva."],
    ["Avançado 1","Use Grid para criar uma galeria de 6 itens."],["Avançado 2","Crie variáveis CSS para cores principais."],["Avançado 3","Crie uma media query para telemóvel e tablet."],["Avançado 4","Combine Grid e Flexbox num layout completo."],["Avançado 5","Crie um cabeçalho que se adapte a ecrãs pequenos."],["Avançado 6","Projeto final: crie uma landing page moderna, responsiva e organizada."]
  ],
  javascript:[
    ["Iniciante 1","Crie uma variável com o seu nome e mostre-a com console.log."],["Iniciante 2","Crie duas variáveis numéricas e mostre a soma."],["Iniciante 3","Use if para verificar se uma idade é maior ou igual a 18."],["Iniciante 4","Crie uma função que multiplica dois números."],["Iniciante 5","Crie um botão que mostre um alert ao clicar."],["Iniciante 6","Mini projeto: crie um botão que altere o texto de um título."],
    ["Intermédio 1","Crie um contador que aumenta ao clicar num botão."],["Intermédio 2","Crie um botão que diminua o contador."],["Intermédio 3","Use um array e um loop para mostrar vários nomes."],["Intermédio 4","Crie um campo e mostre o texto digitado na página."],["Intermédio 5","Crie uma condição que mostre uma mensagem conforme a idade."],["Intermédio 6","Mini projeto: contador com aumentar, diminuir e zerar."],
    ["Avançado 1","Crie uma lista dinâmica usando createElement e appendChild."],["Avançado 2","Valide se um campo está vazio antes de aceitar o formulário."],["Avançado 3","Crie uma lista onde cada item possa ser removido."],["Avançado 4","Crie um filtro que mostre apenas itens que combinam com a pesquisa."],["Avançado 5","Guarde uma pequena configuração usando localStorage."],["Avançado 6","Projeto final: crie uma mini aplicação interativa com DOM, eventos, arrays e localStorage."]
  ]
};
const courses=Object.entries(courseLevels).map(([id,c])=>({id,title:c.title,desc:c.desc,steps:Array.from({length:18},(_,i)=>courseExercises[id][i][0]),duration:"18 exercícios"}));

const challenges=[
{id:1,title:"Minha apresentação",lang:"HTML",level:"Fácil",className:"easy",goal:"Crie uma página com um título, um parágrafo sobre você e um botão.",steps:["Crie um h1 com o texto 'Sobre mim'.","Adicione um parágrafo.","Adicione um botão com o texto 'Saber mais'."],tip:"Comece por <h1>, <p> e <button>."},
{id:2,title:"Cartão de perfil",lang:"HTML + CSS",level:"Fácil",className:"easy",goal:"Crie um cartão com nome, profissão e uma pequena descrição.",steps:["Crie uma div com uma classe.","Adicione um título e dois textos.","Use CSS para colocar padding, borda e cantos arredondados."],tip:"Experimente border-radius e padding."},
{id:3,title:"Botão bonito",lang:"CSS",level:"Médio",className:"medium",goal:"Crie um botão com fundo colorido, texto branco, cantos arredondados e um efeito ao passar o rato.",steps:["Defina background-color.","Defina color e padding.","Use border-radius.","Use :hover para mudar a aparência."],tip:"Exemplo: button:hover { transform: scale(1.03); }"},
{id:4,title:"Layout com Flexbox",lang:"CSS",level:"Médio",className:"medium",goal:"Crie três cartões lado a lado usando Flexbox e faça-os adaptar-se ao ecrã pequeno.",steps:["Crie três elementos.","Use display:flex.","Use gap para o espaço.","Adicione uma media query para o telemóvel."],tip:"Use flex-wrap: wrap para facilitar a adaptação."},
{id:5,title:"Contador de cliques",lang:"JavaScript",level:"Difícil",className:"hard",goal:"Crie um botão que aumente um número sempre que for clicado.",steps:["Crie um número inicial.","Mostre o número na página.","Adicione um evento de clique.","Aumente o número e atualize o texto."],tip:"Você vai precisar de uma variável e addEventListener."},
{id:6,title:"Lista interativa",lang:"JavaScript",level:"Difícil",className:"hard",goal:"Crie um campo de texto e um botão que adicionem novos itens a uma lista.",steps:["Crie input, button e ul.","Leia o valor do input.","Crie um li.","Adicione o li à lista.","Limpe o input."],tip:"Use document.createElement e appendChild."}];

let projects=JSON.parse(localStorage.getItem("luzacode_projects_v1")||localStorage.getItem("luzacode_projects_v3")||"[]");
let currentProjectId=null;
let manualLanguage="html";
let manualTopic=0;
let courseProgress=JSON.parse(localStorage.getItem("luzacode_course_progress")||"{}");
let completedChallenges=JSON.parse(localStorage.getItem("luzacode_completed_challenges")||"[]");
let activeChallengeId=null;


// Firebase: contas e sincronização na nuvem (mantém o modo local como fallback).
let firebaseApp=null;
let firebaseAuth=null;
let firestoreDb=null;
let currentUser=null;
let cloudReady=false;

try{
  if(window.firebase && window.firebaseConfig && window.firebaseConfig.apiKey){
    firebaseApp=window.firebase.initializeApp(window.firebaseConfig);
    firebaseAuth=window.firebase.auth();
    firestoreDb=window.firebase.firestore();
    cloudReady=true;
  }
}catch(error){
  console.error("Erro ao iniciar Firebase:",error);
}

function updateAccountUI(){
  const status=$("#accountStatus"), btn=$("#accountBtn");
  if(!status||!btn) return;
  if(currentUser){
    status.textContent=currentUser.email||"Conta ligada";
    btn.textContent="Sair";
  }else{
    status.textContent=cloudReady?"Não iniciado":"Modo local";
    btn.textContent="Entrar";
  }
}

function showAuthModal(){
  if(!cloudReady){toast("A ligação ao Firebase ainda não está disponível.");return;}
  const old=$("#authModal"); if(old) old.remove();
  const modal=document.createElement("div"); modal.id="authModal"; modal.className="auth-modal";
  modal.innerHTML=`<div class="auth-box"><button class="auth-close" id="authClose">×</button><span class="eyebrow">LUZACODE</span><h2>Entrar na conta</h2><p>Crie uma conta ou entre para guardar projetos e progresso na nuvem.</p><input id="authEmail" type="email" placeholder="Email"><input id="authPassword" type="password" placeholder="Palavra-passe"><div class="auth-actions"><button class="primary" id="loginAuth">Entrar</button><button class="secondary" id="signupAuth">Criar conta</button></div><div class="auth-error" id="authError"></div></div>`;
  document.body.appendChild(modal);
  $("#authClose").onclick=()=>modal.remove();

  async function auth(mode){
    const email=$("#authEmail").value.trim(), password=$("#authPassword").value;
    $("#authError").textContent="";
    if(!email||!password){$("#authError").textContent="Preencha email e palavra-passe.";return;}
    if(password.length<6){$("#authError").textContent="A palavra-passe deve ter pelo menos 6 caracteres.";return;}
    try{
      if(mode==="login"){
        await firebaseAuth.signInWithEmailAndPassword(email,password);
      }else{
        await firebaseAuth.createUserWithEmailAndPassword(email,password);
      }
      modal.remove();
    }catch(error){
      console.error(error);
      const messages={
        "auth/email-already-in-use":"Este email já tem uma conta.",
        "auth/invalid-email":"O email não é válido.",
        "auth/weak-password":"A palavra-passe deve ter pelo menos 6 caracteres.",
        "auth/invalid-credential":"Email ou palavra-passe incorretos.",
        "auth/user-not-found":"Não existe uma conta com este email.",
        "auth/wrong-password":"Palavra-passe incorreta.",
        "auth/too-many-requests":"Muitas tentativas. Tente novamente mais tarde."
      };
      $("#authError").textContent=messages[error.code]||error.message||"Não foi possível concluir a operação.";
    }
  }
  $("#loginAuth").onclick=()=>auth("login");
  $("#signupAuth").onclick=()=>auth("signup");
}

function userCollection(name){
  return firestoreDb.collection("users").doc(currentUser.uid).collection(name);
}

async function loadCloudData(){
  if(!currentUser||!firestoreDb) return;
  try{
    const [cpSnap,chSnap,psSnap]=await Promise.all([
      userCollection("course_progress").get(),
      userCollection("challenge_progress").get(),
      userCollection("projects").orderBy("updated_at","desc").get()
    ]);
    courseProgress={};
    cpSnap.forEach(doc=>{const x=doc.data();courseProgress[x.course_id]=x.exercises_completed||0;});
    completedChallenges=[];
    chSnap.forEach(doc=>{const x=doc.data();if(x.completed) completedChallenges.push(Number(x.challenge_id));});
    projects=[];
    psSnap.forEach(doc=>{const x=doc.data();projects.push({id:doc.id,name:x.name,lang:x.language||"html",code:x.code||"",favorite:!!x.favorite,updated:x.updated_at||x.created_at||new Date().toISOString()});});
    localStorage.setItem("luzacode_course_progress",JSON.stringify(courseProgress));
    localStorage.setItem("luzacode_completed_challenges",JSON.stringify(completedChallenges));
    localStorage.setItem("luzacode_projects_v1",JSON.stringify(projects));
    renderProjects();renderCourses();renderChallenges();
  }catch(error){
    console.error("Erro ao carregar dados do Firebase:",error);
    toast("Não foi possível carregar os dados da nuvem.");
  }
}

async function syncProjectToCloud(p){
  if(!currentUser||!firestoreDb||!p) return;
  try{
    const id=String(p.id||Date.now());
    const ref=userCollection("projects").doc(id);
    await ref.set({name:p.name||"Meu projeto",language:p.lang||"html",code:p.code||"",favorite:!!p.favorite,updated_at:p.updated||new Date().toISOString(),created_at:p.created||p.updated||new Date().toISOString()},{merge:true});
    if(p.id!==id){p.id=id;currentProjectId=id;localStorage.setItem("luzacode_projects_v1",JSON.stringify(projects));}
  }catch(error){console.error(error);toast("Erro ao guardar na nuvem.");}
}

async function deleteProjectFromCloud(id){
  if(currentUser&&firestoreDb&&id){try{await userCollection("projects").doc(String(id)).delete();}catch(error){console.error(error);}}
}

async function syncCourseToCloud(id){
  if(!currentUser||!firestoreDb)return;
  try{await userCollection("course_progress").doc(String(id)).set({course_id:id,exercises_completed:courseProgress[id]||0,updated_at:new Date().toISOString()},{merge:true});}
  catch(error){console.error(error);}
}

async function syncChallengeToCloud(id,completed){
  if(!currentUser||!firestoreDb)return;
  try{await userCollection("challenge_progress").doc(String(id)).set({challenge_id:Number(id),completed:!!completed,completed_at:completed?new Date().toISOString():null},{merge:true});}
  catch(error){console.error(error);}
}

async function migrateLocalData(){
  if(!currentUser)return;
  const marker="luzacode_firebase_migrated_"+currentUser.uid;
  if(localStorage.getItem(marker)==="1") return;
  for(const p of projects) await syncProjectToCloud(p);
  for(const id of Object.keys(courseProgress)) await syncCourseToCloud(id);
  for(const id of completedChallenges) await syncChallengeToCloud(Number(id),true);
  localStorage.setItem(marker,"1");
}

function initFirebase(){
  updateAccountUI();
  if(!firebaseAuth) return;
  firebaseAuth.onAuthStateChanged(async user=>{
    currentUser=user||null;
    updateAccountUI();
    if(currentUser){
      await migrateLocalData();
      await loadCloudData();
    }
  });
}

if($("#accountBtn")) $("#accountBtn").onclick=async()=>{
  if(currentUser){await firebaseAuth.signOut();toast("Sessão terminada.");}
  else showAuthModal();
};
initFirebase();

function showPage(id){
  $$(".page").forEach(p=>p.classList.remove("active"));
  const page=$("#"+id); if(page) page.classList.add("active");
  $$(".nav-item[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
  if(["edit","projects","favorites"].includes(id)) renderProjects();
  if(id==="manual") renderManual();
  if(id==="courses") renderCourses();
  if(id==="challenges") renderChallenges();
  $("#sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
$$(".nav-item[data-page]").forEach(b=>b.onclick=()=>showPage(b.dataset.page));
$$("[data-go]").forEach(b=>b.onclick=()=>showPage(b.dataset.go));
$("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");

function toast(msg){
  const t=$("#toast"); t.textContent=msg; t.classList.add("show");
  clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>t.classList.remove("show"),2200);
}

function resetEditor(){
  currentProjectId=null;
  $("#projectName").value="Meu projeto";
  $("#language").value="html";
  $("#codeEditor").value=defaultCode;
  updateLines();
  $("#console").textContent="Novo projeto pronto. Clique em “Executar”.";
}
function newProject(){
  resetEditor(); showPage("write"); $("#codeEditor").focus(); toast("Novo projeto criado.");
}
$("#newBtn").onclick=newProject;
$("#newProjectFromPage").onclick=newProject;

function updateLines(){
  const count=$("#codeEditor").value.split("\n").length;
  $("#lineNums").textContent=Array.from({length:count},(_,i)=>i+1).join("\n");
}
$("#codeEditor").oninput=updateLines;
$("#codeEditor").onscroll=()=>$("#lineNums").scrollTop=$("#codeEditor").scrollTop;

$("#lineNumbers").onchange=e=>{
  $("#codePanel").classList.toggle("show-lines",e.target.checked); updateLines();
};

$("#fontPlus").onclick=()=>changeFont(1);
$("#fontMinus").onclick=()=>changeFont(-1);
function changeFont(amount){
  let size=parseInt(getComputedStyle($("#codeEditor")).fontSize);
  size=Math.max(10,Math.min(24,size+amount));
  $("#codeEditor").style.fontSize=size+"px"; $("#lineNums").style.fontSize=size+"px";
}

function enterFullscreen(){
  $("#codePanel").classList.add("fullscreen");
  $("#fullscreenBtn").style.display="none";
  $("#exitFullscreenBtn").style.display="inline-flex";
  document.body.classList.add("editor-fullscreen");
}
function exitFullscreen(){
  $("#codePanel").classList.remove("fullscreen");
  $("#fullscreenBtn").style.display="inline-flex";
  $("#exitFullscreenBtn").style.display="none";
  document.body.classList.remove("editor-fullscreen");
}
function enterResultFullscreen(){
  $("#resultPanel").classList.add("result-fullscreen");
  $("#resultFullscreenBtn").style.display="none";
  $("#resultExitFullscreenBtn").style.display="inline-flex";
}
function exitResultFullscreen(){
  $("#resultPanel").classList.remove("result-fullscreen");
  $("#resultFullscreenBtn").style.display="inline-flex";
  $("#resultExitFullscreenBtn").style.display="none";
}
$("#resultFullscreenBtn").onclick=enterResultFullscreen;
$("#resultExitFullscreenBtn").onclick=exitResultFullscreen;
$("#fullscreenBtn").onclick=enterFullscreen;
$("#exitFullscreenBtn").onclick=exitFullscreen;
document.addEventListener("keydown",e=>{
  if(e.key==="Escape" && $("#codePanel").classList.contains("fullscreen")) exitFullscreen();
  if(e.key==="Escape" && $("#resultPanel").classList.contains("result-fullscreen")) exitResultFullscreen();
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="s"){e.preventDefault();saveProject();}
});

function formatCode(){
  const ta=$("#codeEditor"), code=ta.value;
  if($("#language").value==="javascript"){
    ta.value=code.replace(/;\s*/g,";\n").replace(/\{\s*/g," {\n").replace(/\}\s*/g,"}\n").replace(/\n{2,}/g,"\n").trim();
  } else {
    ta.value=code.replace(/>\s*</g,">\n<").replace(/\n{2,}/g,"\n").trim();
  }
  updateLines(); toast("Código organizado.");
}
$("#formatBtn").onclick=formatCode;
$("#clearBtn").onclick=()=>{
  if(confirm("Limpar o editor? O código atual será substituído por vazio.")){
    $("#codeEditor").value=""; updateLines(); $("#console").textContent="Editor limpo.";
  }
};

function validateChallenge(code, lang, challengeId){
  const c=challenges.find(x=>x.id===challengeId);
  if(!c) return false;
  const source=String(code||"");
  const lower=source.toLowerCase();
  const has=(...terms)=>terms.every(t=>lower.includes(t));
  switch(challengeId){
    case 1: return has("<h1", "<p", "<button");
    case 2: return has("<div", "class=", "<h", "padding", "border", "border-radius");
    case 3: return lang==="html" && has("button", "background", "color", "padding", "border-radius", ":hover");
    case 4: return lang==="html" && has("display", "flex", "gap", "@media", "flex-wrap");
    case 5: return lang==="javascript" && has("addEventListener", "click", "++");
    case 6: return lang==="javascript" && has("createElement", "appendChild", "input", "button");
    default: return false;
  }
}

function runCode(){
  const code=$("#codeEditor").value, lang=$("#language").value;
  $("#console").textContent="Executado. As mensagens do console aparecem aqui.";
  if(lang==="javascript"){
    const safe=code.replace(/<\/script>/gi,"<\\/script>");
    $("#preview").srcdoc=`<!doctype html><html><body style="font-family:Arial;padding:20px"><script>
    console.log=(...a)=>parent.postMessage({type:"log",data:a.map(String).join(" ")},"*");
    console.error=(...a)=>parent.postMessage({type:"error",data:a.map(String).join(" ")},"*");
    try{${safe}}catch(e){parent.postMessage({type:"error",data:e.message},"*")}
    <\/script></body></html>`;
  } else {
    const safe=code.replace(/<script>/gi,'<script>console.log=(...a)=>parent.postMessage({type:"log",data:a.map(String).join(" ")},"*");console.error=(...a)=>parent.postMessage({type:"error",data:a.map(String).join(" ")},"*");');
    $("#preview").srcdoc=safe;
  }
  if(activeChallengeId!==null && !completedChallenges.includes(activeChallengeId)){
    if(validateChallenge(code,lang,activeChallengeId)){
      completedChallenges.push(activeChallengeId);
      localStorage.setItem("luzacode_completed_challenges",JSON.stringify(completedChallenges));
      if(currentUser) syncChallengeToCloud(activeChallengeId,true);
      activeChallengeId=null;
      toast("Desafio concluído!");
      renderChallenges();
    }else{
      toast("Código executado. Ainda faltam requisitos do desafio.");
    }
  }
}
$("#runBtn").onclick=runCode;
$("#refreshPreview").onclick=runCode;
window.addEventListener("message",e=>{
  if(!e.data || !e.data.type) return;
  $("#console").textContent += `\n${e.data.type==="error"?"ERRO: ":""}${e.data.data}`;
});

function saveProject(){
  const name=$("#projectName").value.trim()||"Meu projeto";
  const code=$("#codeEditor").value;
  const lang=$("#language").value;
  if(currentProjectId){
    const p=projects.find(x=>x.id===currentProjectId);
    if(p){p.name=name;p.code=code;p.lang=lang;p.updated=new Date().toISOString();}
  }else{
    const p={id:Date.now().toString(),name,code,lang,favorite:false,updated:new Date().toISOString()};
    projects.unshift(p); currentProjectId=p.id;
  }
  localStorage.setItem("luzacode_projects_v1",JSON.stringify(projects));
  renderProjects(); toast("Projeto guardado.");
  if(currentUser){ syncProjectToCloud(projects.find(x=>x.id===currentProjectId)); }
}
$("#saveBtn").onclick=saveProject;

function openProject(id){
  const p=projects.find(x=>x.id===id); if(!p) return;
  currentProjectId=p.id; $("#projectName").value=p.name; $("#codeEditor").value=p.code; $("#language").value=p.lang||"html";
  updateLines(); $("#console").textContent=`Projeto “${p.name}” aberto.`;
  showPage("write");
}
function deleteProject(id){
  if(!confirm("Tem certeza que deseja apagar este projeto?")) return;
  projects=projects.filter(p=>p.id!==id);
  localStorage.setItem("luzacode_projects_v1",JSON.stringify(projects));
  if(currentUser) deleteProjectFromCloud(id);
  renderProjects(); toast("Projeto apagado.");
}
function toggleFavorite(id){
  const p=projects.find(x=>x.id===id); if(!p) return;
  p.favorite=!p.favorite; localStorage.setItem("luzacode_projects_v1",JSON.stringify(projects)); if(currentUser) syncProjectToCloud(p); renderProjects();
}
function downloadProject(id){
  const p=projects.find(x=>x.id===id); if(!p) return;
  const safe=(p.name||"projeto").replace(/[^\w\- ]+/g,"").trim().replace(/\s+/g,"-").toLowerCase()||"projeto";
  downloadProjectZip(p,safe);
}
function ensureUtf8Html(code){
  let html=String(code||"");
  if(!/<html[\s>]/i.test(html)){
    html=`<!DOCTYPE html>\n<html lang="pt">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Projeto LUZACODE</title>\n</head>\n<body>\n${html}\n</body>\n</html>`;
  }else if(!/<meta[^>]+charset\s*=\s*["']?utf-8/i.test(html)){
    html=html.replace(/<head[^>]*>/i,m=>m+`\n<meta charset="UTF-8">`);
  }
  return html;
}
function downloadProjectZip(p,safe){
  const files={};
  if(p.lang==="javascript"){
    files["index.html"]=`<!DOCTYPE html>\n<html lang="pt">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>${escapeHtml(p.name||"Projeto LUZACODE")}</title>\n</head>\n<body>\n<script src="script.js"></script>\n</body>\n</html>`;
    files["script.js"]=String(p.code||"");
  }else{
    files["index.html"]=ensureUtf8Html(p.code);
  }
  files["README.txt"]=`Projeto criado no LUZACODE V1\n\nAbra o ficheiro index.html no navegador ou publique esta pasta num serviço de hospedagem web.\nOs ficheiros foram exportados em UTF-8 para preservar corretamente caracteres como á, à, ã, â, é, ê, í, ó, ô, õ, ú e ç.`;
  const blob=new Blob([createZip(files)],{type:"application/zip"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`${safe}.zip`; a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  toast("ZIP completo criado com UTF-8.");
}
function crc32(data){
  let crc=0xffffffff;
  for(let i=0;i<data.length;i++){ crc^=data[i]; for(let j=0;j<8;j++) crc=(crc>>>1)^(0xedb88320&-(crc&1)); }
  return (crc^0xffffffff)>>>0;
}
function u16(n){return new Uint8Array([n&255,(n>>>8)&255]);}
function u32(n){return new Uint8Array([n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255]);}
function concatBytes(parts){let total=parts.reduce((n,p)=>n+p.length,0),out=new Uint8Array(total),o=0;for(const p of parts){out.set(p,o);o+=p.length;}return out;}
function createZip(files){
  const enc=new TextEncoder(), locals=[], centrals=[]; let offset=0;
  for(const [name,content] of Object.entries(files)){
    const nb=enc.encode(name), data=enc.encode(String(content)); const crc=crc32(data);
    const local=concatBytes([u32(0x04034b50),u16(20),u16(0x0800),u16(0),u16(0),u16(0),u32(crc),u32(data.length),u32(data.length),u16(nb.length),u16(0),nb,data]);
    locals.push(local);
    const central=concatBytes([u32(0x02014b50),u16(20),u16(20),u16(0x0800),u16(0),u16(0),u16(0),u32(crc),u32(data.length),u32(data.length),u16(nb.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset),nb]);
    centrals.push(central); offset+=local.length;
  }
  const body=concatBytes(locals), central=concatBytes(centrals);
  const end=concatBytes([u32(0x06054b50),u16(0),u16(0),u16(centrals.length),u16(centrals.length),u32(central.length),u32(body.length),u16(0)]);
  return concatBytes([body,central,end]);
}

function projectCard(p){
  return `<article class="project-card">
    <div class="project-icon">&lt;/&gt;</div>
    <div class="project-info"><h3>${escapeHtml(p.name)}</h3><p>${p.lang==="javascript"?"JavaScript":"HTML + CSS + JavaScript"} • ${formatDate(p.updated)}</p></div>
    <div class="project-actions">
      <button onclick="openProject('${p.id}')">Abrir</button>
      <button onclick="downloadProject('${p.id}')">↓ Baixar ZIP</button>
      <button onclick="toggleFavorite('${p.id}')">${p.favorite?"★":"☆"}</button>
      <button class="danger" onclick="deleteProject('${p.id}')">Apagar</button>
    </div>
  </article>`;
}
function renderProjects(){
  const html=projects.length?projects.map(projectCard).join(""):`<div class="empty"><strong>Ainda não tem projetos.</strong><span>Clique em “+ Criar projeto” para começar.</span></div>`;
  $("#projectsGrid").innerHTML=html; $("#editProjects").innerHTML=html;
  const fav=projects.filter(p=>p.favorite);
  $("#favoritesGrid").innerHTML=fav.length?fav.map(projectCard).join(""):`<div class="empty"><strong>Nenhum favorito.</strong><span>Marque um projeto com ★ para encontrá-lo aqui.</span></div>`;
}
function formatDate(d){return new Date(d).toLocaleDateString("pt-PT",{day:"2-digit",month:"2-digit",year:"numeric"});}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}

function renderManual(){
  const filter=$("#manualFilter").value;
  const groups=manual.filter(m=>filter==="all"||m.id===filter);
  if(!groups.some(g=>g.id===manualLanguage)) manualLanguage=groups[0]?.id||"html";
  $("#manualNav").innerHTML=groups.map(g=>`<button class="${g.id===manualLanguage?"active":""}" onclick="selectManualLanguage('${g.id}')"><strong>${g.name}</strong><small>${g.items.length} temas</small></button>`).join("");
  const g=manual.find(x=>x.id===manualLanguage)||groups[0]; if(!g){$("#manualContent").innerHTML="";return;}
  $("#manualContent").innerHTML=`<div class="manual-intro"><span class="language-badge">${g.name}</span><h2>${g.name}</h2><p>${g.intro}</p></div>`+
  g.items.map((it,i)=>`<article class="topic-card"><div><span class="topic-number">${i+1}</span><div><h3>${it[0]}</h3><p><strong>O que é?</strong> ${it[1]}</p><p class="manual-answer"><strong>Para que serve?</strong> ${it[3]}</p><p class="manual-answer"><strong>Como escrever?</strong> Comece pelo seletor, abra as chaves <code>{ }</code> e escreva cada propriedade no formato <code>propriedade: valor;</code>. Use o exemplo acima como modelo e altere os valores conforme a sua página.</p></div></div><pre>${escapeHtml(it[2])}</pre><div class="why"><strong>Por que usar?</strong> ${it[3]}</div><div class="manual-result"><strong>Resultado:</strong> ${it[4]||"O navegador aplica as regras ao elemento selecionado."}</div><button onclick="useExample(${JSON.stringify(it[2]).replace(/</g,"&lt;")},'${g.id}')">Usar no editor →</button></article>`).join("");
}
function selectManualLanguage(id){manualLanguage=id;renderManual();}
$("#manualFilter").onchange=()=>renderManual();
function useExample(code,lang){
  currentProjectId=null; $("#projectName").value="Exemplo - "+(manual.find(x=>x.id===lang)?.name||lang); $("#language").value=lang==="javascript"?"javascript":"html"; $("#codeEditor").value=code; updateLines(); showPage("write"); toast("Exemplo colocado no editor.");
}

function courseLevel(done){
  if(done>=18) return {name:"Concluído",className:"completed",start:18,end:18};
  if(done>=12) return {name:"Avançado",className:"hard",start:12,end:18};
  if(done>=6) return {name:"Intermédio",className:"medium",start:6,end:12};
  return {name:"Iniciante",className:"easy",start:0,end:6};
}
function renderCourses(){
  $("#coursesGrid").innerHTML=courses.map(c=>{
    const done=Math.min(18,courseProgress[c.id]||0), level=courseLevel(done);
    const inLevel=Math.max(0,done-level.start), pct=done>=18?100:Math.round(inLevel/6*100);
    return `<article class="learning-card course-card"><div class="learning-top"><span class="level ${level.className}">${level.name}</span><span>18 exercícios</span></div><h3>${c.title}</h3><p>${c.desc}</p><div class="course-level-note">${done>=18?"Curso concluído":"Nível atual: "+level.name}</div><div class="progress"><i style="width:${pct}%"></i></div><small>${done>=18?"18/18 exercícios concluídos":`${inLevel}/6 neste nível • ${done}/18 no total`}</small><button class="primary" onclick="openCourse('${c.id}')">${done?"Continuar curso":"Começar curso"} →</button></article>`;
  }).join("");
  renderAchievements();
}
function openCourse(id){
  const c=courses.find(x=>x.id===id), info=courseLevels[id]; if(!c||!info) return;
  const done=Math.min(18,courseProgress[id]||0), level=courseLevel(done);
  const next=done<18?done:0;
  const exercise=done<18?courseExercises[id][done]:null;
  const modal=document.createElement("div"); modal.className="modal course-modal";
  modal.innerHTML=`<div class="modal-box course-box"><button class="modal-close" onclick="this.closest('.modal').remove()">×</button><span class="eyebrow">${level.name.toUpperCase()}</span><h2>${info.title}</h2><p>${info.desc}</p><div class="lesson-guide"><h3>Aprenda antes de praticar</h3><p><strong>O que é?</strong> ${info.topics[done%6][1]}</p><p><strong>Para que serve?</strong> ${id==='html'?"Para estruturar o conteúdo.":id==='css'?"Para definir a aparência e o layout.":"Para criar lógica e interatividade."}</p><p><strong>Como escrever?</strong> Veja o exemplo e observe a relação entre os elementos e os comandos.</p><pre>${escapeHtml(info.topics[done%6][2])}</pre><p><strong>Resultado:</strong> o código deve produzir exatamente a estrutura ou comportamento que o exercício pede.</p></div>${exercise?`<div class="exercise-box"><span class="level ${level.className}">${exercise[0]}</span><h3>Exercício ${done+1} de 18</h3><p>${exercise[1]}</p><ol><li>Leia o objetivo com atenção.</li><li>Abra o editor e escreva o código sozinho.</li><li>Execute e corrija os erros.</li><li>Quando terminar, volte aqui e marque como concluído.</li></ol><button class="primary" onclick="completeCourseStep('${id}',${next+1});this.closest('.modal').remove()">✓ Marcar exercício como concluído</button></div>`:`<div class="completed-course"><strong>🎉 Parabéns!</strong><p>Você concluiu os 18 exercícios de ${info.title}.</p></div>`}</div>`;
  document.body.appendChild(modal);
}
function completeCourseStep(id,next){
  const total=18; next=Math.max(0,Math.min(total,next));
  courseProgress[id]=next; localStorage.setItem("luzacode_course_progress",JSON.stringify(courseProgress)); renderCourses(); toast(next>=total?"Curso concluído!":next%6===0?"Nível concluído! Avançou para o próximo nível.":"Exercício concluído!");
}
function resetCourses(){
  if(!confirm("Reiniciar todos os cursos? O progresso dos 3 cursos será apagado.")) return;
  courseProgress={}; localStorage.setItem("luzacode_course_progress",JSON.stringify(courseProgress)); if(currentUser) courses.forEach(c=>syncCourseToCloud(c.id)); renderCourses(); toast("Cursos reiniciados.");
}
$("#resetCoursesBtn").onclick=resetCourses;
function renderAchievements(){
  const total=Object.values(courseProgress).reduce((a,b)=>a+Math.min(18,b||0),0), finished=courses.filter(c=>(courseProgress[c.id]||0)>=18).length;
  const items=[
    ["Primeiro passo",total>=1,"Conclua o primeiro exercício."],["6 exercícios",total>=6,"Conclua 6 exercícios."],["Primeiro nível",Object.values(courseProgress).some(v=>v>=6),"Chegue ao nível Intermédio em qualquer curso."],["Avançado",Object.values(courseProgress).some(v=>v>=12),"Chegue ao nível Avançado em qualquer curso."],["Curso concluído",finished>=1,"Conclua um curso inteiro."],["Mestre LUZACODE",finished===3,"Conclua os 3 cursos da V1."]
  ];
  $("#achievementsGrid").innerHTML=items.map(a=>`<article class="achievement ${a[1]?"unlocked":"locked"}"><div class="achievement-icon">${a[1]?"🏆":"🔒"}</div><div><h3>${a[0]}</h3><p>${a[2]}</p></div></article>`).join("");
}

function renderChallenges(){
  const order=["Fácil","Médio","Difícil"];
  const grouped=order.map(level=>({level,items:challenges.filter(c=>c.level===level)}));
  $("#challengesGrid").innerHTML=grouped.map(g=>`<div class="challenge-group"><div class="challenge-group-title"><h2>${g.level}</h2><span>${g.items.length} desafios</span></div><div class="learning-grid">${g.items.map(c=>`<article class="learning-card challenge-card"><div class="learning-top"><span class="level ${c.className}">${c.level}</span><span>${c.lang}</span></div><h3>${c.title}</h3><p>${c.goal}</p><details class="challenge-details"><summary>Ver instruções</summary><ol>${c.steps.map(x=>`<li>${x}</li>`).join("")}</ol><div class="tip"><strong>Dica:</strong> ${c.tip}</div></details><button class="primary" onclick="startChallenge(${c.id})">${completedChallenges.includes(c.id)?"Refazer desafio":"Começar desafio"} →</button></article>`).join("")}</div></div>`).join("");
  renderDailyChallenge();
}
function renderDailyChallenge(){
  const day=Math.floor(Date.now()/86400000), c=challenges[day%challenges.length], done=completedChallenges.includes(c.id);
  $("#dailyChallenge").innerHTML=`<div><span class="eyebrow">DESAFIO DO DIA</span><h2>${c.title}</h2><p>${c.goal}</p></div><button class="primary" onclick="startChallenge(${c.id})">${done?"Refazer":"Começar"} →</button>`;
}

function startChallenge(id){
  const c=challenges.find(x=>x.id===id);
  if(!c) return;
  $("#projectName").value="Desafio - "+c.title;
  $("#language").value=(c.lang.includes("JavaScript")?"javascript":"html");
  $("#codeEditor").value=`<!-- ${c.title} -->\n<!-- ${c.goal} -->\n\n`;
  updateLines(); $("#console").textContent="Desafio iniciado. Tente resolver sem copiar a solução.";
  activeChallengeId=id;
  showPage("write");
  toast("Desafio iniciado.");
}

function setupResize(){
  const handle=$("#resizeHandle"), workspace=$("#workspace");
  let dragging=false;
  handle.onmousedown=()=>dragging=true;
  window.onmouseup=()=>dragging=false;
  window.onmousemove=e=>{
    if(!dragging || $("#codePanel").classList.contains("fullscreen")) return;
    const rect=workspace.getBoundingClientRect();
    let percent=((e.clientX-rect.left)/rect.width)*100;
    percent=Math.max(30,Math.min(70,percent));
    $("#codePanel").style.flex=`0 0 ${percent}%`;
    $(".result-panel").style.flex=`1 1 ${100-percent}%`;
  };
}
setupResize();

$("#themeBtn").onclick=()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("luzacode_dark",document.body.classList.contains("dark")?"1":"0");
};
if(localStorage.getItem("luzacode_dark")==="1") document.body.classList.add("dark");

$("#globalSearch").addEventListener("input",e=>{
  const q=e.target.value.trim().toLowerCase();
  if(!q) return;
  const all=[...manual.flatMap(g=>g.items.map(i=>({name:i[0],type:g.name}))),...courses.map(c=>({name:c.title,type:"Curso"})),...challenges.map(c=>({name:c.title,type:"Desafio"}))];
  const found=all.filter(x=>(x.name+" "+x.type).toLowerCase().includes(q)).slice(0,8);
  if(found.length) showPage(found[0].type==="Curso"?"courses":found[0].type==="Desafio"?"challenges":"manual");
});

$("#codeEditor").value=defaultCode; updateLines(); renderProjects(); renderManual(); renderCourses(); renderChallenges();

// Ajustes de interação para toque no telemóvel — não alteram as funções do V1.
(function mobileTouchFix(){
  const editor = document.getElementById('codeEditor');
  if(editor){
    editor.addEventListener('touchstart',()=>{ editor.focus({preventScroll:true}); },{passive:true});
  }
  const sidebar=document.getElementById('sidebar');
  const menu=document.getElementById('menuBtn');
  if(sidebar && menu){
    document.addEventListener('click',e=>{
      if(window.innerWidth<=760 && sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target!==menu){
        sidebar.classList.remove('open');
      }
    });
  }
})();
