// var myImage = document.querySelector('img');

var myRequest = new Request('https://sou01uewob.execute-api.us-east-1.amazonaws.com/get_rainbow_brights');

fetch(myRequest)
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json);
    var obj=json.brights;

    Object.keys(obj).forEach(function(k){
			console.log(k + ' - ' + obj[k].url);
			var theBright  = document.createElement("img");
			theBright.src = obj[k].url;
			document.getElementById("brights").appendChild(theBright);
		});
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })