(function () {
  var hiddenDivId = "__hiddendiv_activex";
  window.__proto__.ActiveXObject = function(progid) {
    progid = progid.trim();
    var e = document.createEvent('TextEvent');
    e.initTextEvent(
      '__npactivex_log_event__', false, false, window, 
      'Dynamic create ' + progid);
    window.dispatchEvent(e);
    if (progid == 'Msxml2.XMLHTTP' || progid == 'Microsoft.XMLHTTP')
      return new XMLHttpRequest();
    var hiddenDiv = document.getElementById(hiddenDivId);
    if (!hiddenDiv) {
      if (!document.body) document.body=document.createElement("body");
      hiddenDiv = document.createElement("div");
      hiddenDiv.id = hiddenDivId;
      hiddenDiv.setAttribute("style", "display:hidden; width:0px; height:0px");
      document.body.insertBefore(hiddenDiv, document.body.firstChild)
    }
    var obj = document.createElement("object");
    obj.setAttribute("type", "application/x-itst-activex");
    obj.setAttribute("progid", progid);
    obj.setAttribute("style", "display:hidden; width:0px; height:0px");
    hiddenDiv.appendChild(obj);
    return obj.object
  }
  //console.log("ActiveXObject declared");
})();
