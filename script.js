$("#city").on("change",getWeather);

async function getWeather(){
  const city = $("#city").val();
  if(city.length > 0){
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=0cabeef4ca968a16f0934155a11d108f`;

    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    if(data.message == "city not found"){
      $("#results").html(`<h5 id="error">Not a Valid City<h6>`);
    }
    let weather = data.weather[0];
    let main = data.main;
    let wind = data.wind;
    // let results = await weather.json();
    console.log(weather);
    $("#results").html(`<h5 id="weather">Weather: ${weather.main}<h5>`);
    $("#results").append(`<h6 id="weatherDescription">Description: ${weather.description}<h6>`);
    $("#results").append(`<h6 id="degrees">${main.temp} Degrees Fahrenheit<h6>`);
    $("#results").append(`<h6 id="humidity">Humidity: ${main.humidity}<h6>`);
    $("#results").append(`<h6 id="windSpeed">Wind Speed: ${wind.speed}<h6>`);
    console.log("Display: ", weather.json())
  } else{
    $("#results").html(`<h5 id="error">Not a Valid City<h6>`);
  }
}

async function fetchData(url) {
  let response = await fetch(url)
  let data = await response.json()
  return data
}