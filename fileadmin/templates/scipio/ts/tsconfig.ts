RTE.default {
#angepasste CSS Datei in fileadmin speichern
contentCSS = /typo3/fileadmin/templates/scipio/assets/css/style.min.css
}
## Klassen hinzufuegen
RTE.default.proc.allowedClasses := addToList(error, small, arrowlink, button)
RTE.default.buttons {
   blockstyle.tags.div.allowedClasses := addToList(error, small)
   textstyle.tags.span.allowedClasses := addToList(small)
   link.properties.class.allowedClasses := addToList(arrowlink, button)
}
## nicht benoetigte Klassen entfernen
RTE.default.proc.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2, important, name-of-person, detail)
RTE.default.buttons {
   blockstyle.tags.div.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2) }
RTE.classes := removeFromList(csc-frame-frame1, csc-frame-frame2, important, name-of-person, detail)

tx_news.templateLayouts {
  0 = Typo3 Standard
  1 = Scipio News Theme
}
