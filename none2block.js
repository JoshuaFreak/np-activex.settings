(function() {
  function reload() {
    var objs = document.querySelectorAll('object');
    for (var i = 0; i < objs.length; ++i) {
      if (getComputedStyle(objs[i]).display == 'none') {
        objs[i].style.display = 'block';
        objs[i].style.width = "0px";
        objs[i].style.height = "0px";
      }
    }
  }
  if (document.readyState == 'complete') {
    reload();
  } else {
    window.addEventListener('load', reload, false);
  }
})();
