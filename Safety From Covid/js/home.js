class Home{
    constructor(){
        this.home = createButton('Home');
    }

    hide(){

        this.home.position(-300,530);
    }

    display(){
        this.home.position(900, 620);
        this.home.style('width', '100px');
        this.home.style('height', '30px');
        this.home.style('background','lightgreen');
        this.home.mousePressed(() => {
            game.display();
            appState = 0;
            home.hide();
        })
    }
}