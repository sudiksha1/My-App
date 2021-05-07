var database;
var back_img;
var gameState =0;
var appState = 0;
var playerCount = 0;
var allPlayers;
var playerC;

var player, form,game,home;
var option1,option3,option4,option5,option6,option7;
var player1,player2;
var players;

var message;
var FID;
var chatNo;
var count = 0;

function setup() {
  createCanvas(displayWidth - 30, displayHeight-30);
  database = firebase.database();
  game = new Game();
  home = new Home();
  option7 = new Option7();
  option6 = new Option6();
  option5 = new Option5();
  option4 = new Option4();
  option3 = new Option3();
  option1 = new Option1();
  game.getState();
  game.start();
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);  
}

function draw() {
  background("white");


  if(appState===1){
    option1.display();
    game.hide();
  }
  if(appState===3){
    option3.display();
    game.hide();
  }
  if(appState===4){
    option4.display();
    game.hide();
  }
  if(appState===5){
    option5.display();
    game.hide();
  }
  if(appState === 2){
    game.hide();
    home.display();
    textFont("Times New Roman");
    
    textSize(55);
    noStroke();
    fill("Black");
    text("TICK-TOCK CLOCK", 400,250);

    textSize(25);
    noStroke();
    fill(0,0,255);
    text("Blue Colour Indicates Value Of Every HOUR", 400,370);

    textSize(25);
    noStroke();
    fill(255,0,0);
    text("Red Colour Indicates Value Of Every MINUTE", 400,330);

    textSize(25);
    noStroke();
    fill(0,255,0);
    text("Green Colour Indicates Value Of Every SECOND", 400,290);

    textSize(25);
    noStroke();
    fill(0,255,0);
    text("So Let Us Now Respect The Value Of All These", 400,410);

    textSize(25);
    noStroke();
    fill(255,0,0);
    text("As , Each Of Them Is Really Really Important", 400,450);

    textSize(25);
    noStroke();
    fill(0,0,255);
    text("And None Of These Can Be Buyed By MONEY", 400,490);

    textSize(18);
    noStroke();
    fill("black");
    text("12",200,100);
    text("1",250,115);
    text("2",285,150);

    text("3",300,200);
    text("4",285,250);
    text("5",250,290);

    text("6",200,300);
    text("7",150,290);
    text("8",110,250);

    text("9",100,200);
    text("10",110,150);
    text("11",150,115);


    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke(255,0,0);
    strokeWeight(2);
    line(0,0,100,0);
    pop()

    //drawing minutes hand
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(5);
    line(0,0,85,0);
    pop()

    //drawing hour hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,45,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(2);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
    //Minutes
    strokeWeight(5);
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
    //Hour
    strokeWeight(7);
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);

    drawSprites();
  // strokeWeight(5);
  //stroke(0,255,0);
  
}

if(appState === 7){
    game.hide();
    option7.display();
}

if(appState === 6){
  game.hide();
  option6.display();
}

}
