(function () {
  function patch() {
    if (window.ShowPayPage && window.InitControls) {
      ShowPayPage = function(orig) {
        return function(par) {
          orig(par);
          InitControls();
        }
      } (ShowPayPage);
    }
    CallbackCheckClient = function() {};
  }
  if (document.readyState == 'complete') {
    patch();
  } else {
    window.addEventListener('load', patch, false);
  }
})();
