class Option5 {
    constructor(){
        this.home = createButton('Home');
        this.title = createElement('h2');
        this.ex = createElement('h2');
        this.ex1 = createElement('h2');
        this.ex2 = createElement('h2');
        this.ex3 = createElement('h2');
        this.ex4 = createElement('h2');
        this.ex5 = createElement('h2');
    }

    hide(){
        this.home.position(-1000,-1000);
        this.title.position(-1000,-1000);
        this.ex.position(-1000,-1000);
        this.ex1.position(-1000,-1000);
        this.ex2.position(-1000,-1000);
        this.ex3.position(-1000,-1000);
        this.ex4.position(-1000,-1000);
        this.ex5.position(-1000,-1000);
    }
    display(){

        this.home.position(900, 620);
        this.home.style('width', '100px');
        this.home.style('height', '30px');
        this.home.style('background','lightgreen');

        this.title.html("Yogas You Should Perform Daily");
        this.title.position(350, 150);
        this.title.style('font-size', '40px');
        this.title.style('background', 'yellow');
        this.title.style('color', 'blue');

        this.ex.html("Breathing Exercise");
        this.ex.position(350, 250);
        this.ex.style('font-size', '25px');
        this.ex.style('background', 'black');
        this.ex.style('color', 'white');

        this.ex1.html("Ardha Chandrasana");
        this.ex1.position(350, 290);
        this.ex1.style('font-size', '25px');
        this.ex1.style('background', 'black');
        this.ex1.style('color', 'white');

        this.ex2.html("Dhanurasana");
        this.ex2.position(350, 330);
        this.ex2.style('font-size', '25px');
        this.ex2.style('background', 'black');
        this.ex2.style('color', 'white');

        this.ex3.html("Hastha Uthanasana");
        this.ex3.position(350, 370);
        this.ex3.style('font-size', '25px');
        this.ex3.style('background', 'black');
        this.ex3.style('color', 'white');

        this.ex4.html("Bhujangasana (Cobra Pose)");
        this.ex4.position(350, 410);
        this.ex4.style('font-size', '25px');
        this.ex4.style('background', 'black');
        this.ex4.style('color', 'white');

        this.ex5.html("Khand Pranayama");
        this.ex5.position(350, 450);
        this.ex5.style('font-size', '25px');
        this.ex5.style('background', 'black');
        this.ex5.style('color', 'white');

        this.home.mousePressed(() => {
            game.display();
            appState = 0;
            option5.hide();
        })
    }
}