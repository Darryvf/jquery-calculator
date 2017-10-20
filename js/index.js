$(document).ready(function() {
  var str = "";
  var screen = $('#screen');
  var d;
  var e;
  var f;
  $("span").click(function(event) {
    event.preventDefault();
    var target = $(event.target);
    var text =
      target.context.innerHTML;
    str += text;
    screen.html(str);

    $("#equals").click(function(event) {
      event.preventDefault();
      str = str.replace(/=/g, '');
      str = str.replace(/x/g, '*');
      str = str.replace(/÷/g, '/');
      str = eval(str);
  screen.html(str);
    })
    $("#clear").click(function(event) {
      event.preventDefault();
      screen.html('');
      str = '';
    })

  });
});
