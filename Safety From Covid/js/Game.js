class Game{
  constructor(){
      this.title = createElement('h2');
      this.greeting = createElement('h2');
      this.button1=createButton('You Have An Emergency?');
      this.playerId = createElement('h3');
      this.button2= createButton('Time');
      this.button3= createButton('Travel Check');
      this.button4= createButton('Lets Protect Ourselves From Covid-19');
      this.button5= createButton('Do Yoga');
      this.button6= createButton('Covid-19 Related Information');
      this.button7= createButton('Make Your To Do List');
  }
  hide(){
     
      this.button1.position(-670,330);
      this.playerId.position(-670,470);
      this.button1.position(-670,470);
      this.button2.position(-670,470);
      this.button3.position(-670,470);
      this.button4.position(-670,470);
      this.button6.position(-670,470);
      this.button5.position(-670,470);
      this.button7.position(-670,470);

  }
  display(){
      this.title.html("Safety From Covid");
      this.title.position(350, -20);
      this.title.style('font-size', '70px');
      this.title.style('color', 'skyblue');

      this.greeting.html("Hello " + player.name + " :-)");
      this.greeting.position(360, 80);
      this.greeting.style('font-size', '50px');
      this.greeting.style('color', 'Blue');

      this.button1.position(370,260);
      this.button1.style('width', '200px');
      this.button1.style('height', '40px');
      this.button1.style('background', 'lightblue');

      this.button2.position(370,330);
      this.button2.style('width', '200px');
      this.button2.style('height', '40px');
      this.button2.style('background', 'lightblue');

      this.button3.position(370,400);
      this.button3.style('width', '200px');
      this.button3.style('height', '40px');
      this.button3.style('background', 'lightblue');

      this.button4.position(370,470);
      this.button4.style('width', '200px');
      this.button4.style('height', '40px');
      this.button4.style('background', 'lightblue');

      this.button5.position(370,540);
      this.button5.style('width', '200px');
      this.button5.style('height', '40px');
      this.button5.style('background', 'lightblue');

      this.button6.position(370,610);
      this.button6.style('width', '200px');
      this.button6.style('height', '40px');
      this.button6.style('background', 'lightblue');

      this.button7.position(600,260);
      this.button7.style('width', '200px');
      this.button7.style('height', '40px');
      this.button7.style('background', 'lightblue');


      this.playerId.html("Your Heartiest Welcome !!");
      this.playerId.position(360,150);
      this.playerId.style('font-size', '40px');
      this.playerId.style('background', 'yellow');
      
      this.button1.mousePressed(() => {
          appState = 1;
          option1 = new Option1();
      });

      this.button2.mousePressed(() => {
          appState = 2;
      });

      this.button3.mousePressed(() => {
          appState = 3;
          option3 = new Option3();
         
      });

      this.button4.mousePressed(() => {
          appState = 4;
      });

      this.button5.mousePressed(() => {
          appState = 5;
      })

      this.button6.mousePressed(() => {
        appState = 6;
        option6 = new Option6();
    })

    this.button7.mousePressed(() => {
      appState = 7;
      option7 = new Option7();
  })

  }
  getState() {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function (data) {
          gameState = data.val();
      })

  }

  update(state) {
      database.ref('/').update({
          gameState: state
      });
  }
  async start() {
          if (gameState === 0) {
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if (playerCountRef.exists()) {
                  playerCount = playerCountRef.val();
                  player.getCount();
              }
              form = new Form()
              form.display();
          }

      }
  
  play(){
      
              form.hide();
              game.display();
              Player.getPlayerInfo();
               drawSprites();
  }


  end(){
     console.log("Game Ended");
  }
}
