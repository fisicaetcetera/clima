let url;
let lat, lon;
let city;
let estado;
let country;
function setup(){
   createCanvas(100,50);

   fetch('https://api.geoapify.com/v1/ipinfo?apiKey=df56ea8b09b64183882faaf437ac2620')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        lat = data.location.latitude;
        lon = data.location.longitude;
        city = data.city.name;
        estado = data.state.name;
        country = data.country.name;
        continent = data.continent.name;
        createP('Lat: ' + lat + ' Lon: ' + lon);
        createP(city +', '+ estado+', '+ country+', '+ continent);

      }  
    )
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-5.8111&longitude=-35.2235&current=temperature_2m,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        createP('Temperature: ' +   data.current.temperature_2m + ' °C');
        createP('Wind speed : ' + data.current.windspeed_10m + ' km/h')
        createP('Elevation : ' + data.elevation + ' m')
      }
    )  
  } //setup
  
