var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=e39cbdf26d672f32fe87cfc2e1727676';
var units = '&units=metric';

var input;

function setup() {
  createCanvas(450, 400);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var url = api + input.value() + units + apiKey;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(0);
  if (weather) {
    var wind = weather.wind.speed;
    var tempma = weather.main.temp_max;
    var tempmi = weather.main.temp_min;
    var temp = weather.main.temp;
    var hmdt = weather.main.humidity;
    var t = color(255,102,0);
    var tma = color (128,0,0);
    var tmi = color(255,255,0);
    var h = color(0,153,255);
    
      
      textFont("Yantramanav");
      textSize(16);
      fill(tma);
      text("Temperature max = "+ tempma, 35, 40);
        rect(100, 100, tempma, tempma);
      fill(tmi);
      text("Temperature min = " + tempmi, 255, 40);
        rect(300, 100, tempmi, tempmi);
      fill(t);
      text("Temperature = "+ temp, 55, 220);
        rect(100, 255, temp, temp);
      fill(h);
      text("Humidity = " + hmdt, 255, 220);
        rect(285, 255, hmdt, hmdt);
  }
}