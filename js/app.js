//Initialize code block formatter
hljs.initHighlightingOnLoad();

//Light/Dark Mode initializer
document.addEventListener("DOMContentLoaded", function (event) {
  document.documentElement.setAttribute("data-theme", "light");
  var switchButtons = document.getElementById("themeButton");
  var switchLogos = document.getElementById("themeLogo");
  var themeSwitcher = document.getElementById("theme-switcher");
  themeSwitcher.onclick = function () {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var switchToTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", switchToTheme);
    if (switchToTheme === "dark") {
      switchButtons.innerHTML =
        "<span class='badge rounded-pill bg-warning float-end' id='theme-switcher' onclick='lightDarkMode();'><i class='bi bi-brightness-high-fill'></i></span>";
      switchLogos.innerHTML = "<a href='#Top'><img src='images/workpath_logo_dark.png' alt='Workpath API' width='180px' /></a>";
    } else {
      switchButtons.innerHTML =
        "<span class='badge rounded-pill bg-dark float-end' id='theme-switcher' onclick='lightDarkMode();'><i class='bi bi-moon'></i></span>";
      switchLogos.innerHTML = "<a href='#Top'><img src='images/workpath_logo.png' alt='Workpath API' width='180px' /></a>";
    }
  };
});

//Light/Dark Mode after initial button click
function lightDarkMode() {
  var switchLogos = document.getElementById("themeLogo");
  var switchButtons = document.getElementById("themeButton");
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var switchToTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", switchToTheme);
  if (switchToTheme === "dark") {
    switchButtons.innerHTML =
      "<span class='badge rounded-pill bg-warning float-end' id='theme-switcher' onclick='lightDarkMode();'><i class='bi bi-brightness-high-fill'></i></span>";
    switchLogos.innerHTML = "<a href='#Top'><img src='images/workpath_logo_dark.png' alt='Workpath API' width='180px' /></a>";
  } else {
    switchButtons.innerHTML =
      "<span class='badge rounded-pill bg-dark float-end' id='theme-switcher' onclick='lightDarkMode();'><i class='bi bi-moon'></i></span>";
    switchLogos.innerHTML = "<a href='#Top'><img src='images/workpath_logo.png' alt='Workpath API' width='180px' /></a>";
  }
}

//Accordian Sidenav
function changeClassName(nav) {
  var newNavTab = document.getElementById(nav);
  if (newNavTab.className === "hidden") {
    newNavTab.className = "selected";
  } else {
    newNavTab.className = "hidden";
  }
}

// function search() {
//   var name = document.getElementById("searchForm").elements["searchItem"].value;
//   var pattern = name.toLowerCase();
//   var targetId = "";

//   var divs = document.getElementsByClassName("col-6");
//   for (var i = 0; i < divs.length; i++) {
//     var para = divs[i].getElementsByTagName("p");
//     var index = para[0].innerText.toLowerCase().indexOf(pattern);
//     if (index != -1) {
//       targetId = divs[i].parentNode.id;
//       document.getElementById(targetId).scrollIntoView();
//       break;
//     }
//   }
// }
