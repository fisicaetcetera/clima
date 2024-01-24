let url;
var Lat, Lon;
let city;
let estado;
let country;
function setup(){
   createCanvas(100,50);

   fetch('https://api.geoapify.com/v1/ipinfo?apiKey=df56ea8b09b64183882faaf437ac2620')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        Lat = data.location.latitude;
        Lon = data.location.longitude;
        console.log(Lat, Lon);
        city = data.city.name;
        estado = data.state.name;
        country = data.country.iso_code;     
        continent = data.continent.name;
        createP('Lat: ' + Lat + ' Lon: ' + Lon);
         if(city == 'Natal'){estado = 'RN';}
        createP(city +', '+ estado+', '+ country+', '+ continent);
        createP('Country phone code: ' + data.country.phone_code);
        getClima();
      }  
    )
    function getClima(){
  parte1 = 'https://api.openweathermap.org/data/2.5/weather?';
  parte2 = 'q=' + city + ","+country;
  parte3 = '&APPID=ce65c93f4ff8c6def108ec2e8cc95692';
  parte4 = '&units=metric';
  url = parte1 + parte2 + parte3 + parte4;
  console.log(url);
  loadJSON(url, GotData);
  function GotData(data){
     console.log(data);
     createP('Weather: ' + data.weather[0].description);
     createP('Temperature (°C): ' + data.main.temp);
     createP('Pressure: ' + data.main.pressure);
     createP('Visibility (meters): ' + data.visibility);
  }
  
  }//getclima
  }//setup
