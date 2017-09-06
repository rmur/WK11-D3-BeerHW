var app = function(){
  var url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);

  // var selectFromDropDown = document.querySelector('select');
  // selectFromDropDown.addEventListener('input', handleSelect);
}

window.addEventListener('load', app);