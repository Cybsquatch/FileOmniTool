import type { GuideBodyTranslations } from "./guides-body-translations";

export const GUIDES_BODY_ES: GuideBodyTranslations = {
  "how-to-merge-pdf-without-uploading": {
    metaTitle: "Cómo unir PDF online sin subirlos | FileOmniTool",
    metaDescription: "Guía paso a paso para unir varios documentos PDF en Windows, Mac y móvil sin subir nada a la nube.",
    seoKeyword: "unir pdf sin subir gratis",
    intro: "La mayoría de los conversores de PDF online suben documentos sensibles (contratos, extractos bancarios, declaraciones de la renta) a servidores remotos en la nube. Eso te expone a filtraciones de datos y a problemas de privacidad. FileOmniTool lo resuelve funcionando por completo en tu navegador gracias a WebAssembly.",
    deepDive: "A diferencia de los portales en la nube, que dejan tus archivos en discos remotos durante horas, WebAssembly manipula los flujos binarios del PDF directamente en la memoria de JavaScript. Como no hay que subir ni descargar nada, un PDF de 100 MB se une en menos de dos segundos.",
    steps: [
      ["Selecciona tus PDF", "Arrastra dos o más archivos PDF a la zona de carga o haz clic en “Examinar archivos”."],
      ["Ordena los documentos", "Comprueba el orden de los documentos: se unirán uno detrás de otro en esa secuencia."],
      ["Une en memoria", "Haz clic en “Unir PDF”. El motor WebAssembly compone las páginas en la RAM de tu equipo."],
      ["Descarga al instante", "Guarda el PDF unido directamente en tu dispositivo. Nunca ha existido una copia en la nube."],
    ],
    faq: [
      ["¿Hay un límite de documentos?", "No hay límites arbitrarios. Puedes unir tantas páginas como quepan en la memoria RAM de tu dispositivo."],
      ["¿Puedo usarlo en el móvil?", "Sí, es totalmente compatible con Safari en iOS y Chrome en Android, sin instalar ninguna app."],
    ],
  },
  "how-to-split-extract-pages-from-pdf": {
    metaTitle: "Cómo dividir un PDF y extraer páginas gratis | FileOmniTool",
    metaDescription: "Aprende a extraer páginas sueltas o rangos personalizados de un PDF en el ordenador o el móvil, con total privacidad.",
    seoKeyword: "dividir pdf extraer páginas online gratis",
    intro: "A menudo solo necesitas un par de páginas de un manual, contrato o ebook de 100 páginas. En lugar de enviar archivos enormes por correo, extraer las páginas exactas hace que compartirlas sea fácil y seguro.",
    deepDive: "FileOmniTool analiza el índice del documento en tu navegador y copia solo los objetos de página indicados en un PDF nuevo. El tamaño del archivo se reduce muchísimo y se conserva la resolución original.",
    steps: [
      ["Carga el PDF", "Arrastra tu archivo PDF a la zona de carga."],
      ["Indica el rango de páginas", "Escribe rangos como “1-3, 5, 8-10” para extraer solo las partes que quieres."],
      ["Extrae en el navegador", "Haz clic en “Extraer páginas” para crear el nuevo documento en memoria."],
      ["Descarga el PDF extraído", "Descarga el PDF recortado directamente en tu disco."],
    ],
    faq: [
      ["¿Puedo indicar varias páginas no consecutivas?", "Sí, usa comas y guiones: por ejemplo “1, 4, 7-10”."],
    ],
  },
  "how-to-rotate-pdf-pages-permanently": {
    metaTitle: "Cómo rotar páginas PDF de forma permanente | FileOmniTool",
    metaDescription: "Gira 90 o 180 grados las páginas de un PDF torcidas o al revés, de forma permanente y sin subir archivos.",
    seoKeyword: "rotar pdf permanentemente gratis",
    intro: "Al escanear recibos o contratos de varias páginas con un escáner o con la cámara del móvil, es habitual que algunas páginas queden de lado o al revés. Girar la vista en un visor no guarda el ángulo; necesitas una herramienta que escriba la rotación dentro del propio PDF.",
    deepDive: "FileOmniTool actualiza la clave “/Rotate” de cada página seleccionada. Al abrir el documento en Adobe Reader, Chrome, Vista Previa de macOS o apps móviles, se muestra derecho automáticamente.",
    steps: [
      ["Selecciona el PDF torcido", "Suelta tu archivo PDF en la zona de rotación."],
      ["Elige el ángulo", "Selecciona 90° en sentido horario, 180° (boca abajo) o 270° en sentido antihorario."],
      ["Guarda de forma permanente", "Haz clic en “Rotar PDF” para incrustar la rotación en el archivo."],
    ],
    faq: [
      ["¿Se corregirá la orientación en todos los dispositivos?", "Sí, la rotación queda escrita de forma permanente en la estructura del archivo."],
    ],
  },
  "how-to-convert-images-jpg-png-to-pdf": {
    metaTitle: "Cómo convertir imágenes a PDF gratis (JPG a PDF) | FileOmniTool",
    metaDescription: "Convierte imágenes JPG, PNG y WebP en documentos PDF paginados en A4, directamente en tu navegador. Rápido, gratis y seguro.",
    seoKeyword: "convertir jpg png a pdf online gratis",
    intro: "La sede electrónica de la Administración, las universidades y los portales de RR. HH. de muchas empresas rechazan a menudo imágenes sueltas en JPG o PNG y exigen que la documentación se presente en PDF.",
    deepDive: "Las imágenes se incrustan directamente en páginas PDF, escaladas automáticamente según su proporción y conservando la nitidez, para que el documento quede listo para imprimir.",
    steps: [
      ["Selecciona tus fotos", "Carga una o varias imágenes (JPG, PNG, WebP)."],
      ["Configura la página", "Elige formato A4 o “Ajustar a la imagen” y define el margen."],
      ["Genera el PDF en memoria", "Haz clic en “Convertir a PDF” y descarga el documento combinado."],
    ],
    faq: [
      ["¿Puedo combinar varias fotos en un solo PDF?", "Sí, selecciona todas las fotos que quieras: cada una se convierte en una página distinta del PDF final."],
    ],
  },
  "how-to-add-page-numbers-to-pdf-free": {
    metaTitle: "Cómo numerar las páginas de un PDF gratis | FileOmniTool",
    metaDescription: "Guía paso a paso para añadir números de página a un PDF en tu navegador. Elige posición, formato y página inicial.",
    seoKeyword: "numerar páginas pdf gratis online",
    intro: "Al entregar un TFG o una tesis, una propuesta comercial o un contrato oficial, numerar las páginas de forma coherente es un requisito obligatorio. Pagar una suscripción mensual a Adobe Acrobat solo para añadir números de página es completamente innecesario.",
    deepDive: "FileOmniTool incrusta la tipografía estándar Helvetica en el sistema de coordenadas del PDF, en posiciones tipográficas precisas. El formato original del documento queda intacto al 100 %.",
    steps: [
      ["Carga el PDF", "Suelta tu PDF en la herramienta."],
      ["Elige posición y formato", "Selecciona abajo al centro, abajo a la derecha o arriba al centro, y el formato “Página X de Y”."],
      ["Define la página inicial", "Indica “Empezar en la página 2” si no quieres número en la portada."],
      ["Descarga el PDF numerado", "Haz clic en “Insertar números de página” y descarga tu documento."],
    ],
    faq: [
      ["¿Se modificará mi texto?", "Los números se colocan en los márgenes estándar (a 25 puntos del borde), donde normalmente no llega el contenido."],
    ],
  },
  "how-to-extract-text-from-pdf-online": {
    metaTitle: "Cómo extraer el texto de un PDF online gratis | FileOmniTool",
    metaDescription: "Extrae el texto de documentos PDF a formato TXT directamente en tu navegador. Rápido, gratis y sin almacenamiento en servidores.",
    seoKeyword: "extraer texto de pdf online gratis",
    intro: "Copiar texto a mano desde un lector de PDF suele traer saltos de línea indeseados, guiones y formato roto. Extraer directamente el flujo de texto te da un contenido limpio y editable, listo para Word, el correo o tus prompts de IA.",
    deepDive: "FileOmniTool identifica los bloques de texto dentro de los flujos de contenido del PDF y limpia las secuencias de escape, para darte texto UTF-8 listo para usar.",
    steps: [
      ["Carga el PDF", "Suelta tu PDF en la herramienta."],
      ["Análisis instantáneo", "El navegador decodifica los flujos de texto en memoria en milisegundos."],
      ["Copia o descarga", "Haz clic en “Copiar texto” o “Descargar .TXT” para guardar el texto limpio."],
    ],
    faq: [
      ["¿Me sirve para prompts de IA?", "Sí, el TXT puro es el formato de entrada más limpio para modelos de lenguaje y procesadores de texto."],
    ],
  },
  "how-to-convert-pdf-to-black-and-white-grayscale": {
    metaTitle: "Cómo convertir un PDF a blanco y negro gratis | FileOmniTool",
    metaDescription: "Transforma PDF en color a escala de grises en tu navegador y ahorra tóner y tinta al imprimir.",
    seoKeyword: "convertir pdf a blanco y negro escala de grises",
    intro: "Muchas impresoras láser y de inyección consumen tinta cian, magenta y amarilla incluso al imprimir documentos aparentemente sencillos. Convertir el PDF a una auténtica escala de grises obliga a la impresora a usar solo el tóner negro.",
    deepDive: "El procesamiento en tu navegador desatura las capas de color de todas las páginas sin subir nada a un servidor, lo que protege extractos financieros e informes confidenciales.",
    steps: [
      ["Selecciona el PDF en color", "Suelta tu documento en color en la herramienta."],
      ["Elige el modo de contraste", "Escoge escala de grises estándar o alto contraste para impresión ecológica."],
      ["Descarga e imprime", "Descarga tu PDF en escala de grises, listo para imprimir solo con negro."],
    ],
    faq: [
      ["¿El texto seguirá nítido?", "Sí, las definiciones vectoriales del texto siguen perfectamente nítidas."],
    ],
  },
  "how-to-edit-remove-pdf-metadata-properties": {
    metaTitle: "Cómo editar o eliminar los metadatos de un PDF | FileOmniTool",
    metaDescription: "Aprende a ver, editar y borrar las propiedades ocultas de un documento PDF directamente en tu navegador.",
    seoKeyword: "editar eliminar metadatos pdf online privado",
    intro: "Cada vez que exportas un documento desde Microsoft Word, Google Docs o Pages, el programa añade en silencio al PDF tu nombre, tu cuenta de usuario del ordenador y el software de creación. Antes de publicar documentos o presentar una oferta, eliminar esas etiquetas es clave para la confidencialidad.",
    deepDive: "FileOmniTool modifica directamente el catálogo final y el diccionario de información del PDF, para que ni los buscadores ni un análisis forense encuentren rastros de tu identidad.",
    steps: [
      ["Revisa los metadatos", "Carga tu documento para ver el autor y el software que lleva incrustados."],
      ["Edita o limpia", "Personaliza los campos o haz clic en “Eliminar todos los metadatos” para borrarlos."],
      ["Guarda el PDF limpio", "Descarga el PDF sin ningún rastro de los datos de tu ordenador."],
    ],
    faq: [
      ["¿Afecta al contenido del documento?", "No, solo se modifican las propiedades de metadatos de la cabecera del documento."],
    ],
  },
  "how-to-reorder-organize-delete-pdf-pages": {
    metaTitle: "Cómo reordenar y eliminar páginas de un PDF gratis | FileOmniTool",
    metaDescription: "Reordena páginas de forma visual, elimina hojas sobrantes y duplica páginas de un PDF en memoria, sin subir nada a la nube.",
    seoKeyword: "reordenar eliminar duplicar páginas pdf online",
    intro: "Al escanear papel es habitual que las páginas salgan desordenadas o que se cuelen hojas en blanco. En lugar de volver a escanearlo todo, reordenar las páginas de forma visual lleva solo unos segundos.",
    deepDive: "El motor de organización crea un PDF nuevo copiando solo las páginas elegidas, en el orden exacto que indiques, en la RAM de tu dispositivo.",
    steps: [
      ["Carga el PDF de varias páginas", "Suelta tu PDF para ver cada página como una tarjeta."],
      ["Reordena y elimina", "Usa las flechas para subir o bajar páginas y la papelera para quitar las páginas en blanco."],
      ["Guarda el PDF final", "Haz clic en “Guardar nuevo PDF” para descargar el archivo reorganizado."],
    ],
    faq: [
      ["¿Puedo duplicar una página?", "Sí, haz clic en el botón de duplicar de cualquier tarjeta para crear una copia al instante."],
    ],
  },
  "how-to-convert-images-webp-png-jpg": {
    metaTitle: "Cómo convertir WebP a JPG o PNG gratis | FileOmniTool",
    metaDescription: "Tutorial paso a paso para convertir imágenes WebP a JPG y PNG en tu navegador. Rápido, privado y 100 % gratis.",
    seoKeyword: "convertir webp a jpg png online gratis",
    intro: "Al guardar imágenes de webs modernas, muchas se descargan en formato WebP. Es ideal para que las páginas carguen rápido, pero muchos visores de fotos antiguos, documentos de Word y editores gráficos aún no abren WebP. Convertirlas a JPG o PNG resuelve la compatibilidad al instante.",
    deepDive: "El navegador decodifica el WebP con Canvas 2D acelerado por hardware y vuelve a codificar los píxeles en JPEG o PNG sin pasar por ningún servidor.",
    steps: [
      ["Selecciona tu imagen WebP", "Suelta el archivo WebP o búscalo en tu ordenador."],
      ["Elige el formato de salida", "Selecciona JPEG para fotos o PNG para conservar los fondos transparentes."],
      ["Conversión instantánea", "Haz clic en “Convertir imagen” y descarga tu imagen estándar."],
    ],
    faq: [
      ["¿PNG conserva la transparencia?", "Sí, al convertir un WebP transparente a PNG se conserva por completo el canal alfa."],
    ],
  },
  "how-to-compress-images-without-losing-quality": {
    metaTitle: "Cómo comprimir imágenes online gratis (reducir tamaño) | FileOmniTool",
    metaDescription: "Reduce el peso en MB de tus imágenes en la memoria del navegador sin perder calidad. Ideal para correos y webs rápidas.",
    seoKeyword: "comprimir imágenes sin perder calidad gratis",
    intro: "Los móviles actuales hacen fotos de 10 a 20 megabytes cada una. Adjuntar varias a resolución completa en un correo supera con frecuencia el límite de 25 MB de muchos proveedores. Comprimirlas con inteligencia reduce muchísimo el tamaño y mantiene los píxeles nítidos.",
    deepDive: "La compresión inteligente elimina la información de color de alta frecuencia que el ojo no percibe y las cabeceras EXIF redundantes, conservando la nitidez de los bordes y los colores.",
    steps: [
      ["Carga la foto pesada", "Arrastra tu imagen de alta resolución al compresor."],
      ["Elige el nivel de calidad", "Selecciona 80 % (recomendado) para ahorrar el máximo sin pérdida visible."],
      ["Descarga el archivo comprimido", "Descarga tu imagen comprimida con hasta un 80 % menos de peso."],
    ],
    faq: [
      ["¿Hay un límite de tamaño por foto?", "Puedes comprimir fotos de hasta 50 MB directamente en la memoria de tu navegador."],
    ],
  },
  "how-to-resize-image-dimensions-pixels": {
    metaTitle: "Cómo cambiar el tamaño de una imagen online gratis | FileOmniTool",
    metaDescription: "Cambia el ancho y el alto de tus fotos en píxeles o porcentaje en el navegador. Bloquea la proporción para no deformarlas.",
    seoKeyword: "redimensionar imagen píxeles online gratis",
    intro: "Ya necesites un banner para YouTube (2560×1440), una portada de Facebook (820×312) o una foto para el catálogo de tu tienda online, tener las dimensiones exactas en píxeles es imprescindible para que se vea nítido.",
    deepDive: "La interpolación bicúbica del canvas suaviza el remuestreo de los píxeles y evita la pixelación al reducir la imagen.",
    steps: [
      ["Carga la imagen", "Suelta tu imagen para ver sus dimensiones actuales en píxeles."],
      ["Indica el nuevo ancho o alto", "Escribe el ancho deseado (p. ej. 1920 o 1200 px). La proporción se bloquea automáticamente."],
      ["Descarga la foto redimensionada", "Descarga al instante la imagen con el nuevo tamaño."],
    ],
    faq: [
      ["¿La foto se verá estirada?", "No, el bloqueo de proporción garantiza que la imagen nunca se deforme."],
    ],
  },
  "how-to-add-watermark-to-photos-online": {
    metaTitle: "Cómo poner marca de agua a tus fotos gratis | FileOmniTool",
    metaDescription: "Añade marcas de agua de texto o logotipo a tus imágenes en el navegador. Ajusta opacidad, tamaño y posición con total privacidad.",
    seoKeyword: "poner marca de agua a fotos online gratis",
    intro: "Publicar tus fotografías, ilustraciones o anuncios inmobiliarios sin firma los deja expuestos a usos no autorizados y al robo de derechos de autor. Una marca de agua elegante deja clara tu autoría.",
    deepDive: "La marca de agua se dibuja sobre el canvas de la imagen antes de rasterizarla, de modo que queda fundida de forma permanente con la foto.",
    steps: [
      ["Carga tu foto", "Selecciona la imagen que quieres firmar y proteger."],
      ["Personaliza la marca de agua", "Escribe tu nombre o aviso de copyright y ajusta opacidad y posición."],
      ["Descarga la foto protegida", "Descarga tu imagen con marca de agua, lista para publicar en redes sociales."],
    ],
    faq: [
      ["¿Puedo ajustar la opacidad para no estropear la foto?", "Sí, usa el control de opacidad: desde una marca sutil (20 %) hasta una firma muy visible (100 %)."],
    ],
  },
  "how-to-convert-svg-to-png-high-resolution": {
    metaTitle: "Cómo convertir SVG a PNG online gratis | FileOmniTool",
    metaDescription: "Convierte gráficos vectoriales SVG en imágenes PNG transparentes a resolución 1x, 2x o 4x en tu navegador.",
    seoKeyword: "convertir svg a png online gratis transparente",
    intro: "SVG (Scalable Vector Graphics) es el estándar para iconos y logotipos web, pero programas como PowerPoint, algunos clientes de correo antiguos y las redes sociales a menudo no pueden mostrar archivos SVG. Rasterizarlo a PNG garantiza la compatibilidad total.",
    deepDive: "Como el SVG es vectorial, multiplicar la escala del canvas antes de renderizarlo produce imágenes de hasta 4K perfectamente nítidas, sin ningún desenfoque.",
    steps: [
      ["Carga el archivo SVG", "Suelta tu icono o logotipo SVG en el conversor."],
      ["Elige el multiplicador de escala", "Escoge 1x para tamaño web estándar o 4x para exportar con máxima nitidez para pantallas Retina o impresión."],
      ["Descarga el PNG transparente", "Descarga el PNG rasterizado con el fondo transparente intacto."],
    ],
    faq: [
      ["¿Se conserva la transparencia del fondo?", "Sí, el PNG se exporta con un canal alfa totalmente transparente."],
    ],
  },
  "how-to-remove-exif-metadata-and-gps-from-photos": {
    metaTitle: "Cómo eliminar los datos EXIF y GPS de tus fotos | FileOmniTool",
    metaDescription: "Aprende a quitar los metadatos EXIF ocultos y las coordenadas GPS de tus fotos en el navegador para proteger tu privacidad.",
    seoKeyword: "eliminar metadatos exif ubicación gps fotos online",
    intro: "Cuando haces una foto con tu iPhone o tu móvil Android, el dispositivo registra en silencio tu latitud y longitud GPS exactas, la fecha y la hora, el modelo de cámara y el número de serie. Cualquiera que descargue la foto original puede averiguar dónde vives.",
    deepDive: "FileOmniTool dibuja la imagen sobre un canvas limpio y extrae datos JPEG/PNG nuevos, de modo que no sobrevive ningún bloque de metadatos.",
    steps: [
      ["Selecciona tus fotos", "Suelta fotos hechas con el móvil o con una cámara réflex."],
      ["Elimina los metadatos", "El navegador vuelve a codificar solo los píxeles y descarta todas las cabeceras EXIF."],
      ["Descarga la imagen anónima", "Guarda la foto limpia, segura para compartir en foros y redes sociales."],
    ],
    faq: [
      ["¿Cambiará el aspecto de mi foto?", "En absoluto: solo se descartan las etiquetas de metadatos invisibles."],
    ],
  },
  "how-to-pick-colors-and-palette-from-images": {
    metaTitle: "Cómo sacar colores y paletas de una imagen | FileOmniTool",
    metaDescription: "Extrae la paleta de colores dominantes y los códigos HEX/RGB de cualquier imagen en tu navegador. Rápido y privado para diseñadores.",
    seoKeyword: "cuentagotas color de imagen extraer paleta online",
    intro: "Encontrar el color exacto del logotipo de un cliente, de una fotografía de paisaje o de una captura de pantalla es un reto habitual para diseñadores web y artistas digitales.",
    deepDive: "Nuestro algoritmo de agrupación cuantiza los píxeles de la imagen en la RAM de tu equipo para extraer colores principales armónicos y con buen contraste visual.",
    steps: [
      ["Carga la imagen", "Suelta cualquier foto, ilustración o captura de pantalla."],
      ["Revisa la paleta", "Consulta la paleta dominante extraída automáticamente y el cuentagotas con lupa interactiva."],
      ["Copia los códigos de color", "Haz clic en cualquier muestra para copiar su código HEX o RGB al portapapeles."],
    ],
    faq: [
      ["¿Puedo elegir un único píxel?", "Sí, usa el cuentagotas interactivo del canvas para inspeccionar cualquier píxel."],
    ],
  },
  "how-to-generate-favicon-package-for-website": {
    metaTitle: "Cómo generar un paquete de favicons para tu web gratis | FileOmniTool",
    metaDescription: "Crea favicon.ico multirresolución, iconos Apple Touch e iconos para el manifiesto web de Android, con el código HTML listo, en tu navegador.",
    seoKeyword: "generador favicon ico multirresolución apple touch online",
    intro: "Una web profesional debe mostrar bien su icono en todas partes: pestañas del navegador, marcadores, resultados de Google, pantalla de inicio de iPhone y lanzadores de PWA en Android. Crear todos esos tamaños a mano lleva horas; nuestro generador lo hace en dos segundos.",
    deepDive: "El generador crea un contenedor ICO multirresolución, los archivos PNG y un fragmento HTML optimizado con las etiquetas meta, todo empaquetado en un único ZIP con JSZip.",
    steps: [
      ["Carga un logotipo cuadrado", "Selecciona el logotipo de tu marca (se recomienda PNG o SVG de al menos 512×512)."],
      ["Previsualiza los iconos", "Comprueba cómo se ven en las pestañas del navegador, en los resultados de Google y en la pantalla de inicio de iOS."],
      ["Descarga el ZIP completo", "Descarga el paquete ZIP con favicon.ico, los tamaños 16×16, 32×32, 180×180, 192×192 y 512×512, y el código HTML."],
    ],
    faq: [
      ["¿Por qué Google muestra un icono genérico en lugar del mío?", "Google guarda en caché los favicons hasta 7 días. Asegúrate de declarar icon-48.png y espera a que se actualice la caché."],
    ],
  },
  "how-to-crop-photos-aspect-ratio-online": {
    metaTitle: "Cómo recortar fotos por relación de aspecto gratis | FileOmniTool",
    metaDescription: "Recorta imágenes a proporciones estándar 1:1, 16:9 y 9:16 o a medida en tu navegador, sin subir nada.",
    seoKeyword: "recortar foto relación de aspecto 1:1 16:9 online gratis",
    intro: "Las redes sociales tienen requisitos estrictos de proporción. Si subes fotos sin recortar, el recorte automático al centro puede cortar cabezas o textos importantes. Recortar a mano garantiza que el protagonista quede perfectamente encuadrado.",
    deepDive: "El recorte con canvas de HTML5 extrae directamente en memoria la zona elegida de la imagen y genera archivos JPEG, PNG o WebP nítidos.",
    steps: [
      ["Carga la foto", "Selecciona tu archivo de imagen."],
      ["Elige una proporción", "Haz clic en 1:1 (cuadrado), 16:9 (horizontal tipo YouTube) o 9:16 (vertical para stories)."],
      ["Ajusta y recorta", "Coloca el área de recorte y haz clic en “Recortar y guardar”."],
    ],
    faq: [
      ["¿Qué formato elijo?", "JPEG para fotos normales; PNG para gráficos con texto nítido o transparencia."],
    ],
  },
  "how-to-blur-photos-and-censor-faces-data": {
    metaTitle: "Cómo difuminar fotos y censurar datos privados | FileOmniTool",
    metaDescription: "Difumina imágenes completas o censura zonas sensibles (caras, matrículas, documentos) en tu navegador con total privacidad.",
    seoKeyword: "difuminar foto censurar cara matrícula online",
    intro: "Publicar fotos con números de tarjeta, direcciones, matrículas o caras de menores sin su consentimiento puede acabar en suplantación de identidad y problemas legales. Censura esas zonas en segundos antes de publicar.",
    deepDive: "El desenfoque de caja del canvas aplica un filtro de convolución matemática directamente sobre los píxeles y destruye de forma permanente la información confidencial.",
    steps: [
      ["Carga la imagen", "Suelta tu captura o foto en la herramienta."],
      ["Elige el modo de censura", "Selecciona “Censura por zona” y coloca la máscara de desenfoque sobre caras o textos sensibles."],
      ["Descarga la imagen censurada", "Guarda la imagen difuminada de forma segura."],
    ],
    faq: [
      ["¿Alguien puede revertir la zona difuminada?", "No, los píxeles originales de esa zona se sobrescriben de forma permanente."],
    ],
  },
  "how-to-invert-colors-negative-photo-online": {
    metaTitle: "Cómo invertir los colores de una foto (negativo) gratis | FileOmniTool",
    metaDescription: "Invierte los colores de una imagen y crea un efecto negativo en tu navegador. Ideal para partituras en modo oscuro y retoques artísticos.",
    seoKeyword: "invertir colores foto efecto negativo online gratis",
    intro: "Invertir los colores convierte el blanco en negro y el negro en blanco, y cambia cada tono por su complementario. Es especialmente útil para leer partituras muy blancas en salas de concierto a oscuras sin forzar la vista.",
    deepDive: "El navegador recorre cada píxel y calcula `255 - R`, `255 - G` y `255 - B` en tiempo real, sin tocar el canal alfa de transparencia.",
    steps: [
      ["Carga la imagen", "Suelta tu foto o diagrama en la herramienta."],
      ["Negativo al instante", "El navegador recalcula los canales RGB (255 − valor) al momento."],
      ["Descarga la foto invertida", "Haz clic en “Descargar imagen invertida” y guarda el archivo."],
    ],
    faq: [
      ["¿Funciona con diagramas y dibujos en blanco y negro?", "Sí, consigue al instante un aspecto de plano en modo oscuro muy nítido."],
    ],
  },
  "how-to-flip-mirror-photos-horizontally-vertically": {
    metaTitle: "Cómo voltear y reflejar fotos online gratis | FileOmniTool",
    metaDescription: "Refleja imágenes en horizontal o voltéalas en vertical en tu navegador, sin subir nada. Rápido, gratis y privado.",
    seoKeyword: "voltear reflejar foto horizontal vertical online gratis",
    intro: "Muchas cámaras frontales de móvil invierten automáticamente los selfis, así que el texto de una camiseta o un logotipo se lee al revés. Con nuestra herramienta gratuita recuperas la perspectiva real con un clic.",
    deepDive: "La transformación de coordenadas del canvas `ctx.scale(-1, 1)` refleja la matriz de píxeles sin comprimir ni remuestrear la imagen.",
    steps: [
      ["Carga la foto", "Suelta tu selfi o imagen en la herramienta."],
      ["Refleja o voltea", "Activa el reflejo horizontal o el volteo vertical y mira el resultado en directo."],
      ["Descarga la foto volteada", "Haz clic en “Guardar imagen volteada” para descargarla."],
    ],
    faq: [
      ["¿Puedo voltear en horizontal y vertical a la vez?", "Sí, puedes combinar ambas opciones."],
    ],
  },
  "how-to-convert-photos-to-black-and-white-online": {
    metaTitle: "Cómo pasar fotos a blanco y negro online gratis | FileOmniTool",
    metaDescription: "Convierte fotos en color en imágenes en blanco y negro con buen contraste directamente en tu navegador, sin subir nada.",
    seoKeyword: "pasar foto a blanco y negro online gratis",
    intro: "La fotografía en blanco y negro elimina la distracción del color y resalta texturas, expresiones y la luz más dramática. Para lograr un retrato monocromo impactante no necesitas una suscripción a Lightroom.",
    deepDive: "El motor de desaturación calcula la luminancia ponderando cada canal de color, para dar profundidad a las sombras y luz a los tonos de piel.",
    steps: [
      ["Carga la foto en color", "Selecciona un retrato, un paisaje o cualquier instantánea."],
      ["Ajusta contraste y brillo", "Mueve los controles de contraste y brillo para realzar luces y sombras."],
      ["Descarga la foto en blanco y negro", "Descarga tu imagen monocroma con acabado profesional."],
    ],
    faq: [
      ["¿Puedo ajustar la intensidad del blanco y negro?", "Sí, usa el control de escala de grises desde 0 % (color completo) hasta 100 % (monocromo puro)."],
    ],
  },
  "how-to-convert-images-to-base64-data-uri": {
    metaTitle: "Cómo convertir imágenes a Base64 online gratis | FileOmniTool",
    metaDescription: "Convierte imágenes PNG, JPG y SVG en cadenas Base64 Data URI, etiquetas img de HTML y fragmentos CSS directamente en tu navegador.",
    seoKeyword: "convertir imagen a base64 data uri html online gratis",
    intro: "Incrustar imágenes como Data URI en Base64 elimina peticiones HTTP adicionales, acelera la carga de los iconos críticos y hace que los boletines por correo en HTML sean totalmente autónomos.",
    deepDive: "La API FileReader del navegador procesa el archivo en local sin transmitirlo por la red, de modo que tus recursos sensibles no quedan expuestos.",
    steps: [
      ["Carga la imagen", "Suelta tu logotipo, icono o foto."],
      ["Codificación instantánea", "El navegador convierte los bytes binarios en caracteres ASCII Base64."],
      ["Copia el fragmento", "Copia el Data URI completo, la etiqueta HTML <img> o el fragmento CSS background-image."],
    ],
    faq: [
      ["¿Base64 aumenta el tamaño del archivo?", "Sí, la codificación Base64 añade aproximadamente un 33 % respecto al binario original."],
    ],
  },
  "how-to-convert-audio-files-mp3-wav": {
    metaTitle: "Cómo convertir audio a MP3 online gratis | FileOmniTool",
    metaDescription: "Guía paso a paso para convertir grabaciones de audio a MP3 o WAV en tu navegador con la Web Audio API.",
    seoKeyword: "convertir audio a mp3 online gratis sin programas",
    intro: "Las notas de voz del móvil suelen guardarse en M4A o AAC, formatos que muchos equipos de coche, reproductores MP3 antiguos y programas de edición no abren. Convertirlas al universal MP3 garantiza que se reproduzcan en cualquier sitio.",
    deepDive: "El navegador decodifica el audio con el AudioContext nativo y usa el codificador LAME MP3 compilado en WebAssembly para generar el archivo en la RAM de tu equipo.",
    steps: [
      ["Selecciona el archivo de audio", "Suelta tu archivo de audio (M4A, AAC, OGG, WAV, FLAC)."],
      ["Elige bitrate y formato", "Selecciona MP3 (128, 192 o 320 kbps) o WAV sin pérdida."],
      ["Descarga la pista convertida", "Haz clic en “Convertir audio” y descarga tu archivo compatible."],
    ],
    faq: [
      ["¿192 kbps es buena calidad?", "Sí, 192 kbps ofrece una calidad prácticamente de CD para música y grabaciones de voz."],
    ],
  },
  "how-to-trim-cut-audio-mp3-online": {
    metaTitle: "Cómo recortar y cortar audio MP3 online gratis | FileOmniTool",
    metaDescription: "Corta y recorta canciones MP3 y notas de voz en tu navegador con precisión de milisegundos. Gratis y privado.",
    seoKeyword: "recortar cortar audio mp3 online gratis tono de llamada",
    intro: "Ya quieras sacar un estribillo pegadizo de 30 segundos para el tono de llamada del móvil o eliminar silencios incómodos de un pódcast de entrevistas, recortar audio online lleva menos de un minuto.",
    deepDive: "Los búferes de audio se cortan en memoria con precisión de milisegundos y se codifican limpiamente, sin chasquidos en los extremos.",
    steps: [
      ["Carga la pista de audio", "Selecciona tu MP3 o archivo de audio para ver los controles."],
      ["Fija inicio y final", "Introduce los segundos o minutos exactos de inicio y final del corte."],
      ["Exporta el fragmento", "Haz clic en “Recortar audio” y descarga tu tono personalizado."],
    ],
    faq: [
      ["¿Cuánto debe durar un tono de llamada?", "Lo habitual en iPhone y Android son entre 20 y 30 segundos."],
    ],
  },
  "how-to-extract-audio-from-video-mp4": {
    metaTitle: "Cómo extraer el audio de un vídeo online gratis | FileOmniTool",
    metaDescription: "Extrae la banda sonora en MP3 de vídeos MP4, MOV y WebM en tu navegador, sin subir archivos de vídeo enormes.",
    seoKeyword: "extraer audio de video mp4 a mp3 online gratis",
    intro: "Los archivos de vídeo son enormes y a menudo pesan varios gigas. Subir un vídeo de 2 GB a un conversor en la nube tarda una eternidad con una conexión normal. Como FileOmniTool funciona en tu navegador, separa el audio en segundos sin subir nada.",
    deepDive: "La cadena de decodificación de vídeo de HTML5 envía las muestras de audio directamente a búferes de Web Audio, sin decodificar los fotogramas, y termina en segundos.",
    steps: [
      ["Carga el vídeo", "Suelta tu archivo MP4, MOV, MKV o WebM."],
      ["Extrae en el navegador", "El navegador extrae la pista de audio sin subir gigas de vídeo."],
      ["Descarga la banda sonora en MP3", "Guarda la pista MP3 directamente en tu dispositivo."],
    ],
    faq: [
      ["¿Sirve para descargar vídeos de YouTube?", "No. FileOmniTool solo procesa vídeos locales que son tuyos y están en tu equipo, respetando plenamente los derechos de autor."],
    ],
  },
  "how-to-boost-audio-volume-louder": {
    metaTitle: "Cómo subir el volumen de un audio online gratis | FileOmniTool",
    metaDescription: "Sube hasta 3 veces el volumen de archivos de audio bajos en tu navegador. Ideal para notas de voz apagadas y grabaciones débiles.",
    seoKeyword: "subir volumen audio online gratis",
    intro: "Si el micrófono del móvil está demasiado lejos de quien habla, la grabación queda apagada y casi inaudible incluso con el volumen al máximo. Aumentar la ganancia devuelve la claridad al audio.",
    deepDive: "La amplificación digital escala la amplitud del audio en coma flotante de 32 bits con un limitador de picos para evitar la distorsión por saturación.",
    steps: [
      ["Carga el audio bajo", "Selecciona el archivo que suena demasiado flojo."],
      ["Elige la ganancia", "Escoge +3 dB, +6 dB (el doble de volumen) o +10 dB."],
      ["Descarga la pista amplificada", "Haz clic en “Amplificar volumen” y descarga tu audio alto y claro."],
    ],
    faq: [
      ["¿Se distorsiona si lo subo demasiado?", "El limitador evita la saturación digital más brusca, pero para la mayoría de grabaciones de voz se recomienda +6 dB."],
    ],
  },
  "how-to-speed-up-slow-down-audio-online": {
    metaTitle: "Cómo cambiar la velocidad de un audio gratis (0,5x – 2x) | FileOmniTool",
    metaDescription: "Cambia la velocidad de reproducción de MP3 y pistas de audio en tu navegador. Acelera clases o ralentiza música.",
    seoKeyword: "acelerar ralentizar audio online gratis",
    intro: "Escuchar a velocidad normal una clase universitaria o una presentación de dos horas consume un tiempo muy valioso. Acelerar la grabación a 1,5x o 1,75x te permite asimilar la información en la mitad de tiempo sin perder comprensión.",
    deepDive: "El OfflineAudioContext nativo genera búferes remuestreados a la nueva velocidad antes de volver a codificarlos en MP3 en la memoria de tu equipo.",
    steps: [
      ["Carga el audio", "Suelta la grabación de tu clase o tu pódcast."],
      ["Elige la velocidad", "Selecciona 1,25x, 1,5x, 1,75x o 2x, o ralentiza a 0,75x."],
      ["Guarda el archivo", "Descarga el MP3 o WAV recodificado al nuevo ritmo."],
    ],
    faq: [
      ["¿Puedo guardar el archivo acelerado en el móvil?", "Sí, descárgalo directamente como MP3 para escucharlo en cualquier app de música o de pódcasts."],
    ],
  },
  "how-to-reverse-audio-song-backwards": {
    metaTitle: "Cómo invertir un audio online gratis (reproducir al revés) | FileOmniTool",
    metaDescription: "Reproduce y exporta canciones y grabaciones de voz al revés en tu navegador. Una herramienta de diseño sonoro rápida, gratis y divertida.",
    seoKeyword: "invertir audio canción al revés online gratis",
    intro: "Reproducir audio al revés (backmasking) fascina desde hace décadas a fans de la música y técnicos de sonido. Tanto si buscas mensajes ocultos en temas de rock como si creas efectos psicodélicos de transición para tus vídeos, invertir audio es muy sencillo.",
    deepDive: "El motor invierte de principio a fin los arrays Float32 de cada canal, conservando intactos la profundidad de bits y el espectro de frecuencias.",
    steps: [
      ["Carga la pista", "Suelta cualquier canción o grabación de voz."],
      ["Invierte en memoria", "Haz clic en “Invertir pista” para dar la vuelta a las muestras de cada canal."],
      ["Escucha y descarga", "Escucha el resultado al revés y descarga tu MP3 invertido."],
    ],
    faq: [
      ["¿Funciona con audios de WhatsApp?", "Sí, guarda la nota de voz en tus archivos y cárgala directamente."],
    ],
  },
  "how-to-convert-stereo-audio-to-mono": {
    metaTitle: "Cómo convertir audio estéreo a mono online gratis | FileOmniTool",
    metaDescription: "Une los canales estéreo en una sola pista mono equilibrada en tu navegador. Corrige audios que suenan por un solo lado y reduce el tamaño.",
    seoKeyword: "convertir audio estéreo a mono online gratis",
    intro: "Al grabar entrevistas con un único micrófono direccional, el sonido suele quedar totalmente en el oído izquierdo o en el derecho, lo que resulta muy molesto con auriculares. Pasarlo a mono lo centra perfectamente.",
    deepDive: "Eliminar el segundo canal redundante ahorra hasta un 50 % de bitrate y de espacio sin reducir la fidelidad de la voz.",
    steps: [
      ["Carga el audio estéreo", "Selecciona tu archivo de dos canales."],
      ["Une los canales", "El navegador calcula `(Izquierdo + Derecho) / 2` en un único canal."],
      ["Descarga el MP3 mono", "Descarga tu pista mono centrada, hasta un 50 % más ligera."],
    ],
    faq: [
      ["¿Se oirá igual por los dos auriculares?", "Sí, el audio mono envía la misma señal equilibrada al altavoz izquierdo y al derecho."],
    ],
  },
  "how-to-clean-phone-speakers-water-eject-tone": {
    metaTitle: "Cómo sacar el agua del altavoz del móvil (sonido de 165 Hz) | FileOmniTool",
    metaDescription: "Arregla el altavoz del móvil que suena apagado con el tono de 165 Hz para expulsar agua. Sin arroz ni servicio técnico.",
    seoKeyword: "limpiar altavoz móvil expulsar agua sonido 165hz gratis",
    intro: "Cuando el iPhone o el Android se moja (incluso los modelos resistentes al agua), suelen quedar gotitas atrapadas en la rejilla del altavoz. El sonido se oye lejano, con chasquidos y apagado. El Apple Watch usa sonido para expulsar el agua, y tú puedes aplicar la misma técnica en cualquier smartphone.",
    deepDive: "Una onda sinusoidal pura de 165 Hz entra en resonancia con la membrana de los pequeños altavoces de los móviles y mueve el máximo de aire posible para empujar el líquido hacia fuera.",
    steps: [
      ["Coloca el móvil", "Sube el volumen al máximo y orienta los altavoces inferiores hacia abajo, sobre un paño."],
      ["Reproduce el tono de 165 Hz", "Haz clic en el preajuste “Expulsar agua 165 Hz” y pulsa “Reproducir tono” durante 30 a 60 segundos."],
      ["Revisa y prueba", "Las vibraciones empujan las gotas fuera de la rejilla del altavoz. Sécala con el paño."],
    ],
    faq: [
      ["¿De verdad funciona el arroz?", "No. Apple desaconseja oficialmente el arroz, porque el polvo de almidón puede obstruir los puertos y no elimina las gotas retenidas por la tensión superficial en el altavoz."],
      ["¿Puede dañar el altavoz del móvil?", "No, 165 Hz está dentro del rango de funcionamiento seguro de los altavoces de móvil estándar."],
    ],
  },
  "how-to-convert-excel-xls-xlsx-to-csv-json": {
    metaTitle: "Cómo convertir Excel a CSV o JSON online gratis | FileOmniTool",
    metaDescription: "Convierte hojas de cálculo XLSX y XLS en datos CSV o JSON en tu navegador. Rápido, gratis y sin subir nada a servidores.",
    seoKeyword: "convertir excel xlsx a csv json online gratis",
    intro: "Las hojas de cálculo financieras y las listas de clientes suelen contener datos de empresa muy sensibles. Subir archivos de Excel a conversores web de terceros puede vulnerar el RGPD y las políticas internas de cumplimiento. FileOmniTool procesa las hojas directamente en la RAM de tu navegador.",
    deepDive: "El motor de hojas de cálculo en WebAssembly decodifica la estructura XML del libro y las celdas en tu navegador y genera CSV limpios conformes con el RFC.",
    steps: [
      ["Carga el archivo de Excel", "Suelta tu archivo .xlsx o .xls en el conversor."],
      ["Elige hoja y formato", "Selecciona la hoja que quieres y el formato CSV o JSON."],
      ["Descarga los datos convertidos", "Haz clic en “Convertir” y descarga tu archivo limpio, listo para una base de datos."],
    ],
    faq: [
      ["¿Funciona con libros de varias hojas?", "Sí, puedes elegir cualquier pestaña de tu hoja de cálculo."],
    ],
  },
  "how-to-convert-word-docx-to-html-text": {
    metaTitle: "Cómo convertir DOCX a HTML o texto online gratis | FileOmniTool",
    metaDescription: "Convierte documentos Word DOCX en HTML limpio o texto plano en tu navegador, sin licencias de Microsoft Office.",
    seoKeyword: "convertir word docx a html texto online gratis",
    intro: "Los documentos de Microsoft Word suelen llevar etiquetas de estilo XML propietarias y desordenadas que rompen el diseño de una web. Convertir el DOCX directamente a HTML semántico y limpio ahorra horas de maquetación manual.",
    deepDive: "El analizador mammoth, que se ejecuta en tu navegador, traduce los estilos de título de Word a etiquetas estándar `<p>`, `<h1>`, `<h2>` y `<ul>`, sin CSS en línea innecesario.",
    steps: [
      ["Carga el documento de Word", "Selecciona tu archivo .docx de Microsoft Word."],
      ["Elige HTML o texto", "Escoge HTML para conservar títulos y listas, o texto plano."],
      ["Descarga el resultado", "Copia el texto convertido o descarga el archivo HTML resultante."],
    ],
    faq: [
      ["¿Necesito tener Microsoft Office instalado?", "No, toda la conversión se hace en tu navegador, sin instalar ningún programa."],
    ],
  },
  "how-to-preview-edit-markdown-online": {
    metaTitle: "Editor de Markdown con vista previa en vivo gratis | FileOmniTool",
    metaDescription: "Edita y previsualiza Markdown en tiempo real con pantalla dividida. Exporta a HTML con formato o descarga el archivo .md.",
    seoKeyword: "editor markdown vista previa html exportar online gratis",
    intro: "Markdown es el formato estándar de la documentación técnica, los README de GitHub, las bases de conocimiento de Obsidian y las notas de Notion. Contar con un editor rápido, limpio y con vista previa instantánea es fundamental.",
    deepDive: "El compilador interpreta GitHub Flavored Markdown (GFM), con listas de tareas, tablas, texto tachado y bloques de código, en la memoria de tu equipo.",
    steps: [
      ["Escribe o pega Markdown", "Escribe la sintaxis Markdown en el panel izquierdo."],
      ["Vista previa en pantalla dividida", "Mira cómo se muestran en vivo títulos, tablas, citas y bloques de código."],
      ["Exporta HTML o Markdown", "Copia el HTML generado o guarda tu archivo .md en el disco."],
    ],
    faq: [
      ["¿Puedo exportarlo como página HTML?", "Sí, puedes copiar todo el código HTML con un solo clic."],
    ],
  },
  "how-to-convert-json-to-csv-bidirectional": {
    metaTitle: "Convertir JSON a CSV y CSV a JSON online gratis | FileOmniTool",
    metaDescription: "Conversión bidireccional entre JSON y CSV en tu navegador. Rápida, privada y compatible con cadenas entre comillas.",
    seoKeyword: "convertir json a csv csv a json online gratis",
    intro: "Las API REST y las copias de seguridad de bases de datos entregan los datos en JSON, mientras que analistas y responsables de negocio necesitan archivos CSV que se abran en Excel. Pasar de un formato a otro es una tarea diaria para los perfiles técnicos.",
    deepDive: "El analizador toma las claves únicas de los objetos como columnas de cabecera del CSV y escapa comas y saltos de línea internos según el RFC 4180.",
    steps: [
      ["Pega los datos o carga un archivo", "Pega tu array JSON o tu texto CSV."],
      ["Elige el sentido", "Selecciona el modo JSON a CSV o CSV a JSON."],
      ["Copia o descarga", "Copia el texto convertido o descarga directamente el archivo .csv o .json."],
    ],
    faq: [
      ["¿Admite objetos JSON anidados?", "Las propiedades anidadas se convierten en texto de forma segura dentro de su celda."],
    ],
  },
  "how-to-convert-csv-to-markdown-table": {
    metaTitle: "Convertir CSV a tabla Markdown online gratis | FileOmniTool",
    metaDescription: "Convierte hojas CSV y TSV en tablas Markdown alineadas en tu navegador, con alineación de texto personalizable.",
    seoKeyword: "convertir csv a tabla markdown online gratis",
    intro: "Escribir tablas Markdown a mano con barras verticales (|) y guiones (-) es tedioso y es fácil que se desalineen. Convertir directamente los datos de tu hoja de cálculo genera tablas bien formateadas en segundos.",
    deepDive: "Nuestro algoritmo calcula el ancho máximo de cada columna y rellena las celdas con espacios para que el texto fuente se lea bien incluso en un editor de texto plano.",
    steps: [
      ["Pega los datos CSV", "Pega las filas de tu hoja de cálculo o carga un archivo .csv."],
      ["Configura la alineación", "Elige alineación a la izquierda (:---), centrada (:---:) o a la derecha (---:)."],
      ["Copia la tabla Markdown", "Copia la tabla con separadores, perfectamente espaciada y lista para pegar."],
    ],
    faq: [
      ["¿Sirve para los README de GitHub?", "Sí, es totalmente compatible con GitHub Flavored Markdown (GFM)."],
    ],
  },
  "how-to-convert-text-to-pdf-online": {
    metaTitle: "Convertir texto TXT a PDF online gratis (A4 paginado) | FileOmniTool",
    metaDescription: "Transforma notas en texto plano en documentos PDF A4 limpios y paginados en tu navegador. Elige tamaño de letra y título.",
    seoKeyword: "convertir texto txt a pdf online gratis",
    intro: "Enviar archivos .txt sin formato a clientes o profesores da una imagen poco profesional. Convertir tu texto en un PDF A4 paginado y con márgenes tipográficos adecuados le da al instante una presentación cuidada.",
    deepDive: "El motor vectorial pdf-lib calcula de forma dinámica los saltos de línea y de página, y reparte los párrafos entre páginas con naturalidad.",
    steps: [
      ["Escribe o pega el texto", "Pega tus notas o tu documento en el editor."],
      ["Personaliza título y letra", "Si quieres, añade un título en negrita y elige el tamaño de letra."],
      ["Descarga el PDF paginado", "Haz clic en “Generar documento PDF” y descarga tu archivo A4."],
    ],
    faq: [
      ["¿Se suben mis notas a algún servidor?", "No, el PDF se genera al 100 % en la RAM de tu navegador."],
    ],
  },
  "how-to-count-words-characters-reading-time": {
    metaTitle: "Contador de palabras y caracteres online gratis | FileOmniTool",
    metaDescription: "Cuenta palabras, caracteres con y sin espacios, frases, párrafos y tiempo de lectura en tiempo real.",
    seoKeyword: "contador de palabras caracteres tiempo de lectura online gratis",
    intro: "Desde trabajos universitarios con un límite estricto de 3000 palabras hasta publicaciones en X (280 caracteres) o artículos de blog para SEO (más de 1500 palabras), conocer al momento las cifras exactas de tu texto es clave para redactores y profesionales del marketing.",
    deepDive: "Nuestro tokenizador filtra correctamente los espacios y la puntuación Unicode en distintos idiomas y ofrece recuentos exactos de caracteres y sílabas.",
    steps: [
      ["Pega tu texto", "Pega o escribe directamente en el editor del contador."],
      ["Consulta las cifras en vivo", "Mira el total de palabras, caracteres (con y sin espacios), frases y tiempo de lectura."],
      ["Ajusta o copia", "Pule tu texto hasta cumplir los límites académicos o de redes sociales."],
    ],
    faq: [
      ["¿Qué diferencia hay entre caracteres con y sin espacios?", "Los caracteres con espacios cuentan también los espacios en blanco; editoriales y medios suelen medir la extensión en caracteres con espacios."],
    ],
  },
  "how-to-compare-text-find-differences-diff": {
    metaTitle: "Comparador de textos: encuentra diferencias online gratis | FileOmniTool",
    metaDescription: "Resalta adiciones, eliminaciones y cambios entre dos textos en tu navegador. Rápido, gratis y privado.",
    seoKeyword: "comparar dos textos resaltar diferencias diff online gratis",
    intro: "Al revisar versiones de contratos, condiciones legales o fragmentos de código, detectar a simple vista un cambio de una sola palabra es casi imposible. Una herramienta de comparación automática encuentra todos los cambios en milisegundos.",
    deepDive: "El algoritmo de diferencias de Myers calcula la secuencia mínima de ediciones entre ambos textos en la memoria de JavaScript de tu equipo.",
    steps: [
      ["Pega el texto original", "Pega la primera versión a la izquierda."],
      ["Pega el texto modificado", "Pega la versión actualizada a la derecha."],
      ["Revisa las diferencias", "El verde marca el texto añadido; el rojo, los fragmentos eliminados o modificados."],
    ],
    faq: [
      ["¿Puedo comparar archivos de código?", "Sí, funciona perfectamente con JavaScript, Python, HTML, CSS y archivos de configuración."],
    ],
  },
  "how-to-generate-strong-secure-passwords": {
    metaTitle: "Generador de contraseñas seguras online gratis | FileOmniTool",
    metaDescription: "Genera contraseñas criptográficas imposibles de adivinar en tu navegador con la Web Crypto API. 100 % privado, nunca se transmiten.",
    seoKeyword: "generador contraseñas seguras online gratis criptográfico",
    intro: "Usar contraseñas simples como “Password123” o repetir la misma en varias webs es la principal causa del robo de cuentas online. Una contraseña robusta de 16 caracteres variados tardaría millones de años en descifrarse por fuerza bruta.",
    deepDive: "En lugar del pseudoaleatorio `Math.random()`, FileOmniTool usa `window.crypto.getRandomValues()`, que obtiene entropía no determinista del hardware de tu propio dispositivo.",
    steps: [
      ["Elige longitud y caracteres", "Selecciona 16 o 24 caracteres y activa mayúsculas, números y símbolos."],
      ["Genera con entropía criptográfica", "Haz clic en “Generar contraseña” para obtenerla a partir de la entropía del hardware."],
      ["Copia al portapapeles", "Copia la nueva contraseña directamente en tu gestor de contraseñas."],
    ],
    faq: [
      ["¿Se guardan las contraseñas en vuestro servidor?", "Nunca. La contraseña solo existe en la RAM de tu navegador hasta que recargas la pestaña."],
    ],
  },
  "how-to-generate-bulk-uuid-v4-online": {
    metaTitle: "Generador de UUID v4 en lote online gratis (RFC 4122) | FileOmniTool",
    metaDescription: "Genera hasta 100 identificadores UUID v4 conformes con el RFC 4122 en tu navegador con aleatoriedad criptográfica.",
    seoKeyword: "generador uuid v4 en lote online gratis rfc 4122",
    intro: "Los identificadores únicos universales (UUID v4) tienen una probabilidad de colisión prácticamente nula en bases de datos distribuidas, microservicios y analítica de apps. Un generador por lotes rápido en el navegador agiliza las pruebas.",
    deepDive: "UUID v4 reserva 122 bits aleatorios generados con `crypto.randomUUID()`, con los bits de versión y variante exactos.",
    steps: [
      ["Elige la cantidad", "Indica cuántos UUID necesitas (de 1 a 50)."],
      ["Genera los identificadores", "Haz clic en “Generar UUID” para obtener cadenas conformes con el RFC 4122."],
      ["Copia al portapapeles", "Copia UUID sueltos o todo el lote con un solo clic."],
    ],
    faq: [
      ["¿Pueden coincidir dos UUID generados?", "La probabilidad es prácticamente nula (menos de una entre un trillón)."],
    ],
  },
  "how-to-calculate-cryptographic-hash-sha256": {
    metaTitle: "Generador de hash criptográfico (SHA-256, SHA-512, MD5) | FileOmniTool",
    metaDescription: "Calcula hashes SHA-256, SHA-512, SHA-1 y MD5 en tu navegador con la Web Crypto API. Rápido, gratis y privado.",
    seoKeyword: "calcular hash sha256 sha512 md5 online gratis",
    intro: "Un hash criptográfico genera una huella digital determinista y de longitud fija a partir de cualquier texto. Es la base del almacenamiento de contraseñas, las firmas digitales y la verificación de la integridad de los datos.",
    deepDive: "SHA-256 se calcula de forma nativa con `crypto.subtle.digest()`, con la máxima velocidad y sin exponer ningún dato en la nube.",
    steps: [
      ["Introduce el texto", "Escribe o pega el texto o token que quieres convertir en hash."],
      ["Cálculo en tiempo real", "El navegador calcula SHA-256, SHA-512, SHA-1 y MD5 al momento."],
      ["Copia el hash", "Haz clic en el botón de copiar del formato que necesites."],
    ],
    faq: [
      ["¿Se puede revertir un hash SHA-256?", "No, los hashes criptográficos son funciones matemáticas de un solo sentido."],
    ],
  },
  "how-to-create-permanent-free-qr-codes": {
    metaTitle: "Generador de códigos QR gratis que no caducan | FileOmniTool",
    metaDescription: "Crea códigos QR estáticos para enlaces web, conexión wifi automática y texto en tu navegador. 100 % gratis y sin fecha de caducidad.",
    seoKeyword: "generador código qr gratis permanente sin caducidad",
    intro: "Muchos generadores de QR comerciales te dejan crear el código y lo desactivan dos semanas después para exigirte una suscripción mensual. FileOmniTool genera códigos QR estáticos de verdad, que guardan tus datos directamente en los píxeles de la matriz: duran para siempre y sin cuotas.",
    deepDive: "Los QR estáticos codifican los bytes UTF-8 directamente en la matriz estándar con corrección de errores Reed-Solomon. No interviene ningún servidor de redirección intermedio.",
    steps: [
      ["Elige el tipo de QR", "Escoge URL de sitio web, conexión wifi automática o texto."],
      ["Introduce los datos", "Pega tu enlace o escribe el nombre y la contraseña de la red wifi."],
      ["Descarga el PNG permanente", "Descarga tu código QR, listo para imprimir en cartas, tarjetas y folletos."],
    ],
    faq: [
      ["¿Este código QR caducará algún día?", "Nunca. Mientras exista el papel impreso, cualquier móvil podrá escanearlo."],
    ],
  },
  "how-to-encode-decode-base64-text": {
    metaTitle: "Codificador y decodificador Base64 online gratis (UTF-8) | FileOmniTool",
    metaDescription: "Codifica y decodifica texto en Base64 en tu navegador, con soporte UTF-8 para tildes y eñes. Rápido, gratis y privado.",
    seoKeyword: "codificar decodificar base64 online utf8 gratis",
    intro: "Base64 representa datos binarios con 64 caracteres ASCII imprimibles, para que viajen intactos a través de pasarelas de correo antiguas y parámetros de URL sin que se corrompa ningún byte.",
    deepDive: "El `btoa()` estándar falla con caracteres acentuados como á o ñ. FileOmniTool usa los modernos TextEncoder y TextDecoder para una conversión UTF-8 impecable.",
    steps: [
      ["Pega el texto o el Base64", "Introduce el texto en el área de entrada."],
      ["Elige codificar o decodificar", "Alterna entre codificar a Base64 y decodificar a texto legible."],
      ["Copia el resultado", "Copia la cadena convertida con un clic."],
    ],
    faq: [
      ["¿Base64 es un método de cifrado?", "No, Base64 es un formato de codificación para transportar datos, no un cifrado seguro."],
    ],
  },
  "how-to-convert-text-case-uppercase-lowercase-camelcase": {
    metaTitle: "Convertidor de mayúsculas y minúsculas online | FileOmniTool",
    metaDescription: "Cambia texto entre MAYÚSCULAS, minúsculas, Tipo Título, camelCase y snake_case en tu navegador, gratis.",
    seoKeyword: "convertir mayúsculas minúsculas tipo título online gratis",
    intro: "Escribir sin querer un párrafo entero con el Bloq Mayús activado es desesperante. En lugar de borrarlo y volver a escribirlo a mano, un clic cambia las mayúsculas al instante.",
    deepDive: "Nuestro algoritmo aplica la conversión de mayúsculas y minúsculas de Unicode completa, de modo que los caracteres acentuados se convierten correctamente (á → Á, ñ → Ñ).",
    steps: [
      ["Pega tu texto", "Pega las palabras o párrafos que quieres transformar."],
      ["Elige la transformación", "Haz clic en “TODO MAYÚSCULAS”, “todo minúsculas”, “Iniciales En Mayúscula” o “camelCase”."],
      ["Copia el texto convertido", "Copia el texto actualizado directamente al portapapeles."],
    ],
    faq: [
      ["¿Sirve a los programadores para nombres de variables?", "Sí, incluye camelCase, snake_case y kebab-case para refactorizar código al instante."],
    ],
  },
  "how-to-sort-deduplicate-lists-online": {
    metaTitle: "Limpiador de listas: ordenar y quitar duplicados gratis | FileOmniTool",
    metaDescription: "Elimina líneas duplicadas, ordena alfabéticamente (A-Z / Z-A) y quita espacios sobrantes de tus listas en el navegador.",
    seoKeyword: "ordenar eliminar líneas duplicadas limpiar lista online gratis",
    intro: "Limpiar a mano, fila por fila, listas de correo o exportaciones de bases de datos es agotador y propenso a errores. Un solo email duplicado puede acabar en quejas por spam. La deduplicación automática limpia miles de filas en milisegundos.",
    deepDive: "El algoritmo de deduplicación basado en Set normaliza mayúsculas y espacios antes de filtrar los elementos únicos e indica cuántos duplicados se han eliminado.",
    steps: [
      ["Pega tu lista", "Pega en el editor las filas de emails, nombres o valores."],
      ["Elige las acciones de limpieza", "Haz clic en “Eliminar duplicados” y “Ordenar A-Z”."],
      ["Copia la lista limpia", "Copia la lista ordenada y sin duplicados al portapapeles."],
    ],
    faq: [
      ["¿Elimina las líneas en blanco?", "Sí, las líneas vacías y los espacios finales se eliminan automáticamente."],
    ],
  },
  "how-to-generate-lorem-ipsum-placeholder-text": {
    metaTitle: "Generador de texto Lorem Ipsum online gratis | FileOmniTool",
    metaDescription: "Genera párrafos, frases y palabras de Lorem Ipsum en latín clásico en tu navegador, gratis.",
    seoKeyword: "generador lorem ipsum texto de relleno online gratis",
    intro: "Desde el siglo XVI, impresores y diseñadores gráficos usan el texto pseudolatino Lorem Ipsum para que quien mira se fije en la maquetación, las tipografías y la jerarquía visual sin distraerse con un contenido legible.",
    deepDive: "Basado en el tratado filosófico de Cicerón “De finibus bonorum et malorum” (45 a. C.), el Lorem Ipsum moderno imita la distribución natural de las letras de un texto real.",
    steps: [
      ["Elige extensión y unidad", "Selecciona cuántos párrafos, frases o palabras necesitas."],
      ["Activa las etiquetas HTML", "Si eres desarrollador, puedes envolver el texto en etiquetas `<p>`."],
      ["Copia al portapapeles", "Copia el texto latino directamente en Figma, InDesign o tu código."],
    ],
    faq: [
      ["¿Empieza siempre por “Lorem ipsum dolor sit amet”?", "Puedes elegir si incluir o no la icónica frase inicial."],
    ],
  },
  "how-to-format-validate-beautify-json-online": {
    metaTitle: "Formateador y validador de JSON online gratis | FileOmniTool",
    metaDescription: "Embellece, indenta, minifica y valida JSON en tu navegador, con los errores de sintaxis marcados al instante. Rápido y privado.",
    seoKeyword: "formatear validar minificar json online gratis",
    intro: "Las aplicaciones web se comunican con JSON comprimido en una sola línea. Leer o depurar esas cadenas sin saltos de línea es una tarea imposible. Nuestra herramienta formatea el código y detecta al momento comas o llaves que faltan.",
    deepDive: "JSON.parse() y JSON.stringify() nativos se ejecutan en el motor JavaScript de tu navegador, así que tus tokens de API privados no quedan expuestos.",
    steps: [
      ["Pega el JSON", "Pega la respuesta de tu API o el texto JSON sin formato."],
      ["Elige la indentación", "Haz clic en 2 espacios, 4 espacios o Minificar para dejarlo en una línea."],
      ["Copia o descarga", "Copia el JSON formateado o descarga un archivo .json limpio."],
    ],
    faq: [
      ["¿Muestra dónde está el error de sintaxis?", "Sí, los errores de sintaxis se muestran al instante con un mensaje preciso."],
    ],
  },
  "how-to-convert-xml-to-json-online": {
    metaTitle: "Convertir XML a JSON y JSON a XML online gratis | FileOmniTool",
    metaDescription: "Convierte documentos XML en objetos JSON y viceversa en tu navegador con DOMParser. Rápido, gratis y privado.",
    seoKeyword: "convertir xml a json json a xml online gratis",
    intro: "Los sistemas empresariales antiguos y la facturación electrónica (como Facturae) usan XML, mientras que las apps web y móviles modernas funcionan con JSON. Convertir estructuras XML a JSON permite integrar sistemas heredados en minutos.",
    deepDive: "El DOMParser nativo del navegador recorre los elementos hijos y los atributos y construye claves JSON limpias conservando los niveles de anidación.",
    steps: [
      ["Pega el XML o el JSON", "Pega tu documento XML en el campo de entrada."],
      ["Análisis automático", "El DOMParser del navegador construye el árbol de objetos equivalente."],
      ["Copia o descarga el resultado", "Copia el código convertido o descarga el archivo .json o .xml."],
    ],
    faq: [
      ["¿Puede convertir de JSON a XML?", "Sí, activa “Invertir dirección” para transformar cualquier objeto JSON en XML estándar."],
    ],
  },
  "how-to-convert-yaml-to-json-online": {
    metaTitle: "Convertidor de YAML a JSON y JSON a YAML gratis | FileOmniTool",
    metaDescription: "Convierte archivos de configuración DevOps entre YAML y JSON en tu navegador. Rápido, gratis y privado para desarrolladores.",
    seoKeyword: "convertir yaml a json json a yaml online gratis",
    intro: "YAML es el formato legible preferido para Docker Compose y los despliegues de Kubernetes, pero muchas herramientas de despliegue y pasarelas de API exigen JSON estricto. Convertir en ambos sentidos sin errores de indentación es fundamental.",
    deepDive: "El análisis, que respeta la indentación, transforma las listas con guiones y los bloques clave-valor de YAML en objetos JavaScript estándar en la RAM de tu equipo.",
    steps: [
      ["Pega la configuración", "Pega tu manifiesto YAML o tu configuración JSON."],
      ["Conversión instantánea", "El analizador en el navegador reconstruye claves, listas y objetos anidados."],
      ["Copia o descarga el archivo", "Copia el resultado o descárgalo como .json o .yaml."],
    ],
    faq: [
      ["¿Están seguras mis variables de entorno secretas?", "Totalmente. La conversión se hace por completo en tu equipo, sin ninguna petición a servidores."],
    ],
  },
  "how-to-analyze-seo-keyword-density-text": {
    metaTitle: "Analizador de densidad de palabras clave SEO gratis | FileOmniTool",
    metaDescription: "Analiza la densidad de palabras clave de tus textos, filtra las palabras vacías y comprueba la frecuencia SEO óptima del 1-3 % en tu navegador.",
    seoKeyword: "analizar densidad palabras clave seo herramienta gratis google",
    intro: "Los algoritmos de los buscadores penalizan las páginas que repiten de forma forzada la búsqueda objetivo (keyword stuffing). Al mismo tiempo, si tu artículo omite por completo la frase clave, Google no entenderá de qué trata. Medir la densidad de palabras clave te da el punto justo.",
    deepDive: "El tokenizador de n-gramas divide el texto en unigramas, bigramas y trigramas y calcula el porcentaje exacto de densidad respecto al total de palabras.",
    steps: [
      ["Pega el texto de tu artículo", "Pega tu entrada de blog o tu texto web en el analizador."],
      ["Filtra las palabras vacías", "Deja activado el filtro de palabras vacías para centrarte en las palabras clave con significado."],
      ["Revisa la tabla de densidad SEO", "Consulta las tablas de 1, 2 y 3 palabras: lo óptimo es una densidad de entre el 1 % y el 3 %."],
    ],
    faq: [
      ["¿Qué hago si la densidad supera el 3,5 %?", "Sustituye algunas apariciones por sinónimos naturales para evitar la sobreoptimización."],
    ],
  },
  "how-to-convert-hex-rgb-cmyk-color-codes": {
    metaTitle: "Convertidor de colores: HEX, RGB, HSL y CMYK gratis | FileOmniTool",
    metaDescription: "Convierte códigos de color entre HEX, RGB, HSL y CMYK para imprenta. Selector interactivo y generación de variables CSS.",
    seoKeyword: "convertir códigos de color hex rgb hsl cmyk online gratis",
    intro: "Los diseñadores web trabajan en HEX y RGB, mientras que las imprentas piden los porcentajes de cuatricromía CMYK. Convertir los colores con precisión evita sorpresas desagradables, como tarjetas de visita impresas que se ven apagadas o sucias en comparación con la pantalla.",
    deepDive: "Las fórmulas de conversión calculan los primarios sustractivos normalizados y optimizan la tinta negra (K), todo en la memoria de tu equipo.",
    steps: [
      ["Elige o introduce un color", "Usa el selector visual o pega tu código HEX (p. ej. #10B981)."],
      ["Ajusta con los controles", "Mueve los controles de rojo, verde y azul hasta dar con el tono exacto."],
      ["Copia el formato que necesitas", "Haz clic en copiar en HEX, RGB, HSL, CMYK o variable CSS."],
    ],
    faq: [
      ["¿Por qué a veces los colores se ven distintos en CMYK?", "Las pantallas emiten luz en RGB, mientras que la tinta refleja la luz. La gama de colores CMYK es algo más reducida."],
    ],
  },
  "how-to-encode-decode-html-entities-online": {
    metaTitle: "Codificador y decodificador de entidades HTML gratis | FileOmniTool",
    metaDescription: "Convierte texto en entidades HTML con nombre o numéricas, o decodifícalas de nuevo a texto legible. Rápido y privado para desarrolladores.",
    seoKeyword: "codificar decodificar entidades html caracteres especiales online gratis",
    intro: "Los navegadores interpretan `<` y `>` como etiquetas HTML y `&` como inicio de una entidad. Si insertas texto con estos caracteres directamente en una página, el diseño se rompe o se abren vulnerabilidades de seguridad. Convertirlos en entidades HTML resuelve ambos problemas.",
    deepDive: "Nuestro conversor gestiona en tu navegador tanto las entidades con nombre (`&copy;`, `&euro;`, `&ntilde;`) como los códigos numéricos decimales.",
    steps: [
      ["Pega el texto o el HTML", "Pega un texto con caracteres especiales o con códigos de entidades HTML."],
      ["Elige codificar o decodificar", "Selecciona Codificar (texto a &amp;) o Decodificar (entidades a texto)."],
      ["Copia el código limpio", "Copia el resultado, listo para tu código HTML."],
    ],
    faq: [
      ["¿Con UTF-8 siguen haciendo falta las entidades HTML?", "Para los caracteres reservados de HTML como `<` y `&`, las entidades son obligatorias sea cual sea la codificación de la página."],
    ],
  },
  "how-to-test-regular-expressions-regex-online": {
    metaTitle: "Probador de expresiones regulares (regex) online | FileOmniTool",
    metaDescription: "Prueba y depura expresiones regulares en tu navegador con flags (g, i, m, s) y desglose de grupos. Patrones incluidos para email y fechas.",
    seoKeyword: "probar expresiones regulares regex online resaltado en tiempo real",
    intro: "Las expresiones regulares son una herramienta potentísima para validar datos, hacer scraping y buscar texto, pero un solo corchete o asterisco mal puesto puede provocar coincidencias desastrosas. Probar el patrón con datos de ejemplo realistas evita errores en producción.",
    deepDive: "La ejecución corre a cargo del motor RegExp nativo de ECMAScript del navegador, lo que garantiza un comportamiento idéntico al de JavaScript y TypeScript en el servidor.",
    steps: [
      ["Escribe el patrón y los flags", "Escribe tu expresión regular entre las barras y activa los flags (g, i, m)."],
      ["Escribe el texto de prueba", "Pega un texto de ejemplo y verás las coincidencias resaltadas en verde al momento."],
      ["Revisa los grupos capturados", "Consulta la tabla detallada con las posiciones de cada coincidencia y los grupos de captura."],
    ],
    faq: [
      ["¿Hay patrones listos para tareas habituales?", "Sí, pulsa los botones predefinidos para email, URL, dirección IPv4 y fechas (DD/MM/AAAA)."],
    ],
  },
  "how-to-generate-seo-url-slugs-online": {
    metaTitle: "Generador de slugs de URL para SEO gratis (kebab-case) | FileOmniTool",
    metaDescription: "Genera slugs de URL limpios y optimizados para SEO a partir del título de tus artículos. Elimina tildes, símbolos y palabras vacías.",
    seoKeyword: "generar slug url seo kebab case online gratis",
    intro: "Los slugs con caracteres especiales, mayúsculas, espacios o tildes codificadas (como `%C3%A1` en lugar de `a`) confunden a los visitantes y transmiten poca confianza en los resultados de Google. Una URL limpia en kebab-case mejora el porcentaje de clics.",
    deepDive: "La normalización Unicode (NFD) elimina los diacríticos y translitera los caracteres antes de filtrar los símbolos, para obtener cadenas kebab-case impecables.",
    steps: [
      ["Escribe el título del artículo", "Escribe o pega el título de tu entrada, con tildes y signos de puntuación."],
      ["Configura las opciones del slug", "Elige el guion (-) como separador y, si quieres, activa la eliminación de palabras vacías."],
      ["Copia el slug SEO", "Copia la cadena limpia separada por guiones, lista para WordPress o Next.js."],
    ],
    faq: [
      ["¿Conviene quitar las preposiciones de las URL?", "Sí, las URL más cortas y centradas en las palabras clave principales funcionan mejor en Google."],
    ],
  },
  "how-to-create-zip-archive-files-online": {
    metaTitle: "Cómo crear archivos ZIP online gratis (en el navegador) | FileOmniTool",
    metaDescription: "Empaqueta y comprime varios archivos en un único ZIP en tu navegador con JSZip. Sin subir nada a servidores.",
    seoKeyword: "crear archivo zip online gratis comprimir",
    intro: "Los programas de correo se atascan cuando adjuntas 30 archivos sueltos y a menudo saltan los límites de adjuntos o los filtros de spam. Reunirlo todo en un único ZIP ordenado hace que compartir sea inmediato y profesional.",
    deepDive: "La compresión en el navegador con JSZip construye estructuras PKZIP estándar en arrays tipados de JavaScript usando el algoritmo Deflate.",
    steps: [
      ["Selecciona los archivos", "Arrastra cualquier combinación de documentos, imágenes y carpetas."],
      ["Comprime en memoria", "JSZip empaqueta y comprime los archivos en la RAM de tu navegador."],
      ["Descarga el ZIP", "Guarda tu archivo .zip, listo para adjuntar a un correo o compartir."],
    ],
    faq: [
      ["¿Hay límites en el tipo de archivo?", "No, puedes incluir PDF, documentos de Word, imágenes, audio y vídeos."],
    ],
  },
  "how-to-extract-zip-archives-online-free": {
    metaTitle: "Cómo descomprimir archivos ZIP online gratis | FileOmniTool",
    metaDescription: "Extrae y descarga archivos de un ZIP en tu navegador. Revisa su contenido de forma segura antes de guardarlo.",
    seoKeyword: "descomprimir extraer zip online gratis privado",
    intro: "Abrir un ZIP desconocido en el ordenador puede ser arriesgado si contiene ejecutables ocultos. Extraer los archivos dentro del entorno aislado del navegador te permite revisar y sacar documentos concretos con seguridad.",
    deepDive: "El motor JSZip lee las cabeceras locales y el directorio central en memoria, sin escribir nada en las cachés temporales del disco del sistema.",
    steps: [
      ["Carga el ZIP", "Suelta tu archivo .zip en el descompresor."],
      ["Explora el contenido", "Consulta la lista completa de archivos del ZIP y el tamaño de cada uno."],
      ["Descarga los archivos que quieras", "Extrae solo los archivos que necesites o descárgalos todos."],
    ],
    faq: [
      ["¿Puedo extraer un solo archivo de un ZIP grande?", "Sí, descarga archivos sueltos sin descomprimir toda la carpeta."],
    ],
  },
  "how-to-calculate-verify-file-checksum-md5-sha256": {
    metaTitle: "Cómo calcular y verificar el checksum de un archivo | FileOmniTool",
    metaDescription: "Calcula los checksums MD5 y SHA-256 de cualquier archivo en tu navegador. Compara los hashes para verificar que una descarga es auténtica e íntegra.",
    seoKeyword: "calcular verificar checksum archivo md5 sha256 online gratis",
    intro: "Al descargar imágenes ISO de sistemas operativos, actualizaciones de firmware o software libre, un fallo de red puede corromper los datos o un atacante puede manipular los archivos en un servidor espejo. Verificar el checksum criptográfico garantiza que el archivo de tu disco es idéntico, byte a byte, al original.",
    deepDive: "SubtleCrypto lee los ArrayBuffers por bloques y genera hashes estándar de 256 bits sin transmitir nada a la nube.",
    steps: [
      ["Selecciona el archivo", "Suelta cualquier archivo descargado (instalador, imagen ISO, ZIP)."],
      ["Consulta los hashes", "El navegador calcula SHA-256, MD5 y SHA-1 en memoria."],
      ["Compara con el checksum oficial", "Pega el checksum publicado por el autor en el campo de comparación para confirmar que coincide al 100 %."],
    ],
    faq: [
      ["¿Y si los checksums no coinciden?", "Si los hashes difieren aunque sea en un carácter, el archivo está dañado o ha sido modificado. Bórralo y vuelve a descargarlo."],
    ],
  },
  "how-to-inspect-binary-files-hex-viewer-dump": {
    metaTitle: "Visor hexadecimal online y volcado de archivos binarios | FileOmniTool",
    metaDescription: "Inspecciona archivos binarios en filas de volcado hexadecimal de 16 bytes con paginación en tu navegador. Rápido, gratis y seguro.",
    seoKeyword: "visor hexadecimal archivo binario volcado online gratis",
    intro: "Cuando un archivo pierde su extensión o esta se daña, los programas se niegan a abrirlo. Examinar sus primeros bytes mágicos (como `FF D8 FF` en JPEG o `50 4B 03 04` en ZIP) con un visor hexadecimal revela al instante su verdadero tipo.",
    deepDive: "La paginación por ventanas de Uint8Array permite mostrar al instante archivos de cualquier tamaño sin ralentizar el navegador.",
    steps: [
      ["Carga el archivo binario", "Suelta cualquier archivo (foto dañada, firmware, ejecutable)."],
      ["Explora la cuadrícula hexadecimal", "Consulta filas de 16 bytes con desplazamiento, bytes en hexadecimal y caracteres ASCII."],
      ["Navega por las páginas y copia", "Recorre las páginas de bytes con fluidez y sin que el navegador se ralentice."],
    ],
    faq: [
      ["¿Ayuda a recuperar archivos dañados?", "Sí, al identificar la cabecera mágica puedes poner la extensión correcta y volver a abrir el archivo."],
    ],
  },
  "how-to-convert-base64-string-to-image-file": {
    metaTitle: "Convertidor de Base64 a imagen online gratis (PNG) | FileOmniTool",
    metaDescription: "Decodifica cadenas Base64 Data URI en imágenes PNG o JPG en tu navegador. Vista previa en vivo y descarga inmediata.",
    seoKeyword: "convertir base64 a imagen png jpg online gratis",
    intro: "Al revisar respuestas JSON de una API, volcados de bases de datos u hojas CSS, es habitual encontrar crípticas cadenas Base64 de imágenes. En lugar de preguntarte qué muestran, decodifícalas en un archivo de imagen para verlas y guardarlas al instante.",
    deepDive: "El navegador decodifica los caracteres Base64 directamente en un blob de imagen y asigna a cada tipo MIME su extensión de archivo exacta.",
    steps: [
      ["Pega el código Base64", "Pega tu cadena Base64 o Data URI (`data:image/png;base64,...`)."],
      ["Vista previa instantánea", "El navegador decodifica los datos y muestra la imagen en vivo."],
      ["Descarga la imagen", "Haz clic en “Descargar imagen” para guardarla como PNG o JPG en tu ordenador."],
    ],
    faq: [
      ["¿Funciona sin el prefijo “data:image”?", "Sí, puedes pegar solo los caracteres Base64: la herramienta detecta el formato automáticamente."],
    ],
  },
  "how-to-convert-srt-to-vtt-subtitles": {
    metaTitle: "Convertir SRT a VTT gratis en el navegador (sin subir) | FileOmniTool",
    metaDescription: "Aprende a convertir subtítulos SRT a WebVTT (.vtt) y viceversa directamente en tu navegador, sin subir nada a la nube.",
    seoKeyword: "convertir srt a vtt gratis sin subir",
    intro: "SRT es el formato de toda la vida de reproductores de escritorio como VLC, pero los reproductores web modernos y el vídeo HTML5 exigen WebVTT. En lugar de subir tus transcripciones a conversores de terceros poco fiables, FileOmniTool adapta la sintaxis de los tiempos directamente en la memoria de tu navegador.",
    deepDive: "WebVTT (Web Video Text Tracks) exige un formato estricto de milisegundos con punto en lugar de coma (00:01:23.456 frente a 00:01:23,456). La conversión en el navegador normaliza los tiempos con expresiones regulares en local, sin latencia de red ni conservación de archivos.",
    steps: [
      ["Selecciona el archivo de subtítulos", "Arrastra tu archivo .srt a la zona de carga o pega directamente el texto de los subtítulos."],
      ["Convierte al instante", "El navegador cambia las comas por puntos y añade la cabecera WEBVTT obligatoria."],
      ["Descarga el .VTT", "Guarda el archivo WebVTT válido, listo para etiquetas de vídeo HTML5 o streaming."],
    ],
    faq: [
      ["¿Puedo convertir de VTT a SRT?", "Sí, pulsa el botón de modo para alternar entre SRT → VTT y VTT → SRT."],
      ["¿Admite subtítulos en cualquier idioma?", "Sí, la codificación UTF-8 garantiza compatibilidad total con tildes, eñes, cirílico, griego y caracteres asiáticos."],
    ],
  },
  "how-to-extract-text-transcript-from-srt": {
    metaTitle: "Extraer el texto de subtítulos SRT gratis | Subtítulos a TXT",
    metaDescription: "Elimina tiempos y números de línea de los archivos de subtítulos para obtener transcripciones limpias y legibles en la memoria del navegador.",
    seoKeyword: "extraer texto de subtítulos srt gratis",
    intro: "¿Alguna vez has descargado los subtítulos de una entrevista, un pódcast o una clase y te has encontrado un documento caótico lleno de códigos de tiempo y números de línea? Leerlo es una pesadilla. Nuestro limpiador de subtítulos elimina todo el marcado técnico y genera párrafos legibles.",
    deepDive: "Los subtítulos “rodantes” suelen repetir frases en bloques consecutivos para simular el desplazamiento. Nuestro motor de deduplicación, que funciona en tu navegador, compara los bloques contiguos y los une en frases coherentes, eliminando miles de palabras repetidas.",
    steps: [
      ["Carga el archivo de subtítulos", "Suelta tu archivo .srt o .vtt en el recuadro."],
      ["Filtrado automático", "El analizador descarta números y tiempos como 00:00:15,000 --> 00:00:18,000."],
      ["Copia o descarga", "Copia la transcripción fluida o guárdala como documento .txt limpio."],
    ],
    faq: [
      ["¿Cuenta palabras y caracteres?", "Sí, verás al momento el total de palabras y caracteres en la parte superior de la transcripción."],
      ["¿Mis apuntes de clase son privados?", "100 % privados. No se transmite nada por la red: todo el análisis se ejecuta en la RAM de tu navegador."],
    ],
  },
  "how-to-extract-frames-from-animated-gif": {
    metaTitle: "Extraer fotogramas de un GIF online gratis | GIF a PNG",
    metaDescription: "Descompón GIF animados en fotogramas PNG individuales. Descarga imágenes sueltas o todos los fotogramas en un ZIP, en tu navegador.",
    seoKeyword: "extraer fotogramas de gif gratis sin subir",
    intro: "Para sacar una sola imagen de un GIF animado, mucha gente acaba haciendo capturas borrosas o instalando programas pesados como Photoshop. FileOmniTool descompone la animación en imágenes PNG de 32 bits impecables y sin pérdida, directamente en la memoria de tu navegador.",
    deepDive: "Los navegadores modernos admiten la API ImageDecoder de WebCodecs, que descomprime la compresión entre fotogramas del GIF directamente con el hardware gráfico. Así, la transparencia y la paleta de colores de cada fotograma coinciden con el archivo original.",
    steps: [
      ["Elige tu GIF", "Arrastra tu archivo .gif a la zona de carga."],
      ["Revisa cada fotograma", "Explora todos los fotogramas extraídos con su número y su duración en milisegundos."],
      ["Descarga en PNG o ZIP", "Descarga cualquier fotograma como PNG sin pérdida o todos juntos en un archivo ZIP."],
    ],
    faq: [
      ["¿Funciona con GIF del móvil?", "Sí, es totalmente compatible con Chrome y Safari en iOS y Android."],
      ["¿Hay un límite de fotogramas?", "No hay límites arbitrarios; las animaciones de más de 100 fotogramas se extraen en segundos, según la memoria del dispositivo."],
    ],
  },
  "how-to-convert-image-to-ascii-art": {
    metaTitle: "Convertir imágenes en arte ASCII online gratis | FileOmniTool",
    metaDescription: "Transforma fotos e imágenes en arte ASCII en tiempo real. Ajusta columnas y densidad de caracteres, y exporta en .txt o .html.",
    seoKeyword: "convertir imagen a arte ascii gratis",
    intro: "El arte ASCII es uno de los estilos más icónicos de los primeros tiempos de la informática. Ya quieras darle vida a tu README de GitHub, sorprender en Discord o crear banners retro para la terminal, convertir fotos en texto a mano es imposible. Nuestro escáner de luminancia lo hace en un milisegundo, en tu navegador.",
    deepDive: "El algoritmo asigna la luminancia percibida de cada píxel (0,299R + 0,587G + 0,114B) a una escala progresiva de densidad de caracteres como '@%#*+=-:. '. Tiene en cuenta la proporción alto/ancho de las fuentes monoespaciadas para que las caras y las formas redondas no se deformen.",
    steps: [
      ["Carga la imagen", "Suelta cualquier foto JPG, PNG o WebP."],
      ["Ajusta columnas y escala", "Mueve el control de ancho y elige un juego de caracteres estándar, detallado o de bloques."],
      ["Copia o descarga", "Copia el texto ASCII o descárgalo como .txt o como archivo .html con estilo."],
    ],
    faq: [
      ["¿Dónde puedo pegar el resultado ASCII?", "En cualquier sitio con fuente monoespaciada: README de GitHub, Reddit, bloques de código de Discord, el Bloc de notas o la terminal."],
      ["¿Puedo invertir las zonas claras y oscuras?", "Sí, marca la casilla “Invertir contraste / negativo” para terminales y temas oscuros."],
    ],
  },
  "how-to-convert-png-to-ico-windows-icon": {
    metaTitle: "Convertir PNG a ICO (icono de Windows) gratis | FileOmniTool",
    metaDescription: "Crea auténticos iconos .ico de Windows multirresolución en tu navegador. Conserva la transparencia y no sube nada a la nube.",
    seoKeyword: "convertir png a ico windows gratis sin subir",
    intro: "Cambiar el nombre de “logo.png” a “logo.ico” NO crea un icono. Windows necesita una cabecera binaria específica (ICONDIR) y una entrada de imagen por cada resolución. Nuestra herramienta genera archivos ICO binarios auténticos y multirresolución directamente en la memoria del navegador.",
    deepDive: "El compilador construye una estructura ICONDIR (6 bytes) seguida de descriptores ICONDIRENTRY (16 bytes por resolución) que apuntan a cada imagen PNG. Windows Vista, 10 y 11 leen de forma nativa estos PNG incrustados, con una transparencia nítida y sin compresión.",
    steps: [
      ["Carga una imagen cuadrada", "Suelta un PNG o JPG (idealmente de 512×512 con fondo transparente)."],
      ["Elige los tamaños del icono", "Activa las resoluciones que necesites (16 px, 32 px, 48 px, 64 px)."],
      ["Descarga el .ICO", "Guarda el paquete de icono nativo de Windows."],
    ],
    faq: [
      ["¿Cómo aplico este icono en Windows 11?", "Clic derecho en una carpeta o acceso directo > Propiedades > Personalizar (o Acceso directo) > Cambiar icono > Examinar, y elige tu archivo .ico."],
      ["¿Puedo usarlo como favicon de mi web?", "Sí, los navegadores leen automáticamente las imágenes de 16 y 32 px incrustadas cuando el archivo está en la raíz del sitio."],
    ],
  },
  "how-to-clean-minify-svg-files": {
    metaTitle: "Limpiar y minificar SVG online gratis | FileOmniTool",
    metaDescription: "Limpia archivos vectoriales SVG en tu navegador. Elimina metadatos del editor y espacios de nombres propietarios, y reduce su tamaño.",
    seoKeyword: "limpiar minificar archivos svg online gratis",
    intro: "Programas de diseño como Adobe Illustrator, Inkscape y Figma meten muchísima “basura” XML propietaria en los SVG exportados: capas del editor, guías, sellos de versión y etiquetas de descripción vacías. Eso engorda las páginas y perjudica la puntuación de Google PageSpeed. Nuestro limpiador elimina todo eso sin tocar tus trazados vectoriales.",
    deepDive: "El limpiador filtra el árbol XML con expresiones regulares y elimina las declaraciones DOCTYPE, los espacios de nombres de los editores (xmlns:inkscape, sodipodi, adobe), los ID del editor y los espacios en blanco. El resultado visual es matemáticamente idéntico, con muchos menos bytes.",
    steps: [
      ["Carga el archivo vectorial", "Suelta tu archivo .svg en la zona de carga."],
      ["Limpieza automática", "Se eliminan comentarios, espacios de nombres de los editores (inkscape, adobe) y etiquetas de metadatos."],
      ["Copia el código o descarga", "Copia el código minificado directamente en tu proyecto o descarga el archivo limpio."],
    ],
    faq: [
      ["¿Rompe el SVG en línea en React o HTML?", "No, al contrario: los SVG limpios se pegan mucho más fácilmente como JSX o HTML en línea, sin errores de lint por espacios de nombres."],
      ["¿Cuánto espacio puedo ahorrar?", "Lo normal es que un SVG se reduzca entre un 20 % y un 65 %, según cuántos metadatos añadiera el editor original."],
    ],
  },
  "how-to-protect-pdf-with-password-aes256": {
    metaTitle: "Proteger un PDF con contraseña gratis (AES-256) | FileOmniTool",
    metaDescription: "Cifra y protege con contraseña documentos PDF en la RAM de tu navegador con WebCrypto AES-GCM. Sin subir nada a la nube.",
    seoKeyword: "proteger pdf con contraseña online gratis sin subir",
    intro: "El correo electrónico no está cifrado de por sí: enviar declaraciones de la renta, datos bancarios o contratos como PDF adjuntos sin protección expone tu vida privada a una posible interceptación. Los servicios online tradicionales te piden subir el archivo a sus servidores, lo que anula la privacidad. FileOmniTool cifra el documento en la RAM de tu ordenador con WebCrypto.",
    deepDive: "Con el motor WebCrypto SubtleCrypto nativo del navegador, derivamos una clave AES de 256 bits a partir de tu contraseña mediante PBKDF2 con 100 000 iteraciones y sal aleatoria. El contenido se cifra con AES-GCM autenticado, de modo que sin tu contraseña ni siquiera un superordenador puede descifrarlo.",
    steps: [
      ["Carga el PDF", "Suelta tu documento PDF en el recuadro de cifrado."],
      ["Define la contraseña", "Introduce la contraseña que elijas."],
      ["Descarga el archivo protegido", "Guarda el contenedor cifrado con AES-256."],
    ],
    faq: [
      ["¿Cómo descifra el archivo quien lo recibe?", "Puede usar esta misma herramienta gratuita de FileOmniTool en modo “Descifrar”, introducir la contraseña que le hayas dado y recuperar el PDF original al instante."],
      ["¿Y si olvido la contraseña?", "Con un cifrado AES-256 real no hay puertas traseras ni claves maestras. Guarda tu contraseña en un lugar seguro."],
    ],
  },
  "how-to-flatten-pdf-form-fields": {
    metaTitle: "Aplanar campos de formulario PDF gratis | PDF de solo lectura",
    metaDescription: "Aplana los formularios interactivos (AcroForms) de un PDF en páginas estáticas de solo lectura. Evita manipulaciones, en la memoria del navegador.",
    seoKeyword: "aplanar campos formulario pdf online gratis",
    intro: "Los formularios PDF interactivos (AcroForms) son muy prácticos para rellenar datos fiscales, contratos o solicitudes de empleo. Pero una vez enviados, cualquiera con un lector de PDF puede modificar tus respuestas por error o con mala intención, alterar importes o quitar firmas. Aplanar el PDF es el procedimiento estándar para fijarlo todo de forma permanente.",
    deepDive: "El aplanado extrae la apariencia visual de cada campo del formulario, la dibuja de forma permanente sobre el contenido de la página y elimina el diccionario AcroForm del catálogo del documento. El PDF resultante se ve igual en todas las impresoras, móviles y visores, sin necesidad de un motor de formularios.",
    steps: [
      ["Carga el PDF rellenable", "Suelta el PDF con cuadros de texto, casillas o campos de firma."],
      ["Procesa en la RAM", "El motor fija todos los elementos interactivos en el fondo de la página."],
      ["Descarga el PDF sellado", "Guarda el documento inalterable, listo para enviar."],
    ],
    faq: [
      ["¿Aplanar reduce el tamaño del PDF?", "Sí, al eliminar los esquemas del formulario, los scripts de validación y las estructuras de los campos, el archivo suele pesar menos."],
      ["¿Se puede “desaplanar” el PDF después?", "No. Una vez aplanado, el texto forma parte del contenido de la página y no puede volver a convertirse en campos de formulario."],
    ],
  },
  "how-to-convert-json-to-sql-insert-queries": {
    metaTitle: "Convertir JSON a consultas SQL INSERT gratis | FileOmniTool",
    metaDescription: "Convierte arrays JSON en sentencias SQL INSERT INTO en tu navegador. Compatible con los dialectos MySQL, PostgreSQL y SQLite.",
    seoKeyword: "convertir json a sql insert online gratis",
    intro: "Migrar datos de API REST/GraphQL modernas o de bases NoSQL a bases de datos relacionales como MySQL, PostgreSQL o SQLite es una tarea habitual. Escribir scripts de importación en Python o bucles a mano hace perder horas. FileOmniTool analiza las claves del JSON, deduce los tipos de columna, escapa las cadenas y genera sentencias SQL listas para producción en un instante.",
    deepDive: "El analizador reúne todas las claves presentes en los objetos, de modo que los registros a los que les falta algún atributo se rellenan correctamente con NULL. Los booleanos se convierten en 1/0 o TRUE/FALSE según el dialecto, y las comillas simples dentro de los textos se escapan de forma segura.",
    steps: [
      ["Pega los datos JSON", "Pega un array de objetos o carga una exportación .json."],
      ["Elige tabla y dialecto", "Escribe el nombre de la tabla de destino y selecciona MySQL, PostgreSQL o SQLite."],
      ["Exporta el script SQL", "Copia las consultas o descarga un archivo .sql listo para ejecutar en phpMyAdmin, DBeaver o psql."],
    ],
    faq: [
      ["¿Se suben mis registros a algún sitio?", "No. Todo el análisis del JSON se hace en la memoria de tu navegador. Ningún dato llega a un servidor remoto."],
      ["¿Puede con miles de registros?", "Sí, los motores JavaScript actuales procesan arrays de más de 10 000 objetos en menos de un segundo."],
    ],
  },
  "how-to-convert-html-to-markdown": {
    metaTitle: "Convertir HTML a Markdown online gratis | HTML a MD",
    metaDescription: "Convierte código HTML y páginas web en Markdown limpio en tu navegador. Conserva títulos, listas, enlaces y bloques de código.",
    seoKeyword: "convertir html a markdown online gratis",
    intro: "Copiar contenido de una web o de un editor de texto enriquecido suele pegar un HTML desordenado, lleno de estilos, etiquetas span y divs anidados. Si usas apps de notas como Obsidian, Notion o Bear, o gestionas documentación en GitHub, necesitas Markdown limpio. Nuestro conversor extrae el formato esencial y descarta lo superfluo.",
    deepDive: "En lugar de depender de frágiles sustituciones de texto, nuestro conversor usa el DOMParser nativo del navegador. Recorre el árbol real del documento y conserva correctamente listas anidadas, combinaciones de negrita y cursiva, bloques de código preformateado e hipervínculos.",
    steps: [
      ["Introduce el HTML", "Pega tu código HTML o carga un archivo .html."],
      ["Conversión del DOM", "El navegador analiza el DOM y traduce los elementos a sintaxis Markdown."],
      ["Copia o descarga el .MD", "Copia el Markdown limpio o guárdalo como documento .md."],
    ],
    faq: [
      ["¿Admite tablas?", "Sí, las filas y celdas de tablas estándar se convierten en texto limpio con su formato."],
      ["¿Puedo convertir páginas web HTML completas?", "Sí, basta con arrastrar el archivo .html a la zona de carga."],
    ],
  },
  "how-to-decode-jwt-tokens-offline": {
    metaTitle: "Decodificar tokens JWT sin conexión gratis | FileOmniTool",
    metaDescription: "Inspecciona y decodifica JSON Web Tokens de forma segura en tu navegador. Comprueba la caducidad sin enviar tokens sensibles a servidores remotos.",
    seoKeyword: "decodificar jwt sin conexión inspector token gratis",
    intro: "Nunca pegues tokens bearer de producción, cookies de autenticación o datos de identidad de usuarios en depuradores web cualesquiera: esos servidores pueden registrar tus credenciales y secuestrar sesiones. FileOmniTool decodifica la estructura de los JWT completamente sin conexión, en la RAM de tu navegador.",
    deepDive: "Un JSON Web Token consta de tres partes codificadas en base64url y separadas por puntos: cabecera, payload y firma. Nuestro script decodifica en el navegador las partes Base64Url, convierte la marca de tiempo Unix “exp” a tu hora local y te indica si el token sigue activo o ha caducado.",
    steps: [
      ["Pega el token", "Pega tu token Bearer o la cadena de autorización."],
      ["Revisa los claims decodificados", "El algoritmo de la cabecera y el JSON del payload se muestran con la sintaxis formateada."],
      ["Comprueba la caducidad", "Consulta al instante la fecha de caducidad exacta en formato legible y si el token es válido."],
    ],
    faq: [
      ["¿Puedo usar la herramienta sin internet?", "Sí. Una vez cargada la página, puedes desconectar el wifi y el decodificador sigue funcionando."],
      ["¿Verifica la firma secreta?", "Aísla y muestra el bloque de la firma, pero nunca te pide tus claves secretas."],
    ],
  },
  "how-to-minify-css-stylesheets": {
    metaTitle: "Minificar CSS online gratis | Compresor y limpiador CSS",
    metaDescription: "Comprime hojas de estilo CSS en tu navegador sin subir nada. Reduce su tamaño, ahorra ancho de banda y acelera tu web.",
    seoKeyword: "minificar css online gratis",
    intro: "Cada espacio en blanco, tabulación y comentario de tu archivo CSS es ancho de banda desperdiciado que los usuarios de móvil descargan con sus datos. Las Core Web Vitals de Google penalizan las hojas de estilo lentas. Nuestro minificador elimina todos los caracteres innecesarios sin cambiar tus reglas de diseño.",
    deepDive: "El minificador elimina los comentarios multilínea (/* ... */), quita el último punto y coma antes de cada llave de cierre y suprime los espacios junto a los combinadores CSS (+, >, ~) y las declaraciones. El resultado es un CSS denso y puro que se interpreta al instante.",
    steps: [
      ["Carga el archivo CSS", "Suelta tu hoja de estilo .css en el recuadro."],
      ["Compresión instantánea", "Se eliminan los comentarios y los espacios alrededor de llaves y puntos y coma."],
      ["Descarga el .min.css", "Descarga la hoja de estilo minificada, lista para producción."],
    ],
    faq: [
      ["¿Romperá mis animaciones CSS o mi grid?", "No. Solo se eliminan espacios y comentarios superfluos; los selectores y propiedades CSS válidos no se tocan."],
      ["¿Puedo recuperar el código original después?", "Guarda siempre una copia de tu hoja de estilo sin minificar para desarrollo y usa la versión .min.css en producción."],
    ],
  },
  "how-to-convert-unix-epoch-timestamps": {
    metaTitle: "Convertidor de timestamp Unix (epoch) gratis | FileOmniTool",
    metaDescription: "Convierte timestamps Unix en segundos o milisegundos en fechas legibles en hora local y UTC en tiempo real. 100 % gratis.",
    seoKeyword: "convertir timestamp unix epoch a fecha gratis",
    intro: "Los ordenadores cuentan el tiempo en segundos transcurridos desde la medianoche UTC del 1 de enero de 1970: el famoso Unix Epoch. Es perfecto para los servidores, pero leer un timestamp como “1728564120” en un registro de errores resulta incomprensible para una persona. Nuestro conversor lo traduce en tiempo real a una fecha de calendario clara.",
    deepDive: "Un error habitual es confundir los segundos de Unix (10 cifras) con los milisegundos de JavaScript o Java (13 cifras). Nuestro conversor detecta los valores mayores que 100 000 000 000, ajusta la escala automáticamente y muestra tanto tu zona horaria local como la hora UTC.",
    steps: [
      ["Introduce un timestamp o una fecha", "Escribe el timestamp Unix numérico o elige una fecha en el calendario."],
      ["Conversión en tiempo real", "La herramienta detecta automáticamente si son segundos o milisegundos."],
      ["Consulta los resultados", "Mira la hora local, UTC, ISO-8601 y el tiempo relativo (p. ej. “hace 3 horas”)."],
    ],
    faq: [
      ["¿Qué pasará con el problema del año 2038?", "El 19 de enero de 2038 se desbordarán los enteros con signo de 32 bits. Los sistemas modernos de 64 bits gestionan los timestamps sin problemas durante miles de millones de años."],
      ["¿Puedo convertir al revés, de fecha a epoch?", "Sí, usa el segundo recuadro para elegir cualquier fecha y hora y obtener el timestamp Unix exacto."],
    ],
  },
  "how-to-convert-any-file-to-base64": {
    metaTitle: "Convertir cualquier archivo a Base64 online gratis | Archivo a Base64",
    metaDescription: "Codifica documentos, archivos comprimidos y multimedia en texto Base64. Decodifica cadenas Base64 de nuevo en archivos descargables, en tu navegador.",
    seoKeyword: "convertir archivo a base64 online gratis",
    intro: "La codificación Base64 permite representar cualquier archivo binario (una factura en PDF, un archivo cifrado o un clip de sonido) como una cadena de texto que se puede enviar por correo, incrustar en un JSON o guardar en una columna de texto de una base de datos. FileOmniTool funciona en los dos sentidos: de archivo a Base64 y de Base64 a archivo.",
    deepDive: "Base64 transforma cada 3 bytes de datos binarios (24 bits) en 4 caracteres ASCII imprimibles (de 6 bits cada uno), lo que aumenta el tamaño aproximadamente un 33 %. Como toda la codificación y decodificación se hace con arrays tipados de JavaScript, tus archivos privados nunca pasan por un servidor remoto.",
    steps: [
      ["Selecciona el archivo", "Suelta cualquier archivo (PDF, imagen, audio, ZIP, ejecutable)."],
      ["Codificación Base64 instantánea", "El navegador convierte los bytes binarios en texto ASCII en la RAM de tu equipo."],
      ["Copia o descarga el .txt", "Copia la cadena Base64 o descárgala como archivo .txt."],
    ],
    faq: [
      ["¿Puedo volver a convertir el Base64 en el archivo original?", "Sí. Cambia a “Base64 a archivo”, pega tu cadena, escribe un nombre con extensión (p. ej. archivo.pdf) y haz clic en Descargar."],
      ["¿Admite Data URI?", "Sí, los Data URI estándar con tipo MIME se interpretan automáticamente."],
    ],
  },
  "how-to-identify-unknown-file-type-magic-bytes": {
    metaTitle: "Identificar un archivo desconocido por sus magic bytes | FileOmniTool",
    metaDescription: "Analiza los magic bytes de la firma de un archivo para identificar su formato y tipo MIME reales, aunque no tenga extensión, en tu navegador.",
    seoKeyword: "identificar archivo desconocido magic bytes online gratis",
    intro: "¿Has descargado alguna vez un adjunto llamado “download.dat” o recibido un archivo dañado sin extensión que tu sistema operativo no sabe abrir? Cambiar la extensión a ciegas es frustrante. Todo archivo real empieza con unos “magic bytes” únicos que revelan lo que es. Nuestra herramienta lee esos bytes e identifica el formato en milisegundos.",
    deepDive: "Los sistemas operativos se fían de la extensión, pero los programas que leen archivos se fían de su firma. Por ejemplo, un PDF siempre empieza por “%PDF” (hex 25 50 44 46), un PNG por hex 89 50 4E 47, un ZIP o documento de Office por “PK” (hex 50 4B 03 04) y un MP4 lleva “ftyp” en el byte 4. Leemos los primeros 32 bytes y los comparamos con bases de datos forenses de firmas.",
    steps: [
      ["Suelta el archivo desconocido", "Arrastra cualquier archivo dañado, renombrado o sin extensión."],
      ["Analiza los magic bytes", "La herramienta compara los primeros 32 bytes de la cabecera con las firmas conocidas."],
      ["Restaura y descarga", "Haz clic en el botón de restaurar para descargar el archivo con su extensión real (p. ej. .pdf, .zip, .png)."],
    ],
    faq: [
      ["¿Qué formatos puede identificar?", "Todos los principales: PDF, PNG, JPEG, GIF, WebP, ZIP, RAR, 7z, GZ, MP3, MP4, WebM, OGG, WebAssembly y ejecutables de Windows (EXE)."],
      ["¿Es seguro analizar archivos sospechosos?", "Sí. El archivo nunca se ejecuta: solo leemos sus primeros 32 bytes como datos pasivos en memoria."],
    ],
  },
};
