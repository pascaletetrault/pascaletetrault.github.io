

var w = window.innerWidth;
var h = window.innerHeight;
var poem_1;
var boucle = 2;
var nbPhrase = 2;
var x = 0;
var espacement = 20;
let myFont;



function preload(){

  myFont = loadFont('fonts/FrutigerLTStd-LightCn.otf');
  poem_1 = loadStrings("text.txt");

}

function setup() {

  createCanvas(window.innerWidth, 1000);
  // canvasPosition(100,200);
  // text("salllut",20,20);

}

function draw(){

  background(255, 255, 255);

  textFont(myFont);
  if(pmouseY !== mouseY){
  }
   for(var j = 0; j < w; j = j + 200){

  for(var i = 0; i < poem_1.length; i++){

    if(mouseY -100 > (i*espacement) && mouseY -100 < (i*(espacement + espacement/3))) text(poem_1[i],j+100,(espacement*i)+100);

  }
}



  x++;
  // text(poem_1.length, 20,20);



}
