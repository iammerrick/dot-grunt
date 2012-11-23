define(['jquery', './views/HelloView'], function($, HelloView) {
  var hello = new HelloView().render();
  $(function() {
    $(document.body).append(hello.el);
  });
});