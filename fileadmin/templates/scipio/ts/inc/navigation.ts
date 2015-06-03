##### Navigation
lib.navigation = HMENU
lib.navigation {
  # Hauptnavigation = erste Ebene = entryLevel = 0
  entryLevel = 0
  select.languageField = sys_language_uid
  1 = TMENU
  1 {
    noBlur = 1
    expAll = 1
    collapse = 0
    NO = 1
    NO {
      allStdWrap.dataWrap = <li>|</li>
      ATagTitle.field = title // subtitle
      ATagParams =
      allStdWrap.insertData = 1
    }
    ACT = 1
    ACT < .NO
    ACT {
      allStdWrap.dataWrap = <li class="active">|</li>
      ATagParams =
      allStdWrap.insertData = 1
    }
  }
}