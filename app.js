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
  {
    "id": "html",
    "name": "HTML",
    "intro": "Manual completo de HTML: da estrutura básica até acessibilidade, organização profissional e um projeto completo.",
    "items": [
      {
        "level": 1,
        "title": "O que é HTML?",
        "what": "HTML significa HyperText Markup Language. É a linguagem de marcação usada para estruturar o conteúdo de páginas e documentos para a Web.",
        "serve": "Dizer ao navegador o que cada parte do conteúdo representa: título, parágrafo, imagem, link, formulário, tabela, seção e outros elementos.",
        "how": "Comece escolhendo o elemento adequado e escreva a abertura, o conteúdo e, quando necessário, o fechamento. HTML descreve estrutura; CSS cuida da aparência e JavaScript do comportamento.",
        "example": "<h1>Olá, LUZACODE!</h1>",
        "why": "É a base de praticamente toda interface web construída com HTML.",
        "result": "O navegador mostra um título principal com o texto indicado."
      },
      {
        "level": 1,
        "title": "Estrutura básica de uma página",
        "what": "Uma página HTML completa costuma ter DOCTYPE, html, head e body. O head guarda informações da página e o body contém o conteúdo apresentado ao utilizador.",
        "serve": "Criar uma base correta para qualquer página.",
        "how": "Use <!DOCTYPE html>, coloque lang na tag html e mantenha metadados no head e conteúdo no body.",
        "example": "<!DOCTYPE html>\n<html lang=\"pt\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Minha página</title>\n</head>\n<body>\n  <h1>Olá!</h1>\n</body>\n</html>",
        "why": "Uma estrutura consistente facilita manutenção, acessibilidade e indexação.",
        "result": "O navegador carrega uma página HTML com título e conteúdo visível."
      },
      {
        "level": 1,
        "title": "Títulos: h1 até h6",
        "what": "As tags h1, h2, h3, h4, h5 e h6 representam níveis de título. Elas devem formar uma hierarquia lógica do conteúdo.",
        "serve": "Organizar textos como capítulos e subtítulos.",
        "how": "Comece pelo título principal e use níveis inferiores para partes internas. Não escolha a tag apenas pelo tamanho visual; tamanho é tarefa do CSS.",
        "example": "<h1>Meu site</h1>\n<h2>Sobre mim</h2>\n<h3>Experiência</h3>",
        "why": "Uma boa hierarquia torna o conteúdo mais compreensível para pessoas, leitores de ecrã e mecanismos de pesquisa.",
        "result": "O conteúdo aparece com três níveis de títulos."
      },
      {
        "level": 1,
        "title": "Parágrafos",
        "what": "A tag p representa um parágrafo de texto.",
        "serve": "Apresentar textos normais, descrições, explicações e conteúdos corridos.",
        "how": "Coloque cada ideia ou bloco textual em uma tag p em vez de usar várias quebras de linha para estruturar texto.",
        "example": "<p>Estou a aprender HTML.</p>\n<p>Depois vou estudar CSS e JavaScript.</p>",
        "why": "Mantém o HTML semântico e facilita o controlo do espaçamento com CSS.",
        "result": "Os dois textos aparecem como parágrafos separados."
      },
      {
        "level": 1,
        "title": "Quebra de linha e linha horizontal",
        "what": "br força uma quebra de linha. hr representa uma mudança temática no conteúdo.",
        "serve": "Criar uma quebra específica ou separar temas dentro de um documento.",
        "how": "Use br apenas quando a quebra fizer parte do conteúdo, como um endereço. Use hr para uma mudança de assunto, e não apenas para desenhar uma linha.",
        "example": "<p>Luanda<br>Angola</p>\n<hr>\n<h2>Contacto</h2>",
        "why": "Evita usar elementos de apresentação para substituir estrutura semântica.",
        "result": "O endereço quebra de linha e uma separação temática aparece antes do contacto."
      },
      {
        "level": 1,
        "title": "Formatação de texto",
        "what": "HTML possui elementos semânticos como strong para importância e em para ênfase. b e i existem, mas representam mudanças de apresentação sem a mesma intenção semântica.",
        "serve": "Destacar partes do texto de forma compreensível.",
        "how": "Prefira strong para importância e em para ênfase quando o significado for relevante. Use CSS quando a alteração for apenas visual.",
        "example": "<p><strong>Atenção:</strong> prazo termina hoje.</p>\n<p><em>Leia com cuidado.</em></p>",
        "why": "A informação de importância não depende apenas da aparência.",
        "result": "O navegador apresenta partes destacadas e semanticamente marcadas."
      },
      {
        "level": 1,
        "title": "Listas não ordenadas",
        "what": "ul cria uma lista sem ordem e li representa cada item.",
        "serve": "Menus, tópicos, características e conjuntos em que a posição não é o mais importante.",
        "how": "Coloque todos os li dentro de ul e use CSS para controlar marcadores e layout.",
        "example": "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>",
        "why": "É a forma semântica e fácil de manter listas simples.",
        "result": "Os três itens aparecem como uma lista com marcadores."
      },
      {
        "level": 1,
        "title": "Listas ordenadas",
        "what": "ol cria uma lista em que a ordem dos itens é importante.",
        "serve": "Passos, classificações, instruções e sequências.",
        "how": "Escreva os itens dentro de li. O navegador numera automaticamente por padrão.",
        "example": "<ol>\n  <li>Abrir o editor</li>\n  <li>Escrever o código</li>\n  <li>Executar</li>\n</ol>",
        "why": "A ordem fica explícita no próprio HTML.",
        "result": "Os passos aparecem numerados."
      },
      {
        "level": 1,
        "title": "Listas de definição",
        "what": "dl, dt e dd representam termos e as suas descrições.",
        "serve": "Glossários, perguntas com respostas e listas de conceitos.",
        "how": "Use dt para o termo e dd para a respetiva definição.",
        "example": "<dl>\n  <dt>HTML</dt>\n  <dd>Estrutura do conteúdo web.</dd>\n</dl>",
        "why": "Representa melhor relações termo-descrição do que uma sequência de divs.",
        "result": "O termo HTML aparece acompanhado da sua descrição."
      },
      {
        "level": 1,
        "title": "Links",
        "what": "a cria hiperlinks. O atributo href indica o destino.",
        "serve": "Navegar entre páginas, secções, ficheiros, email e outros recursos.",
        "how": "Use <a href=\"destino\">texto</a>. Para abrir em outra aba, pode usar target=\"_blank\" e rel=\"noopener\".",
        "example": "<a href=\"https://example.com\">Visitar o site</a>\n<a href=\"#contacto\">Ir para contacto</a>",
        "why": "Links são a principal forma de navegação na Web.",
        "result": "Clicar no texto leva ao destino indicado."
      },
      {
        "level": 1,
        "title": "Imagens",
        "what": "img apresenta uma imagem e usa src para o caminho do ficheiro e alt para uma descrição textual.",
        "serve": "Mostrar fotos, ilustrações, ícones e outros conteúdos visuais.",
        "how": "Use um caminho correto em src e escreva alt descritivo. Para uma imagem puramente decorativa, alt pode ser vazio.",
        "example": "<img src=\"img/foto.jpg\" alt=\"Pessoa a programar no computador\">",
        "why": "alt melhora acessibilidade e também ajuda quando a imagem não é carregada.",
        "result": "A imagem é apresentada com uma descrição alternativa disponível para tecnologias assistivas."
      },
      {
        "level": 1,
        "title": "Comentários",
        "what": "Comentários são trechos de código ignorados pelo navegador e escritos entre <!-- e -->.",
        "serve": "Documentar o código, explicar uma decisão ou marcar uma parte do projeto.",
        "how": "Escreva um comentário curto e útil, sem colocar informações secretas.",
        "example": "<!-- Cabeçalho principal -->\n<header>...</header>",
        "why": "Ajuda quem lê o projeto sem alterar o resultado visual.",
        "result": "O comentário não aparece na página."
      },
      {
        "level": 1,
        "title": "Entidades HTML",
        "what": "Entidades representam caracteres especiais quando escrever o próprio símbolo pode ser interpretado pelo HTML.",
        "serve": "Mostrar caracteres como <, >, &, aspas especiais, espaços não quebráveis e símbolos específicos.",
        "how": "Use formas como &lt;, &gt;, &amp; e &quot; quando necessário.",
        "example": "<p>Use &lt;h1&gt; para criar um título.</p>",
        "why": "Evita que o navegador confunda texto com marcação HTML.",
        "result": "O texto mostra literalmente <h1> na página."
      },
      {
        "level": 1,
        "title": "Atributos",
        "what": "Atributos fornecem informações adicionais sobre um elemento, por exemplo id, class, href, src, alt, title e data-*.",
        "serve": "Configurar comportamento, identificação, relações e dados extras de elementos.",
        "how": "Coloque os atributos dentro da tag de abertura no formato nome=\"valor\".",
        "example": "<p class=\"destaque\" id=\"intro\">Olá!</p>",
        "why": "Atributos permitem ligar HTML a CSS, JavaScript e outras ferramentas.",
        "result": "O parágrafo passa a ter uma classe e um identificador."
      },
      {
        "level": 1,
        "title": "id e class",
        "what": "id identifica um elemento de forma única dentro do documento. class agrupa elementos que partilham uma característica ou estilo.",
        "serve": "Selecionar e organizar elementos.",
        "how": "Use id para algo que deve ser único e class para grupos reutilizáveis.",
        "example": "<h1 id=\"titulo\">LUZACODE</h1>\n<p class=\"destaque\">Aprender é praticar.</p>",
        "why": "A distinção entre id e class ajuda a escrever CSS e JavaScript previsíveis.",
        "result": "O título e o parágrafo podem ser selecionados individualmente ou por classe."
      },
      {
        "level": 1,
        "title": "div e span",
        "what": "div é um recipiente genérico de bloco e span é um recipiente genérico em linha. Nenhum deles fornece significado semântico por si só.",
        "serve": "Agrupar conteúdo quando não existe um elemento semântico melhor.",
        "how": "Use div para blocos e span para pequenos trechos dentro de uma linha. Prefira elementos semânticos quando existirem.",
        "example": "<div class=\"cartao\">\n  <h2>Perfil</h2>\n  <span class=\"status\">Online</span>\n</div>",
        "why": "Servem como peças neutras para layout e pequenas marcações.",
        "result": "O conteúdo fica agrupado sem adicionar um significado específico ao documento."
      },
      {
        "level": 2,
        "title": "Elementos semânticos",
        "what": "Elementos como header, nav, main, section, article, aside e footer descrevem a função das partes da página.",
        "serve": "Construir uma estrutura clara e significativa.",
        "how": "Use cada elemento quando corresponder ao papel do conteúdo. Evite criar uma página inteira apenas com divs.",
        "example": "<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<section>...</section>\n<footer>...</footer>",
        "why": "Melhora leitura, acessibilidade e manutenção.",
        "result": "A página fica dividida em regiões com significado."
      },
      {
        "level": 2,
        "title": "figure e figcaption",
        "what": "figure agrupa uma imagem, gráfico, ilustração ou outro conteúdo independente, e figcaption fornece a legenda.",
        "serve": "Associar uma legenda ao conteúdo visual.",
        "how": "Coloque o conteúdo dentro de figure e a legenda em figcaption.",
        "example": "<figure>\n  <img src=\"grafico.png\" alt=\"Gráfico de vendas\">\n  <figcaption>Vendas no primeiro trimestre.</figcaption>\n</figure>",
        "why": "Mantém conteúdo e legenda relacionados semanticamente.",
        "result": "A imagem aparece acompanhada da sua legenda."
      },
      {
        "level": 2,
        "title": "Áudio",
        "what": "audio incorpora som e pode apresentar controles para o utilizador.",
        "serve": "Podcasts, música, aulas e outros conteúdos sonoros.",
        "how": "Use controls para mostrar os controlos e, quando necessário, source para formatos alternativos.",
        "example": "<audio controls>\n  <source src=\"audio/aula.mp3\" type=\"audio/mpeg\">\n  O navegador não suporta áudio.\n</audio>",
        "why": "Permite conteúdo multimédia sem depender obrigatoriamente de um player externo.",
        "result": "O navegador mostra os controlos do áudio quando o formato é suportado."
      },
      {
        "level": 2,
        "title": "Vídeo",
        "what": "video incorpora conteúdo de vídeo e pode ter controles, poster, largura, altura e múltiplas fontes.",
        "serve": "Aulas, demonstrações, anúncios e outros conteúdos de vídeo.",
        "how": "Use controls para o utilizador controlar a reprodução e forneça poster quando quiser uma imagem inicial.",
        "example": "<video controls width=\"640\" poster=\"capa.jpg\">\n  <source src=\"video/aula.mp4\" type=\"video/mp4\">\n</video>",
        "why": "Facilita a inclusão de vídeo diretamente na página.",
        "result": "O vídeo aparece com controlos e uma imagem de capa quando configurada."
      },
      {
        "level": 2,
        "title": "iframe",
        "what": "iframe incorpora outro documento dentro da página, como uma página externa ou um conteúdo de um serviço.",
        "serve": "Mapas, vídeos, ferramentas e conteúdos incorporáveis.",
        "how": "Defina src e dimensões adequadas. Use apenas fontes confiáveis e considere restrições de segurança e privacidade.",
        "example": "<iframe src=\"https://example.com\" title=\"Exemplo incorporado\"></iframe>",
        "why": "Permite incorporar recursos sem copiar todo o conteúdo para a sua página.",
        "result": "O documento permitido é apresentado dentro da área do iframe."
      },
      {
        "level": 2,
        "title": "Botões",
        "what": "button representa uma ação que o utilizador pode realizar.",
        "serve": "Enviar formulários, abrir menus, alterar conteúdo ou executar ações com JavaScript.",
        "how": "Use texto claro. Se o botão não for de formulário, normalmente type=\"button\" evita envio acidental.",
        "example": "<button type=\"button\">Abrir menu</button>",
        "why": "É semanticamente correto para ações.",
        "result": "O utilizador vê um botão pronto para receber uma ação."
      },
      {
        "level": 2,
        "title": "Formulários",
        "what": "form agrupa campos e define como os dados podem ser enviados.",
        "serve": "Inscrições, login, pesquisa, contacto, compras e recolha de dados.",
        "how": "Associe labels aos campos, escolha tipos adequados e use action/method quando houver envio tradicional.",
        "example": "<form action=\"/enviar\" method=\"post\">\n  <label for=\"nome\">Nome</label>\n  <input id=\"nome\" name=\"nome\" required>\n  <button type=\"submit\">Enviar</button>\n</form>",
        "why": "Formulários acessíveis e claros reduzem erros do utilizador.",
        "result": "O formulário mostra um campo de nome e um botão de envio."
      },
      {
        "level": 2,
        "title": "Tipos de input",
        "what": "input pode ter tipos como text, email, password, number, date, time, checkbox, radio, file, color, range, search, url, tel e hidden.",
        "serve": "Criar campos adequados a diferentes dados.",
        "how": "Escolha o type de acordo com o conteúdo e use name, id e label. Acrescente atributos como required, min, max, maxlength e placeholder quando fizer sentido.",
        "example": "<label for=\"email\">Email</label>\n<input id=\"email\" name=\"email\" type=\"email\" required>",
        "why": "O tipo correto melhora validação e experiência em teclado e telemóvel.",
        "result": "O navegador apresenta um campo adequado para email e valida o formato básico."
      },
      {
        "level": 2,
        "title": "textarea",
        "what": "textarea cria uma área para texto com várias linhas.",
        "serve": "Mensagens, comentários, descrições e textos maiores.",
        "how": "Use label associado, rows/cols ou CSS para dimensionar e name para identificar o valor enviado.",
        "example": "<label for=\"mensagem\">Mensagem</label>\n<textarea id=\"mensagem\" name=\"mensagem\" rows=\"5\"></textarea>",
        "why": "É mais apropriado do que input para textos longos.",
        "result": "O utilizador recebe uma caixa de texto com várias linhas."
      },
      {
        "level": 2,
        "title": "select, option e optgroup",
        "what": "select cria uma lista de opções; option representa cada escolha e optgroup pode agrupar opções.",
        "serve": "Escolher uma opção entre várias alternativas.",
        "how": "Use label, name e valores claros. Para muitas opções, agrupe por categorias quando isso ajudar.",
        "example": "<label for=\"linguagem\">Linguagem</label>\n<select id=\"linguagem\" name=\"linguagem\">\n  <option value=\"html\">HTML</option>\n  <option value=\"css\">CSS</option>\n</select>",
        "why": "Mantém escolhas estruturadas e acessíveis.",
        "result": "O navegador apresenta um seletor com duas linguagens."
      },
      {
        "level": 2,
        "title": "Tabelas",
        "what": "table estrutura dados tabulares em linhas e colunas, usando thead, tbody, tr, th e td.",
        "serve": "Horários, preços, resultados e outros dados realmente tabulares.",
        "how": "Use th para cabeçalhos e scope quando ajudar a explicar a relação entre cabeçalho e células.",
        "example": "<table>\n  <thead><tr><th scope=\"col\">Nome</th><th scope=\"col\">Nota</th></tr></thead>\n  <tbody><tr><td>Ana</td><td>18</td></tr></tbody>\n</table>",
        "why": "Melhora compreensão dos dados por pessoas e tecnologias assistivas.",
        "result": "Os dados são organizados em linhas e colunas com cabeçalho."
      },
      {
        "level": 2,
        "title": "Ligar CSS ao HTML",
        "what": "Um arquivo CSS externo pode ser ligado com link rel=\"stylesheet\" dentro do head.",
        "serve": "Separar estrutura e aparência e reutilizar estilos.",
        "how": "Crie style.css e ligue-o no head com href correto.",
        "example": "<link rel=\"stylesheet\" href=\"style.css\">",
        "why": "Facilita manutenção e reutilização de estilos.",
        "result": "O navegador aplica as regras do arquivo CSS à página."
      },
      {
        "level": 2,
        "title": "Ligar JavaScript ao HTML",
        "what": "JavaScript pode ser incluído com script src ou escrito em um bloco script.",
        "serve": "Adicionar comportamento e interatividade.",
        "how": "Prefira arquivo externo para projetos organizados e considere defer para carregar o script depois de analisar o HTML.",
        "example": "<script src=\"app.js\" defer></script>",
        "why": "Mantém o código separado e evita atrasar a análise do documento de forma desnecessária.",
        "result": "O navegador carrega app.js e executa-o quando o documento estiver pronto para isso."
      },
      {
        "level": 2,
        "title": "Caminhos de ficheiros",
        "what": "Caminhos indicam onde estão imagens, CSS, JavaScript e outros recursos. Podem ser relativos ou absolutos.",
        "serve": "Ligar corretamente os ficheiros do projeto.",
        "how": "Entenda ./ para a pasta atual, ../ para a pasta anterior e caminhos como assets/img/foto.jpg para pastas internas.",
        "example": "<img src=\"assets/img/foto.jpg\" alt=\"Foto\">\n<link rel=\"stylesheet\" href=\"css/style.css\">",
        "why": "Grande parte dos erros de recursos em projetos simples vem de caminhos incorretos.",
        "result": "Os ficheiros são encontrados no local correto."
      },
      {
        "level": 2,
        "title": "title e meta",
        "what": "title define o título da aba. Meta tags fornecem informações como codificação, viewport, descrição e outras configurações.",
        "serve": "Definir informações essenciais da página.",
        "how": "Use charset UTF-8, viewport para dispositivos móveis e uma description coerente quando necessário.",
        "example": "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta name=\"description\" content=\"Manual de HTML do LUZACODE.\">\n<title>Manual de HTML</title>",
        "why": "Melhora compatibilidade e apresentação da página.",
        "result": "A página usa a codificação correta, adapta-se ao ecrã e tem um título definido."
      },
      {
        "level": 2,
        "title": "Favicon",
        "what": "Um favicon é o pequeno ícone associado à página ou aba do navegador.",
        "serve": "Dar identidade visual à página.",
        "how": "Crie um ficheiro de ícone e ligue-o no head.",
        "example": "<link rel=\"icon\" href=\"favicon.ico\">",
        "why": "Ajuda o utilizador a reconhecer a página rapidamente.",
        "result": "O navegador pode mostrar o ícone junto ao título da aba."
      },
      {
        "level": 3,
        "title": "Atributos globais",
        "what": "Atributos globais podem ser usados em muitos elementos, como class, id, title, hidden, tabindex, lang, dir e contenteditable.",
        "serve": "Configurar características gerais dos elementos.",
        "how": "Use cada atributo apenas quando a intenção estiver clara e não abuse de title como substituto de conteúdo visível.",
        "example": "<p lang=\"pt\" title=\"Informação adicional\">Texto</p>",
        "why": "Permitem configurações consistentes sem criar elementos especiais.",
        "result": "O elemento recebe os atributos globais definidos."
      },
      {
        "level": 3,
        "title": "data-*",
        "what": "Atributos data-* guardam pequenas informações personalizadas no próprio HTML.",
        "serve": "Ligar dados simples do HTML a JavaScript sem inventar atributos inválidos.",
        "how": "Use nomes como data-id ou data-status e leia-os em JavaScript por dataset.",
        "example": "<button data-id=\"42\" data-status=\"ativo\">Abrir</button>",
        "why": "É uma ponte simples entre marcação e lógica.",
        "result": "O botão passa a carregar dados personalizados que podem ser lidos por JavaScript."
      },
      {
        "level": 3,
        "title": "Acessibilidade básica",
        "what": "HTML acessível usa semântica correta, labels associados, alt adequado, títulos coerentes, foco pelo teclado e botões/links com funções corretas.",
        "serve": "Permitir que mais pessoas utilizem a página, inclusive com teclado e tecnologias assistivas.",
        "how": "Escolha o elemento certo, não esconda informações importantes apenas em CSS, associe label a input e mantenha ordem lógica de títulos.",
        "example": "<label for=\"nome\">Nome</label>\n<input id=\"nome\" name=\"nome\">",
        "why": "A acessibilidade deve começar na estrutura HTML, não apenas depois com CSS e JavaScript.",
        "result": "O formulário e o conteúdo ficam mais compreensíveis para diferentes utilizadores."
      },
      {
        "level": 3,
        "title": "ARIA: quando usar",
        "what": "ARIA fornece informações adicionais para tecnologias assistivas quando a semântica HTML nativa não é suficiente.",
        "serve": "Descrever estados, relações e papéis específicos em interfaces mais complexas.",
        "how": "Prefira primeiro elementos HTML nativos como button, nav e dialog. Use ARIA de forma complementar e correta.",
        "example": "<button aria-expanded=\"false\">Menu</button>",
        "why": "ARIA usada de forma incorreta pode piorar a acessibilidade.",
        "result": "A interface informa um estado que pode ser atualizado por JavaScript."
      },
      {
        "level": 3,
        "title": "details e summary",
        "what": "details cria um bloco expansível e summary funciona como o título clicável.",
        "serve": "FAQ, informações opcionais, explicações e áreas que o utilizador pode abrir ou fechar.",
        "how": "Coloque summary como primeiro filho e o conteúdo que deve expandir depois.",
        "example": "<details>\n  <summary>Ver explicação</summary>\n  <p>HTML organiza o conteúdo da página.</p>\n</details>",
        "why": "É uma solução HTML nativa para conteúdo revelável.",
        "result": "O utilizador pode abrir e fechar a explicação sem JavaScript."
      },
      {
        "level": 3,
        "title": "dialog",
        "what": "dialog representa uma caixa de diálogo que pode ser aberta e fechada.",
        "serve": "Janelas modais e diálogos com semântica própria.",
        "how": "Use JavaScript com showModal(), show() e close() conforme a necessidade e forneça um modo claro de fechar.",
        "example": "<dialog id=\"caixa\">\n  <p>Olá!</p>\n  <button onclick=\"caixa.close()\">Fechar</button>\n</dialog>",
        "why": "É mais adequado do que criar modais complexos apenas com div quando a semântica de diálogo é necessária.",
        "result": "O navegador possui uma caixa de diálogo que pode ser aberta e fechada."
      },
      {
        "level": 3,
        "title": "picture, source e imagens responsivas",
        "what": "picture permite escolher fontes de imagem diferentes e source pode definir condições como largura ou tipo de ficheiro.",
        "serve": "Entregar imagens apropriadas a diferentes ecrãs e formatos.",
        "how": "Defina fontes alternativas e mantenha img como fallback com alt.",
        "example": "<picture>\n  <source media=\"(max-width: 600px)\" srcset=\"foto-pequena.jpg\">\n  <img src=\"foto-grande.jpg\" alt=\"Paisagem\">\n</picture>",
        "why": "Pode melhorar desempenho e adaptação visual.",
        "result": "Em ecrãs pequenos, o navegador pode escolher a imagem apropriada."
      },
      {
        "level": 3,
        "title": "Validação HTML",
        "what": "Atributos como required, min, max, minlength, maxlength, pattern, type, step e accept permitem validações básicas no navegador.",
        "serve": "Reduzir entradas inválidas antes do envio.",
        "how": "Use as regras adequadas ao tipo de campo, mas lembre-se de que validação no navegador não substitui validação no servidor.",
        "example": "<input type=\"email\" required>\n<input type=\"number\" min=\"1\" max=\"100\">",
        "why": "Melhora a experiência e evita erros simples.",
        "result": "O navegador impede o envio quando as regras locais não são cumpridas."
      },
      {
        "level": 3,
        "title": "Atributos target, download e rel",
        "what": "target controla onde um link abre, download sugere descarregar um ficheiro e rel descreve a relação do link.",
        "serve": "Controlar navegação e downloads.",
        "how": "Ao usar target=\"_blank\", combine rel=\"noopener\". Use download quando fizer sentido para um ficheiro.",
        "example": "<a href=\"manual.pdf\" download>Baixar manual</a>\n<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">Abrir</a>",
        "why": "Evita comportamentos ambíguos e torna a intenção do link mais clara.",
        "result": "O primeiro link sugere descarregar e o segundo abre em nova aba de forma mais segura."
      },
      {
        "level": 4,
        "title": "Relação entre HTML, CSS e JavaScript",
        "what": "HTML estrutura, CSS apresenta e JavaScript dá comportamento. Os três trabalham juntos, mas têm responsabilidades diferentes.",
        "serve": "Organizar um projeto web de forma lógica.",
        "how": "Primeiro construa a estrutura HTML, depois estilize com CSS e por fim adicione comportamento com JavaScript.",
        "example": "<button id=\"btn\">Contar</button>\n<style>#btn{padding:10px}</style>\n<script>document.querySelector('#btn').onclick=()=>alert('Clicou!');</script>",
        "why": "Separar responsabilidades torna o projeto mais fácil de entender e manter.",
        "result": "O botão tem estrutura, aparência e uma ação definida pelas três tecnologias."
      },
      {
        "level": 4,
        "title": "Organização profissional de ficheiros",
        "what": "Um projeto HTML pode separar index.html, css/style.css, js/app.js, imagens e outros recursos em pastas claras.",
        "serve": "Manter projetos maiores organizados.",
        "how": "Use nomes previsíveis e caminhos consistentes. Um exemplo simples é index.html + css + js + assets.",
        "example": "meu-projeto/\n├─ index.html\n├─ css/\n│  └─ style.css\n├─ js/\n│  └─ app.js\n└─ assets/\n   └─ img/",
        "why": "A organização reduz erros e facilita evolução do projeto.",
        "result": "Os ficheiros ficam separados por responsabilidade e podem crescer sem virar um bloco desorganizado."
      },
      {
        "level": 4,
        "title": "SEO básico no HTML",
        "what": "SEO envolve várias práticas. No HTML, títulos, headings coerentes, links claros, texto útil e meta description podem ajudar a comunicar o conteúdo.",
        "serve": "Dar aos motores de pesquisa uma estrutura mais clara.",
        "how": "Crie title específico, description útil, headings coerentes e conteúdo realmente relevante. Não use palavras-chave de forma artificial.",
        "example": "<title>Curso de HTML para iniciantes | LUZACODE</title>\n<meta name=\"description\" content=\"Aprenda HTML passo a passo no manual do LUZACODE.\">",
        "why": "SEO é mais do que metas; o conteúdo e a experiência também são importantes.",
        "result": "A página apresenta metadados básicos e uma estrutura de conteúdo compreensível."
      },
      {
        "level": 4,
        "title": "Desempenho e carregamento",
        "what": "HTML pode contribuir para desempenho quando evita recursos desnecessários, usa imagens adequadas, carrega scripts de forma correta e não cria estruturas excessivas.",
        "serve": "Fazer a página carregar de forma eficiente.",
        "how": "Use imagens otimizadas, lazy loading quando apropriado, scripts com defer quando possível e uma estrutura HTML simples.",
        "example": "<img src=\"foto.jpg\" alt=\"Paisagem\" loading=\"lazy\">\n<script src=\"app.js\" defer></script>",
        "why": "Uma estrutura simples e recursos bem carregados melhoram a experiência.",
        "result": "Os recursos podem ser carregados de forma mais eficiente sem mudar o conteúdo."
      },
      {
        "level": 4,
        "title": "Projeto HTML completo",
        "what": "Um projeto inicial pode combinar semântica, navegação, conteúdo, imagem, formulário, CSS e JavaScript.",
        "serve": "Ver como as peças aprendidas se juntam num projeto real.",
        "how": "Crie a estrutura do documento, áreas semânticas, estilos externos e um script para a interação.",
        "example": "<!DOCTYPE html>\n<html lang=\"pt\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Meu projeto</title>\n  <link rel=\"stylesheet\" href=\"css/style.css\">\n</head>\n<body>\n  <header><h1>Meu projeto</h1></header>\n  <main>\n    <section><h2>Sobre</h2><p>Conteúdo.</p></section>\n    <section><h2>Contacto</h2>\n      <form><label for=\"email\">Email</label><input id=\"email\" type=\"email\"><button>Enviar</button></form>\n    </section>\n  </main>\n  <script src=\"js/app.js\" defer></script>\n</body>\n</html>",
        "why": "É um modelo útil para passar do estudo para projetos próprios.",
        "result": "A página possui estrutura, conteúdo, formulário, CSS e JavaScript preparados para evolução."
      }
    ]
  },
  {
    "id": "css",
    "name": "CSS",
    "intro": "Manual completo de CSS: sintaxe, seletores, layout, responsividade, acessibilidade, organização e técnicas modernas.",
    "items": [
      {
        "level": 1,
        "title": "O que é CSS?",
        "what": "CSS significa Cascading Style Sheets. É a linguagem usada para definir a aparência e a apresentação de documentos HTML.",
        "serve": "Controlar cores, fontes, tamanhos, espaços, bordas, alinhamentos, posicionamento, animações e responsividade.",
        "how": "Uma regra normalmente tem seletor + bloco de declarações. Dentro das chaves, escreva propriedade: valor;.",
        "example": "p { color: blue; font-size: 18px; }",
        "why": "Separa estrutura e apresentação.",
        "result": "Todos os parágrafos ficam azuis e com 18px."
      },
      {
        "level": 1,
        "title": "As três formas de aplicar CSS",
        "what": "CSS pode ser externo, interno ou inline.",
        "serve": "Escolher como organizar os estilos.",
        "how": "Prefira arquivo externo para projetos maiores; use style interno para casos locais e inline apenas quando for realmente necessário.",
        "example": "<link rel=\"stylesheet\" href=\"style.css\">\n<style>p{color:blue}</style>\n<p style=\"color:red\">Texto</p>",
        "why": "A forma externa facilita reutilização e manutenção.",
        "result": "Os três exemplos conseguem aplicar estilos, mas são adequados a situações diferentes."
      },
      {
        "level": 1,
        "title": "Seletores",
        "what": "Seletores dizem ao CSS quais elementos devem receber regras.",
        "serve": "Selecionar tags, classes, IDs, atributos e relações entre elementos.",
        "how": "Use seletor de tag para regras gerais, .classe para grupos e #id apenas quando for necessário identificar algo único.",
        "example": "p { color: #333; }\n.caixa { padding: 20px; }\n#titulo { font-size: 32px; }",
        "why": "É a base para controlar exatamente o que será estilizado.",
        "result": "Cada elemento recebe o estilo correspondente ao seletor que o encontra."
      },
      {
        "level": 1,
        "title": "Classes e IDs",
        "what": "Classe é reutilizável. ID deve ser único no documento.",
        "serve": "Criar estilos e identificações específicas.",
        "how": "No HTML use class=\"nome\" e id=\"nome\". No CSS, classe começa com . e ID com #.",
        "example": ".botao { padding: 10px 16px; }\n#principal { max-width: 900px; }",
        "why": "Ajuda a manter seletores previsíveis.",
        "result": "Vários elementos podem compartilhar .botao e apenas um elemento usar #principal."
      },
      {
        "level": 1,
        "title": "Cascata, especificidade e herança",
        "what": "Quando várias regras combinam com um elemento, o navegador resolve conflitos considerando origem, importância, especificidade e ordem das regras. Muitas propriedades também são herdadas.",
        "serve": "Entender por que uma regra parece não funcionar.",
        "how": "Evite excesso de seletores e !important. Escreva regras simples e verifique no DevTools qual regra venceu.",
        "example": "p { color: blue; }\n.article p { color: green; }",
        "why": "Sem compreender a cascata, fica fácil criar CSS confuso.",
        "result": "O parágrafo recebe a regra com maior prioridade segundo a cascata."
      },
      {
        "level": 1,
        "title": "Cores",
        "what": "color define a cor do texto e propriedades como background-color definem fundos.",
        "serve": "Criar contraste e identidade visual.",
        "how": "Use nomes, hexadecimal, rgb/rgba, hsl/hsla ou outras formas suportadas. Garanta contraste suficiente.",
        "example": "body { color: #222; background-color: #f5f7fb; }",
        "why": "Cor influencia leitura e aparência.",
        "result": "O texto e o fundo assumem as cores definidas."
      },
      {
        "level": 1,
        "title": "Unidades",
        "what": "CSS usa unidades absolutas como px e unidades relativas como %, em, rem, vw, vh e outras.",
        "serve": "Definir tamanhos e espaços com precisão e flexibilidade.",
        "how": "Use rem para tamanhos de texto e espaçamentos relacionados ao documento quando apropriado; use % e unidades de viewport para relações com o contêiner ou ecrã.",
        "example": "h1 { font-size: 2rem; }\n.container { width: 90%; }",
        "why": "Escolher a unidade certa melhora responsividade.",
        "result": "O título cresce com a escala da fonte e o contêiner usa uma largura relativa."
      },
      {
        "level": 1,
        "title": "Tipografia",
        "what": "font-family escolhe fontes; font-size define tamanho; font-weight define peso; line-height controla a altura da linha; letter-spacing ajusta o espaço entre caracteres.",
        "serve": "Tornar texto legível e criar hierarquia visual.",
        "how": "Escolha fontes simples, contraste adequado e line-height confortável.",
        "example": "body {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n}",
        "why": "Boa tipografia melhora a leitura mais do que efeitos decorativos.",
        "result": "O texto aparece com fonte e espaçamento definidos."
      },
      {
        "level": 1,
        "title": "Box model: width, height, padding, border e margin",
        "what": "Todo elemento de caixa possui conteúdo, padding, border e margin.",
        "serve": "Controlar dimensões e espaços.",
        "how": "Lembre-se: padding fica dentro da borda; margin fica fora. box-sizing:border-box faz width/height incluírem padding e border.",
        "example": "*, *::before, *::after { box-sizing: border-box; }\n.card { width: 300px; padding: 20px; border: 1px solid #ccc; margin: 20px; }",
        "why": "O box model explica muitos problemas de tamanho e espaçamento.",
        "result": "A largura da caixa fica mais previsível com border-box."
      },
      {
        "level": 1,
        "title": "Margin e padding",
        "what": "margin cria espaço externo e padding cria espaço interno.",
        "serve": "Separar elementos e afastar conteúdo da borda.",
        "how": "Use valores de um a quatro números conforme a necessidade e prefira gap em layouts Flex/Grid para espaçamento entre itens.",
        "example": ".card { margin: 20px; padding: 16px; }",
        "why": "É uma diferença fundamental do CSS.",
        "result": "A caixa fica afastada das outras e o conteúdo fica afastado da borda."
      },
      {
        "level": 1,
        "title": "Bordas e border-radius",
        "what": "border define uma borda; border-radius arredonda cantos.",
        "serve": "Cartões, inputs, botões e caixas.",
        "how": "Defina largura, estilo e cor da borda. Use radius com moderação.",
        "example": ".card { border: 1px solid #ddd; border-radius: 12px; }",
        "why": "Ajuda a criar componentes visuais claros.",
        "result": "A caixa fica com uma borda fina e cantos arredondados."
      },
      {
        "level": 1,
        "title": "Backgrounds",
        "what": "background-color, background-image, background-size, background-position e outras propriedades controlam o fundo.",
        "serve": "Criar fundos simples ou visuais mais elaborados.",
        "how": "Comece com cor e depois acrescente imagem, gradiente ou posição conforme a necessidade.",
        "example": ".hero { background: linear-gradient(135deg, #eef0ff, #fff); }",
        "why": "Fundos podem organizar áreas e destacar conteúdo.",
        "result": "A secção ganha um fundo em gradiente."
      },
      {
        "level": 1,
        "title": "display",
        "what": "display define o comportamento de layout do elemento, com valores como block, inline, inline-block, flex, grid, none e outros.",
        "serve": "Decidir como elementos participam do layout.",
        "how": "Use flex ou grid para layouts modernos; evite usar muitas combinações de posicionamento absoluto para layout geral.",
        "example": ".menu { display: flex; }",
        "why": "É uma das propriedades centrais de layout.",
        "result": "Os elementos passam a usar o modelo de layout escolhido."
      },
      {
        "level": 2,
        "title": "Flexbox",
        "what": "Flexbox organiza itens em uma dimensão, linha ou coluna.",
        "serve": "Menus, botões, cabeçalhos, alinhamentos e grupos de cartões.",
        "how": "Ative display:flex e use flex-direction, gap, justify-content, align-items, flex-wrap e propriedades dos itens quando necessário.",
        "example": ".menu { display:flex; gap:16px; justify-content:center; align-items:center; flex-wrap:wrap; }",
        "why": "Resolve alinhamentos comuns com pouco código.",
        "result": "Os itens ficam alinhados, espaçados e podem quebrar linha."
      },
      {
        "level": 2,
        "title": "Grid",
        "what": "CSS Grid organiza elementos em linhas e colunas.",
        "serve": "Galerias, painéis, dashboards e estruturas bidimensionais.",
        "how": "Use display:grid e defina colunas com grid-template-columns; gap cria espaçamento.",
        "example": ".cards { display:grid; grid-template-columns:repeat(3, 1fr); gap:20px; }",
        "why": "É ideal para layouts em duas dimensões.",
        "result": "Os cartões aparecem distribuídos em três colunas."
      },
      {
        "level": 2,
        "title": "position",
        "what": "position pode ser static, relative, absolute, fixed ou sticky.",
        "serve": "Posicionar elementos de forma específica.",
        "how": "relative cria uma referência; absolute posiciona dentro dessa referência; fixed prende à viewport; sticky acompanha o scroll dentro das condições do contêiner.",
        "example": ".card { position:relative; }\n.badge { position:absolute; top:10px; right:10px; }",
        "why": "Permite posicionamento especial sem usar hacks.",
        "result": "O badge fica preso ao canto do cartão."
      },
      {
        "level": 2,
        "title": "overflow",
        "what": "overflow controla o que acontece quando o conteúdo ultrapassa os limites da caixa.",
        "serve": "Evitar cortes indesejados e criar rolagem quando necessário.",
        "how": "Use visible, hidden, clip, auto ou scroll conforme o comportamento esperado.",
        "example": ".code { overflow:auto; }",
        "why": "É importante para tabelas, código, painéis e conteúdos grandes.",
        "result": "Quando o conteúdo excede a caixa, pode surgir uma área de rolagem."
      },
      {
        "level": 2,
        "title": "box-shadow e text-shadow",
        "what": "Sombras criam profundidade visual em caixas e textos.",
        "serve": "Destacar cartões, botões e elementos importantes.",
        "how": "Use sombras discretas e evite muitas sombras pesadas na mesma página.",
        "example": ".card { box-shadow: 0 12px 35px rgba(0,0,0,.08); }",
        "why": "Profundidade pode ajudar a separar superfícies.",
        "result": "O cartão ganha uma sombra suave ao redor."
      },
      {
        "level": 2,
        "title": "Gradientes",
        "what": "linear-gradient e radial-gradient criam transições entre cores.",
        "serve": "Criar fundos visuais sem imagens externas.",
        "how": "Defina direção ou posição e pelo menos duas cores.",
        "example": ".banner { background: linear-gradient(135deg, #4f46e5, #7c3aed); }",
        "why": "São úteis em hero sections e destaques.",
        "result": "O fundo apresenta uma transição suave entre cores."
      },
      {
        "level": 2,
        "title": "Pseudo-classes",
        "what": "Pseudo-classes como :hover, :focus, :active, :disabled, :checked e :nth-child() descrevem estados ou posições.",
        "serve": "Estilizar elementos conforme interação ou contexto.",
        "how": "Use estados de foco para teclado e não dependa apenas de hover.",
        "example": "button:hover { transform: translateY(-2px); }\nbutton:focus-visible { outline: 3px solid #a5b4fc; }",
        "why": "Melhora interação e acessibilidade.",
        "result": "O botão muda quando o rato passa e recebe destaque ao foco pelo teclado."
      },
      {
        "level": 2,
        "title": "Pseudo-elementos",
        "what": "::before e ::after criam partes decorativas ou auxiliares do conteúdo visual.",
        "serve": "Ícones, marcas, linhas e pequenos detalhes.",
        "how": "Use content em ::before/::after e prefira conteúdo real no HTML quando ele tiver significado.",
        "example": ".titulo::after { content:\"\"; display:block; width:40px; height:3px; background:currentColor; }",
        "why": "Mantém decoração separada do conteúdo real.",
        "result": "Uma pequena linha decorativa aparece abaixo do título."
      },
      {
        "level": 2,
        "title": "Formulários e inputs",
        "what": "Inputs, select, textarea e button podem ser estilizados como qualquer outro elemento.",
        "serve": "Criar formulários consistentes.",
        "how": "Defina padding, border, radius e estados focus. Não remova o foco sem fornecer outro indicador visível.",
        "example": "input, select, textarea { width:100%; padding:10px 12px; border:1px solid #ccc; border-radius:8px; }",
        "why": "Formulários precisam ser claros e utilizáveis.",
        "result": "Os campos ficam uniformes e legíveis."
      },
      {
        "level": 2,
        "title": "Transitions",
        "what": "transition cria mudanças suaves entre estados.",
        "serve": "Suavizar hover, focus e pequenas mudanças.",
        "how": "Defina propriedades, duration e timing-function. Evite transições excessivas.",
        "example": "button { transition: transform .2s ease, background-color .2s ease; }",
        "why": "Interações discretas ficam mais naturais.",
        "result": "Mudanças visuais acontecem de forma suave."
      },
      {
        "level": 2,
        "title": "Transform",
        "what": "transform permite translate, scale, rotate e outras transformações.",
        "serve": "Movimentar ou ampliar elementos sem alterar o fluxo normal.",
        "how": "Use transform em efeitos pequenos e combine com transition quando necessário.",
        "example": ".card:hover { transform: translateY(-4px); }",
        "why": "É mais eficiente para muitas animações visuais do que alterar várias propriedades de layout.",
        "result": "O cartão desloca-se ligeiramente para cima no hover."
      },
      {
        "level": 2,
        "title": "Animações com @keyframes",
        "what": "@keyframes define etapas de uma animação e animation configura a execução.",
        "serve": "Criar movimentos repetitivos ou sequências visuais.",
        "how": "Defina from/to ou percentagens e associe a animation-name, duration, timing e iteration-count.",
        "example": "@keyframes aparecer { from { opacity:0; } to { opacity:1; } }\n.box { animation: aparecer .5s ease; }",
        "why": "Permite movimentos mais complexos que uma simples transition.",
        "result": "A caixa aparece gradualmente."
      },
      {
        "level": 2,
        "title": "Media queries",
        "what": "@media muda estilos de acordo com condições como largura do ecrã.",
        "serve": "Criar páginas responsivas.",
        "how": "Comece pelo layout base e acrescente ajustes para ecrãs menores ou maiores. Evite excesso de breakpoints.",
        "example": ".cards { grid-template-columns:repeat(3,1fr); }\n@media (max-width:700px) { .cards { grid-template-columns:1fr; } }",
        "why": "Permite que o mesmo site se adapte a vários dispositivos.",
        "result": "Em ecrãs pequenos, os cartões passam para uma coluna."
      },
      {
        "level": 3,
        "title": "Variáveis CSS",
        "what": "Custom properties começam com -- e podem ser lidas com var().",
        "serve": "Guardar cores, espaçamentos, tamanhos e valores reutilizáveis.",
        "how": "Defina variáveis em :root ou num contêiner e use var(--nome).",
        "example": ":root { --primary:#4f46e5; --space:16px; }\n.button { background:var(--primary); padding:var(--space); }",
        "why": "Reduz repetição e facilita mudanças globais.",
        "result": "Mudar --primary altera todos os componentes que dependem dela."
      },
      {
        "level": 3,
        "title": "calc(), min(), max() e clamp()",
        "what": "Funções CSS calculam ou limitam valores.",
        "serve": "Criar tamanhos flexíveis e responsivos.",
        "how": "Use calc para combinações, min/max para limites e clamp para valores com mínimo, ideal e máximo.",
        "example": "h1 { font-size:clamp(2rem,5vw,4rem); }",
        "why": "A interface pode crescer e diminuir sem quebrar.",
        "result": "O título adapta-se ao espaço mantendo limites."
      },
      {
        "level": 3,
        "title": "Aspect ratio e object-fit",
        "what": "aspect-ratio define uma proporção de caixa; object-fit controla como imagens e vídeos ocupam essa caixa.",
        "serve": "Criar miniaturas e media com proporções consistentes.",
        "how": "Combine aspect-ratio com object-fit:cover ou contain conforme o resultado desejado.",
        "example": ".card img { width:100%; aspect-ratio:16/9; object-fit:cover; }",
        "why": "Evita dimensões imprevisíveis em galerias.",
        "result": "Todas as miniaturas mantêm a mesma proporção."
      },
      {
        "level": 3,
        "title": "z-index e empilhamento",
        "what": "z-index controla a ordem de sobreposição em contextos de empilhamento apropriados.",
        "serve": "Gerir menus, modais, badges e elementos sobrepostos.",
        "how": "Use position ou outros contextos que estabeleçam stacking context quando necessário e evite números gigantes sem organização.",
        "example": ".modal { position:fixed; z-index:1000; }",
        "why": "Ajuda a controlar sobreposições complexas.",
        "result": "O modal aparece acima dos restantes elementos."
      },
      {
        "level": 3,
        "title": "Seletores :is(), :where() e :has()",
        "what": ":is() agrupa seletores; :where() agrupa sem adicionar especificidade; :has() seleciona um elemento com base nos seus descendentes ou relação.",
        "serve": "Escrever seletores mais expressivos quando o suporte do navegador for adequado ao projeto.",
        "how": "Use para reduzir repetição e manter CSS mais legível. Verifique compatibilidade do público do projeto.",
        "example": "nav :is(a, button) { font-weight:700; }\n.card:has(img) { padding-top:0; }",
        "why": "Podem reduzir seletores repetidos.",
        "result": "As regras aplicam-se às relações definidas sem duplicar código."
      },
      {
        "level": 3,
        "title": "Container queries",
        "what": "@container permite alterar estilos com base no tamanho do próprio contêiner, e não apenas na viewport.",
        "serve": "Criar componentes que se adaptam ao espaço em que são colocados.",
        "how": "Defina container-type no contêiner e depois escreva @container com as condições.",
        "example": ".card-grid { container-type:inline-size; }\n@container (max-width:500px) { .card { grid-template-columns:1fr; } }",
        "why": "É útil para componentes reutilizáveis em diferentes áreas.",
        "result": "O cartão pode mudar de layout conforme a largura do seu contêiner."
      },
      {
        "level": 3,
        "title": "Subgrid",
        "what": "subgrid permite que uma grelha filha use as linhas ou colunas do grid do pai.",
        "serve": "Alinhar conteúdos de vários cartões ou secções com uma mesma grelha.",
        "how": "Defina display:grid no pai e use grid-template-columns:subgrid ou grid-template-rows:subgrid no filho quando apropriado.",
        "example": ".cards { display:grid; grid-template-columns:repeat(3,1fr); }\n.card { display:grid; grid-template-rows:subgrid; grid-row:span 3; }",
        "why": "Facilita alinhamento consistente em componentes repetidos.",
        "result": "Elementos internos de cartões podem alinhar-se pelas mesmas linhas do grid."
      },
      {
        "level": 3,
        "title": "Dark mode e prefers-color-scheme",
        "what": "CSS pode reagir à preferência de tema do sistema com prefers-color-scheme.",
        "serve": "Criar tema claro/escuro adaptável.",
        "how": "Defina variáveis para cores e altere-as numa media query. Também pode combinar isso com um seletor de classe para controlo manual.",
        "example": ":root { --bg:#fff; --text:#111; }\n@media (prefers-color-scheme:dark) { :root { --bg:#111; --text:#eee; } }",
        "why": "Melhora conforto e consistência com o sistema do utilizador.",
        "result": "A página pode assumir automaticamente as cores do tema preferido."
      },
      {
        "level": 3,
        "title": "Acessibilidade no CSS",
        "what": "CSS deve manter contraste, foco visível, tamanho de texto adequado e suporte a diferentes preferências.",
        "serve": "Garantir que o visual não cria barreiras desnecessárias.",
        "how": "Não remova outlines sem substituição, use focus-visible, respeite prefers-reduced-motion e mantenha contraste suficiente.",
        "example": "@media (prefers-reduced-motion:reduce) { * { animation-duration:.01ms !important; transition-duration:.01ms !important; } }",
        "why": "Uma interface bonita também precisa ser utilizável.",
        "result": "Utilizadores que preferem menos movimento recebem uma experiência mais confortável."
      },
      {
        "level": 4,
        "title": "Arquitetura e nomes",
        "what": "Projetos maiores beneficiam de nomes de classes previsíveis, componentes reutilizáveis e separação por áreas.",
        "serve": "Evitar CSS difícil de manter.",
        "how": "Escolha uma convenção de nomes e mantenha componentes isolados, evitando seletores profundos demais.",
        "example": ".card {}\n.card__title {}\n.card--featured {}",
        "why": "Consistência reduz conflitos e tempo de manutenção.",
        "result": "Os componentes podem ser encontrados e alterados com facilidade."
      },
      {
        "level": 4,
        "title": "Reset e box-sizing",
        "what": "Browsers têm estilos padrão diferentes para alguns elementos. Um pequeno reset pode normalizar comportamentos comuns.",
        "serve": "Criar uma base previsível.",
        "how": "Use apenas resets necessários e configure box-sizing logo no início.",
        "example": "*, *::before, *::after { box-sizing:border-box; }\nbody { margin:0; }",
        "why": "Reduz surpresas causadas por margens e dimensões padrão.",
        "result": "As caixas passam a usar um modelo de dimensionamento consistente."
      },
      {
        "level": 4,
        "title": "CSS responsivo profissional",
        "what": "Responsividade é mais do que trocar três colunas por uma; envolve tipografia, espaços, navegação, imagens e componentes.",
        "serve": "Fazer um projeto funcionar em diferentes tamanhos de ecrã.",
        "how": "Pense em conteúdo primeiro, use unidades flexíveis, grid/flex, imagens responsivas e breakpoints apenas quando o layout realmente precisar.",
        "example": ".layout { display:grid; grid-template-columns:minmax(0,2fr) minmax(220px,1fr); gap:24px; }\n@media (max-width:800px) { .layout { grid-template-columns:1fr; } }",
        "why": "Evita sites que funcionam apenas num único tamanho de ecrã.",
        "result": "O layout adapta-se sem exigir uma versão separada do site."
      },
      {
        "level": 4,
        "title": "Organização de ficheiros CSS",
        "what": "Um projeto pode separar base, componentes, layout e utilidades, dependendo do tamanho.",
        "serve": "Manter arquivos legíveis e fáceis de localizar.",
        "how": "Para projetos simples, um style.css bem organizado basta. Em projetos maiores, separe módulos de forma lógica e mantenha uma ordem consistente.",
        "example": "css/\n├─ base.css\n├─ layout.css\n├─ components.css\n└─ utilities.css",
        "why": "A organização deve acompanhar a complexidade real do projeto.",
        "result": "Cada parte do estilo pode ser encontrada sem procurar num arquivo gigante."
      },
      {
        "level": 4,
        "title": "Debug com DevTools",
        "what": "As ferramentas do navegador permitem inspecionar elementos, ver regras aplicadas, medir caixas e testar valores.",
        "serve": "Encontrar erros e entender por que um estilo não funciona.",
        "how": "Abra Inspecionar, veja Styles, Computed, Box Model e dimensões. Desative propriedades uma por uma para descobrir conflitos.",
        "example": "/\\* use o DevTools para descobrir por que isto não aparece \\*/\n.caixa { display:none; }",
        "why": "Saber depurar é mais importante do que decorar centenas de propriedades.",
        "result": "Você consegue identificar a regra responsável pelo comportamento observado."
      },
      {
        "level": 4,
        "title": "Performance e manutenção",
        "what": "CSS em excesso pode aumentar complexidade e dificultar manutenção.",
        "serve": "Manter páginas rápidas e organizadas.",
        "how": "Remova regras não usadas, evite duplicação, reutilize variáveis e componentes e carregue apenas o CSS necessário.",
        "example": ":root { --primary:#4f46e5; }\n.button { background:var(--primary); }",
        "why": "Código menor e organizado é mais fácil de manter.",
        "result": "O mesmo valor visual pode ser reutilizado sem repetir muitas declarações."
      },
      {
        "level": 4,
        "title": "Projeto CSS completo",
        "what": "Um bom projeto usa variáveis, layout, componentes, responsividade, estados e acessibilidade.",
        "serve": "Juntar os conceitos num exemplo real.",
        "how": "Comece pelo layout base, use variáveis, crie componentes, trate hover/focus e depois adapte com media queries.",
        "example": ":root { --primary:#4f46e5; --bg:#f5f7fb; --text:#172033; }\nbody { margin:0; background:var(--bg); color:var(--text); }\n.cards { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }\n@media (max-width:700px) { .cards { grid-template-columns:1fr; } }",
        "why": "Mostra como propriedades isoladas se transformam numa interface coerente.",
        "result": "A página usa cores consistentes, cartões organizados e adaptação para ecrãs pequenos."
      }
    ]
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "intro": "Manual completo de JavaScript: fundamentos, DOM, eventos, dados, assíncrono, APIs, módulos e conceitos avançados.",
    "items": [
      {
        "level": 1,
        "title": "O que é JavaScript?",
        "what": "JavaScript é uma linguagem de programação usada no navegador e também fora dele em ambientes como Node.js.",
        "serve": "Criar lógica, interatividade, cálculos, validações, manipulação da página e comunicação com serviços.",
        "how": "No navegador, pode ser incluído com script src ou um bloco script. No LUZACODE, os exemplos de navegador podem ser executados no editor.",
        "example": "console.log(\"Olá, LUZACODE!\");",
        "why": "Dá comportamento ao conteúdo estruturado por HTML.",
        "result": "A mensagem aparece no console."
      },
      {
        "level": 1,
        "title": "Como incluir JavaScript",
        "what": "JavaScript pode ser escrito num bloco script ou em arquivo externo.",
        "serve": "Ligar a lógica à página.",
        "how": "Para projetos maiores, use arquivo externo e considere defer.",
        "example": "<script src=\"app.js\" defer></script>",
        "why": "Separar JavaScript do HTML facilita manutenção.",
        "result": "O navegador carrega app.js e executa o código no momento apropriado."
      },
      {
        "level": 1,
        "title": "Comentários",
        "what": "Comentários podem ser escritos com // para uma linha e /* */ para múltiplas linhas.",
        "serve": "Documentar o raciocínio sem executar aquele texto.",
        "how": "Use comentários para explicar decisões e partes importantes, não para repetir o que o código já diz claramente.",
        "example": "// mostra o nome\nconsole.log(nome);",
        "why": "Código bem comentado ajuda sem ficar poluído.",
        "result": "O comentário é ignorado e apenas o console.log é executado."
      },
      {
        "level": 1,
        "title": "Variáveis: let e const",
        "what": "Variáveis guardam valores. const não deve ser reatribuída; let pode receber outro valor.",
        "serve": "Guardar dados usados pelo programa.",
        "how": "Prefira const por padrão e use let quando a variável realmente precisar mudar. var é antigo e tem regras de escopo diferentes.",
        "example": "const nome = \"Maria\";\nlet idade = 20;\nidade = 21;",
        "why": "Reduz alterações acidentais e deixa a intenção do código mais clara.",
        "result": "nome permanece igual e idade recebe um novo valor."
      },
      {
        "level": 1,
        "title": "Tipos de dados",
        "what": "JavaScript possui tipos primitivos como string, number, bigint, boolean, undefined, null e symbol, além de objetos.",
        "serve": "Representar diferentes tipos de informação.",
        "how": "Use typeof para observar o tipo em muitos casos e lembre-se de que arrays e funções são objetos sob typeof.",
        "example": "const nome = \"Ana\";\nconst idade = 25;\nconst ativo = true;\nconsole.log(typeof nome);",
        "why": "Conhecer os tipos ajuda a prever como operações vão funcionar.",
        "result": "O console mostra o tipo da variável nome."
      },
      {
        "level": 1,
        "title": "Conversão de tipos",
        "what": "Valores podem ser convertidos para string, number ou boolean conforme a necessidade.",
        "serve": "Trabalhar com dados vindos de inputs, APIs e outras fontes.",
        "how": "Use Number(), String(), Boolean() e métodos apropriados. Evite depender de conversões implícitas difíceis de ler.",
        "example": "const texto = \"42\";\nconst numero = Number(texto);\nconsole.log(numero + 8);",
        "why": "Evita resultados inesperados.",
        "result": "O texto \"42\" é convertido para o número 42 e o resultado da soma é 50."
      },
      {
        "level": 1,
        "title": "Operadores matemáticos",
        "what": "+, -, *, /, %, ** e outros operadores realizam cálculos.",
        "serve": "Somar, subtrair, multiplicar, dividir e calcular restos ou potências.",
        "how": "Use parênteses quando quiser deixar a ordem de avaliação explícita.",
        "example": "const total = (10 + 5) * 2;\nconst resto = 17 % 3;",
        "why": "São a base de muitos cálculos.",
        "result": "total vale 30 e resto vale 2."
      },
      {
        "level": 1,
        "title": "Comparação",
        "what": "== e != fazem comparação com conversão; === e !== comparam sem conversão de tipo.",
        "serve": "Verificar se valores correspondem.",
        "how": "Prefira === e !== na maioria dos códigos para reduzir surpresas de conversão.",
        "example": "console.log(5 === 5);\nconsole.log(\"5\" === 5);",
        "why": "Comparações precisas ajudam a evitar bugs.",
        "result": "O primeiro resultado é true e o segundo false."
      },
      {
        "level": 1,
        "title": "Operadores lógicos",
        "what": "&& representa E, || representa OU e ! inverte um valor booleano.",
        "serve": "Combinar condições.",
        "how": "Agrupe condições com parênteses quando a lógica ficar difícil de ler.",
        "example": "const podeEntrar = idade >= 18 && ativo;",
        "why": "Permitem expressar regras mais complexas.",
        "result": "podeEntrar será true apenas quando as duas condições forem verdadeiras."
      },
      {
        "level": 1,
        "title": "if, else e else if",
        "what": "Estruturas condicionais executam blocos diferentes conforme o resultado de expressões.",
        "serve": "Tomar decisões no programa.",
        "how": "Escreva condições simples e cubra explicitamente os casos importantes.",
        "example": "if (idade >= 18) {\n  console.log(\"Maior\");\n} else {\n  console.log(\"Menor\");\n}",
        "why": "Grande parte da lógica de aplicações depende de decisões.",
        "result": "A mensagem muda conforme a idade."
      },
      {
        "level": 1,
        "title": "switch",
        "what": "switch compara uma expressão com vários case e pode ter default.",
        "serve": "Lidar com várias opções de forma clara quando existe um mesmo valor comparado.",
        "how": "Use break para não continuar automaticamente nos próximos casos, salvo quando o comportamento de fall-through for intencional.",
        "example": "switch (linguagem) {\n  case \"html\": console.log(\"Estrutura\"); break;\n  case \"css\": console.log(\"Estilo\"); break;\n  default: console.log(\"Outra\");\n}",
        "why": "Pode deixar determinadas decisões mais legíveis.",
        "result": "A mensagem depende do valor de linguagem."
      },
      {
        "level": 1,
        "title": "for, while e do...while",
        "what": "Loops repetem código enquanto uma condição ou sequência determinar.",
        "serve": "Processar vários valores ou repetir tarefas.",
        "how": "Use for quando controla claramente contador; while quando a condição é central; do...while quando precisa executar pelo menos uma vez.",
        "example": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
        "why": "Automatiza tarefas repetitivas.",
        "result": "O console mostra 0, 1, 2, 3 e 4."
      },
      {
        "level": 1,
        "title": "break e continue",
        "what": "break termina o loop atual; continue pula para a próxima iteração.",
        "serve": "Controlar repetições.",
        "how": "Use com moderação para não esconder a lógica do loop.",
        "example": "for (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i);\n}",
        "why": "Permite interromper ou ignorar casos específicos.",
        "result": "O loop termina quando i chega a 5."
      },
      {
        "level": 1,
        "title": "Funções",
        "what": "Funções agrupam instruções e podem receber parâmetros e devolver valores.",
        "serve": "Reutilizar lógica e organizar programas.",
        "how": "Dê nomes claros e faça cada função ter uma responsabilidade compreensível.",
        "example": "function somar(a, b) {\n  return a + b;\n}\nconsole.log(somar(2, 3));",
        "why": "Evita repetição e melhora organização.",
        "result": "A função retorna 5."
      },
      {
        "level": 1,
        "title": "Arrow functions",
        "what": "Arrow functions oferecem uma sintaxe curta para funções e possuem regras de this diferentes das funções tradicionais.",
        "serve": "Criar funções pequenas e callbacks.",
        "how": "Use const nome = (args) => expressão; quando isso tornar o código mais claro.",
        "example": "const dobro = numero => numero * 2;\nconsole.log(dobro(5));",
        "why": "São muito comuns em JavaScript moderno.",
        "result": "dobro(5) retorna 10."
      },
      {
        "level": 1,
        "title": "Escopo",
        "what": "Escopo define onde uma variável pode ser acessada. let e const respeitam escopo de bloco; var tem comportamento de função.",
        "serve": "Controlar o alcance de dados.",
        "how": "Mantenha variáveis o mais perto possível de onde são usadas.",
        "example": "if (true) {\n  const mensagem = \"Olá\";\n}\n// mensagem não existe aqui fora",
        "why": "Escopos claros reduzem colisões de nomes e bugs.",
        "result": "A variável fica disponível apenas no bloco onde foi declarada."
      },
      {
        "level": 2,
        "title": "Arrays",
        "what": "Arrays armazenam uma coleção ordenada de valores.",
        "serve": "Trabalhar com listas de dados.",
        "how": "Crie com [] e acesse por índice. O primeiro índice é 0.",
        "example": "const frutas = [\"maçã\", \"banana\", \"laranja\"];\nconsole.log(frutas[0]);",
        "why": "São essenciais para dados repetidos.",
        "result": "O primeiro item é mostrado: maçã."
      },
      {
        "level": 2,
        "title": "Métodos de arrays",
        "what": "Métodos como push, pop, shift, unshift, slice, splice, map, filter, find, some, every, reduce e sort ajudam a manipular listas.",
        "serve": "Transformar, filtrar, pesquisar e agregar dados.",
        "how": "Escolha o método pela intenção. map transforma; filter seleciona; find encontra; reduce acumula.",
        "example": "const numeros = [1,2,3,4];\nconst dobrados = numeros.map(n => n * 2);\nconst pares = numeros.filter(n => n % 2 === 0);",
        "why": "Métodos expressivos tornam a lógica mais clara.",
        "result": "dobrados vale [2,4,6,8] e pares vale [2,4]."
      },
      {
        "level": 2,
        "title": "Strings",
        "what": "Strings representam texto e possuem métodos como includes, startsWith, endsWith, slice, trim, replace e split.",
        "serve": "Pesquisar, limpar e transformar texto.",
        "how": "Use template literals com crases quando precisar inserir variáveis no texto.",
        "example": "const nome = \"Ana\";\nconst mensagem = `Olá, ${nome}!`;\nconsole.log(mensagem);",
        "why": "Manipulação de texto aparece em quase todas as aplicações.",
        "result": "O console mostra Olá, Ana!."
      },
      {
        "level": 2,
        "title": "Objetos",
        "what": "Objetos agrupam propriedades e métodos relacionados.",
        "serve": "Representar entidades e estruturas com campos nomeados.",
        "how": "Use chaves {} e acesse com ponto ou colchetes.",
        "example": "const pessoa = { nome: \"Ana\", idade: 25 };\nconsole.log(pessoa.nome);",
        "why": "Permitem modelar dados de forma legível.",
        "result": "O nome Ana é lido da propriedade nome."
      },
      {
        "level": 2,
        "title": "Destructuring",
        "what": "Destructuring extrai valores de arrays ou propriedades de objetos para variáveis.",
        "serve": "Evitar código repetitivo ao trabalhar com estruturas.",
        "how": "Use const {nome} = pessoa ou const [primeiro] = lista.",
        "example": "const pessoa = { nome: \"Ana\", idade: 25 };\nconst { nome, idade } = pessoa;",
        "why": "Deixa funções e manipulação de dados mais claros.",
        "result": "nome e idade passam a ser variáveis disponíveis separadamente."
      },
      {
        "level": 2,
        "title": "Spread e rest",
        "what": "... pode expandir valores (spread) ou reunir valores (rest), dependendo do contexto.",
        "serve": "Copiar e combinar arrays/objetos e receber vários argumentos.",
        "how": "Use [...lista] para cópia superficial e {...obj} para combinar objetos. Em parâmetros, ...args reúne argumentos.",
        "example": "const a = [1,2];\nconst b = [...a,3];\nconst pessoa2 = {...pessoa, ativo:true};",
        "why": "É muito usado em código moderno sem mutar estruturas originais diretamente.",
        "result": "b vale [1,2,3] e pessoa2 contém uma nova propriedade ativo."
      },
      {
        "level": 2,
        "title": "DOM",
        "what": "DOM é a representação em objetos do documento HTML que JavaScript pode consultar e modificar.",
        "serve": "Alterar textos, atributos, classes, elementos e estrutura da página.",
        "how": "Use APIs como querySelector, textContent, classList e createElement.",
        "example": "const titulo = document.querySelector('h1');\ntitulo.textContent = 'Novo título';",
        "why": "Transforma páginas estáticas em interfaces interativas.",
        "result": "O título da página muda para Novo título."
      },
      {
        "level": 2,
        "title": "Selecionar elementos",
        "what": "querySelector retorna o primeiro elemento que combina; querySelectorAll retorna todos os que combinam.",
        "serve": "Encontrar elementos no DOM.",
        "how": "Use seletores CSS válidos e verifique se o elemento existe antes de usar propriedades quando necessário.",
        "example": "const botao = document.querySelector('#salvar');\nconst itens = document.querySelectorAll('.item');",
        "why": "É a porta de entrada para muitas manipulações.",
        "result": "botao referencia um elemento e itens representa todos os elementos com class item."
      },
      {
        "level": 2,
        "title": "textContent e innerHTML",
        "what": "textContent trabalha com texto. innerHTML interpreta e insere marcação HTML.",
        "serve": "Atualizar conteúdo.",
        "how": "Prefira textContent para texto vindo do utilizador. Use innerHTML apenas quando precisar inserir HTML confiável e controlado.",
        "example": "titulo.textContent = 'Olá';",
        "why": "Ajuda a evitar injeção de HTML quando o conteúdo é externo.",
        "result": "O texto é alterado sem interpretar tags inseridas como conteúdo."
      },
      {
        "level": 2,
        "title": "Atributos e classes",
        "what": "setAttribute, getAttribute e classList permitem controlar atributos e classes.",
        "serve": "Alterar estado visual e propriedades dos elementos.",
        "how": "Use classList.add, remove, toggle e contains para classes.",
        "example": "const menu = document.querySelector('.menu');\nmenu.classList.toggle('aberto');",
        "why": "Mantém o CSS responsável pela aparência enquanto JS altera o estado.",
        "result": "A classe aberto é adicionada ou removida conforme o estado."
      },
      {
        "level": 2,
        "title": "Criar elementos",
        "what": "createElement cria um novo elemento e append, appendChild e métodos relacionados inserem-no no DOM.",
        "serve": "Construir listas e interfaces dinamicamente.",
        "how": "Crie, preencha propriedades e depois anexe ao contêiner correto.",
        "example": "const li = document.createElement('li');\nli.textContent = 'Novo item';\ndocument.querySelector('ul').append(li);",
        "why": "É a base para componentes criados dinamicamente.",
        "result": "Um novo item aparece na lista."
      },
      {
        "level": 2,
        "title": "Eventos",
        "what": "addEventListener liga uma função a eventos como click, input, submit, change, keydown e muitos outros.",
        "serve": "Responder às ações do utilizador.",
        "how": "Escolha o evento adequado e remova listeners quando uma arquitetura exigir esse controlo.",
        "example": "document.querySelector('button').addEventListener('click', () => {\n  alert('Clicou!');\n});",
        "why": "Sem eventos, muitas interfaces não reagem ao utilizador.",
        "result": "Ao clicar, o alerta é mostrado."
      },
      {
        "level": 2,
        "title": "Formulários e validação",
        "what": "JavaScript pode ler valores de campos, impedir envio inválido e mostrar mensagens ao utilizador.",
        "serve": "Criar formulários interativos.",
        "how": "Use submit no form, preventDefault quando necessário e valide os valores antes de continuar.",
        "example": "form.addEventListener('submit', event => {\n  event.preventDefault();\n  if (!email.value.trim()) alert('Preencha o email.');\n});",
        "why": "A validação melhora a experiência, mas no servidor também deve existir validação adequada.",
        "result": "O formulário não continua quando a regra definida falha."
      },
      {
        "level": 3,
        "title": "Date",
        "what": "Date representa datas e horas e oferece métodos para leitura e manipulação.",
        "serve": "Calendários, prazos, tempos e registos.",
        "how": "Use métodos Date e formatação apropriada ao fuso e à finalidade. Para projetos complexos de datas, avalie APIs e bibliotecas adequadas ao caso.",
        "example": "const agora = new Date();\nconsole.log(agora.getFullYear());",
        "why": "Datas têm detalhes de fuso e formatação que merecem atenção.",
        "result": "O ano atual é obtido a partir do objeto Date."
      },
      {
        "level": 3,
        "title": "Math",
        "what": "Math fornece funções e constantes matemáticas.",
        "serve": "Arredondar, gerar aleatórios e calcular valores.",
        "how": "Use métodos como Math.round, floor, ceil, max, min, abs e random.",
        "example": "const numero = Math.floor(Math.random() * 10) + 1;\nconsole.log(numero);",
        "why": "É útil em jogos, sorteios e cálculos.",
        "result": "numero recebe um inteiro entre 1 e 10."
      },
      {
        "level": 3,
        "title": "JSON",
        "what": "JSON é um formato de texto muito usado para trocar dados estruturados.",
        "serve": "Guardar ou comunicar dados entre aplicações.",
        "how": "Use JSON.stringify para converter para texto e JSON.parse para voltar a objeto.",
        "example": "const obj = { nome: 'Ana' };\nconst texto = JSON.stringify(obj);\nconst novoObj = JSON.parse(texto);",
        "why": "É comum em APIs e armazenamento.",
        "result": "novoObj volta a ser um objeto com a propriedade nome."
      },
      {
        "level": 3,
        "title": "localStorage e sessionStorage",
        "what": "Storage permite guardar pequenas quantidades de dados no navegador. localStorage persiste; sessionStorage dura a sessão da aba.",
        "serve": "Guardar preferências e dados simples do lado do cliente.",
        "how": "Use setItem, getItem e removeItem. Converta objetos com JSON quando necessário.",
        "example": "localStorage.setItem('tema', 'escuro');\nconst tema = localStorage.getItem('tema');",
        "why": "Permite persistência simples sem servidor.",
        "result": "O tema continua disponível depois de recarregar a página quando localStorage é usado."
      },
      {
        "level": 3,
        "title": "Erros e try/catch",
        "what": "try executa código que pode falhar; catch recebe o erro; finally executa no final. throw permite criar um erro intencional.",
        "serve": "Lidar com situações inesperadas sem deixar a interface quebrar silenciosamente.",
        "how": "Capture erros que realmente consegue tratar e registe informação útil para depuração.",
        "example": "try {\n  throw new Error('Algo aconteceu');\n} catch (erro) {\n  console.log(erro.message);\n}",
        "why": "Tratamento de erros faz parte de aplicações confiáveis.",
        "result": "A mensagem do erro é mostrada no console em vez de interromper sem explicação."
      },
      {
        "level": 3,
        "title": "Promises",
        "what": "Promise representa uma operação que pode terminar no futuro com sucesso ou erro.",
        "serve": "Trabalhar com operações assíncronas.",
        "how": "Use then/catch/finally ou async/await.",
        "example": "fetch('/dados.json')\n  .then(res => res.json())\n  .then(dados => console.log(dados))\n  .catch(erro => console.error(erro));",
        "why": "É fundamental para APIs e tarefas assíncronas.",
        "result": "Quando a resposta chega, os dados podem ser processados; em erro, catch é chamado."
      },
      {
        "level": 3,
        "title": "async e await",
        "what": "async marca uma função que devolve Promise. await pausa a continuação daquela função assíncrona até a Promise resolver ou rejeitar.",
        "serve": "Escrever código assíncrono de forma mais legível.",
        "how": "Use try/catch em volta de await quando precisar tratar erros.",
        "example": "async function carregar() {\n  try {\n    const res = await fetch('/dados.json');\n    const dados = await res.json();\n    console.log(dados);\n  } catch (erro) {\n    console.error(erro);\n  }\n}",
        "why": "Facilita leitura de fluxos assíncronos.",
        "result": "A função espera a resposta e depois usa os dados."
      },
      {
        "level": 3,
        "title": "fetch e APIs HTTP",
        "what": "fetch envia ou recebe requisições HTTP. APIs permitem que o front-end converse com serviços externos ou um backend.",
        "serve": "Carregar dados, enviar formulários e integrar serviços.",
        "how": "Faça fetch, verifique response.ok quando apropriado, converta JSON e trate erros de rede e de aplicação.",
        "example": "const resposta = await fetch('/api/utilizadores');\nif (!resposta.ok) throw new Error('Falha na API');\nconst dados = await resposta.json();",
        "why": "Integração com APIs é uma parte central de aplicações modernas.",
        "result": "dados contém o JSON devolvido pela API quando a resposta é bem-sucedida."
      },
      {
        "level": 3,
        "title": "Módulos: import e export",
        "what": "Módulos permitem separar código em ficheiros e exportar/importar valores.",
        "serve": "Organizar aplicações maiores.",
        "how": "Use export para disponibilizar valores e import para consumi-los. No navegador, use type=\"module\".",
        "example": "// math.js\nexport function somar(a,b){ return a+b; }\n\n// app.js\nimport { somar } from './math.js';\nconsole.log(somar(2,3));",
        "why": "Evita um arquivo gigante e organiza responsabilidades.",
        "result": "app.js usa a função somar exportada por math.js."
      },
      {
        "level": 3,
        "title": "RegExp",
        "what": "Expressões regulares descrevem padrões de texto.",
        "serve": "Validar, encontrar, separar e substituir trechos de texto.",
        "how": "Crie padrões com /.../ e use métodos como test, match, replace e split conforme o caso.",
        "example": "const padrao = /^\\d{4}-\\d{2}-\\d{2}$/;\nconsole.log(padrao.test('2026-09-23'));",
        "why": "São poderosas, mas padrões demasiado complexos podem ficar difíceis de manter.",
        "result": "test retorna true para uma data no formato esperado."
      },
      {
        "level": 3,
        "title": "Map e Set",
        "what": "Map guarda pares chave-valor e Set guarda valores únicos.",
        "serve": "Modelar coleções quando Object e Array não são a melhor opção.",
        "how": "Use set/get/has em Map e add/has/delete em Set.",
        "example": "const ids = new Set([1,2,2,3]);\nconsole.log([...ids]);",
        "why": "Resolvem casos de unicidade e chaves variadas de forma clara.",
        "result": "O Set contém apenas 1, 2 e 3."
      },
      {
        "level": 3,
        "title": "Optional chaining e nullish coalescing",
        "what": "?. permite acesso seguro quando algo pode ser null ou undefined; ?? fornece um valor padrão apenas nesses casos.",
        "serve": "Evitar erros ao aceder a propriedades opcionais.",
        "how": "Use ?. quando a cadeia pode não existir e ?? quando quiser preservar valores como 0 ou string vazia.",
        "example": "const nome = usuario?.perfil?.nome ?? 'Sem nome';",
        "why": "Deixa acesso opcional mais simples.",
        "result": "nome recebe o valor real quando existir ou 'Sem nome' quando não existir."
      },
      {
        "level": 4,
        "title": "Classes e orientação a objetos",
        "what": "Classes são uma forma de criar objetos com propriedades e métodos e podem usar herança.",
        "serve": "Modelar entidades e comportamentos relacionados.",
        "how": "Use class, constructor e métodos quando esse modelo realmente deixar a aplicação mais clara.",
        "example": "class Pessoa {\n  constructor(nome) { this.nome = nome; }\n  apresentar() { return `Olá, ${this.nome}`; }\n}\nconst p = new Pessoa('Ana');\nconsole.log(p.apresentar());",
        "why": "É útil em modelos complexos, embora não seja obrigatório para todo projeto.",
        "result": "O método retorna uma saudação com o nome da pessoa."
      },
      {
        "level": 4,
        "title": "Campos privados",
        "what": "Campos privados usam # e só podem ser acedidos dentro da classe.",
        "serve": "Encapsular estado interno.",
        "how": "Declare #campo e aceda a ele apenas dentro dos métodos da classe.",
        "example": "class Conta {\n  #saldo = 0;\n  depositar(valor) { this.#saldo += valor; }\n  consultar() { return this.#saldo; }\n}",
        "why": "Ajuda a proteger detalhes internos de uma classe.",
        "result": "O saldo não pode ser lido diretamente fora da classe; deve passar pelos métodos definidos."
      },
      {
        "level": 4,
        "title": "Herança",
        "what": "Uma classe pode estender outra com extends e chamar o construtor do pai com super.",
        "serve": "Reaproveitar comportamento quando existe uma relação clara entre tipos.",
        "how": "Use herança com moderação; composição muitas vezes é mais simples.",
        "example": "class Admin extends Pessoa {\n  constructor(nome) { super(nome); this.role = 'admin'; }\n}",
        "why": "Permite especialização de classes.",
        "result": "Admin herda o comportamento de Pessoa e acrescenta a propriedade role."
      },
      {
        "level": 4,
        "title": "Callbacks e closures",
        "what": "Callback é uma função passada para outra função. Closure acontece quando uma função mantém acesso ao escopo em que foi criada.",
        "serve": "Criar funções configuráveis e guardar estado privado simples.",
        "how": "Entenda o momento de execução do callback e o ambiente capturado por closures.",
        "example": "function criarContador() {\n  let n = 0;\n  return () => ++n;\n}\nconst contar = criarContador();\nconsole.log(contar(), contar());",
        "why": "São conceitos importantes para compreender código assíncrono e padrões funcionais.",
        "result": "Os resultados são 1 e 2 porque a função fechou sobre n."
      },
      {
        "level": 4,
        "title": "Programação funcional e funções de ordem superior",
        "what": "Funções de ordem superior recebem ou devolvem funções. map, filter e reduce são exemplos.",
        "serve": "Escrever transformações de dados de forma declarativa.",
        "how": "Combine operações pequenas e previsíveis, sem criar cadeias impossíveis de ler.",
        "example": "const numeros = [1,2,3,4];\nconst somaPares = numeros.filter(n => n % 2 === 0).reduce((a,n) => a+n, 0);",
        "why": "Ajuda a tratar dados de forma expressiva.",
        "result": "somaPares vale 6."
      },
      {
        "level": 4,
        "title": "Hoisting e ordem de declaração",
        "what": "Declarações de algumas construções são processadas antes da execução do código, mas let e const têm uma zona temporal que impede acesso antes da inicialização.",
        "serve": "Entender erros e comportamentos relacionados à declaração de variáveis e funções.",
        "how": "Declare variáveis antes de usar e não dependa de hoisting para tornar o código difícil de seguir.",
        "example": "console.log(somar(2,3));\nfunction somar(a,b){ return a+b; }",
        "why": "Conhecer hoisting ajuda a interpretar código existente.",
        "result": "A função declarada com function pode ser chamada antes da sua posição textual, embora uma ordem explícita seja geralmente mais clara."
      },
      {
        "level": 4,
        "title": "this",
        "what": "this representa um contexto cujo valor depende de como uma função é chamada; em arrow functions, this é lexical.",
        "serve": "Aceder ao objeto ou contexto correto em métodos e callbacks.",
        "how": "Analise a forma como a função é chamada. Evite usar this sem entender o contexto.",
        "example": "const pessoa = {\n  nome:'Ana',\n  falar() { console.log(this.nome); }\n};\npessoa.falar();",
        "why": "É uma fonte comum de confusão para iniciantes.",
        "result": "O método mostra Ana porque foi chamado como pessoa.falar()."
      },
      {
        "level": 4,
        "title": "Segurança no JavaScript",
        "what": "Código no navegador deve tratar entradas externas como não confiáveis. Riscos comuns incluem XSS, uso indevido de innerHTML, exposição de segredos e manipulação insegura de dados.",
        "serve": "Reduzir vulnerabilidades em aplicações web.",
        "how": "Prefira textContent para texto externo, valide no servidor quando houver backend, não coloque chaves secretas no front-end e trate dados externos com cuidado.",
        "example": "const mensagem = userInput;\nelement.textContent = mensagem;",
        "why": "Segurança deve fazer parte da construção do projeto.",
        "result": "O texto do utilizador é mostrado como texto, não executado como HTML."
      },
      {
        "level": 4,
        "title": "Desempenho",
        "what": "Performance envolve reduzir trabalho desnecessário, evitar listeners e renders excessivos e carregar scripts de forma adequada.",
        "serve": "Criar interfaces rápidas e responsivas.",
        "how": "Use defer quando fizer sentido, delegação de eventos em listas grandes, debounce/throttle para eventos frequentes e manipulação eficiente do DOM.",
        "example": "document.querySelector('#pesquisa').addEventListener('input', debounce(buscar, 300));",
        "why": "Pequenas escolhas podem fazer diferença em interfaces dinâmicas.",
        "result": "A busca não é executada centenas de vezes por segundo quando o utilizador escreve rapidamente."
      },
      {
        "level": 4,
        "title": "defer e async",
        "what": "defer faz scripts externos executarem depois da análise do documento e na ordem em que aparecem; async carrega e executa assim que estiver pronto, sem garantir a mesma ordem.",
        "serve": "Controlar carregamento de scripts.",
        "how": "Use defer para scripts que dependem do DOM e precisam manter ordem. Use async para scripts independentes quando essa ordem não importa.",
        "example": "<script src=\"app.js\" defer></script>\n<script src=\"analytics.js\" async></script>",
        "why": "Evita bloquear desnecessariamente a construção da página.",
        "result": "Os scripts são carregados com o comportamento apropriado para cada caso."
      },
      {
        "level": 4,
        "title": "Debugging com console e DevTools",
        "what": "console.log, console.table, console.error e as ferramentas do navegador ajudam a observar valores e execução.",
        "serve": "Encontrar e corrigir problemas.",
        "how": "Use breakpoints, inspeção de variáveis, Network, Elements e Console. Remova logs de depuração desnecessários antes de publicar.",
        "example": "console.table([{nome:'Ana',nota:18},{nome:'João',nota:16}]);",
        "why": "Depurar é uma habilidade essencial.",
        "result": "O console mostra os dados numa tabela fácil de ler."
      },
      {
        "level": 4,
        "title": "Arquitetura e módulos",
        "what": "Aplicações maiores precisam separar responsabilidades, dados, interface e serviços.",
        "serve": "Evitar arquivos gigantes e lógica difícil de testar.",
        "how": "Divida o projeto em módulos e funções pequenas. Defina nomes claros e evite dependências circulares desnecessárias.",
        "example": "src/\n├─ app.js\n├─ ui.js\n├─ api.js\n└─ utils.js",
        "why": "A organização acompanha o crescimento do projeto.",
        "result": "Cada arquivo possui uma responsabilidade mais fácil de localizar."
      },
      {
        "level": 4,
        "title": "Projeto JavaScript completo",
        "what": "Um projeto real combina HTML, CSS e JavaScript: seleciona elementos, reage a eventos, atualiza o DOM, valida dados e pode guardar estado.",
        "serve": "Ver como os conceitos se juntam numa aplicação.",
        "how": "Crie a estrutura HTML, estilos, referências aos elementos, estado, funções e listeners. Só depois acrescente armazenamento ou API quando necessário.",
        "example": "const input = document.querySelector('#nome');\nconst botao = document.querySelector('#mostrar');\nconst saida = document.querySelector('#saida');\n\nbotao.addEventListener('click', () => {\n  const nome = input.value.trim();\n  saida.textContent = nome ? `Olá, ${nome}!` : 'Digite o seu nome.';\n});",
        "why": "Mostra a passagem do conceito isolado para uma pequena aplicação.",
        "result": "Ao clicar no botão, a aplicação valida o campo e mostra uma mensagem na página."
      }
    ]
  },
  {
    "id": "python",
    "name": "Python",
    "intro": "Python é uma linguagem de programação conhecida pela sintaxe simples. Nesta versão, o manual ensina Python, mas o editor do navegador executa HTML/CSS/JavaScript.",
    "items": [
      [
        "Olá mundo",
        "O primeiro exemplo tradicional de Python usa print.",
        "print(\"Olá, mundo!\")",
        "print mostra informação no ecrã."
      ],
      [
        "Variáveis",
        "Variáveis guardam valores.",
        "nome = \"Maria\"\nidade = 25\nprint(nome, idade)",
        "Python não exige declarar o tipo da variável antes de usá-la."
      ],
      [
        "Condições",
        "if permite tomar decisões.",
        "idade = 18\nif idade >= 18:\n    print(\"Maior de idade\")",
        "A indentação é muito importante em Python."
      ],
      [
        "Listas",
        "Listas guardam vários valores.",
        "frutas = [\"maçã\", \"banana\", \"laranja\"]\nprint(frutas[0])",
        "Tal como em JavaScript, a primeira posição é 0."
      ],
      [
        "Ciclos",
        "for pode repetir uma ação para cada item.",
        "for fruta in [\"maçã\", \"banana\"]:\n    print(fruta)",
        "Ciclos ajudam a trabalhar com listas e tarefas repetitivas."
      ],
      [
        "Funções",
        "def cria uma função reutilizável.",
        "def somar(a, b):\n    return a + b\n\nprint(somar(2, 3))",
        "Funções deixam programas maiores mais organizados."
      ]
    ]
  }
];

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
let editorProject=null;
let activeFileId=null;
let selectedFolderId=null;
const expandedFolderIds=new Set();
let pendingImportFolderId;
let editorDirty=false;
let fileClipboard=null;
let lastInteractionZone="app";
let fileShortcutTargetId=null;
const editorHistory={undo:[],redo:[],pendingTextBefore:null,textTimer:null,lastState:null,restoring:false};
const EDITOR_HISTORY_LIMIT=80;
let manualLanguage="html";
let manualShortcutsActive=false;
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
    psSnap.forEach(doc=>{
      const x=doc.data();
      projects.push(normalizeProject({id:doc.id,name:x.name,lang:x.language||"html",code:x.code||"",files:x.files||[],favorite:!!x.favorite,updated:x.updated_at||x.created_at||new Date().toISOString(),created:x.created_at||x.updated_at||new Date().toISOString()}));
    });
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
    const normalized=normalizeProject(p);
    p.files=normalized.files;
    p.folders=normalized.folders;
    p.code=getPrimaryFile(normalized)?.content||p.code||"";
    const ref=userCollection("projects").doc(id);
    await ref.set({name:p.name||"Meu projeto",language:p.lang||"html",code:p.code||"",files:p.files||[],folders:p.folders||[],favorite:!!p.favorite,updated_at:p.updated||new Date().toISOString(),created_at:p.created||p.updated||new Date().toISOString()},{merge:true});
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

function createNodeId(prefix="node"){
  if(window.crypto&&typeof window.crypto.randomUUID==="function") return `${prefix}_${window.crypto.randomUUID()}`;
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2,9)}`;
}

function getFileExtension(name){
  const value=String(name||"").trim().toLowerCase();
  const parts=value.split(".");
  return parts.length>1?parts.pop():"";
}

function getFileLanguage(file){
  const ext=getFileExtension(file?.name);
  if(["js","mjs","cjs","jsx","ts","tsx"].includes(ext)) return "javascript";
  if(ext==="css") return "css";
  if(["html","htm"].includes(ext)) return "html";
  if(ext==="json") return "json";
  if(ext==="py") return "python";
  return "text";
}

function normalizeProject(project){
  const p={...(project||{})};
  p.id=String(p.id||createNodeId("project"));
  p.name=p.name||"Meu projeto";
  p.lang=p.lang||p.language||"html";
  p.favorite=!!p.favorite;
  p.updated=p.updated||new Date().toISOString();
  p.created=p.created||p.updated;

  const rawFolders=Array.isArray(project?.folders)?project.folders:[];
  const rawFiles=Array.isArray(project?.files)?project.files:[];
  p.folders=rawFolders.map((folder,i)=>({
    id:String(folder.id||createNodeId("folder")),
    name:cleanNodeName(folder.name||`pasta-${i+1}`),
    parentId:folder.parentId?String(folder.parentId):null,
    order:Number.isFinite(folder.order)?folder.order:i
  })).filter(folder=>folder.name);
  const folderIds=new Set(p.folders.map(folder=>folder.id));
  p.folders.forEach(folder=>{if(folder.parentId&&!folderIds.has(folder.parentId)) folder.parentId=null;});

  if(rawFiles.length){
    p.files=rawFiles.map((file,i)=>({
      id:String(file.id||createNodeId("file")),
      name:cleanNodeName(file.name||`arquivo-${i+1}.txt`),
      parentId:file.parentId?String(file.parentId):null,
      content:String(file.content??file.code??""),
      binary:!!file.binary,
      mimeType:String(file.mimeType||"application/octet-stream"),
      order:Number.isFinite(file.order)?file.order:i
    })).filter(file=>file.name);
  }else{
    const filename=p.lang==="javascript"?"script.js":"index.html";
    p.files=[{id:createNodeId("file"),name:filename,parentId:null,content:String(p.code||defaultCode),order:0}];
  }
  p.files.forEach(file=>{if(file.parentId&&!folderIds.has(file.parentId)) file.parentId=null;});
  const primary=getPrimaryFile(p);
  p.code=primary?.content||p.code||"";
  return p;
}

function cleanNodeName(name){
  return String(name||"").trim().replace(/[\\/]/g, "-").replace(/\s+/g," ");
}

function getPrimaryFile(project){
  if(!project||!Array.isArray(project.files)) return null;
  return project.files.find(f=>getFileExtension(f.name)==="html"&&f.parentId===null)
    || project.files.find(f=>getFileExtension(f.name)==="html")
    || project.files[0]
    || null;
}

function getFolderById(id){
  return editorProject?.folders?.find(folder=>String(folder.id)===String(id))||null;
}

function expandFolderPath(folderId){
  let folder=getFolderById(folderId),guard=0;
  while(folder&&guard++<100){
    expandedFolderIds.add(String(folder.id));
    folder=folder.parentId?getFolderById(folder.parentId):null;
  }
}

function getFileById(id){
  return editorProject?.files?.find(file=>String(file.id)===String(id))||null;
}

function captureEditorState(){
  const editor=$("#codeEditor");
  const value=editor?.value||"";
  let projectCopy=null;
  if(editorProject){
    /* Copie superficielle des metadados: as strings dos ficheiros (incluindo binários grandes)
       são imutáveis e podem ser partilhadas entre snapshots do histórico. */
    projectCopy={...editorProject,
      folders:(editorProject.folders||[]).map(folder=>({...folder})),
      files:(editorProject.files||[]).map(file=>({...file}))
    };
    if(activeFileId){
      const active=projectCopy.files?.find(file=>String(file.id)===String(activeFileId));
      if(active&&!active.binary) active.content=value;
      const primary=getPrimaryFile(projectCopy);
      if(primary) projectCopy.code=primary.content||"";
    }
  }
  return {
    project:projectCopy,
    currentProjectId,
    activeFileId:activeFileId==null?null:String(activeFileId),
    selectedFolderId:selectedFolderId==null?null:String(selectedFolderId),
    openFileIds:Array.isArray(window.openFileIds)?window.openFileIds.map(String):[],
    expandedFolderIds:Array.from(expandedFolderIds),
    editorValue:value,
    editorReadOnly:!!editor?.readOnly,
    editorDirty:!!editorDirty,
    projectName:$("#projectName")?.value||"Meu projeto",
    language:$("#language")?.value||"html",
    selectionStart:editor?.selectionStart??0,
    selectionEnd:editor?.selectionEnd??0
  };
}

function sameRecordList(a,b,keys){
  if((a||[]).length!==(b||[]).length) return false;
  for(let i=0;i<(a||[]).length;i++){
    for(const key of keys) if(a[i]?.[key]!==b[i]?.[key]) return false;
  }
  return true;
}
function sameProjectState(a,b){
  if(a===b) return true;
  if(!a||!b) return false;
  for(const key of ["id","name","lang","favorite","updated","created","code"]) if(a[key]!==b[key]) return false;
  return sameRecordList(a.folders,b.folders,["id","name","parentId","order"])
    &&sameRecordList(a.files,b.files,["id","name","parentId","content","binary","mimeType","order"]);
}
function historyStateChanged(before,after){
  if(!before||!after) return true;
  return !sameProjectState(before.project,after.project)
    || before.currentProjectId!==after.currentProjectId
    || before.activeFileId!==after.activeFileId
    || before.selectedFolderId!==after.selectedFolderId
    || before.editorValue!==after.editorValue
    || before.editorReadOnly!==after.editorReadOnly
    || before.editorDirty!==after.editorDirty
    || before.projectName!==after.projectName
    || before.language!==after.language
    || before.openFileIds.join("\0")!==after.openFileIds.join("\0")
    || before.expandedFolderIds.join("\0")!==after.expandedFolderIds.join("\0");
}
function pushUndoState(snapshot){
  if(!snapshot) return;
  editorHistory.undo.push(snapshot);
  if(editorHistory.undo.length>EDITOR_HISTORY_LIMIT) editorHistory.undo.shift();
  editorHistory.redo.length=0;
}
function flushPendingTextHistory(){
  if(editorHistory.textTimer){clearTimeout(editorHistory.textTimer);editorHistory.textTimer=null;}
  if(editorHistory.pendingTextBefore){
    const before=editorHistory.pendingTextBefore;
    const after=captureEditorState();
    if(historyStateChanged(before,after)) pushUndoState(before);
    editorHistory.pendingTextBefore=null;
  }
  if(!editorHistory.restoring) editorHistory.lastState=captureEditorState();
}
function resetEditorHistory(){
  if(editorHistory.textTimer) clearTimeout(editorHistory.textTimer);
  editorHistory.undo.length=0;
  editorHistory.redo.length=0;
  editorHistory.pendingTextBefore=null;
  editorHistory.textTimer=null;
  editorHistory.restoring=false;
  editorHistory.lastState=captureEditorState();
}
function beginTrackedEdit(){
  flushPendingTextHistory();
  return captureEditorState();
}
function finishTrackedEdit(before){
  const after=captureEditorState();
  if(historyStateChanged(before,after)) pushUndoState(before);
  editorHistory.lastState=after;
}
function syncHistoryBaseline(){
  flushPendingTextHistory();
  editorHistory.lastState=captureEditorState();
}
function restoreEditorState(snapshot){
  if(!snapshot) return;
  if(editorHistory.textTimer) clearTimeout(editorHistory.textTimer);
  editorHistory.textTimer=null;
  editorHistory.pendingTextBefore=null;
  editorHistory.restoring=true;
  const persistedProjectId=currentProjectId;
  editorProject=snapshot.project?normalizeProject(snapshot.project):null;
  currentProjectId=persistedProjectId||snapshot.currentProjectId||null;
  if(editorProject&&currentProjectId) editorProject.id=currentProjectId;
  activeFileId=snapshot.activeFileId&&getFileById(snapshot.activeFileId)?String(snapshot.activeFileId):String(editorProject?.files?.[0]?.id||"")||null;
  selectedFolderId=snapshot.selectedFolderId&&getFolderById(snapshot.selectedFolderId)?String(snapshot.selectedFolderId):null;
  window.openFileIds=(snapshot.openFileIds||[]).filter(id=>getFileById(id)).map(String);
  if(activeFileId&&!window.openFileIds.includes(String(activeFileId))) window.openFileIds.push(String(activeFileId));
  expandedFolderIds.clear();
  (snapshot.expandedFolderIds||[]).forEach(id=>{if(getFolderById(id)) expandedFolderIds.add(String(id));});
  editorDirty=!!snapshot.editorDirty;
  const nameInput=$("#projectName"),languageInput=$("#language"),editor=$("#codeEditor");
  if(nameInput) nameInput.value=snapshot.projectName||editorProject?.name||"Meu projeto";
  if(languageInput) languageInput.value=snapshot.language||editorProject?.lang||"html";
  if(editor){
    editor.readOnly=!!snapshot.editorReadOnly;
    const file=getFileById(activeFileId);
    editor.value=file?.binary?(snapshot.editorValue||`[Ficheiro binário importado: ${file.name}]`):(snapshot.editorValue??file?.content??"");
    editor.setAttribute("aria-label",file?.binary?`Ficheiro binário ${file.name}, apenas para leitura`:"Editor de código");
    const start=Math.min(snapshot.selectionStart??0,editor.value.length);
    const end=Math.min(snapshot.selectionEnd??start,editor.value.length);
    try{editor.setSelectionRange(start,end);}catch{}
  }
  updateLines();
  renderFileSystem();
  editorHistory.restoring=false;
  editorHistory.lastState=captureEditorState();
}
function undoEditorAction(){
  flushPendingTextHistory();
  if(!editorHistory.undo.length){toast("Não há acções para desfazer.");return;}
  const current=captureEditorState();
  const previous=editorHistory.undo.pop();
  editorHistory.redo.push(current);
  restoreEditorState(previous);
  fileClipboard=null;
  renderFileTree();
  toast("Acção desfeita.");
}
function redoEditorAction(){
  flushPendingTextHistory();
  if(!editorHistory.redo.length){toast("Não há acções para refazer.");return;}
  const current=captureEditorState();
  const next=editorHistory.redo.pop();
  editorHistory.undo.push(current);
  if(editorHistory.undo.length>EDITOR_HISTORY_LIMIT) editorHistory.undo.shift();
  restoreEditorState(next);
  fileClipboard=null;
  renderFileTree();
  toast("Acção refeita.");
}
function noteCodeEditorInput(){
  if(editorHistory.restoring){updateLines();return;}
  lastInteractionZone="editor";
  if(!editorHistory.pendingTextBefore) editorHistory.pendingTextBefore=editorHistory.lastState||captureEditorState();
  if(editorHistory.textTimer) clearTimeout(editorHistory.textTimer);
  fileClipboard=null;
  syncTextareaToActiveFile();
  updateLines();
  renderFileTree();
  renderFileTabs();
  editorHistory.lastState=captureEditorState();
  editorHistory.textTimer=setTimeout(flushPendingTextHistory,450);
}
function replaceEditorText(value,selectionStart,selectionEnd,label="Código alterado"){
  const editor=$("#codeEditor");
  if(!editor||editor.readOnly) return;
  const before=beginTrackedEdit();
  editor.value=value;
  const start=Math.max(0,Math.min(Number(selectionStart)||0,value.length));
  const end=Math.max(start,Math.min(Number(selectionEnd??start)||0,value.length));
  try{editor.setSelectionRange(start,end);}catch{}
  fileClipboard=null;
  syncTextareaToActiveFile();
  updateLines();renderFileTree();renderFileTabs();
  finishTrackedEdit(before);
  toast(label);
}

function getNodePath(node){
  if(!node) return "";
  const names=[node.name];
  let parentId=node.parentId||null;
  const seen=new Set();
  while(parentId&&!seen.has(parentId)){
    seen.add(parentId);
    const folder=getFolderById(parentId);
    if(!folder) break;
    names.unshift(folder.name);
    parentId=folder.parentId||null;
  }
  return names.join("/");
}

function getFolderPath(folderId){
  if(!folderId) return "Raiz do projeto";
  const folder=getFolderById(folderId);
  return folder?getNodePath(folder):"Raiz do projeto";
}

function getChildrenFolders(parentId){
  return (editorProject?.folders||[]).filter(folder=>(folder.parentId||null)===(parentId||null)).sort((a,b)=>a.name.localeCompare(b.name,"pt"));
}

function getChildrenFiles(parentId){
  return (editorProject?.files||[]).filter(file=>(file.parentId||null)===(parentId||null)).sort((a,b)=>a.name.localeCompare(b.name,"pt"));
}

function isNameTaken(name,parentId,type,ignoreId=null){
  const collection=type==="folder"?(editorProject?.folders||[]):(editorProject?.files||[]);
  return collection.some(item=>String(item.id)!==String(ignoreId)&&item.name.toLowerCase()===name.toLowerCase()&&(item.parentId||null)===(parentId||null));
}

function getFileIcon(file){
  const ext=getFileExtension(file.name);
  const icons={html:"◈",css:"#",js:"JS",mjs:"JS",cjs:"JS",jsx:"JS",ts:"TS",tsx:"TS",json:"{}",py:"PY",md:"M"};
  return icons[ext]||"•";
}

function renderFileTree(){
  const tree=$("#fileTree"), location=$("#fileLocation");
  if(!tree||!editorProject) return;
  if(location) location.textContent=getFolderPath(selectedFolderId);
  const renderLevel=(parentId,depth)=>{
    const folders=getChildrenFolders(parentId);
    const files=getChildrenFiles(parentId);
    let html="";
    folders.forEach(folder=>{
      const expanded=expandedFolderIds.has(String(folder.id));
      const folderId=escapeHtml(folder.id);
      html+=`<button class="file-node folder-node ${String(selectedFolderId)===String(folder.id)?"active":""}" style="padding-left:${9+depth*17}px" data-node-type="folder" data-node-id="${folderId}" type="button" aria-expanded="${expanded}" data-drop-target="folder"><span class="file-icon">${expanded?"⌄":"›"}</span><span class="file-name">${escapeHtml(folder.name)}</span><span class="folder-import" role="button" tabindex="0" title="Importar ficheiros para esta pasta" aria-label="Importar ficheiros para ${escapeHtml(folder.name)}" data-node-action="import" data-node-type="folder" data-node-id="${folderId}">↑</span><span class="node-actions"><span role="button" tabindex="0" title="Renomear" data-node-action="rename" data-node-type="folder" data-node-id="${folderId}">✎</span><span role="button" tabindex="0" title="Apagar" data-node-action="delete" data-node-type="folder" data-node-id="${folderId}">×</span></span></button>`;
      if(expanded) html+=renderLevel(folder.id,depth+1);
    });
    files.forEach(file=>{
      html+=`<button class="file-node ${String(activeFileId)===String(file.id)?"active":""} ${fileClipboard?.mode==="cut"&&String(fileClipboard.id)===String(file.id)?"cut-pending":""}" style="padding-left:${9+depth*17}px" data-node-type="file" data-node-id="${escapeHtml(file.id)}" type="button" draggable="true" title="Arraste para uma pasta ou use Ctrl+X e Ctrl+V"><span class="file-icon">${getFileIcon(file)}</span><span class="file-name">${escapeHtml(file.name)}${editorDirty&&String(activeFileId)===String(file.id)?" •":""}</span><span class="node-actions"><span role="button" tabindex="0" title="Duplicar" data-node-action="duplicate" data-node-type="file" data-node-id="${escapeHtml(file.id)}">⧉</span><span role="button" tabindex="0" title="Renomear" data-node-action="rename" data-node-type="file" data-node-id="${escapeHtml(file.id)}">✎</span><span role="button" tabindex="0" title="Apagar" data-node-action="delete" data-node-type="file" data-node-id="${escapeHtml(file.id)}">×</span></span></button>`;
    });
    return html;
  };
  const html=renderLevel(null,0);
  tree.innerHTML=html||`<div class="file-empty">Este projeto ainda não tem arquivos.<br>Use “＋ Arquivo” para começar.</div>`;
}

function renderFileTabs(){
  const tabs=$("#fileTabs");
  if(!tabs||!editorProject) return;
  const open=(editorProject.files||[]).filter(file=>(window.openFileIds||[]).includes(String(file.id)));
  tabs.innerHTML=open.map(file=>`<button class="file-tab ${String(activeFileId)===String(file.id)?"active":""}" data-tab-id="${escapeHtml(file.id)}" role="tab" type="button"><span class="tab-icon">${getFileIcon(file)}</span><span class="tab-name">${escapeHtml(file.name)}</span>${editorDirty&&String(activeFileId)===String(file.id)?'<span class="dirty">●</span>':""}</button>`).join("");
}

function renderFileSystem(){
  renderFileTree();
  renderFileTabs();
  const file=getFileById(activeFileId);
  const title=$("#activeFilePath");
  if(title) title.textContent=file?getNodePath(file):"Nenhum arquivo";
  if(file&&$("#fileLocation")) $("#fileLocation").textContent=getFolderPath(file.parentId);
}

function syncTextareaToActiveFile(){
  const file=getFileById(activeFileId);
  if(!file||!$("#codeEditor")||file.binary) return;
  const value=$("#codeEditor").value;
  if(file.content!==value) editorDirty=true;
  file.content=value;
  const primary=getPrimaryFile(editorProject);
  if(primary) editorProject.code=primary.content;
}

function showFileInEditor(file){
  const editor=$("#codeEditor");
  if(!editor) return;
  editor.readOnly=!!file?.binary;
  editor.value=file?.binary
    ? `[Ficheiro binário importado: ${file.name}]\nTipo: ${file.mimeType||"desconhecido"}\nEste ficheiro será mantido intacto. Use “Baixar” para o exportar.`
    : (file?.content||"");
  editor.setAttribute("aria-label",file?.binary?`Ficheiro binário ${file.name}, apenas para leitura`:"Editor de código");
}

function loadActiveFile(fileId,focus=false){
  if(!editorProject) return;
  flushPendingTextHistory();
  syncTextareaToActiveFile();
  const file=getFileById(fileId);
  if(!file) return;
  activeFileId=String(file.id);
  selectedFolderId=file.parentId||null;
  window.openFileIds=Array.isArray(window.openFileIds)?window.openFileIds.map(String):[];
  if(!window.openFileIds.includes(String(file.id))) window.openFileIds.push(String(file.id));
  showFileInEditor(file);
  editorDirty=false;
  updateLines();
  renderFileSystem();
  if(focus) $("#codeEditor").focus();
  syncHistoryBaseline();
}

function makeDefaultProject(){
  const indexId=createNodeId("file");
  const cssId=createNodeId("file");
  const jsId=createNodeId("file");
  const files=[
    {id:indexId,name:"index.html",parentId:null,order:0,content:`<!DOCTYPE html>\n<html lang="pt">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Meu projeto</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Olá, LUZACODE!</h1>\n  <p>Edite os arquivos do projeto e execute para ver o resultado.</p>\n  <button id="btnSaudar">Clique aqui</button>\n  <script src="script.js"></script>\n</body>\n</html>`},
    {id:cssId,name:"style.css",parentId:null,order:1,content:`body {\n  font-family: Arial, sans-serif;\n  padding: 40px;\n}\n\nh1 {\n  color: #4f46e5;\n}\n\nbutton {\n  padding: 10px 15px;\n  cursor: pointer;\n}`},
    {id:jsId,name:"script.js",parentId:null,order:2,content:`const botao = document.getElementById("btnSaudar");\n\nbotao.addEventListener("click", () => {\n  console.log("Botão clicado.");\n  alert("Você executou JavaScript!");\n});`}
  ];
  return {id:null,name:"Meu projeto",lang:"html",code:files[0].content,files,folders:[],favorite:false,updated:new Date().toISOString(),created:new Date().toISOString()};
}

function resetEditor(){
  currentProjectId=null;
  editorProject=makeDefaultProject();
  activeFileId=String(editorProject.files[0].id);
  selectedFolderId=null;
  window.openFileIds=[activeFileId];
  editorDirty=false;
  $("#projectName").value="Meu projeto";
  $("#language").value="html";
  $("#codeEditor").readOnly=false;
  $("#codeEditor").value=editorProject.files[0].content;
  $("#codeEditor").setAttribute("aria-label","Editor de código");
  updateLines();
  renderFileSystem();
  $("#console").textContent="Novo projeto pronto. Crie arquivos e pastas e clique em “Executar”.";
  fileClipboard=null;
  fileShortcutTargetId=null;
  lastInteractionZone="app";
  resetEditorHistory();
}

function ensureEditorProject(){
  if(!editorProject){resetEditor();}
  editorProject=normalizeProject(editorProject);
  if(!activeFileId||!getFileById(activeFileId)) activeFileId=String(editorProject.files[0]?.id||"");
  window.openFileIds=Array.isArray(window.openFileIds)&&window.openFileIds.length?window.openFileIds.map(String):[String(activeFileId)];
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
$("#codeEditor").oninput=noteCodeEditorInput;
$("#codeEditor").addEventListener("focus",()=>{lastInteractionZone="editor";});
$("#codeEditor").addEventListener("pointerdown",()=>{lastInteractionZone="editor";});
$("#codeEditor").onscroll=()=>$("#lineNums").scrollTop=$("#codeEditor").scrollTop;

function createFile(){
  const historyBefore=beginTrackedEdit();
  ensureEditorProject();
  const folderId=selectedFolderId||null;
  let name=prompt(`Nome do novo arquivo${folderId?` dentro de “${getFolderById(folderId)?.name||"pasta"}”`:" na raiz do projeto"}:`,"index.html");
  if(name===null) return;
  name=cleanNodeName(name);
  if(!name) return toast("Indique um nome para o arquivo.");
  if(!name.includes(".")) name += ".txt";
  if(isNameTaken(name,folderId,"file")) return toast("Já existe um arquivo com esse nome nessa pasta.");
  const ext=getFileExtension(name);
  let content="";
  if(ext==="html") content='<!DOCTYPE html>\n<html lang="pt">\n<head>\n  <meta charset="UTF-8">\n  <title>Novo arquivo</title>\n</head>\n<body>\n\n</body>\n</html>';
  else if(ext==="css") content='body {\n  margin: 0;\n}\n';
  else if(["js","mjs","cjs","jsx","ts","tsx"].includes(ext)) content='// Novo arquivo JavaScript\n';
  else if(ext==="json") content='{}';
  const file={id:createNodeId("file"),name,parentId:folderId,content,order:Date.now()};
  editorProject.files.push(file);
  if(folderId) expandFolderPath(folderId);
  activeFileId=String(file.id);
  window.openFileIds=Array.isArray(window.openFileIds)?window.openFileIds.map(String):[];
  window.openFileIds.push(String(file.id));
  $("#codeEditor").readOnly=false;
  $("#codeEditor").setAttribute("aria-label","Editor de código");
  $("#codeEditor").value=content;
  editorDirty=true;
  updateLines();
  renderFileSystem();
  $("#codeEditor").focus();
  finishTrackedEdit(historyBefore);
  toast(`Arquivo “${name}” criado.`);
}

function createFolder(){
  const historyBefore=beginTrackedEdit();
  ensureEditorProject();
  const parentId=selectedFolderId||null;
  let name=prompt(`Nome da nova pasta${parentId?` dentro de “${getFolderById(parentId)?.name||"pasta"}”`:" na raiz do projeto"}:`,"nova-pasta");
  if(name===null) return;
  name=cleanNodeName(name);
  if(!name) return toast("Indique um nome para a pasta.");
  if(isNameTaken(name,parentId,"folder")) return toast("Já existe uma pasta com esse nome nesse local.");
  const folder={id:createNodeId("folder"),name,parentId,order:Date.now()};
  editorProject.folders.push(folder);
  if(parentId) expandFolderPath(parentId);
  selectedFolderId=String(folder.id);
  renderFileSystem();
  finishTrackedEdit(historyBefore);
  toast(`Pasta “${name}” criada.`);
}

function renameNode(type,id){
  const historyBefore=beginTrackedEdit();
  ensureEditorProject();
  const collection=type==="folder"?editorProject.folders:editorProject.files;
  const node=collection.find(item=>String(item.id)===String(id));
  if(!node) return;
  let name=prompt("Novo nome:",node.name);
  if(name===null) return;
  name=cleanNodeName(name);
  if(!name) return toast("O nome não pode ficar vazio.");
  if(type==="file"&&!name.includes(".")) name += ".txt";
  if(isNameTaken(name,node.parentId||null,type,node.id)) return toast("Já existe um item com esse nome nesse local.");
  node.name=name;
  editorDirty=true;
  renderFileSystem();
  finishTrackedEdit(historyBefore);
  toast("Nome atualizado.");
}

function duplicateFile(id){
  const historyBefore=beginTrackedEdit();
  ensureEditorProject();
  const source=getFileById(id); if(!source) return;
  const dot=source.name.lastIndexOf(".");
  const base=dot>0?source.name.slice(0,dot):source.name;
  const ext=dot>0?source.name.slice(dot):"";
  let name=`${base} copy${ext}`;
  let n=2;
  while(isNameTaken(name,source.parentId||null,"file")) name=`${base} copy ${n++}${ext}`;
  const file={id:createNodeId("file"),name,parentId:source.parentId||null,content:source.content,binary:!!source.binary,mimeType:source.mimeType||"application/octet-stream",order:Date.now()};
  editorProject.files.push(file);
  activeFileId=String(file.id);
  window.openFileIds=Array.isArray(window.openFileIds)?window.openFileIds.map(String):[];
  window.openFileIds.push(String(file.id));
  showFileInEditor(file);
  editorDirty=false;
  updateLines();
  renderFileSystem();
  finishTrackedEdit(historyBefore);
  toast(`Cópia “${name}” criada.`);
}

function removeFolderRecursive(folderId){
  const ids=new Set([String(folderId)]);
  let changed=true;
  while(changed){
    changed=false;
    (editorProject.folders||[]).forEach(folder=>{
      if(folder.parentId&&ids.has(String(folder.parentId))&&!ids.has(String(folder.id))){ids.add(String(folder.id));changed=true;}
    });
  }
  editorProject.folders=editorProject.folders.filter(folder=>!ids.has(String(folder.id)));
  editorProject.files=editorProject.files.filter(file=>!file.parentId||!ids.has(String(file.parentId)));
  if(activeFileId&&!getFileById(activeFileId)){
    const next=editorProject.files[0];
    activeFileId=next?String(next.id):null;
    window.openFileIds=next?[String(next.id)]:[];
    showFileInEditor(next);
  }
}

function deleteNode(type,id){
  const historyBefore=beginTrackedEdit();
  ensureEditorProject();
  if(type==="file"){
    if(editorProject.files.length<=1) return toast("O projeto precisa ter pelo menos um arquivo.");
    const file=getFileById(id); if(!file) return;
    if(!confirm(`Apagar “${file.name}”?`)) return;
    syncTextareaToActiveFile();
    editorProject.files=editorProject.files.filter(item=>String(item.id)!==String(id));
    window.openFileIds=(window.openFileIds||[]).filter(openId=>String(openId)!==String(id));
    if(String(activeFileId)===String(id)){
      const next=editorProject.files[0];
      activeFileId=next?String(next.id):null;
      showFileInEditor(next);
    }
  }else{
    const folder=getFolderById(id); if(!folder) return;
    if(!confirm(`Apagar a pasta “${folder.name}” e todo o seu conteúdo?`)) return;
    syncTextareaToActiveFile();
    removeFolderRecursive(id);
    if(String(selectedFolderId)===String(id)) selectedFolderId=folder.parentId||null;
  }
  editorDirty=true;
  updateLines();
  renderFileSystem();
  finishTrackedEdit(historyBefore);
  toast("Item apagado.");
}

$("#newFileBtn").onclick=createFile;
$("#newFolderBtn").onclick=createFolder;
$("#importFilesBtn").onclick=()=>{pendingImportFolderId=undefined;$("#importFilesInput").click();};

const textFileExtensions=new Set(["txt","html","htm","css","js","mjs","cjs","jsx","ts","tsx","json","py","md","markdown","xml","csv","svg","sql","yml","yaml","ini","conf","log","sh","bash","bat","cmd","ps1","php","java","c","h","cpp","hpp","cs","go","rs","rb","pl","swift","kt","dart","vue","svelte","tex","tsv","properties","toml","env","gitignore","lock","r","ipynb","gradle","makefile","dockerfile","graphql","gql","astro","less","scss","sass"]);
function bytesToBase64(bytes){
  let binary="";
  const chunkSize=0x8000;
  for(let i=0;i<bytes.length;i+=chunkSize) binary+=String.fromCharCode(...bytes.subarray(i,Math.min(i+chunkSize,bytes.length)));
  return btoa(binary);
}
function base64ToBytes(value){
  const binary=atob(String(value||""));
  const bytes=new Uint8Array(binary.length);
  for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
  return bytes;
}
function uniqueImportedName(original,parentId){
  let name=cleanNodeName(original)||"ficheiro-importado.txt";
  if(!isNameTaken(name,parentId,"file")) return name;
  const dot=name.lastIndexOf("."),base=dot>0?name.slice(0,dot):name,ext=dot>0?name.slice(dot):"";
  let n=2,candidate=`${base} (${n})${ext}`;
  while(isNameTaken(candidate,parentId,"file")) candidate=`${base} (${++n})${ext}`;
  return candidate;
}
async function importSelectedFiles(fileList){
  ensureEditorProject();
  const requestedParentId=pendingImportFolderId;
  pendingImportFolderId=undefined;
  const selected=Array.from(fileList||[]);
  if(!selected.length) return;
  const historyBefore=beginTrackedEdit();
  const parentId=requestedParentId!==undefined?requestedParentId:(selectedFolderId||null);
  const collisions=selected.filter(picked=>{
    const name=cleanNodeName(picked.name).toLowerCase();
    return editorProject.files.some(file=>file.name.toLowerCase()===name&&(file.parentId||null)===(parentId||null));
  });
  const replaceConflicts=collisions.length?confirm(`Já existem ${collisions.length} ficheiro(s) com o mesmo nome.\n\nOK — substituir os ficheiros existentes.\nCancelar — importar cópias com nomes alternativos.`):false;
  let imported=0,failed=0,firstId=null;
  const replacedIds=new Set();
  for(const picked of selected){
    try{
      const bytes=new Uint8Array(await picked.arrayBuffer());
      const ext=getFileExtension(picked.name);
      const isText=(picked.type||"").startsWith("text/")||textFileExtensions.has(ext)||["application/json","application/javascript","application/xml","application/x-sh","application/sql"].includes((picked.type||"").toLowerCase());
      const content=isText?new TextDecoder("utf-8").decode(bytes):bytesToBase64(bytes);
      const binary=!isText,mimeType=picked.type||"application/octet-stream";
      const cleanName=cleanNodeName(picked.name)||"ficheiro-importado.txt";
      const existing=replaceConflicts?editorProject.files.find(file=>!replacedIds.has(String(file.id))&&file.name.toLowerCase()===cleanName.toLowerCase()&&(file.parentId||null)===(parentId||null)):null;
      if(existing){
        replacedIds.add(String(existing.id));
        existing.content=content;existing.binary=binary;existing.mimeType=mimeType;
        if(!firstId)firstId=String(existing.id);
      }else{
        const file={id:createNodeId("file"),name:uniqueImportedName(cleanName,parentId),parentId,content,binary,mimeType,order:Date.now()+imported};
        editorProject.files.push(file);
        if(!firstId)firstId=String(file.id);
      }
      imported++;
    }catch(err){console.error("Falha ao importar ficheiro:",picked?.name,err);failed++;}
  }
  if(imported){
    editorDirty=true;
    if(parentId){
      selectedFolderId=String(parentId);
      expandFolderPath(parentId);
    }
    if(firstId){
      const first=getFileById(firstId);
      activeFileId=firstId;
      window.openFileIds=Array.isArray(window.openFileIds)?window.openFileIds.map(String):[];
      if(!window.openFileIds.includes(firstId)) window.openFileIds.push(firstId);
      showFileInEditor(first);
    }
    updateLines();renderFileSystem();
    finishTrackedEdit(historyBefore);
    toast(`${imported} ficheiro(s) importado(s)${failed?`; ${failed} falharam`:""}.`);
  }else{
    finishTrackedEdit(historyBefore);
    toast("Não foi possível importar os ficheiros selecionados.");
  }
  $("#importFilesInput").value="";
}
$("#importFilesInput").addEventListener("change",e=>importSelectedFiles(e.target.files));
$("#importFilesInput").addEventListener("cancel",()=>{pendingImportFolderId=undefined;});

$("#fileTree").onclick=e=>{
  const action=e.target.closest("[data-node-action]");
  if(action){
    e.preventDefault();e.stopPropagation();
    fileShortcutTargetId=null;
    const type=action.dataset.nodeType,id=action.dataset.nodeId,op=action.dataset.nodeAction;
    if(op==="import"&&type==="folder"){
      syncTextareaToActiveFile();
      selectedFolderId=String(id);
      expandFolderPath(id);
      pendingImportFolderId=String(id);
      renderFileSystem();
      $("#importFilesInput").click();
    }
    if(op==="rename") renameNode(type,id);
    if(op==="duplicate"&&type==="file") duplicateFile(id);
    if(op==="delete") deleteNode(type,id);
    return;
  }
  const node=e.target.closest("[data-node-id]");
  if(!node) return;
  const type=node.dataset.nodeType,id=node.dataset.nodeId;
  if(type==="folder"){
    flushPendingTextHistory();
    syncTextareaToActiveFile();
    lastInteractionZone="fileTree";
    fileShortcutTargetId=null;
    selectedFolderId=String(id);
    if(expandedFolderIds.has(String(id))) expandedFolderIds.delete(String(id));
    else expandFolderPath(id);
    renderFileSystem();
    syncHistoryBaseline();
  }else{
    loadActiveFile(id,true);
    lastInteractionZone="fileTree";
    fileShortcutTargetId=String(id);
  }
};
$("#fileTabs").onclick=e=>{
  const tab=e.target.closest("[data-tab-id]");
  if(tab){
    loadActiveFile(tab.dataset.tabId,true);
    lastInteractionZone="fileTree";
    fileShortcutTargetId=String(tab.dataset.tabId);
  }
};

function uniqueCopiedFileName(fileName,parentId){
  const dot=fileName.lastIndexOf(".");
  const base=dot>0?fileName.slice(0,dot):fileName;
  const ext=dot>0?fileName.slice(dot):"";
  let candidate=`${base} copy${ext}`,n=2;
  while(isNameTaken(candidate,parentId,"file")) candidate=`${base} copy ${n++}${ext}`;
  return candidate;
}
function moveFileToFolder(fileId,destinationFolderId){
  ensureEditorProject();
  const file=getFileById(fileId);
  if(!file) return false;
  const parentId=destinationFolderId?String(destinationFolderId):null;
  if(parentId&&!getFolderById(parentId)){toast("A pasta de destino já não existe.");return false;}
  if((file.parentId||null)===(parentId||null)){toast("O ficheiro já está nesta pasta.");return false;}
  const historyBefore=beginTrackedEdit();
  syncTextareaToActiveFile();
  let renamed=false;
  if(isNameTaken(file.name,parentId,"file",file.id)){
    file.name=uniqueImportedName(file.name,parentId);
    renamed=true;
  }
  file.parentId=parentId;
  if(parentId){selectedFolderId=parentId;expandFolderPath(parentId);}else selectedFolderId=null;
  editorDirty=true;
  renderFileSystem();
  finishTrackedEdit(historyBefore);
  toast(renamed?`Ficheiro movido e renomeado para “${file.name}” por existir um nome igual.`:`Ficheiro “${file.name}” movido para ${parentId?`“${getFolderById(parentId)?.name||"pasta"}”`:"a raiz do projeto"}.`);
  return true;
}
function copyFileToFolder(fileId,destinationFolderId){
  ensureEditorProject();
  syncTextareaToActiveFile();
  const source=getFileById(fileId);
  if(!source) return false;
  const parentId=destinationFolderId?String(destinationFolderId):null;
  if(parentId&&!getFolderById(parentId)){toast("A pasta de destino já não existe.");return false;}
  const historyBefore=beginTrackedEdit();
  const file={id:createNodeId("file"),name:uniqueCopiedFileName(source.name,parentId),parentId,content:source.content,binary:!!source.binary,mimeType:source.mimeType||"application/octet-stream",order:Date.now()};
  editorProject.files.push(file);
  selectedFolderId=parentId;
  if(parentId) expandFolderPath(parentId);
  activeFileId=String(file.id);
  window.openFileIds=Array.isArray(window.openFileIds)?window.openFileIds.map(String):[];
  window.openFileIds.push(String(file.id));
  showFileInEditor(file);
  editorDirty=true;
  updateLines();renderFileSystem();
  finishTrackedEdit(historyBefore);
  toast(`Ficheiro copiado para “${getFolderById(parentId)?.name||"raiz do projeto"}”.`);
  return true;
}
function pasteFileClipboard(){
  if(!fileClipboard) return false;
  const clipboard={...fileClipboard};
  if(!getFileById(clipboard.id)){fileClipboard=null;renderFileTree();toast("O ficheiro copiado já não existe.");return true;}
  const destination=selectedFolderId||null;
  if(clipboard.mode==="cut"){
    const moved=moveFileToFolder(clipboard.id,destination);
    fileClipboard=null;
    renderFileTree();
    if(!moved) syncHistoryBaseline();
    return true;
  }
  copyFileToFolder(clipboard.id,destination);
  renderFileTree();
  return true;
}

let draggingProjectFileId=null;
$("#fileTree").addEventListener("dragstart",e=>{
  const fileNode=e.target.closest('.file-node[data-node-type="file"]');
  if(!fileNode||!getFileById(fileNode.dataset.nodeId)) return;
  draggingProjectFileId=String(fileNode.dataset.nodeId);
  e.dataTransfer?.setData("text/plain",`luzacode-file:${draggingProjectFileId}`);
  if(e.dataTransfer) e.dataTransfer.effectAllowed="move";
  fileNode.classList.add("dragging");
  fileClipboard=null;
});
$("#fileTree").addEventListener("dragover",e=>{
  if(!draggingProjectFileId||!getFileById(draggingProjectFileId)) return;
  e.preventDefault();
  if(e.dataTransfer) e.dataTransfer.dropEffect="move";
  $("#fileTree").querySelectorAll(".drop-target").forEach(node=>node.classList.remove("drop-target"));
  const folderNode=e.target.closest('.folder-node[data-drop-target="folder"]');
  if(folderNode) folderNode.classList.add("drop-target");
});
$("#fileTree").addEventListener("dragleave",e=>{
  if(e.relatedTarget&&$("#fileTree").contains(e.relatedTarget)) return;
  $("#fileTree").querySelectorAll(".drop-target").forEach(node=>node.classList.remove("drop-target"));
});
$("#fileTree").addEventListener("drop",e=>{
  if(!draggingProjectFileId||!getFileById(draggingProjectFileId)) return;
  e.preventDefault();
  const folderNode=e.target.closest('.folder-node[data-drop-target="folder"]');
  const destination=folderNode?folderNode.dataset.nodeId:null;
  const fileId=draggingProjectFileId;
  const siblingFile=e.target.closest('.file-node[data-node-type="file"]');
  const actualDestination=folderNode?destination:(siblingFile?(getFileById(siblingFile.dataset.nodeId)?.parentId||null):null);
  draggingProjectFileId=null;
  $("#fileTree").querySelectorAll(".drop-target,.dragging").forEach(node=>node.classList.remove("drop-target","dragging"));
  moveFileToFolder(fileId,actualDestination);
});
$("#fileTree").addEventListener("dragend",()=>{
  draggingProjectFileId=null;
  $("#fileTree").querySelectorAll(".drop-target,.dragging").forEach(node=>node.classList.remove("drop-target","dragging"));
});

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
function isEditableTarget(target){
  return !!target&&(target.isContentEditable||target.matches?.("input,textarea,select")&&target.id!=="codeEditor");
}
function duplicateEditorSelectionOrLine(){
  const editor=$("#codeEditor");
  if(!editor||editor.readOnly) return false;
  const value=editor.value;
  let start=editor.selectionStart,end=editor.selectionEnd,chunk="",insertAt=0;
  if(end>start){
    chunk=value.slice(start,end);
    insertAt=end;
  }else{
    const lineStart=value.lastIndexOf("\n",Math.max(0,start-1))+1;
    const nextBreak=value.indexOf("\n",start);
    const lineEnd=nextBreak===-1?value.length:nextBreak+1;
    chunk=value.slice(lineStart,lineEnd);
    insertAt=lineEnd;
    if(lineEnd===value.length&&chunk&&!chunk.endsWith("\n")) chunk="\n"+chunk;
  }
  if(!chunk) return false;
  replaceEditorText(value.slice(0,insertAt)+chunk+value.slice(insertAt),insertAt,insertAt+chunk.length,"Código duplicado.");
  editor.focus();
  return true;
}
function handleFileCopyCut(e,mode){
  const target=e.target;
  if(isEditableTarget(target)) return;
  const fileNode=target.closest?.('.file-node[data-node-type="file"]');
  const fileTab=target.closest?.('#fileTabs [data-tab-id]');
  // Depois de abrir um ficheiro, o foco passa para o editor. Usa-se o último ficheiro seleccionado na árvore apenas enquanto essa área continuar activa.
  const fileId=String(fileNode?.dataset.nodeId||fileTab?.dataset.tabId||(lastInteractionZone==="fileTree"?fileShortcutTargetId:"")||"");
  if(!fileId||!getFileById(fileId)) return;
  if(String(activeFileId)!==fileId) loadActiveFile(fileId,true);
  syncTextareaToActiveFile();
  fileClipboard={id:fileId,mode};
  e.preventDefault();
  renderFileTree();
  toast(mode==="cut"?"Ficheiro cortado. Seleccione a pasta de destino e prima Ctrl+V.":"Ficheiro copiado. Seleccione uma pasta e prima Ctrl+V para colar uma cópia.");
}
document.addEventListener("pointerdown",e=>{
  if(e.target.closest?.("#fileTree")||e.target.closest?.("#fileTabs")){lastInteractionZone="fileTree";return;}
  if(e.target.closest?.("#codeEditor")){lastInteractionZone="editor";return;}
  lastInteractionZone="app";
},true);
document.addEventListener("keydown",e=>{
  if(e.key==="Escape" && $("#codePanel").classList.contains("fullscreen")) exitFullscreen();
  if(e.key==="Escape" && $("#resultPanel").classList.contains("result-fullscreen")) exitResultFullscreen();

  const ctrl=e.ctrlKey||e.metaKey;
  const key=String(e.key||"").toLowerCase();
  const editor=$("#codeEditor");
  const editorFocused=e.target===editor;
  const editableElsewhere=isEditableTarget(e.target);

  if(ctrl&&key==="c"&&!e.shiftKey&&!e.altKey){
    if(editorFocused&&editor.selectionEnd>editor.selectionStart){fileClipboard=null;renderFileTree();return;}
    if(editorFocused&&lastInteractionZone!=="fileTree") return;
    handleFileCopyCut(e,"copy");
    return;
  }
  if(ctrl&&key==="x"&&!e.shiftKey&&!e.altKey){
    if(editorFocused&&editor.selectionEnd>editor.selectionStart){fileClipboard=null;renderFileTree();return;}
    if(editorFocused&&lastInteractionZone!=="fileTree") return;
    handleFileCopyCut(e,"cut");
    return;
  }
  if(ctrl&&key==="v"&&!e.shiftKey&&!e.altKey){
    const fileContext=lastInteractionZone==="fileTree"||!!e.target.closest?.("#fileTree")||!!e.target.closest?.("#fileTabs");
    if(fileClipboard&&fileContext&&!editableElsewhere){e.preventDefault();pasteFileClipboard();return;}
    return;
  }
  if(ctrl&&key==="z"&&!e.shiftKey&&!e.altKey){
    if(editableElsewhere)return;
    e.preventDefault();undoEditorAction();return;
  }
  if(ctrl&&key==="y"&&!e.shiftKey&&!e.altKey){
    if(editableElsewhere)return;
    e.preventDefault();redoEditorAction();return;
  }
  if(ctrl&&e.shiftKey&&key==="s"&&!e.altKey){e.preventDefault();flushPendingTextHistory();saveProject();return;}
  if(ctrl&&e.shiftKey&&key==="k"&&!e.altKey){
    e.preventDefault();
    if(editorFocused&&lastInteractionZone==="editor"&&!editor.readOnly){duplicateEditorSelectionOrLine();}
    else if(activeFileId) duplicateFile(activeFileId);
    return;
  }
  if(ctrl&&e.shiftKey&&key==="g"&&!e.altKey){e.preventDefault();createFolder();return;}
  if(ctrl&&e.shiftKey&&key==="e"&&!e.altKey){e.preventDefault();createFile();return;}
  if(ctrl&&e.shiftKey&&key==="l"&&!e.altKey){e.preventDefault();clearEditorCode();return;}
  if(e.altKey&&e.shiftKey&&key==="f"&&!ctrl){e.preventDefault();formatCode();return;}
  if(ctrl&&key==="m"&&!e.shiftKey&&!e.altKey){
    e.preventDefault();
    const checkbox=$("#lineNumbers");checkbox.checked=!checkbox.checked;
    $("#codePanel").classList.toggle("show-lines",checkbox.checked);updateLines();
    toast(checkbox.checked?"Números de linhas activados.":"Números de linhas ocultos.");return;
  }
  if(ctrl&&e.key==="Enter"&&!e.shiftKey&&!e.altKey){e.preventDefault();runCode();return;}
  if(ctrl&&key==="b"&&!e.shiftKey&&!e.altKey){
    e.preventDefault();
    if(document.body.classList.contains("sidebar-collapsed")) $("#showSidebarBtn").click();
    else $("#hideSidebarBtn").click();
    return;
  }
});

function formatCode(){
  const historyBefore=beginTrackedEdit();
  const ta=$("#codeEditor"), code=ta.value, file=getFileById(activeFileId), fileLang=getFileLanguage(file);
  if(file?.binary){toast("Este é um ficheiro binário e não pode ser formatado como texto.");return;}
  if(fileLang==="javascript"||$("#language").value==="javascript"){
    ta.value=code.replace(/;\s*/g,";\n").replace(/\{\s*/g," {\n").replace(/\}\s*/g,"}\n").replace(/\n{2,}/g,"\n").trim();
  } else {
    ta.value=code.replace(/>\s*</g,">\n<").replace(/\n{2,}/g,"\n").trim();
  }
  syncTextareaToActiveFile();
  updateLines(); renderFileTree(); renderFileTabs();
  finishTrackedEdit(historyBefore);
  toast("Código organizado.");
}
$("#formatBtn").onclick=formatCode;
function clearEditorCode(){
  const file=getFileById(activeFileId);
  if(file?.binary){toast("Este ficheiro binário não pode ser limpo no editor de texto.");return;}
  if(confirm("Tem a certeza de que pretende limpar todo o código deste ficheiro? Esta acção pode ser desfeita com Ctrl+Z.")){
    const historyBefore=beginTrackedEdit();
    $("#codeEditor").value="";syncTextareaToActiveFile();updateLines();renderFileTree();renderFileTabs();$("#console").textContent="Editor limpo.";
    finishTrackedEdit(historyBefore);
    toast("Código limpo.");
  }
}
$("#clearBtn").onclick=clearEditorCode;

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

function normalizeAssetReference(value){
  return String(value||"").split("#")[0].split("?")[0].trim().replace(/^\.\//,"").replace(/^\//,"");
}

function findAssetFile(files,reference){
  const target=normalizeAssetReference(reference);
  if(!target) return null;
  const exact=files.find(file=>normalizeAssetReference(getNodePath(file))===target);
  if(exact) return exact;
  return files.find(file=>file.name===target.split("/").pop())||null;
}

function composeProjectHtml(project){
  const htmlFile=getPrimaryFile(project);
  if(!htmlFile) return null;
  let html=htmlFile.content||"";
  const cssFiles=(project.files||[]).filter(file=>getFileExtension(file.name)==="css");
  const jsFiles=(project.files||[]).filter(file=>["js","mjs","cjs"].includes(getFileExtension(file.name)));
  const usedCss=new Set(), usedJs=new Set();

  html=html.replace(/<link\b([^>]*?)\bhref\s*=\s*["']([^"']+)["']([^>]*)>/gi,(tag,a,href,b)=>{
    const file=findAssetFile(cssFiles,href);
    if(!file) return tag;
    usedCss.add(String(file.id));
    return `<style data-luzacode-file="${escapeHtml(getNodePath(file))}">\n${String(file.content||"").replace(/<\/style>/gi,"<\\/style>")}\n</style>`;
  });

  html=html.replace(/<script\b([^>]*?)\bsrc\s*=\s*["']([^"']+)["']([^>]*)>\s*<\/script>/gi,(tag,a,src,b)=>{
    const file=findAssetFile(jsFiles,src);
    if(!file) return tag;
    usedJs.add(String(file.id));
    const attrs=`${a} ${b}`.trim();
    const content=String(file.content||"").replace(/<\/script>/gi,"<\\/script>");
    return `<script${attrs?` ${attrs}`:""} data-luzacode-file="${escapeHtml(getNodePath(file))}">\n${content}\n</script>`;
  });

  const unusedCss=cssFiles.filter(file=>!usedCss.has(String(file.id)));
  const unusedJs=jsFiles.filter(file=>!usedJs.has(String(file.id)));
  if(unusedCss.length){
    const css=`\n<style data-luzacode-assets>\n${unusedCss.map(file=>String(file.content||"").replace(/<\/style>/gi,"<\\/style>")).join("\n")}\n</style>\n`;
    if(/<\/head>/i.test(html)) html=html.replace(/<\/head>/i,css+"</head>");
    else html=css+html;
  }
  if(unusedJs.length){
    const js=`\n<script data-luzacode-assets>\n${unusedJs.map(file=>String(file.content||"").replace(/<\/script>/gi,"<\\/script>")).join("\n")}\n</script>\n`;
    if(/<\/body>/i.test(html)) html=html.replace(/<\/body>/i,js+"</body>");
    else html+=js;
  }

  return html.replace(/<script([^>]*)>/gi,(open,attrs)=>open.includes("data-luzacode-console")?open:`<script${attrs} data-luzacode-console="1">console.log=(...a)=>parent.postMessage({type:"log",data:a.map(String).join(" ")},"*");console.error=(...a)=>parent.postMessage({type:"error",data:a.map(String).join(" ")},"*");`);
}

function runJavaScriptInPreview(code){
  const safe=String(code||"").replace(/<\/script>/gi,"<\\/script>");
  $("#preview").srcdoc=`<!doctype html><html><body style="font-family:Arial;padding:20px"><script data-luzacode-console="1">
    console.log=(...a)=>parent.postMessage({type:"log",data:a.map(String).join(" ")},"*");
    console.error=(...a)=>parent.postMessage({type:"error",data:a.map(String).join(" ")},"*");
    try{${safe}}catch(e){parent.postMessage({type:"error",data:e.message},"*")}
    <\/script></body></html>`;
}

function runCode(){
  ensureEditorProject();
  syncTextareaToActiveFile();
  const activeFile=getFileById(activeFileId);
  if(activeFile?.binary){
    $("#console").textContent="Este ficheiro é binário e não pode ser executado como código de texto. Seleccione um ficheiro HTML, CSS ou JavaScript.";
    toast("Seleccione um ficheiro de código para executar.");
    return;
  }
  const htmlFile=editorProject.files.find(file=>getFileExtension(file.name)==="html"&&!file.binary);
  const activeLang=getFileLanguage(activeFile);
  $("#console").textContent="Executado. As mensagens do console aparecem aqui.";

  if(htmlFile){
    const composed=composeProjectHtml(editorProject)||"";
    $("#preview").srcdoc=composed;
  }else if(activeLang==="javascript"||$("#language").value==="javascript"){
    runJavaScriptInPreview(activeFile?.content||"");
  }else if(activeLang==="css"){
    const safeCss=String(activeFile?.content||"");
    $("#preview").srcdoc=`<!doctype html><html><head><style>${safeCss.replace(/<\/style>/gi,"<\\/style>")}</style></head><body><div style="font-family:Arial;padding:20px">Pré-visualização do CSS. Crie um <strong>index.html</strong> para aplicar este estilo ao projeto.</div></body></html>`;
  }else{
    $("#preview").srcdoc=`<!doctype html><html><body style="font-family:Arial;padding:20px"><pre>${escapeHtml(activeFile?.content||"")}</pre></body></html>`;
  }

  if(activeChallengeId!==null && !completedChallenges.includes(activeChallengeId)){
    if(validateChallenge(activeFile?.content||"",$("#language").value,activeChallengeId)){
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
  ensureEditorProject();
  flushPendingTextHistory();
  syncTextareaToActiveFile();
  const name=$("#projectName").value.trim()||"Meu projeto";
  const lang=$("#language").value;
  editorProject.name=name;
  editorProject.lang=lang;
  editorProject.code=getPrimaryFile(editorProject)?.content||"";
  editorProject.updated=new Date().toISOString();

  if(currentProjectId){
    const index=projects.findIndex(x=>String(x.id)===String(currentProjectId));
    if(index>=0){
      const existing=projects[index];
      editorProject.favorite=!!existing.favorite;
      editorProject.created=existing.created||editorProject.created;
      projects[index]=normalizeProject(editorProject);
    }else{
      currentProjectId=null;
    }
  }
  if(!currentProjectId){
    const saved=normalizeProject({...editorProject,id:createNodeId("project")});
    projects.unshift(saved);
    currentProjectId=saved.id;
    editorProject=saved;
  }
  const stored=projects.find(x=>String(x.id)===String(currentProjectId));
  if(stored){editorProject=stored;$("#projectName").value=stored.name;}
  editorDirty=false;
  localStorage.setItem("luzacode_projects_v1",JSON.stringify(projects));
  renderProjects(); renderFileSystem(); toast("Projeto guardado.");
  syncHistoryBaseline();
  if(currentUser){ syncProjectToCloud(editorProject); }
}
$("#saveBtn").onclick=saveProject;

function openProject(id){
  const source=projects.find(x=>String(x.id)===String(id)); if(!source) return;
  editorProject=normalizeProject(source);
  currentProjectId=editorProject.id;
  activeFileId=String(getPrimaryFile(editorProject)?.id||editorProject.files[0]?.id||"");
  selectedFolderId=null;
  window.openFileIds=[activeFileId];
  editorDirty=false;
  $("#projectName").value=editorProject.name;
  $("#language").value=editorProject.lang||"html";
  showFileInEditor(getFileById(activeFileId));
  updateLines(); renderFileSystem();
  $("#console").textContent=`Projeto “${editorProject.name}” aberto.`;
  fileClipboard=null;
  resetEditorHistory();
  showPage("write");
}
function deleteProject(id){
  if(!confirm("Tem certeza que deseja apagar este projeto?")) return;
  projects=projects.filter(p=>String(p.id)!==String(id));
  localStorage.setItem("luzacode_projects_v1",JSON.stringify(projects));
  if(currentUser) deleteProjectFromCloud(id);
  if(String(currentProjectId)===String(id)) resetEditor();
  renderProjects(); toast("Projeto apagado.");
}
function toggleFavorite(id){
  const p=projects.find(x=>String(x.id)===String(id)); if(!p) return;
  p.favorite=!p.favorite; localStorage.setItem("luzacode_projects_v1",JSON.stringify(projects)); if(currentUser) syncProjectToCloud(p); renderProjects();
}
function downloadProject(id){
  openDownloadDialog(id);
}

function projectNodePath(project,node){
  const names=[node.name];
  let parentId=node.parentId||null;
  const seen=new Set();
  while(parentId&&!seen.has(String(parentId))){
    seen.add(String(parentId));
    const folder=(project.folders||[]).find(item=>String(item.id)===String(parentId));
    if(!folder) break;
    names.unshift(folder.name);
    parentId=folder.parentId||null;
  }
  return names.join("/");
}
function openDownloadDialog(id){
  const source=projects.find(x=>String(x.id)===String(id));
  if(!source) return;
  const project=normalizeProject(source);
  const files=project.files.slice().sort((a,b)=>projectNodePath(project,a).localeCompare(projectNodePath(project,b),"pt"));
  const modal=document.createElement("div");
  modal.className="modal download-modal";
  modal.innerHTML=`<div class="modal-box download-box" role="dialog" aria-modal="true" aria-labelledby="downloadTitle">\
    <button class="modal-close" type="button" aria-label="Fechar">×</button>\
    <span class="eyebrow">EXPORTAR PROJETO</span><h2 id="downloadTitle">Escolher ficheiros para baixar</h2>\
    <p class="download-description">Projeto: <strong>${escapeHtml(project.name)}</strong>. Seleccione os ficheiros que pretende exportar.</p>\
    <div class="download-select-all"><label><input type="checkbox" id="downloadSelectAll" checked> Seleccionar todos</label><span>${files.length} ficheiro(s)</span></div>\
    <div class="download-file-list">${files.map(file=>{const path=projectNodePath(project,file);const kb=file.binary?Math.max(1,Math.round(file.content.length*.75/1024)):Math.max(1,Math.round(new Blob([file.content]).size/1024));return `<label class="download-file-option"><input type="checkbox" class="download-file-check" value="${escapeHtml(file.id)}" checked><span class="download-file-icon">${getFileIcon(file)}</span><span class="download-file-meta"><strong>${escapeHtml(path)}</strong><small>${file.binary?"Ficheiro binário":"Ficheiro de texto"} · ${kb} KB</small></span></label>`;}).join("")}</div>\
    <div class="download-actions"><button type="button" class="secondary" id="downloadSelectedBtn">↓ Baixar</button><button type="button" class="primary" id="downloadZipBtn">▣ Baixar ZIP</button></div>\
    <p class="download-note">O ZIP mantém a estrutura das pastas. Ao baixar ficheiros separados, o navegador pode pedir permissão para vários downloads.</p>\
  </div>`;
  document.body.appendChild(modal);
  const close=()=>modal.remove();
  modal.querySelector(".modal-close").onclick=close;
  modal.addEventListener("click",e=>{if(e.target===modal)close();});
  const selectAll=modal.querySelector("#downloadSelectAll"),checks=()=>Array.from(modal.querySelectorAll(".download-file-check"));
  selectAll.onchange=()=>checks().forEach(check=>check.checked=selectAll.checked);
  modal.querySelector(".download-file-list").addEventListener("change",()=>{const list=checks();selectAll.checked=list.every(c=>c.checked);selectAll.indeterminate=list.some(c=>c.checked)&&!selectAll.checked;});
  function selectedFiles(){const ids=new Set(checks().filter(c=>c.checked).map(c=>String(c.value)));return files.filter(file=>ids.has(String(file.id)));}
  modal.querySelector("#downloadSelectedBtn").onclick=()=>{
    const chosen=selectedFiles();
    if(!chosen.length){toast("Seleccione pelo menos um ficheiro.");return;}
    chosen.forEach((file,index)=>{
      const path=projectNodePath(project,file);
      const basename=path.replace(/\//g,"__").replace(/[^\p{L}\p{N}._() -]+/gu,"_");
      downloadBlob(fileBytes(file),basename,file.binary?(file.mimeType||"application/octet-stream"):mimeForFile(file.name));
    });
    toast(`${chosen.length} ficheiro(s) enviado(s) para download.`);
    close();
  };
  modal.querySelector("#downloadZipBtn").onclick=async()=>{
    const chosen=selectedFiles();
    if(!chosen.length){toast("Seleccione pelo menos um ficheiro.");return;}
    const btn=modal.querySelector("#downloadZipBtn");btn.disabled=true;btn.textContent="A preparar ZIP…";
    try{
      const zip=buildZip(project,chosen);
      const safe=(project.name||"projeto").replace(/[^\p{L}\p{N}_ -]+/gu,"").trim().replace(/\s+/g,"-")||"projeto";
      downloadBlob(zip,`${safe}.zip`,"application/zip");
      toast(`ZIP com ${chosen.length} ficheiro(s) preparado.`);close();
    }catch(err){console.error("Falha ao criar ZIP:",err);toast("Não foi possível criar o ZIP. Tente baixar os ficheiros separados.");btn.disabled=false;btn.textContent="▣ Baixar ZIP";}
  };
}
function mimeForFile(name){
  const ext=getFileExtension(name);const types={html:"text/html",htm:"text/html",css:"text/css",js:"text/javascript",mjs:"text/javascript",json:"application/json",txt:"text/plain",md:"text/markdown",svg:"image/svg+xml",xml:"application/xml",csv:"text/csv",py:"text/x-python",pdf:"application/pdf",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",ico:"image/x-icon"};
  return types[ext]||"application/octet-stream";
}
function fileBytes(file){
  if(file.binary) return base64ToBytes(file.content);
  return new TextEncoder().encode(String(file.content??""));
}
function concatBytes(parts){
  const total=parts.reduce((sum,part)=>sum+part.length,0);const result=new Uint8Array(total);let offset=0;
  for(const part of parts){result.set(part,offset);offset+=part.length;}return result;
}
function crc32(bytes){
  let crc=0xffffffff;
  for(let i=0;i<bytes.length;i++){crc^=bytes[i];for(let j=0;j<8;j++)crc=(crc&1)?(crc>>>1)^0xedb88320:crc>>>1;}
  return (crc^0xffffffff)>>>0;
}
function zipDosDate(date=new Date()){
  const time=((date.getHours()&31)<<11)|((date.getMinutes()&63)<<5)|((Math.floor(date.getSeconds()/2))&31);
  const day=((Math.max(1980,date.getFullYear())-1980)<<9)|((date.getMonth()+1)<<5)|date.getDate();
  return {time,date:day};
}
function buildZip(project,files){
  const encoder=new TextEncoder(),localParts=[],centralParts=[];let offset=0;
  const dos=zipDosDate();
  files.forEach(file=>{
    const path=projectNodePath(project,file).replace(/\\/g,"/");
    const nameBytes=encoder.encode(path),data=fileBytes(file),crc=crc32(data);
    const local=new Uint8Array(30+nameBytes.length);const lv=new DataView(local.buffer);
    lv.setUint32(0,0x04034b50,true);lv.setUint16(4,20,true);lv.setUint16(6,0x0800,true);lv.setUint16(8,0,true);lv.setUint16(10,dos.time,true);lv.setUint16(12,dos.date,true);lv.setUint32(14,crc,true);lv.setUint32(18,data.length,true);lv.setUint32(22,data.length,true);lv.setUint16(26,nameBytes.length,true);lv.setUint16(28,0,true);local.set(nameBytes,30);
    localParts.push(local,data);
    const central=new Uint8Array(46+nameBytes.length);const cv=new DataView(central.buffer);
    cv.setUint32(0,0x02014b50,true);cv.setUint16(4,20,true);cv.setUint16(6,20,true);cv.setUint16(8,0x0800,true);cv.setUint16(10,0,true);cv.setUint16(12,dos.time,true);cv.setUint16(14,dos.date,true);cv.setUint32(16,crc,true);cv.setUint32(20,data.length,true);cv.setUint32(24,data.length,true);cv.setUint16(28,nameBytes.length,true);cv.setUint16(30,0,true);cv.setUint16(32,0,true);cv.setUint16(34,0,true);cv.setUint16(36,0,true);cv.setUint32(38,0,true);cv.setUint32(42,offset,true);central.set(nameBytes,46);centralParts.push(central);
    offset+=local.length+data.length;
  });
  const centralBytes=concatBytes(centralParts),localBytes=concatBytes(localParts),end=new Uint8Array(22),ev=new DataView(end.buffer);
  ev.setUint32(0,0x06054b50,true);ev.setUint16(4,0,true);ev.setUint16(6,0,true);ev.setUint16(8,files.length,true);ev.setUint16(10,files.length,true);ev.setUint32(12,centralBytes.length,true);ev.setUint32(16,localBytes.length,true);ev.setUint16(20,0,true);
  return new Blob([localBytes,centralBytes,end],{type:"application/zip"});
}
function downloadBlob(content,name,type){
  const blob=content instanceof Blob?content:new Blob([content],{type:type||"application/octet-stream"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=name; a.style.display="none";document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),1500);
}

function projectCard(p){
  return `<article class="project-card">
    <div class="project-icon">&lt;/&gt;</div>
    <div class="project-info"><h3>${escapeHtml(p.name)}</h3><p>${p.lang==="javascript"?"JavaScript":"HTML + CSS + JavaScript"} • ${formatDate(p.updated)}</p></div>
    <div class="project-actions">
      <button onclick="openProject('${p.id}')">Abrir</button>
      <button onclick="downloadProject('${p.id}')">↓ Baixar</button>
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
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;",'\'':"&#039;"}[c]));}

function renderManual(){
  const filter=$("#manualFilter").value;
  const groups=manual.filter(m=>filter==="all"||m.id===filter);
  if(!groups.some(g=>g.id===manualLanguage)) manualLanguage=groups[0]?.id||"html";
  const shortcutsNav=`<button type="button" class="${manualShortcutsActive?"active":""}" onclick="selectShortcutManual()"><strong>Manual de atalhos do LUZACODE</strong><small>15 atalhos • V1</small></button>`;
  const languageNav=groups.map(g=>`<button type="button" class="${!manualShortcutsActive&&g.id===manualLanguage?"active":""}" onclick="selectManualLanguage('${g.id}')"><strong>${g.name}</strong><small>${g.items.length} temas</small></button>`).join("");
  $("#manualNav").innerHTML=shortcutsNav+languageNav;
  if(manualShortcutsActive){renderShortcutManual();return;}
  const g=manual.find(x=>x.id===manualLanguage)||groups[0];
  if(!g){$("#manualContent").innerHTML="";return;}
  if(g.id==="python") {
    const intro=`<div class="manual-intro"><div class="manual-intro-top"><button class="manual-expand-btn" id="manualExpandBtn" onclick="toggleManualExpanded()" title="Expandir manual">⛶ <span>Expandir</span></button></div><span class="language-badge">${g.name}</span><h2>${g.name}</h2><p>${g.intro}</p></div>`;
    const legacy=intro+g.items.map((it,i)=>`<article class="topic-card"><div><span class="topic-number">${i+1}</span><div><h3>${it[0]}</h3><p><strong>O que é?</strong> ${it[1]}</p></div></div><pre>${escapeHtml(it[2])}</pre><div class="why"><strong>Para que serve?</strong> ${it[3]}</div><button onclick="useExample(${JSON.stringify(it[2]).replace(/</g,"&lt;")},'${g.id}')">Usar no editor →</button></article>`).join("");
    $("#manualContent").innerHTML=legacy;
    return;
  }
  const sections=[];
  g.items.forEach((it,i)=>{
    const levelName=it.level===1?"Nível 1 — Fundamentos":it.level===2?"Nível 2 — Construindo páginas":it.level===3?"Nível 3 — Avançado":"Nível 4 — Profissional";
    if(!sections.length || sections[sections.length-1].level!==it.level) sections.push({level:it.level,name:levelName,items:[]});
    sections[sections.length-1].items.push({it,index:i});
  });
  const intro=`<div class="manual-intro"><div class="manual-intro-top"><button class="manual-expand-btn" id="manualExpandBtn" onclick="toggleManualExpanded()" title="Expandir manual">⛶ <span>Expandir</span></button></div><span class="language-badge">${g.name}</span><h2>${g.name}</h2><p>${g.intro}</p><div class="manual-summary"><span>${g.items.length} temas</span><span>4 níveis</span><span>Explicação + exemplo + resultado</span></div></div>`;
  const cards=sections.map(section=>`<section class="manual-section"><div class="manual-section-head"><span>NÍVEL ${section.level}</span><h3>${section.name.replace(/^Nível [1-4] — /,'')}</h3><small>${section.items.length} temas</small></div>${section.items.map(({it,index})=>`<article class="topic-card"><div class="topic-head"><span class="topic-number">${index+1}</span><div><h3>${escapeHtml(it.title)}</h3><div class="topic-level">${section.name}</div></div></div><div class="manual-block"><strong>O que é?</strong><p>${escapeHtml(it.what)}</p></div><div class="manual-block"><strong>Para que serve?</strong><p>${escapeHtml(it.serve)}</p></div><div class="manual-block"><strong>Como escrever?</strong><p>${escapeHtml(it.how)}</p></div><div class="manual-example-label">Exemplo</div><pre>${escapeHtml(it.example)}</pre><div class="why"><strong>Por que usar?</strong> ${escapeHtml(it.why)}</div><div class="manual-result"><strong>Resultado:</strong> ${escapeHtml(it.result)}</div><button class="manual-use-example" onclick="useExample(${JSON.stringify(it.example).replace(/</g,"&lt;")},'${g.id}')">Usar no editor →</button></article>`).join("")}</section>`).join("");
  $("#manualContent").innerHTML=intro+cards;
  const sectionNav=$("#manualContent .manual-intro");
  if(sectionNav) sectionNav.scrollIntoView({block:"start",behavior:"smooth"});
}
function renderShortcutManual(){
  const shortcuts=[
    ["Ctrl + C","Copiar texto ou ficheiro","No editor, copia o texto seleccionado. Na árvore de ficheiros, copia o ficheiro seleccionado para poderes colá-lo como cópia noutra pasta."],
    ["Ctrl + V","Colar ou colocar ficheiro","No editor, cola texto da área de transferência. Depois de copiares um ficheiro, cria uma cópia na pasta seleccionada; depois de cortares um ficheiro, move-o para a pasta seleccionada. Se nenhuma pasta estiver seleccionada, usa a raiz do projecto."],
    ["Ctrl + X","Cortar texto ou ficheiro","No editor, corta o texto seleccionado. Na árvore de ficheiros, marca o ficheiro seleccionado para ser movido; depois escolhe a pasta de destino e prime Ctrl + V."],
    ["Ctrl + Z","Desfazer","Reverte a última alteração de código ou operação suportada no projecto, como mover um ficheiro."],
    ["Ctrl + Y","Refazer","Repõe uma alteração que acabou de ser desfeita, quando ela estiver disponível no histórico."],
    ["Ctrl + Shift + S","Guardar projecto","Guarda o projecto actual no LUZACODE."],
    ["Ctrl + Shift + K","Duplicar","No editor, duplica o texto seleccionado ou a linha actual. Na árvore de ficheiros, cria uma cópia do ficheiro seleccionado."],
    ["Ctrl + A","Seleccionar todo o código","Com o editor de código activo, selecciona todo o código do ficheiro actual."],
    ["Ctrl + Shift + G","Nova pasta","Cria uma pasta na localização seleccionada no explorador de ficheiros; se não houver pasta seleccionada, cria-a na raiz."],
    ["Ctrl + Shift + E","Novo ficheiro","Cria um novo ficheiro na pasta seleccionada; se não houver pasta seleccionada, cria-o na raiz."],
    ["Ctrl + Shift + L","Limpar código","Pede confirmação antes de apagar o código do ficheiro actualmente aberto. Se confirmares, podes tentar recuperar a alteração com Ctrl + Z."],
    ["Alt + Shift + F","Formatar código","Organiza a formatação básica do código do ficheiro actual. O resultado depende do tipo de ficheiro."],
    ["Ctrl + M","Números de linhas","Mostra ou oculta os números das linhas no editor."],
    ["Ctrl + Enter","Executar resultado","Executa ou actualiza a pré-visualização do projecto."],
    ["Ctrl + B","Barra lateral","Oculta a barra lateral se estiver visível e volta a mostrá-la se estiver oculta."]
  ];
  const rows=shortcuts.map(([key,action,description])=>`<tr><td><kbd class="shortcut-key">${escapeHtml(key)}</kbd></td><td><strong>${escapeHtml(action)}</strong></td><td>${escapeHtml(description)}</td></tr>`).join("");
  $("#manualContent").innerHTML=`
    <div class="manual-intro">
      <div class="manual-intro-top"><button class="manual-expand-btn" id="manualExpandBtn" onclick="toggleManualExpanded()" title="Expandir manual">⛶ <span>Expandir</span></button></div>
      <span class="language-badge">GUIA DA V1</span>
      <h2>Manual de atalhos do LUZACODE</h2>
      <p>Este manual explica os atalhos de teclado disponíveis na Versão 1 e mostra quando cada um deve ser utilizado.</p>
      <div class="manual-summary"><span>15 atalhos</span><span>Editor + ficheiros</span><span>LUZACODE V1</span></div>
    </div>
    <article class="topic-card shortcut-manual-help">
      <h3>Como usar os atalhos</h3>
      <p>Prima as teclas indicadas ao mesmo tempo. Por exemplo, em <kbd class="shortcut-key">Ctrl + Shift + S</kbd>, mantenha Ctrl e Shift premidas e depois prima S.</p>
      <p>Alguns atalhos dependem do local activo: no editor, copiar e cortar trabalham com texto seleccionado; na árvore de ficheiros, trabalham com o ficheiro seleccionado. Para mover um ficheiro, seleccione-o, prima <kbd class="shortcut-key">Ctrl + X</kbd>, clique na pasta de destino e prima <kbd class="shortcut-key">Ctrl + V</kbd>. Também pode arrastar o ficheiro para cima da pasta.</p>
      <p>Quando criar uma pasta ou um ficheiro, o LUZACODE usa a pasta seleccionada como destino. Se nenhuma pasta estiver seleccionada, cria o item na raiz do projecto.</p>
    </article>
    <div class="shortcut-manual-table-wrap"><table class="shortcut-manual-table"><thead><tr><th>Atalho</th><th>Função</th><th>Como funciona</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}
function selectShortcutManual(){manualShortcutsActive=true;renderManual();}
function toggleManualExpanded(){
  const page=$("#manual");
  if(!page) return;
  const expanded=page.classList.toggle("manual-expanded");
  document.body.classList.toggle("manual-open",expanded);
  const btn=$("#manualExpandBtn");
  if(btn){btn.title=expanded?"Sair da expansão":"Expandir manual";btn.innerHTML=expanded?"← <span>Voltar</span>":"⛶ <span>Expandir</span>";}
  if(expanded) window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#manual")?.classList.contains("manual-expanded")) toggleManualExpanded();});
function selectManualLanguage(id){manualShortcutsActive=false;manualLanguage=id;renderManual();}
$("#manualFilter").onchange=()=>{manualShortcutsActive=false;renderManual();};
function useExample(code,lang){
  editorProject=makeDefaultProject();
  currentProjectId=null;
  editorProject.name="Exemplo - "+(manual.find(x=>x.id===lang)?.name||lang);
  editorProject.lang=lang==="javascript"?"javascript":"html";
  const targetExt=lang==="javascript"?"js":"html";
  const target=editorProject.files.find(file=>getFileExtension(file.name)===targetExt)||editorProject.files[0];
  target.content=code;
  activeFileId=String(target.id);
  selectedFolderId=target.parentId||null;
  window.openFileIds=[activeFileId];
  editorDirty=true;
  $("#projectName").value=editorProject.name;
  $("#language").value=editorProject.lang;
  $("#codeEditor").readOnly=false;$("#codeEditor").setAttribute("aria-label","Editor de código");
  $("#codeEditor").value=target.content;
  updateLines(); renderFileSystem(); showPage("write"); toast("Exemplo colocado no editor.");
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
  editorProject=makeDefaultProject();
  currentProjectId=null;
  editorProject.name="Desafio - "+c.title;
  editorProject.lang=c.lang.includes("JavaScript")?"javascript":"html";
  const target=editorProject.files.find(file=>getFileExtension(file.name)===(editorProject.lang==="javascript"?"js":"html"))||editorProject.files[0];
  target.content=`<!-- ${c.title} -->\n<!-- ${c.goal} -->\n\n`;
  activeFileId=String(target.id);
  selectedFolderId=null;
  window.openFileIds=[activeFileId];
  editorDirty=true;
  $("#projectName").value=editorProject.name;
  $("#language").value=editorProject.lang;
  $("#codeEditor").readOnly=false;$("#codeEditor").setAttribute("aria-label","Editor de código");
  $("#codeEditor").value=target.content;
  updateLines(); renderFileSystem(); $("#console").textContent="Desafio iniciado. Tente resolver sem copiar a solução.";
  activeChallengeId=id;
  showPage("write");
  toast("Desafio iniciado.");
}

function setupResize(){
  const handle=$("#resizeHandle"),workspace=$("#workspace"),codePanel=$("#codePanel"),resultPanel=$("#resultPanel");
  if(!handle||!workspace||!codePanel||!resultPanel)return;
  let dragging=false,startX=0,startY=0,startCodeWidth=0,startCodeHeight=0;
  handle.addEventListener("pointerdown",e=>{
    if(window.innerWidth<=760||codePanel.classList.contains("fullscreen")||resultPanel.classList.contains("result-fullscreen"))return;
    e.preventDefault();dragging=true;startX=e.clientX;startY=e.clientY;startCodeWidth=codePanel.getBoundingClientRect().width;startCodeHeight=codePanel.getBoundingClientRect().height;
    handle.setPointerCapture?.(e.pointerId);document.body.classList.add("is-resizing-panels");
  });
  handle.addEventListener("pointermove",e=>{
    if(!dragging)return;
    const filesPanel=$("#projectFilesPanel");
    const available=workspace.clientWidth-(filesPanel?.getBoundingClientRect().width||0)-handle.getBoundingClientRect().width;
    const min=230;
    const width=Math.max(min,Math.min(available-min,startCodeWidth+(e.clientX-startX)));
    if(available>min*2){codePanel.style.flex=`0 0 ${width}px`;codePanel.style.width=`${width}px`;resultPanel.style.flex="1 1 0";resultPanel.style.width="auto";}
  });
  const stop=()=>{dragging=false;document.body.classList.remove("is-resizing-panels");};
  handle.addEventListener("pointerup",stop);handle.addEventListener("pointercancel",stop);window.addEventListener("blur",stop);
  window.addEventListener("resize",()=>{if(window.innerWidth<=760){codePanel.style.flex="";codePanel.style.width="";resultPanel.style.flex="";resultPanel.style.width="";}});
}
setupResize();

function setupSidebarControls(){
  const sidebar=$("#sidebar"),main=$(".main"),handle=$("#sidebarResizeHandle"),hide=$("#hideSidebarBtn"),show=$("#showSidebarBtn"),menu=$("#menuBtn");
  if(!sidebar||!main||!handle||!hide||!show||!menu)return;
  const savedWidth=parseInt(localStorage.getItem("luzacode_sidebar_width")||"255",10);
  const applyWidth=value=>{
    const width=Math.max(190,Math.min(420,Math.round(value)));
    document.documentElement.style.setProperty("--sidebar-width",`${width}px`);
    localStorage.setItem("luzacode_sidebar_width",String(width));
  };
  applyWidth(Number.isFinite(savedWidth)?savedWidth:255);
  if(localStorage.getItem("luzacode_sidebar_hidden")==="1")document.body.classList.add("sidebar-collapsed");
  const applyHidden=hidden=>{
    document.body.classList.toggle("sidebar-collapsed",hidden);
    localStorage.setItem("luzacode_sidebar_hidden",hidden?"1":"0");
    menu.setAttribute("aria-label",hidden?"Mostrar barra lateral":"Abrir menu");
    menu.title=hidden?"Mostrar barra lateral":"Menu";
    hide.setAttribute("aria-hidden",hidden?"true":"false");
    show.setAttribute("aria-expanded",hidden?"false":"true");
  };
  applyHidden(document.body.classList.contains("sidebar-collapsed"));
  hide.onclick=()=>{applyHidden(true);sidebar.classList.remove("open");};
  show.onclick=()=>{applyHidden(false);if(window.innerWidth<=760)sidebar.classList.add("open");};
  menu.onclick=()=>{
    if(window.innerWidth<=760){
      if(document.body.classList.contains("sidebar-collapsed"))applyHidden(false);
      sidebar.classList.toggle("open");
    }else if(document.body.classList.contains("sidebar-collapsed")){applyHidden(false);}
  };
  let resizing=false,startX=0,startWidth=255;
  handle.addEventListener("pointerdown",e=>{
    if(window.innerWidth<=760||document.body.classList.contains("sidebar-collapsed"))return;
    resizing=true;startX=e.clientX;startWidth=sidebar.getBoundingClientRect().width;e.preventDefault();handle.setPointerCapture?.(e.pointerId);document.body.classList.add("is-resizing-sidebar");
  });
  handle.addEventListener("pointermove",e=>{if(resizing)applyWidth(startWidth+(e.clientX-startX));});
  const stop=()=>{resizing=false;document.body.classList.remove("is-resizing-sidebar");};
  handle.addEventListener("pointerup",stop);handle.addEventListener("pointercancel",stop);window.addEventListener("blur",stop);
}
setupSidebarControls();
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

resetEditor(); renderProjects(); renderManual(); renderCourses(); renderChallenges();

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
