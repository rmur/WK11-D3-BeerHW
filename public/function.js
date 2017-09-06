var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();

  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var listBeers = function(beers) {
  var section = document.querySelector('#beers');
  beers.forEach( function(beer){
    beerInfo(beer, section)
  });
}

var beerInfo = function(beer, section){  
  var beerName = document.createElement('H4');
  var beerImg = document.createElement('img');
  beerName.innerText = beer.name;
  beerImg.width = 50;
  beerImg.src = beer.image_url;
  section.appendChild(beerName);
  section.appendChild(beerImg);
}

var requestComplete = function() {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  console.log(jsonString);
  var beers = JSON.parse(jsonString);
  localStorage.setItem('Beers', jsonString);
  
  listBeers(beers);
  // beers.forEach( function(beer){
 // });
}



