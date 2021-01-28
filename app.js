function goHere(section, nav) {
  var element = document.getElementById(section);
  changeClassName(nav);
  element.scrollIntoView();
}

function changeClassName(nav) {
  var newNavTab = document.getElementById(nav);
  var oldNavTab = document.getElementsByClassName("selected")[0];
  oldNavTab.className = oldNavTab.className.replace(/\bselected\b/g, "");
  newNavTab.className = "selected";
}
