##### Basis Defintionen
config {
  extTarget = _blank
  noPageTitle = 1
  spamProtectEmailAddresses = 2
  spamProtectEmailAddresses_atSubst = <span style="display: none;">noSpam</span>@
  baseURL = http://project-scipio.org/typo3/
  sys_language_uid = 0
  language = en
  locale_all = en_EN.UTF8
  compressJs = 0
  compressCss = 0
  concatenateJs = 0
  concatenateCss = 0
}
tt_content.stdWrap.dataWrap >
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines >
page = PAGE
page{
  typeNum = 0
  10 = FLUIDTEMPLATE
  10 {
    partialRootPath = {$paths.template}partials/
    file.stdWrap.cObject = CASE
    file.stdWrap.cObject {
      # slide the template
      key.data = levelfield:-1, backend_layout_next_level, slide
      key.override.field = backend_layout
      # 'Standard' Template
      2 = TEXT
      2.value = {$paths.template}layouts/standard.html
    }
  }

  config {
    headerComment (
—————————————————————————————————————————————————————
|                                                   |
| TYPO3 Entwicklung durch                           |
| Alfred Bez                                        |
|                                                   |
| www.alfredbez.de                                  |
|                                                   |
—————————————————————————————————————————————————————
    )
    xmlprologue = none
    doctype = html5
    disablePrefixComment = 1
    metaCharset = UTF-8
    sys_language_overlay = hideNonTranslated
    no_cache = 1
    simulateStaticDocuments = 0
    tx_realurl_enable = 1
    uniqueLinkVars = 1
  }
  meta{
    viewport = width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1
    X-UA-Compatible = IE=edge,chrome=1
    X-UA-Compatible.httpEquivalent = 1
  }
  headerData {
    1 = TEXT
    1.value = <meta name="TYPO3-Entwicklung-durch" content="Alfred Bez" />
  }
  includeCSS {
    file1 = {$paths.template}{$paths.css}style.min.css
    file1.media = all
    file2 = {$paths.template}{$paths.css}custom.css
    file2.media = all
  }
}

lib.content {
  # BackendLayouts-Spalten (colPos) in TS-Variablen speichern
  columns1 < styles.content.get
  columns1.select.where = colPos = 1
}
<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/scipio/ts/inc/navigation.ts">
