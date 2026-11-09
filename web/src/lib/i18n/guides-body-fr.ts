import type { GuideBodyTranslations } from "./guides-body-translations";

export const GUIDES_BODY_FR: GuideBodyTranslations = {
  "how-to-merge-pdf-without-uploading": {
    metaTitle: "Comment fusionner des PDF en ligne sans les téléverser | FileOmniTool",
    metaDescription: "Guide pas à pas pour fusionner plusieurs PDF sous Windows, Mac et mobile sans aucun envoi vers le cloud.",
    seoKeyword: "fusionner pdf sans téléverser gratuit",
    intro: "La plupart des convertisseurs PDF en ligne envoient vos documents sensibles (contrats, relevés bancaires, avis d'imposition) vers des serveurs distants. Vous vous exposez ainsi à des fuites de données et à des atteintes à votre vie privée. FileOmniTool règle le problème en fonctionnant entièrement dans votre navigateur grâce à WebAssembly.",
    deepDive: "Contrairement aux portails cloud qui stockent vos fichiers pendant des heures sur des disques distants, WebAssembly manipule les flux binaires du PDF directement dans la mémoire JavaScript. Sans téléversement ni téléchargement, un PDF de 100 Mo est assemblé en moins de deux secondes.",
    steps: [
      ["Sélectionnez vos PDF", "Glissez-déposez au moins deux fichiers PDF dans la zone prévue ou cliquez sur « Parcourir »."],
      ["Vérifiez l'ordre", "Contrôlez l'ordre des documents : ils seront assemblés les uns à la suite des autres."],
      ["Fusionnez en mémoire", "Cliquez sur « Fusionner les PDF ». Le moteur WebAssembly assemble les pages dans la mémoire vive de votre appareil."],
      ["Téléchargez immédiatement", "Enregistrez le PDF fusionné sur votre appareil. Aucune copie n'a jamais existé dans le cloud."],
    ],
    faq: [
      ["Y a-t-il une limite de documents ?", "Aucune limite arbitraire. Vous pouvez fusionner autant de pages que la mémoire de votre appareil peut en contenir."],
      ["Puis-je l'utiliser sur smartphone ?", "Oui, l'outil fonctionne avec Safari sur iOS et Chrome sur Android, sans installer d'application."],
    ],
  },
  "how-to-split-extract-pages-from-pdf": {
    metaTitle: "Comment diviser un PDF et extraire des pages gratuitement | FileOmniTool",
    metaDescription: "Apprenez à extraire des pages isolées ou des plages personnalisées d'un PDF sur ordinateur et smartphone, en toute confidentialité.",
    seoKeyword: "diviser pdf extraire pages en ligne gratuit",
    intro: "Souvent, vous n'avez besoin que de deux ou trois pages d'un manuel, d'un contrat ou d'un livre numérique de 100 pages. Plutôt que d'envoyer un fichier trop lourd par e-mail, extraire les pages utiles rend le partage simple et sûr.",
    deepDive: "FileOmniTool analyse l'index du document dans votre navigateur et copie uniquement les pages demandées dans un nouveau PDF. Le fichier est bien plus léger et la résolution d'origine est conservée.",
    steps: [
      ["Importez le PDF", "Glissez votre fichier PDF dans la zone de dépôt."],
      ["Indiquez les pages", "Saisissez des plages comme « 1-3, 5, 8-10 » pour n'extraire que les passages voulus."],
      ["Extrayez dans le navigateur", "Cliquez sur « Extraire les pages » pour créer le nouveau document en mémoire."],
      ["Téléchargez le PDF extrait", "Enregistrez le PDF allégé directement sur votre disque."],
    ],
    faq: [
      ["Puis-je saisir plusieurs pages non consécutives ?", "Oui, utilisez des virgules et des tirets : par exemple « 1, 4, 7-10 »."],
    ],
  },
  "how-to-rotate-pdf-pages-permanently": {
    metaTitle: "Comment faire pivoter des pages PDF définitivement | FileOmniTool",
    metaDescription: "Faites pivoter de 90 ou 180 degrés les pages PDF de travers ou à l'envers, définitivement et sans téléversement.",
    seoKeyword: "faire pivoter pdf définitivement gratuit",
    intro: "Quand on numérise des tickets ou des contrats de plusieurs pages avec un scanner ou l'appareil photo du téléphone, certaines pages se retrouvent souvent de côté ou à l'envers. Faire pivoter l'affichage dans une visionneuse n'enregistre rien : il faut un outil qui inscrit la rotation dans le PDF lui-même.",
    deepDive: "FileOmniTool met à jour la clé « /Rotate » de chaque page concernée. Une fois rouvert dans Adobe Reader, Chrome, Aperçu sur macOS ou une application mobile, le document s'affiche automatiquement à l'endroit.",
    steps: [
      ["Sélectionnez le PDF mal orienté", "Déposez votre fichier PDF dans la zone de rotation."],
      ["Choisissez l'angle", "Sélectionnez 90° dans le sens horaire, 180° (tête en bas) ou 270° dans le sens antihoraire."],
      ["Enregistrez définitivement", "Cliquez sur « Faire pivoter le PDF » pour inscrire la rotation dans le fichier."],
    ],
    faq: [
      ["L'orientation sera-t-elle corrigée sur tous les appareils ?", "Oui, la rotation est écrite de façon permanente dans la structure du fichier."],
    ],
  },
  "how-to-convert-images-jpg-png-to-pdf": {
    metaTitle: "Comment convertir des images en PDF gratuitement (JPG en PDF) | FileOmniTool",
    metaDescription: "Convertissez des images JPG, PNG et WebP en documents PDF paginés au format A4, directement dans votre navigateur. Rapide, gratuit et sûr.",
    seoKeyword: "convertir jpg png en pdf en ligne gratuit",
    intro: "Les téléprocédures de l'administration, les universités et les portails RH des entreprises refusent souvent les images brutes en JPG ou PNG et exigent un document au format PDF.",
    deepDive: "Les images sont intégrées directement dans des pages PDF, mises à l'échelle selon leurs proportions et sans perte de netteté, pour un document prêt à imprimer.",
    steps: [
      ["Sélectionnez vos photos", "Importez une ou plusieurs images (JPG, PNG, WebP)."],
      ["Réglez la mise en page", "Choisissez le format A4 ou « Ajuster à l'image » et définissez la marge."],
      ["Générez le PDF en mémoire", "Cliquez sur « Convertir en PDF » et téléchargez le document assemblé."],
    ],
    faq: [
      ["Puis-je regrouper plusieurs photos dans un seul PDF ?", "Oui, sélectionnez autant de photos que vous voulez : chacune devient une page distincte du PDF final."],
    ],
  },
  "how-to-add-page-numbers-to-pdf-free": {
    metaTitle: "Comment numéroter les pages d'un PDF gratuitement | FileOmniTool",
    metaDescription: "Guide pas à pas pour ajouter des numéros de page à un PDF dans votre navigateur. Choisissez la position, le format et la première page.",
    seoKeyword: "numéroter pages pdf gratuit en ligne",
    intro: "Pour un mémoire, une proposition commerciale ou un contrat officiel, une pagination cohérente est indispensable. Payer un abonnement mensuel à Adobe Acrobat uniquement pour numéroter des pages n'a aucun sens.",
    deepDive: "FileOmniTool intègre la police standard Helvetica directement dans le système de coordonnées du PDF, à des positions typographiques précises. La mise en forme d'origine reste intacte à 100 %.",
    steps: [
      ["Importez le PDF", "Déposez votre PDF dans l'outil."],
      ["Choisissez position et format", "Sélectionnez bas centré, bas à droite ou haut centré, puis le format « Page X sur Y »."],
      ["Définissez la première page", "Indiquez « Commencer à la page 2 » si la page de titre ne doit pas être numérotée."],
      ["Téléchargez le PDF numéroté", "Cliquez sur « Insérer les numéros de page » et téléchargez votre document."],
    ],
    faq: [
      ["Mon texte sera-t-il modifié ?", "Les numéros sont placés dans les marges standard (à 25 points du bord), là où le contenu n'arrive généralement pas."],
    ],
  },
  "how-to-extract-text-from-pdf-online": {
    metaTitle: "Comment extraire le texte d'un PDF en ligne gratuitement | FileOmniTool",
    metaDescription: "Extrayez le texte de vos PDF au format TXT directement dans le navigateur. Rapide, gratuit et sans stockage sur serveur.",
    seoKeyword: "extraire texte pdf en ligne gratuit",
    intro: "Copier du texte à la main depuis un lecteur PDF entraîne souvent des retours à la ligne parasites, des césures et une mise en forme cassée. Extraire directement le flux de texte vous donne un contenu propre et modifiable, prêt pour Word, un e-mail ou vos prompts d'IA.",
    deepDive: "FileOmniTool repère les blocs de texte dans les flux de contenu du PDF et nettoie les séquences d'échappement, pour vous livrer un texte UTF-8 prêt à l'emploi.",
    steps: [
      ["Importez le PDF", "Déposez votre PDF dans l'outil."],
      ["Analyse instantanée", "Le navigateur décode les flux de texte en mémoire en quelques millisecondes."],
      ["Copiez ou téléchargez", "Cliquez sur « Copier le texte » ou « Télécharger .TXT » pour récupérer le texte propre."],
    ],
    faq: [
      ["Puis-je l'utiliser pour des prompts d'IA ?", "Oui, le TXT brut est le format d'entrée le plus propre pour les modèles de langage et les traitements de texte."],
    ],
  },
  "how-to-convert-pdf-to-black-and-white-grayscale": {
    metaTitle: "Comment convertir un PDF en noir et blanc gratuitement | FileOmniTool",
    metaDescription: "Transformez vos PDF couleur en niveaux de gris dans votre navigateur et économisez toner et encre à l'impression.",
    seoKeyword: "convertir pdf noir et blanc niveaux de gris",
    intro: "Beaucoup d'imprimantes laser et jet d'encre consomment de l'encre cyan, magenta et jaune même pour des documents apparemment simples. Convertir le PDF en véritables niveaux de gris oblige l'imprimante à n'utiliser que le noir.",
    deepDive: "Le traitement dans le navigateur désature les couches de couleur de toutes les pages sans rien envoyer à un serveur, ce qui protège relevés financiers et rapports confidentiels.",
    steps: [
      ["Sélectionnez le PDF couleur", "Déposez votre document en couleur dans l'outil."],
      ["Choisissez le contraste", "Optez pour les niveaux de gris standard ou le contraste élevé pour une impression économique."],
      ["Téléchargez et imprimez", "Téléchargez votre PDF en niveaux de gris, prêt à imprimer en noir uniquement."],
    ],
    faq: [
      ["Le texte restera-t-il net ?", "Oui, le texte vectoriel reste parfaitement net."],
    ],
  },
  "how-to-edit-remove-pdf-metadata-properties": {
    metaTitle: "Comment modifier ou supprimer les métadonnées d'un PDF | FileOmniTool",
    metaDescription: "Apprenez à consulter, modifier et effacer les propriétés cachées d'un document PDF directement dans votre navigateur.",
    seoKeyword: "modifier supprimer métadonnées pdf en ligne",
    intro: "Chaque fois que vous exportez un document depuis Microsoft Word, Google Docs ou Pages, le logiciel ajoute discrètement au PDF votre nom, votre compte utilisateur et le logiciel de création. Avant de publier un document ou de répondre à un appel d'offres, il est essentiel de supprimer ces informations.",
    deepDive: "FileOmniTool modifie directement le catalogue de fin de fichier et le dictionnaire d'informations du PDF, afin que ni les moteurs de recherche ni une analyse forensique ne retrouvent de trace de votre identité.",
    steps: [
      ["Consultez les métadonnées", "Importez votre document pour voir l'auteur et le logiciel enregistrés."],
      ["Modifiez ou nettoyez", "Personnalisez les champs ou cliquez sur « Supprimer toutes les métadonnées »."],
      ["Enregistrez le PDF nettoyé", "Téléchargez un PDF sans aucune trace des données de votre ordinateur."],
    ],
    faq: [
      ["Le contenu du document est-il modifié ?", "Non, seules les propriétés de métadonnées de l'en-tête sont modifiées."],
    ],
  },
  "how-to-reorder-organize-delete-pdf-pages": {
    metaTitle: "Comment réorganiser et supprimer des pages PDF gratuitement | FileOmniTool",
    metaDescription: "Réordonnez visuellement les pages, supprimez les feuilles inutiles et dupliquez des pages PDF en mémoire, sans envoi vers le cloud.",
    seoKeyword: "réorganiser supprimer dupliquer pages pdf en ligne",
    intro: "La numérisation de documents papier produit souvent des pages dans le désordre ou des feuilles blanches en trop. Plutôt que de tout rescanner, réorganiser les pages visuellement ne prend que quelques secondes.",
    deepDive: "Le moteur crée un nouveau PDF en ne copiant que les pages choisies, dans l'ordre exact que vous avez défini, dans la mémoire vive de votre appareil.",
    steps: [
      ["Importez le PDF multipage", "Déposez votre PDF pour afficher chaque page sous forme de vignette."],
      ["Réorganisez et supprimez", "Utilisez les flèches pour déplacer les pages et la corbeille pour retirer les pages blanches."],
      ["Enregistrez le PDF final", "Cliquez sur « Enregistrer le nouveau PDF » pour télécharger le fichier réorganisé."],
    ],
    faq: [
      ["Puis-je dupliquer une page ?", "Oui, cliquez sur le bouton de duplication d'une vignette pour en créer une copie immédiate."],
    ],
  },
  "how-to-convert-images-webp-png-jpg": {
    metaTitle: "Comment convertir un WebP en JPG ou PNG gratuitement | FileOmniTool",
    metaDescription: "Tutoriel pas à pas pour convertir des images WebP en JPG et PNG dans votre navigateur. Rapide, privé et 100 % gratuit.",
    seoKeyword: "convertir webp en jpg png en ligne gratuit",
    intro: "Quand vous enregistrez des images depuis des sites récents, elles arrivent souvent au format WebP. Idéal pour la vitesse de chargement, mais beaucoup de visionneuses anciennes, de documents Word et d'éditeurs graphiques ne savent toujours pas l'ouvrir. Les convertir en JPG ou PNG règle immédiatement le problème.",
    deepDive: "Le navigateur décode le WebP avec Canvas 2D accéléré par le matériel, puis réencode les pixels en JPEG ou PNG sans aucun aller-retour vers un serveur.",
    steps: [
      ["Sélectionnez votre image WebP", "Déposez le fichier WebP ou parcourez votre ordinateur."],
      ["Choisissez le format de sortie", "Sélectionnez JPEG pour les photos ou PNG pour conserver la transparence."],
      ["Conversion instantanée", "Cliquez sur « Convertir l'image » et téléchargez votre image standard."],
    ],
    faq: [
      ["Le PNG conserve-t-il la transparence ?", "Oui, la conversion d'un WebP transparent en PNG conserve intégralement le canal alpha."],
    ],
  },
  "how-to-compress-images-without-losing-quality": {
    metaTitle: "Comment compresser des images en ligne gratuitement | FileOmniTool",
    metaDescription: "Réduisez le poids de vos images directement dans la mémoire du navigateur, sans perte de qualité. Idéal pour les e-mails et la vitesse des sites.",
    seoKeyword: "compresser images sans perte de qualité gratuit",
    intro: "Les smartphones actuels prennent des photos de 10 à 20 Mo chacune. Joindre plusieurs photos en pleine résolution à un e-mail dépasse vite la limite de 25 Mo de nombreuses messageries. Une compression intelligente réduit fortement le poids tout en gardant des pixels bien nets.",
    deepDive: "La compression intelligente supprime les informations de couleur à haute fréquence invisibles à l'œil et les en-têtes EXIF superflus, tout en préservant la netteté des contours et les couleurs.",
    steps: [
      ["Importez la photo lourde", "Glissez votre image haute résolution dans le compresseur."],
      ["Choisissez la qualité", "Sélectionnez 80 % (recommandé) pour un gain de poids optimal sans dégradation visible."],
      ["Téléchargez le fichier compressé", "Récupérez votre image compressée, jusqu'à 80 % plus légère."],
    ],
    faq: [
      ["Y a-t-il une limite de taille par photo ?", "Vous pouvez compresser des photos jusqu'à 50 Mo directement dans la mémoire de votre navigateur."],
    ],
  },
  "how-to-resize-image-dimensions-pixels": {
    metaTitle: "Comment redimensionner une image en ligne gratuitement | FileOmniTool",
    metaDescription: "Modifiez la largeur et la hauteur de vos photos en pixels ou en pourcentage dans le navigateur. Verrouillez les proportions pour éviter toute déformation.",
    seoKeyword: "redimensionner image pixels en ligne gratuit",
    intro: "Qu'il s'agisse d'une bannière YouTube (2560×1440), d'une couverture Facebook (820×312) ou d'une photo pour votre boutique en ligne, des dimensions exactes en pixels sont indispensables pour un rendu net.",
    deepDive: "L'interpolation bicubique du canvas lisse le rééchantillonnage des pixels et évite la pixellisation lors de la réduction.",
    steps: [
      ["Importez l'image", "Déposez votre image pour voir ses dimensions actuelles en pixels."],
      ["Indiquez la nouvelle largeur ou hauteur", "Saisissez la largeur voulue (par ex. 1920 ou 1200 px). Les proportions sont verrouillées automatiquement."],
      ["Téléchargez la photo redimensionnée", "Récupérez immédiatement l'image aux nouvelles dimensions."],
    ],
    faq: [
      ["La photo sera-t-elle étirée ?", "Non, le verrouillage des proportions garantit que l'image n'est jamais déformée."],
    ],
  },
  "how-to-add-watermark-to-photos-online": {
    metaTitle: "Comment ajouter un filigrane à vos photos gratuitement | FileOmniTool",
    metaDescription: "Apposez un filigrane texte ou logo sur vos images dans le navigateur. Réglez opacité, taille et position en toute confidentialité.",
    seoKeyword: "ajouter filigrane photo en ligne gratuit",
    intro: "Publier vos photos, illustrations ou annonces immobilières sans mention d'auteur les expose à une réutilisation non autorisée et au vol de droits d'auteur. Un filigrane discret et élégant affirme votre propriété intellectuelle.",
    deepDive: "Le filigrane est dessiné sur le canvas de l'image avant la rastérisation, ce qui le fusionne définitivement avec la photo.",
    steps: [
      ["Importez votre photo", "Sélectionnez l'image à signer et à protéger."],
      ["Personnalisez le filigrane", "Saisissez votre nom ou votre mention de copyright, puis réglez l'opacité et la position."],
      ["Téléchargez la photo protégée", "Récupérez votre image filigranée, prête à publier sur les réseaux sociaux."],
    ],
    faq: [
      ["Puis-je régler l'opacité pour ne pas gâcher la photo ?", "Oui, le curseur d'opacité va d'un filigrane discret (20 %) à une signature bien visible (100 %)."],
    ],
  },
  "how-to-convert-svg-to-png-high-resolution": {
    metaTitle: "Comment convertir un SVG en PNG en ligne gratuitement | FileOmniTool",
    metaDescription: "Convertissez des graphiques vectoriels SVG en images PNG transparentes en résolution 1x, 2x ou 4x dans votre navigateur.",
    seoKeyword: "convertir svg en png en ligne gratuit transparent",
    intro: "Le SVG (Scalable Vector Graphics) est la référence pour les icônes et logos web, mais des logiciels comme PowerPoint, d'anciens clients de messagerie et les réseaux sociaux ne savent souvent pas l'afficher. Le convertir en PNG garantit une compatibilité totale.",
    deepDive: "Le SVG étant vectoriel, il suffit d'augmenter l'échelle du canvas avant le rendu pour obtenir des images jusqu'en 4K parfaitement nettes, sans aucun flou.",
    steps: [
      ["Importez le fichier SVG", "Déposez votre icône ou logo SVG dans le convertisseur."],
      ["Choisissez le facteur d'échelle", "Prenez 1x pour une taille web standard ou 4x pour un export ultra-net (écrans Retina, impression)."],
      ["Téléchargez le PNG transparent", "Récupérez le PNG avec la transparence du fond préservée."],
    ],
    faq: [
      ["La transparence du fond est-elle conservée ?", "Oui, le PNG est exporté avec un canal alpha entièrement transparent."],
    ],
  },
  "how-to-remove-exif-metadata-and-gps-from-photos": {
    metaTitle: "Comment supprimer les données EXIF et GPS de vos photos | FileOmniTool",
    metaDescription: "Apprenez à effacer les métadonnées EXIF cachées et les coordonnées GPS de vos photos dans le navigateur pour protéger votre vie privée.",
    seoKeyword: "supprimer métadonnées exif localisation gps photos en ligne",
    intro: "Quand vous prenez une photo avec un iPhone ou un téléphone Android, l'appareil enregistre discrètement votre latitude et longitude GPS précises, la date et l'heure exactes, le modèle de l'appareil et son numéro de série. Toute personne qui télécharge la photo originale peut retrouver votre adresse.",
    deepDive: "FileOmniTool redessine l'image sur un canvas vierge et en extrait des données JPEG/PNG propres : aucun bloc de métadonnées ne survit.",
    steps: [
      ["Sélectionnez vos photos", "Déposez des photos prises au smartphone ou à l'appareil reflex."],
      ["Supprimez les métadonnées", "Le navigateur réencode uniquement les pixels et élimine tous les en-têtes EXIF."],
      ["Téléchargez l'image anonymisée", "Enregistrez la photo nettoyée, prête à être partagée sur les forums et réseaux sociaux."],
    ],
    faq: [
      ["L'apparence de ma photo va-t-elle changer ?", "Pas du tout : seules les métadonnées invisibles sont supprimées."],
    ],
  },
  "how-to-pick-colors-and-palette-from-images": {
    metaTitle: "Comment extraire couleurs et palette d'une image | FileOmniTool",
    metaDescription: "Extrayez la palette de couleurs dominantes et les codes HEX/RGB de n'importe quelle image dans votre navigateur. Rapide et privé pour les designers.",
    seoKeyword: "pipette couleur image extraire palette en ligne",
    intro: "Retrouver la couleur exacte du logo d'un client, d'une photo de paysage ou d'une capture d'écran est un défi courant pour les webdesigners et les artistes numériques.",
    deepDive: "Notre algorithme de regroupement quantifie les pixels de l'image dans la mémoire de votre appareil pour en extraire des couleurs principales harmonieuses et bien contrastées.",
    steps: [
      ["Importez l'image", "Déposez une photo, une illustration ou une capture d'écran."],
      ["Examinez la palette", "Consultez la palette dominante extraite automatiquement et la pipette avec loupe interactive."],
      ["Copiez les codes couleur", "Cliquez sur une pastille pour copier son code HEX ou RGB dans le presse-papiers."],
    ],
    faq: [
      ["Puis-je cliquer sur un seul pixel ?", "Oui, la pipette interactive du canvas permet d'inspecter n'importe quel pixel."],
    ],
  },
  "how-to-generate-favicon-package-for-website": {
    metaTitle: "Comment générer un pack de favicons pour votre site | FileOmniTool",
    metaDescription: "Créez un favicon.ico multirésolution, des icônes Apple Touch et des icônes de manifeste Android avec le code HTML prêt à l'emploi, dans votre navigateur.",
    seoKeyword: "générateur favicon ico multirésolution apple touch en ligne",
    intro: "Un site professionnel doit afficher correctement son icône partout : onglets, favoris, résultats Google, écran d'accueil iPhone et lanceurs PWA sous Android. Créer toutes ces tailles à la main prend des heures ; notre générateur le fait en deux secondes.",
    deepDive: "Le générateur crée un conteneur ICO multirésolution, les fichiers PNG et un extrait HTML optimisé avec les balises meta, le tout regroupé dans un seul ZIP grâce à JSZip.",
    steps: [
      ["Importez un logo carré", "Sélectionnez le logo de votre marque (PNG ou SVG d'au moins 512×512 recommandé)."],
      ["Prévisualisez les icônes", "Vérifiez le rendu dans les onglets, les résultats Google et l'écran d'accueil iOS."],
      ["Téléchargez le ZIP complet", "Récupérez le ZIP contenant favicon.ico, les tailles 16×16, 32×32, 180×180, 192×192 et 512×512 ainsi que le code HTML."],
    ],
    faq: [
      ["Pourquoi Google affiche-t-il une icône par défaut au lieu de la mienne ?", "Google met les favicons en cache jusqu'à 7 jours. Vérifiez que icon-48.png est bien déclaré et patientez jusqu'au rafraîchissement du cache."],
    ],
  },
  "how-to-crop-photos-aspect-ratio-online": {
    metaTitle: "Comment recadrer une photo selon un format gratuitement | FileOmniTool",
    metaDescription: "Recadrez vos images aux formats 1:1, 16:9, 9:16 ou sur mesure dans votre navigateur, sans aucun téléversement.",
    seoKeyword: "recadrer photo format 1:1 16:9 en ligne gratuit",
    intro: "Les réseaux sociaux imposent des formats stricts. Une photo non recadrée subit un recadrage automatique au centre qui coupe parfois des têtes ou du texte important. Recadrer vous-même garantit un sujet parfaitement cadré.",
    deepDive: "Le recadrage via canvas HTML5 extrait directement en mémoire la zone choisie de l'image et produit des fichiers JPEG, PNG ou WebP nets.",
    steps: [
      ["Importez la photo", "Sélectionnez votre fichier image."],
      ["Choisissez un format prédéfini", "Cliquez sur 1:1 (carré), 16:9 (paysage type YouTube) ou 9:16 (vertical pour les stories)."],
      ["Ajustez et recadrez", "Positionnez la zone de recadrage et cliquez sur « Recadrer et enregistrer »."],
    ],
    faq: [
      ["Quel format choisir ?", "JPEG pour les photos classiques, PNG pour les visuels avec du texte net ou de la transparence."],
    ],
  },
  "how-to-blur-photos-and-censor-faces-data": {
    metaTitle: "Comment flouter des photos et masquer des données privées | FileOmniTool",
    metaDescription: "Floutez une image entière ou masquez des zones sensibles (visages, plaques, documents) dans votre navigateur, en toute confidentialité.",
    seoKeyword: "flouter photo masquer visage plaque en ligne",
    intro: "Publier des photos montrant des numéros de carte bancaire, une adresse, une plaque d'immatriculation ou le visage d'enfants sans consentement peut entraîner usurpation d'identité et ennuis juridiques. Masquez ces zones en quelques secondes avant de publier.",
    deepDive: "Le flou par boîte du canvas applique un filtre de convolution directement aux pixels et brouille définitivement les informations confidentielles.",
    steps: [
      ["Importez l'image", "Déposez votre capture d'écran ou photo dans l'outil."],
      ["Choisissez le mode de masquage", "Sélectionnez « Masquage par zone » et placez le masque de flou sur les visages ou textes sensibles."],
      ["Téléchargez l'image floutée", "Enregistrez l'image floutée en toute sécurité."],
    ],
    faq: [
      ["Quelqu'un peut-il annuler le flou ?", "Non, les pixels d'origine de la zone floutée sont définitivement écrasés."],
    ],
  },
  "how-to-invert-colors-negative-photo-online": {
    metaTitle: "Comment inverser les couleurs d'une photo (négatif) | FileOmniTool",
    metaDescription: "Inversez les couleurs d'une image pour obtenir un effet négatif dans votre navigateur. Idéal pour les partitions en mode sombre et les retouches artistiques.",
    seoKeyword: "inverser couleurs photo effet négatif en ligne gratuit",
    intro: "L'inversion des couleurs transforme le blanc en noir et inversement, et remplace chaque teinte par sa complémentaire. Elle est particulièrement utile pour lire des partitions très blanches dans une salle de concert sombre sans se fatiguer les yeux.",
    deepDive: "Le navigateur parcourt chaque pixel et calcule `255 - R`, `255 - G` et `255 - B` en temps réel, sans toucher au canal alpha de transparence.",
    steps: [
      ["Importez l'image", "Déposez votre photo ou votre schéma dans l'outil."],
      ["Négatif instantané", "Le navigateur recalcule les canaux RVB (255 − valeur) immédiatement."],
      ["Téléchargez la photo inversée", "Cliquez sur « Télécharger l'image inversée » et enregistrez le fichier."],
    ],
    faq: [
      ["Est-ce que ça marche avec des schémas et dessins en noir et blanc ?", "Oui, vous obtenez instantanément un rendu net façon plan en mode sombre."],
    ],
  },
  "how-to-flip-mirror-photos-horizontally-vertically": {
    metaTitle: "Comment retourner une photo en miroir en ligne gratuitement | FileOmniTool",
    metaDescription: "Retournez vos images horizontalement en miroir ou verticalement dans le navigateur, sans téléversement. Rapide, gratuit et privé.",
    seoKeyword: "retourner photo miroir horizontal vertical en ligne gratuit",
    intro: "Beaucoup de caméras frontales inversent automatiquement les selfies : le texte d'un t-shirt ou un logo se lit alors à l'envers. Notre outil gratuit rétablit la vraie perspective en un clic.",
    deepDive: "La transformation de coordonnées du canvas `ctx.scale(-1, 1)` inverse la matrice de pixels sans compression ni rééchantillonnage.",
    steps: [
      ["Importez la photo", "Déposez votre selfie ou votre image dans l'outil."],
      ["Miroir ou retournement", "Activez le miroir horizontal ou le retournement vertical et visualisez le résultat en direct."],
      ["Téléchargez la photo retournée", "Cliquez sur « Enregistrer l'image retournée » pour la télécharger."],
    ],
    faq: [
      ["Puis-je retourner à la fois horizontalement et verticalement ?", "Oui, vous pouvez combiner les deux options."],
    ],
  },
  "how-to-convert-photos-to-black-and-white-online": {
    metaTitle: "Comment mettre une photo en noir et blanc gratuitement | FileOmniTool",
    metaDescription: "Transformez vos photos couleur en images noir et blanc bien contrastées directement dans le navigateur, sans téléversement.",
    seoKeyword: "mettre photo en noir et blanc en ligne gratuit",
    intro: "Le noir et blanc supprime la distraction des couleurs et met en valeur les textures, les expressions et les éclairages marqués. Pas besoin d'un abonnement Lightroom pour réussir un beau portrait monochrome.",
    deepDive: "Le moteur de désaturation calcule la luminance en pondérant chaque canal de couleur, pour donner de la profondeur aux ombres et de l'éclat aux tons chair.",
    steps: [
      ["Importez la photo couleur", "Sélectionnez un portrait, un paysage ou n'importe quel cliché."],
      ["Réglez contraste et luminosité", "Ajustez les curseurs pour faire ressortir les hautes lumières et les ombres."],
      ["Téléchargez la photo noir et blanc", "Récupérez votre image monochrome au rendu professionnel."],
    ],
    faq: [
      ["Puis-je doser l'intensité du noir et blanc ?", "Oui, le curseur de niveaux de gris va de 0 % (couleur complète) à 100 % (monochrome pur)."],
    ],
  },
  "how-to-convert-images-to-base64-data-uri": {
    metaTitle: "Comment convertir une image en Base64 en ligne gratuitement | FileOmniTool",
    metaDescription: "Convertissez des images PNG, JPG et SVG en chaînes Base64 Data URI, balises img HTML et extraits CSS directement dans votre navigateur.",
    seoKeyword: "convertir image en base64 data uri html en ligne gratuit",
    intro: "Intégrer des images en Data URI Base64 supprime des requêtes HTTP supplémentaires, accélère l'affichage des icônes essentielles et rend les newsletters HTML entièrement autonomes.",
    deepDive: "L'API FileReader du navigateur traite le fichier localement, sans transit réseau : vos ressources sensibles ne sont jamais exposées.",
    steps: [
      ["Importez l'image", "Déposez votre logo, icône ou photo."],
      ["Encodage instantané", "Le navigateur convertit les octets binaires en caractères ASCII Base64."],
      ["Copiez l'extrait", "Copiez le Data URI complet, la balise HTML <img> ou l'extrait CSS background-image."],
    ],
    faq: [
      ["Le Base64 augmente-t-il la taille du fichier ?", "Oui, l'encodage Base64 ajoute environ 33 % par rapport au binaire d'origine."],
    ],
  },
  "how-to-convert-audio-files-mp3-wav": {
    metaTitle: "Comment convertir un audio en MP3 en ligne gratuitement | FileOmniTool",
    metaDescription: "Guide pas à pas pour convertir des enregistrements audio en MP3 ou WAV dans votre navigateur grâce à la Web Audio API.",
    seoKeyword: "convertir audio en mp3 en ligne gratuit sans logiciel",
    intro: "Les mémos vocaux du smartphone sont souvent enregistrés en M4A ou AAC, que beaucoup d'autoradios, d'anciens lecteurs MP3 et de logiciels de montage refusent d'ouvrir. Les convertir dans le format universel MP3 garantit une lecture partout.",
    deepDive: "Le navigateur décode l'audio avec l'AudioContext natif et utilise l'encodeur LAME MP3 compilé en WebAssembly pour produire le fichier dans la mémoire de votre appareil.",
    steps: [
      ["Sélectionnez le fichier audio", "Déposez votre fichier (M4A, AAC, OGG, WAV, FLAC)."],
      ["Choisissez débit et format", "Sélectionnez MP3 (128, 192 ou 320 kbit/s) ou WAV sans perte."],
      ["Téléchargez la piste convertie", "Cliquez sur « Convertir l'audio » et récupérez votre fichier compatible."],
    ],
    faq: [
      ["192 kbit/s, est-ce de bonne qualité ?", "Oui, 192 kbit/s offre une qualité proche du CD pour la musique et les enregistrements vocaux."],
    ],
  },
  "how-to-trim-cut-audio-mp3-online": {
    metaTitle: "Comment couper un fichier audio MP3 en ligne gratuitement | FileOmniTool",
    metaDescription: "Coupez et raccourcissez vos chansons MP3 et mémos vocaux dans le navigateur avec une précision à la milliseconde. Gratuit et privé.",
    seoKeyword: "couper audio mp3 en ligne gratuit sonnerie",
    intro: "Que vous vouliez extraire un refrain accrocheur de 30 secondes pour votre sonnerie ou supprimer des silences gênants d'un podcast d'interview, couper un fichier audio en ligne prend moins d'une minute.",
    deepDive: "Les tampons audio sont découpés en mémoire à la milliseconde près puis encodés proprement, sans clic ni craquement aux extrémités.",
    steps: [
      ["Importez la piste audio", "Sélectionnez votre MP3 ou fichier audio pour afficher les commandes."],
      ["Fixez le début et la fin", "Saisissez les secondes ou minutes exactes de début et de fin du passage."],
      ["Exportez l'extrait", "Cliquez sur « Couper l'audio » et téléchargez votre sonnerie personnalisée."],
    ],
    faq: [
      ["Quelle durée pour une sonnerie de téléphone ?", "Entre 20 et 30 secondes environ, c'est la norme sur iPhone et Android."],
    ],
  },
  "how-to-extract-audio-from-video-mp4": {
    metaTitle: "Comment extraire l'audio d'une vidéo en ligne gratuitement | FileOmniTool",
    metaDescription: "Extrayez la bande son MP3 de vidéos MP4, MOV et WebM dans votre navigateur, sans téléverser d'énormes fichiers vidéo.",
    seoKeyword: "extraire audio vidéo mp4 en mp3 en ligne gratuit",
    intro: "Les fichiers vidéo sont énormes et pèsent souvent plusieurs gigaoctets. Envoyer une vidéo de 2 Go vers un convertisseur en ligne prend une éternité avec une connexion classique. Comme FileOmniTool fonctionne dans votre navigateur, il sépare l'audio en quelques secondes sans aucun envoi.",
    deepDive: "La chaîne de décodage vidéo HTML5 transmet les échantillons audio directement à des tampons Web Audio, sans décoder les images, et termine en quelques secondes.",
    steps: [
      ["Importez la vidéo", "Déposez votre fichier MP4, MOV, MKV ou WebM."],
      ["Extrayez dans le navigateur", "Le navigateur extrait la piste audio sans téléverser des gigaoctets de vidéo."],
      ["Téléchargez la bande son MP3", "Enregistrez la piste MP3 directement sur votre appareil."],
    ],
    faq: [
      ["Cela permet-il de télécharger des vidéos YouTube ?", "Non. FileOmniTool traite uniquement les vidéos locales qui vous appartiennent, dans le plein respect du droit d'auteur."],
    ],
  },
  "how-to-boost-audio-volume-louder": {
    metaTitle: "Comment augmenter le volume d'un audio en ligne gratuitement | FileOmniTool",
    metaDescription: "Rendez jusqu'à 3 fois plus fort un fichier audio trop faible, dans votre navigateur. Idéal pour les mémos vocaux étouffés.",
    seoKeyword: "augmenter volume audio en ligne gratuit",
    intro: "Quand le micro du téléphone est trop loin de la personne qui parle, l'enregistrement est étouffé et à peine audible, même volume au maximum. Augmenter le gain redonne toute sa clarté au son.",
    deepDive: "L'amplification numérique multiplie l'amplitude de l'audio en virgule flottante 32 bits, avec un limiteur de crêtes pour éviter l'écrêtage disgracieux.",
    steps: [
      ["Importez l'audio trop faible", "Sélectionnez le fichier dont le volume est trop bas."],
      ["Choisissez le gain", "Optez pour +3 dB, +6 dB (volume doublé) ou +10 dB."],
      ["Téléchargez la piste amplifiée", "Cliquez sur « Amplifier le volume » et récupérez un son fort et clair."],
    ],
    faq: [
      ["Le son sera-t-il distordu si j'amplifie trop ?", "Le limiteur évite l'écrêtage numérique brutal, mais +6 dB est recommandé pour la plupart des enregistrements de voix."],
    ],
  },
  "how-to-speed-up-slow-down-audio-online": {
    metaTitle: "Comment changer la vitesse d'un audio gratuitement (0,5x – 2x) | FileOmniTool",
    metaDescription: "Modifiez la vitesse de lecture de vos MP3 et pistes audio dans le navigateur. Accélérez un cours ou ralentissez une musique.",
    seoKeyword: "accélérer ralentir audio en ligne gratuit",
    intro: "Écouter à vitesse normale un cours magistral ou une présentation de deux heures prend un temps précieux. Accélérer l'enregistrement à 1,5x ou 1,75x permet d'assimiler l'information en deux fois moins de temps sans rien perdre en compréhension.",
    deepDive: "L'OfflineAudioContext natif génère des tampons rééchantillonnés à la nouvelle vitesse avant de les réencoder en MP3 dans la mémoire de votre appareil.",
    steps: [
      ["Importez l'audio", "Déposez votre enregistrement de cours ou votre podcast."],
      ["Choisissez la vitesse", "Sélectionnez 1,25x, 1,5x, 1,75x ou 2x, ou ralentissez à 0,75x."],
      ["Enregistrez le fichier", "Téléchargez le MP3 ou WAV réencodé au nouveau tempo."],
    ],
    faq: [
      ["Puis-je enregistrer le fichier accéléré sur mon téléphone ?", "Oui, téléchargez-le directement en MP3 pour l'écouter dans n'importe quelle appli de musique ou de podcasts."],
    ],
  },
  "how-to-reverse-audio-song-backwards": {
    metaTitle: "Comment inverser un audio en ligne gratuitement (lecture à l'envers) | FileOmniTool",
    metaDescription: "Lisez et exportez chansons et enregistrements vocaux à l'envers dans votre navigateur. Un outil de sound design rapide, gratuit et ludique.",
    seoKeyword: "inverser audio chanson à l'envers en ligne gratuit",
    intro: "Écouter un son à l'envers (backmasking) fascine les mélomanes et les ingénieurs du son depuis des décennies. Que vous cherchiez des messages cachés dans des morceaux rock ou que vous créiez des effets de transition psychédéliques pour vos montages, inverser un audio est un jeu d'enfant.",
    deepDive: "Le moteur inverse de bout en bout les tableaux Float32 de chaque canal, en préservant intégralement la profondeur de bits et le spectre de fréquences.",
    steps: [
      ["Importez la piste", "Déposez une chanson ou un enregistrement vocal."],
      ["Inversez en mémoire", "Cliquez sur « Inverser la piste » pour retourner les échantillons de chaque canal."],
      ["Écoutez et téléchargez", "Écoutez le résultat à l'envers et téléchargez votre MP3 inversé."],
    ],
    faq: [
      ["Est-ce que ça marche avec les messages vocaux WhatsApp ?", "Oui, enregistrez la note vocale dans vos fichiers puis importez-la directement."],
    ],
  },
  "how-to-convert-stereo-audio-to-mono": {
    metaTitle: "Comment convertir un audio stéréo en mono gratuitement | FileOmniTool",
    metaDescription: "Fusionnez les canaux stéréo en une seule piste mono équilibrée dans votre navigateur. Corrigez un son d'un seul côté et réduisez la taille du fichier.",
    seoKeyword: "convertir audio stéréo en mono en ligne gratuit",
    intro: "Quand on enregistre une interview avec un seul micro directionnel, le son se retrouve souvent entièrement dans l'oreille gauche ou droite, ce qui est très inconfortable au casque. Passer en mono centre parfaitement le son.",
    deepDive: "Supprimer le second canal redondant économise jusqu'à 50 % de débit et d'espace de stockage sans dégrader la fidélité de la voix.",
    steps: [
      ["Importez l'audio stéréo", "Sélectionnez votre fichier à deux canaux."],
      ["Fusionnez les canaux", "Le navigateur calcule `(Gauche + Droite) / 2` en un seul flux."],
      ["Téléchargez le MP3 mono", "Récupérez votre piste mono centrée, jusqu'à 50 % plus légère."],
    ],
    faq: [
      ["Les deux écouteurs entendront-ils le son de la même façon ?", "Oui, l'audio mono envoie exactement le même signal équilibré à gauche et à droite."],
    ],
  },
  "how-to-clean-phone-speakers-water-eject-tone": {
    metaTitle: "Comment éjecter l'eau du haut-parleur de votre téléphone (son 165 Hz) | FileOmniTool",
    metaDescription: "Réparez un haut-parleur de téléphone étouffé avec la tonalité d'éjection d'eau à 165 Hz. Sans riz ni réparateur.",
    seoKeyword: "nettoyer haut-parleur téléphone éjecter eau son 165hz gratuit",
    intro: "Quand un iPhone ou un Android tombe dans l'eau, même un modèle étanche, de petites gouttes restent souvent piégées dans la grille du haut-parleur. Le son devient lointain, grésillant et étouffé. L'Apple Watch utilise le son pour expulser l'eau : vous pouvez appliquer la même technique à n'importe quel smartphone.",
    deepDive: "Une onde sinusoïdale pure à 165 Hz entre en résonance avec la membrane des petits haut-parleurs de smartphone et déplace un maximum d'air pour chasser le liquide.",
    steps: [
      ["Positionnez le téléphone", "Montez le volume au maximum et orientez les haut-parleurs du bas vers le sol, au-dessus d'un chiffon."],
      ["Lancez la tonalité 165 Hz", "Cliquez sur le préréglage « Éjection d'eau 165 Hz » puis sur « Jouer la tonalité » pendant 30 à 60 secondes."],
      ["Vérifiez et testez", "Les vibrations chassent les gouttelettes hors de la grille. Essuyez avec le chiffon."],
    ],
    faq: [
      ["Le riz, ça marche vraiment ?", "Non. Apple déconseille officiellement le riz : la poussière d'amidon peut boucher les ports et ne retire pas les gouttes retenues par la tension superficielle dans le haut-parleur."],
      ["Cela peut-il abîmer le haut-parleur ?", "Non, 165 Hz se situe largement dans la plage de fonctionnement sûre des haut-parleurs de téléphone."],
    ],
  },
  "how-to-convert-excel-xls-xlsx-to-csv-json": {
    metaTitle: "Comment convertir Excel en CSV ou JSON en ligne gratuitement | FileOmniTool",
    metaDescription: "Convertissez vos classeurs XLSX et XLS en données CSV ou JSON dans votre navigateur. Rapide, gratuit et sans aucun envoi sur un serveur.",
    seoKeyword: "convertir excel xlsx en csv json en ligne gratuit",
    intro: "Les tableaux financiers et les fichiers clients contiennent souvent des données d'entreprise très sensibles. Envoyer des fichiers Excel à des convertisseurs en ligne tiers peut enfreindre le RGPD et les règles de conformité internes. FileOmniTool traite les classeurs directement dans la mémoire de votre navigateur.",
    deepDive: "Le moteur de tableur en WebAssembly décode la structure XML du classeur et les cellules dans votre navigateur, puis produit des CSV propres conformes à la RFC.",
    steps: [
      ["Importez le fichier Excel", "Déposez votre fichier .xlsx ou .xls dans le convertisseur."],
      ["Choisissez la feuille et le format", "Sélectionnez la feuille voulue, puis le format CSV ou JSON."],
      ["Téléchargez les données converties", "Cliquez sur « Convertir » et récupérez un fichier propre, prêt pour une base de données."],
    ],
    faq: [
      ["Les classeurs à plusieurs feuilles sont-ils pris en charge ?", "Oui, vous pouvez choisir n'importe quel onglet de votre classeur."],
    ],
  },
  "how-to-convert-word-docx-to-html-text": {
    metaTitle: "Comment convertir un DOCX en HTML ou texte gratuitement | FileOmniTool",
    metaDescription: "Convertissez vos documents Word DOCX en HTML propre ou en texte brut dans le navigateur, sans licence Microsoft Office.",
    seoKeyword: "convertir word docx en html texte en ligne gratuit",
    intro: "Les documents Microsoft Word contiennent souvent des balises de style XML propriétaires et désordonnées qui cassent la mise en page d'un site. Convertir directement le DOCX en HTML sémantique propre fait gagner des heures de mise en forme.",
    deepDive: "L'analyseur mammoth, exécuté dans votre navigateur, transforme les styles de titre Word en balises standard `<p>`, `<h1>`, `<h2>` et `<ul>`, sans CSS en ligne superflu.",
    steps: [
      ["Importez le document Word", "Sélectionnez votre fichier .docx Microsoft Word."],
      ["Choisissez HTML ou texte", "Optez pour le HTML afin de garder titres et listes, ou pour le texte brut."],
      ["Téléchargez le résultat", "Copiez le texte converti ou téléchargez le fichier HTML obtenu."],
    ],
    faq: [
      ["Faut-il avoir Microsoft Office installé ?", "Non, toute la conversion se fait dans votre navigateur, sans installer aucun logiciel."],
    ],
  },
  "how-to-preview-edit-markdown-online": {
    metaTitle: "Éditeur Markdown avec aperçu en direct gratuit | FileOmniTool",
    metaDescription: "Modifiez et prévisualisez du Markdown en temps réel en écran partagé. Exportez en HTML mis en forme ou téléchargez le fichier .md.",
    seoKeyword: "éditeur markdown aperçu en direct export html en ligne gratuit",
    intro: "Le Markdown est le format de référence pour la documentation technique, les README GitHub, les bases de connaissances Obsidian et les notes Notion. Un éditeur rapide, épuré et avec aperçu instantané est indispensable.",
    deepDive: "Le compilateur interprète le GitHub Flavored Markdown (GFM) — listes de tâches, tableaux, texte barré et blocs de code — dans la mémoire de votre appareil.",
    steps: [
      ["Saisissez ou collez du Markdown", "Écrivez votre syntaxe Markdown dans le volet de gauche."],
      ["Aperçu en écran partagé", "Voyez s'afficher en direct titres, tableaux, citations et blocs de code."],
      ["Exportez en HTML ou Markdown", "Copiez le HTML généré ou enregistrez votre fichier .md sur le disque."],
    ],
    faq: [
      ["Puis-je exporter en page HTML ?", "Oui, vous pouvez copier tout le code HTML en un seul clic."],
    ],
  },
  "how-to-convert-json-to-csv-bidirectional": {
    metaTitle: "Convertir JSON en CSV et CSV en JSON en ligne gratuitement | FileOmniTool",
    metaDescription: "Conversion dans les deux sens entre JSON et CSV dans votre navigateur. Rapide, privée et compatible avec les chaînes entre guillemets.",
    seoKeyword: "convertir json en csv csv en json en ligne gratuit",
    intro: "Les API REST et les sauvegardes de bases de données fournissent des données en JSON, alors que les analystes et managers ont besoin de fichiers CSV compatibles Excel. Passer de l'un à l'autre est une tâche quotidienne pour les profils techniques.",
    deepDive: "L'analyseur reprend les clés uniques des objets comme colonnes d'en-tête du CSV et échappe virgules et sauts de ligne internes selon la RFC 4180.",
    steps: [
      ["Collez les données ou importez un fichier", "Collez votre tableau JSON brut ou votre texte CSV."],
      ["Choisissez le sens", "Sélectionnez le mode JSON vers CSV ou CSV vers JSON."],
      ["Copiez ou téléchargez", "Copiez le texte converti ou téléchargez directement le fichier .csv ou .json."],
    ],
    faq: [
      ["Les objets JSON imbriqués sont-ils gérés ?", "Les propriétés imbriquées sont converties en texte de façon sûre dans leur cellule."],
    ],
  },
  "how-to-convert-csv-to-markdown-table": {
    metaTitle: "Convertir un CSV en tableau Markdown gratuitement | FileOmniTool",
    metaDescription: "Transformez des fichiers CSV et TSV en tableaux Markdown alignés dans votre navigateur, avec alignement du texte personnalisable.",
    seoKeyword: "convertir csv en tableau markdown en ligne gratuit",
    intro: "Écrire des tableaux Markdown à la main avec des barres verticales (|) et des tirets (-) est fastidieux et source de décalages. Convertir directement vos données de tableur produit des tableaux soignés en quelques secondes.",
    deepDive: "Notre algorithme calcule la largeur maximale de chaque colonne et complète les cellules avec des espaces, pour que le texte source reste lisible même dans un éditeur de texte brut.",
    steps: [
      ["Collez les données CSV", "Collez les lignes de votre tableur ou importez un fichier .csv."],
      ["Réglez l'alignement", "Choisissez un alignement à gauche (:---), centré (:---:) ou à droite (---:)."],
      ["Copiez le tableau Markdown", "Copiez le tableau parfaitement espacé, prêt à coller."],
    ],
    faq: [
      ["Puis-je l'utiliser pour des README GitHub ?", "Oui, c'est entièrement compatible avec le GitHub Flavored Markdown (GFM)."],
    ],
  },
  "how-to-convert-text-to-pdf-online": {
    metaTitle: "Convertir un texte TXT en PDF gratuitement (A4 paginé) | FileOmniTool",
    metaDescription: "Transformez vos notes en texte brut en documents PDF A4 propres et paginés dans votre navigateur. Choisissez la taille de police et le titre.",
    seoKeyword: "convertir texte txt en pdf en ligne gratuit",
    intro: "Envoyer de simples fichiers .txt à un client ou à un enseignant fait peu professionnel. Convertir votre texte en PDF A4 paginé, avec de vraies marges typographiques, lui donne immédiatement une présentation soignée.",
    deepDive: "Le moteur vectoriel pdf-lib calcule dynamiquement les retours à la ligne et les sauts de page, et répartit harmonieusement les paragraphes sur les pages.",
    steps: [
      ["Saisissez ou collez le texte", "Collez vos notes ou votre document dans l'éditeur."],
      ["Personnalisez titre et police", "Ajoutez si besoin un titre en gras et choisissez la taille de police."],
      ["Téléchargez le PDF paginé", "Cliquez sur « Générer le document PDF » et téléchargez votre fichier A4."],
    ],
    faq: [
      ["Mes notes sont-elles envoyées sur un serveur ?", "Non, le PDF est généré à 100 % dans la mémoire de votre navigateur."],
    ],
  },
  "how-to-count-words-characters-reading-time": {
    metaTitle: "Compteur de mots et de caractères en ligne gratuit | FileOmniTool",
    metaDescription: "Comptez mots, caractères avec et sans espaces, phrases, paragraphes et temps de lecture en temps réel.",
    seoKeyword: "compteur de mots caractères temps de lecture en ligne gratuit",
    intro: "Du mémoire universitaire limité à 3 000 mots au post sur X (280 caractères) en passant par l'article de blog optimisé SEO (plus de 1 500 mots), connaître en temps réel les chiffres exacts de votre texte est essentiel pour les rédacteurs et les marketeurs.",
    deepDive: "Notre tokeniseur filtre correctement les espaces et la ponctuation Unicode dans toutes les langues et fournit des statistiques exactes de caractères et de syllabes.",
    steps: [
      ["Collez votre texte", "Collez ou tapez directement dans l'éditeur du compteur."],
      ["Consultez les chiffres en direct", "Voyez le nombre de mots, de caractères (avec et sans espaces), de phrases et la durée de lecture."],
      ["Ajustez ou copiez", "Peaufinez votre texte pour respecter les limites universitaires ou des réseaux sociaux."],
    ],
    faq: [
      ["Quelle différence entre caractères avec et sans espaces ?", "Les caractères avec espaces incluent les espaces ; dans l'édition et la presse, on compte souvent en « signes espaces compris »."],
    ],
  },
  "how-to-compare-text-find-differences-diff": {
    metaTitle: "Comparateur de textes : trouver les différences gratuitement | FileOmniTool",
    metaDescription: "Mettez en évidence ajouts, suppressions et modifications entre deux textes dans votre navigateur. Rapide, gratuit et privé.",
    seoKeyword: "comparer deux textes surligner différences diff en ligne gratuit",
    intro: "Quand on relit des versions de contrats, de conditions juridiques ou de code, repérer à l'œil nu la modification d'un seul mot est presque impossible. Un outil de comparaison automatique trouve chaque changement en quelques millisecondes.",
    deepDive: "L'algorithme de diff de Myers calcule la plus courte suite de modifications entre les deux textes dans la mémoire JavaScript de votre appareil.",
    steps: [
      ["Collez le texte original", "Collez la première version à gauche."],
      ["Collez le texte modifié", "Collez la version mise à jour à droite."],
      ["Examinez les différences", "Le vert signale le texte ajouté, le rouge les passages supprimés ou modifiés."],
    ],
    faq: [
      ["Puis-je comparer des fichiers de code ?", "Oui, cela fonctionne parfaitement avec JavaScript, Python, HTML, CSS et les fichiers de configuration."],
    ],
  },
  "how-to-generate-strong-secure-passwords": {
    metaTitle: "Générateur de mots de passe sécurisés gratuit | FileOmniTool",
    metaDescription: "Générez des mots de passe cryptographiques incassables dans votre navigateur grâce à la Web Crypto API. 100 % privé, jamais transmis.",
    seoKeyword: "générateur mot de passe sécurisé en ligne gratuit cryptographique",
    intro: "Utiliser des mots de passe simples comme « Password123 » ou réutiliser le même sur plusieurs sites est la première cause de piratage de comptes en ligne. Un mot de passe robuste de 16 caractères variés demanderait des millions d'années pour être cassé par force brute.",
    deepDive: "Au lieu du pseudo-aléatoire `Math.random()`, FileOmniTool utilise `window.crypto.getRandomValues()`, qui puise une entropie non déterministe dans le matériel de votre appareil.",
    steps: [
      ["Choisissez longueur et caractères", "Sélectionnez 16 ou 24 caractères et activez majuscules, chiffres et symboles."],
      ["Générez avec une entropie cryptographique", "Cliquez sur « Générer un mot de passe » pour puiser dans l'entropie matérielle."],
      ["Copiez dans le presse-papiers", "Copiez votre nouveau mot de passe directement dans votre gestionnaire de mots de passe."],
    ],
    faq: [
      ["Les mots de passe générés sont-ils enregistrés sur votre serveur ?", "Jamais. Le mot de passe n'existe que dans la mémoire de votre navigateur jusqu'à ce que vous rechargiez l'onglet."],
    ],
  },
  "how-to-generate-bulk-uuid-v4-online": {
    metaTitle: "Générateur d'UUID v4 en masse gratuit (RFC 4122) | FileOmniTool",
    metaDescription: "Générez jusqu'à 100 identifiants UUID v4 conformes à la RFC 4122 dans votre navigateur, avec un aléa cryptographique.",
    seoKeyword: "générateur uuid v4 en masse en ligne gratuit rfc 4122",
    intro: "Les identifiants uniques universels (UUID v4) offrent une probabilité de collision quasi nulle dans les bases de données distribuées, les microservices et l'analytique d'applications. Un générateur par lots rapide dans le navigateur simplifie les tests.",
    deepDive: "Un UUID v4 contient 122 bits aléatoires générés par `crypto.randomUUID()`, avec les bits de version et de variante exacts.",
    steps: [
      ["Choisissez la quantité", "Indiquez combien d'UUID il vous faut (de 1 à 50)."],
      ["Générez les identifiants", "Cliquez sur « Générer des UUID » pour obtenir des chaînes conformes à la RFC 4122."],
      ["Copiez dans le presse-papiers", "Copiez un UUID ou tout le lot en un clic."],
    ],
    faq: [
      ["Deux UUID générés peuvent-ils être identiques ?", "La probabilité est pratiquement nulle (moins d'une sur un milliard de milliards)."],
    ],
  },
  "how-to-calculate-cryptographic-hash-sha256": {
    metaTitle: "Générateur de hash cryptographique (SHA-256, SHA-512, MD5) | FileOmniTool",
    metaDescription: "Calculez des empreintes SHA-256, SHA-512, SHA-1 et MD5 dans votre navigateur avec la Web Crypto API. Rapide, gratuit et privé.",
    seoKeyword: "calculer hash sha256 sha512 md5 en ligne gratuit",
    intro: "Une fonction de hachage cryptographique produit une empreinte numérique déterministe, de longueur fixe, à partir de n'importe quel texte. Elle est à la base du stockage des mots de passe, des signatures numériques et des contrôles d'intégrité.",
    deepDive: "Le SHA-256 est calculé nativement via `crypto.subtle.digest()`, pour une vitesse maximale et sans aucune exposition des données dans le cloud.",
    steps: [
      ["Saisissez le texte", "Tapez ou collez le texte ou le jeton à hacher."],
      ["Calcul en temps réel", "Le navigateur calcule SHA-256, SHA-512, SHA-1 et MD5 instantanément."],
      ["Copiez l'empreinte", "Cliquez sur le bouton de copie du format voulu."],
    ],
    faq: [
      ["Peut-on inverser un hash SHA-256 ?", "Non, les fonctions de hachage cryptographiques sont strictement à sens unique."],
    ],
  },
  "how-to-create-permanent-free-qr-codes": {
    metaTitle: "Générateur de QR code gratuit et sans expiration | FileOmniTool",
    metaDescription: "Créez des QR codes statiques pour liens web, connexion Wi-Fi automatique et texte dans votre navigateur. 100 % gratuits, sans date d'expiration.",
    seoKeyword: "générateur qr code gratuit permanent sans expiration",
    intro: "Beaucoup de générateurs de QR codes commerciaux vous laissent créer un code puis le désactivent deux semaines plus tard pour vous imposer un abonnement mensuel. FileOmniTool génère de vrais QR codes statiques, qui contiennent vos données directement dans les pixels : ils fonctionnent pour toujours, sans frais.",
    deepDive: "Les QR codes statiques encodent les octets UTF-8 directement dans la matrice standard avec correction d'erreurs Reed-Solomon. Aucun serveur de redirection intermédiaire n'intervient.",
    steps: [
      ["Choisissez le type de QR code", "Sélectionnez URL de site, connexion Wi-Fi automatique ou texte."],
      ["Saisissez les informations", "Collez votre lien ou indiquez le nom et le mot de passe du réseau Wi-Fi."],
      ["Téléchargez le PNG permanent", "Récupérez votre QR code, prêt à imprimer sur menus, cartes et flyers."],
    ],
    faq: [
      ["Ce QR code va-t-il expirer ?", "Jamais. Tant que le support imprimé existe, n'importe quel smartphone pourra le scanner."],
    ],
  },
  "how-to-encode-decode-base64-text": {
    metaTitle: "Encodeur et décodeur Base64 en ligne gratuit (UTF-8) | FileOmniTool",
    metaDescription: "Encodez et décodez du texte en Base64 dans votre navigateur, avec prise en charge UTF-8 des accents. Rapide, gratuit et privé.",
    seoKeyword: "encoder décoder base64 en ligne utf8 gratuit",
    intro: "Le Base64 représente des données binaires avec 64 caractères ASCII imprimables, pour qu'elles traversent intactes les anciennes passerelles de messagerie et les paramètres d'URL sans corruption d'octets.",
    deepDive: "La fonction standard `btoa()` plante sur les caractères accentués comme é ou ç. FileOmniTool utilise les tampons modernes TextEncoder/TextDecoder pour une conversion UTF-8 sans faille.",
    steps: [
      ["Collez le texte ou le Base64", "Saisissez le texte dans la zone de saisie."],
      ["Choisissez encoder ou décoder", "Basculez entre l'encodage en Base64 et le décodage en texte lisible."],
      ["Copiez le résultat", "Copiez la chaîne convertie en un clic."],
    ],
    faq: [
      ["Le Base64 est-il une méthode de chiffrement ?", "Non, le Base64 est un format d'encodage pour le transport des données, pas un chiffrement sécurisé."],
    ],
  },
  "how-to-convert-text-case-uppercase-lowercase-camelcase": {
    metaTitle: "Convertisseur de casse : MAJUSCULES, minuscules, Titre | FileOmniTool",
    metaDescription: "Passez un texte en MAJUSCULES, minuscules, Casse De Titre, camelCase ou snake_case dans votre navigateur, gratuitement.",
    seoKeyword: "convertir majuscules minuscules casse titre en ligne gratuit",
    intro: "Taper tout un paragraphe avec la touche Verr. Maj activée par erreur est exaspérant. Plutôt que de tout effacer et de tout retaper, un clic suffit pour changer la casse.",
    deepDive: "Notre algorithme gère la conversion de casse Unicode complète et met correctement en majuscule les caractères accentués (é → É, ç → Ç).",
    steps: [
      ["Collez votre texte", "Collez les mots ou paragraphes à transformer."],
      ["Choisissez la transformation", "Cliquez sur « TOUT EN MAJUSCULES », « tout en minuscules », « Majuscule À Chaque Mot » ou « camelCase »."],
      ["Copiez le texte converti", "Copiez le texte modifié directement dans le presse-papiers."],
    ],
    faq: [
      ["Les développeurs peuvent-ils l'utiliser pour les noms de variables ?", "Oui, les préréglages camelCase, snake_case et kebab-case permettent de refactoriser du code instantanément."],
    ],
  },
  "how-to-sort-deduplicate-lists-online": {
    metaTitle: "Nettoyeur de listes : trier et supprimer les doublons | FileOmniTool",
    metaDescription: "Supprimez les lignes en double, triez par ordre alphabétique (A-Z / Z-A) et retirez les espaces superflus de vos listes dans le navigateur.",
    seoKeyword: "trier supprimer lignes en double nettoyer liste en ligne gratuit",
    intro: "Nettoyer à la main, ligne par ligne, des listes de diffusion ou des exports de base de données est épuisant et source d'erreurs. Une seule adresse e-mail en double peut provoquer des signalements pour spam. La déduplication automatique nettoie des milliers de lignes en quelques millisecondes.",
    deepDive: "L'algorithme de déduplication basé sur Set normalise la casse et les espaces avant de filtrer les éléments uniques, puis indique le nombre exact de doublons supprimés.",
    steps: [
      ["Collez votre liste", "Collez dans l'éditeur des lignes d'e-mails, de noms ou de valeurs."],
      ["Choisissez les actions de nettoyage", "Cliquez sur « Supprimer les doublons » et « Trier A-Z »."],
      ["Copiez la liste propre", "Copiez la liste triée et sans doublons dans le presse-papiers."],
    ],
    faq: [
      ["Les lignes vides sont-elles supprimées ?", "Oui, les lignes vides et les espaces en fin de ligne sont supprimés automatiquement."],
    ],
  },
  "how-to-generate-lorem-ipsum-placeholder-text": {
    metaTitle: "Générateur de faux texte Lorem Ipsum gratuit | FileOmniTool",
    metaDescription: "Générez des paragraphes, phrases et mots de Lorem Ipsum en latin classique dans votre navigateur, gratuitement.",
    seoKeyword: "générateur lorem ipsum faux texte en ligne gratuit",
    intro: "Depuis le XVIe siècle, imprimeurs et graphistes utilisent le pseudo-latin Lorem Ipsum pour que l'on regarde la mise en page, les polices et la hiérarchie visuelle sans être distrait par un contenu lisible.",
    deepDive: "Tiré du traité philosophique de Cicéron « De finibus bonorum et malorum » (45 av. J.-C.), le Lorem Ipsum moderne imite la répartition naturelle des lettres d'un vrai texte.",
    steps: [
      ["Choisissez la longueur et l'unité", "Sélectionnez le nombre de paragraphes, de phrases ou de mots."],
      ["Activez les balises HTML", "Pour les développeurs, entourez le texte de balises `<p>` si besoin."],
      ["Copiez dans le presse-papiers", "Copiez le texte latin directement dans Figma, InDesign ou votre code."],
    ],
    faq: [
      ["Le texte commence-t-il toujours par « Lorem ipsum dolor sit amet » ?", "Vous pouvez choisir d'inclure ou non la célèbre phrase d'ouverture."],
    ],
  },
  "how-to-format-validate-beautify-json-online": {
    metaTitle: "Formateur et validateur JSON en ligne gratuit | FileOmniTool",
    metaDescription: "Embellissez, indentez, minifiez et validez du JSON dans votre navigateur, avec mise en évidence instantanée des erreurs de syntaxe.",
    seoKeyword: "formater valider minifier json en ligne gratuit",
    intro: "Les applications web échangent des données JSON compressées sur une seule ligne. Lire ou déboguer ces chaînes sans retours à la ligne est une corvée impossible. Notre outil met en forme le code et repère immédiatement les virgules ou accolades manquantes.",
    deepDive: "Les fonctions natives JSON.parse() et JSON.stringify() s'exécutent dans le moteur JavaScript de votre navigateur : vos jetons d'API privés ne sont jamais exposés.",
    steps: [
      ["Collez le JSON brut", "Collez votre réponse d'API ou votre texte JSON non formaté."],
      ["Choisissez l'indentation", "Cliquez sur 2 espaces, 4 espaces ou Minifier pour tout compacter sur une ligne."],
      ["Copiez ou téléchargez", "Copiez le JSON formaté ou téléchargez un fichier .json propre."],
    ],
    faq: [
      ["L'outil indique-t-il où se trouve l'erreur de syntaxe ?", "Oui, les erreurs de syntaxe s'affichent immédiatement avec un message précis."],
    ],
  },
  "how-to-convert-xml-to-json-online": {
    metaTitle: "Convertir XML en JSON et JSON en XML gratuitement | FileOmniTool",
    metaDescription: "Convertissez des documents XML en objets JSON et inversement dans votre navigateur avec DOMParser. Rapide, gratuit et privé.",
    seoKeyword: "convertir xml en json json en xml en ligne gratuit",
    intro: "Les anciens systèmes d'entreprise et la facture électronique (Factur-X, UBL) reposent sur le XML, alors que les applications web et mobiles modernes fonctionnent en JSON. Convertir des structures XML en JSON permet d'intégrer des systèmes historiques en quelques minutes.",
    deepDive: "Le DOMParser natif du navigateur parcourt les éléments enfants et les attributs, puis construit des clés JSON propres en conservant la profondeur d'imbrication.",
    steps: [
      ["Collez le XML ou le JSON", "Collez votre document XML dans le champ de saisie."],
      ["Analyse automatique", "Le DOMParser du navigateur construit l'arborescence d'objets équivalente."],
      ["Copiez ou téléchargez le résultat", "Copiez le code converti ou téléchargez le fichier .json ou .xml."],
    ],
    faq: [
      ["Peut-on reconvertir du JSON en XML ?", "Oui, activez « Inverser le sens » pour transformer n'importe quel objet JSON en XML standard."],
    ],
  },
  "how-to-convert-yaml-to-json-online": {
    metaTitle: "Convertisseur YAML vers JSON et JSON vers YAML gratuit | FileOmniTool",
    metaDescription: "Convertissez vos fichiers de configuration DevOps entre YAML et JSON dans votre navigateur. Rapide, gratuit et privé pour les développeurs.",
    seoKeyword: "convertir yaml en json json en yaml en ligne gratuit",
    intro: "Le YAML est le format lisible préféré pour Docker Compose et les déploiements Kubernetes, mais de nombreux outils de déploiement et passerelles d'API exigent du JSON strict. Convertir dans les deux sens sans erreur d'indentation est essentiel.",
    deepDive: "L'analyse, qui tient compte de l'indentation, transforme les listes à tirets et les blocs clé-valeur du YAML en objets JavaScript standard dans la mémoire de votre appareil.",
    steps: [
      ["Collez la configuration", "Collez votre manifeste YAML ou votre configuration JSON."],
      ["Conversion instantanée", "L'analyseur dans le navigateur reconstruit clés, listes et objets imbriqués."],
      ["Copiez ou téléchargez le fichier", "Copiez le résultat ou téléchargez-le en .json ou .yaml."],
    ],
    faq: [
      ["Mes variables d'environnement secrètes sont-elles en sécurité ?", "Totalement. La conversion s'effectue entièrement sur votre machine, sans aucune requête vers un serveur."],
    ],
  },
  "how-to-analyze-seo-keyword-density-text": {
    metaTitle: "Analyseur de densité de mots-clés SEO gratuit | FileOmniTool",
    metaDescription: "Analysez la densité des mots-clés de vos textes, filtrez les mots vides et vérifiez la fréquence SEO idéale de 1 à 3 % dans votre navigateur.",
    seoKeyword: "analyser densité mots-clés seo outil gratuit google",
    intro: "Les algorithmes des moteurs de recherche pénalisent les pages qui répètent artificiellement la requête visée (bourrage de mots-clés). À l'inverse, un article qui omet totalement l'expression principale empêche Google de comprendre son sujet. Mesurer la densité de mots-clés vous donne le bon dosage.",
    deepDive: "Le tokeniseur de n-grammes découpe le texte en unigrammes, bigrammes et trigrammes et calcule le pourcentage exact de densité par rapport au nombre total de mots.",
    steps: [
      ["Collez le texte de votre article", "Collez votre article de blog ou votre texte web dans l'analyseur."],
      ["Filtrez les mots vides", "Laissez le filtre des mots vides activé pour vous concentrer sur les mots-clés porteurs de sens."],
      ["Consultez le tableau de densité SEO", "Vérifiez les tableaux à 1, 2 et 3 mots : visez une densité optimale de 1 % à 3 %."],
    ],
    faq: [
      ["Que faire si la densité dépasse 3,5 % ?", "Remplacez certaines occurrences par des synonymes naturels pour éviter la suroptimisation."],
    ],
  },
  "how-to-convert-hex-rgb-cmyk-color-codes": {
    metaTitle: "Convertisseur de couleurs : HEX, RVB, HSL, CMJN gratuit | FileOmniTool",
    metaDescription: "Convertissez vos codes couleur entre HEX, RVB, HSL et CMJN pour l'impression. Sélecteur interactif et génération de variables CSS.",
    seoKeyword: "convertir code couleur hex rgb hsl cmjn en ligne gratuit",
    intro: "Les webdesigners travaillent en HEX et RVB, tandis que les imprimeurs exigent des pourcentages en quadrichromie CMJN. Convertir les couleurs avec précision évite les mauvaises surprises, comme des cartes de visite imprimées ternes ou boueuses par rapport à l'écran.",
    deepDive: "Les formules de conversion calculent les primaires soustractives normalisées en optimisant l'encre noire (K), le tout dans la mémoire de votre appareil.",
    steps: [
      ["Choisissez ou saisissez une couleur", "Utilisez le sélecteur visuel ou collez votre code HEX (par ex. #10B981)."],
      ["Affinez avec les curseurs", "Réglez les curseurs rouge, vert et bleu jusqu'à la nuance exacte."],
      ["Copiez le format voulu", "Cliquez sur copier pour le HEX, RVB, HSL, CMJN ou la variable CSS."],
    ],
    faq: [
      ["Pourquoi les couleurs paraissent-elles parfois différentes en CMJN ?", "Les écrans émettent de la lumière en RVB, alors que l'encre la réfléchit. Le gamut CMJN est un peu plus restreint."],
    ],
  },
  "how-to-encode-decode-html-entities-online": {
    metaTitle: "Encodeur et décodeur d'entités HTML en ligne gratuit | FileOmniTool",
    metaDescription: "Encodez du texte en entités HTML nommées ou numériques, ou décodez-les en texte lisible. Rapide et privé pour les développeurs.",
    seoKeyword: "encoder décoder entités html caractères spéciaux en ligne gratuit",
    intro: "Les navigateurs interprètent `<` et `>` comme des balises HTML et `&` comme le début d'une entité. Si vous insérez tel quel du texte contenant ces caractères dans une page, la mise en page casse ou des failles de sécurité apparaissent. Les convertir en entités HTML règle les deux problèmes.",
    deepDive: "Notre convertisseur gère dans votre navigateur aussi bien les entités nommées (`&copy;`, `&euro;`, `&eacute;`) que les codes numériques décimaux.",
    steps: [
      ["Collez le texte ou le HTML", "Collez un texte contenant des caractères spéciaux ou des entités HTML."],
      ["Choisissez encoder ou décoder", "Sélectionnez Encoder (texte vers &amp;) ou Décoder (entités vers texte)."],
      ["Copiez le code propre", "Copiez le résultat, prêt pour votre code HTML."],
    ],
    faq: [
      ["Avec l'UTF-8, les entités HTML sont-elles encore utiles ?", "Pour les caractères réservés du HTML comme `<` et `&`, les entités restent indispensables, quel que soit l'encodage de la page."],
    ],
  },
  "how-to-test-regular-expressions-regex-online": {
    metaTitle: "Testeur d'expressions régulières (regex) en ligne | FileOmniTool",
    metaDescription: "Testez et déboguez vos expressions régulières dans le navigateur avec les flags (g, i, m, s) et le détail des groupes. Modèles intégrés pour e-mails et dates.",
    seoKeyword: "tester expressions régulières regex en ligne surlignage temps réel",
    intro: "Les expressions régulières sont un outil extrêmement puissant pour valider des données, faire du scraping ou chercher du texte, mais un seul crochet ou astérisque mal placé peut provoquer des correspondances désastreuses. Tester votre motif sur des données réalistes évite les bugs en production.",
    deepDive: "L'exécution est assurée par le moteur RegExp ECMAScript natif du navigateur, ce qui garantit un comportement identique à JavaScript et TypeScript côté serveur.",
    steps: [
      ["Saisissez le motif et les flags", "Tapez votre expression régulière entre les barres obliques et activez les flags (g, i, m)."],
      ["Saisissez le texte de test", "Collez un exemple de texte : les correspondances apparaissent aussitôt surlignées en vert."],
      ["Examinez les groupes capturés", "Consultez le tableau détaillé des positions trouvées et des groupes de capture."],
    ],
    faq: [
      ["Existe-t-il des motifs prêts à l'emploi ?", "Oui, cliquez sur les boutons prédéfinis pour e-mail, URL, adresse IPv4 et dates (JJ/MM/AAAA)."],
    ],
  },
  "how-to-generate-seo-url-slugs-online": {
    metaTitle: "Générateur de slugs d'URL SEO gratuit (kebab-case) | FileOmniTool",
    metaDescription: "Générez des slugs d'URL propres et optimisés pour le SEO à partir du titre de vos articles. Supprime accents, symboles et mots vides.",
    seoKeyword: "générer slug url seo kebab case en ligne gratuit",
    intro: "Les slugs contenant des caractères spéciaux, des majuscules, des espaces ou des accents encodés (comme `%C3%A9` au lieu de `e`) déroutent les visiteurs et inspirent peu confiance dans les résultats Google. Une URL propre en kebab-case améliore le taux de clic.",
    deepDive: "La normalisation Unicode (NFD) supprime les diacritiques et translittère les caractères avant de filtrer les symboles, pour produire des chaînes kebab-case impeccables.",
    steps: [
      ["Saisissez le titre de l'article", "Tapez ou collez le titre de votre article, avec ses accents et sa ponctuation."],
      ["Réglez les options du slug", "Choisissez le tiret (-) comme séparateur et activez si besoin la suppression des mots vides."],
      ["Copiez le slug SEO", "Copiez la chaîne propre séparée par des tirets, prête pour WordPress ou Next.js."],
    ],
    faq: [
      ["Faut-il retirer les prépositions des URL ?", "Oui, des URL plus courtes centrées sur les mots-clés principaux fonctionnent mieux sur Google."],
    ],
  },
  "how-to-create-zip-archive-files-online": {
    metaTitle: "Comment créer une archive ZIP en ligne gratuitement | FileOmniTool",
    metaDescription: "Regroupez et compressez plusieurs fichiers dans une seule archive ZIP dans votre navigateur avec JSZip. Aucun envoi sur un serveur.",
    seoKeyword: "créer archive zip en ligne gratuit compression",
    intro: "Les messageries peinent quand vous joignez 30 fichiers séparés, ce qui déclenche souvent les limites de pièces jointes ou les filtres anti-spam. Tout regrouper dans une seule archive ZIP bien organisée rend le partage immédiat et professionnel.",
    deepDive: "La compression dans le navigateur avec JSZip assemble des structures PKZIP standard dans des tableaux typés JavaScript grâce à l'algorithme Deflate.",
    steps: [
      ["Sélectionnez les fichiers", "Glissez-déposez n'importe quelle combinaison de documents, images et dossiers."],
      ["Compressez en mémoire", "JSZip regroupe et compresse les fichiers dans la mémoire de votre navigateur."],
      ["Téléchargez l'archive ZIP", "Enregistrez votre fichier .zip, prêt à être joint à un e-mail ou partagé."],
    ],
    faq: [
      ["Y a-t-il une limite sur les types de fichiers ?", "Non, vous pouvez inclure des PDF, documents Word, images, fichiers audio et vidéos."],
    ],
  },
  "how-to-extract-zip-archives-online-free": {
    metaTitle: "Comment extraire une archive ZIP en ligne gratuitement | FileOmniTool",
    metaDescription: "Extrayez et téléchargez les fichiers d'une archive ZIP dans votre navigateur. Inspectez-les en toute sécurité avant de les enregistrer.",
    seoKeyword: "extraire décompresser zip en ligne gratuit privé",
    intro: "Ouvrir une archive ZIP inconnue sur son ordinateur peut être risqué si elle contient des exécutables cachés. Extraire les fichiers dans l'environnement isolé du navigateur permet d'inspecter et de récupérer des documents précis en toute sécurité.",
    deepDive: "Le moteur JSZip lit les en-têtes locaux et le répertoire central en mémoire, sans rien écrire dans les caches temporaires du disque du système.",
    steps: [
      ["Importez l'archive ZIP", "Déposez votre fichier .zip dans l'extracteur."],
      ["Parcourez le contenu", "Consultez la liste complète des fichiers et la taille de chacun."],
      ["Téléchargez les fichiers voulus", "Extrayez seulement les fichiers nécessaires ou téléchargez tout."],
    ],
    faq: [
      ["Puis-je extraire un seul fichier d'une grosse archive ?", "Oui, téléchargez les fichiers un par un sans décompresser tout le dossier."],
    ],
  },
  "how-to-calculate-verify-file-checksum-md5-sha256": {
    metaTitle: "Comment calculer et vérifier la somme de contrôle d'un fichier | FileOmniTool",
    metaDescription: "Calculez les sommes de contrôle MD5 et SHA-256 de n'importe quel fichier dans votre navigateur. Comparez les hashs pour vérifier qu'un téléchargement est authentique et intact.",
    seoKeyword: "calculer vérifier somme de contrôle fichier md5 sha256 en ligne gratuit",
    intro: "Lors du téléchargement d'images ISO de systèmes d'exploitation, de mises à jour de firmware ou de logiciels libres, un incident réseau peut corrompre les données ou un attaquant peut altérer les fichiers sur un serveur miroir. Vérifier la somme de contrôle cryptographique garantit que le fichier sur votre disque est identique, octet par octet, à l'original.",
    deepDive: "SubtleCrypto lit les ArrayBuffers par blocs et produit des empreintes standard de 256 bits sans aucune transmission vers le cloud.",
    steps: [
      ["Sélectionnez le fichier à vérifier", "Déposez n'importe quel fichier téléchargé (installeur, image ISO, archive ZIP)."],
      ["Consultez les empreintes", "Le navigateur calcule SHA-256, MD5 et SHA-1 en mémoire."],
      ["Comparez avec la somme officielle", "Collez la somme de contrôle publiée par l'auteur dans le champ de comparaison pour confirmer une correspondance à 100 %."],
    ],
    faq: [
      ["Et si les sommes de contrôle ne correspondent pas ?", "Si les empreintes diffèrent ne serait-ce que d'un caractère, le fichier est corrompu ou modifié. Supprimez-le et téléchargez-le à nouveau."],
    ],
  },
  "how-to-inspect-binary-files-hex-viewer-dump": {
    metaTitle: "Visionneuse hexadécimale en ligne et dump de fichiers binaires | FileOmniTool",
    metaDescription: "Inspectez des fichiers binaires en lignes de dump hexadécimal de 16 octets, avec pagination, dans votre navigateur. Rapide, gratuit et sûr.",
    seoKeyword: "visionneuse hexadécimale fichier binaire dump en ligne gratuit",
    intro: "Quand l'extension d'un fichier a disparu ou est corrompue, les logiciels refusent de l'ouvrir. Examiner ses premiers octets magiques (comme `FF D8 FF` pour un JPEG ou `50 4B 03 04` pour un ZIP) dans une visionneuse hexadécimale révèle immédiatement sa vraie nature.",
    deepDive: "La pagination par fenêtres de Uint8Array permet d'afficher instantanément des fichiers de toute taille sans ralentir le navigateur.",
    steps: [
      ["Importez le fichier binaire", "Déposez n'importe quel fichier (photo corrompue, firmware, exécutable)."],
      ["Explorez la grille hexadécimale", "Consultez des lignes de 16 octets avec offset, octets en hexadécimal et caractères ASCII."],
      ["Naviguez entre les pages et copiez", "Parcourez les pages d'octets avec fluidité, sans ralentissement."],
    ],
    faq: [
      ["Cela aide-t-il à récupérer des fichiers corrompus ?", "Oui, identifier l'en-tête magique permet de remettre la bonne extension et de rouvrir le fichier."],
    ],
  },
  "how-to-convert-base64-string-to-image-file": {
    metaTitle: "Convertisseur Base64 vers image en ligne gratuit (PNG) | FileOmniTool",
    metaDescription: "Décodez des chaînes Base64 Data URI en images PNG ou JPG dans votre navigateur. Aperçu en direct et téléchargement immédiat.",
    seoKeyword: "convertir base64 en image png jpg en ligne gratuit",
    intro: "En inspectant des réponses JSON d'API, des dumps de bases de données ou des feuilles CSS, on tombe souvent sur d'obscures chaînes d'images en Base64. Plutôt que de deviner ce qu'elles représentent, décodez-les en fichier image pour les voir et les enregistrer immédiatement.",
    deepDive: "Le navigateur décode les caractères Base64 directement dans un blob image et associe chaque type MIME à l'extension de fichier exacte.",
    steps: [
      ["Collez le code Base64", "Collez votre chaîne Base64 brute ou votre Data URI (`data:image/png;base64,...`)."],
      ["Aperçu instantané", "Le navigateur décode les données et affiche l'image en direct."],
      ["Téléchargez l'image", "Cliquez sur « Télécharger l'image » pour l'enregistrer en PNG ou JPG sur votre ordinateur."],
    ],
    faq: [
      ["Est-ce que ça marche sans le préfixe « data:image » ?", "Oui, vous pouvez coller uniquement les caractères Base64 : l'outil détecte automatiquement le format."],
    ],
  },
  "how-to-convert-srt-to-vtt-subtitles": {
    metaTitle: "Convertir SRT en VTT gratuitement dans le navigateur | FileOmniTool",
    metaDescription: "Apprenez à convertir des sous-titres SRT en WebVTT (.vtt) et inversement directement dans votre navigateur, sans aucun envoi vers le cloud.",
    seoKeyword: "convertir srt en vtt gratuit sans téléversement",
    intro: "Le SRT est le format historique des lecteurs de bureau comme VLC, mais les lecteurs web modernes et la vidéo HTML5 exigent du WebVTT. Plutôt que d'envoyer vos transcriptions à des convertisseurs tiers douteux, FileOmniTool adapte la syntaxe des horodatages directement dans la mémoire de votre navigateur.",
    deepDive: "Le WebVTT (Web Video Text Tracks) impose un format strict des millisecondes avec un point au lieu d'une virgule (00:01:23.456 contre 00:01:23,456). La conversion dans le navigateur normalise les horodatages par expressions régulières en local, sans latence réseau ni conservation des fichiers.",
    steps: [
      ["Sélectionnez le fichier de sous-titres", "Glissez votre fichier .srt dans la zone de dépôt ou collez directement le texte des sous-titres."],
      ["Conversion instantanée", "Le navigateur remplace les virgules par des points et ajoute l'en-tête WEBVTT obligatoire."],
      ["Téléchargez le .VTT", "Enregistrez le fichier WebVTT valide, prêt pour les balises vidéo HTML5 ou le streaming."],
    ],
    faq: [
      ["Puis-je reconvertir un VTT en SRT ?", "Oui, cliquez sur le bouton de mode pour passer de SRT → VTT à VTT → SRT."],
      ["Les sous-titres dans toutes les langues sont-ils pris en charge ?", "Oui, l'encodage UTF-8 garantit une compatibilité totale avec les accents, le cyrillique, le grec et les caractères asiatiques."],
    ],
  },
  "how-to-extract-text-transcript-from-srt": {
    metaTitle: "Extraire le texte de sous-titres SRT gratuitement | Sous-titres en TXT",
    metaDescription: "Supprimez horodatages et numéros de ligne des fichiers de sous-titres pour obtenir des transcriptions propres et lisibles, dans la mémoire du navigateur.",
    seoKeyword: "extraire texte sous-titres srt gratuit",
    intro: "Vous avez déjà téléchargé les sous-titres d'une interview, d'un podcast ou d'un cours pour découvrir un document chaotique rempli de codes temporels et de numéros de ligne ? Le lire est un cauchemar. Notre nettoyeur de sous-titres supprime tout le balisage technique et produit des paragraphes lisibles.",
    deepDive: "Les sous-titres défilants répètent souvent les mêmes phrases sur plusieurs blocs successifs pour simuler le défilement. Notre moteur de déduplication, qui tourne dans votre navigateur, compare les blocs adjacents et les fusionne en phrases cohérentes, éliminant des milliers de mots en double.",
    steps: [
      ["Importez le fichier de sous-titres", "Déposez votre fichier .srt ou .vtt dans le cadre."],
      ["Filtrage automatique", "L'analyseur supprime les numéros et les horodatages comme 00:00:15,000 --> 00:00:18,000."],
      ["Copiez ou téléchargez", "Copiez la transcription fluide ou enregistrez-la en document .txt propre."],
    ],
    faq: [
      ["Les mots et caractères sont-ils comptés ?", "Oui, vous voyez immédiatement le nombre total de mots et de caractères en haut de la transcription."],
      ["Mes notes de cours restent-elles privées ?", "À 100 %. Rien ne transite par le réseau : toute l'analyse s'exécute dans la mémoire de votre navigateur."],
    ],
  },
  "how-to-extract-frames-from-animated-gif": {
    metaTitle: "Extraire les images d'un GIF en ligne gratuitement | GIF en PNG",
    metaDescription: "Décomposez un GIF animé en images PNG individuelles. Téléchargez une image ou toutes dans un ZIP, directement dans le navigateur.",
    seoKeyword: "extraire images gif gratuit sans téléversement",
    intro: "Pour récupérer une seule image d'un GIF animé, on finit souvent par faire une capture d'écran floue ou par installer un logiciel lourd comme Photoshop. FileOmniTool décompose l'animation en images PNG 32 bits impeccables et sans perte, directement dans la mémoire de votre navigateur.",
    deepDive: "Les navigateurs récents prennent en charge l'API ImageDecoder de WebCodecs, qui décompresse le codage différentiel entre images du GIF directement via le matériel graphique. Transparence et palette de chaque image correspondent ainsi au fichier d'origine.",
    steps: [
      ["Choisissez votre GIF", "Glissez votre fichier .gif dans la zone de dépôt."],
      ["Examinez chaque image", "Parcourez toutes les images extraites avec leur numéro et leur durée en millisecondes."],
      ["Téléchargez en PNG ou ZIP", "Téléchargez une image en PNG sans perte ou récupérez tout dans une archive ZIP."],
    ],
    faq: [
      ["Est-ce que ça marche avec les GIF du smartphone ?", "Oui, l'outil est entièrement compatible avec Chrome et Safari sur iOS et Android."],
      ["Y a-t-il une limite au nombre d'images ?", "Aucune limite arbitraire : les animations de plus de 100 images s'extraient en quelques secondes selon la mémoire de l'appareil."],
    ],
  },
  "how-to-convert-image-to-ascii-art": {
    metaTitle: "Convertir une image en art ASCII en ligne gratuitement | FileOmniTool",
    metaDescription: "Transformez photos et images en art ASCII en temps réel. Réglez les colonnes et la densité de caractères, puis exportez en .txt ou .html.",
    seoKeyword: "convertir image en art ascii gratuit",
    intro: "L'art ASCII est l'un des styles les plus emblématiques des débuts de l'informatique. Pour égayer votre README GitHub, épater vos amis sur Discord ou créer des bannières rétro pour le terminal, convertir une photo en texte à la main est impossible. Notre analyseur de luminance le fait en une milliseconde, dans votre navigateur.",
    deepDive: "L'algorithme associe la luminance perçue de chaque pixel (0,299R + 0,587G + 0,114B) à une échelle progressive de densité de caractères comme '@%#*+=-:. '. Il tient compte du rapport hauteur/largeur des polices à chasse fixe pour que visages et formes rondes gardent leurs proportions.",
    steps: [
      ["Importez l'image", "Déposez une photo JPG, PNG ou WebP."],
      ["Réglez colonnes et échelle", "Ajustez la largeur et choisissez un jeu de caractères standard, détaillé ou en blocs."],
      ["Copiez ou téléchargez", "Copiez le texte ASCII ou téléchargez-le en .txt ou en fichier .html mis en forme."],
    ],
    faq: [
      ["Où puis-je coller le résultat ASCII ?", "Partout où une police à chasse fixe est utilisée : README GitHub, Reddit, blocs de code Discord, Bloc-notes, terminal."],
      ["Puis-je inverser les zones claires et sombres ?", "Oui, cochez « Inverser le contraste / négatif » pour les terminaux et thèmes sombres."],
    ],
  },
  "how-to-convert-png-to-ico-windows-icon": {
    metaTitle: "Convertir un PNG en ICO (icône Windows) gratuitement | FileOmniTool",
    metaDescription: "Créez de vraies icônes Windows .ico multirésolution dans votre navigateur. Transparence préservée, aucun envoi vers le cloud.",
    seoKeyword: "convertir png en ico windows gratuit sans téléversement",
    intro: "Renommer « logo.png » en « logo.ico » ne crée PAS une icône. Windows exige un en-tête binaire spécifique (ICONDIR) et une entrée d'image pour chaque résolution d'affichage. Notre outil assemble de vrais fichiers ICO binaires multirésolution directement dans la mémoire du navigateur.",
    deepDive: "Le compilateur construit une structure ICONDIR (6 octets) suivie de descripteurs ICONDIRENTRY (16 octets par résolution) qui pointent vers chaque image PNG. Windows Vista, 10 et 11 lisent nativement ces flux PNG intégrés, avec une transparence nette et sans compression.",
    steps: [
      ["Importez une image carrée", "Déposez un PNG ou un JPG (idéalement 512×512 avec fond transparent)."],
      ["Choisissez les tailles d'icône", "Activez les résolutions nécessaires (16 px, 32 px, 48 px, 64 px)."],
      ["Téléchargez le .ICO", "Enregistrez le fichier d'icône Windows natif."],
    ],
    faq: [
      ["Comment appliquer cette icône sous Windows 11 ?", "Clic droit sur un dossier ou un raccourci > Propriétés > Personnaliser (ou Raccourci) > Changer d'icône > Parcourir, puis sélectionnez votre fichier .ico."],
      ["Puis-je l'utiliser comme favicon de site ?", "Oui, les navigateurs lisent automatiquement les images 16 px et 32 px intégrées lorsque le fichier est placé à la racine du site."],
    ],
  },
  "how-to-clean-minify-svg-files": {
    metaTitle: "Nettoyer et minifier un SVG en ligne gratuitement | FileOmniTool",
    metaDescription: "Nettoyez vos fichiers vectoriels SVG dans le navigateur. Supprimez les métadonnées des éditeurs et les espaces de noms propriétaires, et réduisez leur poids.",
    seoKeyword: "nettoyer minifier fichiers svg en ligne gratuit",
    intro: "Les logiciels de création comme Adobe Illustrator, Inkscape et Figma injectent énormément de XML propriétaire inutile dans les SVG exportés : calques, repères, mentions de version et balises de description vides. Cela alourdit les pages et pénalise le score Google PageSpeed. Notre nettoyeur supprime tout cela sans toucher à vos tracés vectoriels.",
    deepDive: "Le nettoyeur filtre l'arbre XML par expressions régulières et supprime les déclarations DOCTYPE, les espaces de noms des éditeurs (xmlns:inkscape, sodipodi, adobe), les ID d'éditeur et les espaces superflus. Le rendu reste mathématiquement identique, avec beaucoup moins d'octets.",
    steps: [
      ["Importez le fichier vectoriel", "Déposez votre fichier .svg dans la zone de dépôt."],
      ["Nettoyage automatique", "Commentaires, espaces de noms des éditeurs (inkscape, adobe) et balises de métadonnées sont supprimés."],
      ["Copiez le code ou téléchargez", "Copiez le code minifié directement dans votre projet ou téléchargez le fichier nettoyé."],
    ],
    faq: [
      ["Est-ce que ça casse le SVG intégré en React ou HTML ?", "Non, au contraire : un SVG nettoyé se colle bien plus facilement en JSX ou HTML intégré, sans erreurs de lint liées aux espaces de noms."],
      ["Combien d'espace puis-je gagner ?", "Un SVG typique s'allège de 20 % à 65 %, selon la quantité de métadonnées ajoutées par l'éditeur d'origine."],
    ],
  },
  "how-to-protect-pdf-with-password-aes256": {
    metaTitle: "Protéger un PDF par mot de passe gratuitement (AES-256) | FileOmniTool",
    metaDescription: "Chiffrez et protégez vos PDF par mot de passe dans la mémoire du navigateur avec WebCrypto AES-GCM. Aucun envoi vers le cloud.",
    seoKeyword: "protéger pdf mot de passe en ligne gratuit sans téléversement",
    intro: "L'e-mail n'est pas chiffré par nature : envoyer avis d'imposition, coordonnées bancaires ou contrats en pièce jointe PDF non protégée expose votre vie privée à une interception. Les services en ligne classiques vous demandent d'envoyer le fichier sur leurs serveurs, ce qui annule l'intérêt pour la confidentialité. FileOmniTool chiffre le document dans la mémoire de votre ordinateur avec WebCrypto.",
    deepDive: "Grâce au moteur WebCrypto SubtleCrypto natif du navigateur, nous dérivons une clé AES de 256 bits à partir de votre mot de passe via PBKDF2 avec 100 000 itérations et un sel aléatoire. Le contenu est chiffré en AES-GCM authentifié : sans votre mot de passe, même un supercalculateur ne peut pas le déchiffrer.",
    steps: [
      ["Importez le PDF", "Déposez votre document PDF dans la zone de chiffrement."],
      ["Définissez le mot de passe", "Saisissez la phrase secrète de votre choix."],
      ["Téléchargez le fichier protégé", "Enregistrez le conteneur chiffré en AES-256."],
    ],
    faq: [
      ["Comment le destinataire peut-il déchiffrer le fichier ?", "Il peut utiliser ce même outil gratuit de FileOmniTool en mode « Déchiffrer », saisir le mot de passe que vous lui avez transmis et récupérer instantanément le PDF original."],
      ["Et si j'oublie le mot de passe ?", "Avec un vrai chiffrement AES-256, il n'existe aucune porte dérobée ni clé maîtresse. Conservez votre mot de passe en lieu sûr."],
    ],
  },
  "how-to-flatten-pdf-form-fields": {
    metaTitle: "Aplatir les champs de formulaire PDF gratuitement | PDF en lecture seule",
    metaDescription: "Aplatissez les formulaires interactifs (AcroForms) d'un PDF en pages statiques en lecture seule. Empêchez toute modification, dans la mémoire du navigateur.",
    seoKeyword: "aplatir champs formulaire pdf en ligne gratuit",
    intro: "Les formulaires PDF interactifs (AcroForms) sont pratiques pour saisir des informations fiscales, des contrats ou des candidatures. Mais une fois envoyés, n'importe qui disposant d'un lecteur PDF peut modifier vos réponses par erreur ou par malveillance, changer des montants ou retirer des signatures. L'aplatissement est la procédure standard pour tout figer définitivement.",
    deepDive: "L'aplatissement extrait l'apparence visuelle de chaque champ, la dessine définitivement sur le contenu de la page et supprime le dictionnaire AcroForm du catalogue du document. Le PDF obtenu s'affiche de façon identique sur toutes les imprimantes, mobiles et visionneuses, sans moteur de formulaire actif.",
    steps: [
      ["Importez le PDF à remplir", "Déposez le PDF contenant zones de texte, cases à cocher ou champs de signature."],
      ["Traitement en mémoire", "Le moteur fige tous les éléments interactifs dans l'arrière-plan de la page."],
      ["Téléchargez le PDF scellé", "Enregistrez le document inaltérable, prêt à être diffusé."],
    ],
    faq: [
      ["L'aplatissement réduit-il la taille du PDF ?", "Oui, la suppression des structures de formulaire, des scripts de validation et des widgets allège souvent le fichier."],
      ["Peut-on « désaplatir » le PDF ensuite ?", "Non. Une fois aplati, le texte fait partie du contenu de la page et ne peut plus redevenir des champs de formulaire."],
    ],
  },
  "how-to-convert-json-to-sql-insert-queries": {
    metaTitle: "Convertir du JSON en requêtes SQL INSERT gratuitement | FileOmniTool",
    metaDescription: "Convertissez des tableaux JSON en requêtes SQL INSERT INTO dans votre navigateur. Dialectes MySQL, PostgreSQL et SQLite pris en charge.",
    seoKeyword: "convertir json en requêtes sql insert en ligne gratuit",
    intro: "Migrer des données d'API REST/GraphQL modernes ou de bases NoSQL vers des bases relationnelles comme MySQL, PostgreSQL ou SQLite est une corvée fréquente. Écrire des scripts d'import en Python ou des boucles à la main fait perdre des heures. FileOmniTool analyse les clés du JSON, déduit les types de colonnes, échappe les chaînes et génère des requêtes SQL prêtes pour la production en un instant.",
    deepDive: "L'analyseur réunit toutes les clés présentes dans les objets, de sorte que les enregistrements auxquels il manque un attribut reçoivent correctement la valeur NULL. Les booléens deviennent 1/0 ou TRUE/FALSE selon le dialecte, et les apostrophes dans les chaînes sont échappées en toute sécurité.",
    steps: [
      ["Collez les données JSON", "Collez un tableau d'objets ou importez un export .json."],
      ["Choisissez table et dialecte", "Saisissez le nom de la table cible et sélectionnez MySQL, PostgreSQL ou SQLite."],
      ["Exportez le script SQL", "Copiez les requêtes ou téléchargez un fichier .sql prêt à exécuter dans phpMyAdmin, DBeaver ou psql."],
    ],
    faq: [
      ["Mes enregistrements sont-ils envoyés quelque part ?", "Non. Toute l'analyse du JSON se fait dans la mémoire de votre navigateur. Aucune donnée n'atteint un serveur distant."],
      ["L'outil gère-t-il des milliers d'enregistrements ?", "Oui, les moteurs JavaScript actuels traitent des tableaux de plus de 10 000 objets en moins d'une seconde."],
    ],
  },
  "how-to-convert-html-to-markdown": {
    metaTitle: "Convertir du HTML en Markdown en ligne gratuitement | HTML en MD",
    metaDescription: "Convertissez du code HTML et des pages web en Markdown propre dans votre navigateur. Titres, listes, liens et blocs de code préservés.",
    seoKeyword: "convertir html en markdown en ligne gratuit",
    intro: "Copier du contenu depuis un site ou un éditeur de texte enrichi colle souvent un HTML désordonné, alourdi de styles, de balises span et de div imbriquées. Si vous utilisez des applis de notes comme Obsidian, Notion ou Bear, ou gérez de la documentation sur GitHub, il vous faut du Markdown propre. Notre convertisseur garde la mise en forme essentielle et supprime le superflu.",
    deepDive: "Plutôt que de fragiles remplacements de texte, notre convertisseur utilise le DOMParser natif du navigateur. Il parcourt le véritable arbre du document et préserve correctement listes imbriquées, combinaisons gras/italique, blocs de code préformaté et liens hypertexte.",
    steps: [
      ["Saisissez le HTML", "Collez votre code HTML ou importez un fichier .html."],
      ["Conversion du DOM", "Le navigateur analyse le DOM et traduit les éléments en syntaxe Markdown."],
      ["Copiez ou téléchargez le .MD", "Copiez le Markdown propre ou enregistrez-le en document .md."],
    ],
    faq: [
      ["Les tableaux sont-ils pris en charge ?", "Oui, les lignes et cellules des tableaux standard sont converties en texte propre avec leur mise en forme."],
      ["Puis-je convertir des pages web HTML complètes ?", "Oui, il suffit de glisser-déposer le fichier .html dans la zone prévue."],
    ],
  },
  "how-to-decode-jwt-tokens-offline": {
    metaTitle: "Décoder des jetons JWT hors ligne gratuitement | FileOmniTool",
    metaDescription: "Inspectez et décodez des JSON Web Tokens en toute sécurité dans votre navigateur. Vérifiez l'expiration sans envoyer de jetons sensibles à des serveurs distants.",
    seoKeyword: "décoder jwt hors ligne inspecteur jeton gratuit",
    intro: "Ne collez jamais de jetons bearer de production, de cookies d'authentification ou de données d'identité d'utilisateurs dans n'importe quel débogueur en ligne : ces serveurs peuvent enregistrer vos identifiants et détourner des sessions. FileOmniTool décode la structure des JWT entièrement hors ligne, dans la mémoire de votre navigateur.",
    deepDive: "Un JSON Web Token se compose de trois parties encodées en base64url et séparées par des points : en-tête, payload et signature. Notre script décode les parties Base64Url dans le navigateur, convertit l'horodatage Unix « exp » en heure locale et vous indique si le jeton est encore valide ou expiré.",
    steps: [
      ["Collez le jeton", "Collez votre jeton Bearer ou votre chaîne d'autorisation."],
      ["Examinez les claims décodés", "L'algorithme de l'en-tête et le JSON du payload s'affichent avec une syntaxe mise en forme."],
      ["Vérifiez l'expiration", "Voyez instantanément la date d'expiration exacte en clair et la validité du jeton."],
    ],
    faq: [
      ["Puis-je utiliser l'outil sans internet ?", "Oui. Une fois la page chargée, vous pouvez couper le Wi-Fi : le décodeur continue de fonctionner."],
      ["La signature secrète est-elle vérifiée ?", "L'outil isole et affiche le bloc de signature, sans jamais vous demander vos clés secrètes."],
    ],
  },
  "how-to-minify-css-stylesheets": {
    metaTitle: "Minifier du CSS en ligne gratuitement | Compresseur CSS",
    metaDescription: "Compressez vos feuilles de style CSS dans le navigateur sans aucun téléversement. Réduisez leur poids, économisez de la bande passante et accélérez votre site.",
    seoKeyword: "minifier css en ligne gratuit",
    intro: "Chaque espace, tabulation et commentaire de votre fichier CSS représente de la bande passante gaspillée que les mobinautes téléchargent avec leur forfait. Les Core Web Vitals de Google pénalisent fortement les feuilles de style lentes. Notre minifieur supprime tous les caractères inutiles sans modifier vos règles de mise en page.",
    deepDive: "Le minifieur supprime les commentaires multilignes (/* ... */), retire le dernier point-virgule avant chaque accolade fermante et élimine les espaces autour des combinateurs CSS (+, >, ~) et des déclarations. Le résultat est un CSS dense et pur, analysé instantanément.",
    steps: [
      ["Importez le fichier CSS", "Déposez votre feuille de style .css dans le cadre."],
      ["Compression instantanée", "Les commentaires et les espaces autour des accolades et points-virgules sont supprimés."],
      ["Téléchargez le .min.css", "Récupérez la feuille de style minifiée, prête pour la production."],
    ],
    faq: [
      ["Mes animations CSS ou ma grille vont-elles casser ?", "Non. Seuls les espaces et commentaires superflus sont retirés ; les sélecteurs et propriétés CSS valides restent intacts."],
      ["Puis-je retrouver le code d'origine ensuite ?", "Gardez toujours une copie non minifiée pour le développement et utilisez la version .min.css en production."],
    ],
  },
  "how-to-convert-unix-epoch-timestamps": {
    metaTitle: "Convertisseur de timestamp Unix (epoch) gratuit | FileOmniTool",
    metaDescription: "Convertissez des timestamps Unix en secondes ou millisecondes en dates lisibles, en heure locale et UTC, en temps réel. 100 % gratuit.",
    seoKeyword: "convertir timestamp unix epoch en date gratuit",
    intro: "Les ordinateurs comptent le temps en secondes écoulées depuis le 1er janvier 1970 à minuit UTC : le fameux Unix Epoch. Parfait pour les serveurs, mais un timestamp comme « 1728564120 » dans un journal d'erreurs est totalement illisible pour un humain. Notre convertisseur le traduit en temps réel en date de calendrier claire.",
    deepDive: "Un piège fréquent est la confusion entre secondes Unix (10 chiffres) et millisecondes JavaScript ou Java (13 chiffres). Notre convertisseur détecte les valeurs supérieures à 100 000 000 000, ajuste automatiquement l'échelle et affiche à la fois votre fuseau horaire local et l'heure UTC.",
    steps: [
      ["Saisissez un timestamp ou une date", "Tapez le timestamp Unix numérique ou choisissez une date dans le calendrier."],
      ["Conversion en temps réel", "L'outil détecte automatiquement s'il s'agit de secondes ou de millisecondes."],
      ["Consultez les résultats", "Voyez l'heure locale, l'heure UTC, le format ISO-8601 et le temps relatif (par ex. « il y a 3 heures »)."],
    ],
    faq: [
      ["Que va-t-il se passer avec le bug de l'an 2038 ?", "Le 19 janvier 2038, les entiers signés 32 bits déborderont. Les systèmes 64 bits modernes gèrent les timestamps sans problème pendant des milliards d'années."],
      ["Puis-je convertir une date en epoch ?", "Oui, utilisez le second champ pour choisir une date et une heure et obtenir le timestamp Unix exact."],
    ],
  },
  "how-to-convert-any-file-to-base64": {
    metaTitle: "Convertir n'importe quel fichier en Base64 gratuitement | Fichier en Base64",
    metaDescription: "Encodez documents, archives et médias en texte Base64. Décodez des chaînes Base64 en fichiers binaires téléchargeables, dans le navigateur.",
    seoKeyword: "convertir fichier en base64 en ligne gratuit",
    intro: "L'encodage Base64 permet de représenter n'importe quel fichier binaire (une facture PDF, une archive chiffrée ou un extrait sonore) sous forme de texte que l'on peut envoyer par e-mail, intégrer dans un JSON ou stocker dans une colonne texte d'une base de données. FileOmniTool fonctionne dans les deux sens : du fichier vers le Base64 et du Base64 vers le fichier.",
    deepDive: "Le Base64 transforme chaque groupe de 3 octets (24 bits) en 4 caractères ASCII imprimables (6 bits chacun), soit une augmentation de taille d'environ 33 %. Comme tout l'encodage et le décodage se font dans des tableaux typés JavaScript, vos fichiers privés ne passent jamais par un serveur distant.",
    steps: [
      ["Sélectionnez le fichier", "Déposez n'importe quel fichier (PDF, image, audio, ZIP, exécutable)."],
      ["Encodage Base64 instantané", "Le navigateur convertit les octets en texte ASCII dans la mémoire de votre appareil."],
      ["Copiez ou téléchargez le .txt", "Copiez la chaîne Base64 ou téléchargez-la en fichier .txt."],
    ],
    faq: [
      ["Puis-je reconvertir le Base64 en fichier d'origine ?", "Oui. Passez en mode « Base64 vers fichier », collez votre chaîne, saisissez un nom avec extension (par ex. fichier.pdf) et cliquez sur Télécharger."],
      ["Les Data URI sont-ils pris en charge ?", "Oui, les Data URI standard avec type MIME sont analysés automatiquement."],
    ],
  },
  "how-to-identify-unknown-file-type-magic-bytes": {
    metaTitle: "Identifier un fichier inconnu grâce aux magic bytes | FileOmniTool",
    metaDescription: "Analysez les magic bytes de la signature d'un fichier pour identifier son vrai format et son type MIME, même sans extension, dans votre navigateur.",
    seoKeyword: "identifier fichier inconnu magic bytes en ligne gratuit",
    intro: "Vous avez déjà téléchargé une pièce jointe nommée « download.dat » ou reçu un fichier corrompu sans extension, que votre système ne sait pas ouvrir ? Changer l'extension au hasard est frustrant. Tout vrai fichier commence par des « magic bytes » uniques qui révèlent sa nature. Notre outil lit ces octets et identifie le format en quelques millisecondes.",
    deepDive: "Les systèmes d'exploitation se fient aux extensions, mais les logiciels qui lisent les fichiers se fient à leur signature. Par exemple, un PDF commence toujours par « %PDF » (hex 25 50 44 46), un PNG par hex 89 50 4E 47, un ZIP ou document Office par « PK » (hex 50 4B 03 04), et un MP4 contient « ftyp » à l'octet 4. Nous lisons les 32 premiers octets et les comparons à des bases de signatures forensiques.",
    steps: [
      ["Déposez le fichier inconnu", "Glissez n'importe quel fichier corrompu, renommé ou sans extension."],
      ["Analysez les magic bytes", "L'outil compare les 32 premiers octets de l'en-tête aux signatures connues."],
      ["Restaurez et téléchargez", "Cliquez sur le bouton de restauration pour télécharger le fichier avec sa vraie extension (par ex. .pdf, .zip, .png)."],
    ],
    faq: [
      ["Quels formats l'outil peut-il identifier ?", "Tous les principaux : PDF, PNG, JPEG, GIF, WebP, ZIP, RAR, 7z, GZ, MP3, MP4, WebM, OGG, WebAssembly et exécutables Windows (EXE)."],
      ["Est-il sûr d'analyser des fichiers suspects ?", "Oui. Le fichier n'est jamais exécuté : nous lisons seulement ses 32 premiers octets comme des données passives en mémoire."],
    ],
  },
};
