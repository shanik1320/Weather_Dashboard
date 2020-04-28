//add the weather api
var APIKey = "08f799c58a6f983cf5f271232c7ecd27";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?" + "q={city},{state}&appid=" + APIKey;


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
  })