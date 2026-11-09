import type { GuideBodyTranslations } from "./guides-body-translations";

export const GUIDES_BODY_DE: GuideBodyTranslations = {
  "how-to-merge-pdf-without-uploading": {
    metaTitle: "PDF online zusammenfügen ohne Upload | FileOmniTool",
    metaDescription: "Schritt-für-Schritt-Anleitung: mehrere PDF-Dokumente unter Windows, Mac und auf dem Smartphone zusammenfügen, ganz ohne Cloud-Upload.",
    seoKeyword: "pdf zusammenfügen ohne upload kostenlos",
    intro: "Die meisten Online-PDF-Konverter laden sensible Dokumente wie Verträge, Kontoauszüge oder Steuerbescheide auf entfernte Cloud-Server. Damit riskieren Sie Datenlecks und Datenschutzverstöße. FileOmniTool löst das Problem, indem alles per WebAssembly direkt in Ihrem Browser läuft.",
    deepDive: "Anders als Cloud-Portale, die Ihre Dateien stundenlang auf fremden Festplatten zwischenspeichern, verarbeitet WebAssembly die binären PDF-Datenströme direkt im JavaScript-Speicher. Da weder Upload noch Download nötig sind, ist eine 100-MB-PDF in unter zwei Sekunden zusammengefügt.",
    steps: [
      ["PDF-Dateien auswählen", "Ziehen Sie zwei oder mehr PDF-Dateien in den Ablagebereich oder klicken Sie auf „Dateien durchsuchen“."],
      ["Reihenfolge festlegen", "Prüfen Sie die Reihenfolge der Dokumente – sie werden nacheinander zusammengefügt."],
      ["Im Speicher zusammenfügen", "Klicken Sie auf „PDFs zusammenfügen“. Die WebAssembly-Engine setzt die Seiten im lokalen Arbeitsspeicher zusammen."],
      ["Sofort herunterladen", "Speichern Sie die fertige PDF direkt auf Ihrem Gerät. Eine Kopie in der Cloud gab es nie."],
    ],
    faq: [
      ["Gibt es ein Limit für die Anzahl der Dokumente?", "Nein, es gibt keine willkürlichen Grenzen. Sie können so viele Seiten zusammenfügen, wie der Arbeitsspeicher Ihres Geräts fasst."],
      ["Funktioniert das auch auf dem Smartphone?", "Ja, das Tool läuft vollständig in Safari unter iOS und in Chrome unter Android – ohne App-Installation."],
    ],
  },
  "how-to-split-extract-pages-from-pdf": {
    metaTitle: "PDF teilen und Seiten kostenlos extrahieren | FileOmniTool",
    metaDescription: "So extrahieren Sie einzelne Seiten oder eigene Seitenbereiche aus PDF-Dateien am PC und auf dem Smartphone – mit vollem Datenschutz.",
    seoKeyword: "pdf teilen seiten extrahieren online kostenlos",
    intro: "Oft brauchen Sie nur ein paar Seiten aus einem 100-seitigen Handbuch, Vertrag oder E-Book. Statt riesige Dateien per E-Mail zu verschicken, extrahieren Sie einfach genau die benötigten Seiten – das macht das Teilen leicht und sicher.",
    deepDive: "FileOmniTool liest das Seitenverzeichnis des Dokuments im Browser aus und kopiert nur die gewünschten Seitenobjekte in eine neue PDF. Die Datei wird deutlich kleiner, die ursprüngliche Auflösung bleibt erhalten.",
    steps: [
      ["PDF hochladen", "Ziehen Sie Ihre PDF-Datei in den Ablagebereich."],
      ["Seitenbereich angeben", "Geben Sie Bereiche wie „1-3, 5, 8-10“ ein, um nur die gewünschten Abschnitte zu extrahieren."],
      ["Im Browser extrahieren", "Klicken Sie auf „Seiten extrahieren“, um das neue Dokument im Speicher zu erstellen."],
      ["Extrahierte PDF herunterladen", "Speichern Sie die gekürzte PDF direkt auf Ihrer Festplatte."],
    ],
    faq: [
      ["Kann ich mehrere nicht aufeinanderfolgende Seiten angeben?", "Ja, mit Kommas und Bindestrichen, zum Beispiel „1, 4, 7-10“."],
    ],
  },
  "how-to-rotate-pdf-pages-permanently": {
    metaTitle: "PDF-Seiten dauerhaft drehen – online | FileOmniTool",
    metaDescription: "Schiefe oder auf dem Kopf stehende PDF-Seiten dauerhaft um 90 oder 180 Grad drehen, direkt im Browser und ohne Upload.",
    seoKeyword: "pdf dauerhaft drehen kostenlos",
    intro: "Beim Scannen mehrseitiger Belege oder Verträge mit Scanner oder Handykamera landen Seiten oft quer oder kopfüber im Dokument. Die Ansicht im Viewer zu drehen speichert den Winkel nicht – Sie brauchen ein Tool, das die Drehung in die PDF selbst schreibt.",
    deepDive: "FileOmniTool aktualisiert den Schlüssel „/Rotate“ jeder betroffenen Seite. Beim erneuten Öffnen in Adobe Reader, Chrome, der macOS-Vorschau oder mobilen Apps wird das Dokument automatisch richtig herum angezeigt.",
    steps: [
      ["Schiefe PDF auswählen", "Legen Sie Ihre PDF-Datei im Drehbereich ab."],
      ["Drehwinkel wählen", "Wählen Sie 90° im Uhrzeigersinn, 180° (auf den Kopf) oder 270° gegen den Uhrzeigersinn."],
      ["Dauerhaft speichern", "Klicken Sie auf „PDF drehen“, um die Drehung in die Datei zu schreiben."],
    ],
    faq: [
      ["Wird die Ausrichtung auf allen Geräten korrigiert?", "Ja, die Drehung wird dauerhaft in die Dateistruktur geschrieben."],
    ],
  },
  "how-to-convert-images-jpg-png-to-pdf": {
    metaTitle: "Bilder kostenlos in PDF umwandeln (JPG zu PDF) | FileOmniTool",
    metaDescription: "JPG-, PNG- und WebP-Bilder direkt im Browser in mehrseitige A4-PDFs umwandeln. Schnell, kostenlos und sicher.",
    seoKeyword: "jpg png in pdf umwandeln online kostenlos",
    intro: "Behördenportale, Hochschulen und Bewerbungsportale von Unternehmen lehnen einzelne JPG- oder PNG-Bilder häufig ab und verlangen stattdessen ein PDF-Dokument.",
    deepDive: "Die Bilder werden direkt in PDF-Seiten eingebettet, automatisch im richtigen Seitenverhältnis skaliert und ohne Schärfeverlust gespeichert – druckfertig und professionell.",
    steps: [
      ["Bilder auswählen", "Laden Sie ein oder mehrere Fotos hoch (JPG, PNG, WebP)."],
      ["Seitenlayout einstellen", "Wählen Sie A4 oder „An Bild anpassen“ und legen Sie den Seitenrand fest."],
      ["PDF im Speicher erzeugen", "Klicken Sie auf „In PDF umwandeln“ und laden Sie das fertige Dokument herunter."],
    ],
    faq: [
      ["Kann ich mehrere Bilder in einer PDF zusammenfassen?", "Ja, wählen Sie beliebig viele Fotos aus – jedes wird zu einer eigenen Seite in der fertigen PDF."],
    ],
  },
  "how-to-add-page-numbers-to-pdf-free": {
    metaTitle: "Seitenzahlen kostenlos in PDF einfügen | FileOmniTool",
    metaDescription: "Schritt-für-Schritt-Anleitung, um PDF-Dateien im Browser mit Seitenzahlen zu versehen. Position, Format und Startseite frei wählbar.",
    seoKeyword: "seitenzahlen pdf einfügen kostenlos online",
    intro: "Bei Abschlussarbeiten, Angeboten oder offiziellen Verträgen ist eine durchgehende Seitennummerierung Pflicht. Nur dafür ein monatliches Adobe-Acrobat-Abo zu bezahlen, ist völlig unnötig.",
    deepDive: "FileOmniTool bettet die Standardschrift Helvetica an exakten typografischen Positionen direkt in das Koordinatensystem der PDF ein. Die ursprüngliche Formatierung bleibt zu 100 % erhalten.",
    steps: [
      ["PDF hochladen", "Legen Sie Ihre PDF im Tool ab."],
      ["Position und Format wählen", "Wählen Sie unten mittig, unten rechts oder oben mittig sowie das Format „Seite X von Y“."],
      ["Startseite festlegen", "Stellen Sie „Ab Seite 2 beginnen“ ein, wenn das Titelblatt keine Nummer bekommen soll."],
      ["Nummerierte PDF herunterladen", "Klicken Sie auf „Seitenzahlen einfügen“ und laden Sie Ihr Dokument herunter."],
    ],
    faq: [
      ["Wird mein vorhandener Text verändert?", "Die Zahlen stehen in den üblichen Seitenrändern (25 Punkt vom Rand), wo normalerweise kein Inhalt steht."],
    ],
  },
  "how-to-extract-text-from-pdf-online": {
    metaTitle: "Text aus PDF online kostenlos extrahieren | FileOmniTool",
    metaDescription: "Text aus PDF-Dokumenten direkt im Browser als TXT extrahieren. Schnell, kostenlos und ohne Speicherung auf Servern.",
    seoKeyword: "text aus pdf extrahieren online kostenlos",
    intro: "Wer Text von Hand aus einem PDF-Reader kopiert, bekommt oft ungewollte Zeilenumbrüche, Silbentrennungen und kaputte Formatierung. Wenn Sie den Textstrom direkt extrahieren, erhalten Sie sauberen, bearbeitbaren Text für Word, E-Mails oder KI-Prompts.",
    deepDive: "FileOmniTool erkennt die Textblöcke in den Inhaltsströmen der PDF und bereinigt Escape-Sequenzen – heraus kommt sofort nutzbarer UTF-8-Text.",
    steps: [
      ["PDF hochladen", "Legen Sie Ihre PDF im Tool ab."],
      ["Sofortige Analyse", "Der Browser decodiert die Textströme in Millisekunden im Arbeitsspeicher."],
      ["Kopieren oder herunterladen", "Klicken Sie auf „Text kopieren“ oder „.TXT herunterladen“, um den bereinigten Text zu sichern."],
    ],
    faq: [
      ["Eignet sich das für KI-Prompts?", "Ja, reiner TXT-Text ist das sauberste Eingabeformat für Sprachmodelle und Textverarbeitungen."],
    ],
  },
  "how-to-convert-pdf-to-black-and-white-grayscale": {
    metaTitle: "PDF kostenlos in Schwarz-Weiß umwandeln | FileOmniTool",
    metaDescription: "Farbige PDFs im Browser in Graustufen umwandeln und beim Drucken Toner und Tinte sparen.",
    seoKeyword: "pdf in schwarz weiß graustufen umwandeln",
    intro: "Viele Laser- und Tintenstrahldrucker verbrauchen selbst bei scheinbar einfachen Dokumenten teure Cyan-, Magenta- und Gelbtinte. Wird die PDF in echte Graustufen umgewandelt, druckt der Drucker nur mit Schwarz.",
    deepDive: "Die Verarbeitung im Browser entsättigt die Farbebenen aller Seiten, ohne dass etwas auf einen Server geladen wird – Finanzunterlagen und vertrauliche Berichte bleiben geschützt.",
    steps: [
      ["Farbige PDF auswählen", "Legen Sie Ihr farbiges Dokument im Tool ab."],
      ["Kontrastmodus wählen", "Wählen Sie Standard-Graustufen oder hohen Kontrast für sparsames Drucken."],
      ["Herunterladen und drucken", "Laden Sie die Graustufen-PDF herunter – bereit für den Druck nur mit Schwarz."],
    ],
    faq: [
      ["Bleibt der Text scharf?", "Ja, die Vektordaten des Textes bleiben gestochen scharf."],
    ],
  },
  "how-to-edit-remove-pdf-metadata-properties": {
    metaTitle: "PDF-Metadaten online bearbeiten oder entfernen | FileOmniTool",
    metaDescription: "So prüfen, bearbeiten und löschen Sie versteckte Eigenschaften von PDF-Dokumenten direkt im Browser.",
    seoKeyword: "pdf metadaten bearbeiten entfernen online",
    intro: "Jedes Mal, wenn Sie ein Dokument aus Microsoft Word, Google Docs oder Pages exportieren, schreibt die Software unbemerkt Ihren Namen, Ihr Benutzerkonto und das verwendete Programm in die PDF. Vor einer Veröffentlichung oder Ausschreibung sollten Sie diese Angaben unbedingt entfernen.",
    deepDive: "FileOmniTool bearbeitet direkt den Trailer-Katalog und das Info-Dictionary der PDF, damit weder Suchmaschinen noch forensische Prüfungen Spuren Ihrer Identität finden.",
    steps: [
      ["Metadaten prüfen", "Laden Sie Ihr Dokument, um eingebetteten Autor und Software zu sehen."],
      ["Bearbeiten oder bereinigen", "Passen Sie die Felder an oder klicken Sie auf „Alle Metadaten entfernen“."],
      ["Bereinigte PDF speichern", "Laden Sie die saubere PDF ohne Spuren Ihrer Computerdaten herunter."],
    ],
    faq: [
      ["Wird der Inhalt des Dokuments verändert?", "Nein, nur die Metadaten im Dokumentkopf werden geändert."],
    ],
  },
  "how-to-reorder-organize-delete-pdf-pages": {
    metaTitle: "PDF-Seiten kostenlos neu ordnen und löschen | FileOmniTool",
    metaDescription: "PDF-Seiten visuell sortieren, überflüssige Blätter löschen und Seiten duplizieren – im Arbeitsspeicher, ohne Cloud-Upload.",
    seoKeyword: "pdf seiten sortieren löschen duplizieren online",
    intro: "Beim Scannen von Papierdokumenten geraten Seiten oft durcheinander oder es rutschen leere Blätter mit hinein. Statt alles neu zu scannen, ordnen Sie die Seiten einfach in wenigen Sekunden visuell neu.",
    deepDive: "Die Engine erstellt eine neue PDF und kopiert nur die ausgewählten Seiten in genau der von Ihnen festgelegten Reihenfolge – im Arbeitsspeicher Ihres Geräts.",
    steps: [
      ["Mehrseitige PDF hochladen", "Legen Sie Ihre PDF ab, um jede Seite als Karte zu sehen."],
      ["Sortieren und löschen", "Verschieben Sie Seiten mit den Pfeilen und entfernen Sie leere Seiten über den Papierkorb."],
      ["Neue PDF speichern", "Klicken Sie auf „Neue PDF speichern“, um die neu geordnete Datei herunterzuladen."],
    ],
    faq: [
      ["Kann ich eine Seite duplizieren?", "Ja, ein Klick auf die Duplizieren-Schaltfläche einer Seitenkarte erzeugt sofort eine Kopie."],
    ],
  },
  "how-to-convert-images-webp-png-jpg": {
    metaTitle: "WebP kostenlos in JPG oder PNG umwandeln | FileOmniTool",
    metaDescription: "Schritt-für-Schritt-Anleitung, um WebP-Bilder im Browser in JPG und PNG umzuwandeln. Schnell, privat und 100 % kostenlos.",
    seoKeyword: "webp in jpg png umwandeln online kostenlos",
    intro: "Bilder von modernen Websites werden häufig im WebP-Format gespeichert. Das sorgt für schnelle Ladezeiten, doch viele ältere Bildbetrachter, Word-Dokumente und Grafikprogramme können WebP noch immer nicht öffnen. Die Umwandlung in JPG oder PNG löst das Problem sofort.",
    deepDive: "Der Browser decodiert die WebP-Datei mit hardwarebeschleunigtem Canvas 2D und codiert die Pixel neu als JPEG oder PNG – ganz ohne Umweg über einen Server.",
    steps: [
      ["WebP-Bild auswählen", "Legen Sie die WebP-Datei ab oder wählen Sie sie auf Ihrem Computer aus."],
      ["Zielformat wählen", "Wählen Sie JPEG für Fotos oder PNG, um transparente Hintergründe zu erhalten."],
      ["Sofortige Umwandlung", "Klicken Sie auf „Bild umwandeln“ und laden Sie Ihr Standardbild herunter."],
    ],
    faq: [
      ["Bleibt bei PNG die Transparenz erhalten?", "Ja, beim Umwandeln einer transparenten WebP-Datei in PNG bleibt der Alphakanal vollständig erhalten."],
    ],
  },
  "how-to-compress-images-without-losing-quality": {
    metaTitle: "Bilder online kostenlos komprimieren (Dateigröße verringern) | FileOmniTool",
    metaDescription: "Die Dateigröße von Bildern direkt im Browser-Speicher ohne sichtbaren Qualitätsverlust verringern – ideal für E-Mails und schnelle Websites.",
    seoKeyword: "bilder komprimieren ohne qualitätsverlust kostenlos",
    intro: "Aktuelle Smartphones machen Fotos mit 10 bis 20 Megabyte pro Bild. Mehrere Fotos in voller Auflösung sprengen als E-Mail-Anhang schnell das 25-MB-Limit vieler Anbieter. Intelligente Komprimierung verkleinert die Dateien drastisch und hält die Pixel trotzdem scharf.",
    deepDive: "Die intelligente Komprimierung entfernt unsichtbare hochfrequente Farbinformationen und überflüssige EXIF-Header, während Kantenschärfe und Farben erhalten bleiben.",
    steps: [
      ["Großes Foto hochladen", "Ziehen Sie Ihr hochauflösendes Bild in den Kompressor."],
      ["Qualitätsstufe wählen", "Wählen Sie 80 % (empfohlen) für maximale Ersparnis ohne sichtbaren Qualitätsverlust."],
      ["Komprimierte Datei herunterladen", "Laden Sie Ihr komprimiertes Bild mit bis zu 80 % weniger Speicherbedarf herunter."],
    ],
    faq: [
      ["Gibt es eine Größenbegrenzung pro Foto?", "Sie können Fotos bis 50 MB direkt im Arbeitsspeicher Ihres Browsers komprimieren."],
    ],
  },
  "how-to-resize-image-dimensions-pixels": {
    metaTitle: "Bildgröße online kostenlos ändern | FileOmniTool",
    metaDescription: "Breite und Höhe von Fotos in Pixeln oder Prozent direkt im Browser ändern. Seitenverhältnis sperren, damit nichts verzerrt.",
    seoKeyword: "bildgröße ändern pixel online kostenlos",
    intro: "Ob YouTube-Banner (2560×1440), Facebook-Titelbild (820×312) oder Produktfoto für den Onlineshop: Für ein scharfes Ergebnis brauchen Sie die exakten Pixelmaße.",
    deepDive: "Bikubische Interpolation im Canvas glättet das Neuberechnen der Pixel und verhindert Verpixelung beim Verkleinern.",
    steps: [
      ["Bild hochladen", "Legen Sie Ihr Bild ab, um die aktuellen Pixelmaße zu sehen."],
      ["Neue Breite oder Höhe eingeben", "Geben Sie die gewünschte Breite ein (z. B. 1920 oder 1200 px). Das Seitenverhältnis wird automatisch gesperrt."],
      ["Skaliertes Foto herunterladen", "Laden Sie das Bild in der neuen Größe sofort herunter."],
    ],
    faq: [
      ["Wird das Foto verzerrt?", "Nein, die Sperre des Seitenverhältnisses sorgt dafür, dass das Bild nie verzerrt wird."],
    ],
  },
  "how-to-add-watermark-to-photos-online": {
    metaTitle: "Wasserzeichen online kostenlos auf Fotos setzen | FileOmniTool",
    metaDescription: "Text- oder Logo-Wasserzeichen direkt im Browser auf Bilder setzen. Deckkraft, Schriftgröße und Position anpassen – mit vollem Datenschutz.",
    seoKeyword: "wasserzeichen auf fotos setzen online kostenlos",
    intro: "Wer eigene Fotos, Kunstwerke oder Immobilienanzeigen ohne Urheberangabe online stellt, riskiert unerlaubte Weiterverwendung und Urheberrechtsverletzungen. Ein dezentes Wasserzeichen macht Ihre Urheberschaft sichtbar.",
    deepDive: "Das Wasserzeichen wird vor der Rasterung auf das Bild-Canvas gezeichnet und ist damit dauerhaft mit dem Foto verschmolzen.",
    steps: [
      ["Foto hochladen", "Wählen Sie das Bild aus, das Sie kennzeichnen und schützen möchten."],
      ["Wasserzeichen anpassen", "Geben Sie Ihren Namen oder Copyright-Hinweis ein und stellen Sie Deckkraft und Position ein."],
      ["Geschütztes Foto herunterladen", "Laden Sie das Bild mit Wasserzeichen herunter – bereit für Social Media."],
    ],
    faq: [
      ["Kann ich die Deckkraft anpassen, damit das Bild nicht leidet?", "Ja, mit dem Deckkraft-Regler wählen Sie von dezent (20 %) bis kräftig (100 %)."],
    ],
  },
  "how-to-convert-svg-to-png-high-resolution": {
    metaTitle: "SVG online kostenlos in PNG umwandeln | FileOmniTool",
    metaDescription: "SVG-Vektorgrafiken im Browser in transparente PNG-Bilder mit 1x-, 2x- oder 4x-Auflösung umwandeln.",
    seoKeyword: "svg in png umwandeln online kostenlos transparent",
    intro: "SVG (Scalable Vector Graphics) ist der Standard für Web-Icons und Logos, doch PowerPoint, ältere E-Mail-Programme und soziale Netzwerke können SVG-Dateien oft nicht anzeigen. Eine Umwandlung in PNG sorgt für volle Kompatibilität.",
    deepDive: "Da SVG vektorbasiert ist, ergibt eine höhere Canvas-Skalierung vor dem Rendern gestochen scharfe Rasterbilder bis 4K – ganz ohne Unschärfe.",
    steps: [
      ["SVG-Datei hochladen", "Legen Sie Ihr SVG-Icon oder -Logo im Konverter ab."],
      ["Skalierungsfaktor wählen", "Wählen Sie 1x für normale Webgröße oder 4x für gestochen scharfen Export für Retina-Displays und Druck."],
      ["Transparentes PNG herunterladen", "Laden Sie das PNG mit erhaltener Hintergrundtransparenz herunter."],
    ],
    faq: [
      ["Bleibt der transparente Hintergrund erhalten?", "Ja, das PNG wird mit vollständig transparentem Alphakanal exportiert."],
    ],
  },
  "how-to-remove-exif-metadata-and-gps-from-photos": {
    metaTitle: "EXIF- und GPS-Daten online kostenlos aus Fotos entfernen | FileOmniTool",
    metaDescription: "So entfernen Sie versteckte EXIF-Metadaten und GPS-Koordinaten direkt im Browser aus Ihren Fotos und schützen Ihre Privatsphäre.",
    seoKeyword: "exif metadaten gps standort aus fotos entfernen online",
    intro: "Wenn Sie mit dem iPhone oder einem Android-Handy fotografieren, speichert das Gerät unbemerkt Ihre genauen GPS-Koordinaten, Datum und Uhrzeit, das Kameramodell und die Seriennummer. Wer das Originalfoto herunterlädt, kann so Ihre Wohnadresse herausfinden.",
    deepDive: "FileOmniTool zeichnet das Bild auf ein leeres Canvas und erzeugt daraus saubere JPEG/PNG-Daten – kein einziger Metadatenblock bleibt übrig.",
    steps: [
      ["Fotos auswählen", "Legen Sie Fotos vom Smartphone oder von der Spiegelreflexkamera ab."],
      ["Metadaten entfernen", "Der Browser codiert nur die Pixeldaten neu und verwirft alle EXIF-Header."],
      ["Anonymisiertes Bild herunterladen", "Speichern Sie das bereinigte Foto – sicher zum Teilen in Foren und sozialen Netzwerken."],
    ],
    faq: [
      ["Verändert sich das Aussehen meines Fotos?", "Überhaupt nicht – nur die unsichtbaren Metadaten werden verworfen."],
    ],
  },
  "how-to-pick-colors-and-palette-from-images": {
    metaTitle: "Farben und Farbpalette aus Bildern auslesen | FileOmniTool",
    metaDescription: "Dominante Farbpaletten und HEX/RGB-Codes aus jedem Bild direkt im Browser extrahieren. Schnell und privat für Designer.",
    seoKeyword: "farbe aus bild auslesen farbpalette extrahieren online",
    intro: "Den exakten Farbton aus einem Kundenlogo, einem Naturfoto oder einem Screenshot zu treffen, ist eine typische Herausforderung für Webdesigner und digitale Künstler.",
    deepDive: "Unser Clustering-Algorithmus quantisiert die Bildpixel im lokalen Arbeitsspeicher und ermittelt harmonische Hauptfarben mit starkem visuellem Kontrast.",
    steps: [
      ["Bild hochladen", "Legen Sie ein Foto, eine Grafik oder einen Screenshot ab."],
      ["Palette ansehen", "Sehen Sie sich die automatisch ermittelte Farbpalette und die Pipette mit interaktiver Lupe an."],
      ["Farbcodes kopieren", "Klicken Sie auf ein Farbfeld, um den HEX- oder RGB-Code in die Zwischenablage zu kopieren."],
    ],
    faq: [
      ["Kann ich auf einen einzelnen Pixel klicken?", "Ja, mit der interaktiven Canvas-Pipette prüfen Sie jeden einzelnen Pixel."],
    ],
  },
  "how-to-generate-favicon-package-for-website": {
    metaTitle: "Favicon-Paket für Websites kostenlos erstellen | FileOmniTool",
    metaDescription: "Mehrfach aufgelöste favicon.ico, Apple-Touch-Icons und Android-Manifest-Icons samt fertigem HTML-Code direkt im Browser erstellen.",
    seoKeyword: "favicon generator ico mehrere größen apple touch online",
    intro: "Eine professionelle Website muss ihr Icon überall korrekt zeigen: in Browser-Tabs, Lesezeichen, Google-Suchergebnissen, auf dem iPhone-Homescreen und im Android-PWA-Launcher. Alle Größen von Hand zu erstellen dauert Stunden – unser Generator schafft es in zwei Sekunden.",
    deepDive: "Der Generator erstellt einen ICO-Container mit mehreren Auflösungen, die PNG-Dateien und ein optimiertes HTML-Snippet mit Meta-Tags – alles per JSZip in einer einzigen ZIP-Datei.",
    steps: [
      ["Quadratisches Logo hochladen", "Wählen Sie Ihr Markenlogo (empfohlen: PNG oder SVG mit mindestens 512×512)."],
      ["Icons für alle Plattformen prüfen", "Sehen Sie sich die Vorschau für Browser-Tabs, Google-Suchergebnisse und den iOS-Homescreen an."],
      ["Komplettes ZIP herunterladen", "Laden Sie das ZIP mit favicon.ico, 16×16, 32×32, 180×180, 192×192, 512×512 und dem HTML-Code herunter."],
    ],
    faq: [
      ["Warum zeigt Google ein Standard-Icon statt meines?", "Google speichert Favicons bis zu 7 Tage im Cache. Stellen Sie sicher, dass icon-48.png eingebunden ist, und warten Sie die Aktualisierung ab."],
    ],
  },
  "how-to-crop-photos-aspect-ratio-online": {
    metaTitle: "Fotos online kostenlos im Seitenverhältnis zuschneiden | FileOmniTool",
    metaDescription: "Bilder im Browser auf 1:1, 16:9, 9:16 oder eigene Maße zuschneiden – ganz ohne Upload.",
    seoKeyword: "foto zuschneiden seitenverhältnis 1:1 16:9 online kostenlos",
    intro: "Soziale Netzwerke haben strenge Vorgaben für Seitenverhältnisse. Nicht zugeschnittene Fotos werden automatisch mittig beschnitten – oft fehlen dann Köpfe oder wichtiger Text. Wer selbst zuschneidet, behält das Motiv perfekt im Bild.",
    deepDive: "Der Zuschnitt per HTML5-Canvas schneidet den gewählten Bereich direkt im Speicher aus und liefert scharfe JPEG-, PNG- oder WebP-Dateien.",
    steps: [
      ["Foto hochladen", "Wählen Sie Ihre Bilddatei aus."],
      ["Seitenverhältnis wählen", "Klicken Sie auf 1:1 (quadratisch), 16:9 (Querformat wie YouTube) oder 9:16 (Hochformat für Stories)."],
      ["Anpassen und zuschneiden", "Positionieren Sie den Ausschnitt und klicken Sie auf „Zuschneiden und speichern“."],
    ],
    faq: [
      ["Welches Format soll ich wählen?", "JPEG für normale Fotos, PNG für Grafiken mit scharfem Text oder Transparenz."],
    ],
  },
  "how-to-blur-photos-and-censor-faces-data": {
    metaTitle: "Fotos verpixeln und private Daten unkenntlich machen | FileOmniTool",
    metaDescription: "Ganze Bilder weichzeichnen oder sensible Bereiche (Gesichter, Kennzeichen, Dokumente) direkt im Browser unkenntlich machen.",
    seoKeyword: "foto unkenntlich machen gesicht kennzeichen verpixeln online",
    intro: "Wer Fotos mit Kartennummern, Adressen, Autokennzeichen oder Gesichtern von Kindern ohne Einwilligung veröffentlicht, riskiert Identitätsdiebstahl und rechtlichen Ärger. Machen Sie diese Bereiche vor dem Posten in Sekunden unkenntlich.",
    deepDive: "Der Box-Blur im Canvas wendet einen mathematischen Faltungsfilter direkt auf die Pixel an und zerstört vertrauliche Informationen dauerhaft.",
    steps: [
      ["Bild hochladen", "Legen Sie Ihren Screenshot oder Ihr Foto im Tool ab."],
      ["Modus zum Unkenntlichmachen wählen", "Wählen Sie „Bereich zensieren“ und legen Sie die Unschärfemaske über Gesichter oder sensiblen Text."],
      ["Zensiertes Bild herunterladen", "Speichern Sie das weichgezeichnete Bild sicher."],
    ],
    faq: [
      ["Kann jemand die Unschärfe rückgängig machen?", "Nein, die Originalpixel im weichgezeichneten Bereich werden dauerhaft überschrieben."],
    ],
  },
  "how-to-invert-colors-negative-photo-online": {
    metaTitle: "Bildfarben online kostenlos invertieren (Negativ) | FileOmniTool",
    metaDescription: "Farben eines Bildes im Browser zu einem Negativ invertieren – ideal für Noten im Dunkelmodus und künstlerische Effekte.",
    seoKeyword: "bild farben invertieren negativ effekt online kostenlos",
    intro: "Beim Invertieren wird Weiß zu Schwarz und Schwarz zu Weiß, jeder Farbton wird durch seine Komplementärfarbe ersetzt. Besonders praktisch ist das, um grellweiße Notenblätter in dunklen Konzertsälen augenschonend zu lesen.",
    deepDive: "Der Browser durchläuft jeden Pixel und berechnet in Echtzeit `255 - R`, `255 - G` und `255 - B` – der Alphakanal für Transparenz bleibt unverändert.",
    steps: [
      ["Bild hochladen", "Legen Sie Ihr Foto oder Diagramm im Tool ab."],
      ["Sofortiges Negativ", "Der Browser berechnet die RGB-Kanäle (255 − Wert) sofort neu."],
      ["Invertiertes Bild herunterladen", "Klicken Sie auf „Invertiertes Bild herunterladen“ und speichern Sie die Datei."],
    ],
    faq: [
      ["Funktioniert das mit Diagrammen und Schwarz-Weiß-Zeichnungen?", "Ja, Sie erhalten sofort eine gestochen scharfe Blaupausen-Optik im Dunkelmodus."],
    ],
  },
  "how-to-flip-mirror-photos-horizontally-vertically": {
    metaTitle: "Fotos online kostenlos spiegeln und drehen | FileOmniTool",
    metaDescription: "Bilder im Browser horizontal spiegeln oder vertikal umdrehen – ohne Upload. Schnell, kostenlos und privat.",
    seoKeyword: "foto spiegeln horizontal vertikal online kostenlos",
    intro: "Viele Frontkameras spiegeln Selfies automatisch – Schrift auf dem T-Shirt oder Logos erscheinen dann seitenverkehrt. Mit unserem kostenlosen Spiegel-Tool stellen Sie die echte Perspektive mit einem Klick wieder her.",
    deepDive: "Die Canvas-Koordinatentransformation `ctx.scale(-1, 1)` spiegelt die Pixelmatrix, ohne zu komprimieren oder neu abzutasten.",
    steps: [
      ["Foto hochladen", "Legen Sie Ihr Selfie oder Bild im Tool ab."],
      ["Spiegeln oder umdrehen", "Schalten Sie horizontales Spiegeln oder vertikales Umdrehen ein und sehen Sie die Vorschau live."],
      ["Gespiegeltes Foto herunterladen", "Klicken Sie auf „Gespiegeltes Bild speichern“, um es herunterzuladen."],
    ],
    faq: [
      ["Kann ich horizontal und vertikal gleichzeitig spiegeln?", "Ja, beide Optionen lassen sich kombinieren."],
    ],
  },
  "how-to-convert-photos-to-black-and-white-online": {
    metaTitle: "Fotos online kostenlos in Schwarz-Weiß umwandeln | FileOmniTool",
    metaDescription: "Farbfotos direkt im Browser in kontrastreiche Schwarz-Weiß-Bilder umwandeln – ohne Upload.",
    seoKeyword: "foto in schwarz weiß umwandeln online kostenlos",
    intro: "Schwarz-Weiß-Fotografie lenkt nicht mit Farben ab und betont Strukturen, Gesichtsausdrücke und dramatisches Licht. Für ein eindrucksvolles monochromes Porträt brauchen Sie kein teures Lightroom-Abo.",
    deepDive: "Die Entsättigungs-Engine gewichtet die Luminanz der einzelnen Farbkanäle und gibt Schatten Tiefe und Hauttönen Helligkeit.",
    steps: [
      ["Farbfoto hochladen", "Wählen Sie ein Porträt, eine Landschaft oder einen Schnappschuss."],
      ["Kontrast und Helligkeit feinjustieren", "Passen Sie die Regler an, damit Lichter und Schatten zur Geltung kommen."],
      ["Schwarz-Weiß-Foto herunterladen", "Laden Sie Ihr professionell wirkendes monochromes Bild herunter."],
    ],
    faq: [
      ["Kann ich die Intensität des Schwarz-Weiß-Effekts einstellen?", "Ja, der Graustufen-Regler reicht von 0 % (volle Farbe) bis 100 % (reines Schwarz-Weiß)."],
    ],
  },
  "how-to-convert-images-to-base64-data-uri": {
    metaTitle: "Bilder online kostenlos in Base64 umwandeln | FileOmniTool",
    metaDescription: "PNG-, JPG- und SVG-Bilder direkt im Browser in Base64-Data-URIs, HTML-img-Tags und CSS-Snippets umwandeln.",
    seoKeyword: "bild in base64 data uri html umwandeln online kostenlos",
    intro: "Bilder als Base64-Data-URI einzubetten spart zusätzliche HTTP-Anfragen, beschleunigt das Laden wichtiger Icons und macht HTML-Newsletter vollständig eigenständig.",
    deepDive: "Die FileReader-API des Browsers verarbeitet die Datei lokal ohne Netzwerkübertragung – sensible Inhalte werden nie preisgegeben.",
    steps: [
      ["Bild hochladen", "Legen Sie Ihr Logo, Icon oder Foto ab."],
      ["Sofortige Codierung", "Der Browser wandelt die Binärdaten in Base64-ASCII-Zeichen um."],
      ["Snippet kopieren", "Kopieren Sie die vollständige Data-URI, das HTML-<img>-Tag oder das CSS-background-image-Snippet."],
    ],
    faq: [
      ["Wird die Datei durch Base64 größer?", "Ja, Base64 erzeugt rund 33 % mehr Daten als die ursprüngliche Binärdatei."],
    ],
  },
  "how-to-convert-audio-files-mp3-wav": {
    metaTitle: "Audio online kostenlos in MP3 umwandeln | FileOmniTool",
    metaDescription: "Schritt-für-Schritt-Anleitung: Audioaufnahmen mit der Web Audio API direkt im Browser in MP3 oder WAV umwandeln.",
    seoKeyword: "audio in mp3 umwandeln online kostenlos ohne software",
    intro: "Sprachmemos vom Smartphone werden oft als M4A oder AAC gespeichert – Formate, die viele Autoradios, ältere MP3-Player und Schnittprogramme nicht öffnen. Die Umwandlung ins universelle MP3 sorgt für problemlose Wiedergabe überall.",
    deepDive: "Der Browser decodiert das Audio mit dem nativen AudioContext und nutzt den nach WebAssembly kompilierten LAME-MP3-Encoder, um die Datei im lokalen Arbeitsspeicher zu erzeugen.",
    steps: [
      ["Audiodatei auswählen", "Legen Sie Ihre Audiodatei ab (M4A, AAC, OGG, WAV, FLAC)."],
      ["Bitrate und Format wählen", "Wählen Sie MP3 (128, 192 oder 320 kbit/s) oder verlustfreies WAV."],
      ["Umgewandelte Datei herunterladen", "Klicken Sie auf „Audio umwandeln“ und laden Sie Ihre kompatible Datei herunter."],
    ],
    faq: [
      ["Ist 192 kbit/s eine gute Qualität?", "Ja, 192 kbit/s klingt bei Musik und Sprachaufnahmen praktisch wie eine CD."],
    ],
  },
  "how-to-trim-cut-audio-mp3-online": {
    metaTitle: "MP3 und Audio online kostenlos schneiden | FileOmniTool",
    metaDescription: "MP3-Songs und Sprachmemos im Browser millisekundengenau schneiden und kürzen. Kostenlos und privat.",
    seoKeyword: "mp3 schneiden audio kürzen online kostenlos klingelton",
    intro: "Ob Sie einen eingängigen 30-Sekunden-Refrain als Klingelton ausschneiden oder peinliche Pausen aus einem Interview-Podcast entfernen möchten: Audio online zu schneiden dauert keine Minute.",
    deepDive: "Die Audiopuffer werden im Speicher millisekundengenau geschnitten und sauber codiert – ohne Klicken oder Knacken an den Schnittkanten.",
    steps: [
      ["Audiospur hochladen", "Wählen Sie Ihre MP3- oder Audiodatei, um die Steuerelemente anzuzeigen."],
      ["Start- und Endzeit festlegen", "Geben Sie die genauen Sekunden oder Minuten für Anfang und Ende des Ausschnitts ein."],
      ["Ausschnitt exportieren", "Klicken Sie auf „Audio schneiden“ und laden Sie Ihren eigenen Klingelton herunter."],
    ],
    faq: [
      ["Wie lang sollte ein Klingelton sein?", "Üblich sind bei iPhone und Android etwa 20 bis 30 Sekunden."],
    ],
  },
  "how-to-extract-audio-from-video-mp4": {
    metaTitle: "Audio online kostenlos aus Videos extrahieren | FileOmniTool",
    metaDescription: "MP3-Tonspuren aus MP4-, MOV- und WebM-Videos direkt im Browser extrahieren – ohne riesige Videodateien hochzuladen.",
    seoKeyword: "audio aus video extrahieren mp4 zu mp3 online kostenlos",
    intro: "Videodateien sind riesig und oft mehrere Gigabyte groß. Ein 2-GB-Video zu einem Cloud-Konverter hochzuladen, dauert mit einer normalen Verbindung ewig. Da FileOmniTool lokal im Browser läuft, wird die Tonspur in Sekunden abgetrennt – ganz ohne Upload.",
    deepDive: "Die HTML5-Videodecodierung leitet die Audio-Samples direkt in Web-Audio-Puffer weiter, überspringt die Bilddecodierung und ist in Sekunden fertig.",
    steps: [
      ["Video hochladen", "Legen Sie Ihre MP4-, MOV-, MKV- oder WebM-Datei ab."],
      ["Im Browser extrahieren", "Der Browser extrahiert die Tonspur, ohne gigabytegroße Videos hochzuladen."],
      ["MP3-Tonspur herunterladen", "Speichern Sie die MP3-Datei direkt auf Ihrem Gerät."],
    ],
    faq: [
      ["Kann ich damit YouTube-Videos herunterladen?", "Nein. FileOmniTool verarbeitet ausschließlich lokale Videos, die Ihnen gehören – in voller Übereinstimmung mit dem Urheberrecht."],
    ],
  },
  "how-to-boost-audio-volume-louder": {
    metaTitle: "Audio online kostenlos lauter machen | FileOmniTool",
    metaDescription: "Zu leise Audiodateien im Browser bis zu 3-mal lauter machen. Ideal für dumpfe Sprachmemos und schwache Aufnahmen.",
    seoKeyword: "audio lauter machen lautstärke erhöhen online kostenlos",
    intro: "Ist das Handymikrofon zu weit vom Sprecher entfernt, klingt die Aufnahme dumpf und kaum hörbar – selbst bei voller Lautstärke. Eine höhere Verstärkung bringt die Klarheit zurück.",
    deepDive: "Die digitale Verstärkung skaliert die Amplitude im 32-Bit-Gleitkommaformat und begrenzt Spitzen, um hässliches Clipping zu vermeiden.",
    steps: [
      ["Leise Aufnahme hochladen", "Wählen Sie die Audiodatei, die zu leise klingt."],
      ["Verstärkung wählen", "Wählen Sie +3 dB, +6 dB (doppelte Lautstärke) oder +10 dB."],
      ["Verstärkte Datei herunterladen", "Klicken Sie auf „Lautstärke erhöhen“ und laden Sie Ihr lautes, klares Audio herunter."],
    ],
    faq: [
      ["Verzerrt der Ton, wenn ich zu stark verstärke?", "Der Limiter verhindert hartes digitales Clipping; für die meisten Sprachaufnahmen empfehlen sich jedoch +6 dB."],
    ],
  },
  "how-to-speed-up-slow-down-audio-online": {
    metaTitle: "Audio-Geschwindigkeit online kostenlos ändern (0,5x – 2x) | FileOmniTool",
    metaDescription: "Wiedergabegeschwindigkeit von MP3s und Audiospuren im Browser ändern. Vorlesungen beschleunigen oder Musik verlangsamen.",
    seoKeyword: "audio schneller langsamer machen online kostenlos",
    intro: "Zweistündige Vorlesungen oder Präsentationen in normalem Tempo anzuhören, kostet wertvolle Zeit. Mit 1,5- oder 1,75-facher Geschwindigkeit nehmen Sie die Inhalte in der Hälfte der Zeit auf, ohne etwas zu verpassen.",
    deepDive: "Der native OfflineAudioContext berechnet die Puffer im neuen Tempo und codiert sie anschließend im lokalen Speicher wieder als MP3.",
    steps: [
      ["Audio hochladen", "Legen Sie Ihre Vorlesungsaufnahme oder Ihren Podcast ab."],
      ["Geschwindigkeit wählen", "Wählen Sie 1,25x, 1,5x, 1,75x oder 2x – oder verlangsamen Sie auf 0,75x."],
      ["Neue Datei speichern", "Laden Sie die neu codierte MP3- oder WAV-Datei im neuen Tempo herunter."],
    ],
    faq: [
      ["Kann ich die beschleunigte Datei aufs Handy speichern?", "Ja, laden Sie sie direkt als MP3 herunter und hören Sie sie in jeder Musik- oder Podcast-App."],
    ],
  },
  "how-to-reverse-audio-song-backwards": {
    metaTitle: "Audio online kostenlos rückwärts abspielen | FileOmniTool",
    metaDescription: "Songs und Sprachaufnahmen im Browser rückwärts abspielen und exportieren. Ein schnelles, kostenloses und unterhaltsames Sounddesign-Tool.",
    seoKeyword: "audio rückwärts abspielen song umkehren online kostenlos",
    intro: "Rückwärts abgespielte Aufnahmen (Backmasking) faszinieren Musikfans und Tontechniker seit Jahrzehnten. Ob Sie versteckte Botschaften in Rocksongs suchen oder psychedelische Übergangseffekte für Ihre Videos bauen – Audio umzukehren ist ganz einfach.",
    deepDive: "Die Engine kehrt die Float32-Arrays jedes Kanals vom Ende zum Anfang um und erhält Bittiefe und Frequenzspektrum vollständig.",
    steps: [
      ["Audiospur hochladen", "Legen Sie einen Song oder eine Sprachaufnahme ab."],
      ["Im Speicher umkehren", "Klicken Sie auf „Spur umkehren“, um die Samples jedes Kanals umzudrehen."],
      ["Anhören und herunterladen", "Hören Sie sich das Ergebnis rückwärts an und laden Sie Ihre umgekehrte MP3 herunter."],
    ],
    faq: [
      ["Funktioniert das mit WhatsApp-Sprachnachrichten?", "Ja, speichern Sie die Sprachnachricht in Ihren Dateien und laden Sie sie direkt hoch."],
    ],
  },
  "how-to-convert-stereo-audio-to-mono": {
    metaTitle: "Stereo online kostenlos in Mono umwandeln | FileOmniTool",
    metaDescription: "Stereokanäle im Browser zu einer ausgewogenen Monospur zusammenführen. Einseitigen Ton korrigieren und Dateigröße verringern.",
    seoKeyword: "stereo in mono umwandeln audio online kostenlos",
    intro: "Bei Interviews mit nur einem Richtmikrofon landet der Ton oft komplett auf dem linken oder rechten Ohr – mit Kopfhörern sehr unangenehm. Die Umwandlung in Mono rückt den Klang perfekt in die Mitte.",
    deepDive: "Der Wegfall des redundanten zweiten Kanals spart bis zu 50 % Bitrate und Speicherplatz, ohne die Sprachqualität zu verringern.",
    steps: [
      ["Stereo-Audio hochladen", "Wählen Sie Ihre zweikanalige Audiodatei."],
      ["Kanäle zusammenführen", "Der Browser berechnet `(Links + Rechts) / 2` zu einem einzigen Kanal."],
      ["Mono-MP3 herunterladen", "Laden Sie Ihre zentrierte Monospur herunter – bis zu 50 % kleiner."],
    ],
    faq: [
      ["Hören beide Kopfhörerseiten den Ton gleich laut?", "Ja, Mono sendet links und rechts exakt dasselbe ausgewogene Signal."],
    ],
  },
  "how-to-clean-phone-speakers-water-eject-tone": {
    metaTitle: "Wasser aus dem Handylautsprecher entfernen (165-Hz-Ton) | FileOmniTool",
    metaDescription: "Dumpfen Handylautsprecher mit dem 165-Hz-Ton zur Wasserentfernung reparieren – ohne Reis und ohne Werkstatt.",
    seoKeyword: "handy lautsprecher wasser entfernen ton 165hz kostenlos",
    intro: "Fällt ein iPhone oder Android-Handy ins Wasser – auch ein wasserdichtes Modell –, bleiben oft winzige Tropfen im Lautsprechergitter hängen. Der Ton klingt dann entfernt, knisternd und dumpf. Die Apple Watch drückt Wasser mit Schall heraus – dieselbe Technik funktioniert bei jedem Smartphone.",
    deepDive: "Eine reine 165-Hz-Sinuswelle bringt die Membran kleiner Smartphone-Lautsprecher in Resonanz und bewegt so viel Luft wie möglich, um die Flüssigkeit hinauszudrücken.",
    steps: [
      ["Smartphone ausrichten", "Stellen Sie die Lautstärke auf Maximum und halten Sie die unteren Lautsprecher nach unten über ein Tuch."],
      ["165-Hz-Ton abspielen", "Klicken Sie auf die Voreinstellung „Wasser entfernen 165 Hz“ und dann 30 bis 60 Sekunden lang auf „Ton abspielen“."],
      ["Prüfen und testen", "Die Schallschwingungen drücken die Tropfen aus dem Lautsprechergitter. Anschließend trocken wischen."],
    ],
    faq: [
      ["Hilft Reis wirklich?", "Nein. Apple rät offiziell von Reis ab, weil Stärkestaub die Anschlüsse verstopfen kann und die durch Oberflächenspannung festgehaltenen Tropfen im Lautsprecher nicht entfernt."],
      ["Kann das meinen Lautsprecher beschädigen?", "Nein, 165 Hz liegt deutlich im sicheren Arbeitsbereich üblicher Handylautsprecher."],
    ],
  },
  "how-to-convert-excel-xls-xlsx-to-csv-json": {
    metaTitle: "Excel online kostenlos in CSV oder JSON umwandeln | FileOmniTool",
    metaDescription: "XLSX- und XLS-Tabellen im Browser in CSV- oder JSON-Daten umwandeln. Schnell, kostenlos und ganz ohne Server-Upload.",
    seoKeyword: "excel xlsx in csv json umwandeln online kostenlos",
    intro: "Finanztabellen und Kundenlisten enthalten oft hochsensible Unternehmensdaten. Excel-Dateien bei fremden Online-Konvertern hochzuladen, kann gegen die DSGVO und interne Compliance-Regeln verstoßen. FileOmniTool verarbeitet Tabellen direkt im Arbeitsspeicher Ihres Browsers.",
    deepDive: "Die Tabellen-Engine in WebAssembly decodiert die XML-Struktur der Arbeitsmappe und die Zellen im Browser und erzeugt saubere, RFC-konforme CSV-Dateien.",
    steps: [
      ["Excel-Datei hochladen", "Legen Sie Ihre .xlsx- oder .xls-Datei im Konverter ab."],
      ["Tabellenblatt und Format wählen", "Wählen Sie das gewünschte Tabellenblatt und das Format CSV oder JSON."],
      ["Umgewandelte Daten herunterladen", "Klicken Sie auf „Umwandeln“ und laden Sie Ihre saubere, datenbankfertige Datei herunter."],
    ],
    faq: [
      ["Funktioniert das mit Arbeitsmappen mit mehreren Blättern?", "Ja, Sie können jedes Tabellenblatt Ihrer Datei auswählen."],
    ],
  },
  "how-to-convert-word-docx-to-html-text": {
    metaTitle: "DOCX online kostenlos in HTML oder Text umwandeln | FileOmniTool",
    metaDescription: "Word-DOCX-Dokumente im Browser in sauberes HTML oder reinen Text umwandeln – ohne Microsoft-Office-Lizenz.",
    seoKeyword: "word docx in html text umwandeln online kostenlos",
    intro: "Microsoft-Word-Dokumente enthalten oft unordentliche, proprietäre XML-Formatierungen, die Web-Layouts zerschießen. Wer DOCX direkt in sauberes, semantisches HTML umwandelt, spart Stunden an manueller Formatierung.",
    deepDive: "Der im Browser laufende mammoth-Parser übersetzt Word-Überschriften in Standard-Tags wie `<p>`, `<h1>`, `<h2>` und `<ul>` – ohne aufgeblähtes Inline-CSS.",
    steps: [
      ["Word-Dokument hochladen", "Wählen Sie Ihre Microsoft-Word-Datei (.docx)."],
      ["HTML oder Text wählen", "Wählen Sie HTML, um Überschriften und Listen zu erhalten, oder reinen Text."],
      ["Ergebnis herunterladen", "Kopieren Sie den umgewandelten Text oder laden Sie die HTML-Datei herunter."],
    ],
    faq: [
      ["Muss Microsoft Office installiert sein?", "Nein, die gesamte Umwandlung läuft im Browser – ganz ohne Softwareinstallation."],
    ],
  },
  "how-to-preview-edit-markdown-online": {
    metaTitle: "Markdown-Editor mit Live-Vorschau kostenlos | FileOmniTool",
    metaDescription: "Markdown in Echtzeit in geteilter Ansicht bearbeiten und ansehen. Als formatiertes HTML exportieren oder .md-Datei herunterladen.",
    seoKeyword: "markdown editor live vorschau html export online kostenlos",
    intro: "Markdown ist das Standardformat für Entwicklerdokumentation, GitHub-READMEs, Obsidian-Wissensdatenbanken und Notion-Notizen. Ein schneller, aufgeräumter Editor mit sofortiger Live-Vorschau ist daher unverzichtbar.",
    deepDive: "Der Compiler rendert GitHub Flavored Markdown (GFM) mit Aufgabenlisten, Tabellen, Durchstreichungen und Codeblöcken im lokalen Speicher.",
    steps: [
      ["Markdown eingeben oder einfügen", "Schreiben Sie Markdown-Syntax im linken Bereich."],
      ["Live-Vorschau in geteilter Ansicht", "Sehen Sie Überschriften, Tabellen, Zitate und Codeblöcke sofort gerendert."],
      ["HTML oder Markdown exportieren", "Kopieren Sie das erzeugte HTML oder speichern Sie Ihre .md-Datei."],
    ],
    faq: [
      ["Kann ich als HTML-Seite exportieren?", "Ja, mit einem Klick kopieren Sie das komplette HTML-Markup."],
    ],
  },
  "how-to-convert-json-to-csv-bidirectional": {
    metaTitle: "JSON in CSV und CSV in JSON online kostenlos umwandeln | FileOmniTool",
    metaDescription: "Umwandlung zwischen JSON und CSV in beide Richtungen direkt im Browser. Schnell, privat und sicher bei Zeichenketten in Anführungszeichen.",
    seoKeyword: "json in csv csv in json umwandeln online kostenlos",
    intro: "REST-APIs und Datenbank-Backups liefern Daten im JSON-Format, Analysten und Führungskräfte brauchen dagegen Excel-taugliche CSV-Dateien. Die Umwandlung zwischen beiden ist für Technikprofis tägliche Routine.",
    deepDive: "Der Parser übernimmt die eindeutigen Objektschlüssel als CSV-Spaltenköpfe und maskiert Kommas und Zeilenumbrüche gemäß RFC 4180.",
    steps: [
      ["Daten einfügen oder Datei hochladen", "Fügen Sie Ihr JSON-Array oder Ihren CSV-Text ein."],
      ["Richtung wählen", "Wählen Sie den Modus JSON zu CSV oder CSV zu JSON."],
      ["Kopieren oder herunterladen", "Kopieren Sie den umgewandelten Text oder laden Sie die .csv- bzw. .json-Datei herunter."],
    ],
    faq: [
      ["Werden verschachtelte JSON-Objekte unterstützt?", "Verschachtelte Eigenschaften werden sicher als Text in die jeweilige Zelle geschrieben."],
    ],
  },
  "how-to-convert-csv-to-markdown-table": {
    metaTitle: "CSV online kostenlos in Markdown-Tabelle umwandeln | FileOmniTool",
    metaDescription: "CSV- und TSV-Tabellen im Browser in sauber ausgerichtete Markdown-Tabellen umwandeln, mit wählbarer Textausrichtung.",
    seoKeyword: "csv in markdown tabelle umwandeln online kostenlos",
    intro: "Markdown-Tabellen mit senkrechten Strichen (|) und Bindestrichen (-) von Hand zu schreiben, ist mühsam und fehleranfällig. Wenn Sie Ihre Tabellendaten direkt umwandeln, entstehen in Sekunden saubere Tabellen.",
    deepDive: "Unser Algorithmus ermittelt die maximale Zeichenbreite jeder Spalte und füllt die Zellen mit Leerzeichen auf, damit der Quelltext auch in einem reinen Texteditor gut lesbar ist.",
    steps: [
      ["CSV-Daten einfügen", "Fügen Sie Ihre Tabellenzeilen ein oder laden Sie eine .csv-Datei hoch."],
      ["Ausrichtung festlegen", "Wählen Sie linksbündig (:---), zentriert (:---:) oder rechtsbündig (---:)."],
      ["Markdown-Tabelle kopieren", "Kopieren Sie die sauber ausgerichtete Tabelle zum direkten Einfügen."],
    ],
    faq: [
      ["Eignet sich das für GitHub-READMEs?", "Ja, voll kompatibel mit GitHub Flavored Markdown (GFM)."],
    ],
  },
  "how-to-convert-text-to-pdf-online": {
    metaTitle: "Text (TXT) online kostenlos in PDF umwandeln (A4) | FileOmniTool",
    metaDescription: "Notizen aus reinem Text im Browser in saubere, paginierte A4-PDFs umwandeln. Schriftgröße und Überschrift frei wählbar.",
    seoKeyword: "text txt in pdf umwandeln online kostenlos",
    intro: "Unformatierte .txt-Dateien an Kunden oder Lehrkräfte zu schicken, wirkt unprofessionell. Als sauber paginierte A4-PDF mit typografischen Rändern bekommt Ihr Text sofort einen professionellen Auftritt.",
    deepDive: "Die Vektor-Engine pdf-lib berechnet Zeilen- und Seitenumbrüche dynamisch und verteilt Absätze sauber auf die Seiten.",
    steps: [
      ["Text eingeben oder einfügen", "Fügen Sie Ihre Notizen oder Ihr Dokument in den Editor ein."],
      ["Titel und Schrift anpassen", "Fügen Sie optional einen fetten Titel hinzu und wählen Sie die Schriftgröße."],
      ["Paginierte PDF herunterladen", "Klicken Sie auf „PDF-Dokument erstellen“ und laden Sie Ihre A4-Datei herunter."],
    ],
    faq: [
      ["Werden meine Notizen auf einen Server hochgeladen?", "Nein, die PDF wird zu 100 % im Arbeitsspeicher Ihres Browsers erzeugt."],
    ],
  },
  "how-to-count-words-characters-reading-time": {
    metaTitle: "Wörter und Zeichen zählen – online kostenlos | FileOmniTool",
    metaDescription: "Wörter, Zeichen mit und ohne Leerzeichen, Sätze, Absätze und Lesezeit in Echtzeit zählen.",
    seoKeyword: "wörter zählen zeichen zählen lesezeit online kostenlos",
    intro: "Ob Hausarbeit mit strenger 3.000-Wörter-Grenze, Post auf X (280 Zeichen) oder SEO-Blogartikel (1.500+ Wörter): Für Autoren und Marketer ist es entscheidend, die genauen Textkennzahlen in Echtzeit zu kennen.",
    deepDive: "Unser Tokenizer filtert Leerzeichen und Unicode-Satzzeichen sprachübergreifend korrekt und liefert exakte Zeichen- und Silbenstatistiken.",
    steps: [
      ["Text einfügen", "Fügen Sie Ihren Text ein oder tippen Sie direkt im Zähler-Editor."],
      ["Kennzahlen live ansehen", "Sehen Sie Wörter, Zeichen (mit und ohne Leerzeichen), Sätze und Lesedauer."],
      ["Bereinigen oder kopieren", "Feilen Sie an Ihrem Text, bis er die Vorgaben von Uni oder Social Media erfüllt."],
    ],
    faq: [
      ["Was ist der Unterschied zwischen Zeichen mit und ohne Leerzeichen?", "Zeichen mit Leerzeichen zählen auch die Leerstellen mit; Verlage und Redaktionen rechnen häufig in „Anschlägen“ inklusive Leerzeichen."],
    ],
  },
  "how-to-compare-text-find-differences-diff": {
    metaTitle: "Textvergleich: Zwei Texte online kostenlos vergleichen | FileOmniTool",
    metaDescription: "Hinzufügungen, Löschungen und Änderungen zwischen zwei Texten direkt im Browser hervorheben. Schnell, kostenlos und privat.",
    seoKeyword: "zwei texte vergleichen unterschiede hervorheben diff online kostenlos",
    intro: "Beim Prüfen von Vertragsversionen, AGB oder Code-Ausschnitten ist ein einzelnes geändertes Wort mit bloßem Auge kaum zu entdecken. Ein automatischer Textvergleich findet jede Änderung in Millisekunden.",
    deepDive: "Der Myers-Diff-Algorithmus berechnet im lokalen JavaScript-Speicher die kürzeste Abfolge von Änderungen zwischen beiden Texten.",
    steps: [
      ["Originaltext einfügen", "Fügen Sie die erste Version links ein."],
      ["Geänderten Text einfügen", "Fügen Sie die aktualisierte Version rechts ein."],
      ["Unterschiede prüfen", "Grün markiert hinzugefügten Text, Rot gelöschte oder geänderte Passagen."],
    ],
    faq: [
      ["Kann ich Code-Dateien vergleichen?", "Ja, das funktioniert problemlos mit JavaScript, Python, HTML, CSS und Konfigurationsdateien."],
    ],
  },
  "how-to-generate-strong-secure-passwords": {
    metaTitle: "Sicherer Passwort-Generator online kostenlos | FileOmniTool",
    metaDescription: "Mit der Web Crypto API im Browser kryptografisch sichere Passwörter erzeugen. 100 % privat, nie übertragen.",
    seoKeyword: "sicherer passwort generator online kostenlos kryptografisch",
    intro: "Einfache Passwörter wie „Password123“ oder dasselbe Passwort auf mehreren Websites sind die häufigste Ursache für gekaperte Online-Konten. Ein starkes Passwort aus 16 gemischten Zeichen per Brute Force zu knacken, würde Millionen Jahre dauern.",
    deepDive: "Statt des pseudozufälligen `Math.random()` nutzt FileOmniTool `window.crypto.getRandomValues()` und bezieht nicht deterministische Entropie aus der Hardware Ihres Geräts.",
    steps: [
      ["Länge und Zeichensätze wählen", "Wählen Sie 16 oder 24 Zeichen und aktivieren Sie Großbuchstaben, Zahlen und Sonderzeichen."],
      ["Kryptografisch erzeugen", "Klicken Sie auf „Passwort generieren“, um Hardware-Entropie zu nutzen."],
      ["In die Zwischenablage kopieren", "Kopieren Sie das neue Passwort direkt in Ihren Passwort-Manager."],
    ],
    faq: [
      ["Werden die Passwörter auf Ihrem Server gespeichert?", "Niemals. Das Passwort existiert nur im Arbeitsspeicher Ihres Browsers, bis Sie den Tab neu laden."],
    ],
  },
  "how-to-generate-bulk-uuid-v4-online": {
    metaTitle: "UUID-v4-Generator für mehrere IDs, kostenlos (RFC 4122) | FileOmniTool",
    metaDescription: "Bis zu 100 RFC-4122-konforme UUID-v4-Kennungen mit kryptografischem Zufall direkt im Browser erzeugen.",
    seoKeyword: "uuid v4 generator mehrere online kostenlos rfc 4122",
    intro: "Universell eindeutige Kennungen (UUID v4) haben in verteilten Datenbanken, Microservices und App-Analytics eine praktisch nicht vorhandene Kollisionswahrscheinlichkeit. Ein schneller Stapelgenerator im Browser vereinfacht das Testen.",
    deepDive: "Eine UUID v4 enthält 122 zufällige Bits, die per `crypto.randomUUID()` erzeugt werden, mit exakt gesetzten Versions- und Variantenbits.",
    steps: [
      ["Anzahl wählen", "Legen Sie fest, wie viele UUIDs Sie brauchen (1 bis 50)."],
      ["Kennungen erzeugen", "Klicken Sie auf „UUIDs generieren“, um RFC-4122-konforme Zeichenketten zu erhalten."],
      ["In die Zwischenablage kopieren", "Kopieren Sie einzelne UUIDs oder den ganzen Stapel mit einem Klick."],
    ],
    faq: [
      ["Können zwei erzeugte UUIDs identisch sein?", "Die Wahrscheinlichkeit ist praktisch null (weniger als eins zu einer Trillion)."],
    ],
  },
  "how-to-calculate-cryptographic-hash-sha256": {
    metaTitle: "Kryptografischer Hash-Generator (SHA-256, SHA-512, MD5) | FileOmniTool",
    metaDescription: "SHA-256-, SHA-512-, SHA-1- und MD5-Hashes mit der Web Crypto API direkt im Browser berechnen. Schnell, kostenlos und privat.",
    seoKeyword: "hash berechnen sha256 sha512 md5 online kostenlos",
    intro: "Kryptografische Hashes erzeugen aus beliebigem Text einen deterministischen digitalen Fingerabdruck mit fester Länge. Sie sind die Grundlage für Passwortspeicherung, digitale Signaturen und Integritätsprüfungen.",
    deepDive: "SHA-256 wird nativ über `crypto.subtle.digest()` berechnet – mit maximaler Geschwindigkeit und ohne dass Daten in die Cloud gelangen.",
    steps: [
      ["Eingabetext eingeben", "Tippen oder fügen Sie den Text oder Token ein, den Sie hashen möchten."],
      ["Hash in Echtzeit", "Der Browser berechnet SHA-256, SHA-512, SHA-1 und MD5 sofort."],
      ["Hash kopieren", "Klicken Sie auf die Kopierschaltfläche beim gewünschten Format."],
    ],
    faq: [
      ["Lässt sich ein SHA-256-Hash umkehren?", "Nein, kryptografische Hashes sind reine Einwegfunktionen."],
    ],
  },
  "how-to-create-permanent-free-qr-codes": {
    metaTitle: "Kostenloser QR-Code-Generator ohne Ablaufdatum | FileOmniTool",
    metaDescription: "Statische QR-Codes für Weblinks, automatische WLAN-Anmeldung und Text direkt im Browser erstellen. 100 % kostenlos, ohne Ablaufdatum.",
    seoKeyword: "qr code generator kostenlos dauerhaft ohne ablaufdatum",
    intro: "Viele kommerzielle QR-Generatoren lassen Sie einen Code erstellen und deaktivieren ihn zwei Wochen später, um ein Monatsabo zu verlangen. FileOmniTool erzeugt echte statische QR-Codes, die Ihre Daten direkt in den Pixeln speichern: Sie funktionieren für immer und ohne Gebühren.",
    deepDive: "Statische QR-Codes schreiben die UTF-8-Bytes direkt in die Standardmatrix mit Reed-Solomon-Fehlerkorrektur. Ein zwischengeschalteter Weiterleitungsserver ist nie im Spiel.",
    steps: [
      ["QR-Typ wählen", "Wählen Sie Website-URL, automatische WLAN-Anmeldung oder Text."],
      ["Daten eingeben", "Fügen Sie Ihren Link ein oder geben Sie WLAN-Name und Passwort ein."],
      ["Dauerhaftes PNG herunterladen", "Laden Sie Ihren QR-Code herunter – bereit zum Druck auf Speisekarten, Visitenkarten und Flyern."],
    ],
    faq: [
      ["Läuft dieser QR-Code irgendwann ab?", "Nie. Solange das bedruckte Papier existiert, kann jedes Smartphone ihn scannen."],
    ],
  },
  "how-to-encode-decode-base64-text": {
    metaTitle: "Base64-Encoder und -Decoder online kostenlos (UTF-8) | FileOmniTool",
    metaDescription: "Text im Browser in Base64 codieren und decodieren – mit UTF-8-Unterstützung für Umlaute. Schnell, kostenlos und privat.",
    seoKeyword: "base64 codieren decodieren online utf8 kostenlos",
    intro: "Base64 stellt Binärdaten mit 64 druckbaren ASCII-Zeichen dar, damit sie alte E-Mail-Gateways und URL-Parameter unbeschadet passieren, ohne dass Bytes beschädigt werden.",
    deepDive: "Das Standard-`btoa()` scheitert an Umlauten wie ä, ö oder ü. FileOmniTool nutzt die modernen TextEncoder/TextDecoder-Puffer für fehlerfreie UTF-8-Umwandlung.",
    steps: [
      ["Text oder Base64 einfügen", "Geben Sie den Text im Eingabefeld ein."],
      ["Codieren oder decodieren", "Wechseln Sie zwischen „In Base64 codieren“ und „In lesbaren Text decodieren“."],
      ["Ergebnis kopieren", "Kopieren Sie die umgewandelte Zeichenkette mit einem Klick."],
    ],
    faq: [
      ["Ist Base64 eine Verschlüsselung?", "Nein, Base64 ist ein Codierungsformat für den Datentransport, keine sichere Verschlüsselung."],
    ],
  },
  "how-to-convert-text-case-uppercase-lowercase-camelcase": {
    metaTitle: "Groß- und Kleinschreibung umwandeln – online | FileOmniTool",
    metaDescription: "Text im Browser kostenlos in GROSSBUCHSTABEN, kleinbuchstaben, Titelschreibung, camelCase und snake_case umwandeln.",
    seoKeyword: "groß kleinschreibung umwandeln großbuchstaben online kostenlos",
    intro: "Einen ganzen Absatz versehentlich mit aktivierter Feststelltaste zu tippen, ist ärgerlich. Statt alles zu löschen und neu zu schreiben, ändern Sie die Schreibweise mit einem Klick.",
    deepDive: "Unser Algorithmus unterstützt die vollständige Unicode-Groß-/Kleinschreibung und wandelt Umlaute korrekt um (ä → Ä); das ß wird in Großbuchstaben zu „SS“.",
    steps: [
      ["Text einfügen", "Fügen Sie die Wörter oder Absätze ein, die Sie umwandeln möchten."],
      ["Umwandlung wählen", "Klicken Sie auf „ALLES GROSS“, „alles klein“, „Wortanfänge Groß“ oder „camelCase“."],
      ["Umgewandelten Text kopieren", "Kopieren Sie den neuen Text direkt in die Zwischenablage."],
    ],
    faq: [
      ["Können Entwickler das für Variablennamen nutzen?", "Ja, mit den Voreinstellungen camelCase, snake_case und kebab-case lässt sich Code sofort umbenennen."],
    ],
  },
  "how-to-sort-deduplicate-lists-online": {
    metaTitle: "Listen bereinigen: sortieren und Duplikate entfernen | FileOmniTool",
    metaDescription: "Doppelte Zeilen entfernen, alphabetisch sortieren (A–Z / Z–A) und überflüssige Leerzeichen aus Listen im Browser löschen.",
    seoKeyword: "doppelte zeilen entfernen liste sortieren online kostenlos",
    intro: "Mailinglisten oder Datenbankexporte Zeile für Zeile von Hand zu bereinigen, ist mühsam und fehleranfällig. Schon eine doppelte E-Mail-Adresse kann zu Spam-Beschwerden führen. Die automatische Deduplizierung bereinigt Tausende Zeilen in Millisekunden.",
    deepDive: "Der Set-basierte Algorithmus vereinheitlicht Groß-/Kleinschreibung und Leerzeichen, filtert dann die eindeutigen Einträge und zeigt genau an, wie viele Duplikate entfernt wurden.",
    steps: [
      ["Liste einfügen", "Fügen Sie Zeilen mit E-Mails, Namen oder Werten in den Editor ein."],
      ["Bereinigung wählen", "Klicken Sie auf „Duplikate entfernen“ und „A–Z sortieren“."],
      ["Saubere Liste kopieren", "Kopieren Sie die sortierte Liste ohne Duplikate in die Zwischenablage."],
    ],
    faq: [
      ["Werden leere Zeilen entfernt?", "Ja, leere Zeilen und Leerzeichen am Zeilenende werden automatisch entfernt."],
    ],
  },
  "how-to-generate-lorem-ipsum-placeholder-text": {
    metaTitle: "Lorem-Ipsum-Blindtext-Generator online kostenlos | FileOmniTool",
    metaDescription: "Lorem-Ipsum-Absätze, -Sätze und -Wörter in klassischem Latein kostenlos im Browser erzeugen.",
    seoKeyword: "lorem ipsum generator blindtext online kostenlos",
    intro: "Seit dem 16. Jahrhundert verwenden Setzer und Grafikdesigner den pseudolateinischen Blindtext Lorem Ipsum, damit der Blick auf Layout, Schriften und visuelle Hierarchie fällt statt auf lesbaren Inhalt.",
    deepDive: "Abgeleitet aus Ciceros philosophischer Schrift „De finibus bonorum et malorum“ (45 v. Chr.) ahmt das moderne Lorem Ipsum die natürliche Buchstabenverteilung eines echten Textes nach.",
    steps: [
      ["Länge und Einheit wählen", "Wählen Sie, wie viele Absätze, Sätze oder Wörter Sie brauchen."],
      ["HTML-Tags aktivieren", "Für Entwickler optional in `<p>`-Tags einschließen."],
      ["In die Zwischenablage kopieren", "Kopieren Sie den lateinischen Text direkt in Figma, InDesign oder Ihren Code."],
    ],
    faq: [
      ["Beginnt der Text immer mit „Lorem ipsum dolor sit amet“?", "Sie können wählen, ob der bekannte Anfangssatz enthalten sein soll."],
    ],
  },
  "how-to-format-validate-beautify-json-online": {
    metaTitle: "JSON-Formatierer und -Validator online kostenlos | FileOmniTool",
    metaDescription: "JSON im Browser formatieren, einrücken, minifizieren und validieren – mit sofortiger Anzeige von Syntaxfehlern. Schnell und privat.",
    seoKeyword: "json formatieren validieren minifizieren online kostenlos",
    intro: "Moderne Webanwendungen tauschen komprimiertes JSON in einer einzigen Zeile aus. Solche Zeichenketten ohne Zeilenumbrüche zu lesen oder zu debuggen, ist kaum machbar. Unser Tool formatiert den Code und findet fehlende Kommas oder Klammern sofort.",
    deepDive: "Die nativen Funktionen JSON.parse() und JSON.stringify() laufen direkt in der JavaScript-Engine Ihres Browsers – private API-Tokens bleiben geschützt.",
    steps: [
      ["Rohes JSON einfügen", "Fügen Sie Ihre API-Antwort oder unformatiertes JSON ein."],
      ["Einrückung wählen", "Klicken Sie auf 2 Leerzeichen, 4 Leerzeichen oder Minifizieren für eine einzige Zeile."],
      ["Kopieren oder herunterladen", "Kopieren Sie das formatierte JSON oder laden Sie eine saubere .json-Datei herunter."],
    ],
    faq: [
      ["Zeigt das Tool, wo der Syntaxfehler liegt?", "Ja, Syntaxfehler werden sofort mit einer genauen Fehlermeldung angezeigt."],
    ],
  },
  "how-to-convert-xml-to-json-online": {
    metaTitle: "XML in JSON und JSON in XML online kostenlos umwandeln | FileOmniTool",
    metaDescription: "XML-Dokumente mit dem DOMParser des Browsers in JSON-Objekte umwandeln und umgekehrt. Schnell, kostenlos und privat.",
    seoKeyword: "xml in json json in xml umwandeln online kostenlos",
    intro: "Ältere Unternehmenssysteme und die E-Rechnung (XRechnung, ZUGFeRD) setzen auf XML, moderne Web- und Mobil-Apps dagegen auf JSON. Wer XML-Strukturen in JSON umwandelt, bindet Altsysteme in Minuten an.",
    deepDive: "Der native DOMParser des Browsers durchläuft Kindelemente und Attribute und baut daraus saubere JSON-Schlüssel – die Verschachtelungstiefe bleibt erhalten.",
    steps: [
      ["XML oder JSON einfügen", "Fügen Sie Ihr XML-Dokument in das Eingabefeld ein."],
      ["Automatische Analyse", "Der DOMParser des Browsers erstellt den entsprechenden Objektbaum."],
      ["Ergebnis kopieren oder herunterladen", "Kopieren Sie den umgewandelten Code oder laden Sie die .json- bzw. .xml-Datei herunter."],
    ],
    faq: [
      ["Kann ich auch JSON zurück in XML umwandeln?", "Ja, mit „Richtung umkehren“ wird jedes JSON-Objekt zu Standard-XML."],
    ],
  },
  "how-to-convert-yaml-to-json-online": {
    metaTitle: "YAML in JSON und JSON in YAML umwandeln – kostenlos | FileOmniTool",
    metaDescription: "DevOps-Konfigurationsdateien im Browser zwischen YAML und JSON umwandeln. Schnell, kostenlos und privat für Entwickler.",
    seoKeyword: "yaml in json json in yaml umwandeln online kostenlos",
    intro: "YAML ist das bevorzugte, gut lesbare Format für Docker Compose und Kubernetes-Deployments, doch viele Deployment-Tools und API-Gateways verlangen striktes JSON. Die Umwandlung in beide Richtungen ohne Einrückungsfehler ist daher unverzichtbar.",
    deepDive: "Die einrückungsbewusste Analyse überführt YAML-Listen mit Bindestrichen und Schlüssel-Wert-Blöcke im lokalen Arbeitsspeicher in Standard-JavaScript-Objekte.",
    steps: [
      ["Konfiguration einfügen", "Fügen Sie Ihr YAML-Manifest oder Ihre JSON-Konfiguration ein."],
      ["Sofortige Umwandlung", "Der Parser im Browser rekonstruiert Schlüssel, Listen und verschachtelte Objekte."],
      ["Kopieren oder herunterladen", "Kopieren Sie das Ergebnis oder laden Sie es als .json oder .yaml herunter."],
    ],
    faq: [
      ["Sind geheime Umgebungsvariablen sicher?", "Zu 100 %. Die Umwandlung läuft komplett auf Ihrem Rechner, ohne eine einzige Serveranfrage."],
    ],
  },
  "how-to-analyze-seo-keyword-density-text": {
    metaTitle: "SEO-Keyword-Dichte-Analyse online kostenlos | FileOmniTool",
    metaDescription: "Keyword-Dichte von Texten im Browser analysieren, Stoppwörter filtern und die optimale SEO-Häufigkeit von 1–3 % prüfen.",
    seoKeyword: "keyword dichte analysieren seo tool kostenlos google",
    intro: "Suchmaschinen strafen Seiten ab, die das Ziel-Keyword unnatürlich oft wiederholen (Keyword-Stuffing). Fehlt die Fokus-Phrase dagegen ganz, versteht Google das Thema nicht. Die Messung der Keyword-Dichte zeigt Ihnen das richtige Maß.",
    deepDive: "Der N-Gramm-Tokenizer zerlegt den Text in Uni-, Bi- und Trigramme und berechnet die exakte Dichte in Prozent im Verhältnis zur Gesamtwortzahl.",
    steps: [
      ["Artikeltext einfügen", "Fügen Sie Ihren Blogartikel oder Webtext in die Analyse ein."],
      ["Stoppwörter filtern", "Lassen Sie den Stoppwortfilter aktiv, um sich auf aussagekräftige Keywords zu konzentrieren."],
      ["SEO-Dichtetabelle prüfen", "Prüfen Sie die Tabellen für 1, 2 und 3 Wörter: Ideal ist eine Dichte von 1 bis 3 %."],
    ],
    faq: [
      ["Was tun, wenn die Dichte über 3,5 % liegt?", "Ersetzen Sie einige Vorkommen durch natürliche Synonyme, um Überoptimierung zu vermeiden."],
    ],
  },
  "how-to-convert-hex-rgb-cmyk-color-codes": {
    metaTitle: "Farbcode-Umrechner: HEX, RGB, HSL, CMYK kostenlos | FileOmniTool",
    metaDescription: "Farbcodes nahtlos zwischen HEX, RGB, HSL und CMYK für den Druck umrechnen. Interaktiver Farbwähler und CSS-Variablen.",
    seoKeyword: "farbcode umrechnen hex rgb hsl cmyk online kostenlos",
    intro: "Webdesigner arbeiten mit HEX und RGB, Druckereien verlangen dagegen CMYK-Prozentwerte für den Vierfarbdruck. Eine genaue Umrechnung verhindert böse Überraschungen, etwa gedruckte Visitenkarten, die im Vergleich zum Bildschirm matt oder schmutzig wirken.",
    deepDive: "Die Umrechnungsformeln berechnen normalisierte subtraktive Grundfarben und optimieren den Schwarzanteil (K) – alles im lokalen Speicher.",
    steps: [
      ["Farbe wählen oder eingeben", "Nutzen Sie den visuellen Farbwähler oder fügen Sie Ihren HEX-Code ein (z. B. #10B981)."],
      ["Mit Reglern feinjustieren", "Stellen Sie die Regler für Rot, Grün und Blau auf den exakten Farbton ein."],
      ["Zielformat kopieren", "Klicken Sie auf Kopieren bei HEX, RGB, HSL, CMYK oder CSS-Variable."],
    ],
    faq: [
      ["Warum sehen Farben in CMYK manchmal anders aus?", "Bildschirme strahlen Licht in RGB ab, Druckfarbe reflektiert dagegen Licht. Der CMYK-Farbraum ist etwas kleiner."],
    ],
  },
  "how-to-encode-decode-html-entities-online": {
    metaTitle: "HTML-Entities codieren und decodieren – online kostenlos | FileOmniTool",
    metaDescription: "Text in benannte oder numerische HTML-Entities umwandeln oder zurück in lesbaren Text. Schnell und privat für Entwickler.",
    seoKeyword: "html entities codieren decodieren sonderzeichen online kostenlos",
    intro: "Browser interpretieren `<` und `>` als HTML-Tags und `&` als Beginn einer Entity. Wer Text mit diesen Zeichen ungefiltert in eine Webseite schreibt, riskiert ein kaputtes Layout oder Sicherheitslücken. Die Umwandlung in HTML-Entities löst beides.",
    deepDive: "Unser Umwandler verarbeitet im Browser sowohl benannte Entities (`&copy;`, `&euro;`, `&auml;`) als auch numerische Dezimalcodes.",
    steps: [
      ["Text oder HTML einfügen", "Fügen Sie Text mit Sonderzeichen oder HTML-Entity-Codes ein."],
      ["Codieren oder decodieren", "Wählen Sie Codieren (Text zu &amp;) oder Decodieren (Entities zu Text)."],
      ["Sauberes Markup kopieren", "Kopieren Sie das Ergebnis, bereit für Ihren HTML-Code."],
    ],
    faq: [
      ["Braucht man mit UTF-8 überhaupt noch HTML-Entities?", "Für reservierte HTML-Zeichen wie `<` und `&` sind Entities unabhängig von der Seitencodierung zwingend nötig."],
    ],
  },
  "how-to-test-regular-expressions-regex-online": {
    metaTitle: "Regex-Tester online mit Live-Hervorhebung | FileOmniTool",
    metaDescription: "Reguläre Ausdrücke im Browser mit Flags (g, i, m, s) und Gruppenaufschlüsselung testen und debuggen. Vorlagen für E-Mail und Datum inklusive.",
    seoKeyword: "reguläre ausdrücke testen regex online echtzeit hervorhebung",
    intro: "Reguläre Ausdrücke sind ein äußerst mächtiges Werkzeug für Datenvalidierung, Web-Scraping und Textsuche – doch schon eine falsch gesetzte Klammer oder ein Sternchen kann zu katastrophalen Treffern führen. Wer sein Muster an realistischen Beispieldaten testet, vermeidet Fehler im Betrieb.",
    deepDive: "Die Ausführung übernimmt die native ECMAScript-RegExp-Engine des Browsers – das Verhalten ist damit zu 100 % identisch mit JavaScript- und TypeScript-Backends.",
    steps: [
      ["Muster und Flags eingeben", "Tippen Sie Ihren regulären Ausdruck zwischen die Schrägstriche und aktivieren Sie die Flags (g, i, m)."],
      ["Testtext eingeben", "Fügen Sie Beispieltext ein – Treffer werden sofort grün hervorgehoben."],
      ["Erfasste Gruppen prüfen", "Sehen Sie sich die Tabelle mit Trefferpositionen und Klammergruppen an."],
    ],
    faq: [
      ["Gibt es fertige Muster für häufige Aufgaben?", "Ja, klicken Sie auf die Vorlagen für E-Mail, URL, IPv4-Adresse und Datum (TT.MM.JJJJ bzw. TT/MM/JJJJ)."],
    ],
  },
  "how-to-generate-seo-url-slugs-online": {
    metaTitle: "SEO-URL-Slug-Generator online kostenlos (kebab-case) | FileOmniTool",
    metaDescription: "Aus Artikeltiteln saubere, SEO-freundliche URL-Slugs erzeugen. Entfernt Akzente, Sonderzeichen und Stoppwörter.",
    seoKeyword: "seo url slug generator kebab case online kostenlos",
    intro: "URL-Slugs mit Sonderzeichen, Großbuchstaben, Leerzeichen oder kodierten Umlauten (etwa `%C3%A4` statt `ae`) verwirren Besucher und wirken in den Google-Ergebnissen wenig vertrauenswürdig. Eine saubere kebab-case-URL verbessert die Klickrate.",
    deepDive: "Die Unicode-Normalisierung (NFD) entfernt diakritische Zeichen und transliteriert, bevor Symbole herausgefiltert werden – heraus kommen saubere kebab-case-Zeichenketten.",
    steps: [
      ["Artikeltitel eingeben", "Tippen oder fügen Sie Ihren Titel mit Umlauten und Satzzeichen ein."],
      ["Slug-Optionen festlegen", "Wählen Sie den Bindestrich (-) als Trenner und aktivieren Sie optional das Entfernen von Stoppwörtern."],
      ["SEO-Slug kopieren", "Kopieren Sie die saubere, mit Bindestrichen getrennte Zeichenkette für WordPress oder Next.js."],
    ],
    faq: [
      ["Sollte ich Präpositionen aus URLs entfernen?", "Ja, kürzere URLs mit Fokus auf die Haupt-Keywords schneiden bei Google besser ab."],
    ],
  },
  "how-to-create-zip-archive-files-online": {
    metaTitle: "ZIP-Archive online kostenlos erstellen (im Browser) | FileOmniTool",
    metaDescription: "Mehrere Dateien mit JSZip direkt im Browser zu einem ZIP-Archiv packen und komprimieren. Ganz ohne Server-Upload.",
    seoKeyword: "zip datei erstellen online kostenlos komprimieren",
    intro: "E-Mail-Programme tun sich schwer, wenn Sie 30 einzelne Dateien anhängen – oft greifen dann Anhangslimits oder Spamfilter. In einem einzigen, geordneten ZIP-Archiv lässt sich alles sofort und professionell teilen.",
    deepDive: "Die Komprimierung im Browser mit JSZip setzt Standard-PKZIP-Strukturen in typisierten JavaScript-Arrays mit dem Deflate-Algorithmus zusammen.",
    steps: [
      ["Dateien auswählen", "Ziehen Sie beliebige Dokumente, Bilder und Ordner hinein."],
      ["Im Speicher komprimieren", "JSZip packt und komprimiert die Dateien im Arbeitsspeicher Ihres Browsers."],
      ["ZIP-Archiv herunterladen", "Speichern Sie Ihre .zip-Datei – bereit zum Anhängen an E-Mails oder zum Teilen."],
    ],
    faq: [
      ["Gibt es Einschränkungen bei den Dateitypen?", "Nein, Sie können PDFs, Word-Dokumente, Bilder, Audio und Videos aufnehmen."],
    ],
  },
  "how-to-extract-zip-archives-online-free": {
    metaTitle: "ZIP-Archive online kostenlos entpacken | FileOmniTool",
    metaDescription: "Dateien aus ZIP-Archiven direkt im Browser entpacken und herunterladen. Inhalte vor dem Speichern sicher prüfen.",
    seoKeyword: "zip entpacken online kostenlos privat",
    intro: "Unbekannte ZIP-Archive am Computer zu öffnen, kann riskant sein, wenn sie versteckte ausführbare Dateien enthalten. In der abgeschotteten Umgebung des Browsers prüfen und entpacken Sie einzelne Dokumente sicher.",
    deepDive: "Die JSZip-Engine liest lokale Header und das zentrale Verzeichnis im Speicher, ohne etwas in temporäre Festplatten-Caches des Betriebssystems zu schreiben.",
    steps: [
      ["ZIP-Archiv hochladen", "Legen Sie Ihre .zip-Datei im Entpacker ab."],
      ["Inhalt durchsuchen", "Sehen Sie die vollständige Dateiliste mit den einzelnen Dateigrößen."],
      ["Gewünschte Dateien herunterladen", "Entpacken Sie nur die benötigten Dateien oder laden Sie alles herunter."],
    ],
    faq: [
      ["Kann ich nur eine Datei aus einem großen Archiv entpacken?", "Ja, laden Sie einzelne Dateien herunter, ohne den ganzen Ordner zu entpacken."],
    ],
  },
  "how-to-calculate-verify-file-checksum-md5-sha256": {
    metaTitle: "Prüfsummen von Dateien online kostenlos berechnen und prüfen | FileOmniTool",
    metaDescription: "MD5- und SHA-256-Prüfsummen beliebiger Dateien im Browser berechnen. Hashes vergleichen, um echte und unbeschädigte Downloads zu bestätigen.",
    seoKeyword: "prüfsumme datei berechnen prüfen md5 sha256 online kostenlos",
    intro: "Beim Download von Betriebssystem-ISOs, Firmware-Updates oder Open-Source-Software können Netzwerkfehler Datenpakete beschädigen – oder Angreifer manipulieren Dateien auf Spiegelservern. Die kryptografische Prüfsumme garantiert, dass die Datei auf Ihrer Festplatte Byte für Byte mit dem Original übereinstimmt.",
    deepDive: "SubtleCrypto liest die ArrayBuffers blockweise ein und erzeugt Standard-256-Bit-Hashes, ohne dass etwas in die Cloud übertragen wird.",
    steps: [
      ["Zu prüfende Datei wählen", "Legen Sie eine heruntergeladene Datei ab (Installer, ISO-Image, ZIP-Archiv)."],
      ["Hashes ansehen", "Der Browser berechnet SHA-256, MD5 und SHA-1 im Speicher."],
      ["Mit offizieller Prüfsumme vergleichen", "Fügen Sie die Prüfsumme des Herausgebers in das Vergleichsfeld ein, um eine 100-prozentige Übereinstimmung zu bestätigen."],
    ],
    faq: [
      ["Was, wenn die Prüfsummen nicht übereinstimmen?", "Weichen die Hashes auch nur um ein Zeichen ab, ist die Datei beschädigt oder verändert. Löschen Sie sie und laden Sie sie erneut herunter."],
    ],
  },
  "how-to-inspect-binary-files-hex-viewer-dump": {
    metaTitle: "Hex-Viewer online und Binärdatei-Dump | FileOmniTool",
    metaDescription: "Binärdateien im Browser als Hex-Dump in 16-Byte-Zeilen mit Seitennavigation untersuchen. Schnell, kostenlos und sicher.",
    seoKeyword: "binärdatei hex viewer dump online kostenlos",
    intro: "Fehlt die Dateiendung oder ist sie beschädigt, verweigern Programme das Öffnen. Ein Blick auf die ersten „Magic Bytes“ (etwa `FF D8 FF` bei JPEG oder `50 4B 03 04` bei ZIP) im Hex-Viewer verrät sofort den wahren Dateityp.",
    deepDive: "Seitenweise Uint8Array-Fenster sorgen dafür, dass Dateien jeder Größe sofort angezeigt werden, ohne den Browser zu bremsen.",
    steps: [
      ["Binärdatei hochladen", "Legen Sie eine beliebige Datei ab (beschädigtes Foto, Firmware, ausführbare Datei)."],
      ["Hex-Dump-Raster ansehen", "Sehen Sie 16-Byte-Zeilen mit Offset, Hex-Bytes und ASCII-Zeichen."],
      ["Seiten durchblättern und kopieren", "Blättern Sie flüssig durch die Byte-Seiten, ohne dass der Browser langsamer wird."],
    ],
    faq: [
      ["Hilft das bei der Rettung beschädigter Dateien?", "Ja, über den Magic Header finden Sie die richtige Endung heraus und können die Datei wieder öffnen."],
    ],
  },
  "how-to-convert-base64-string-to-image-file": {
    metaTitle: "Base64 online kostenlos in Bild umwandeln (PNG) | FileOmniTool",
    metaDescription: "Base64-Data-URI-Zeichenketten im Browser in PNG- oder JPG-Bilder decodieren. Live-Vorschau und sofortiger Download.",
    seoKeyword: "base64 in bild umwandeln png jpg online kostenlos",
    intro: "In JSON-Antworten von APIs, Datenbank-Dumps oder CSS-Dateien stößt man oft auf kryptische Base64-Bildstrings. Statt zu rätseln, was sie zeigen, decodieren Sie sie in eine Bilddatei und sehen und speichern sie sofort.",
    deepDive: "Der Browser decodiert die Base64-Zeichen direkt in einen Bild-Blob und ordnet jedem MIME-Typ die passende Dateiendung zu.",
    steps: [
      ["Base64-Code einfügen", "Fügen Sie Ihren Base64-String oder die Data-URI ein (`data:image/png;base64,...`)."],
      ["Sofortige Vorschau", "Der Browser decodiert die Daten und zeigt das Bild live an."],
      ["Bilddatei herunterladen", "Klicken Sie auf „Bilddatei herunterladen“, um es als PNG oder JPG zu speichern."],
    ],
    faq: [
      ["Funktioniert das auch ohne das Präfix „data:image“?", "Ja, Sie können reine Base64-Zeichen einfügen – das Tool erkennt das Format automatisch."],
    ],
  },
  "how-to-convert-srt-to-vtt-subtitles": {
    metaTitle: "SRT kostenlos im Browser in VTT umwandeln (ohne Upload) | FileOmniTool",
    metaDescription: "So wandeln Sie SRT-Untertitel direkt im Browser in WebVTT (.vtt) um und umgekehrt – ganz ohne Cloud-Upload.",
    seoKeyword: "srt in vtt umwandeln kostenlos ohne upload",
    intro: "SRT ist das klassische Format von Desktop-Playern wie VLC, moderne Web-Player und HTML5-Video verlangen jedoch WebVTT. Statt Ihre Transkripte bei zweifelhaften Online-Konvertern hochzuladen, passt FileOmniTool die Zeitstempel-Syntax direkt im Browser-Speicher an.",
    deepDive: "WebVTT (Web Video Text Tracks) schreibt ein striktes Millisekundenformat mit Punkt statt Komma vor (00:01:23.456 statt 00:01:23,456). Die Umwandlung im Browser normalisiert die Zeitstempel lokal per regulärem Ausdruck – ohne Netzwerklatenz und ohne Speicherung der Dateien.",
    steps: [
      ["Untertiteldatei auswählen", "Ziehen Sie Ihre .srt-Datei in den Ablagebereich oder fügen Sie den Untertiteltext direkt ein."],
      ["Sofort umwandeln", "Der Browser ersetzt Kommas durch Punkte und setzt den erforderlichen WEBVTT-Header."],
      [".VTT herunterladen", "Speichern Sie die gültige WebVTT-Datei für HTML5-Video-Tags oder Streaming."],
    ],
    faq: [
      ["Kann ich VTT zurück in SRT umwandeln?", "Ja, mit dem Modus-Schalter wechseln Sie zwischen SRT → VTT und VTT → SRT."],
      ["Werden Untertitel in jeder Sprache unterstützt?", "Ja, die UTF-8-Codierung sorgt für volle Kompatibilität mit Umlauten, Kyrillisch, Griechisch und asiatischen Schriftzeichen."],
    ],
  },
  "how-to-extract-text-transcript-from-srt": {
    metaTitle: "Text aus SRT-Untertiteln kostenlos extrahieren | Untertitel zu TXT",
    metaDescription: "Zeitstempel und Zeilennummern aus Untertiteldateien entfernen und im Browser-Speicher saubere, lesbare Transkripte erhalten.",
    seoKeyword: "text aus srt untertiteln extrahieren kostenlos",
    intro: "Schon einmal Untertitel zu einem Interview, Podcast oder einer Vorlesung heruntergeladen und dann ein Durcheinander aus Zeitcodes und Zeilennummern vorgefunden? Das zu lesen ist eine Qual. Unser Untertitel-Bereiniger entfernt alles Technische und erzeugt lesbare Absätze.",
    deepDive: "Mitlaufende Untertitel wiederholen Sätze oft über mehrere aufeinanderfolgende Blöcke, um ein Scrollen zu simulieren. Unsere Deduplizierung im Browser vergleicht benachbarte Blöcke und fügt sie zu zusammenhängenden Sätzen zusammen – Tausende doppelte Wörter fallen weg.",
    steps: [
      ["Untertiteldatei hochladen", "Legen Sie Ihre .srt- oder .vtt-Datei im Feld ab."],
      ["Automatische Filterung", "Der Parser entfernt Nummern und Zeitstempel wie 00:00:15,000 --> 00:00:18,000."],
      ["Kopieren oder herunterladen", "Kopieren Sie das flüssige Transkript oder speichern Sie es als saubere .txt-Datei."],
    ],
    faq: [
      ["Werden Wörter und Zeichen gezählt?", "Ja, oben im Transkript sehen Sie sofort die Gesamtzahl der Wörter und Zeichen."],
      ["Bleiben meine Vorlesungsnotizen privat?", "Zu 100 %. Nichts wird über das Netzwerk übertragen – die gesamte Verarbeitung läuft im Arbeitsspeicher Ihres Browsers."],
    ],
  },
  "how-to-extract-frames-from-animated-gif": {
    metaTitle: "Einzelbilder aus GIF online kostenlos extrahieren | GIF zu PNG",
    metaDescription: "Animierte GIFs in einzelne PNG-Bilder zerlegen. Einzelne Bilder oder alle Frames als ZIP direkt im Browser herunterladen.",
    seoKeyword: "einzelbilder aus gif extrahieren kostenlos ohne upload",
    intro: "Um ein einzelnes Bild aus einem animierten GIF zu bekommen, greifen viele zu unscharfen Screenshots oder installieren schwere Programme wie Photoshop. FileOmniTool zerlegt die Animation direkt im Browser-Speicher in makellose, verlustfreie 32-Bit-PNG-Bilder.",
    deepDive: "Moderne Browser unterstützen die WebCodecs-API ImageDecoder, die die Delta-Komprimierung zwischen den GIF-Frames direkt über die Grafikhardware entpackt. So stimmen Transparenz und Farbpalette jedes Frames mit der Originaldatei überein.",
    steps: [
      ["GIF auswählen", "Ziehen Sie Ihre .gif-Datei in den Ablagebereich."],
      ["Jeden Frame ansehen", "Durchblättern Sie alle extrahierten Frames mit Nummer und Dauer in Millisekunden."],
      ["Als PNG oder ZIP herunterladen", "Laden Sie einzelne Frames als verlustfreies PNG oder alles gebündelt als ZIP herunter."],
    ],
    faq: [
      ["Funktioniert das mit GIFs vom Smartphone?", "Ja, voll kompatibel mit Chrome und Safari unter iOS und Android."],
      ["Gibt es eine Grenze für die Anzahl der Frames?", "Keine willkürliche Grenze – Animationen mit über 100 Frames sind je nach Gerätespeicher in Sekunden extrahiert."],
    ],
  },
  "how-to-convert-image-to-ascii-art": {
    metaTitle: "Bilder online kostenlos in ASCII-Art umwandeln | FileOmniTool",
    metaDescription: "Fotos und Bilder in Echtzeit in ASCII-Textkunst verwandeln. Spalten und Zeichendichte anpassen, als .txt oder .html exportieren.",
    seoKeyword: "bild in ascii art umwandeln kostenlos",
    intro: "ASCII-Art gehört zu den kultigsten Stilen der frühen Computerzeit. Ob Sie Ihr GitHub-README aufpeppen, Freunde auf Discord beeindrucken oder Retro-Banner fürs Terminal gestalten wollen: Fotos von Hand in Text umzuwandeln, ist unmöglich. Unser Helligkeitsscanner im Browser schafft es in einer Millisekunde.",
    deepDive: "Der Algorithmus ordnet die wahrgenommene Helligkeit jedes Pixels (0,299R + 0,587G + 0,114B) einer abgestuften Zeichendichte-Skala wie '@%#*+=-:. ' zu. Dabei berücksichtigt er das Höhen-Breiten-Verhältnis von Monospace-Schriften, damit Gesichter und runde Formen nicht verzerrt werden.",
    steps: [
      ["Bild hochladen", "Legen Sie ein JPG-, PNG- oder WebP-Foto ab."],
      ["Spalten und Skala einstellen", "Schieben Sie den Breitenregler und wählen Sie Standard-, Detail- oder Blockzeichen."],
      ["Kopieren oder herunterladen", "Kopieren Sie den ASCII-Text oder laden Sie ihn als .txt oder gestaltete .html-Datei herunter."],
    ],
    faq: [
      ["Wo kann ich das ASCII-Ergebnis einfügen?", "Überall, wo Monospace-Schrift unterstützt wird: GitHub-READMEs, Reddit, Discord-Codeblöcke, Editor, Terminalfenster."],
      ["Kann ich helle und dunkle Bereiche umkehren?", "Ja, aktivieren Sie „Kontrast umkehren / Negativ“ für Terminals und dunkle Designs."],
    ],
  },
  "how-to-convert-png-to-ico-windows-icon": {
    metaTitle: "PNG kostenlos in ICO umwandeln (Windows-Symbol) | FileOmniTool",
    metaDescription: "Echte Windows-.ico-Symbole mit mehreren Auflösungen im Browser erstellen. Transparenz bleibt erhalten, ganz ohne Cloud-Upload.",
    seoKeyword: "png in ico umwandeln windows kostenlos ohne upload",
    intro: "Eine Datei von „logo.png“ in „logo.ico“ umzubenennen, erzeugt KEIN Symbol. Windows braucht einen speziellen Binär-Header (ICONDIR) und für jede Anzeigeauflösung einen eigenen Bildeintrag. Unser Tool baut echte ICO-Dateien mit mehreren Auflösungen direkt im Browser-Speicher.",
    deepDive: "Der Compiler erzeugt eine ICONDIR-Struktur (6 Byte), gefolgt von ICONDIRENTRY-Deskriptoren (16 Byte pro Auflösung), die auf die einzelnen PNG-Daten verweisen. Windows Vista, 10 und 11 lesen diese eingebetteten PNGs nativ – mit gestochen scharfer, unkomprimierter Transparenz.",
    steps: [
      ["Quadratisches Bild hochladen", "Legen Sie eine PNG- oder JPG-Datei ab (am besten 512×512 mit transparentem Hintergrund)."],
      ["Symbolgrößen wählen", "Aktivieren Sie die benötigten Auflösungen (16 px, 32 px, 48 px, 64 px)."],
      [".ICO herunterladen", "Speichern Sie die native Windows-Symboldatei."],
    ],
    faq: [
      ["Wie verwende ich das Symbol unter Windows 11?", "Rechtsklick auf einen Ordner oder eine Verknüpfung > Eigenschaften > Anpassen (bzw. Verknüpfung) > Anderes Symbol > Durchsuchen, dann Ihre .ico-Datei auswählen."],
      ["Kann ich es als Favicon für meine Website nutzen?", "Ja, Browser lesen die eingebetteten 16- und 32-px-Bilder automatisch, wenn die Datei im Stammverzeichnis der Website liegt."],
    ],
  },
  "how-to-clean-minify-svg-files": {
    metaTitle: "SVG online kostenlos bereinigen und minifizieren | FileOmniTool",
    metaDescription: "SVG-Vektordateien im Browser bereinigen: Editor-Metadaten und proprietäre Namespaces entfernen und die Dateigröße verringern.",
    seoKeyword: "svg bereinigen minifizieren online kostenlos",
    intro: "Grafikprogramme wie Adobe Illustrator, Inkscape und Figma packen jede Menge proprietären XML-Ballast in exportierte SVGs: Editor-Ebenen, Hilfslinien, Versionsstempel und leere Beschreibungs-Tags. Das bläht Webseiten auf und verschlechtert den Google-PageSpeed-Wert. Unser Bereiniger entfernt den Ballast, ohne Ihre Vektorpfade anzutasten.",
    deepDive: "Der Bereiniger filtert den XML-Baum per regulärem Ausdruck und entfernt DOCTYPE-Deklarationen, Editor-Namespaces (xmlns:inkscape, sodipodi, adobe), Editor-IDs und überflüssige Leerzeichen. Die Darstellung bleibt mathematisch identisch, die Dateigröße sinkt deutlich.",
    steps: [
      ["Vektordatei hochladen", "Legen Sie Ihre .svg-Datei im Ablagebereich ab."],
      ["Automatische Bereinigung", "Kommentare, Editor-Namespaces (inkscape, adobe) und Metadaten-Tags werden entfernt."],
      ["Code kopieren oder herunterladen", "Kopieren Sie das minifizierte Markup direkt in Ihren Code oder laden Sie die bereinigte Datei herunter."],
    ],
    faq: [
      ["Funktioniert Inline-SVG in React oder HTML danach noch?", "Ja – bereinigte SVGs lassen sich sogar viel leichter als Inline-JSX oder -HTML einfügen, ohne Lint-Fehler durch Namespaces."],
      ["Wie viel Platz spare ich?", "Typische SVG-Dateien werden 20 bis 65 % kleiner, je nachdem, wie viele Metadaten der ursprüngliche Editor hinzugefügt hat."],
    ],
  },
  "how-to-protect-pdf-with-password-aes256": {
    metaTitle: "PDF kostenlos mit Passwort schützen (AES-256) | FileOmniTool",
    metaDescription: "PDF-Dokumente mit WebCrypto AES-GCM lokal im Browser-Speicher verschlüsseln und mit Passwort schützen. Ganz ohne Cloud-Upload.",
    seoKeyword: "pdf mit passwort schützen online kostenlos ohne upload",
    intro: "E-Mails sind von Haus aus unverschlüsselt: Wer Steuerbescheide, Bankdaten oder Verträge als ungeschützte PDF-Anhänge verschickt, riskiert, dass Dritte mitlesen. Klassische Online-Dienste verlangen, dass Sie die Datei auf ihre Server laden – damit ist der Datenschutz dahin. FileOmniTool verschlüsselt das Dokument mit WebCrypto im Arbeitsspeicher Ihres Computers.",
    deepDive: "Mit der nativen WebCrypto-Engine SubtleCrypto des Browsers leiten wir aus Ihrem Passwort per PBKDF2 mit 100.000 Iterationen und zufälligem Salt einen 256-Bit-AES-Schlüssel ab. Der Inhalt wird mit authentifiziertem AES-GCM verschlüsselt – ohne Ihr Passwort kann ihn selbst ein Supercomputer nicht entschlüsseln.",
    steps: [
      ["PDF hochladen", "Legen Sie Ihr PDF-Dokument im Verschlüsselungsfeld ab."],
      ["Geheimes Passwort festlegen", "Geben Sie Ihr eigenes Passwort ein."],
      ["Geschützte Datei herunterladen", "Speichern Sie den AES-256-verschlüsselten Container."],
    ],
    faq: [
      ["Wie entschlüsselt der Empfänger die Datei?", "Er nutzt dasselbe kostenlose Tool von FileOmniTool im Modus „Entschlüsseln“, gibt das mitgeteilte Passwort ein und erhält sofort die Original-PDF."],
      ["Was, wenn ich das Passwort vergesse?", "Bei echter AES-256-Verschlüsselung gibt es keine Hintertür und keinen Generalschlüssel. Bewahren Sie Ihr Passwort sicher auf."],
    ],
  },
  "how-to-flatten-pdf-form-fields": {
    metaTitle: "PDF-Formularfelder online kostenlos reduzieren | PDF schreibgeschützt machen",
    metaDescription: "Interaktive PDF-Formulare (AcroForms) im Browser-Speicher zu statischen, schreibgeschützten Seiten reduzieren und so Manipulationen verhindern.",
    seoKeyword: "pdf formularfelder reduzieren flatten online kostenlos",
    intro: "Interaktive PDF-Formulare (AcroForms) sind praktisch für Steuerangaben, Verträge oder Bewerbungen. Doch nach dem Absenden kann jeder mit einem PDF-Reader Ihre Antworten versehentlich oder absichtlich ändern, Beträge anpassen oder Unterschriften entfernen. Das Reduzieren („Flatten“) ist das Standardverfahren, um alles dauerhaft zu fixieren.",
    deepDive: "Beim Reduzieren wird das Erscheinungsbild jedes Formularfelds ausgelesen, dauerhaft auf den Seiteninhalt gezeichnet und das AcroForm-Verzeichnis aus dem Dokumentkatalog entfernt. Die fertige PDF sieht auf allen Druckern, Mobilgeräten und Viewern identisch aus – ganz ohne Formular-Engine.",
    steps: [
      ["Ausfüllbare PDF hochladen", "Legen Sie die PDF mit Textfeldern, Kontrollkästchen oder Unterschriftsfeldern ab."],
      ["Im Arbeitsspeicher verarbeiten", "Die Engine brennt alle interaktiven Elemente in den Seitenhintergrund ein."],
      ["Versiegelte PDF herunterladen", "Speichern Sie das unveränderliche Dokument, bereit zur Weitergabe."],
    ],
    faq: [
      ["Wird die PDF durch das Reduzieren kleiner?", "Ja, ohne Formularstrukturen, Validierungsskripte und Widgets ist die Datei oft kleiner."],
      ["Lässt sich das Reduzieren rückgängig machen?", "Nein. Nach dem Reduzieren ist der Text Teil des Seiteninhalts und kann nicht wieder zu Formularfeldern werden."],
    ],
  },
  "how-to-convert-json-to-sql-insert-queries": {
    metaTitle: "JSON kostenlos in SQL-INSERT-Abfragen umwandeln | FileOmniTool",
    metaDescription: "JSON-Arrays im Browser in SQL-INSERT-INTO-Abfragen umwandeln. Unterstützt die Dialekte MySQL, PostgreSQL und SQLite.",
    seoKeyword: "json in sql insert umwandeln online kostenlos",
    intro: "Daten aus modernen REST-/GraphQL-APIs oder NoSQL-Datenbanken in relationale Datenbanken wie MySQL, PostgreSQL oder SQLite zu übertragen, ist eine häufige Pflichtaufgabe. Python-Importskripte oder Schleifen von Hand zu schreiben, kostet wertvolle Stunden. FileOmniTool liest die JSON-Schlüssel, leitet Spaltentypen ab, maskiert Zeichenketten und erzeugt im Handumdrehen produktionsreife SQL-Anweisungen.",
    deepDive: "Der Parser sammelt alle in den Objekten vorkommenden Schlüssel, sodass Datensätze mit fehlenden Attributen korrekt mit SQL NULL gefüllt werden. Boolesche Werte werden je nach Dialekt zu 1/0 oder TRUE/FALSE, und einfache Anführungszeichen in Texten werden sicher maskiert.",
    steps: [
      ["JSON-Daten einfügen", "Fügen Sie ein Array von Objekten ein oder laden Sie einen .json-Export hoch."],
      ["Tabelle und Dialekt wählen", "Geben Sie den Namen der Zieltabelle ein und wählen Sie MySQL, PostgreSQL oder SQLite."],
      ["SQL-Skript exportieren", "Kopieren Sie die Abfragen oder laden Sie eine .sql-Datei herunter, bereit für phpMyAdmin, DBeaver oder psql."],
    ],
    faq: [
      ["Werden meine Datensätze irgendwohin hochgeladen?", "Nein. Die gesamte JSON-Verarbeitung läuft im Arbeitsspeicher Ihres Browsers. Keine Daten erreichen einen fremden Server."],
      ["Schafft das Tool Tausende Datensätze?", "Ja, moderne JavaScript-Engines verarbeiten Arrays mit über 10.000 Objekten in unter einer Sekunde."],
    ],
  },
  "how-to-convert-html-to-markdown": {
    metaTitle: "HTML online kostenlos in Markdown umwandeln | HTML zu MD",
    metaDescription: "HTML-Code und Webseiten im Browser in sauberes Markdown umwandeln. Überschriften, Listen, Links und Codeblöcke bleiben erhalten.",
    seoKeyword: "html in markdown umwandeln online kostenlos",
    intro: "Wer Inhalte von Websites oder aus Rich-Text-Editoren kopiert, fügt oft unordentliches HTML voller Styles, span-Tags und verschachtelter divs ein. Wenn Sie Notiz-Apps wie Obsidian, Notion oder Bear nutzen oder Dokumentation auf GitHub pflegen, brauchen Sie sauberes Markdown. Unser Konverter behält die wesentliche Formatierung und wirft den Rest weg.",
    deepDive: "Statt auf fehleranfällige Textersetzungen zu setzen, nutzt unser Konverter den nativen DOMParser des Browsers. Er durchläuft den echten Dokumentbaum und erhält verschachtelte Listen, Fett-/Kursiv-Kombinationen, vorformatierte Codeblöcke und Hyperlinks korrekt.",
    steps: [
      ["HTML eingeben", "Fügen Sie Ihr HTML-Markup ein oder laden Sie eine .html-Datei hoch."],
      ["DOM-Umwandlung", "Der Browser analysiert das DOM und übersetzt die Elemente in Markdown-Syntax."],
      [".MD kopieren oder herunterladen", "Kopieren Sie das saubere Markdown oder speichern Sie es als .md-Datei."],
    ],
    faq: [
      ["Werden Tabellen unterstützt?", "Ja, Zeilen und Zellen normaler Tabellen werden in sauberen Text samt Formatierung umgewandelt."],
      ["Kann ich komplette HTML-Webseiten umwandeln?", "Ja, ziehen Sie die .html-Datei einfach in den Ablagebereich."],
    ],
  },
  "how-to-decode-jwt-tokens-offline": {
    metaTitle: "JWT-Tokens offline kostenlos decodieren | FileOmniTool",
    metaDescription: "JSON Web Tokens sicher im Browser untersuchen und decodieren. Ablaufzeit prüfen, ohne sensible Tokens an fremde Server zu senden.",
    seoKeyword: "jwt decodieren offline token inspector kostenlos",
    intro: "Fügen Sie niemals Bearer-Tokens aus der Produktion, Authentifizierungs-Cookies oder Identitätsdaten von Nutzern in beliebige Online-Debugger ein: Diese Server können Ihre Zugangsdaten protokollieren und Sitzungen kapern. FileOmniTool decodiert JWT-Strukturen vollständig offline im Arbeitsspeicher Ihres Browsers.",
    deepDive: "Ein JSON Web Token besteht aus drei base64url-codierten, durch Punkte getrennten Teilen: Header, Payload und Signatur. Unser Skript decodiert die Base64Url-Teile im Browser, rechnet den Unix-Zeitstempel „exp“ in Ihre Ortszeit um und zeigt an, ob das Token noch gültig oder abgelaufen ist.",
    steps: [
      ["Token einfügen", "Fügen Sie Ihr Bearer-Token oder den Authorization-String ein."],
      ["Decodierte Claims prüfen", "Header-Algorithmus und Payload-JSON werden übersichtlich formatiert angezeigt."],
      ["Ablaufstatus prüfen", "Sehen Sie sofort die genaue Ablaufzeit in lesbarer Form und die Gültigkeit."],
    ],
    faq: [
      ["Funktioniert das Tool ohne Internet?", "Ja. Sobald die Seite geladen ist, können Sie das WLAN trennen – der Decoder arbeitet weiter."],
      ["Wird die geheime Signatur geprüft?", "Der Signaturblock wird isoliert angezeigt; nach Ihren geheimen Schlüsseln wird dabei nie gefragt."],
    ],
  },
  "how-to-minify-css-stylesheets": {
    metaTitle: "CSS online kostenlos minifizieren | CSS-Kompressor",
    metaDescription: "CSS-Stylesheets im Browser ohne Server-Upload komprimieren. Dateigröße verringern, Bandbreite sparen und Websites beschleunigen.",
    seoKeyword: "css minifizieren online kostenlos",
    intro: "Jedes Leerzeichen, jede Tab-Einrückung und jeder Kommentar in Ihrer CSS-Datei ist verschwendete Bandbreite, die mobile Nutzer über ihr Datenvolumen laden müssen. Googles Core Web Vitals strafen langsam ladende Stylesheets deutlich ab. Unser CSS-Minifier entfernt alle überflüssigen Zeichen, ohne Ihre Layoutregeln zu ändern.",
    deepDive: "Der Minifier entfernt mehrzeilige Kommentare (/* ... */), streicht das letzte Semikolon vor schließenden geschweiften Klammern und löscht Leerzeichen rund um CSS-Kombinatoren (+, >, ~) und Deklarationen. Übrig bleibt dichtes, reines CSS, das sofort verarbeitet wird.",
    steps: [
      ["CSS-Datei hochladen", "Legen Sie Ihr .css-Stylesheet im Feld ab."],
      ["Sofortige Komprimierung", "Kommentare und Leerzeichen um Klammern und Semikolons werden entfernt."],
      [".min.css herunterladen", "Laden Sie das minifizierte, produktionsreife Stylesheet herunter."],
    ],
    faq: [
      ["Gehen dabei CSS-Animationen oder Grid-Layouts kaputt?", "Nein. Entfernt werden nur überflüssige Leerzeichen und Kommentare; gültige Selektoren und Eigenschaften bleiben unverändert."],
      ["Kann ich den ursprünglichen Code später wiederherstellen?", "Bewahren Sie für die Entwicklung immer eine nicht minifizierte Kopie auf und nutzen Sie die .min.css-Version im Live-Betrieb."],
    ],
  },
  "how-to-convert-unix-epoch-timestamps": {
    metaTitle: "Unix-Timestamp-Umrechner (Epoch) kostenlos | FileOmniTool",
    metaDescription: "Unix-Zeitstempel in Sekunden oder Millisekunden in Echtzeit in lesbare Datumsangaben in Ortszeit und UTC umrechnen. 100 % kostenlos.",
    seoKeyword: "unix timestamp epoch in datum umrechnen kostenlos",
    intro: "Computer zählen die Zeit in Sekunden seit dem 1. Januar 1970, Mitternacht UTC – der berühmten Unix-Epoche. Für Server ideal, doch ein Zeitstempel wie „1728564120“ in einem Fehlerprotokoll ist für Menschen völlig unverständlich. Unser Umrechner übersetzt ihn in Echtzeit in ein klares Kalenderdatum.",
    deepDive: "Eine typische Falle ist die Verwechslung von Unix-Sekunden (10 Stellen) und JavaScript-/Java-Millisekunden (13 Stellen). Unser Umrechner erkennt Werte über 100.000.000.000, passt die Skala automatisch an und zeigt sowohl Ihre lokale Zeitzone als auch UTC.",
    steps: [
      ["Zeitstempel oder Datum eingeben", "Tippen Sie den numerischen Unix-Zeitstempel ein oder wählen Sie ein Kalenderdatum."],
      ["Umrechnung in Echtzeit", "Das Tool erkennt automatisch, ob es sich um Sekunden oder Millisekunden handelt."],
      ["Ergebnisse ansehen", "Sehen Sie Ortszeit, UTC, ISO-8601 und relative Zeit (z. B. „vor 3 Stunden“)."],
    ],
    faq: [
      ["Was passiert beim Jahr-2038-Problem?", "Am 19. Januar 2038 laufen vorzeichenbehaftete 32-Bit-Ganzzahlen über. Moderne 64-Bit-Systeme verarbeiten Zeitstempel noch für Milliarden Jahre problemlos."],
      ["Kann ich auch ein Datum in einen Epoch-Wert umrechnen?", "Ja, wählen Sie im zweiten Feld ein beliebiges Datum und eine Uhrzeit, um den exakten Unix-Zeitstempel zu erhalten."],
    ],
  },
  "how-to-convert-any-file-to-base64": {
    metaTitle: "Beliebige Dateien online kostenlos in Base64 umwandeln | FileOmniTool",
    metaDescription: "Dokumente, Archive und Medien in Base64-Text codieren und Base64-Strings im Browser zurück in herunterladbare Dateien verwandeln.",
    seoKeyword: "datei in base64 umwandeln online kostenlos",
    intro: "Mit Base64 lässt sich jede Binärdatei – ob Rechnungs-PDF, verschlüsseltes Archiv oder Soundclip – als reiner Text darstellen, der per E-Mail verschickt, in JSON eingebettet oder in Textspalten einer Datenbank gespeichert werden kann. FileOmniTool arbeitet in beide Richtungen: von der Datei zu Base64 und von Base64 zurück zur Datei.",
    deepDive: "Base64 bildet je 3 Byte Binärdaten (24 Bit) auf 4 druckbare ASCII-Zeichen (je 6 Bit) ab – die Datei wird dadurch etwa 33 % größer. Da Codierung und Decodierung komplett in typisierten JavaScript-Arrays laufen, berühren Ihre privaten Dateien nie einen fremden Server.",
    steps: [
      ["Binärdatei auswählen", "Legen Sie eine beliebige Datei ab (PDF, Bild, Audio, ZIP, ausführbare Datei)."],
      ["Sofortige Base64-Codierung", "Der Browser wandelt die Binärdaten im lokalen Arbeitsspeicher in ASCII-Text um."],
      ["Kopieren oder als .txt herunterladen", "Kopieren Sie den Base64-String oder laden Sie ihn als .txt-Datei herunter."],
    ],
    faq: [
      ["Kann ich Base64 zurück in die Originaldatei verwandeln?", "Ja. Wechseln Sie zu „Base64 zu Datei“, fügen Sie den String ein, geben Sie einen Dateinamen mit Endung ein (z. B. datei.pdf) und klicken Sie auf Herunterladen."],
      ["Werden Data-URIs unterstützt?", "Ja, Standard-Data-URIs mit MIME-Typ werden automatisch erkannt."],
    ],
  },
  "how-to-identify-unknown-file-type-magic-bytes": {
    metaTitle: "Unbekannte Dateien anhand der Magic Bytes erkennen | FileOmniTool",
    metaDescription: "Magic Bytes der Dateisignatur im Browser prüfen, um das echte Format und den MIME-Typ unbekannter Dateien ohne Endung zu ermitteln.",
    seoKeyword: "unbekannte datei erkennen magic bytes online kostenlos",
    intro: "Schon einmal einen Anhang namens „download.dat“ heruntergeladen oder eine beschädigte Datei ohne Endung bekommen, mit der Ihr Betriebssystem nichts anfangen kann? Die Endung blind zu ändern, ist frustrierend. Jede echte Datei beginnt mit eindeutigen „Magic Bytes“, die ihre wahre Identität verraten. Unser Tool liest diese Bytes und erkennt das Format in Millisekunden.",
    deepDive: "Betriebssysteme verlassen sich auf Dateiendungen, Programme beim Einlesen aber auf die Dateisignatur. Eine PDF beginnt zum Beispiel immer mit „%PDF“ (hex 25 50 44 46), ein PNG mit hex 89 50 4E 47, ein ZIP- oder Office-Container mit „PK“ (hex 50 4B 03 04), und eine MP4 enthält „ftyp“ ab Byte 4. Wir lesen die ersten 32 Bytes und gleichen sie mit forensischen Signaturdatenbanken ab.",
    steps: [
      ["Unbekannte Datei ablegen", "Ziehen Sie eine beschädigte, umbenannte oder endungslose Datei hinein."],
      ["Magic Bytes prüfen", "Das Tool vergleicht die ersten 32 Header-Bytes mit bekannten Signaturen."],
      ["Wiederherstellen und herunterladen", "Klicken Sie auf Wiederherstellen, um die Datei mit ihrer echten Endung herunterzuladen (z. B. .pdf, .zip, .png)."],
    ],
    faq: [
      ["Welche Formate erkennt das Tool?", "Alle wichtigen: PDF, PNG, JPEG, GIF, WebP, ZIP, RAR, 7z, GZ, MP3, MP4, WebM, OGG, WebAssembly und Windows-EXE-Dateien."],
      ["Ist es sicher, verdächtige Dateien zu prüfen?", "Ja. Die Datei wird nie ausgeführt – wir lesen nur die ersten 32 Bytes als passive Daten im Speicher."],
    ],
  },
};
