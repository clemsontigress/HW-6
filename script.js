
$(document).ready(function() {

  $('#weather-search').on('click', function() {

    var citySearch = $('#search-input').val().trim();

    if (citySearch != '') {
      displayWeatherInfo()
      $('#search-input').val('');
    }
    else {$("#error").html('Field cannot be blank')}
    
});
    
   
 function displayWeatherInfo(){
   
  var citySearch = $('#search-input').val().trim();
   var APIKey = "&appid=805931329d6f9a6f259c47e3b7125c49"
   var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + APIKey;

   $.ajax({
     url: queryURL,
     method: "GET"
 
   }).then(function(response) {
     
     
       var cityName = response.name 
       console.log(cityName)
       $("#city").text(cityName)
       //do not have to append since element exists in html
       
       var date = moment().format('LL')
       console.log(date)
       $("#date").html(date)
       
       var temp = response.main.temp
       console.log(temp)
       var tempF = Math.floor((temp - 273.15) * 1.80 + 32);
       console.log(tempF)
       $("#temp").text("Temperature: " + tempF);
      
       var humidity = response.main.humidity
       console.log(humidity)
       $("#humidity").text("Humidity: "+humidity)
      
       var windSpeed = response.wind.speed
       console.log(windSpeed)
       $("#windSpeed").text("Wind Speed: "+ windSpeed)
       
  
 });
} 
  

});
  
 


//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
