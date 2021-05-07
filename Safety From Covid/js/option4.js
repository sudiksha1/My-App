class Option4 {
    constructor(){
        this.home = createButton('Home');
        this.command1 = createElement('h2');
        this.command2 = createElement('h2');
        this.s1 = createElement('h2');
        this.s2 = createElement('h2');
        this.s3 = createElement('h2');
        this.s4 = createElement('h2');
        this.s5 = createElement('h2');
        this.s6 = createElement('h2');
        //this.image1 = createSprite(100,100);
    }
    hide(){
        this.home.position(-900,-100);
        this.command1.position(-900,-100);
        this.command2.position(-900,-100);
        this.s1.position(-900,-100);
        this.s2.position(-900,-100);
        this.s3.position(-900,-100);
        this.s4.position(-900,-100);
        this.s5.position(-900,-100);
        this.s6.position(-900,-100);
        
    }
    display(){
        //this.image1.addImage('images/washHands.jpg');
        this.home.position(900, 620);
        this.home.style('width', '100px');
        this.home.style('height', '30px');
        this.home.style('background','lightgreen');

        this.command1.html("How Can You Protect Youself From Covid 19 ?");
        this.command1.position(350, 150);
        this.command1.style('font-size', '40px');
        this.command1.style('background', 'yellow');
        this.command1.style('color', 'blue');

        this.command2.html("Practice Good Health Habits");
        this.command2.position(350, 230);
        this.command2.style('font-size', '30px');
        this.command2.style('background', 'blue');
        this.command2.style('color', 'white');

        this.s1.html("1. Wash Your Hands Oftenly...  ");
        this.s1.position(350, 290);
        this.s1.style('font-size', '25px');
        this.s1.style('background', 'black');
        this.s1.style('color', 'white');

        this.s2.html("2. Cover Your Face While Coughing Or Sneezing...  ");
        this.s2.position(350, 330);
        this.s2.style('font-size', '25px');
        this.s2.style('background', 'black');
        this.s2.style('color', 'white');

        this.s3.html("3. Do Not Touch Your Eyes/Nose/Mouth ...  ");
        this.s3.position(350, 370);
        this.s3.style('font-size', '25px');
        this.s3.style('background', 'black');
        this.s3.style('color', 'white');

        this.s4.html("4. Clean Surfaces Frequently...  ");
        this.s4.position(350, 410);
        this.s4.style('font-size', '25px');
        this.s4.style('background', 'black');
        this.s4.style('color', 'white');

        this.s5.html("5. Stay Home When Sick ...  ");
        this.s5.position(350, 450);
        this.s5.style('font-size', '25px');
        this.s5.style('background', 'black');
        this.s5.style('color', 'white');

        this.s6.html("6. Avoid Sick People ...  ");
        this.s6.position(350, 490);
        this.s6.style('font-size', '25px');
        this.s6.style('background', 'black');
        this.s6.style('color', 'white');

        this.home.mousePressed(() => {
            game.display();
            appState = 0;
            option4.hide();
        })
    }
}