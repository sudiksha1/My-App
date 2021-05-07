class Form{
  constructor(){
     this.input = createInput("Name");
     this.button = createButton('Enter');
     this.greeting = createElement('h2');
     this.title = createElement('h2');
     this.reset = createButton('Reset');
     //this.home = createButton('Home')
  }
  hide() {
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
  }
  display() {
      this.title.html("Safety From Covid");
      this.title.position(350, -20);
      this.title.style('font-size', '70px');
      this.title.style('color', 'skyblue');
      this.input.position(550,330);
      this.input.style('width', '200px');
      this.input.style('height', '20px');
      this.input.style('background', 'lavender');
      this.button.position(560,430);
      this.button.style('width', '200px');
      this.button.style('height', '40px');
      this.button.style('background', 'lightpink');
      this.reset.position(900, 590);
      this.reset.style('width', '100px');
      this.reset.style('height', '30px');
      this.reset.style('background', 'lightpink');
      /*this.home.position(900, 690);
      this.home.style('width', '100px');
      this.home.style('height', '30px');
      this.home.style('background','lightgreen');*/


      this.button.mousePressed(() => {
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount += 1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html("Hello " + player.name)
          this.greeting.position(400,180);
          this.greeting.style('color', 'Black');
          this.greeting.style('font-size', '100px');
          game.update(1);
          game.play();
          gameState = 1;
      });

      this.reset.mousePressed(() => {
          player.updateCount(0);
          game.update(0);
      });

     /* this.home.mousePressed(() => {
         appState = 0;
         game.play();
         game.display();
      });*/

  }
}