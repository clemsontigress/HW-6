
$(document).ready(function() {

  $('#weather-search').on('click', function() {

    var citySearch = $('#search-input').val().trim();

    if (citySearch != '') {
      
      getCoord()
      addHistory()
      $('#search-input').val('');
      $('#error').text('');
      
    }
    else {$("#error").html('Field cannot be blank')}        
});
    
var historyArr = []

  function getCoord() {
    var citySearch = $('#search-input').val().trim();
    var APIKey = "&appid=805931329d6f9a6f259c47e3b7125c49"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + APIKey;
  
    $.ajax({
      url: queryURL,
      method: "GET"
  
    }).then(function(response) {
         
        console.log(queryURL)
        console.log(response.coord.lat)

      var cityName = response.name 
       console.log(cityName)
       $("#city").text(cityName + " Current Weather")
       
       var date = moment().format('LL')
       console.log(date)
       $("#date").html(date)
       
       var temp = response.main.temp
       console.log(temp)
       var tempF = Math.floor((temp - 273.15) * 1.80 + 32);
       console.log(tempF)
       $("#temp").text("Temperature: " + tempF + ' deg F');
      
       var humidity = response.main.humidity
       console.log(humidity)
       $("#humidity").text("Humidity: "+ humidity + "%")
      
       var windSpeed = response.wind.speed
       console.log(windSpeed)
       $("#windSpeed").text("Wind Speed: "+ windSpeed)

       var icon = response.weather.icon
       console.log(icon)
       $("#icon").html(icon)
  

  var coordlat = response.coord.lat
  var coordlon = response.coord.lon
  var APIKey = "&appid=805931329d6f9a6f259c47e3b7125c49"
  var queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordlat}&lon=${coordlon}${APIKey}`;

    $.ajax({
      url: queryURL,
      method: "GET"

    }).then(function(response) {
       
        console.log(queryURL)

    //Day 1 Forecast
    
     var day = moment().add(1, 'day').format('dddd, MMMM Do') 
     $('#date-day1').html(day)

     var temp = response.daily[0].temp.day
     //console.log(temp)
      var tempF = Math.floor((temp - 273.15) * 1.80 + 32);
     $("#temp-day1").text('Temperature: ' + tempF + ' deg F')
      var humidity = response.daily[0].humidity
      //console.log(humidity)
     $("#humidity-day1").text('Humidity: ' + humidity + "%")
    
     //Day 2 Forecast

     var day = moment().add(2, 'day').format('dddd, MMMM Do') 
     $('#date-day2').html(day)
      var temp = response.daily[1].temp.day
      //console.log(temp)
      var tempF = Math.floor((temp - 273.15) * 1.80 + 32);
      $("#temp-day2").text('Temperature: ' + tempF + ' deg F')
      var humidity = response.daily[1].humidity
      $("#humidity-day2").text('Humidity: ' + humidity + "%") 
    
      //Day 3 Forecast

      var day = moment().add(3, 'day').format('dddd, MMMM Do') 
     $('#date-day3').html(day)
      var temp = response.daily[2].temp.day
      //console.log(temp)
      var tempF = Math.floor((temp - 273.15) * 1.80 + 32);
      $("#temp-day3").text('Temperature: ' + tempF + ' deg F')
      var humidity = response.daily[2].humidity
      $("#humidity-day3").text('Humidity: ' + humidity + "%") 
    
      //Day 4 Forecast

      var day = moment().add(4, 'day').format('dddd, MMMM Do') 
     $('#date-day4').html(day)
      var temp = response.daily[3].temp.day
      //console.log(temp)
      var tempF = Math.floor((temp - 273.15) * 1.80 + 32);
      $("#temp-day4").text('Temperature: ' + tempF + ' deg F')
      var humidity = response.daily[3].humidity
      $("#humidity-day4").text('Humidity: ' + humidity + "%") 
    
      //Day 5 Forecast

      var day = moment().add(5, 'day').format('dddd, MMMM Do') 
     $('#date-day5').html(day)
      var temp = response.daily[4].temp.day
      //console.log(temp)
      var tempF = Math.floor((temp - 273.15) * 1.80 + 32);
      $("#temp-day5").text('Temperature: ' + tempF + ' deg F')
      var humidity = response.daily[4].humidity
      $("#humidity-day5").text('Humidity: ' + humidity + "%") 

      var uvi = response.current.uvi
       //console.log(uvi)
       $("#uvi").text("UV Index: "+ uvi)


    });

  });

};

//Attempt to add search history

function addHistory() {


  var citySearch = $('#search-input').val().trim();
  //var searchedCities = JSON.stringify(citySearch);
  localStorage.setItem('City', historyArr);
  
  historyArr.unshift(citySearch);
  console.log(historyArr)
  localData = localStorage.getItem('City')
  
  console.log(typeof(localData))
  var history = $("<p>").text(localData)
  console.log(history)
  historyDiv.append(history[0])

}

});

    

  
 



