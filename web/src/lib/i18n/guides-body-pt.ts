import type { GuideBodyTranslations } from "./guides-body-translations";

export const GUIDES_BODY_PT: GuideBodyTranslations = {
  "how-to-merge-pdf-without-uploading": {
    metaTitle: "Como juntar PDF online sem fazer upload | FileOmniTool",
    metaDescription: "Guia passo a passo para juntar vários documentos PDF no Windows, Mac e celular sem enviar nada para a nuvem.",
    seoKeyword: "juntar pdf sem upload grátis",
    intro: "A maioria dos conversores de PDF online envia documentos sensíveis (contratos, extratos bancários, declarações de imposto de renda) para servidores remotos na nuvem. Isso expõe você a vazamentos de dados e violações de privacidade. O FileOmniTool resolve o problema rodando inteiramente no seu navegador, com WebAssembly.",
    deepDive: "Ao contrário dos portais na nuvem, que deixam seus arquivos em discos remotos por horas, o WebAssembly manipula os fluxos binários do PDF diretamente na memória do JavaScript. Como não há upload nem download, um PDF de 100 MB é unido em menos de dois segundos.",
    steps: [
      ["Selecione os PDFs", "Arraste dois ou mais arquivos PDF para a área de upload ou clique em “Procurar arquivos”."],
      ["Organize a ordem", "Confira a ordem dos documentos: eles serão unidos em sequência."],
      ["Una na memória", "Clique em “Juntar PDFs”. O motor WebAssembly monta as páginas na memória RAM do seu aparelho."],
      ["Baixe na hora", "Salve o PDF unido direto no seu dispositivo. Nunca existiu uma cópia na nuvem."],
    ],
    faq: [
      ["Existe limite de documentos?", "Não há limites arbitrários. Você pode juntar quantas páginas couberem na memória RAM do seu aparelho."],
      ["Funciona no celular?", "Sim, é totalmente compatível com o Safari no iOS e o Chrome no Android, sem instalar nenhum app."],
    ],
  },
  "how-to-split-extract-pages-from-pdf": {
    metaTitle: "Como dividir PDF e extrair páginas grátis | FileOmniTool",
    metaDescription: "Aprenda a extrair páginas avulsas ou intervalos personalizados de um PDF no computador ou no celular, com total privacidade.",
    seoKeyword: "dividir pdf extrair páginas online grátis",
    intro: "Muitas vezes você só precisa de algumas páginas de um manual, contrato ou e-book de 100 páginas. Em vez de mandar arquivos enormes por e-mail, extrair as páginas certas torna o compartilhamento simples e seguro.",
    deepDive: "O FileOmniTool lê o índice do documento no seu navegador e copia apenas as páginas indicadas para um PDF novo. O arquivo fica bem menor e a resolução original é mantida.",
    steps: [
      ["Envie o PDF", "Arraste seu arquivo PDF para a área de upload."],
      ["Informe o intervalo", "Digite intervalos como “1-3, 5, 8-10” para extrair só as partes desejadas."],
      ["Extraia no navegador", "Clique em “Extrair páginas” para criar o novo documento na memória."],
      ["Baixe o PDF extraído", "Salve o PDF reduzido direto no seu disco."],
    ],
    faq: [
      ["Posso indicar várias páginas não consecutivas?", "Sim, use vírgulas e hífens: por exemplo “1, 4, 7-10”."],
    ],
  },
  "how-to-rotate-pdf-pages-permanently": {
    metaTitle: "Como girar páginas de PDF permanentemente | FileOmniTool",
    metaDescription: "Gire em 90 ou 180 graus páginas de PDF tortas ou de cabeça para baixo, de forma permanente e sem upload.",
    seoKeyword: "girar pdf permanentemente grátis",
    intro: "Ao digitalizar recibos ou contratos de várias páginas com scanner ou com a câmera do celular, é comum algumas páginas ficarem de lado ou de cabeça para baixo. Girar a visualização no leitor não salva o ângulo: você precisa de uma ferramenta que grave a rotação no próprio PDF.",
    deepDive: "O FileOmniTool atualiza a chave “/Rotate” de cada página escolhida. Ao reabrir o documento no Adobe Reader, no Chrome, na Pré-Visualização do macOS ou em apps de celular, ele aparece na posição certa automaticamente.",
    steps: [
      ["Selecione o PDF torto", "Solte seu arquivo PDF na área de rotação."],
      ["Escolha o ângulo", "Selecione 90° no sentido horário, 180° (de cabeça para baixo) ou 270° no sentido anti-horário."],
      ["Salve de forma permanente", "Clique em “Girar PDF” para gravar a rotação no arquivo."],
    ],
    faq: [
      ["A orientação será corrigida em todos os aparelhos?", "Sim, a rotação fica gravada de forma permanente na estrutura do arquivo."],
    ],
  },
  "how-to-convert-images-jpg-png-to-pdf": {
    metaTitle: "Como converter imagens em PDF grátis (JPG para PDF) | FileOmniTool",
    metaDescription: "Converta imagens JPG, PNG e WebP em documentos PDF paginados em A4, direto no navegador. Rápido, grátis e seguro.",
    seoKeyword: "converter jpg png em pdf online grátis",
    intro: "Portais do governo (como o gov.br), universidades e sistemas de RH de empresas muitas vezes recusam imagens soltas em JPG ou PNG e exigem que os documentos sejam enviados em PDF.",
    deepDive: "As imagens são incorporadas direto em páginas PDF, com escala automática conforme a proporção e sem perda de nitidez, deixando o documento pronto para impressão.",
    steps: [
      ["Selecione suas fotos", "Envie uma ou várias imagens (JPG, PNG, WebP)."],
      ["Configure a página", "Escolha o formato A4 ou “Ajustar à imagem” e defina a margem."],
      ["Gere o PDF na memória", "Clique em “Converter para PDF” e baixe o documento combinado."],
    ],
    faq: [
      ["Posso juntar várias fotos em um único PDF?", "Sim, selecione quantas fotos quiser: cada uma vira uma página separada no PDF final."],
    ],
  },
  "how-to-add-page-numbers-to-pdf-free": {
    metaTitle: "Como numerar páginas de PDF grátis | FileOmniTool",
    metaDescription: "Guia passo a passo para adicionar números de página a um PDF no navegador. Escolha posição, formato e página inicial.",
    seoKeyword: "numerar páginas pdf grátis online",
    intro: "Ao entregar um TCC, uma proposta comercial ou um contrato oficial, a numeração de páginas consistente é obrigatória. Pagar uma assinatura mensal do Adobe Acrobat só para inserir números de página é totalmente desnecessário.",
    deepDive: "O FileOmniTool incorpora a fonte padrão Helvetica direto no sistema de coordenadas do PDF, em posições tipográficas precisas. A formatação original do documento fica 100% intacta.",
    steps: [
      ["Envie o PDF", "Solte seu PDF na ferramenta."],
      ["Escolha posição e formato", "Selecione inferior central, inferior direita ou superior central, e o formato “Página X de Y”."],
      ["Defina a página inicial", "Marque “Começar na página 2” se não quiser número na capa."],
      ["Baixe o PDF numerado", "Clique em “Inserir números de página” e baixe seu documento."],
    ],
    faq: [
      ["Meu texto será alterado?", "Os números ficam nas margens padrão (a 25 pontos da borda), onde normalmente não há conteúdo."],
    ],
  },
  "how-to-extract-text-from-pdf-online": {
    metaTitle: "Como extrair texto de PDF online grátis | FileOmniTool",
    metaDescription: "Extraia o texto de documentos PDF para o formato TXT direto no navegador. Rápido, grátis e sem armazenamento em servidor.",
    seoKeyword: "extrair texto de pdf online grátis",
    intro: "Copiar texto manualmente de um leitor de PDF costuma trazer quebras de linha indesejadas, hifenização e formatação quebrada. Extrair o fluxo de texto diretamente entrega um conteúdo limpo e editável, pronto para Word, e-mail ou prompts de IA.",
    deepDive: "O FileOmniTool identifica os blocos de texto nos fluxos de conteúdo do PDF e limpa as sequências de escape, entregando texto UTF-8 pronto para uso.",
    steps: [
      ["Envie o PDF", "Solte seu PDF na ferramenta."],
      ["Análise instantânea", "O navegador decodifica os fluxos de texto na memória em milissegundos."],
      ["Copie ou baixe", "Clique em “Copiar texto” ou “Baixar .TXT” para salvar o texto limpo."],
    ],
    faq: [
      ["Serve para prompts de IA?", "Sim, o TXT puro é o formato de entrada mais limpo para modelos de linguagem e editores de texto."],
    ],
  },
  "how-to-convert-pdf-to-black-and-white-grayscale": {
    metaTitle: "Como converter PDF para preto e branco grátis | FileOmniTool",
    metaDescription: "Transforme PDFs coloridos em tons de cinza no navegador e economize toner e tinta na impressão.",
    seoKeyword: "converter pdf para preto e branco tons de cinza",
    intro: "Muitas impressoras a laser e jato de tinta gastam tinta ciano, magenta e amarela mesmo ao imprimir documentos aparentemente simples. Converter o PDF para tons de cinza de verdade obriga a impressora a usar apenas o preto.",
    deepDive: "O processamento no navegador remove a saturação das camadas de cor de todas as páginas sem enviar nada para servidores, protegendo extratos financeiros e relatórios confidenciais.",
    steps: [
      ["Selecione o PDF colorido", "Solte seu documento colorido na ferramenta."],
      ["Escolha o contraste", "Opte por tons de cinza padrão ou alto contraste para impressão econômica."],
      ["Baixe e imprima", "Baixe seu PDF em tons de cinza, pronto para imprimir só com preto."],
    ],
    faq: [
      ["O texto continua nítido?", "Sim, as definições vetoriais do texto continuam perfeitamente nítidas."],
    ],
  },
  "how-to-edit-remove-pdf-metadata-properties": {
    metaTitle: "Como editar ou remover metadados de PDF | FileOmniTool",
    metaDescription: "Aprenda a ver, editar e apagar as propriedades ocultas de documentos PDF direto no navegador.",
    seoKeyword: "editar remover metadados pdf online privado",
    intro: "Sempre que você exporta um documento do Microsoft Word, Google Docs ou Pages, o programa grava em silêncio no PDF o seu nome, a sua conta de usuário e o software de criação. Antes de publicar documentos ou enviar propostas, remover essas informações é essencial para a confidencialidade.",
    deepDive: "O FileOmniTool altera diretamente o catálogo final e o dicionário de informações do PDF, para que nem mecanismos de busca nem uma análise forense encontrem rastros da sua identidade.",
    steps: [
      ["Veja os metadados", "Envie seu documento para ver o autor e o software gravados."],
      ["Edite ou limpe", "Personalize os campos ou clique em “Remover todos os metadados”."],
      ["Salve o PDF limpo", "Baixe o PDF sem nenhum rastro dos dados do seu computador."],
    ],
    faq: [
      ["O conteúdo do documento é afetado?", "Não, apenas as propriedades de metadados do cabeçalho são alteradas."],
    ],
  },
  "how-to-reorder-organize-delete-pdf-pages": {
    metaTitle: "Como reorganizar e excluir páginas de PDF grátis | FileOmniTool",
    metaDescription: "Reordene páginas visualmente, exclua folhas indesejadas e duplique páginas de PDF na memória, sem upload para a nuvem.",
    seoKeyword: "reorganizar excluir duplicar páginas pdf online",
    intro: "Digitalizar papel muitas vezes gera páginas fora de ordem ou folhas em branco sobrando. Em vez de digitalizar tudo de novo, reorganizar as páginas visualmente leva poucos segundos.",
    deepDive: "O mecanismo cria um PDF novo copiando apenas as páginas escolhidas, na ordem exata que você definiu, na memória RAM do seu aparelho.",
    steps: [
      ["Envie o PDF com várias páginas", "Solte seu PDF para ver cada página como um cartão."],
      ["Reordene e exclua", "Use as setas para mover as páginas e a lixeira para remover páginas em branco."],
      ["Salve o PDF final", "Clique em “Salvar novo PDF” para baixar o arquivo reorganizado."],
    ],
    faq: [
      ["Posso duplicar uma página?", "Sim, clique no botão de duplicar de qualquer cartão para criar uma cópia na hora."],
    ],
  },
  "how-to-convert-images-webp-png-jpg": {
    metaTitle: "Como converter WebP para JPG ou PNG grátis | FileOmniTool",
    metaDescription: "Tutorial passo a passo para converter imagens WebP em JPG e PNG no navegador. Rápido, privado e 100% grátis.",
    seoKeyword: "converter webp para jpg png online grátis",
    intro: "Ao salvar imagens de sites modernos, muitas vêm no formato WebP. Ele é ótimo para a velocidade dos sites, mas muitos visualizadores de fotos antigos, documentos do Word e editores gráficos ainda não abrem WebP. Converter para JPG ou PNG resolve a compatibilidade na hora.",
    deepDive: "O navegador decodifica o WebP com Canvas 2D acelerado por hardware e recodifica os pixels em JPEG ou PNG sem passar por nenhum servidor.",
    steps: [
      ["Selecione a imagem WebP", "Solte o arquivo WebP ou procure no seu computador."],
      ["Escolha o formato de saída", "Selecione JPEG para fotos ou PNG para manter fundos transparentes."],
      ["Conversão instantânea", "Clique em “Converter imagem” e baixe sua imagem no formato padrão."],
    ],
    faq: [
      ["O PNG mantém a transparência?", "Sim, ao converter um WebP transparente para PNG o canal alfa é mantido por completo."],
    ],
  },
  "how-to-compress-images-without-losing-quality": {
    metaTitle: "Como comprimir imagens online grátis (reduzir tamanho) | FileOmniTool",
    metaDescription: "Reduza o tamanho em MB das suas imagens na memória do navegador sem perder qualidade. Ideal para e-mails e sites rápidos.",
    seoKeyword: "comprimir imagens sem perder qualidade grátis",
    intro: "Os celulares atuais tiram fotos de 10 a 20 megabytes cada. Anexar várias em resolução máxima a um e-mail muitas vezes ultrapassa o limite de 25 MB dos provedores. Comprimir de forma inteligente reduz muito o tamanho e mantém os pixels nítidos.",
    deepDive: "A compressão inteligente remove informações de cor de alta frequência que o olho não percebe e cabeçalhos EXIF redundantes, preservando a nitidez das bordas e as cores.",
    steps: [
      ["Envie a foto pesada", "Arraste sua imagem em alta resolução para o compressor."],
      ["Escolha a qualidade", "Selecione 80% (recomendado) para a melhor economia sem perda visível."],
      ["Baixe o arquivo comprimido", "Baixe sua imagem comprimida com até 80% menos espaço."],
    ],
    faq: [
      ["Existe limite de tamanho por foto?", "Você pode comprimir fotos de até 50 MB direto na memória do seu navegador."],
    ],
  },
  "how-to-resize-image-dimensions-pixels": {
    metaTitle: "Como redimensionar imagens online grátis | FileOmniTool",
    metaDescription: "Altere largura e altura das fotos em pixels ou porcentagem no navegador. Trave a proporção para não distorcer.",
    seoKeyword: "redimensionar imagem pixels online grátis",
    intro: "Seja um banner para o YouTube (2560×1440), uma capa do Facebook (820×312) ou uma foto para o catálogo da sua loja virtual, ter as dimensões exatas em pixels é essencial para um resultado nítido.",
    deepDive: "A interpolação bicúbica do canvas suaviza a reamostragem dos pixels e evita a pixelização ao reduzir a imagem.",
    steps: [
      ["Envie a imagem", "Solte sua imagem para ver as dimensões atuais em pixels."],
      ["Defina a nova largura ou altura", "Digite a largura desejada (ex.: 1920 ou 1200 px). A proporção é travada automaticamente."],
      ["Baixe a foto redimensionada", "Baixe na hora a imagem com o novo tamanho."],
    ],
    faq: [
      ["A foto vai ficar esticada?", "Não, a trava de proporção garante que a imagem nunca seja distorcida."],
    ],
  },
  "how-to-add-watermark-to-photos-online": {
    metaTitle: "Como colocar marca d'água em fotos grátis | FileOmniTool",
    metaDescription: "Aplique marcas d'água de texto ou logotipo nas imagens direto no navegador. Ajuste opacidade, tamanho e posição com total privacidade.",
    seoKeyword: "colocar marca d'água em fotos online grátis",
    intro: "Publicar suas fotografias, ilustrações ou anúncios de imóveis sem identificação deixa o material vulnerável a uso não autorizado e violação de direitos autorais. Uma marca d'água elegante deixa clara a sua autoria.",
    deepDive: "A marca d'água é desenhada no canvas da imagem antes da rasterização, ficando fundida permanentemente à foto.",
    steps: [
      ["Envie sua foto", "Selecione a imagem que você quer assinar e proteger."],
      ["Personalize a marca d'água", "Digite seu nome ou aviso de copyright e ajuste opacidade e posição."],
      ["Baixe a foto protegida", "Baixe sua imagem com marca d'água, pronta para as redes sociais."],
    ],
    faq: [
      ["Posso ajustar a opacidade para não estragar a foto?", "Sim, use o controle de opacidade: de uma marca sutil (20%) a uma assinatura bem visível (100%)."],
    ],
  },
  "how-to-convert-svg-to-png-high-resolution": {
    metaTitle: "Como converter SVG para PNG online grátis | FileOmniTool",
    metaDescription: "Converta gráficos vetoriais SVG em imagens PNG transparentes em resolução 1x, 2x ou 4x no navegador.",
    seoKeyword: "converter svg para png online grátis transparente",
    intro: "O SVG (Scalable Vector Graphics) é o padrão para ícones e logotipos na web, mas programas como o PowerPoint, clientes de e-mail antigos e redes sociais muitas vezes não exibem arquivos SVG. Converter para PNG garante compatibilidade total.",
    deepDive: "Como o SVG é vetorial, aumentar a escala do canvas antes da renderização gera imagens de até 4K extremamente nítidas, sem nenhum desfoque.",
    steps: [
      ["Envie o arquivo SVG", "Solte seu ícone ou logotipo SVG no conversor."],
      ["Escolha o fator de escala", "Use 1x para o tamanho web padrão ou 4x para exportar com nitidez máxima para telas Retina ou impressão."],
      ["Baixe o PNG transparente", "Baixe o PNG com a transparência do fundo preservada."],
    ],
    faq: [
      ["A transparência do fundo é mantida?", "Sim, o PNG é exportado com canal alfa totalmente transparente."],
    ],
  },
  "how-to-remove-exif-metadata-and-gps-from-photos": {
    metaTitle: "Como remover dados EXIF e GPS das fotos grátis | FileOmniTool",
    metaDescription: "Aprenda a apagar metadados EXIF ocultos e coordenadas GPS das suas fotos no navegador para proteger sua privacidade.",
    seoKeyword: "remover metadados exif localização gps fotos online",
    intro: "Quando você tira uma foto com iPhone ou Android, o aparelho grava em silêncio sua latitude e longitude exatas, a data e a hora, o modelo da câmera e o número de série. Qualquer pessoa que baixe a foto original pode descobrir onde você mora.",
    deepDive: "O FileOmniTool desenha a imagem em um canvas limpo e extrai dados JPEG/PNG novos, garantindo que nenhum bloco de metadados sobreviva.",
    steps: [
      ["Selecione suas fotos", "Solte fotos tiradas com celular ou câmera DSLR."],
      ["Remova os metadados", "O navegador recodifica apenas os pixels e descarta todos os cabeçalhos EXIF."],
      ["Baixe a imagem anônima", "Salve a foto limpa, segura para compartilhar em fóruns e redes sociais."],
    ],
    faq: [
      ["A aparência da foto vai mudar?", "De jeito nenhum: só as etiquetas de metadados invisíveis são descartadas."],
    ],
  },
  "how-to-pick-colors-and-palette-from-images": {
    metaTitle: "Como capturar cores e extrair paletas de imagens | FileOmniTool",
    metaDescription: "Extraia paletas de cores dominantes e códigos HEX/RGB de qualquer imagem no navegador. Rápido e privado para designers.",
    seoKeyword: "conta-gotas cor de imagem extrair paleta online",
    intro: "Encontrar a cor exata do logotipo de um cliente, de uma foto de paisagem ou de uma captura de tela é um desafio comum para web designers e artistas digitais.",
    deepDive: "Nosso algoritmo de agrupamento quantiza os pixels da imagem na RAM do seu aparelho para extrair cores principais harmônicas e com bom contraste visual.",
    steps: [
      ["Envie a imagem", "Solte qualquer foto, ilustração ou captura de tela."],
      ["Veja a paleta", "Confira a paleta dominante extraída automaticamente e o conta-gotas com lupa interativa."],
      ["Copie os códigos de cor", "Clique em qualquer amostra para copiar o código HEX ou RGB para a área de transferência."],
    ],
    faq: [
      ["Posso clicar em um único pixel?", "Sim, use o conta-gotas interativo do canvas para inspecionar qualquer pixel."],
    ],
  },
  "how-to-generate-favicon-package-for-website": {
    metaTitle: "Como gerar um pacote de favicons para sites grátis | FileOmniTool",
    metaDescription: "Crie favicon.ico multirresolução, ícones Apple Touch e ícones de manifesto Android com o código HTML pronto, no navegador.",
    seoKeyword: "gerador favicon ico multirresolução apple touch online",
    intro: "Um site profissional precisa exibir o ícone corretamente em todo lugar: abas do navegador, favoritos, resultados do Google, tela inicial do iPhone e inicializadores de PWA no Android. Criar todos esses tamanhos à mão leva horas; nosso gerador faz isso em dois segundos.",
    deepDive: "O gerador cria um contêiner ICO multirresolução, os arquivos PNG e um trecho HTML otimizado com as meta tags, tudo empacotado em um único ZIP com JSZip.",
    steps: [
      ["Envie um logotipo quadrado", "Selecione o logotipo da sua marca (recomendado PNG ou SVG de pelo menos 512×512)."],
      ["Veja a prévia dos ícones", "Confira como ficam nas abas do navegador, nos resultados do Google e na tela inicial do iOS."],
      ["Baixe o ZIP completo", "Baixe o pacote ZIP com favicon.ico, os tamanhos 16×16, 32×32, 180×180, 192×192 e 512×512 e o código HTML."],
    ],
    faq: [
      ["Por que o Google mostra um ícone padrão em vez do meu?", "O Google guarda favicons em cache por até 7 dias. Verifique se o icon-48.png está declarado e aguarde a atualização do cache."],
    ],
  },
  "how-to-crop-photos-aspect-ratio-online": {
    metaTitle: "Como recortar fotos por proporção online grátis | FileOmniTool",
    metaDescription: "Recorte imagens nas proporções 1:1, 16:9, 9:16 ou em medidas personalizadas no navegador, sem upload.",
    seoKeyword: "recortar foto proporção 1:1 16:9 online grátis",
    intro: "As redes sociais têm exigências rígidas de proporção. Fotos sem recorte passam por um corte automático no centro que pode cortar cabeças ou textos importantes. Recortar manualmente garante que o assunto fique bem enquadrado.",
    deepDive: "O recorte com canvas HTML5 extrai a área escolhida direto na memória e gera arquivos JPEG, PNG ou WebP nítidos.",
    steps: [
      ["Envie a foto", "Selecione seu arquivo de imagem."],
      ["Escolha uma proporção", "Clique em 1:1 (quadrado), 16:9 (horizontal estilo YouTube) ou 9:16 (vertical para stories)."],
      ["Ajuste e recorte", "Posicione a área de recorte e clique em “Recortar e salvar”."],
    ],
    faq: [
      ["Qual formato escolher?", "JPEG para fotos comuns; PNG para gráficos com texto nítido ou transparência."],
    ],
  },
  "how-to-blur-photos-and-censor-faces-data": {
    metaTitle: "Como desfocar fotos e esconder dados privados | FileOmniTool",
    metaDescription: "Desfoque imagens inteiras ou esconda áreas sensíveis (rostos, placas, documentos) no navegador com total privacidade.",
    seoKeyword: "desfocar foto esconder rosto placa online",
    intro: "Publicar fotos com números de cartão, endereços, placas de carro ou rostos de crianças sem consentimento pode levar a roubo de identidade e problemas legais. Esconda essas áreas em segundos antes de postar.",
    deepDive: "O desfoque em caixa do canvas aplica um filtro matemático de convolução direto nos pixels, embaralhando de forma permanente as informações confidenciais.",
    steps: [
      ["Envie a imagem", "Solte sua captura de tela ou foto na ferramenta."],
      ["Escolha o modo de censura", "Selecione “Censura por área” e posicione a máscara de desfoque sobre rostos ou textos sensíveis."],
      ["Baixe a imagem censurada", "Salve a imagem desfocada com segurança."],
    ],
    faq: [
      ["Alguém consegue reverter o desfoque?", "Não, os pixels originais da área desfocada são sobrescritos de forma permanente."],
    ],
  },
  "how-to-invert-colors-negative-photo-online": {
    metaTitle: "Como inverter as cores de uma foto (negativo) grátis | FileOmniTool",
    metaDescription: "Inverta as cores de uma imagem para criar um efeito negativo no navegador. Ideal para partituras em modo escuro e edições artísticas.",
    seoKeyword: "inverter cores foto efeito negativo online grátis",
    intro: "Inverter as cores transforma branco em preto e preto em branco, trocando cada tom pela sua cor complementar. É especialmente útil para ler partituras muito brancas em salas de concerto escuras sem cansar a vista.",
    deepDive: "O navegador percorre cada pixel e calcula `255 - R`, `255 - G` e `255 - B` em tempo real, sem mexer no canal alfa de transparência.",
    steps: [
      ["Envie a imagem", "Solte sua foto ou diagrama na ferramenta."],
      ["Negativo instantâneo", "O navegador recalcula os canais RGB (255 − valor) na hora."],
      ["Baixe a foto invertida", "Clique em “Baixar imagem invertida” e salve o arquivo."],
    ],
    faq: [
      ["Funciona com diagramas e desenhos em preto e branco?", "Sim, você obtém na hora um visual nítido de planta técnica em modo escuro."],
    ],
  },
  "how-to-flip-mirror-photos-horizontally-vertically": {
    metaTitle: "Como espelhar e inverter fotos online grátis | FileOmniTool",
    metaDescription: "Espelhe imagens na horizontal ou inverta na vertical direto no navegador, sem upload. Rápido, grátis e privado.",
    seoKeyword: "espelhar inverter foto horizontal vertical online grátis",
    intro: "Muitas câmeras frontais de celular espelham as selfies automaticamente, e o texto de uma camiseta ou um logotipo aparece ao contrário. Com nossa ferramenta gratuita você recupera a perspectiva real com um clique.",
    deepDive: "A transformação de coordenadas do canvas `ctx.scale(-1, 1)` espelha a matriz de pixels sem comprimir nem reamostrar a imagem.",
    steps: [
      ["Envie a foto", "Solte sua selfie ou imagem na ferramenta."],
      ["Espelhe ou inverta", "Ative o espelhamento horizontal ou a inversão vertical e veja a prévia ao vivo."],
      ["Baixe a foto espelhada", "Clique em “Salvar imagem espelhada” para baixar."],
    ],
    faq: [
      ["Posso espelhar na horizontal e na vertical ao mesmo tempo?", "Sim, você pode combinar as duas opções."],
    ],
  },
  "how-to-convert-photos-to-black-and-white-online": {
    metaTitle: "Como deixar fotos em preto e branco online grátis | FileOmniTool",
    metaDescription: "Converta fotos coloridas em imagens preto e branco com bom contraste direto no navegador, sem upload.",
    seoKeyword: "deixar foto preto e branco online grátis",
    intro: "A fotografia em preto e branco tira a distração das cores e destaca texturas, expressões e iluminação dramática. Para criar um retrato monocromático marcante, você não precisa de uma assinatura do Lightroom.",
    deepDive: "O mecanismo de dessaturação calcula a luminância ponderando cada canal de cor, dando profundidade às sombras e brilho aos tons de pele.",
    steps: [
      ["Envie a foto colorida", "Selecione um retrato, uma paisagem ou qualquer foto."],
      ["Ajuste contraste e brilho", "Use os controles de contraste e brilho para destacar luzes e sombras."],
      ["Baixe a foto em preto e branco", "Baixe sua imagem monocromática com acabamento profissional."],
    ],
    faq: [
      ["Posso ajustar a intensidade do preto e branco?", "Sim, use o controle de tons de cinza de 0% (cor total) a 100% (monocromático puro)."],
    ],
  },
  "how-to-convert-images-to-base64-data-uri": {
    metaTitle: "Como converter imagens em Base64 online grátis | FileOmniTool",
    metaDescription: "Converta imagens PNG, JPG e SVG em strings Base64 Data URI, tags img de HTML e trechos de CSS direto no navegador.",
    seoKeyword: "converter imagem em base64 data uri html online grátis",
    intro: "Incorporar imagens como Data URI em Base64 elimina requisições HTTP extras, acelera o carregamento de ícones importantes e deixa newsletters em HTML totalmente autossuficientes.",
    deepDive: "A API FileReader do navegador processa o arquivo localmente, sem tráfego de rede, então seus arquivos sensíveis nunca ficam expostos.",
    steps: [
      ["Envie a imagem", "Solte seu logotipo, ícone ou foto."],
      ["Codificação instantânea", "O navegador transforma os bytes binários em caracteres ASCII Base64."],
      ["Copie o trecho", "Copie o Data URI completo, a tag HTML <img> ou o trecho CSS background-image."],
    ],
    faq: [
      ["O Base64 aumenta o tamanho do arquivo?", "Sim, a codificação Base64 acrescenta cerca de 33% em relação ao binário original."],
    ],
  },
  "how-to-convert-audio-files-mp3-wav": {
    metaTitle: "Como converter áudio para MP3 online grátis | FileOmniTool",
    metaDescription: "Guia passo a passo para converter gravações de áudio em MP3 ou WAV no navegador com a Web Audio API.",
    seoKeyword: "converter áudio para mp3 online grátis sem programa",
    intro: "Gravações de voz do celular costumam ser salvas em M4A ou AAC, formatos que muitos sons automotivos, tocadores de MP3 antigos e programas de edição não abrem. Converter para o universal MP3 garante reprodução em qualquer lugar.",
    deepDive: "O navegador decodifica o áudio com o AudioContext nativo e usa o codificador LAME MP3 compilado em WebAssembly para gerar o arquivo na RAM do seu aparelho.",
    steps: [
      ["Selecione o arquivo de áudio", "Solte seu arquivo (M4A, AAC, OGG, WAV, FLAC)."],
      ["Escolha bitrate e formato", "Selecione MP3 (128, 192 ou 320 kbps) ou WAV sem perdas."],
      ["Baixe a faixa convertida", "Clique em “Converter áudio” e baixe seu arquivo compatível."],
    ],
    faq: [
      ["192 kbps é boa qualidade?", "Sim, 192 kbps oferece qualidade praticamente de CD para música e gravações de voz."],
    ],
  },
  "how-to-trim-cut-audio-mp3-online": {
    metaTitle: "Como cortar áudio MP3 online grátis | FileOmniTool",
    metaDescription: "Corte e apare músicas MP3 e gravações de voz no navegador com precisão de milissegundos. Grátis e privado.",
    seoKeyword: "cortar áudio mp3 online grátis toque de celular",
    intro: "Seja para tirar um refrão marcante de 30 segundos para o toque do celular ou para cortar pausas constrangedoras de um podcast de entrevista, cortar áudio online leva menos de um minuto.",
    deepDive: "Os buffers de áudio são cortados na memória com precisão de milissegundos e codificados de forma limpa, sem estalos nas pontas.",
    steps: [
      ["Envie a faixa de áudio", "Selecione seu MP3 ou arquivo de áudio para ver os controles."],
      ["Defina início e fim", "Digite os segundos ou minutos exatos de início e fim do corte."],
      ["Exporte o trecho", "Clique em “Cortar áudio” e baixe seu toque personalizado."],
    ],
    faq: [
      ["Quanto tempo deve ter um toque de celular?", "Entre 20 e 30 segundos é o padrão para iPhone e Android."],
    ],
  },
  "how-to-extract-audio-from-video-mp4": {
    metaTitle: "Como extrair o áudio de um vídeo online grátis | FileOmniTool",
    metaDescription: "Extraia a trilha sonora em MP3 de vídeos MP4, MOV e WebM no navegador, sem enviar arquivos de vídeo enormes.",
    seoKeyword: "extrair áudio de vídeo mp4 para mp3 online grátis",
    intro: "Arquivos de vídeo são enormes e muitas vezes pesam vários gigabytes. Enviar um vídeo de 2 GB para um conversor na nuvem demora uma eternidade numa conexão comum. Como o FileOmniTool roda no seu navegador, ele separa o áudio em segundos, sem nenhum upload.",
    deepDive: "O pipeline de decodificação de vídeo do HTML5 envia as amostras de áudio direto para buffers do Web Audio, pulando a decodificação dos quadros e terminando em segundos.",
    steps: [
      ["Envie o vídeo", "Solte seu arquivo MP4, MOV, MKV ou WebM."],
      ["Extraia no navegador", "O navegador extrai a faixa de áudio sem enviar gigabytes de vídeo."],
      ["Baixe a trilha em MP3", "Salve a faixa MP3 direto no seu aparelho."],
    ],
    faq: [
      ["Dá para baixar vídeos do YouTube?", "Não. O FileOmniTool processa apenas vídeos locais que são seus, respeitando totalmente os direitos autorais."],
    ],
  },
  "how-to-boost-audio-volume-louder": {
    metaTitle: "Como aumentar o volume de um áudio online grátis | FileOmniTool",
    metaDescription: "Deixe arquivos de áudio baixos até 3 vezes mais altos no navegador. Ideal para gravações de voz abafadas e fracas.",
    seoKeyword: "aumentar volume áudio online grátis",
    intro: "Quando o microfone do celular fica longe de quem fala, a gravação sai abafada e quase inaudível, mesmo com o volume no máximo. Aumentar o ganho devolve a clareza ao áudio.",
    deepDive: "A amplificação digital multiplica a amplitude do áudio em ponto flutuante de 32 bits, com limitador de picos para evitar a distorção por clipping.",
    steps: [
      ["Envie o áudio baixo", "Selecione o arquivo que está baixo demais."],
      ["Escolha o ganho", "Selecione +3 dB, +6 dB (o dobro do volume) ou +10 dB."],
      ["Baixe a faixa amplificada", "Clique em “Amplificar volume” e baixe seu áudio alto e claro."],
    ],
    faq: [
      ["Vai distorcer se eu aumentar demais?", "O limitador evita o clipping digital mais forte, mas +6 dB é o recomendado para a maioria das gravações de voz."],
    ],
  },
  "how-to-speed-up-slow-down-audio-online": {
    metaTitle: "Como mudar a velocidade de um áudio grátis (0,5x – 2x) | FileOmniTool",
    metaDescription: "Altere a velocidade de reprodução de MP3 e faixas de áudio no navegador. Acelere aulas ou desacelere músicas.",
    seoKeyword: "acelerar desacelerar áudio online grátis",
    intro: "Ouvir na velocidade normal uma aula de faculdade ou uma apresentação de duas horas consome um tempo precioso. Acelerar a gravação para 1,5x ou 1,75x permite absorver o conteúdo na metade do tempo sem perder a compreensão.",
    deepDive: "O OfflineAudioContext nativo gera buffers reamostrados na nova velocidade antes de recodificá-los em MP3 na memória do seu aparelho.",
    steps: [
      ["Envie o áudio", "Solte a gravação da aula ou o podcast."],
      ["Escolha a velocidade", "Selecione 1,25x, 1,5x, 1,75x ou 2x, ou desacelere para 0,75x."],
      ["Salve o arquivo", "Baixe o MP3 ou WAV recodificado no novo ritmo."],
    ],
    faq: [
      ["Posso salvar o arquivo acelerado no celular?", "Sim, baixe direto como MP3 para ouvir em qualquer app de música ou de podcasts."],
    ],
  },
  "how-to-reverse-audio-song-backwards": {
    metaTitle: "Como inverter um áudio online grátis (tocar ao contrário) | FileOmniTool",
    metaDescription: "Toque e exporte músicas e gravações de voz de trás para frente no navegador. Uma ferramenta de sound design rápida, grátis e divertida.",
    seoKeyword: "inverter áudio música ao contrário online grátis",
    intro: "Tocar áudio de trás para frente (backmasking) fascina fãs de música e técnicos de som há décadas. Seja para procurar mensagens escondidas em músicas de rock ou para criar efeitos psicodélicos de transição nos seus vídeos, inverter áudio é muito fácil.",
    deepDive: "O mecanismo inverte de ponta a ponta os arrays Float32 de cada canal, preservando por completo a profundidade de bits e o espectro de frequências.",
    steps: [
      ["Envie a faixa", "Solte qualquer música ou gravação de voz."],
      ["Inverta na memória", "Clique em “Inverter faixa” para virar as amostras de cada canal."],
      ["Ouça e baixe", "Ouça o resultado ao contrário e baixe seu MP3 invertido."],
    ],
    faq: [
      ["Funciona com áudios do WhatsApp?", "Sim, salve o áudio nos seus arquivos e envie direto para a ferramenta."],
    ],
  },
  "how-to-convert-stereo-audio-to-mono": {
    metaTitle: "Como converter áudio estéreo para mono online grátis | FileOmniTool",
    metaDescription: "Junte os canais estéreo em uma única faixa mono equilibrada no navegador. Corrija áudio que toca de um lado só e reduza o tamanho.",
    seoKeyword: "converter áudio estéreo para mono online grátis",
    intro: "Ao gravar entrevistas com um único microfone direcional, o som muitas vezes fica todo no ouvido esquerdo ou no direito, o que incomoda bastante quem usa fones. Converter para mono centraliza o som perfeitamente.",
    deepDive: "Eliminar o segundo canal redundante economiza até 50% de bitrate e de espaço sem reduzir a fidelidade da voz.",
    steps: [
      ["Envie o áudio estéreo", "Selecione seu arquivo de dois canais."],
      ["Junte os canais", "O navegador calcula `(Esquerdo + Direito) / 2` em um único canal."],
      ["Baixe o MP3 mono", "Baixe sua faixa mono centralizada, até 50% menor."],
    ],
    faq: [
      ["Os dois lados do fone vão ouvir igual?", "Sim, o áudio mono envia exatamente o mesmo sinal equilibrado para a esquerda e a direita."],
    ],
  },
  "how-to-clean-phone-speakers-water-eject-tone": {
    metaTitle: "Como tirar água do alto-falante do celular (som de 165 Hz) | FileOmniTool",
    metaDescription: "Resolva o alto-falante abafado do celular com o tom de 165 Hz para expulsar água. Sem arroz e sem assistência técnica.",
    seoKeyword: "limpar alto-falante celular tirar água som 165hz grátis",
    intro: "Quando o iPhone ou o Android cai na água, mesmo os modelos resistentes, gotinhas costumam ficar presas na tela do alto-falante. O som fica distante, chiado e abafado. O Apple Watch usa som para expulsar a água, e você pode usar a mesma técnica em qualquer smartphone.",
    deepDive: "Uma onda senoidal pura de 165 Hz entra em ressonância com a membrana dos pequenos alto-falantes de celular e desloca o máximo de ar para empurrar o líquido para fora.",
    steps: [
      ["Posicione o celular", "Coloque o volume no máximo e vire os alto-falantes de baixo para o chão, sobre um pano."],
      ["Toque o tom de 165 Hz", "Clique na predefinição “Expulsar água 165 Hz” e aperte “Tocar tom” por 30 a 60 segundos."],
      ["Confira e teste", "As vibrações empurram as gotas para fora da grade do alto-falante. Seque com o pano."],
    ],
    faq: [
      ["Arroz funciona mesmo?", "Não. A Apple desaconselha oficialmente o arroz, porque o pó de amido pode entupir as entradas e não remove as gotas presas pela tensão superficial no alto-falante."],
      ["Isso pode danificar o alto-falante?", "Não, 165 Hz está bem dentro da faixa de funcionamento seguro dos alto-falantes de celular comuns."],
    ],
  },
  "how-to-convert-excel-xls-xlsx-to-csv-json": {
    metaTitle: "Como converter Excel para CSV ou JSON online grátis | FileOmniTool",
    metaDescription: "Converta planilhas XLSX e XLS em dados CSV ou JSON no navegador. Rápido, grátis e sem enviar nada a servidores.",
    seoKeyword: "converter excel xlsx para csv json online grátis",
    intro: "Planilhas financeiras e listas de clientes costumam ter dados muito sensíveis da empresa. Enviar arquivos do Excel para conversores online de terceiros pode violar a LGPD e as políticas internas de compliance. O FileOmniTool processa as planilhas direto na RAM do seu navegador.",
    deepDive: "O mecanismo de planilhas em WebAssembly decodifica a estrutura XML da pasta de trabalho e as células no navegador e gera CSVs limpos, conformes à RFC.",
    steps: [
      ["Envie o arquivo do Excel", "Solte seu arquivo .xlsx ou .xls no conversor."],
      ["Escolha a planilha e o formato", "Selecione a aba desejada e o formato CSV ou JSON."],
      ["Baixe os dados convertidos", "Clique em “Converter” e baixe seu arquivo limpo, pronto para banco de dados."],
    ],
    faq: [
      ["Funciona com pastas de trabalho com várias abas?", "Sim, você pode escolher qualquer aba da sua planilha."],
    ],
  },
  "how-to-convert-word-docx-to-html-text": {
    metaTitle: "Como converter DOCX para HTML ou texto online grátis | FileOmniTool",
    metaDescription: "Converta documentos Word DOCX em HTML limpo ou texto simples no navegador, sem licença do Microsoft Office.",
    seoKeyword: "converter word docx para html texto online grátis",
    intro: "Documentos do Microsoft Word costumam trazer tags de estilo XML proprietárias e bagunçadas que quebram o layout de sites. Converter o DOCX direto para HTML semântico e limpo economiza horas de formatação manual.",
    deepDive: "O analisador mammoth, que roda no navegador, transforma os estilos de título do Word em tags padrão `<p>`, `<h1>`, `<h2>` e `<ul>`, sem CSS inline desnecessário.",
    steps: [
      ["Envie o documento do Word", "Selecione seu arquivo .docx do Microsoft Word."],
      ["Escolha HTML ou texto", "Escolha HTML para manter títulos e listas, ou texto simples."],
      ["Baixe o resultado", "Copie o texto convertido ou baixe o arquivo HTML gerado."],
    ],
    faq: [
      ["Preciso ter o Microsoft Office instalado?", "Não, toda a conversão acontece no navegador, sem instalar nenhum programa."],
    ],
  },
  "how-to-preview-edit-markdown-online": {
    metaTitle: "Editor de Markdown com prévia ao vivo grátis | FileOmniTool",
    metaDescription: "Edite e visualize Markdown em tempo real com tela dividida. Exporte para HTML formatado ou baixe o arquivo .md.",
    seoKeyword: "editor markdown prévia ao vivo exportar html online grátis",
    intro: "Markdown é o formato padrão para documentação técnica, READMEs do GitHub, bases de conhecimento no Obsidian e notas do Notion. Ter um editor rápido, limpo e com prévia instantânea é essencial.",
    deepDive: "O compilador interpreta o GitHub Flavored Markdown (GFM), com listas de tarefas, tabelas, texto tachado e blocos de código, na memória do seu aparelho.",
    steps: [
      ["Digite ou cole Markdown", "Escreva a sintaxe Markdown no painel da esquerda."],
      ["Prévia em tela dividida", "Veja títulos, tabelas, citações e blocos de código renderizados ao vivo."],
      ["Exporte HTML ou Markdown", "Copie o HTML gerado ou salve seu arquivo .md no disco."],
    ],
    faq: [
      ["Posso exportar como página HTML?", "Sim, você copia todo o código HTML com um clique."],
    ],
  },
  "how-to-convert-json-to-csv-bidirectional": {
    metaTitle: "Converter JSON para CSV e CSV para JSON online grátis | FileOmniTool",
    metaDescription: "Conversão nos dois sentidos entre JSON e CSV no navegador. Rápida, privada e compatível com textos entre aspas.",
    seoKeyword: "converter json para csv csv para json online grátis",
    intro: "APIs REST e backups de bancos de dados entregam dados em JSON, enquanto analistas e gestores precisam de arquivos CSV que abram no Excel. Converter entre esses dois formatos é tarefa diária para profissionais de tecnologia.",
    deepDive: "O analisador usa as chaves únicas dos objetos como colunas de cabeçalho do CSV e escapa vírgulas e quebras de linha internas conforme a RFC 4180.",
    steps: [
      ["Cole os dados ou envie um arquivo", "Cole seu array JSON ou seu texto CSV."],
      ["Escolha o sentido", "Selecione o modo JSON para CSV ou CSV para JSON."],
      ["Copie ou baixe", "Copie o texto convertido ou baixe direto o arquivo .csv ou .json."],
    ],
    faq: [
      ["Funciona com objetos JSON aninhados?", "As propriedades aninhadas são convertidas em texto com segurança dentro da respectiva célula."],
    ],
  },
  "how-to-convert-csv-to-markdown-table": {
    metaTitle: "Converter CSV em tabela Markdown online grátis | FileOmniTool",
    metaDescription: "Transforme planilhas CSV e TSV em tabelas Markdown alinhadas no navegador, com alinhamento de texto personalizável.",
    seoKeyword: "converter csv em tabela markdown online grátis",
    intro: "Escrever tabelas Markdown à mão com barras verticais (|) e hífens (-) é cansativo e fácil de desalinhar. Converter os dados da planilha diretamente gera tabelas bem formatadas em segundos.",
    deepDive: "Nosso algoritmo calcula a largura máxima de cada coluna e completa as células com espaços, para que o texto-fonte fique legível até num editor de texto simples.",
    steps: [
      ["Cole os dados CSV", "Cole as linhas da sua planilha ou envie um arquivo .csv."],
      ["Configure o alinhamento", "Escolha alinhamento à esquerda (:---), centralizado (:---:) ou à direita (---:)."],
      ["Copie a tabela Markdown", "Copie a tabela perfeitamente espaçada, pronta para colar."],
    ],
    faq: [
      ["Serve para READMEs do GitHub?", "Sim, é totalmente compatível com o GitHub Flavored Markdown (GFM)."],
    ],
  },
  "how-to-convert-text-to-pdf-online": {
    metaTitle: "Converter texto TXT para PDF online grátis (A4 paginado) | FileOmniTool",
    metaDescription: "Transforme anotações em texto simples em documentos PDF A4 limpos e paginados no navegador. Escolha o tamanho da fonte e o título.",
    seoKeyword: "converter texto txt para pdf online grátis",
    intro: "Mandar arquivos .txt sem formatação para clientes ou professores passa uma imagem amadora. Converter o texto em um PDF A4 paginado, com margens tipográficas adequadas, dá na hora uma apresentação profissional.",
    deepDive: "O mecanismo vetorial pdf-lib calcula de forma dinâmica as quebras de linha e de página e distribui os parágrafos entre as páginas com naturalidade.",
    steps: [
      ["Digite ou cole o texto", "Cole suas anotações ou seu documento no editor."],
      ["Personalize título e fonte", "Se quiser, adicione um título em negrito e escolha o tamanho da fonte."],
      ["Baixe o PDF paginado", "Clique em “Gerar documento PDF” e baixe seu arquivo A4."],
    ],
    faq: [
      ["Minhas anotações são enviadas a algum servidor?", "Não, o PDF é gerado 100% na RAM do seu navegador."],
    ],
  },
  "how-to-count-words-characters-reading-time": {
    metaTitle: "Contador de palavras e caracteres online grátis | FileOmniTool",
    metaDescription: "Conte palavras, caracteres com e sem espaços, frases, parágrafos e tempo de leitura em tempo real.",
    seoKeyword: "contador de palavras caracteres tempo de leitura online grátis",
    intro: "De trabalhos acadêmicos com limite rígido de 3.000 palavras a posts no X (280 caracteres) e artigos de blog para SEO (mais de 1.500 palavras), saber em tempo real os números exatos do seu texto é fundamental para redatores e profissionais de marketing.",
    deepDive: "Nosso tokenizador filtra corretamente espaços e pontuação Unicode em vários idiomas e fornece contagens exatas de caracteres e sílabas.",
    steps: [
      ["Cole seu texto", "Cole ou digite direto no editor do contador."],
      ["Veja os números ao vivo", "Confira total de palavras, caracteres (com e sem espaços), frases e tempo de leitura."],
      ["Ajuste ou copie", "Refine o texto para cumprir os limites acadêmicos ou das redes sociais."],
    ],
    faq: [
      ["Qual a diferença entre caracteres com e sem espaços?", "Caracteres com espaços contam também os espaços em branco; editoras e veículos costumam medir a extensão em caracteres com espaços."],
    ],
  },
  "how-to-compare-text-find-differences-diff": {
    metaTitle: "Comparador de textos: encontre diferenças online grátis | FileOmniTool",
    metaDescription: "Destaque inclusões, exclusões e alterações entre dois textos no navegador. Rápido, grátis e privado.",
    seoKeyword: "comparar dois textos destacar diferenças diff online grátis",
    intro: "Ao revisar versões de contratos, termos jurídicos ou trechos de código, achar a olho nu a troca de uma única palavra é quase impossível. Uma ferramenta de comparação automática encontra todas as mudanças em milissegundos.",
    deepDive: "O algoritmo de diff de Myers calcula a menor sequência de edições entre os dois textos na memória JavaScript do seu aparelho.",
    steps: [
      ["Cole o texto original", "Cole a primeira versão à esquerda."],
      ["Cole o texto modificado", "Cole a versão atualizada à direita."],
      ["Confira as diferenças", "Verde indica texto incluído; vermelho, trechos excluídos ou alterados."],
    ],
    faq: [
      ["Posso comparar arquivos de código?", "Sim, funciona perfeitamente com JavaScript, Python, HTML, CSS e arquivos de configuração."],
    ],
  },
  "how-to-generate-strong-secure-passwords": {
    metaTitle: "Gerador de senhas seguras online grátis | FileOmniTool",
    metaDescription: "Gere senhas criptográficas impossíveis de quebrar no navegador com a Web Crypto API. 100% privado, nunca transmitido.",
    seoKeyword: "gerador de senhas seguras online grátis criptográfico",
    intro: "Usar senhas simples como “Password123” ou repetir a mesma senha em vários sites é a principal causa de invasão de contas online. Uma senha forte de 16 caracteres variados levaria milhões de anos para ser quebrada por força bruta.",
    deepDive: "Em vez do pseudoaleatório `Math.random()`, o FileOmniTool usa `window.crypto.getRandomValues()`, que obtém entropia não determinística do hardware do seu próprio aparelho.",
    steps: [
      ["Escolha tamanho e caracteres", "Selecione 16 ou 24 caracteres e ative maiúsculas, números e símbolos."],
      ["Gere com entropia criptográfica", "Clique em “Gerar senha” para usar a entropia do hardware."],
      ["Copie para a área de transferência", "Copie a nova senha direto para o seu gerenciador de senhas."],
    ],
    faq: [
      ["As senhas geradas ficam salvas no servidor de vocês?", "Nunca. A senha só existe na RAM do seu navegador até você recarregar a aba."],
    ],
  },
  "how-to-generate-bulk-uuid-v4-online": {
    metaTitle: "Gerador de UUID v4 em lote online grátis (RFC 4122) | FileOmniTool",
    metaDescription: "Gere até 100 identificadores UUID v4 conformes à RFC 4122 no navegador, com aleatoriedade criptográfica.",
    seoKeyword: "gerador uuid v4 em lote online grátis rfc 4122",
    intro: "Identificadores únicos universais (UUID v4) têm probabilidade de colisão praticamente nula em bancos de dados distribuídos, microsserviços e analytics de apps. Um gerador em lote rápido no navegador agiliza os testes.",
    deepDive: "O UUID v4 reserva 122 bits aleatórios gerados por `crypto.randomUUID()`, com os bits de versão e variante exatos.",
    steps: [
      ["Escolha a quantidade", "Defina quantos UUIDs você precisa (de 1 a 50)."],
      ["Gere os identificadores", "Clique em “Gerar UUIDs” para obter strings conformes à RFC 4122."],
      ["Copie para a área de transferência", "Copie UUIDs individuais ou o lote inteiro com um clique."],
    ],
    faq: [
      ["Dois UUIDs gerados podem ser iguais?", "A probabilidade é praticamente zero (menos de uma em um quintilhão)."],
    ],
  },
  "how-to-calculate-cryptographic-hash-sha256": {
    metaTitle: "Gerador de hash criptográfico (SHA-256, SHA-512, MD5) | FileOmniTool",
    metaDescription: "Calcule hashes SHA-256, SHA-512, SHA-1 e MD5 no navegador com a Web Crypto API. Rápido, grátis e privado.",
    seoKeyword: "calcular hash sha256 sha512 md5 online grátis",
    intro: "Hashes criptográficos geram uma impressão digital determinística e de tamanho fixo a partir de qualquer texto. São a base do armazenamento de senhas, das assinaturas digitais e das verificações de integridade de dados.",
    deepDive: "O SHA-256 é calculado nativamente via `crypto.subtle.digest()`, com velocidade máxima e sem expor nenhum dado na nuvem.",
    steps: [
      ["Digite o texto", "Digite ou cole o texto ou token que você quer transformar em hash."],
      ["Cálculo em tempo real", "O navegador calcula SHA-256, SHA-512, SHA-1 e MD5 na hora."],
      ["Copie o hash", "Clique no botão de copiar do formato desejado."],
    ],
    faq: [
      ["Dá para reverter um hash SHA-256?", "Não, hashes criptográficos são funções matemáticas de mão única."],
    ],
  },
  "how-to-create-permanent-free-qr-codes": {
    metaTitle: "Gerador de QR Code grátis que nunca expira | FileOmniTool",
    metaDescription: "Crie QR Codes estáticos para links, conexão Wi-Fi automática e texto no navegador. 100% grátis e sem data de validade.",
    seoKeyword: "gerador qr code grátis permanente sem validade",
    intro: "Muitos geradores de QR Code comerciais deixam você criar o código e o desativam duas semanas depois, exigindo uma assinatura mensal. O FileOmniTool gera QR Codes estáticos de verdade, que guardam seus dados direto nos pixels da matriz: funcionam para sempre e sem taxas.",
    deepDive: "QR Codes estáticos codificam os bytes UTF-8 direto na matriz padrão com correção de erros Reed-Solomon. Nenhum servidor de redirecionamento intermediário participa.",
    steps: [
      ["Escolha o tipo de QR Code", "Selecione URL de site, conexão Wi-Fi automática ou texto."],
      ["Preencha os dados", "Cole seu link ou digite o nome e a senha da rede Wi-Fi."],
      ["Baixe o PNG permanente", "Baixe seu QR Code, pronto para imprimir em cardápios, cartões e panfletos."],
    ],
    faq: [
      ["Este QR Code vai expirar algum dia?", "Nunca. Enquanto o papel impresso existir, qualquer celular conseguirá escaneá-lo."],
    ],
  },
  "how-to-encode-decode-base64-text": {
    metaTitle: "Codificador e decodificador Base64 online grátis (UTF-8) | FileOmniTool",
    metaDescription: "Codifique e decodifique texto em Base64 no navegador, com suporte UTF-8 a acentos. Rápido, grátis e privado.",
    seoKeyword: "codificar decodificar base64 online utf8 grátis",
    intro: "O Base64 representa dados binários com 64 caracteres ASCII imprimíveis, para que trafeguem intactos por gateways de e-mail antigos e parâmetros de URL sem corromper nenhum byte.",
    deepDive: "O `btoa()` padrão falha com caracteres acentuados como ç ou ã. O FileOmniTool usa os modernos TextEncoder/TextDecoder para uma conversão UTF-8 perfeita.",
    steps: [
      ["Cole o texto ou o Base64", "Digite o texto na área de entrada."],
      ["Escolha codificar ou decodificar", "Alterne entre codificar para Base64 e decodificar para texto legível."],
      ["Copie o resultado", "Copie a string convertida com um clique."],
    ],
    faq: [
      ["Base64 é um método de criptografia?", "Não, Base64 é um formato de codificação para transporte de dados, não uma criptografia segura."],
    ],
  },
  "how-to-convert-text-case-uppercase-lowercase-camelcase": {
    metaTitle: "Conversor de maiúsculas e minúsculas online | FileOmniTool",
    metaDescription: "Converta texto entre MAIÚSCULAS, minúsculas, Iniciais Maiúsculas, camelCase e snake_case no navegador, grátis.",
    seoKeyword: "converter maiúsculas minúsculas texto online grátis",
    intro: "Digitar sem querer um parágrafo inteiro com o Caps Lock ligado é irritante. Em vez de apagar e digitar tudo de novo, um clique muda as maiúsculas na hora.",
    deepDive: "Nosso algoritmo usa a conversão de caixa Unicode completa e transforma corretamente os caracteres acentuados (ç → Ç, ã → Ã).",
    steps: [
      ["Cole seu texto", "Cole as palavras ou parágrafos que você quer transformar."],
      ["Escolha a transformação", "Clique em “TUDO MAIÚSCULO”, “tudo minúsculo”, “Iniciais Maiúsculas” ou “camelCase”."],
      ["Copie o texto convertido", "Copie o texto atualizado direto para a área de transferência."],
    ],
    faq: [
      ["Desenvolvedores podem usar para nomes de variáveis?", "Sim, há opções de camelCase, snake_case e kebab-case para refatorar código na hora."],
    ],
  },
  "how-to-sort-deduplicate-lists-online": {
    metaTitle: "Limpador de listas: ordenar e remover duplicados grátis | FileOmniTool",
    metaDescription: "Remova linhas duplicadas, ordene em ordem alfabética (A-Z / Z-A) e tire espaços extras das listas no navegador.",
    seoKeyword: "ordenar remover linhas duplicadas limpar lista online grátis",
    intro: "Limpar à mão, linha por linha, listas de e-mail marketing ou exportações de banco de dados é cansativo e sujeito a erros. Um único e-mail duplicado pode gerar reclamações de spam. A remoção automática de duplicados limpa milhares de linhas em milissegundos.",
    deepDive: "O algoritmo baseado em Set normaliza maiúsculas e espaços antes de filtrar os itens únicos e informa quantos duplicados foram removidos.",
    steps: [
      ["Cole sua lista", "Cole no editor as linhas de e-mails, nomes ou valores."],
      ["Escolha as ações de limpeza", "Clique em “Remover duplicados” e “Ordenar A-Z”."],
      ["Copie a lista limpa", "Copie a lista organizada e sem duplicados para a área de transferência."],
    ],
    faq: [
      ["Remove linhas em branco?", "Sim, linhas vazias e espaços no fim das linhas são removidos automaticamente."],
    ],
  },
  "how-to-generate-lorem-ipsum-placeholder-text": {
    metaTitle: "Gerador de texto Lorem Ipsum online grátis | FileOmniTool",
    metaDescription: "Gere parágrafos, frases e palavras de Lorem Ipsum em latim clássico no navegador, grátis.",
    seoKeyword: "gerador lorem ipsum texto de preenchimento online grátis",
    intro: "Desde o século XVI, tipógrafos e designers gráficos usam o texto pseudolatino Lorem Ipsum para que o público preste atenção no layout, nas fontes e na hierarquia visual sem se distrair com um conteúdo legível.",
    deepDive: "Derivado do tratado filosófico de Cícero “De finibus bonorum et malorum” (45 a.C.), o Lorem Ipsum moderno imita a distribuição natural das letras de um texto real.",
    steps: [
      ["Escolha tamanho e unidade", "Selecione quantos parágrafos, frases ou palavras você precisa."],
      ["Ative as tags HTML", "Para desenvolvedores, é possível envolver o texto em tags `<p>`."],
      ["Copie para a área de transferência", "Copie o texto em latim direto para o Figma, o InDesign ou o seu código."],
    ],
    faq: [
      ["Sempre começa com “Lorem ipsum dolor sit amet”?", "Você pode escolher se quer incluir ou não a famosa frase de abertura."],
    ],
  },
  "how-to-format-validate-beautify-json-online": {
    metaTitle: "Formatador e validador de JSON online grátis | FileOmniTool",
    metaDescription: "Formate, indente, minifique e valide JSON no navegador, com erros de sintaxe destacados na hora. Rápido e privado.",
    seoKeyword: "formatar validar minificar json online grátis",
    intro: "Aplicações web trocam JSON compactado em uma única linha. Ler ou depurar essas strings sem quebras de linha é impossível. Nossa ferramenta formata o código e encontra na hora vírgulas ou chaves faltando.",
    deepDive: "As funções nativas JSON.parse() e JSON.stringify() rodam no motor JavaScript do seu navegador, então seus tokens de API privados nunca ficam expostos.",
    steps: [
      ["Cole o JSON bruto", "Cole a resposta da sua API ou o texto JSON sem formatação."],
      ["Escolha a indentação", "Clique em 2 espaços, 4 espaços ou Minificar para compactar em uma linha."],
      ["Copie ou baixe", "Copie o JSON formatado ou baixe um arquivo .json limpo."],
    ],
    faq: [
      ["Mostra onde está o erro de sintaxe?", "Sim, os erros de sintaxe aparecem na hora com uma mensagem precisa."],
    ],
  },
  "how-to-convert-xml-to-json-online": {
    metaTitle: "Converter XML para JSON e JSON para XML online grátis | FileOmniTool",
    metaDescription: "Converta documentos XML em objetos JSON e vice-versa no navegador com DOMParser. Rápido, grátis e privado.",
    seoKeyword: "converter xml para json json para xml online grátis",
    intro: "Sistemas corporativos antigos e a nota fiscal eletrônica (NF-e) usam XML, enquanto apps web e mobile modernos funcionam com JSON. Converter estruturas XML em JSON permite integrar sistemas legados em minutos.",
    deepDive: "O DOMParser nativo do navegador percorre os elementos filhos e os atributos e monta chaves JSON limpas, preservando os níveis de aninhamento.",
    steps: [
      ["Cole o XML ou o JSON", "Cole seu documento XML no campo de entrada."],
      ["Análise automática", "O DOMParser do navegador monta a árvore de objetos equivalente."],
      ["Copie ou baixe o resultado", "Copie o código convertido ou baixe o arquivo .json ou .xml."],
    ],
    faq: [
      ["Dá para converter de volta de JSON para XML?", "Sim, ative “Inverter direção” para transformar qualquer objeto JSON em XML padrão."],
    ],
  },
  "how-to-convert-yaml-to-json-online": {
    metaTitle: "Conversor de YAML para JSON e JSON para YAML grátis | FileOmniTool",
    metaDescription: "Converta arquivos de configuração DevOps entre YAML e JSON no navegador. Rápido, grátis e privado para desenvolvedores.",
    seoKeyword: "converter yaml para json json para yaml online grátis",
    intro: "YAML é o formato legível preferido para Docker Compose e deploys no Kubernetes, mas muitas ferramentas de deploy e gateways de API exigem JSON estrito. Converter nos dois sentidos sem erros de indentação é essencial.",
    deepDive: "A análise, que respeita a indentação, transforma listas com hífen e blocos chave-valor do YAML em objetos JavaScript padrão na RAM do seu aparelho.",
    steps: [
      ["Cole a configuração", "Cole seu manifesto YAML ou sua configuração JSON."],
      ["Conversão instantânea", "O analisador no navegador reconstrói chaves, listas e objetos aninhados."],
      ["Copie ou baixe o arquivo", "Copie o resultado ou baixe como .json ou .yaml."],
    ],
    faq: [
      ["Minhas variáveis de ambiente secretas ficam seguras?", "100% seguras. A conversão acontece inteiramente na sua máquina, sem nenhuma requisição a servidores."],
    ],
  },
  "how-to-analyze-seo-keyword-density-text": {
    metaTitle: "Analisador de densidade de palavras-chave SEO grátis | FileOmniTool",
    metaDescription: "Analise a densidade de palavras-chave dos seus textos, filtre stopwords e confira a frequência SEO ideal de 1% a 3% no navegador.",
    seoKeyword: "analisar densidade palavras-chave seo ferramenta grátis google",
    intro: "Os algoritmos dos buscadores penalizam páginas que repetem a busca-alvo de forma forçada (keyword stuffing). Ao mesmo tempo, um artigo que omite totalmente a frase principal impede o Google de entender o assunto. Medir a densidade de palavras-chave mostra o ponto certo.",
    deepDive: "O tokenizador de n-gramas divide o texto em unigramas, bigramas e trigramas e calcula a porcentagem exata de densidade em relação ao total de palavras.",
    steps: [
      ["Cole o texto do artigo", "Cole seu post de blog ou texto do site no analisador."],
      ["Filtre as stopwords", "Deixe o filtro de stopwords ativado para focar nas palavras-chave relevantes."],
      ["Confira a tabela de densidade SEO", "Veja as tabelas de 1, 2 e 3 palavras: o ideal é uma densidade entre 1% e 3%."],
    ],
    faq: [
      ["O que fazer se a densidade passar de 3,5%?", "Troque algumas ocorrências por sinônimos naturais para evitar a otimização excessiva."],
    ],
  },
  "how-to-convert-hex-rgb-cmyk-color-codes": {
    metaTitle: "Conversor de cores: HEX, RGB, HSL e CMYK grátis | FileOmniTool",
    metaDescription: "Converta códigos de cor entre HEX, RGB, HSL e CMYK para impressão. Seletor interativo e geração de variáveis CSS.",
    seoKeyword: "converter códigos de cor hex rgb hsl cmyk online grátis",
    intro: "Web designers trabalham com HEX e RGB, enquanto as gráficas pedem porcentagens de quadricromia CMYK. Converter as cores com precisão evita surpresas desagradáveis, como cartões de visita impressos que ficam opacos ou sujos em comparação com a tela.",
    deepDive: "As fórmulas de conversão calculam as cores primárias subtrativas normalizadas e otimizam a tinta preta (K), tudo na memória do seu aparelho.",
    steps: [
      ["Escolha ou digite uma cor", "Use o seletor visual ou cole seu código HEX (ex.: #10B981)."],
      ["Ajuste com os controles", "Mova os controles de vermelho, verde e azul até chegar ao tom exato."],
      ["Copie o formato desejado", "Clique em copiar no HEX, RGB, HSL, CMYK ou variável CSS."],
    ],
    faq: [
      ["Por que as cores às vezes ficam diferentes em CMYK?", "Telas emitem luz em RGB, enquanto a tinta reflete a luz. O gamut CMYK é um pouco mais limitado."],
    ],
  },
  "how-to-encode-decode-html-entities-online": {
    metaTitle: "Codificador e decodificador de entidades HTML grátis | FileOmniTool",
    metaDescription: "Converta texto em entidades HTML nomeadas ou numéricas, ou decodifique de volta para texto legível. Rápido e privado para desenvolvedores.",
    seoKeyword: "codificar decodificar entidades html caracteres especiais online grátis",
    intro: "Os navegadores tratam `<` e `>` como tags HTML e `&` como início de uma entidade. Se você inserir texto com esses caracteres direto numa página, o layout quebra ou surgem falhas de segurança. Converter em entidades HTML resolve os dois problemas.",
    deepDive: "Nosso conversor trata no navegador tanto as entidades nomeadas (`&copy;`, `&euro;`, `&ccedil;`) quanto os códigos numéricos decimais.",
    steps: [
      ["Cole o texto ou o HTML", "Cole um texto com caracteres especiais ou com códigos de entidades HTML."],
      ["Escolha codificar ou decodificar", "Selecione Codificar (texto para &amp;) ou Decodificar (entidades para texto)."],
      ["Copie o código limpo", "Copie o resultado, pronto para o seu código HTML."],
    ],
    faq: [
      ["Com UTF-8 ainda preciso de entidades HTML?", "Para caracteres reservados do HTML como `<` e `&`, as entidades são obrigatórias, seja qual for a codificação da página."],
    ],
  },
  "how-to-test-regular-expressions-regex-online": {
    metaTitle: "Testador de expressões regulares (regex) online | FileOmniTool",
    metaDescription: "Teste e depure expressões regulares no navegador com flags (g, i, m, s) e detalhamento de grupos. Padrões prontos para e-mail e datas.",
    seoKeyword: "testar expressões regulares regex online destaque em tempo real",
    intro: "Expressões regulares são uma ferramenta poderosíssima para validação de dados, web scraping e busca de texto, mas um único colchete ou asterisco fora do lugar pode causar correspondências desastrosas. Testar o padrão com dados de exemplo realistas evita bugs em produção.",
    deepDive: "A execução fica a cargo do motor RegExp ECMAScript nativo do navegador, o que garante comportamento 100% idêntico ao de backends em JavaScript e TypeScript.",
    steps: [
      ["Digite o padrão e as flags", "Escreva sua expressão regular entre as barras e ative as flags (g, i, m)."],
      ["Digite o texto de teste", "Cole um texto de exemplo e veja as correspondências destacadas em verde na hora."],
      ["Confira os grupos capturados", "Veja a tabela detalhada com as posições encontradas e os grupos de captura."],
    ],
    faq: [
      ["Há padrões prontos para tarefas comuns?", "Sim, clique nos botões prontos para e-mail, URL, endereço IPv4 e datas (DD/MM/AAAA)."],
    ],
  },
  "how-to-generate-seo-url-slugs-online": {
    metaTitle: "Gerador de slugs de URL para SEO grátis (kebab-case) | FileOmniTool",
    metaDescription: "Gere slugs de URL limpos e otimizados para SEO a partir do título dos seus artigos. Remove acentos, símbolos e stopwords.",
    seoKeyword: "gerar slug url seo kebab case online grátis",
    intro: "Slugs com caracteres especiais, maiúsculas, espaços ou acentos codificados (como `%C3%A7` em vez de `c`) confundem os visitantes e passam pouca confiança nos resultados do Google. Uma URL limpa em kebab-case melhora a taxa de cliques.",
    deepDive: "A normalização Unicode (NFD) remove os diacríticos e translitera os caracteres antes de filtrar os símbolos, gerando strings kebab-case impecáveis.",
    steps: [
      ["Digite o título do artigo", "Digite ou cole o título do seu post, com acentos e pontuação."],
      ["Configure as opções do slug", "Escolha o hífen (-) como separador e, se quiser, ative a remoção de stopwords."],
      ["Copie o slug SEO", "Copie a string limpa separada por hífens, pronta para WordPress ou Next.js."],
    ],
    faq: [
      ["Devo tirar as preposições das URLs?", "Sim, URLs mais curtas e focadas nas palavras-chave principais se saem melhor no Google."],
    ],
  },
  "how-to-create-zip-archive-files-online": {
    metaTitle: "Como criar arquivos ZIP online grátis (no navegador) | FileOmniTool",
    metaDescription: "Junte e comprima vários arquivos em um único ZIP no navegador com JSZip. Sem enviar nada a servidores.",
    seoKeyword: "criar arquivo zip online grátis compactar",
    intro: "Os programas de e-mail sofrem quando você anexa 30 arquivos soltos, e muitas vezes isso esbarra no limite de anexos ou nos filtros de spam. Juntar tudo em um único ZIP organizado torna o compartilhamento imediato e profissional.",
    deepDive: "A compactação no navegador com JSZip monta estruturas PKZIP padrão em arrays tipados de JavaScript usando o algoritmo Deflate.",
    steps: [
      ["Selecione os arquivos", "Arraste qualquer combinação de documentos, imagens e pastas."],
      ["Compacte na memória", "O JSZip junta e compacta os arquivos na RAM do seu navegador."],
      ["Baixe o arquivo ZIP", "Salve seu .zip, pronto para anexar a um e-mail ou compartilhar."],
    ],
    faq: [
      ["Existe limite de tipo de arquivo?", "Não, você pode incluir PDFs, documentos do Word, imagens, áudios e vídeos."],
    ],
  },
  "how-to-extract-zip-archives-online-free": {
    metaTitle: "Como extrair arquivos ZIP online grátis (descompactar) | FileOmniTool",
    metaDescription: "Extraia e baixe arquivos de um ZIP no navegador. Confira o conteúdo com segurança antes de salvar.",
    seoKeyword: "extrair descompactar zip online grátis privado",
    intro: "Abrir um ZIP desconhecido no computador pode ser arriscado se ele tiver executáveis escondidos. Extrair os arquivos no ambiente isolado do navegador permite conferir e tirar documentos específicos com segurança.",
    deepDive: "O mecanismo JSZip lê os cabeçalhos locais e o diretório central na memória, sem gravar nada nos caches temporários do disco do sistema.",
    steps: [
      ["Envie o ZIP", "Solte seu arquivo .zip no descompactador."],
      ["Veja o conteúdo", "Confira a lista completa de arquivos e o tamanho de cada um."],
      ["Baixe os arquivos que quiser", "Extraia só os arquivos de que precisa ou baixe todos."],
    ],
    faq: [
      ["Posso extrair só um arquivo de um ZIP grande?", "Sim, baixe arquivos individuais sem descompactar a pasta inteira."],
    ],
  },
  "how-to-calculate-verify-file-checksum-md5-sha256": {
    metaTitle: "Como calcular e verificar o checksum de arquivos grátis | FileOmniTool",
    metaDescription: "Calcule os checksums MD5 e SHA-256 de qualquer arquivo no navegador. Compare os hashes para confirmar que o download é autêntico e íntegro.",
    seoKeyword: "calcular verificar checksum arquivo md5 sha256 online grátis",
    intro: "Ao baixar imagens ISO de sistemas operacionais, atualizações de firmware ou software livre, falhas de rede podem corromper os dados, ou invasores podem adulterar arquivos em servidores espelho. Verificar o checksum criptográfico garante que o arquivo no seu disco é idêntico, byte a byte, ao original.",
    deepDive: "O SubtleCrypto lê os ArrayBuffers em blocos e gera hashes padrão de 256 bits sem transmitir nada para a nuvem.",
    steps: [
      ["Selecione o arquivo", "Solte qualquer arquivo baixado (instalador, imagem ISO, ZIP)."],
      ["Veja os hashes", "O navegador calcula SHA-256, MD5 e SHA-1 na memória."],
      ["Compare com o checksum oficial", "Cole o checksum publicado pelo autor no campo de comparação para confirmar que bate 100%."],
    ],
    faq: [
      ["E se os checksums não baterem?", "Se os hashes diferirem em um único caractere, o arquivo está corrompido ou foi alterado. Apague e baixe de novo."],
    ],
  },
  "how-to-inspect-binary-files-hex-viewer-dump": {
    metaTitle: "Visualizador hexadecimal online e dump de arquivos binários | FileOmniTool",
    metaDescription: "Inspecione arquivos binários em linhas de dump hexadecimal de 16 bytes com paginação no navegador. Rápido, grátis e seguro.",
    seoKeyword: "visualizador hexadecimal arquivo binário dump online grátis",
    intro: "Quando um arquivo perde a extensão ou ela é corrompida, os programas se recusam a abri-lo. Examinar os primeiros bytes mágicos (como `FF D8 FF` no JPEG ou `50 4B 03 04` no ZIP) em um visualizador hexadecimal revela na hora o tipo real do arquivo.",
    deepDive: "A paginação por janelas de Uint8Array permite exibir na hora arquivos de qualquer tamanho sem deixar o navegador lento.",
    steps: [
      ["Envie o arquivo binário", "Solte qualquer arquivo (foto corrompida, firmware, executável)."],
      ["Explore a grade hexadecimal", "Veja linhas de 16 bytes com offset, bytes em hexadecimal e caracteres ASCII."],
      ["Navegue pelas páginas e copie", "Percorra as páginas de bytes com fluidez, sem lentidão."],
    ],
    faq: [
      ["Ajuda a recuperar arquivos corrompidos?", "Sim, identificar o cabeçalho mágico permite colocar a extensão certa e voltar a abrir o arquivo."],
    ],
  },
  "how-to-convert-base64-string-to-image-file": {
    metaTitle: "Conversor de Base64 para imagem online grátis (PNG) | FileOmniTool",
    metaDescription: "Decodifique strings Base64 Data URI em imagens PNG ou JPG no navegador. Prévia ao vivo e download imediato.",
    seoKeyword: "converter base64 para imagem png jpg online grátis",
    intro: "Ao inspecionar respostas JSON de APIs, dumps de bancos de dados ou folhas CSS, é comum encontrar strings Base64 de imagens indecifráveis. Em vez de ficar imaginando o que mostram, decodifique-as em um arquivo de imagem para ver e salvar na hora.",
    deepDive: "O navegador decodifica os caracteres Base64 direto em um blob de imagem e associa cada tipo MIME à extensão de arquivo exata.",
    steps: [
      ["Cole o código Base64", "Cole sua string Base64 ou Data URI (`data:image/png;base64,...`)."],
      ["Prévia instantânea", "O navegador decodifica os dados e mostra a imagem ao vivo."],
      ["Baixe a imagem", "Clique em “Baixar imagem” para salvar como PNG ou JPG no seu computador."],
    ],
    faq: [
      ["Funciona sem o prefixo “data:image”?", "Sim, você pode colar só os caracteres Base64: a ferramenta detecta o formato automaticamente."],
    ],
  },
  "how-to-convert-srt-to-vtt-subtitles": {
    metaTitle: "Converter SRT para VTT grátis no navegador (sem upload) | FileOmniTool",
    metaDescription: "Aprenda a converter legendas SRT para WebVTT (.vtt) e vice-versa direto no navegador, sem enviar nada para a nuvem.",
    seoKeyword: "converter srt para vtt grátis sem upload",
    intro: "O SRT é o formato clássico de players de desktop como o VLC, mas players web modernos e o vídeo HTML5 exigem WebVTT. Em vez de enviar suas transcrições para conversores de terceiros suspeitos, o FileOmniTool ajusta a sintaxe dos tempos direto na memória do seu navegador.",
    deepDive: "O WebVTT (Web Video Text Tracks) exige um formato rígido de milissegundos com ponto em vez de vírgula (00:01:23.456 em vez de 00:01:23,456). A conversão no navegador normaliza os tempos com expressões regulares localmente, sem latência de rede nem retenção de arquivos.",
    steps: [
      ["Selecione o arquivo de legenda", "Arraste seu arquivo .srt para a área de upload ou cole o texto da legenda direto."],
      ["Converta na hora", "O navegador troca as vírgulas por pontos e adiciona o cabeçalho WEBVTT obrigatório."],
      ["Baixe o .VTT", "Salve o arquivo WebVTT válido, pronto para tags de vídeo HTML5 ou streaming."],
    ],
    faq: [
      ["Posso converter de VTT para SRT?", "Sim, clique no botão de modo para alternar entre SRT → VTT e VTT → SRT."],
      ["Funciona com legendas em qualquer idioma?", "Sim, a codificação UTF-8 garante compatibilidade total com acentos, cirílico, grego e caracteres asiáticos."],
    ],
  },
  "how-to-extract-text-transcript-from-srt": {
    metaTitle: "Extrair texto de legendas SRT grátis | Legenda para TXT",
    metaDescription: "Remova tempos e números de linha dos arquivos de legenda para obter transcrições limpas e legíveis na memória do navegador.",
    seoKeyword: "extrair texto de legendas srt grátis",
    intro: "Já baixou a legenda de uma entrevista, podcast ou aula e deu de cara com um documento bagunçado, cheio de códigos de tempo e números de linha? Ler aquilo é um pesadelo. Nosso limpador de legendas remove toda a marcação técnica e gera parágrafos legíveis.",
    deepDive: "Legendas “roladas” costumam repetir frases em blocos seguidos para simular a rolagem. Nosso mecanismo de remoção de duplicados, que roda no navegador, compara os blocos vizinhos e os junta em frases coerentes, eliminando milhares de palavras repetidas.",
    steps: [
      ["Envie o arquivo de legenda", "Solte seu arquivo .srt ou .vtt na caixa."],
      ["Filtragem automática", "O analisador descarta números e tempos como 00:00:15,000 --> 00:00:18,000."],
      ["Copie ou baixe", "Copie a transcrição fluida ou salve como documento .txt limpo."],
    ],
    faq: [
      ["Conta palavras e caracteres?", "Sim, você vê na hora o total de palavras e caracteres no topo da transcrição."],
      ["Minhas anotações de aula ficam privadas?", "100% privadas. Nada é transmitido pela rede: toda a análise roda na RAM do seu navegador."],
    ],
  },
  "how-to-extract-frames-from-animated-gif": {
    metaTitle: "Extrair quadros de GIF online grátis | GIF para PNG",
    metaDescription: "Desmonte GIFs animados em quadros PNG individuais. Baixe imagens soltas ou todos os quadros em um ZIP, direto no navegador.",
    seoKeyword: "extrair quadros de gif grátis sem upload",
    intro: "Para tirar uma única imagem de um GIF animado, muita gente acaba fazendo prints borrados ou instalando programas pesados como o Photoshop. O FileOmniTool desmonta a animação em imagens PNG de 32 bits impecáveis e sem perdas, direto na memória do seu navegador.",
    deepDive: "Navegadores modernos suportam a API ImageDecoder do WebCodecs, que descompacta a compressão entre quadros do GIF direto pelo hardware gráfico. Assim, a transparência e a paleta de cores de cada quadro batem com o arquivo original.",
    steps: [
      ["Escolha seu GIF", "Arraste seu arquivo .gif para a área de upload."],
      ["Confira cada quadro", "Navegue por todos os quadros extraídos, com número e duração em milissegundos."],
      ["Baixe em PNG ou ZIP", "Baixe qualquer quadro como PNG sem perdas ou todos juntos em um arquivo ZIP."],
    ],
    faq: [
      ["Funciona com GIFs do celular?", "Sim, é totalmente compatível com Chrome e Safari no iOS e no Android."],
      ["Existe limite de quadros?", "Não há limite arbitrário; animações com mais de 100 quadros são extraídas em segundos, dependendo da memória do aparelho."],
    ],
  },
  "how-to-convert-image-to-ascii-art": {
    metaTitle: "Converter imagem em arte ASCII online grátis | FileOmniTool",
    metaDescription: "Transforme fotos e imagens em arte ASCII em tempo real. Ajuste colunas e densidade de caracteres e exporte em .txt ou .html.",
    seoKeyword: "converter imagem em arte ascii grátis",
    intro: "A arte ASCII é um dos estilos mais icônicos do começo da computação. Seja para dar vida ao seu README do GitHub, impressionar os amigos no Discord ou criar banners retrô para o terminal, converter fotos em texto à mão é impossível. Nosso leitor de luminância faz isso em um milissegundo, no navegador.",
    deepDive: "O algoritmo associa a luminância percebida de cada pixel (0,299R + 0,587G + 0,114B) a uma escala progressiva de densidade de caracteres como '@%#*+=-:. '. Ele leva em conta a proporção altura/largura das fontes monoespaçadas para que rostos e formas redondas não fiquem distorcidos.",
    steps: [
      ["Envie a imagem", "Solte qualquer foto JPG, PNG ou WebP."],
      ["Ajuste colunas e escala", "Mova o controle de largura e escolha um conjunto de caracteres padrão, detalhado ou em blocos."],
      ["Copie ou baixe", "Copie o texto ASCII ou baixe como .txt ou arquivo .html estilizado."],
    ],
    faq: [
      ["Onde posso colar o resultado em ASCII?", "Em qualquer lugar com fonte monoespaçada: READMEs do GitHub, Reddit, blocos de código do Discord, Bloco de Notas, terminal."],
      ["Posso inverter as áreas claras e escuras?", "Sim, marque “Inverter contraste / negativo” para terminais e temas escuros."],
    ],
  },
  "how-to-convert-png-to-ico-windows-icon": {
    metaTitle: "Converter PNG para ICO (ícone do Windows) grátis | FileOmniTool",
    metaDescription: "Crie ícones .ico do Windows de verdade, com várias resoluções, no navegador. Mantém a transparência e não envia nada para a nuvem.",
    seoKeyword: "converter png para ico windows grátis sem upload",
    intro: "Renomear “logo.png” para “logo.ico” NÃO cria um ícone. O Windows exige um cabeçalho binário específico (ICONDIR) e uma entrada de imagem para cada resolução de tela. Nossa ferramenta monta arquivos ICO binários autênticos, com várias resoluções, direto na memória do navegador.",
    deepDive: "O compilador monta uma estrutura ICONDIR (6 bytes) seguida de descritores ICONDIRENTRY (16 bytes por resolução) que apontam para cada imagem PNG. Windows Vista, 10 e 11 leem esses PNGs incorporados de forma nativa, com transparência nítida e sem compressão.",
    steps: [
      ["Envie uma imagem quadrada", "Solte um PNG ou JPG (de preferência 512×512 com fundo transparente)."],
      ["Escolha os tamanhos do ícone", "Ative as resoluções de que precisa (16 px, 32 px, 48 px, 64 px)."],
      ["Baixe o .ICO", "Salve o arquivo de ícone nativo do Windows."],
    ],
    faq: [
      ["Como aplico este ícone no Windows 11?", "Clique com o botão direito em uma pasta ou atalho > Propriedades > Personalizar (ou Atalho) > Alterar Ícone > Procurar e selecione seu arquivo .ico."],
      ["Posso usar como favicon do site?", "Sim, os navegadores leem automaticamente as imagens de 16 e 32 px incorporadas quando o arquivo fica na raiz do site."],
    ],
  },
  "how-to-clean-minify-svg-files": {
    metaTitle: "Limpar e minificar SVG online grátis | FileOmniTool",
    metaDescription: "Limpe arquivos vetoriais SVG no navegador. Remova metadados de editores e namespaces proprietários e reduza o tamanho do arquivo.",
    seoKeyword: "limpar minificar arquivos svg online grátis",
    intro: "Programas de design como Adobe Illustrator, Inkscape e Figma enfiam uma enorme quantidade de “lixo” XML proprietário nos SVGs exportados: camadas do editor, guias, carimbos de versão e tags de descrição vazias. Isso pesa as páginas e piora a nota do Google PageSpeed. Nosso limpador remove tudo isso sem mexer nos seus traçados vetoriais.",
    deepDive: "O limpador filtra a árvore XML com expressões regulares e remove declarações DOCTYPE, namespaces de editores (xmlns:inkscape, sodipodi, adobe), IDs do editor e espaços em branco. A renderização continua matematicamente idêntica, com muito menos bytes.",
    steps: [
      ["Envie o arquivo vetorial", "Solte seu arquivo .svg na área de upload."],
      ["Limpeza automática", "Comentários, namespaces de editores (inkscape, adobe) e tags de metadados são removidos."],
      ["Copie o código ou baixe", "Copie o código minificado direto no seu projeto ou baixe o arquivo limpo."],
    ],
    faq: [
      ["Isso quebra o SVG inline em React ou HTML?", "Não, pelo contrário: SVGs limpos são muito mais fáceis de colar como JSX ou HTML inline, sem erros de lint por causa de namespaces."],
      ["Quanto espaço posso economizar?", "Um SVG típico encolhe de 20% a 65%, dependendo de quantos metadados o editor original adicionou."],
    ],
  },
  "how-to-protect-pdf-with-password-aes256": {
    metaTitle: "Proteger PDF com senha grátis (AES-256) | FileOmniTool",
    metaDescription: "Criptografe e proteja PDFs com senha localmente na RAM do navegador com WebCrypto AES-GCM. Sem upload para a nuvem.",
    seoKeyword: "proteger pdf com senha online grátis sem upload",
    intro: "O e-mail não é criptografado por natureza: enviar declarações de imposto de renda, dados bancários ou contratos como anexos PDF sem proteção expõe sua vida privada a interceptações. Os serviços online tradicionais pedem que você envie o arquivo para os servidores deles, o que anula a privacidade. O FileOmniTool criptografa o documento na RAM do seu computador com WebCrypto.",
    deepDive: "Com o mecanismo WebCrypto SubtleCrypto nativo do navegador, derivamos uma chave AES de 256 bits a partir da sua senha usando PBKDF2 com 100.000 iterações e salt aleatório. O conteúdo é criptografado com AES-GCM autenticado, de modo que nem um supercomputador consegue decifrá-lo sem a sua senha.",
    steps: [
      ["Envie o PDF", "Solte seu documento PDF na caixa de criptografia."],
      ["Defina a senha", "Digite a senha que você escolher."],
      ["Baixe o arquivo protegido", "Salve o contêiner criptografado com AES-256."],
    ],
    faq: [
      ["Como o destinatário descriptografa o arquivo?", "Ele pode usar esta mesma ferramenta gratuita do FileOmniTool no modo “Descriptografar”, digitar a senha que você passou e recuperar o PDF original na hora."],
      ["E se eu esquecer a senha?", "Com uma criptografia AES-256 de verdade, não existem portas dos fundos nem chaves mestras. Guarde sua senha em local seguro."],
    ],
  },
  "how-to-flatten-pdf-form-fields": {
    metaTitle: "Achatar campos de formulário PDF grátis | PDF somente leitura",
    metaDescription: "Achate formulários interativos (AcroForms) de PDF em páginas estáticas somente leitura. Evite adulterações, na memória do navegador.",
    seoKeyword: "achatar campos formulário pdf online grátis",
    intro: "Formulários PDF interativos (AcroForms) são ótimos para preencher dados fiscais, contratos ou candidaturas a vagas. Mas, depois de enviados, qualquer pessoa com um leitor de PDF pode alterar suas respostas sem querer ou de propósito, mudar valores ou remover assinaturas. Achatar (flatten) é o procedimento padrão para travar tudo de forma permanente.",
    deepDive: "O achatamento extrai a aparência visual de cada campo do formulário, desenha-a de forma permanente sobre o conteúdo da página e remove o dicionário AcroForm do catálogo do documento. O PDF resultante aparece igual em todas as impressoras, celulares e leitores, sem precisar de um motor de formulários.",
    steps: [
      ["Envie o PDF preenchível", "Solte o PDF com caixas de texto, caixas de seleção ou campos de assinatura."],
      ["Processe na RAM", "O mecanismo grava todos os elementos interativos no fundo da página."],
      ["Baixe o PDF lacrado", "Salve o documento inalterável, pronto para envio."],
    ],
    faq: [
      ["Achatar reduz o tamanho do PDF?", "Sim, remover as estruturas do formulário, os scripts de validação e os widgets costuma deixar o arquivo menor."],
      ["Dá para “desachatar” o PDF depois?", "Não. Depois de achatado, o texto faz parte do conteúdo da página e não volta a ser campo de formulário."],
    ],
  },
  "how-to-convert-json-to-sql-insert-queries": {
    metaTitle: "Converter JSON em consultas SQL INSERT grátis | FileOmniTool",
    metaDescription: "Converta arrays JSON em comandos SQL INSERT INTO no navegador. Suporte aos dialetos MySQL, PostgreSQL e SQLite.",
    seoKeyword: "converter json para sql insert online grátis",
    intro: "Migrar dados de APIs REST/GraphQL modernas ou de bancos NoSQL para bancos relacionais como MySQL, PostgreSQL ou SQLite é uma tarefa frequente. Escrever scripts de importação em Python ou loops à mão desperdiça horas preciosas. O FileOmniTool lê as chaves do JSON, deduz os tipos das colunas, escapa os textos e gera comandos SQL prontos para produção num piscar de olhos.",
    deepDive: "O analisador reúne todas as chaves presentes nos objetos, de modo que registros sem algum atributo são preenchidos corretamente com NULL. Booleanos viram 1/0 ou TRUE/FALSE conforme o dialeto, e aspas simples dentro dos textos são escapadas com segurança.",
    steps: [
      ["Cole os dados JSON", "Cole um array de objetos ou envie uma exportação .json."],
      ["Escolha tabela e dialeto", "Digite o nome da tabela de destino e selecione MySQL, PostgreSQL ou SQLite."],
      ["Exporte o script SQL", "Copie as consultas ou baixe um arquivo .sql pronto para rodar no phpMyAdmin, DBeaver ou psql."],
    ],
    faq: [
      ["Meus registros são enviados para algum lugar?", "Não. Toda a análise do JSON acontece na memória do seu navegador. Nenhum dado chega a um servidor remoto."],
      ["Aguenta milhares de registros?", "Sim, os motores JavaScript atuais processam arrays com mais de 10.000 objetos em menos de um segundo."],
    ],
  },
  "how-to-convert-html-to-markdown": {
    metaTitle: "Converter HTML para Markdown online grátis | HTML para MD",
    metaDescription: "Converta código HTML e páginas web em Markdown limpo no navegador. Mantém títulos, listas, links e blocos de código.",
    seoKeyword: "converter html para markdown online grátis",
    intro: "Copiar conteúdo de sites ou de editores de texto rico costuma colar um HTML bagunçado, cheio de estilos, tags span e divs aninhadas. Se você usa apps de notas como Obsidian, Notion ou Bear, ou cuida de documentação no GitHub, precisa de Markdown limpo. Nosso conversor mantém a formatação essencial e descarta o excesso.",
    deepDive: "Em vez de depender de substituições de texto frágeis, nosso conversor usa o DOMParser nativo do navegador. Ele percorre a árvore real do documento e preserva corretamente listas aninhadas, combinações de negrito e itálico, blocos de código pré-formatado e links.",
    steps: [
      ["Insira o HTML", "Cole seu código HTML ou envie um arquivo .html."],
      ["Conversão do DOM", "O navegador analisa o DOM e traduz os elementos em sintaxe Markdown."],
      ["Copie ou baixe o .MD", "Copie o Markdown limpo ou salve como documento .md."],
    ],
    faq: [
      ["Tabelas são suportadas?", "Sim, linhas e células de tabelas padrão são convertidas em texto limpo com a formatação."],
      ["Posso converter páginas HTML completas?", "Sim, basta arrastar o arquivo .html para a área de upload."],
    ],
  },
  "how-to-decode-jwt-tokens-offline": {
    metaTitle: "Decodificar tokens JWT offline grátis | FileOmniTool",
    metaDescription: "Inspecione e decodifique JSON Web Tokens com segurança no navegador. Confira a expiração sem enviar tokens sensíveis a servidores remotos.",
    seoKeyword: "decodificar jwt offline inspetor de token grátis",
    intro: "Nunca cole tokens bearer de produção, cookies de autenticação ou dados de identidade de usuários em depuradores online quaisquer: esses servidores podem registrar suas credenciais e sequestrar sessões. O FileOmniTool decodifica a estrutura dos JWTs totalmente offline, na RAM do seu navegador.",
    deepDive: "Um JSON Web Token tem três partes codificadas em base64url e separadas por pontos: cabeçalho, payload e assinatura. Nosso script decodifica as partes Base64Url no navegador, converte o timestamp Unix “exp” para o seu horário local e avisa se o token ainda está válido ou já expirou.",
    steps: [
      ["Cole o token", "Cole seu token Bearer ou a string de autorização."],
      ["Confira os claims decodificados", "O algoritmo do cabeçalho e o JSON do payload aparecem com a sintaxe formatada."],
      ["Verifique a expiração", "Veja na hora a data exata de expiração em formato legível e se o token é válido."],
    ],
    faq: [
      ["Posso usar a ferramenta sem internet?", "Sim. Depois que a página carregar, você pode desligar o Wi-Fi e o decodificador continua funcionando."],
      ["A assinatura secreta é verificada?", "A ferramenta isola e mostra o bloco da assinatura, sem nunca pedir suas chaves secretas."],
    ],
  },
  "how-to-minify-css-stylesheets": {
    metaTitle: "Minificar CSS online grátis | Compressor de CSS",
    metaDescription: "Comprima folhas de estilo CSS no navegador sem upload. Reduza o tamanho, economize banda e deixe o site mais rápido.",
    seoKeyword: "minificar css online grátis",
    intro: "Cada espaço em branco, tabulação e comentário do seu arquivo CSS é banda desperdiçada que os usuários de celular baixam com o plano de dados. As Core Web Vitals do Google penalizam bastante folhas de estilo lentas. Nosso minificador remove todos os caracteres desnecessários sem mudar suas regras de layout.",
    deepDive: "O minificador remove comentários de várias linhas (/* ... */), tira o último ponto e vírgula antes de cada chave de fechamento e elimina espaços ao redor dos combinadores CSS (+, >, ~) e das declarações. O resultado é um CSS denso e puro, interpretado na hora.",
    steps: [
      ["Envie o arquivo CSS", "Solte sua folha de estilo .css na caixa."],
      ["Compressão instantânea", "Comentários e espaços ao redor de chaves e pontos e vírgulas são removidos."],
      ["Baixe o .min.css", "Baixe a folha de estilo minificada, pronta para produção."],
    ],
    faq: [
      ["Vai quebrar minhas animações CSS ou meu grid?", "Não. Só espaços e comentários desnecessários são removidos; seletores e propriedades CSS válidos ficam intactos."],
      ["Posso recuperar o código original depois?", "Guarde sempre uma cópia sem minificar para desenvolvimento e use a versão .min.css em produção."],
    ],
  },
  "how-to-convert-unix-epoch-timestamps": {
    metaTitle: "Conversor de timestamp Unix (epoch) grátis | FileOmniTool",
    metaDescription: "Converta timestamps Unix em segundos ou milissegundos em datas legíveis, no horário local e em UTC, em tempo real. 100% grátis.",
    seoKeyword: "converter timestamp unix epoch para data grátis",
    intro: "Os computadores contam o tempo em segundos desde a meia-noite UTC de 1º de janeiro de 1970: o famoso Unix Epoch. Ótimo para servidores, mas ler um timestamp como “1728564120” num log de erros é totalmente incompreensível para uma pessoa. Nosso conversor traduz o valor em tempo real para uma data de calendário clara.",
    deepDive: "Uma armadilha comum é confundir segundos do Unix (10 dígitos) com milissegundos do JavaScript ou Java (13 dígitos). Nosso conversor detecta valores maiores que 100.000.000.000, ajusta a escala automaticamente e mostra tanto o seu fuso horário local quanto o horário UTC.",
    steps: [
      ["Digite um timestamp ou uma data", "Digite o timestamp Unix numérico ou escolha uma data no calendário."],
      ["Conversão em tempo real", "A ferramenta detecta automaticamente se são segundos ou milissegundos."],
      ["Veja os resultados", "Confira horário local, UTC, ISO-8601 e tempo relativo (ex.: “há 3 horas”)."],
    ],
    faq: [
      ["O que vai acontecer com o problema do ano 2038?", "Em 19 de janeiro de 2038, os inteiros com sinal de 32 bits vão estourar. Sistemas modernos de 64 bits lidam com timestamps sem problemas por bilhões de anos."],
      ["Posso converter de data para epoch?", "Sim, use o segundo campo para escolher qualquer data e hora e obter o timestamp Unix exato."],
    ],
  },
  "how-to-convert-any-file-to-base64": {
    metaTitle: "Converter qualquer arquivo em Base64 online grátis | Arquivo para Base64",
    metaDescription: "Codifique documentos, arquivos compactados e mídia em texto Base64. Decodifique strings Base64 de volta em arquivos para baixar, no navegador.",
    seoKeyword: "converter arquivo em base64 online grátis",
    intro: "A codificação Base64 permite representar qualquer arquivo binário (uma nota fiscal em PDF, um arquivo criptografado ou um trecho de áudio) como uma string de texto que pode ser enviada por e-mail, incorporada em um JSON ou salva numa coluna de texto do banco de dados. O FileOmniTool faz os dois caminhos: de arquivo para Base64 e de Base64 de volta para arquivo.",
    deepDive: "O Base64 transforma cada 3 bytes de dados binários (24 bits) em 4 caracteres ASCII imprimíveis (6 bits cada), o que aumenta o tamanho em cerca de 33%. Como toda a codificação e decodificação acontece em arrays tipados de JavaScript, seus arquivos privados nunca passam por um servidor remoto.",
    steps: [
      ["Selecione o arquivo", "Solte qualquer arquivo (PDF, imagem, áudio, ZIP, executável)."],
      ["Codificação Base64 instantânea", "O navegador transforma os bytes em texto ASCII na RAM do seu aparelho."],
      ["Copie ou baixe o .txt", "Copie a string Base64 ou baixe como arquivo .txt."],
    ],
    faq: [
      ["Posso transformar o Base64 de volta no arquivo original?", "Sim. Mude para “Base64 para arquivo”, cole a string, digite um nome com extensão (ex.: arquivo.pdf) e clique em Baixar."],
      ["Data URIs são suportados?", "Sim, Data URIs padrão com tipo MIME são reconhecidos automaticamente."],
    ],
  },
  "how-to-identify-unknown-file-type-magic-bytes": {
    metaTitle: "Identificar arquivo desconhecido pelos magic bytes | FileOmniTool",
    metaDescription: "Analise os magic bytes da assinatura de um arquivo para descobrir o formato e o tipo MIME reais, mesmo sem extensão, no navegador.",
    seoKeyword: "identificar arquivo desconhecido magic bytes online grátis",
    intro: "Já baixou um anexo chamado “download.dat” ou recebeu um arquivo corrompido sem extensão que o sistema não sabe abrir? Trocar a extensão no chute é frustrante. Todo arquivo de verdade começa com “magic bytes” únicos que revelam o que ele é. Nossa ferramenta lê esses bytes e identifica o formato em milissegundos.",
    deepDive: "Os sistemas operacionais confiam na extensão, mas os programas que leem os arquivos confiam na assinatura. Por exemplo, um PDF sempre começa com “%PDF” (hex 25 50 44 46), um PNG com hex 89 50 4E 47, um ZIP ou documento do Office com “PK” (hex 50 4B 03 04), e um MP4 traz “ftyp” a partir do byte 4. Lemos os primeiros 32 bytes e comparamos com bases de assinaturas forenses.",
    steps: [
      ["Solte o arquivo desconhecido", "Arraste qualquer arquivo corrompido, renomeado ou sem extensão."],
      ["Analise os magic bytes", "A ferramenta compara os primeiros 32 bytes do cabeçalho com as assinaturas conhecidas."],
      ["Restaure e baixe", "Clique no botão de restaurar para baixar o arquivo com a extensão real (ex.: .pdf, .zip, .png)."],
    ],
    faq: [
      ["Quais formatos ele identifica?", "Todos os principais: PDF, PNG, JPEG, GIF, WebP, ZIP, RAR, 7z, GZ, MP3, MP4, WebM, OGG, WebAssembly e executáveis do Windows (EXE)."],
      ["É seguro analisar arquivos suspeitos?", "Sim. O arquivo nunca é executado: lemos apenas os primeiros 32 bytes como dados passivos na memória."],
    ],
  },
};
