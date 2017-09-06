var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();

  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function() {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  console.log(jsonString);
  var beers = JSON.parse(jsonString);
  localStorage.setItem('Beers', jsonString);

  var ul = document.querySelector('#beers');

  beers.forEach( function(beer){
    var li = document.createElement('li');
    var img = document.createElement('img');
    li.innerText = beer.name;
    img.src = beer.image_url;
    img.width = 50;
    li.appendChild(img);
    ul.appendChild(li);
  })

}

