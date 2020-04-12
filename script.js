displayWeatherInfo()
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

function displayWeatherInfo() {

    var APIKey = "805931329d6f9a6f259c47e3b7125c49"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Bujumbura,Burundi&appid=" + APIKey;
    
$.ajax({
    url: queryURL,
    method: "GET"
// We store all of the retrieved data inside of an object called "response"
  }).then(function(response) {

console.log(response)
console.log(queryURL)

 var cityName = response.name 
 console.log(cityName)
 $("#city").text(cityName)
 //do not have to append since element exists in html
 
 var date = moment().format('LL')
 console.log(date)
 $("#date").html(date)
 
 var temp = response.main.temp
 console.log(temp)
 var tempF = (temp - 273.15) * 1.80 + 32;
 console.log(tempF)
 $("#temp").text("Temperature: " + tempF);

 var humidity = response.main.humidity
 console.log(humidity)
 $("#humidity").text("Humidity: "+humidity)
 //var windSpeed = response.wind.speed
// var uvIndex = response.



})

}
