// var myImage = document.querySelector('img');

var myRequest = new Request('https://sou01uewob.execute-api.us-east-1.amazonaws.com/get_rainbow_brights');

fetch(myRequest).then(function(response) {
  return response.blob();
}).then(function(response) {
  var objectURL = URL.createObjectURL(response);
  console.log(objectURL);
//   myImage.src = objectURL;
});