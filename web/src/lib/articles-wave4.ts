import type { ArticleItem } from "./articles-registry";
import { AUTHOR_ROLE } from "./articles-author";

export const WAVE4_ARTICLES: ArticleItem[] = [
  // 16. REMOVE BACKGROUND
  {
    slug: "remove-background-from-photo-free-ai-browser",
    category: "tutorials",
    datePublished: "2026-11-08",
    dateModified: "2026-11-08",
    readTime: "6 min",
    author: "Cybsquatch",
    authorRole: AUTHOR_ROLE,
    coverEmoji: "✂️",
    title: {
      it: "Come Rimuovere lo Sfondo da una Foto Gratis, Senza Caricarla Online",
      en: "How to Remove the Background from a Photo for Free, Without Uploading It",
      es: "Cómo quitar el fondo de una foto gratis, sin subirla a internet",
      fr: "Comment supprimer l'arrière-plan d'une photo gratuitement, sans l'envoyer en ligne",
      de: "Hintergrund aus einem Foto kostenlos entfernen, ohne Upload",
      pt: "Como remover o fundo de uma foto de graça, sem enviá-la para a internet",
    },
    subtitle: {
      it: "Foto prodotto, foto profilo, fototessere: come funziona lo scontorno con l'intelligenza artificiale direttamente nel browser, e quando conviene scegliere la modalità Persone o Oggetti.",
      en: "Product shots, profile pictures, ID photos: how AI background removal works directly in your browser, and when to pick the People or Objects mode.",
      es: "Fotos de producto, de perfil o de carné: cómo funciona el recorte con IA directamente en el navegador y cuándo elegir el modo Personas u Objetos.",
      fr: "Photos produit, photos de profil, photos d'identité : comment fonctionne le détourage par IA dans le navigateur, et quand choisir le mode Personnes ou Objets.",
      de: "Produktfotos, Profilbilder, Passfotos: So funktioniert das Freistellen per KI direkt im Browser, und wann der Modus Personen oder Objekte passt.",
      pt: "Fotos de produto, de perfil ou 3x4: como funciona o recorte com IA direto no navegador e quando escolher o modo Pessoas ou Objetos.",
    },
    excerpt: {
      it: "Scontornare una foto non richiede più Photoshop né un sito che si tiene le tue immagini: un modello di intelligenza artificiale può girare nel browser e restituire un PNG trasparente in pochi secondi.",
      en: "Cutting out a photo no longer needs Photoshop or a website that keeps your images: an AI model can run inside your browser and give you a transparent PNG in seconds.",
      es: "Recortar una foto ya no requiere Photoshop ni una web que se quede con tus imágenes: un modelo de IA puede funcionar en el navegador y darte un PNG transparente en segundos.",
      fr: "Détourer une photo ne demande plus Photoshop ni un site qui conserve vos images : un modèle d'IA peut tourner dans le navigateur et vous rendre un PNG transparent en quelques secondes.",
      de: "Zum Freistellen braucht man weder Photoshop noch eine Website, die Ihre Bilder behält: Ein KI-Modell kann im Browser laufen und in Sekunden ein transparentes PNG liefern.",
      pt: "Recortar uma foto não exige mais Photoshop nem um site que fica com suas imagens: um modelo de IA pode rodar no navegador e entregar um PNG transparente em segundos.",
    },
    metaTitle: {
      it: "Rimuovere lo Sfondo da una Foto Gratis Senza Upload (Guida AI)",
      en: "Remove Background from a Photo Free, No Upload (AI Guide)",
      es: "Quitar el fondo de una foto gratis y sin subirla (guía IA)",
      fr: "Supprimer l'arrière-plan d'une photo gratuitement, sans envoi (guide IA)",
      de: "Hintergrund aus Foto entfernen, kostenlos und ohne Upload (KI-Anleitung)",
      pt: "Remover o fundo de uma foto grátis e sem upload (guia IA)",
    },
    metaDescription: {
      it: "Guida pratica per scontornare foto di persone e prodotti con l'AI nel browser: PNG trasparente o sfondo bianco, nessun upload, nessuna registrazione. Consigli per risultati puliti.",
      en: "A practical guide to cutting out people and products with AI in your browser: transparent PNG or white background, no upload, no signup. Tips for clean results.",
      es: "Guía práctica para recortar fotos de personas y productos con IA en el navegador: PNG transparente o fondo blanco, sin subir nada ni registrarse. Consejos para un buen resultado.",
      fr: "Guide pratique pour détourer personnes et produits par IA dans le navigateur : PNG transparent ou fond blanc, sans envoi ni inscription. Conseils pour un résultat net.",
      de: "Praktische Anleitung zum Freistellen von Personen und Produkten per KI im Browser: transparentes PNG oder weißer Hintergrund, ohne Upload und Anmeldung.",
      pt: "Guia prático para recortar pessoas e produtos com IA no navegador: PNG transparente ou fundo branco, sem upload e sem cadastro. Dicas para um resultado limpo.",
    },
    seoKeyword: {
      it: "rimuovere sfondo foto gratis",
      en: "remove background from photo free",
      es: "quitar fondo foto gratis",
      fr: "supprimer arrière-plan photo gratuit",
      de: "hintergrund entfernen foto kostenlos",
      pt: "remover fundo de foto grátis",
    },
    featured: true,
    keyTakeaways: [
      {
        it: "Lo scontorno con l'AI può avvenire interamente nel browser: si scarica una volta il modello, poi ogni foto viene elaborata sul tuo dispositivo.",
        en: "AI background removal can run entirely in the browser: the model is downloaded once, then every photo is processed on your device.",
        es: "El recorte con IA puede hacerse por completo en el navegador: el modelo se descarga una vez y después cada foto se procesa en tu dispositivo.",
        fr: "Le détourage par IA peut se faire entièrement dans le navigateur : le modèle est téléchargé une fois, puis chaque photo est traitée sur votre appareil.",
        de: "KI-Freistellen kann vollständig im Browser laufen: Das Modell wird einmal geladen, danach wird jedes Foto auf Ihrem Gerät verarbeitet.",
        pt: "O recorte com IA pode acontecer todo no navegador: o modelo é baixado uma vez e depois cada foto é processada no seu dispositivo.",
      },
      {
        it: "Per ritratti e selfie conviene un modello addestrato sulle persone; per prodotti, animali e oggetti uno di rilevamento del soggetto principale.",
        en: "For portraits and selfies a people-trained model works best; for products, pets and objects a salient-object model does.",
        es: "Para retratos y selfies conviene un modelo entrenado con personas; para productos, mascotas y objetos, uno de detección del sujeto principal.",
        fr: "Pour les portraits et selfies, un modèle entraîné sur des personnes est préférable ; pour les produits, animaux et objets, un modèle de détection du sujet principal.",
        de: "Für Porträts und Selfies eignet sich ein auf Personen trainiertes Modell, für Produkte, Tiere und Objekte eines zur Erkennung des Hauptmotivs.",
        pt: "Para retratos e selfies, o melhor é um modelo treinado com pessoas; para produtos, animais e objetos, um de detecção do assunto principal.",
      },
      {
        it: "Un soggetto ben illuminato e staccato dallo sfondo dà bordi molto più puliti di qualsiasi ritocco successivo.",
        en: "A well-lit subject that stands apart from the background gives far cleaner edges than any later retouching.",
        es: "Un sujeto bien iluminado y separado del fondo da bordes mucho más limpios que cualquier retoque posterior.",
        fr: "Un sujet bien éclairé et détaché du fond donne des contours bien plus nets que n'importe quelle retouche ultérieure.",
        de: "Ein gut beleuchtetes, vom Hintergrund abgesetztes Motiv liefert viel sauberere Kanten als jede spätere Nachbearbeitung.",
        pt: "Um assunto bem iluminado e destacado do fundo gera bordas muito mais limpas que qualquer retoque posterior.",
      },
    ],
    relatedToolIds: ["background-remover", "image-compress-kb", "image-resize", "image-convert"],
    sections: [
      {
        heading: {
          it: "Perché scontornare nel browser invece che su un sito qualsiasi",
          en: "Why remove backgrounds in the browser instead of on any website",
          es: "Por qué quitar el fondo en el navegador y no en cualquier web",
          fr: "Pourquoi détourer dans le navigateur plutôt que sur n'importe quel site",
          de: "Warum im Browser freistellen statt auf irgendeiner Website",
          pt: "Por que remover o fundo no navegador e não em qualquer site",
        },
        content: {
          it: `Rimuovere lo sfondo è una delle operazioni più cercate sul web: serve per le foto prodotto di un negozio online, per la foto profilo di LinkedIn, per un volantino o per una fototessera da sistemare.

La maggior parte dei servizi gratuiti funziona però così: carichi la foto sul loro server, il server la elabora e ti restituisce il risultato, spesso in bassa risoluzione se non paghi. Nel frattempo la tua immagine, magari il volto dei tuoi figli o un documento, è passata da un computer che non controlli.

Oggi c'è un'alternativa. I modelli di intelligenza artificiale per lo scontorno sono abbastanza leggeri da girare dentro il browser grazie a **WebAssembly** e **WebGPU**. Con il nostro strumento [Rimuovi sfondo](/tools/background-remover) il browser scarica una sola volta il modello AI e poi elabora ogni foto sul tuo dispositivo: l'immagine non lascia mai il computer o il telefono.`,
          en: `Removing a background is one of the most searched tasks on the web: you need it for online shop product photos, a LinkedIn profile picture, a flyer or an ID photo.

Most free services work like this, though: you upload the photo to their server, the server processes it and sends back the result, often at low resolution unless you pay. Meanwhile your image, maybe your kids' faces or a document, has passed through a computer you don't control.

Today there is an alternative. Background-removal AI models are light enough to run inside the browser thanks to **WebAssembly** and **WebGPU**. With our [Remove Background](/tools/background-remover) tool, the browser downloads the AI model once and then processes every photo on your device: the image never leaves your computer or phone.`,
          es: `Quitar el fondo es una de las tareas más buscadas en internet: sirve para las fotos de producto de una tienda online, la foto de perfil de LinkedIn, un folleto o una foto de carné.

Sin embargo, la mayoría de los servicios gratuitos funciona así: subes la foto a su servidor, el servidor la procesa y te devuelve el resultado, a menudo en baja resolución si no pagas. Mientras tanto, tu imagen, quizá la cara de tus hijos o un documento, ha pasado por un ordenador que no controlas.

Hoy existe una alternativa. Los modelos de IA para quitar fondos son lo bastante ligeros para funcionar dentro del navegador gracias a **WebAssembly** y **WebGPU**. Con nuestra herramienta [Quitar fondo](/tools/background-remover), el navegador descarga una sola vez el modelo de IA y después procesa cada foto en tu dispositivo: la imagen nunca sale de tu ordenador o tu móvil.`,
          fr: `Supprimer un arrière-plan fait partie des tâches les plus recherchées sur le web : photos produit d'une boutique en ligne, photo de profil LinkedIn, flyer ou photo d'identité.

Pourtant, la plupart des services gratuits fonctionnent ainsi : vous envoyez la photo sur leur serveur, qui la traite et vous renvoie le résultat, souvent en basse résolution si vous ne payez pas. Entre-temps, votre image, peut-être le visage de vos enfants ou un document, est passée par un ordinateur que vous ne contrôlez pas.

Il existe aujourd'hui une alternative. Les modèles d'IA de détourage sont assez légers pour tourner dans le navigateur grâce à **WebAssembly** et **WebGPU**. Avec notre outil [Supprimer l'arrière-plan](/tools/background-remover), le navigateur télécharge une seule fois le modèle d'IA, puis traite chaque photo sur votre appareil : l'image ne quitte jamais votre ordinateur ou votre téléphone.`,
          de: `Den Hintergrund zu entfernen gehört zu den meistgesuchten Aufgaben im Web: für Produktfotos im Onlineshop, das LinkedIn-Profilbild, einen Flyer oder ein Passfoto.

Die meisten kostenlosen Dienste funktionieren jedoch so: Sie laden das Foto auf deren Server, der Server verarbeitet es und schickt das Ergebnis zurück, oft in niedriger Auflösung, wenn Sie nicht zahlen. In der Zwischenzeit war Ihr Bild, vielleicht das Gesicht Ihrer Kinder oder ein Dokument, auf einem Rechner, den Sie nicht kontrollieren.

Heute gibt es eine Alternative. KI-Modelle zum Freistellen sind leicht genug, um dank **WebAssembly** und **WebGPU** im Browser zu laufen. Mit unserem Werkzeug [Hintergrund entfernen](/tools/background-remover) lädt der Browser das KI-Modell einmal herunter und verarbeitet danach jedes Foto auf Ihrem Gerät: Das Bild verlässt nie Ihren Computer oder Ihr Smartphone.`,
          pt: `Remover o fundo é uma das tarefas mais procuradas na internet: serve para fotos de produto de uma loja online, foto de perfil do LinkedIn, um panfleto ou uma foto 3x4.

Mas a maioria dos serviços gratuitos funciona assim: você envia a foto para o servidor deles, o servidor processa e devolve o resultado, muitas vezes em baixa resolução se você não pagar. Enquanto isso, sua imagem, talvez o rosto dos seus filhos ou um documento, passou por um computador que você não controla.

Hoje existe uma alternativa. Os modelos de IA para remover fundo são leves o bastante para rodar dentro do navegador graças ao **WebAssembly** e ao **WebGPU**. Com a nossa ferramenta [Remover fundo](/tools/background-remover), o navegador baixa o modelo de IA uma única vez e depois processa cada foto no seu dispositivo: a imagem nunca sai do seu computador ou celular.`,
        },
      },
      {
        heading: {
          it: "Persone o oggetti: quale modalità scegliere",
          en: "People or objects: which mode to choose",
          es: "Personas u objetos: qué modo elegir",
          fr: "Personnes ou objets : quel mode choisir",
          de: "Personen oder Objekte: Welcher Modus passt",
          pt: "Pessoas ou objetos: qual modo escolher",
        },
        content: {
          it: `Nessun modello è perfetto su tutto, per questo lo strumento ne offre due:

- **Persone**: usa ormbg, un modello addestrato soprattutto su figure umane. È la scelta giusta per ritratti, selfie, foto profilo e fototessere: segue bene capelli e spalle e ignora gli oggetti sullo sfondo. Pesa circa 88 MB con accelerazione GPU, 44 MB altrimenti.
- **Oggetti e prodotti**: usa U²-Net, un modello di rilevamento del soggetto principale. Va meglio per scarpe, tazze, gioielli, animali, auto e loghi, cioè quando non c'è una persona al centro. Pesa solo 5 MB.

Se il primo risultato non ti convince, prova l'altra modalità sulla stessa foto: bastano pochi secondi. Entrambi i modelli hanno licenza Apache-2.0 e vengono scaricati dal browser una sola volta, poi restano in memoria sul dispositivo, anche offline.

Sui computer e i telefoni recenti con **WebGPU** (Chrome, Edge e altri browser aggiornati) una foto richiede meno di un secondo. Sugli altri l'elaborazione usa il processore e può servire qualche secondo in più.`,
          en: `No model is perfect at everything, which is why the tool offers two:

- **People**: uses ormbg, a model trained mainly on human figures. It's the right choice for portraits, selfies, profile pictures and ID photos: it follows hair and shoulders well and ignores objects in the background. It's about 88 MB with GPU acceleration, 44 MB otherwise.
- **Objects & products**: uses U²-Net, a salient-object detection model. It works better for shoes, mugs, jewellery, pets, cars and logos, whenever there isn't a person in the middle. It's only 5 MB.

If the first result doesn't convince you, try the other mode on the same photo: it takes seconds. Both models are Apache-2.0 licensed and are downloaded by the browser only once, then stay on your device, even offline.

On recent computers and phones with **WebGPU** (Chrome, Edge and other up-to-date browsers) a photo takes under a second. Elsewhere processing uses the CPU and may take a few more seconds.`,
          es: `Ningún modelo es perfecto en todo, por eso la herramienta ofrece dos:

- **Personas**: usa ormbg, un modelo entrenado sobre todo con figuras humanas. Es la opción adecuada para retratos, selfies, fotos de perfil y fotos de carné: sigue bien el pelo y los hombros e ignora los objetos del fondo. Pesa unos 88 MB con aceleración GPU y 44 MB en los demás casos.
- **Objetos y productos**: usa U²-Net, un modelo de detección del sujeto principal. Funciona mejor con zapatillas, tazas, joyas, mascotas, coches y logotipos, es decir, cuando no hay una persona en el centro. Pesa solo 5 MB.

Si el primer resultado no te convence, prueba el otro modo con la misma foto: lleva unos segundos. Ambos modelos tienen licencia Apache-2.0 y el navegador los descarga una sola vez; después se quedan en tu dispositivo, incluso sin conexión.

En ordenadores y móviles recientes con **WebGPU** (Chrome, Edge y otros navegadores actualizados) una foto tarda menos de un segundo. En los demás se usa el procesador y puede tardar algunos segundos más.`,
          fr: `Aucun modèle n'est parfait sur tout, c'est pourquoi l'outil en propose deux :

- **Personnes** : utilise ormbg, un modèle entraîné principalement sur des silhouettes humaines. C'est le bon choix pour les portraits, selfies, photos de profil et photos d'identité : il suit bien les cheveux et les épaules et ignore les objets en arrière-plan. Il pèse environ 88 Mo avec accélération GPU, 44 Mo sinon.
- **Objets et produits** : utilise U²-Net, un modèle de détection du sujet principal. Il fonctionne mieux pour les chaussures, tasses, bijoux, animaux, voitures et logos, dès qu'il n'y a pas de personne au centre. Il ne pèse que 5 Mo.

Si le premier résultat ne vous convainc pas, essayez l'autre mode sur la même photo : cela prend quelques secondes. Les deux modèles sont sous licence Apache-2.0 et ne sont téléchargés qu'une fois par le navigateur, puis restent sur votre appareil, même hors ligne.

Sur les ordinateurs et téléphones récents compatibles **WebGPU** (Chrome, Edge et autres navigateurs à jour), une photo prend moins d'une seconde. Ailleurs, le traitement utilise le processeur et peut prendre quelques secondes de plus.`,
          de: `Kein Modell ist in allem perfekt, deshalb bietet das Werkzeug zwei:

- **Personen**: nutzt ormbg, ein Modell, das vor allem auf menschliche Figuren trainiert ist. Es ist die richtige Wahl für Porträts, Selfies, Profilbilder und Passfotos: Es folgt Haaren und Schultern gut und ignoriert Gegenstände im Hintergrund. Rund 88 MB mit GPU-Beschleunigung, sonst 44 MB.
- **Objekte & Produkte**: nutzt U²-Net, ein Modell zur Erkennung des Hauptmotivs. Es eignet sich besser für Schuhe, Tassen, Schmuck, Tiere, Autos und Logos, also immer dann, wenn keine Person im Mittelpunkt steht. Nur 5 MB groß.

Überzeugt das erste Ergebnis nicht, probieren Sie den anderen Modus mit demselben Foto: Das dauert Sekunden. Beide Modelle stehen unter der Apache-2.0-Lizenz und werden vom Browser nur einmal geladen; danach bleiben sie auf Ihrem Gerät, auch offline.

Auf aktuellen Computern und Smartphones mit **WebGPU** (Chrome, Edge und andere aktuelle Browser) dauert ein Foto weniger als eine Sekunde. Anderswo rechnet der Prozessor, was ein paar Sekunden länger dauern kann.`,
          pt: `Nenhum modelo é perfeito em tudo, por isso a ferramenta oferece dois:

- **Pessoas**: usa o ormbg, um modelo treinado principalmente com figuras humanas. É a escolha certa para retratos, selfies, fotos de perfil e fotos 3x4: acompanha bem cabelo e ombros e ignora os objetos do fundo. Tem cerca de 88 MB com aceleração por GPU e 44 MB nos demais casos.
- **Objetos e produtos**: usa o U²-Net, um modelo de detecção do assunto principal. Funciona melhor com tênis, canecas, joias, animais, carros e logotipos, ou seja, quando não há uma pessoa no centro. Tem só 5 MB.

Se o primeiro resultado não convencer, teste o outro modo na mesma foto: leva poucos segundos. Os dois modelos têm licença Apache-2.0 e o navegador os baixa uma única vez; depois eles ficam no seu dispositivo, até offline.

Em computadores e celulares recentes com **WebGPU** (Chrome, Edge e outros navegadores atualizados) uma foto leva menos de um segundo. Nos demais, o processamento usa a CPU e pode levar alguns segundos a mais.`,
        },
      },
      {
        heading: {
          it: "Cinque consigli per uno scontorno pulito",
          en: "Five tips for a clean cut-out",
          es: "Cinco consejos para un recorte limpio",
          fr: "Cinq conseils pour un détourage net",
          de: "Fünf Tipps für saubere Freisteller",
          pt: "Cinco dicas para um recorte limpo",
        },
        content: {
          it: `La qualità del risultato dipende molto dalla foto di partenza:

1. **Stacca il soggetto dallo sfondo**: una tazza bianca su un tavolo bianco è difficile per qualsiasi algoritmo. Un minimo di contrasto di colore o di luce aiuta molto.
2. **Luce morbida e uniforme**: le ombre nette sotto un oggetto vengono spesso considerate parte del soggetto.
3. **Inquadra il soggetto intero**: braccia o bordi tagliati dall'inquadratura producono contorni innaturali.
4. **Scegli il formato giusto per l'uso**: PNG o WebP se ti serve la trasparenza (loghi, grafiche, Canva); JPG con sfondo bianco per marketplace e moduli che non accettano trasparenze.
5. **Ridimensiona dopo**: se il sito ha un limite di peso, passa il risultato a [Riduci foto in KB](/tools/image-compress-kb) o a [Ridimensiona immagine](/tools/image-resize).

Per le foto prodotto dei marketplace spesso è richiesto lo sfondo bianco puro: nello strumento basta scegliere "Bianco" prima di scaricare.`,
          en: `The quality of the result depends a lot on the starting photo:

1. **Separate the subject from the background**: a white mug on a white table is hard for any algorithm. A little colour or light contrast helps a lot.
2. **Soft, even light**: hard shadows under an object are often treated as part of the subject.
3. **Frame the whole subject**: arms or edges cut off by the frame produce unnatural outlines.
4. **Pick the right format for the job**: PNG or WebP when you need transparency (logos, graphics, Canva); JPG with a white background for marketplaces and forms that don't accept transparency.
5. **Resize afterwards**: if a site has a file size limit, run the result through [Compress Image to KB](/tools/image-compress-kb) or [Resize Image](/tools/image-resize).

Marketplace product photos often require a pure white background: in the tool, just pick "White" before downloading.`,
          es: `La calidad del resultado depende mucho de la foto de partida:

1. **Separa el sujeto del fondo**: una taza blanca sobre una mesa blanca es difícil para cualquier algoritmo. Un poco de contraste de color o de luz ayuda mucho.
2. **Luz suave y uniforme**: las sombras duras bajo un objeto a menudo se consideran parte del sujeto.
3. **Encuadra el sujeto entero**: brazos o bordes cortados por el encuadre producen contornos poco naturales.
4. **Elige el formato según el uso**: PNG o WebP si necesitas transparencia (logos, gráficos, Canva); JPG con fondo blanco para marketplaces y formularios que no aceptan transparencias.
5. **Redimensiona después**: si la web tiene un límite de peso, pasa el resultado por [Comprimir imagen a KB](/tools/image-compress-kb) o [Redimensionar imagen](/tools/image-resize).

Para las fotos de producto de los marketplaces suele pedirse fondo blanco puro: en la herramienta basta con elegir "Blanco" antes de descargar.`,
          fr: `La qualité du résultat dépend beaucoup de la photo de départ :

1. **Détachez le sujet du fond** : une tasse blanche sur une table blanche est difficile pour n'importe quel algorithme. Un peu de contraste de couleur ou de lumière aide beaucoup.
2. **Une lumière douce et uniforme** : les ombres nettes sous un objet sont souvent considérées comme faisant partie du sujet.
3. **Cadrez le sujet en entier** : des bras ou des bords coupés par le cadre donnent des contours peu naturels.
4. **Choisissez le format selon l'usage** : PNG ou WebP si vous avez besoin de transparence (logos, visuels, Canva) ; JPG sur fond blanc pour les marketplaces et formulaires qui n'acceptent pas la transparence.
5. **Redimensionnez ensuite** : si le site impose un poids maximal, passez le résultat dans [Compresser une image en Ko](/tools/image-compress-kb) ou [Redimensionner une image](/tools/image-resize).

Pour les photos produit des marketplaces, un fond blanc pur est souvent exigé : dans l'outil, il suffit de choisir « Blanc » avant de télécharger.`,
          de: `Die Qualität des Ergebnisses hängt stark vom Ausgangsfoto ab:

1. **Motiv vom Hintergrund abheben**: Eine weiße Tasse auf einem weißen Tisch ist für jeden Algorithmus schwierig. Etwas Farb- oder Lichtkontrast hilft sehr.
2. **Weiches, gleichmäßiges Licht**: Harte Schatten unter einem Gegenstand werden oft als Teil des Motivs erkannt.
3. **Das ganze Motiv ins Bild nehmen**: Angeschnittene Arme oder Kanten ergeben unnatürliche Umrisse.
4. **Das passende Format wählen**: PNG oder WebP, wenn Sie Transparenz brauchen (Logos, Grafiken, Canva); JPG mit weißem Hintergrund für Marktplätze und Formulare ohne Transparenz.
5. **Danach verkleinern**: Hat eine Website eine Größengrenze, bearbeiten Sie das Ergebnis mit [Bild auf KB verkleinern](/tools/image-compress-kb) oder [Bildgröße ändern](/tools/image-resize).

Für Produktfotos auf Marktplätzen wird oft ein rein weißer Hintergrund verlangt: Wählen Sie im Werkzeug vor dem Herunterladen einfach „Weiß“.`,
          pt: `A qualidade do resultado depende muito da foto de partida:

1. **Destaque o assunto do fundo**: uma caneca branca numa mesa branca é difícil para qualquer algoritmo. Um pouco de contraste de cor ou de luz ajuda muito.
2. **Luz suave e uniforme**: sombras duras embaixo de um objeto muitas vezes são consideradas parte do assunto.
3. **Enquadre o assunto inteiro**: braços ou bordas cortados pelo enquadramento geram contornos artificiais.
4. **Escolha o formato conforme o uso**: PNG ou WebP se você precisa de transparência (logos, artes, Canva); JPG com fundo branco para marketplaces e formulários que não aceitam transparência.
5. **Redimensione depois**: se o site tiver limite de tamanho, passe o resultado no [Comprimir imagem em KB](/tools/image-compress-kb) ou no [Redimensionar imagem](/tools/image-resize).

As fotos de produto de marketplaces muitas vezes exigem fundo branco puro: na ferramenta, basta escolher "Branco" antes de baixar.`,
        },
      },
    ],
  },

  // 17. PDF TO JPG
  {
    slug: "convert-pdf-to-jpg-free-without-upload",
    category: "tutorials",
    datePublished: "2026-11-08",
    dateModified: "2026-11-08",
    readTime: "5 min",
    author: "Cybsquatch",
    authorRole: AUTHOR_ROLE,
    coverEmoji: "🖼️",
    title: {
      it: "Convertire un PDF in JPG: Quale Risoluzione Scegliere e Come Farlo Senza Upload",
      en: "Converting a PDF to JPG: Which Resolution to Choose and How to Do It Without Uploading",
      es: "Convertir un PDF a JPG: qué resolución elegir y cómo hacerlo sin subirlo",
      fr: "Convertir un PDF en JPG : quelle résolution choisir et comment le faire sans envoi",
      de: "PDF in JPG umwandeln: Welche Auflösung passt und wie es ohne Upload geht",
      pt: "Converter PDF para JPG: qual resolução escolher e como fazer sem upload",
    },
    subtitle: {
      it: "Per pubblicare una pagina sui social, allegarla a un modulo che accetta solo immagini o proteggere un documento dalle modifiche: guida pratica a DPI, formati e privacy.",
      en: "To post a page on social media, attach it to a form that only takes images, or keep a document from being edited: a practical guide to DPI, formats and privacy.",
      es: "Para publicar una página en redes, adjuntarla a un formulario que solo acepta imágenes o evitar que editen un documento: guía práctica de DPI, formatos y privacidad.",
      fr: "Pour publier une page sur les réseaux, la joindre à un formulaire qui n'accepte que des images ou empêcher la modification d'un document : guide pratique des DPI, formats et confidentialité.",
      de: "Um eine Seite in sozialen Netzwerken zu teilen, an ein Formular anzuhängen, das nur Bilder annimmt, oder ein Dokument vor Änderungen zu schützen: DPI, Formate und Datenschutz.",
      pt: "Para postar uma página nas redes, anexá-la a um formulário que só aceita imagens ou evitar que editem um documento: guia prático de DPI, formatos e privacidade.",
    },
    excerpt: {
      it: "Trasformare le pagine di un PDF in immagini sembra banale, ma la risoluzione sbagliata produce file illeggibili o enormi. Ecco come scegliere bene, senza consegnare il documento a un server.",
      en: "Turning PDF pages into images sounds trivial, but the wrong resolution gives you unreadable or huge files. Here's how to choose well, without handing your document to a server.",
      es: "Convertir las páginas de un PDF en imágenes parece trivial, pero la resolución equivocada da archivos ilegibles o enormes. Así se elige bien, sin entregar el documento a un servidor.",
      fr: "Transformer les pages d'un PDF en images semble anodin, mais une mauvaise résolution donne des fichiers illisibles ou énormes. Voici comment bien choisir, sans confier le document à un serveur.",
      de: "PDF-Seiten in Bilder umzuwandeln klingt trivial, doch die falsche Auflösung ergibt unlesbare oder riesige Dateien. So wählen Sie richtig, ohne das Dokument einem Server zu überlassen.",
      pt: "Transformar páginas de PDF em imagens parece simples, mas a resolução errada gera arquivos ilegíveis ou enormes. Veja como escolher bem, sem entregar o documento a um servidor.",
    },
    metaTitle: {
      it: "Convertire PDF in JPG Gratis: DPI Giusti e Nessun Upload",
      en: "Convert PDF to JPG Free: The Right DPI, No Upload",
      es: "Convertir PDF a JPG gratis: los DPI correctos y sin subir",
      fr: "Convertir un PDF en JPG gratuitement : les bons DPI, sans envoi",
      de: "PDF in JPG umwandeln kostenlos: die richtige DPI, ohne Upload",
      pt: "Converter PDF para JPG grátis: os DPI certos e sem upload",
    },
    metaDescription: {
      it: "Come convertire un PDF in JPG o PNG senza caricarlo online: quale risoluzione usare (96, 150, 300 DPI), JPG o PNG, pagine singole o tutte, e PDF protetti da password.",
      en: "How to convert a PDF to JPG or PNG without uploading it: which resolution to use (96, 150, 300 DPI), JPG or PNG, single or all pages, and password-protected PDFs.",
      es: "Cómo convertir un PDF a JPG o PNG sin subirlo: qué resolución usar (96, 150, 300 DPI), JPG o PNG, una página o todas, y PDF protegidos con contraseña.",
      fr: "Comment convertir un PDF en JPG ou PNG sans l'envoyer en ligne : quelle résolution (96, 150, 300 DPI), JPG ou PNG, une page ou toutes, et PDF protégés.",
      de: "So wandeln Sie ein PDF ohne Upload in JPG oder PNG um: welche Auflösung (96, 150, 300 DPI), JPG oder PNG, einzelne oder alle Seiten, passwortgeschützte PDFs.",
      pt: "Como converter PDF para JPG ou PNG sem enviar: qual resolução usar (96, 150, 300 DPI), JPG ou PNG, uma página ou todas, e PDFs protegidos por senha.",
    },
    seoKeyword: {
      it: "convertire pdf in jpg",
      en: "convert pdf to jpg",
      es: "convertir pdf a jpg",
      fr: "convertir pdf en jpg",
      de: "pdf in jpg umwandeln",
      pt: "converter pdf para jpg",
    },
    keyTakeaways: [
      {
        it: "150 DPI va bene per quasi tutto; 300 DPI solo se devi ingrandire o stampare in alta qualità; 96 DPI per immagini leggere da web e chat.",
        en: "150 DPI suits almost everything; 300 DPI only if you need to zoom or print at high quality; 96 DPI for light images for the web and chat.",
        es: "150 DPI sirve para casi todo; 300 DPI solo si necesitas ampliar o imprimir en alta calidad; 96 DPI para imágenes ligeras para web y chat.",
        fr: "150 DPI convient à presque tout ; 300 DPI seulement pour zoomer ou imprimer en haute qualité ; 96 DPI pour des images légères pour le web et les messageries.",
        de: "150 DPI passt für fast alles; 300 DPI nur zum Vergrößern oder für hochwertigen Druck; 96 DPI für leichte Bilder fürs Web und Messenger.",
        pt: "150 DPI serve para quase tudo; 300 DPI só se precisar ampliar ou imprimir em alta qualidade; 96 DPI para imagens leves para web e chat.",
      },
      {
        it: "Il JPG è ideale per scansioni e foto; il PNG per pagine con testo nitido, tabelle e grafici.",
        en: "JPG is ideal for scans and photos; PNG for pages with sharp text, tables and charts.",
        es: "El JPG es ideal para escaneos y fotos; el PNG para páginas con texto nítido, tablas y gráficos.",
        fr: "Le JPG est idéal pour les scans et les photos ; le PNG pour les pages avec du texte net, des tableaux et des graphiques.",
        de: "JPG eignet sich für Scans und Fotos, PNG für Seiten mit scharfem Text, Tabellen und Diagrammen.",
        pt: "O JPG é ideal para digitalizações e fotos; o PNG para páginas com texto nítido, tabelas e gráficos.",
      },
      {
        it: "Con pdf.js il documento viene disegnato nel browser: nessuna pagina viene inviata a un server.",
        en: "With pdf.js the document is rendered in the browser: no page is ever sent to a server.",
        es: "Con pdf.js el documento se dibuja en el navegador: ninguna página se envía a un servidor.",
        fr: "Avec pdf.js, le document est rendu dans le navigateur : aucune page n'est envoyée à un serveur.",
        de: "Mit pdf.js wird das Dokument im Browser gezeichnet: Keine Seite wird an einen Server gesendet.",
        pt: "Com o pdf.js o documento é desenhado no navegador: nenhuma página é enviada a um servidor.",
      },
    ],
    relatedToolIds: ["pdf-to-image", "pdf-compress", "image-compress-kb", "pdf-split"],
    sections: [
      {
        heading: {
          it: "Quando serve trasformare un PDF in immagine",
          en: "When you need to turn a PDF into an image",
          es: "Cuándo hace falta convertir un PDF en imagen",
          fr: "Quand faut-il transformer un PDF en image",
          de: "Wann man ein PDF in ein Bild umwandeln muss",
          pt: "Quando é preciso transformar um PDF em imagem",
        },
        content: {
          it: `Capita più spesso di quanto si pensi:

- un portale o un modulo accetta **solo immagini** (JPG o PNG) e tu hai il documento in PDF;
- vuoi pubblicare una pagina di un catalogo, un menu o un volantino su **Instagram, WhatsApp o un sito**;
- devi inserire una pagina in una **presentazione** o in un documento Word;
- vuoi inviare un documento in una forma **non modificabile** con un normale editor di testo.

In tutti questi casi la soluzione è la stessa: disegnare ogni pagina come immagine. È ciò che fa lo strumento [PDF in JPG / PNG](/tools/pdf-to-image), usando **pdf.js**, lo stesso motore con cui Firefox mostra i PDF. Il file viene letto dalla memoria del dispositivo e disegnato pagina per pagina nel browser: nessun upload, anche se il PDF contiene dati personali.`,
          en: `It happens more often than you'd think:

- a portal or form accepts **images only** (JPG or PNG) and your document is a PDF;
- you want to post a page of a catalogue, a menu or a flyer on **Instagram, WhatsApp or a website**;
- you need to drop a page into a **presentation** or a Word document;
- you want to send a document in a form that can't easily be **edited** with a text editor.

The solution is the same in every case: draw each page as an image. That's what the [PDF to JPG / PNG](/tools/pdf-to-image) tool does, using **pdf.js**, the same engine Firefox uses to display PDFs. The file is read from your device's memory and drawn page by page in the browser: no upload, even when the PDF contains personal data.`,
          es: `Ocurre más a menudo de lo que parece:

- un portal o un formulario acepta **solo imágenes** (JPG o PNG) y tu documento está en PDF;
- quieres publicar una página de un catálogo, un menú o un folleto en **Instagram, WhatsApp o una web**;
- necesitas meter una página en una **presentación** o en un documento de Word;
- quieres enviar un documento de forma que no se pueda **editar** fácilmente con un editor de texto.

La solución es siempre la misma: dibujar cada página como imagen. Es lo que hace la herramienta [PDF a JPG / PNG](/tools/pdf-to-image), con **pdf.js**, el mismo motor con el que Firefox muestra los PDF. El archivo se lee desde la memoria del dispositivo y se dibuja página a página en el navegador: sin subidas, aunque el PDF contenga datos personales.`,
          fr: `Cela arrive plus souvent qu'on ne le croit :

- un portail ou un formulaire n'accepte **que des images** (JPG ou PNG) et votre document est un PDF ;
- vous voulez publier une page de catalogue, un menu ou un flyer sur **Instagram, WhatsApp ou un site** ;
- vous devez insérer une page dans une **présentation** ou un document Word ;
- vous voulez envoyer un document sous une forme difficile à **modifier** avec un éditeur de texte.

La solution est toujours la même : dessiner chaque page sous forme d'image. C'est ce que fait l'outil [PDF en JPG / PNG](/tools/pdf-to-image), avec **pdf.js**, le moteur qu'utilise Firefox pour afficher les PDF. Le fichier est lu depuis la mémoire de l'appareil et dessiné page par page dans le navigateur : aucun envoi, même si le PDF contient des données personnelles.`,
          de: `Das kommt häufiger vor, als man denkt:

- ein Portal oder Formular nimmt **nur Bilder** (JPG oder PNG) an, Ihr Dokument ist aber ein PDF;
- Sie möchten eine Katalogseite, eine Speisekarte oder einen Flyer auf **Instagram, WhatsApp oder einer Website** zeigen;
- Sie brauchen eine Seite in einer **Präsentation** oder einem Word-Dokument;
- Sie möchten ein Dokument in einer Form verschicken, die sich nicht einfach **bearbeiten** lässt.

Die Lösung ist immer dieselbe: jede Seite als Bild zeichnen. Genau das macht das Werkzeug [PDF in JPG / PNG](/tools/pdf-to-image) mit **pdf.js**, derselben Engine, mit der Firefox PDFs anzeigt. Die Datei wird aus dem Speicher Ihres Geräts gelesen und Seite für Seite im Browser gezeichnet: kein Upload, auch wenn das PDF persönliche Daten enthält.`,
          pt: `Acontece mais do que parece:

- um portal ou formulário aceita **só imagens** (JPG ou PNG) e seu documento está em PDF;
- você quer postar uma página de catálogo, um cardápio ou um panfleto no **Instagram, WhatsApp ou num site**;
- precisa colocar uma página em uma **apresentação** ou num documento do Word;
- quer enviar um documento de um jeito que não possa ser **editado** facilmente.

A solução é sempre a mesma: desenhar cada página como imagem. É o que faz a ferramenta [PDF para JPG / PNG](/tools/pdf-to-image), usando o **pdf.js**, o mesmo motor que o Firefox usa para mostrar PDFs. O arquivo é lido da memória do dispositivo e desenhado página por página no navegador: sem upload, mesmo que o PDF tenha dados pessoais.`,
        },
      },
      {
        heading: {
          it: "Risoluzione: 96, 150 o 300 DPI?",
          en: "Resolution: 96, 150 or 300 DPI?",
          es: "Resolución: ¿96, 150 o 300 DPI?",
          fr: "Résolution : 96, 150 ou 300 DPI ?",
          de: "Auflösung: 96, 150 oder 300 DPI?",
          pt: "Resolução: 96, 150 ou 300 DPI?",
        },
        content: {
          it: `Un PDF non ha una "dimensione in pixel": le pagine sono descritte in punti tipografici. Quando le trasformi in immagine devi decidere quanti pixel usare per ogni pollice, cioè i **DPI**. Una pagina A4 diventa:

| DPI | Dimensione A4 | Quando usarla |
| :--- | :--- | :--- |
| 96 | circa 794 × 1123 px | Web, chat, anteprime leggere |
| 150 | circa 1240 × 1754 px | Uso generale, moduli, stampa d'ufficio |
| 300 | circa 2480 × 3508 px | Stampa di qualità, ingrandimenti, archivio |

Raddoppiare i DPI quadruplica i pixel e quindi, più o meno, il peso del file. Per questo 300 DPI conviene solo quando serve davvero. Se il portale impone un limite di peso, converti a 150 DPI e poi, se necessario, usa [Riduci foto in KB](/tools/image-compress-kb) per stare sotto la soglia.`,
          en: `A PDF has no "pixel size": its pages are described in typographic points. When you turn them into images you have to choose how many pixels to use per inch, the **DPI**. An A4 page becomes:

| DPI | A4 size | When to use it |
| :--- | :--- | :--- |
| 96 | about 794 × 1123 px | Web, chat, light previews |
| 150 | about 1240 × 1754 px | General use, forms, office printing |
| 300 | about 2480 × 3508 px | Quality printing, zooming, archiving |

Doubling the DPI quadruples the pixels and so, roughly, the file size. That's why 300 DPI only makes sense when you really need it. If a portal has a size limit, convert at 150 DPI and then, if needed, use [Compress Image to KB](/tools/image-compress-kb) to get under the threshold.`,
          es: `Un PDF no tiene "tamaño en píxeles": sus páginas se describen en puntos tipográficos. Al convertirlas en imagen hay que decidir cuántos píxeles usar por pulgada, los **DPI**. Una página A4 queda así:

| DPI | Tamaño A4 | Cuándo usarlo |
| :--- | :--- | :--- |
| 96 | unos 794 × 1123 px | Web, chat, vistas previas ligeras |
| 150 | unos 1240 × 1754 px | Uso general, formularios, impresión de oficina |
| 300 | unos 2480 × 3508 px | Impresión de calidad, ampliaciones, archivo |

Duplicar los DPI cuadruplica los píxeles y, más o menos, el peso del archivo. Por eso 300 DPI solo compensa cuando de verdad hace falta. Si el portal tiene un límite de tamaño, convierte a 150 DPI y, si es necesario, usa [Comprimir imagen a KB](/tools/image-compress-kb) para quedar por debajo.`,
          fr: `Un PDF n'a pas de « taille en pixels » : ses pages sont décrites en points typographiques. Pour les transformer en images, il faut choisir combien de pixels utiliser par pouce, les **DPI**. Une page A4 devient :

| DPI | Taille A4 | Quand l'utiliser |
| :--- | :--- | :--- |
| 96 | environ 794 × 1123 px | Web, messageries, aperçus légers |
| 150 | environ 1240 × 1754 px | Usage courant, formulaires, impression bureau |
| 300 | environ 2480 × 3508 px | Impression de qualité, zoom, archivage |

Doubler les DPI multiplie les pixels par quatre, et donc à peu près le poids du fichier. C'est pourquoi 300 DPI n'est utile que quand c'est vraiment nécessaire. Si un portail impose un poids maximal, convertissez à 150 DPI puis, si besoin, utilisez [Compresser une image en Ko](/tools/image-compress-kb) pour passer sous le seuil.`,
          de: `Ein PDF hat keine „Pixelgröße“: Seine Seiten sind in typografischen Punkten beschrieben. Beim Umwandeln in Bilder legen Sie fest, wie viele Pixel pro Zoll verwendet werden, die **DPI**. Eine A4-Seite wird zu:

| DPI | A4-Größe | Wofür |
| :--- | :--- | :--- |
| 96 | ca. 794 × 1123 px | Web, Messenger, leichte Vorschauen |
| 150 | ca. 1240 × 1754 px | Allgemein, Formulare, Bürodruck |
| 300 | ca. 2480 × 3508 px | Hochwertiger Druck, Vergrößern, Archiv |

Doppelte DPI bedeuten vierfache Pixelzahl und damit ungefähr die vierfache Dateigröße. Deshalb lohnt sich 300 DPI nur, wenn man es wirklich braucht. Hat ein Portal eine Größengrenze, wandeln Sie mit 150 DPI um und nutzen Sie bei Bedarf [Bild auf KB verkleinern](/tools/image-compress-kb).`,
          pt: `Um PDF não tem "tamanho em pixels": as páginas são descritas em pontos tipográficos. Ao transformá-las em imagem você decide quantos pixels usar por polegada, os **DPI**. Uma página A4 fica assim:

| DPI | Tamanho A4 | Quando usar |
| :--- | :--- | :--- |
| 96 | cerca de 794 × 1123 px | Web, chat, prévias leves |
| 150 | cerca de 1240 × 1754 px | Uso geral, formulários, impressão de escritório |
| 300 | cerca de 2480 × 3508 px | Impressão de qualidade, ampliações, arquivo |

Dobrar os DPI quadruplica os pixels e, mais ou menos, o tamanho do arquivo. Por isso 300 DPI só vale a pena quando realmente é necessário. Se o portal tiver limite de tamanho, converta a 150 DPI e, se precisar, use o [Comprimir imagem em KB](/tools/image-compress-kb) para ficar abaixo do limite.`,
        },
      },
      {
        heading: {
          it: "JPG o PNG, pagine scelte e PDF protetti",
          en: "JPG or PNG, selected pages and protected PDFs",
          es: "JPG o PNG, páginas elegidas y PDF protegidos",
          fr: "JPG ou PNG, pages choisies et PDF protégés",
          de: "JPG oder PNG, ausgewählte Seiten und geschützte PDFs",
          pt: "JPG ou PNG, páginas escolhidas e PDFs protegidos",
        },
        content: {
          it: `Tre dettagli che fanno la differenza:

- **JPG o PNG**: il JPG produce file molto più leggeri ed è perfetto per scansioni e pagine con fotografie. Il PNG non perde qualità e mantiene testo, tabelle e grafici perfettamente nitidi, ma pesa di più. Il WebP è una via di mezzo moderna, accettata da quasi tutti i siti ma non da tutti i moduli.
- **Solo le pagine che servono**: nel campo pagine puoi scrivere ad esempio \`1-3, 5\` oppure \`8-\` per convertire dall'ottava fino all'ultima. Le immagini vengono numerate con il numero di pagina originale e, se sono più di una, si scaricano insieme in uno ZIP.
- **PDF con password**: se il documento è protetto, lo strumento chiede la password. Anche la password resta nel browser e serve solo ad aprire il file sul tuo dispositivo.

Se invece ti serve il contrario, cioè unire più foto in un unico PDF, usa [Da JPG a PDF](/tools/image-to-pdf).`,
          en: `Three details that make a difference:

- **JPG or PNG**: JPG makes much lighter files and is perfect for scans and pages with photos. PNG is lossless and keeps text, tables and charts perfectly sharp, but it's heavier. WebP is a modern middle ground, accepted by almost every website but not by every form.
- **Only the pages you need**: in the pages field you can type, for example, \`1-3, 5\` or \`8-\` to convert from page eight to the end. Images are numbered with the original page number and, if there's more than one, they download together as a ZIP.
- **Password-protected PDFs**: if the document is protected, the tool asks for the password. The password also stays in the browser and is only used to open the file on your device.

If you need the opposite, combining several photos into a single PDF, use [JPG to PDF](/tools/image-to-pdf).`,
          es: `Tres detalles que marcan la diferencia:

- **JPG o PNG**: el JPG genera archivos mucho más ligeros y es perfecto para escaneos y páginas con fotos. El PNG no pierde calidad y mantiene texto, tablas y gráficos nítidos, pero pesa más. El WebP es un término medio moderno, aceptado por casi todas las webs pero no por todos los formularios.
- **Solo las páginas que necesitas**: en el campo de páginas puedes escribir, por ejemplo, \`1-3, 5\` o \`8-\` para convertir desde la octava hasta el final. Las imágenes se numeran con la página original y, si son varias, se descargan juntas en un ZIP.
- **PDF con contraseña**: si el documento está protegido, la herramienta pide la contraseña. También la contraseña se queda en el navegador y solo sirve para abrir el archivo en tu dispositivo.

Si necesitas lo contrario, unir varias fotos en un solo PDF, usa [JPG a PDF](/tools/image-to-pdf).`,
          fr: `Trois détails qui font la différence :

- **JPG ou PNG** : le JPG produit des fichiers bien plus légers, parfait pour les scans et les pages avec photos. Le PNG est sans perte et garde texte, tableaux et graphiques parfaitement nets, mais il est plus lourd. Le WebP est un compromis moderne, accepté par presque tous les sites mais pas par tous les formulaires.
- **Seulement les pages utiles** : dans le champ des pages, tapez par exemple \`1-3, 5\` ou \`8-\` pour convertir de la huitième jusqu'à la fin. Les images sont numérotées avec le numéro de page d'origine et, s'il y en a plusieurs, se téléchargent ensemble dans un ZIP.
- **PDF protégés par mot de passe** : si le document est protégé, l'outil demande le mot de passe. Le mot de passe reste lui aussi dans le navigateur et sert uniquement à ouvrir le fichier sur votre appareil.

Si vous avez besoin de l'inverse, réunir plusieurs photos dans un seul PDF, utilisez [JPG en PDF](/tools/image-to-pdf).`,
          de: `Drei Details, die den Unterschied machen:

- **JPG oder PNG**: JPG ergibt deutlich kleinere Dateien und ist ideal für Scans und Seiten mit Fotos. PNG ist verlustfrei und hält Text, Tabellen und Diagramme gestochen scharf, ist aber größer. WebP ist ein moderner Mittelweg, den fast alle Websites, aber nicht alle Formulare akzeptieren.
- **Nur die nötigen Seiten**: Im Seitenfeld können Sie zum Beispiel \`1-3, 5\` oder \`8-\` eingeben, um ab Seite acht bis zum Ende umzuwandeln. Die Bilder tragen die ursprüngliche Seitenzahl und werden bei mehreren gemeinsam als ZIP heruntergeladen.
- **Passwortgeschützte PDFs**: Ist das Dokument geschützt, fragt das Werkzeug nach dem Passwort. Auch das Passwort bleibt im Browser und dient nur dazu, die Datei auf Ihrem Gerät zu öffnen.

Brauchen Sie das Gegenteil, also mehrere Fotos in einem PDF, nutzen Sie [JPG in PDF](/tools/image-to-pdf).`,
          pt: `Três detalhes que fazem diferença:

- **JPG ou PNG**: o JPG gera arquivos bem mais leves e é perfeito para digitalizações e páginas com fotos. O PNG não perde qualidade e mantém texto, tabelas e gráficos nítidos, mas pesa mais. O WebP é um meio-termo moderno, aceito por quase todos os sites, mas não por todos os formulários.
- **Só as páginas que você precisa**: no campo de páginas você pode digitar, por exemplo, \`1-3, 5\` ou \`8-\` para converter da oitava até o fim. As imagens são numeradas com a página original e, se forem várias, são baixadas juntas em um ZIP.
- **PDFs com senha**: se o documento for protegido, a ferramenta pede a senha. A senha também fica no navegador e serve só para abrir o arquivo no seu dispositivo.

Se você precisa do contrário, juntar várias fotos em um único PDF, use o [JPG para PDF](/tools/image-to-pdf).`,
        },
      },
    ],
  },

  // 18. COMPRESS PHOTO TO KB
  {
    slug: "compress-photo-to-100kb-for-online-forms",
    category: "tutorials",
    datePublished: "2026-11-08",
    dateModified: "2026-11-08",
    readTime: "5 min",
    author: "Cybsquatch",
    authorRole: AUTHOR_ROLE,
    coverEmoji: "📏",
    title: {
      it: "Ridurre una Foto a 100 KB (o 50, o 200) per Moduli Online e Concorsi",
      en: "How to Shrink a Photo to 100 KB (or 50, or 200) for Online Forms",
      es: "Cómo reducir una foto a 100 KB (o 50, o 200) para formularios online",
      fr: "Réduire une photo à 100 Ko (ou 50, ou 200) pour les formulaires en ligne",
      de: "Ein Foto auf 100 KB (oder 50, oder 200) verkleinern für Online-Formulare",
      pt: "Como reduzir uma foto para 100 KB (ou 50, ou 200) para formulários online",
    },
    subtitle: {
      it: "Il portale rifiuta la tua foto perché supera il limite? Ecco perché succede, come rientrare nella soglia senza rovinare l'immagine e cosa fare con firme e fototessere.",
      en: "Is a portal rejecting your photo because it's over the limit? Here's why it happens, how to get under the threshold without ruining the image, and what to do with signatures and ID photos.",
      es: "¿El portal rechaza tu foto por superar el límite? Por qué ocurre, cómo bajar del umbral sin estropear la imagen y qué hacer con firmas y fotos de carné.",
      fr: "Le portail refuse votre photo car elle dépasse la limite ? Pourquoi cela arrive, comment passer sous le seuil sans abîmer l'image et que faire des signatures et photos d'identité.",
      de: "Das Portal lehnt Ihr Foto ab, weil es zu groß ist? Warum das passiert, wie Sie unter die Grenze kommen, ohne das Bild zu ruinieren, und was bei Unterschriften und Passfotos hilft.",
      pt: "O portal recusa sua foto porque passou do limite? Veja por que acontece, como ficar abaixo do limite sem estragar a imagem e o que fazer com assinaturas e fotos 3x4.",
    },
    excerpt: {
      it: "Le foto dello smartphone pesano 3-5 MB, mentre molti moduli online accettano 100 o 200 KB. Ridurle nel modo giusto significa scegliere bene qualità e dimensioni, non schiacciarle a caso.",
      en: "Smartphone photos weigh 3-5 MB, while many online forms accept 100 or 200 KB. Shrinking them properly means balancing quality and dimensions, not crushing them at random.",
      es: "Las fotos del móvil pesan 3-5 MB, mientras que muchos formularios online aceptan 100 o 200 KB. Reducirlas bien significa equilibrar calidad y dimensiones, no aplastarlas al azar.",
      fr: "Les photos de smartphone pèsent 3 à 5 Mo, alors que beaucoup de formulaires acceptent 100 ou 200 Ko. Bien les réduire, c'est équilibrer qualité et dimensions, pas les écraser au hasard.",
      de: "Smartphone-Fotos wiegen 3-5 MB, viele Online-Formulare akzeptieren aber nur 100 oder 200 KB. Richtig verkleinern heißt, Qualität und Abmessungen auszubalancieren statt wahllos zu stauchen.",
      pt: "As fotos do celular têm 3-5 MB, enquanto muitos formulários aceitam 100 ou 200 KB. Reduzir do jeito certo é equilibrar qualidade e dimensões, não esmagar a imagem de qualquer jeito.",
    },
    metaTitle: {
      it: "Ridurre Foto a 100 KB per Moduli e Concorsi: Guida Pratica",
      en: "Compress a Photo to 100 KB for Online Forms: Practical Guide",
      es: "Reducir una foto a 100 KB para formularios: guía práctica",
      fr: "Réduire une photo à 100 Ko pour un formulaire : guide pratique",
      de: "Foto auf 100 KB verkleinern für Formulare: praktische Anleitung",
      pt: "Reduzir foto para 100 KB para formulários: guia prático",
    },
    metaDescription: {
      it: "Come ridurre una foto sotto 100 KB, 50 KB o 200 KB per concorsi, INPS, passaporto e portali online senza perdere nitidezza: qualità, dimensioni, firme e fototessere.",
      en: "How to get a photo under 100 KB, 50 KB or 200 KB for job, visa and government portals without losing sharpness: quality, dimensions, signatures and ID photos.",
      es: "Cómo dejar una foto por debajo de 100 KB, 50 KB o 200 KB para oposiciones, visados y portales públicos sin perder nitidez: calidad, dimensiones, firmas y fotos de carné.",
      fr: "Comment passer une photo sous 100 Ko, 50 Ko ou 200 Ko pour concours, visas et portails administratifs sans perdre en netteté : qualité, dimensions, signatures.",
      de: "So bringen Sie ein Foto unter 100 KB, 50 KB oder 200 KB für Bewerbungen, Visa und Behördenportale, ohne Schärfe zu verlieren: Qualität, Maße, Unterschriften.",
      pt: "Como deixar uma foto abaixo de 100 KB, 50 KB ou 200 KB para concursos, vistos e portais do governo sem perder nitidez: qualidade, dimensões, assinaturas e 3x4.",
    },
    seoKeyword: {
      it: "ridurre foto a 100 kb",
      en: "compress photo to 100kb",
      es: "reducir foto a 100 kb",
      fr: "réduire photo 100 ko",
      de: "foto auf 100 kb verkleinern",
      pt: "reduzir foto para 100 kb",
    },
    keyTakeaways: [
      {
        it: "Il peso di una foto dipende da due leve: le dimensioni in pixel e la qualità di compressione. Si ottiene il risultato migliore usandole insieme.",
        en: "A photo's file size depends on two levers: pixel dimensions and compression quality. The best result comes from using both together.",
        es: "El peso de una foto depende de dos palancas: las dimensiones en píxeles y la calidad de compresión. El mejor resultado se logra usando ambas.",
        fr: "Le poids d'une photo dépend de deux leviers : les dimensions en pixels et la qualité de compression. Le meilleur résultat vient de leur combinaison.",
        de: "Die Dateigröße eines Fotos hängt von zwei Hebeln ab: Pixelmaßen und Kompressionsqualität. Das beste Ergebnis entsteht, wenn man beide nutzt.",
        pt: "O tamanho de uma foto depende de duas alavancas: dimensões em pixels e qualidade de compressão. O melhor resultado vem de usar as duas juntas.",
      },
      {
        it: "Per fototessere e firme 20-50 KB sono di solito sufficienti, perché l'immagine finale è piccola.",
        en: "For ID photos and signatures, 20-50 KB is usually plenty, because the final image is small.",
        es: "Para fotos de carné y firmas, 20-50 KB suelen bastar, porque la imagen final es pequeña.",
        fr: "Pour les photos d'identité et les signatures, 20 à 50 Ko suffisent généralement, car l'image finale est petite.",
        de: "Für Passfotos und Unterschriften reichen meist 20-50 KB, weil das fertige Bild klein ist.",
        pt: "Para fotos 3x4 e assinaturas, 20-50 KB costumam bastar, porque a imagem final é pequena.",
      },
      {
        it: "Comprimere nel browser rimuove anche i dati EXIF e la posizione GPS, che non dovrebbero finire in un modulo pubblico.",
        en: "Compressing in the browser also strips EXIF data and GPS location, which shouldn't end up in a public form.",
        es: "Comprimir en el navegador también elimina los datos EXIF y la ubicación GPS, que no deberían acabar en un formulario.",
        fr: "Compresser dans le navigateur supprime aussi les données EXIF et la position GPS, qui n'ont rien à faire dans un formulaire.",
        de: "Beim Komprimieren im Browser werden auch EXIF-Daten und GPS-Standort entfernt, die in keinem Formular landen sollten.",
        pt: "Comprimir no navegador também remove os dados EXIF e a localização GPS, que não deveriam ir parar num formulário.",
      },
    ],
    relatedToolIds: ["image-compress-kb", "image-resize", "heic-to-jpg", "exif-remover"],
    sections: [
      {
        heading: {
          it: "Perché il modulo rifiuta la tua foto",
          en: "Why the form rejects your photo",
          es: "Por qué el formulario rechaza tu foto",
          fr: "Pourquoi le formulaire refuse votre photo",
          de: "Warum das Formular Ihr Foto ablehnt",
          pt: "Por que o formulário recusa sua foto",
        },
        content: {
          it: `Una foto scattata con uno smartphone recente misura spesso 4000 × 3000 pixel o più, e pesa tra 3 e 5 MB. Molti portali, invece, accettano allegati da 100, 200 o 500 KB, e per firme e fototessere a volte ancora meno.

Il motivo è semplice: chi gestisce il portale deve conservare migliaia di documenti e non ha bisogno di una foto da 12 megapixel per riconoscere un volto o leggere una firma.

Le soluzioni "a caso", come fare uno screenshot della foto o inviarla su WhatsApp per poi riscaricarla, a volte funzionano ma danno risultati imprevedibili: immagini sgranate, bordi tagliati, colori sbiaditi. Esiste un modo più preciso.`,
          en: `A photo taken with a recent smartphone is often 4000 × 3000 pixels or more and weighs 3 to 5 MB. Many portals, by contrast, accept attachments of 100, 200 or 500 KB, and sometimes even less for signatures and ID photos.

The reason is simple: whoever runs the portal has to store thousands of documents and doesn't need a 12-megapixel photo to recognise a face or read a signature.

"Random" fixes, like taking a screenshot of the photo or sending it through WhatsApp and downloading it again, sometimes work but give unpredictable results: grainy images, cropped edges, washed-out colours. There's a more precise way.`,
          es: `Una foto hecha con un móvil reciente suele medir 4000 × 3000 píxeles o más y pesa entre 3 y 5 MB. Muchos portales, en cambio, aceptan adjuntos de 100, 200 o 500 KB, y para firmas y fotos de carné a veces aún menos.

El motivo es sencillo: quien gestiona el portal tiene que guardar miles de documentos y no necesita una foto de 12 megapíxeles para reconocer una cara o leer una firma.

Las soluciones "a ojo", como hacer una captura de pantalla de la foto o enviarla por WhatsApp y volver a descargarla, a veces funcionan pero dan resultados imprevisibles: imágenes pixeladas, bordes cortados, colores apagados. Hay una forma más precisa.`,
          fr: `Une photo prise avec un smartphone récent mesure souvent 4000 × 3000 pixels ou plus et pèse entre 3 et 5 Mo. Beaucoup de portails, eux, acceptent des pièces jointes de 100, 200 ou 500 Ko, et parfois encore moins pour les signatures et photos d'identité.

La raison est simple : le gestionnaire du portail doit conserver des milliers de documents et n'a pas besoin d'une photo de 12 mégapixels pour reconnaître un visage ou lire une signature.

Les solutions « au hasard », comme faire une capture d'écran de la photo ou l'envoyer sur WhatsApp pour la retélécharger, fonctionnent parfois mais donnent des résultats imprévisibles : images granuleuses, bords coupés, couleurs ternes. Il existe une méthode plus précise.`,
          de: `Ein Foto von einem aktuellen Smartphone misst oft 4000 × 3000 Pixel oder mehr und wiegt 3 bis 5 MB. Viele Portale akzeptieren dagegen Anhänge mit 100, 200 oder 500 KB, bei Unterschriften und Passfotos manchmal noch weniger.

Der Grund ist einfach: Der Betreiber muss Tausende Dokumente speichern und braucht kein 12-Megapixel-Foto, um ein Gesicht zu erkennen oder eine Unterschrift zu lesen.

„Notlösungen“ wie ein Screenshot vom Foto oder das Verschicken per WhatsApp und erneute Herunterladen klappen manchmal, liefern aber unvorhersehbare Ergebnisse: körnige Bilder, abgeschnittene Ränder, blasse Farben. Es geht präziser.`,
          pt: `Uma foto tirada com um celular recente costuma ter 4000 × 3000 pixels ou mais e pesa de 3 a 5 MB. Muitos portais, por outro lado, aceitam anexos de 100, 200 ou 500 KB, e para assinaturas e fotos 3x4 às vezes ainda menos.

O motivo é simples: quem administra o portal precisa guardar milhares de documentos e não precisa de uma foto de 12 megapixels para reconhecer um rosto ou ler uma assinatura.

As soluções "no improviso", como tirar um print da foto ou mandar pelo WhatsApp e baixar de novo, às vezes funcionam, mas dão resultados imprevisíveis: imagens granuladas, bordas cortadas, cores desbotadas. Existe um jeito mais preciso.`,
        },
      },
      {
        heading: {
          it: "Come si arriva a una dimensione esatta",
          en: "How to hit an exact size",
          es: "Cómo llegar a un tamaño exacto",
          fr: "Comment atteindre une taille exacte",
          de: "So erreichen Sie eine exakte Größe",
          pt: "Como chegar a um tamanho exato",
        },
        content: {
          it: `Il peso di una foto JPG dipende da due cose: **quanti pixel** contiene e **quanto è compressa**. Lo strumento [Riduci foto in KB](/tools/image-compress-kb) lavora su entrambe, nell'ordine giusto:

1. prova diversi livelli di qualità JPG (o WebP) e tiene **il più alto** che resta sotto il limite che hai scelto;
2. solo se nemmeno una qualità bassa basta, **riduce le dimensioni** a piccoli passi e riprova;
3. ti mostra peso finale, dimensioni in pixel e se il limite è stato rispettato.

Così una foto da 4 MB scende a 200 KB mantenendo quasi sempre le dimensioni originali, mentre per 20-50 KB l'immagine viene anche rimpicciolita, perché a quei pesi non c'è altro modo.

Se il modulo indica anche le dimensioni (per esempio "lato massimo 1200 pixel"), puoi impostarle nello stesso strumento. Per una firma scansionata, ritaglia prima solo la firma con [Ritaglia immagine](/tools/image-crop): meno sfondo bianco significa più dettaglio a parità di peso.`,
          en: `A JPG's file size depends on two things: **how many pixels** it has and **how compressed** it is. The [Compress Image to KB](/tools/image-compress-kb) tool works on both, in the right order:

1. it tries several JPG (or WebP) quality levels and keeps **the highest** one that stays under the limit you chose;
2. only if even a low quality isn't enough does it **shrink the dimensions** in small steps and try again;
3. it shows you the final size, the pixel dimensions and whether the limit was met.

That way a 4 MB photo drops to 200 KB while almost always keeping its original dimensions, while for 20-50 KB the image is also scaled down, because at those sizes there's no other way.

If the form also specifies dimensions (for example "longest side 1200 pixels"), you can set them in the same tool. For a scanned signature, crop just the signature first with [Crop Image](/tools/image-crop): less white background means more detail for the same size.`,
          es: `El peso de un JPG depende de dos cosas: **cuántos píxeles** tiene y **cuánto está comprimido**. La herramienta [Comprimir imagen a KB](/tools/image-compress-kb) trabaja con ambas, en el orden correcto:

1. prueba varios niveles de calidad JPG (o WebP) y se queda con **el más alto** que cabe en el límite elegido;
2. solo si ni siquiera una calidad baja basta, **reduce las dimensiones** poco a poco y vuelve a probar;
3. te muestra el peso final, las dimensiones en píxeles y si se ha cumplido el límite.

Así, una foto de 4 MB baja a 200 KB manteniendo casi siempre sus dimensiones originales, mientras que para 20-50 KB la imagen también se reduce, porque con esos pesos no hay otra forma.

Si el formulario indica también las dimensiones (por ejemplo, "lado máximo 1200 píxeles"), puedes fijarlas en la misma herramienta. Para una firma escaneada, recorta antes solo la firma con [Recortar imagen](/tools/image-crop): menos fondo blanco significa más detalle con el mismo peso.`,
          fr: `Le poids d'un JPG dépend de deux choses : **combien de pixels** il contient et **à quel point** il est compressé. L'outil [Compresser une image en Ko](/tools/image-compress-kb) agit sur les deux, dans le bon ordre :

1. il essaie plusieurs niveaux de qualité JPG (ou WebP) et garde **le plus élevé** qui respecte la limite choisie ;
2. seulement si même une qualité basse ne suffit pas, il **réduit les dimensions** par petits pas et recommence ;
3. il affiche le poids final, les dimensions en pixels et si la limite est respectée.

Ainsi, une photo de 4 Mo descend à 200 Ko en gardant presque toujours ses dimensions d'origine, alors qu'à 20-50 Ko l'image est aussi réduite, car à ces poids il n'y a pas d'autre moyen.

Si le formulaire impose aussi des dimensions (par exemple « plus grand côté 1200 pixels »), vous pouvez les régler dans le même outil. Pour une signature scannée, recadrez d'abord la signature seule avec [Recadrer une image](/tools/image-crop) : moins de fond blanc, c'est plus de détail pour le même poids.`,
          de: `Die Größe eines JPG hängt von zwei Dingen ab: **wie viele Pixel** es hat und **wie stark** es komprimiert ist. Das Werkzeug [Bild auf KB verkleinern](/tools/image-compress-kb) arbeitet an beidem, in der richtigen Reihenfolge:

1. Es probiert mehrere JPG- (oder WebP-)Qualitätsstufen und behält **die höchste**, die unter Ihrem Limit bleibt;
2. nur wenn selbst niedrige Qualität nicht reicht, **verkleinert es die Abmessungen** in kleinen Schritten und versucht es erneut;
3. es zeigt Endgröße, Pixelmaße und ob das Limit eingehalten wurde.

So schrumpft ein 4-MB-Foto auf 200 KB und behält dabei fast immer seine Originalmaße, während es für 20-50 KB auch verkleinert wird, weil es bei diesen Größen nicht anders geht.

Verlangt das Formular auch Abmessungen (etwa „längste Seite 1200 Pixel“), stellen Sie diese im selben Werkzeug ein. Bei einer gescannten Unterschrift schneiden Sie vorher nur die Unterschrift mit [Bild zuschneiden](/tools/image-crop) aus: weniger weißer Hintergrund bedeutet mehr Details bei gleicher Größe.`,
          pt: `O tamanho de um JPG depende de duas coisas: **quantos pixels** ele tem e **quanto está comprimido**. A ferramenta [Comprimir imagem em KB](/tools/image-compress-kb) trabalha nas duas, na ordem certa:

1. testa vários níveis de qualidade JPG (ou WebP) e fica com **o mais alto** que cabe no limite escolhido;
2. só se nem uma qualidade baixa bastar, **reduz as dimensões** aos poucos e tenta de novo;
3. mostra o tamanho final, as dimensões em pixels e se o limite foi respeitado.

Assim, uma foto de 4 MB cai para 200 KB mantendo quase sempre as dimensões originais, enquanto para 20-50 KB a imagem também é reduzida, porque nesses tamanhos não há outro jeito.

Se o formulário também pedir dimensões (por exemplo, "lado maior de 1200 pixels"), dá para definir na mesma ferramenta. Para uma assinatura digitalizada, recorte antes só a assinatura com o [Recortar imagem](/tools/image-crop): menos fundo branco significa mais detalhe com o mesmo tamanho.`,
        },
      },
      {
        heading: {
          it: "Errori da evitare e un vantaggio nascosto",
          en: "Mistakes to avoid, and a hidden bonus",
          es: "Errores que evitar y una ventaja oculta",
          fr: "Les erreurs à éviter, et un bonus caché",
          de: "Fehler, die Sie vermeiden sollten, und ein versteckter Vorteil",
          pt: "Erros a evitar e uma vantagem escondida",
        },
        content: {
          it: `Qualche accorgimento evita il classico "file non valido" all'ultimo minuto:

- **Foto HEIC dell'iPhone**: molti portali non le accettano. Convertile prima con [HEIC in JPG](/tools/heic-to-jpg).
- **PNG per le foto**: il PNG è pensato per grafiche e loghi; per una fotografia pesa molto di più del JPG a parità di qualità.
- **Ridurre più volte lo stesso file**: ogni passaggio JPG perde qualità. Riparti sempre dall'originale.
- **Lasciare margine**: se il limite è 200 KB, scegline 190. Alcuni portali calcolano i KB in modo diverso (1000 o 1024 byte).

Il vantaggio nascosto riguarda la privacy: ricodificando la foto nel browser, il file finale non contiene più i **metadati EXIF**, compresa la posizione GPS in cui è stata scattata. Un dettaglio che non dovrebbe mai finire in un modulo, e che qui sparisce senza fare nulla. E poiché tutto avviene sul tuo dispositivo, la foto del tuo documento non passa da nessun server.`,
          en: `A few precautions prevent the classic last-minute "invalid file":

- **iPhone HEIC photos**: many portals don't accept them. Convert them first with [HEIC to JPG](/tools/heic-to-jpg).
- **PNG for photos**: PNG is meant for graphics and logos; for a photograph it's much heavier than JPG at the same quality.
- **Shrinking the same file repeatedly**: every JPG pass loses quality. Always start again from the original.
- **Leave some margin**: if the limit is 200 KB, aim for 190. Some portals count KB differently (1000 or 1024 bytes).

The hidden bonus is about privacy: by re-encoding the photo in the browser, the final file no longer contains **EXIF metadata**, including the GPS location where it was taken. A detail that should never end up in a form, and here it disappears without you doing anything. And since everything happens on your device, the photo of your ID never passes through a server.`,
          es: `Algunas precauciones evitan el típico "archivo no válido" de última hora:

- **Fotos HEIC del iPhone**: muchos portales no las aceptan. Conviértelas antes con [HEIC a JPG](/tools/heic-to-jpg).
- **PNG para fotos**: el PNG está pensado para gráficos y logotipos; en una fotografía pesa mucho más que el JPG con la misma calidad.
- **Reducir el mismo archivo varias veces**: cada pasada JPG pierde calidad. Empieza siempre desde el original.
- **Deja margen**: si el límite es 200 KB, elige 190. Algunos portales cuentan los KB de forma distinta (1000 o 1024 bytes).

La ventaja oculta tiene que ver con la privacidad: al recodificar la foto en el navegador, el archivo final ya no contiene **metadatos EXIF**, incluida la ubicación GPS donde se hizo. Un dato que nunca debería acabar en un formulario y que aquí desaparece sin que hagas nada. Y como todo ocurre en tu dispositivo, la foto de tu documento no pasa por ningún servidor.`,
          fr: `Quelques précautions évitent le classique « fichier non valide » de dernière minute :

- **Photos HEIC d'iPhone** : beaucoup de portails ne les acceptent pas. Convertissez-les d'abord avec [HEIC en JPG](/tools/heic-to-jpg).
- **PNG pour les photos** : le PNG est fait pour les graphismes et logos ; pour une photo, il pèse bien plus lourd que le JPG à qualité égale.
- **Réduire plusieurs fois le même fichier** : chaque passage en JPG perd de la qualité. Repartez toujours de l'original.
- **Gardez une marge** : si la limite est de 200 Ko, visez 190. Certains portails ne comptent pas les Ko de la même façon (1000 ou 1024 octets).

Le bonus caché concerne la vie privée : en réencodant la photo dans le navigateur, le fichier final ne contient plus les **métadonnées EXIF**, y compris la position GPS de la prise de vue. Un détail qui ne devrait jamais finir dans un formulaire, et qui disparaît ici sans rien faire. Et comme tout se passe sur votre appareil, la photo de votre pièce d'identité ne passe par aucun serveur.`,
          de: `Ein paar Vorkehrungen verhindern das klassische „ungültige Datei“ in letzter Minute:

- **HEIC-Fotos vom iPhone**: Viele Portale nehmen sie nicht an. Wandeln Sie sie vorher mit [HEIC in JPG](/tools/heic-to-jpg) um.
- **PNG für Fotos**: PNG ist für Grafiken und Logos gedacht; bei Fotos ist es bei gleicher Qualität viel größer als JPG.
- **Dieselbe Datei mehrfach verkleinern**: Jeder JPG-Durchgang kostet Qualität. Starten Sie immer vom Original.
- **Puffer lassen**: Liegt die Grenze bei 200 KB, zielen Sie auf 190. Manche Portale rechnen KB unterschiedlich (1000 oder 1024 Byte).

Der versteckte Vorteil betrifft den Datenschutz: Weil das Foto im Browser neu kodiert wird, enthält die Datei keine **EXIF-Metadaten** mehr, auch nicht den GPS-Standort der Aufnahme. Ein Detail, das nie in einem Formular landen sollte und hier ganz ohne Zutun verschwindet. Und da alles auf Ihrem Gerät passiert, geht das Foto Ihres Ausweises über keinen Server.`,
          pt: `Alguns cuidados evitam o clássico "arquivo inválido" no último minuto:

- **Fotos HEIC do iPhone**: muitos portais não aceitam. Converta antes com o [HEIC para JPG](/tools/heic-to-jpg).
- **PNG para fotos**: o PNG foi pensado para artes e logotipos; numa fotografia ele pesa muito mais que o JPG com a mesma qualidade.
- **Reduzir o mesmo arquivo várias vezes**: cada passagem em JPG perde qualidade. Comece sempre do original.
- **Deixe uma margem**: se o limite é 200 KB, escolha 190. Alguns portais contam os KB de forma diferente (1000 ou 1024 bytes).

A vantagem escondida é de privacidade: ao recodificar a foto no navegador, o arquivo final não tem mais **metadados EXIF**, incluindo a localização GPS onde ela foi tirada. Um dado que nunca deveria ir parar num formulário e que aqui some sem você fazer nada. E como tudo acontece no seu dispositivo, a foto do seu documento não passa por nenhum servidor.`,
        },
      },
    ],
  },

  // 19. WATERMARK ID COPY
  {
    slug: "watermark-id-document-copy-prevent-identity-theft",
    category: "privacy",
    datePublished: "2026-11-08",
    dateModified: "2026-11-08",
    readTime: "5 min",
    author: "Cybsquatch",
    authorRole: AUTHOR_ROLE,
    coverEmoji: "🪪",
    title: {
      it: "Filigrana sulla Copia del Documento d'Identità: Come Proteggerti dal Furto d'Identità",
      en: "Watermark Your ID Copy: How to Protect Yourself from Identity Theft",
      es: "Marca de agua en la copia del DNI: cómo protegerte de la suplantación de identidad",
      fr: "Filigrane sur la copie de votre pièce d'identité : se protéger de l'usurpation",
      de: "Wasserzeichen auf der Ausweiskopie: So schützen Sie sich vor Identitätsdiebstahl",
      pt: "Marca d'água na cópia do documento: como se proteger do roubo de identidade",
    },
    subtitle: {
      it: "Agenzie immobiliari, hotel, noleggi e datori di lavoro chiedono spesso una copia del documento. Una semplice scritta sopra può renderla quasi inutile per un truffatore.",
      en: "Letting agents, hotels, rentals and employers often ask for a copy of your ID. A simple line of text across it can make it almost useless to a fraudster.",
      es: "Inmobiliarias, hoteles, alquileres y empresas piden a menudo una copia del DNI. Una simple frase encima puede hacerla casi inútil para un estafador.",
      fr: "Agences immobilières, hôtels, loueurs et employeurs demandent souvent une copie de votre pièce d'identité. Une simple mention dessus peut la rendre presque inutile à un fraudeur.",
      de: "Makler, Hotels, Vermieter und Arbeitgeber verlangen oft eine Ausweiskopie. Ein einfacher Schriftzug darauf kann sie für Betrüger nahezu wertlos machen.",
      pt: "Imobiliárias, hotéis, locadoras e empresas pedem com frequência uma cópia do documento. Uma simples frase por cima pode torná-la quase inútil para um golpista.",
    },
    excerpt: {
      it: "Una copia del documento finita nelle mani sbagliate può servire ad aprire conti, chiedere finanziamenti o attivare SIM. Una filigrana con destinatario e data riduce molto il rischio.",
      en: "An ID copy in the wrong hands can be used to open accounts, apply for loans or activate SIM cards. A watermark naming the recipient and date greatly reduces the risk.",
      es: "Una copia del DNI en malas manos puede servir para abrir cuentas, pedir préstamos o activar tarjetas SIM. Una marca de agua con destinatario y fecha reduce mucho el riesgo.",
      fr: "Une copie de pièce d'identité entre de mauvaises mains peut servir à ouvrir des comptes, demander des crédits ou activer des cartes SIM. Un filigrane avec destinataire et date réduit fortement le risque.",
      de: "Eine Ausweiskopie in falschen Händen kann für Kontoeröffnungen, Kredite oder SIM-Karten missbraucht werden. Ein Wasserzeichen mit Empfänger und Datum senkt das Risiko deutlich.",
      pt: "Uma cópia do documento nas mãos erradas pode servir para abrir contas, pedir empréstimos ou ativar chips. Uma marca d'água com destinatário e data reduz muito o risco.",
    },
    metaTitle: {
      it: "Filigrana su Copia Documento d'Identità: Proteggiti dal Furto",
      en: "Watermark Your ID Copy to Prevent Identity Theft",
      es: "Marca de agua en la copia del DNI contra la suplantación",
      fr: "Filigrane sur copie de pièce d'identité contre l'usurpation",
      de: "Wasserzeichen auf Ausweiskopie gegen Identitätsdiebstahl",
      pt: "Marca d'água na cópia do documento contra roubo de identidade",
    },
    metaDescription: {
      it: "Perché e come aggiungere una filigrana alla copia della carta d'identità o del passaporto prima di inviarla: cosa scrivere, dove metterla e come farlo senza caricare il documento.",
      en: "Why and how to watermark a copy of your ID card or passport before sending it: what to write, where to place it and how to do it without uploading the document anywhere.",
      es: "Por qué y cómo añadir una marca de agua a la copia del DNI o pasaporte antes de enviarla: qué escribir, dónde ponerla y cómo hacerlo sin subir el documento.",
      fr: "Pourquoi et comment filigraner la copie de votre carte d'identité ou passeport avant de l'envoyer : quoi écrire, où le placer et comment le faire sans envoi.",
      de: "Warum und wie Sie eine Ausweis- oder Passkopie vor dem Versand mit Wasserzeichen versehen: was Sie schreiben, wo es hingehört und wie es ohne Upload geht.",
      pt: "Por que e como colocar marca d'água na cópia do RG ou passaporte antes de enviar: o que escrever, onde colocar e como fazer sem enviar o documento para lugar nenhum.",
    },
    seoKeyword: {
      it: "filigrana documento identità",
      en: "watermark id copy",
      es: "marca de agua dni",
      fr: "filigrane pièce d'identité",
      de: "ausweiskopie wasserzeichen",
      pt: "marca d'água documento identidade",
    },
    keyTakeaways: [
      {
        it: "Una copia del documento senza indicazioni può essere riutilizzata da chiunque la riceva o la intercetti.",
        en: "An unmarked ID copy can be reused by anyone who receives or intercepts it.",
        es: "Una copia del DNI sin indicaciones puede reutilizarla cualquiera que la reciba o la intercepte.",
        fr: "Une copie de pièce d'identité sans mention peut être réutilisée par quiconque la reçoit ou l'intercepte.",
        de: "Eine unmarkierte Ausweiskopie kann von jedem wiederverwendet werden, der sie erhält oder abfängt.",
        pt: "Uma cópia do documento sem marcação pode ser reutilizada por qualquer pessoa que a receba ou intercepte.",
      },
      {
        it: "La filigrana più efficace indica destinatario, scopo e data, ripetuta sopra il documento senza coprire i dati necessari.",
        en: "The most effective watermark names the recipient, purpose and date, repeated across the document without hiding the data they need.",
        es: "La marca de agua más eficaz indica destinatario, finalidad y fecha, repetida sobre el documento sin tapar los datos necesarios.",
        fr: "Le filigrane le plus efficace indique destinataire, motif et date, répété sur le document sans masquer les données nécessaires.",
        de: "Am wirksamsten ist ein Wasserzeichen mit Empfänger, Zweck und Datum, wiederholt über das Dokument, ohne nötige Daten zu verdecken.",
        pt: "A marca d'água mais eficaz indica destinatário, finalidade e data, repetida sobre o documento sem cobrir os dados necessários.",
      },
      {
        it: "Applicare la filigrana nel browser evita di caricare proprio il documento che si vuole proteggere su un sito sconosciuto.",
        en: "Adding the watermark in the browser avoids uploading the very document you want to protect to an unknown website.",
        es: "Añadir la marca de agua en el navegador evita subir justo el documento que quieres proteger a una web desconocida.",
        fr: "Ajouter le filigrane dans le navigateur évite d'envoyer sur un site inconnu le document même que vous voulez protéger.",
        de: "Das Wasserzeichen im Browser einzufügen verhindert, dass Sie genau das Dokument, das Sie schützen wollen, auf eine fremde Website laden.",
        pt: "Colocar a marca d'água no navegador evita enviar justamente o documento que você quer proteger para um site desconhecido.",
      },
    ],
    relatedToolIds: ["pdf-watermark", "image-watermark", "pdf-to-image", "pdf-flatten"],
    sections: [
      {
        heading: {
          it: "Perché una copia del documento è preziosa per un truffatore",
          en: "Why an ID copy is valuable to a fraudster",
          es: "Por qué una copia del DNI es valiosa para un estafador",
          fr: "Pourquoi une copie de pièce d'identité intéresse les fraudeurs",
          de: "Warum eine Ausweiskopie für Betrüger wertvoll ist",
          pt: "Por que uma cópia do documento vale ouro para um golpista",
        },
        content: {
          it: `Per affittare casa, prenotare un hotel, noleggiare un'auto, iniziare un lavoro o partecipare a una selezione ci viene chiesta, sempre più spesso, una **copia del documento d'identità** via email o tramite un portale.

Quella copia, una volta inviata, sfugge al nostro controllo: resta in caselle di posta, cartelle condivise e archivi che possono essere violati, oppure finisce nelle mani di qualcuno che si spaccia per un'agenzia. Con nome, data di nascita, numero del documento e foto, un truffatore può tentare di aprire conti online, chiedere piccoli finanziamenti, attivare SIM o abbonamenti a tuo nome.

Non si può sempre evitare di inviare il documento. Si può però renderne molto più difficile il riutilizzo.`,
          en: `To rent a flat, book a hotel, hire a car, start a job or apply for a position, we're increasingly asked for a **copy of our ID** by email or through a portal.

Once sent, that copy is out of our control: it sits in inboxes, shared folders and archives that can be breached, or ends up with someone posing as an agency. With your name, date of birth, document number and photo, a fraudster can try to open online accounts, apply for small loans, or activate SIM cards and subscriptions in your name.

You can't always avoid sending your ID. But you can make it much harder to reuse.`,
          es: `Para alquilar un piso, reservar un hotel, alquilar un coche, empezar un trabajo o presentarte a un proceso de selección, cada vez más a menudo nos piden una **copia del DNI** por correo o a través de un portal.

Una vez enviada, esa copia escapa a nuestro control: se queda en buzones de correo, carpetas compartidas y archivos que pueden ser vulnerados, o acaba en manos de alguien que se hace pasar por una agencia. Con nombre, fecha de nacimiento, número de documento y foto, un estafador puede intentar abrir cuentas online, pedir pequeños préstamos o dar de alta líneas móviles y suscripciones a tu nombre.

No siempre se puede evitar enviar el documento. Pero sí se puede dificultar mucho su reutilización.`,
          fr: `Pour louer un logement, réserver un hôtel, louer une voiture, commencer un emploi ou candidater, on nous demande de plus en plus souvent une **copie de notre pièce d'identité** par e-mail ou via un portail.

Une fois envoyée, cette copie nous échappe : elle reste dans des boîtes mail, des dossiers partagés et des archives qui peuvent être piratés, ou finit chez quelqu'un qui se fait passer pour une agence. Avec votre nom, votre date de naissance, le numéro du document et votre photo, un fraudeur peut tenter d'ouvrir des comptes en ligne, demander de petits crédits ou souscrire des abonnements téléphoniques à votre nom.

On ne peut pas toujours éviter d'envoyer sa pièce d'identité. On peut en revanche rendre sa réutilisation beaucoup plus difficile.`,
          de: `Für eine Wohnung, ein Hotel, einen Mietwagen, einen neuen Job oder eine Bewerbung wird immer häufiger eine **Kopie des Ausweises** per E-Mail oder über ein Portal verlangt.

Einmal verschickt, entzieht sich diese Kopie unserer Kontrolle: Sie liegt in Postfächern, geteilten Ordnern und Archiven, die gehackt werden können, oder landet bei jemandem, der sich als Agentur ausgibt. Mit Name, Geburtsdatum, Ausweisnummer und Foto kann ein Betrüger versuchen, Online-Konten zu eröffnen, kleine Kredite zu beantragen oder Mobilfunkverträge und Abos in Ihrem Namen abzuschließen.

Nicht immer lässt sich das Versenden vermeiden. Aber man kann die Wiederverwendung deutlich erschweren.`,
          pt: `Para alugar um imóvel, reservar um hotel, alugar um carro, começar um emprego ou participar de uma seleção, pedem cada vez mais uma **cópia do documento de identidade** por e-mail ou por um portal.

Depois de enviada, essa cópia sai do nosso controle: fica em caixas de e-mail, pastas compartilhadas e arquivos que podem ser invadidos, ou cai nas mãos de alguém que se passa por uma imobiliária. Com nome, data de nascimento, número do documento e foto, um golpista pode tentar abrir contas online, pedir pequenos empréstimos ou ativar chips e assinaturas no seu nome.

Nem sempre dá para evitar enviar o documento. Mas dá para dificultar muito o reaproveitamento.`,
        },
      },
      {
        heading: {
          it: "Cosa scrivere nella filigrana e dove metterla",
          en: "What to write in the watermark and where to put it",
          es: "Qué escribir en la marca de agua y dónde ponerla",
          fr: "Que mettre dans le filigrane et où le placer",
          de: "Was ins Wasserzeichen gehört und wo es hinkommt",
          pt: "O que escrever na marca d'água e onde colocar",
        },
        content: {
          it: `Una filigrana generica come "COPIA" è meglio di niente, ma la più efficace dice **a chi** è destinata la copia, **per cosa** e **quando**. Per esempio:

> COPIA - solo per contratto d'affitto con Agenzia Rossi - 08/11/2026

In questo modo, se la copia venisse usata altrove, chiunque la ricevesse vedrebbe subito che non è destinata a quello scopo. La stessa idea è alla base del servizio ufficiale **FiligraneFacile** che l'amministrazione pubblica francese mette a disposizione dei cittadini.

Alcuni accorgimenti pratici:
- **ripeti il testo su tutta la pagina**, in diagonale: una scritta singola al centro si può ritagliare via;
- usa una **trasparenza media** (20-35%): deve essere leggibile, ma non deve coprire numero e foto, che il destinatario deve poter controllare;
- scegli un **colore** che risalti sul documento, per esempio rosso o blu.`,
          en: `A generic watermark like "COPY" is better than nothing, but the most effective one says **who** the copy is for, **what for** and **when**. For example:

> COPY - only for the tenancy agreement with Smith Lettings - 08/11/2026

That way, if the copy were used elsewhere, anyone receiving it would immediately see it wasn't meant for that purpose. The same idea underpins **FiligraneFacile**, the official service the French public administration offers its citizens.

A few practical tips:
- **repeat the text across the whole page**, diagonally: a single line in the middle can be cropped out;
- use **medium opacity** (20-35%): it must be readable, but must not cover the number and photo the recipient needs to check;
- pick a **colour** that stands out on the document, such as red or blue.`,
          es: `Una marca de agua genérica como "COPIA" es mejor que nada, pero la más eficaz dice **para quién** es la copia, **para qué** y **cuándo**. Por ejemplo:

> COPIA - solo para contrato de alquiler con Inmobiliaria García - 08/11/2026

Así, si la copia se usara en otro sitio, quien la recibiera vería enseguida que no estaba destinada a eso. La misma idea es la base de **FiligraneFacile**, el servicio oficial que la administración pública francesa ofrece a sus ciudadanos.

Algunos consejos prácticos:
- **repite el texto por toda la página**, en diagonal: una sola frase en el centro se puede recortar;
- usa una **transparencia media** (20-35%): debe leerse, pero sin tapar el número y la foto que el destinatario tiene que comprobar;
- elige un **color** que destaque sobre el documento, como rojo o azul.`,
          fr: `Un filigrane générique comme « COPIE » vaut mieux que rien, mais le plus efficace indique **à qui** la copie est destinée, **pour quoi** et **quand**. Par exemple :

> COPIE - uniquement pour dossier de location Agence Martin - 08/11/2026

Ainsi, si la copie était utilisée ailleurs, son destinataire verrait tout de suite qu'elle n'était pas prévue pour cet usage. C'est le principe du service officiel **FiligraneFacile** proposé par l'administration française.

Quelques conseils pratiques :
- **répétez le texte sur toute la page**, en diagonale : une seule mention au centre peut être recadrée ;
- utilisez une **opacité moyenne** (20-35 %) : le texte doit être lisible sans masquer le numéro et la photo que le destinataire doit vérifier ;
- choisissez une **couleur** qui ressort sur le document, par exemple rouge ou bleu.`,
          de: `Ein allgemeines Wasserzeichen wie „KOPIE“ ist besser als nichts, am wirksamsten ist aber eines, das sagt, **für wen** die Kopie ist, **wofür** und **wann**. Zum Beispiel:

> KOPIE - nur für Mietvertrag mit Hausverwaltung Müller - 08.11.2026

Würde die Kopie anderswo verwendet, sähe jeder Empfänger sofort, dass sie nicht für diesen Zweck gedacht war. Dieselbe Idee steckt hinter **FiligraneFacile**, dem offiziellen Dienst der französischen Verwaltung für ihre Bürger.

Einige praktische Tipps:
- **den Text über die ganze Seite wiederholen**, diagonal: Ein einzelner Schriftzug in der Mitte lässt sich wegschneiden;
- eine **mittlere Deckkraft** (20-35 %) wählen: lesbar, aber ohne Nummer und Foto zu verdecken, die der Empfänger prüfen muss;
- eine **Farbe** nehmen, die sich vom Dokument abhebt, etwa Rot oder Blau.`,
          pt: `Uma marca d'água genérica como "CÓPIA" é melhor que nada, mas a mais eficaz diz **para quem** é a cópia, **para quê** e **quando**. Por exemplo:

> CÓPIA - somente para contrato de aluguel com Imobiliária Silva - 08/11/2026

Assim, se a cópia fosse usada em outro lugar, quem a recebesse veria na hora que ela não se destinava àquilo. A mesma ideia está por trás do **FiligraneFacile**, o serviço oficial que a administração pública francesa oferece aos cidadãos.

Algumas dicas práticas:
- **repita o texto em toda a página**, na diagonal: uma frase única no centro pode ser recortada;
- use uma **opacidade média** (20-35%): precisa ser legível, mas sem cobrir o número e a foto que o destinatário precisa conferir;
- escolha uma **cor** que se destaque no documento, como vermelho ou azul.`,
        },
      },
      {
        heading: {
          it: "Come farlo senza caricare il documento online",
          en: "How to do it without uploading the document",
          es: "Cómo hacerlo sin subir el documento",
          fr: "Comment le faire sans envoyer le document",
          de: "So geht es ohne Upload des Dokuments",
          pt: "Como fazer sem enviar o documento",
        },
        content: {
          it: `Sarebbe paradossale caricare il documento d'identità su un sito sconosciuto proprio per proteggerlo. Con FileOmniTool la filigrana viene applicata nel browser:

1. se la copia è un **PDF**, aprila con [Aggiungi filigrana al PDF](/tools/pdf-watermark); se è una **foto**, usa [Filigrana sulle foto](/tools/image-watermark);
2. scrivi destinatario, scopo e data, scegli la disposizione "ripetuta su tutta la pagina" e regola trasparenza e colore guardando l'anteprima;
3. scarica il file: il documento non è mai uscito dal tuo dispositivo.

Una filigrana in un PDF può comunque essere rimossa da qualcuno con le competenze e gli strumenti giusti. Per rendere la copia più resistente, dopo averla applicata trasforma il PDF in immagine con [PDF in JPG](/tools/pdf-to-image): a quel punto la scritta fa parte dei pixel e non è più un elemento separato.

Nessuna filigrana rende una copia impossibile da abusare, ma alza molto il livello di difficoltà: ed è spesso abbastanza per far passare un truffatore al bersaglio successivo.`,
          en: `It would be absurd to upload your ID to an unknown website in order to protect it. With FileOmniTool the watermark is applied in the browser:

1. if your copy is a **PDF**, open it in [Add Watermark to PDF](/tools/pdf-watermark); if it's a **photo**, use [Watermark Photos](/tools/image-watermark);
2. type the recipient, purpose and date, choose the "tiled across the page" layout and adjust opacity and colour while watching the preview;
3. download the file: the document never left your device.

A watermark in a PDF can still be removed by someone with the right skills and tools. To make the copy sturdier, once the watermark is applied, turn the PDF into an image with [PDF to JPG](/tools/pdf-to-image): the text then becomes part of the pixels instead of a separate element.

No watermark makes a copy impossible to misuse, but it raises the bar a lot, and that's often enough for a fraudster to move on to the next target.`,
          es: `Sería absurdo subir tu DNI a una web desconocida precisamente para protegerlo. Con FileOmniTool la marca de agua se aplica en el navegador:

1. si la copia es un **PDF**, ábrela con [Añadir marca de agua a PDF](/tools/pdf-watermark); si es una **foto**, usa [Marca de agua en fotos](/tools/image-watermark);
2. escribe destinatario, finalidad y fecha, elige la disposición "repetida en toda la página" y ajusta transparencia y color mirando la vista previa;
3. descarga el archivo: el documento no ha salido nunca de tu dispositivo.

Aun así, alguien con los conocimientos y herramientas adecuados podría quitar una marca de agua de un PDF. Para que la copia sea más resistente, después de aplicarla convierte el PDF en imagen con [PDF a JPG](/tools/pdf-to-image): así el texto pasa a formar parte de los píxeles y deja de ser un elemento separado.

Ninguna marca de agua hace imposible el abuso de una copia, pero sube mucho el listón, y a menudo eso basta para que un estafador pase al siguiente objetivo.`,
          fr: `Il serait absurde d'envoyer sa pièce d'identité sur un site inconnu justement pour la protéger. Avec FileOmniTool, le filigrane est appliqué dans le navigateur :

1. si votre copie est un **PDF**, ouvrez-la dans [Ajouter un filigrane à un PDF](/tools/pdf-watermark) ; si c'est une **photo**, utilisez [Filigrane sur les photos](/tools/image-watermark) ;
2. saisissez destinataire, motif et date, choisissez la disposition « répété sur toute la page » et réglez opacité et couleur en regardant l'aperçu ;
3. téléchargez le fichier : le document n'a jamais quitté votre appareil.

Un filigrane dans un PDF peut malgré tout être retiré par quelqu'un disposant des compétences et des outils adéquats. Pour rendre la copie plus robuste, une fois le filigrane appliqué, transformez le PDF en image avec [PDF en JPG](/tools/pdf-to-image) : le texte fait alors partie des pixels et n'est plus un élément séparé.

Aucun filigrane ne rend une copie impossible à détourner, mais il complique beaucoup la tâche, et c'est souvent suffisant pour qu'un fraudeur passe à une autre cible.`,
          de: `Es wäre widersinnig, den Ausweis ausgerechnet zum Schutz auf eine fremde Website hochzuladen. Mit FileOmniTool wird das Wasserzeichen im Browser eingefügt:

1. Ist Ihre Kopie ein **PDF**, öffnen Sie sie mit [Wasserzeichen zu PDF hinzufügen](/tools/pdf-watermark); ist es ein **Foto**, nutzen Sie [Wasserzeichen auf Fotos](/tools/image-watermark);
2. Empfänger, Zweck und Datum eingeben, die Anordnung „über die ganze Seite wiederholt“ wählen und Deckkraft und Farbe anhand der Vorschau einstellen;
3. die Datei herunterladen: Das Dokument hat Ihr Gerät nie verlassen.

Ein Wasserzeichen in einem PDF kann von jemandem mit dem nötigen Wissen und Werkzeug dennoch entfernt werden. Für eine robustere Kopie wandeln Sie das PDF danach mit [PDF in JPG](/tools/pdf-to-image) in ein Bild um: Der Schriftzug wird dann Teil der Pixel statt eines separaten Elements.

Kein Wasserzeichen macht Missbrauch unmöglich, aber es erhöht die Hürde deutlich, und das reicht oft, damit ein Betrüger zum nächsten Ziel weiterzieht.`,
          pt: `Seria absurdo enviar seu documento a um site desconhecido justamente para protegê-lo. Com o FileOmniTool a marca d'água é aplicada no navegador:

1. se a cópia for um **PDF**, abra no [Adicionar marca d'água ao PDF](/tools/pdf-watermark); se for uma **foto**, use o [Marca d'água em fotos](/tools/image-watermark);
2. escreva destinatário, finalidade e data, escolha a disposição "repetida em toda a página" e ajuste opacidade e cor olhando a prévia;
3. baixe o arquivo: o documento nunca saiu do seu dispositivo.

Mesmo assim, alguém com o conhecimento e as ferramentas certas poderia remover uma marca d'água de um PDF. Para deixar a cópia mais resistente, depois de aplicar a marca, transforme o PDF em imagem com o [PDF para JPG](/tools/pdf-to-image): o texto passa a fazer parte dos pixels e deixa de ser um elemento separado.

Nenhuma marca d'água torna uma cópia impossível de ser usada indevidamente, mas eleva muito a dificuldade, e muitas vezes isso basta para o golpista partir para o próximo alvo.`,
        },
      },
    ],
  },
];
