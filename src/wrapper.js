(function () {
function create(window) {
  window = window || eval("require('js"+"dom')").jsdom().createWindow();
  
  // assume window is a jsdom instance...
  // jsdom includes an incomplete version of XMLHttpRequest
  try {
    window.XMLHttpRequest = eval("require('xml"+"httprequest')").XMLHttpRequest;
    // trick jQuery into thinking CORS is supported (should be in node-XMLHttpRequest)
    window.XMLHttpRequest.prototype.withCredentials = false;
  }
  catch (e) {}

  var location = window.location,
      navigator = window.navigator,
      XMLHttpRequest = window.XMLHttpRequest;

  //JQUERY_SOURCE

  window.jQuery.noConflict();
  return window.jQuery;
}
module.exports = create('undefined' === typeof window ? undefined : window);
module.exports.create = create;
}());
