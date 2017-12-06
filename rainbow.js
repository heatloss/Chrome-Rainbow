// var myImage = document.querySelector('img');

var myRequest = new Request('https://sou01uewob.execute-api.us-east-1.amazonaws.com/get_rainbow_brights');
var theDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var theMonths = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var d = new Date();
document.getElementById("todaysDate").innerHTML = theDays[d.getDay()] + ", " + theMonths[d.getMonth()] + " " + d.getDate()	;

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