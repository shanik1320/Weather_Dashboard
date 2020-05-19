//add the weather api
var APIKey = "c170d70d54f7a96f7a41dd23b50e6768";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=" +APIKey;
// "https://api.openweathermap.org/data/2.5/forecast?q={city name},{state}&appid=" + APIKey
// "https://api.openweathermap.org/data/2.5/forecast?" + "q={city},{state}&appid=" + APIKey;


$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {
    console.log(queryURL);

      console.log(response);
    //   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    //     $(".wind").text("Wind Speed: " + response.wind.speed);
    //     $(".humidity").text("Humidity: " + response.main.humidity);
  })