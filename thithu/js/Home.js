
window.onload = function (e) {
  $.get("./Header.html", function (data, status) {
    $("Header").html(data);
  });
  
};

