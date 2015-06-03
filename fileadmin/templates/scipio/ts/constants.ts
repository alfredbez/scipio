## News Templates
plugin.tx_news.view {
  layoutRootPath = fileadmin/templates/scipio/ext/news/Layouts/
  partialRootPath = fileadmin/templates/scipio/ext/news/Partials/
  templateRootPath = fileadmin/templates/scipio/ext/news/Templates/

        settings.list.paginate {
                itemsPerPage = 3
                insertAbove = false
                insertBelow = TRUE
                lessPages = TRUE
                forcedNumberOfLinks = 5
                pagesBefore = 2
                pagesAfter = 2
            }
}
content.RTE_compliant = 0

paths {
  template = fileadmin/templates/scipio/
  css = assets/css/
}
