$(document).ready(function(){
  // var APIKey = "218f7f29ea28f9c27590845f89e27aae";

  $(".btn").click(function(){
    var city =$("#city").val();

    if(city != ""){
      $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=218f7f29ea28f9c27590845f89e27aae",
        type: "GET",
      }).then(function(reponse){
        console.log(reponse)
      })
    }else{
      $("#error").html("Field cannot be empty")
    }
  })
});

function weather(reponse)
