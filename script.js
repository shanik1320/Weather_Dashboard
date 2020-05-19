$(document).ready(function(){
  var APIKey = "218f7f29ea28f9c27590845f89e27aae";

  $("#submit").on("click", getWeather);
  $(document).on("click", "history", function () {
    var userCity =$(this).data("city");
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&units=imperial&appid=" + APIKey;
    weatherAjaxCall(queryURL);

  })
  function getWeather(e) {
    
    e.preventDefault();
   
    var userCity = $("#city-input").val();
    var userCity = userCity.toLowerCase();
 
    localStorage.setItem(userCity, userCity);
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&units=imperial&appid=" + APIKey;
    weatherAjaxCall(queryURL);
    renderCities();
  }



})
