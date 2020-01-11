var jf = require("johnny-five"); //cargamos la libreria
var circuito = new jf.Board(); //Nueva clase tipo Board

circuito.on("ready", prender); //Cuando el circuito este listo, lanzamos prender

function prender (){
  var yellowled = new jf.Led(9); //Puerto 13
  var redLed = new jf.Led(13)
  yellowled.blink(200); //parpadea cada 500 ms
  redLed.blink(700);
  console.log("Mira la placa.. Los Leds ya estan parpadeando :) ")
}
