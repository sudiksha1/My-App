class Option3 {
    constructor(){
        this.command = createElement('h2');
        this.yes = createButton('Yes');
        this.no = createButton('No');
        this.safety = 1;
        this.home = createButton('Home');
    }
    hide(){
        this.command.position(-1900,-100);
        this.yes.position(-1900,-100);
        this.no.position(-1900,-100);
        this.home.position(-1900,-100);
    }
    display(){
        this.command.html("");
        this.command.position(350, 170);
        this.command.style('font-size', '30px');
        this.command.style('color', 'purple');

        this.yes.position(570,260);
        this.yes.style('width', '150px');
        this.yes.style('height', '60px');
        this.yes.style('background', 'lightblue');

        this.no.position(730,260);
        this.no.style('width', '150px');
        this.no.style('height', '60px');
        this.no.style('background', 'lightblue');

        this.home.position(900, 620);
        this.home.style('width', '100px');
        this.home.style('height', '30px');
        this.home.style('background','lightgreen');

        this.home.mousePressed(() => {
            game.display();
            appState = 0;
            option3.hide();
        })

        this.yes.mousePressed(() => {
            this.safety = this.safety + 1;
        })
        this.no.mousePressed(() => {
            this.safety = 0;
            this.yes.position(-900,100);
            this.no.position(-900,100);
        })

        if(this.safety === 0){
            option3.zero();
        }

        if(this.safety === 1){
            option3.one();
        }

        if(this.safety === 2){
            option3.two();
        }

        if(this.safety === 3){
            option3.three();
        }

        if(this.safety === 4){
            option3.four();
        }

        if(this.safety === 5){
            option3.five();
        }

        if(this.safety === 6){
            option3.six();
        }

        if(this.safety === 7){
            option3.seven();
        }

        if(this.safety === 8){
            option3.eight();
        }

        if(this.safety === 9){
            option3.nine();
        }

    }

    zero(){
        this.command.html('Sorry You Cannot Move Out Now Be At Home And Stay Safe Dear '+player.name);
        this.yes.position(-900,100);
        this.no.position(-900,100);
    }

    one(){
        this.command.html('Is It Very Urgent To Move Out Of The House ?');
    }

    two(){
        this.command.html('Have You Carried A Mask With You ?');
    }

    three(){
        this.command.html('Are You Having A Sanitizer With You ?');
    }

    four(){
        this.command.html('Did You Wash Your Hands Before You Are Ready To Move Out ?');
    }

    five(){
        this.command.html('Is There No Lockdown/Quarantine Where You Live ?');
    }

    six(){
        this.command.html('Did You Carry Your Wallet And Money ?');
    }

    seven(){
        this.command.html('Are You Sure You Will Be Able To Follow Social Distancing WhereEver You Are Going ?');
    }

    eight(){
        this.command.html('Are You Sure You/Your Family Members Are Not Having Any Of The Covid Symptoms ?');
    }

    nine(){
        this.command.html('Yey ! You Are Safe To Go Out No Worries Dear '+player.name);
        this.yes.position(-900,100);
        this.no.position(-900,100);
    }

}