window.onload = function (e) {
  $.get("./header.html", function (data, status){
      $("header").html(data);
  });
}  