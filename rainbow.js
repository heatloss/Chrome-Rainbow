var myRequest = new Request('https://sou01uewob.execute-api.us-east-1.amazonaws.com/get_rainbow_brights');
var theDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var theMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var d = new Date();
document.getElementById("todaysDate").innerHTML = theDays[d.getDay()] + ", " + theMonths[d.getMonth()] + " " + d.getDate();

var myRequest = new Request('https://wuq1fusv1h.execute-api.us-east-1.amazonaws.com/prod/');
var brightBox = document.getElementById("brights");

fetch(myRequest).then(function(response) {
  return response.json()
}).then(function(json) {
  console.log('parsed json', json);

  var brightList = json.brights;

  while (brightBox.lastChild) {
    brightBox.removeChild(brightBox.lastChild);
  }
  
  Object.keys(brightList).forEach(function(k) {
    var brightLink = document.createElement("a");
    var brightImg = document.createElement("img");
    brightLink.appendChild(brightImg);
    brightImg.href = brightList[k].url;
    brightImg.src = brightList[k].image;
    brightBox.appendChild(brightLink);
  });
}).catch (function(ex) {
  console.log('parsing failed', ex)
})
