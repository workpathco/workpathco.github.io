$(document).ready(function () {
  $("#searchButton").click(function () {
    var searchedText = $("#searchItem").val();
    $(".p:contains('" + searchedText + "')").each(function (i, element) {
      var content = $(element).text();
      content = content.replace(searchedText, '<span class="search-found">' + searchedText + "</span>");
      element.html(content);
    });
  });

  $(".menu li:has(ul)").click(function (e) {
    if ($(this).hasClass("activado")) {
      $(this).removeClass("activado");
      $(this).children("ul").slideUp();
    } else {
      $(".menu li ul").slideUp();
      $(".menu li").removeClass("activado");
      $(this).addClass("activado");
      $(this).children("ul").slideDown();
    }

    // $(".menu li ul li a").click(function () {
    //   window.location.href = $(this).attr("href");
    // });
  });
});
