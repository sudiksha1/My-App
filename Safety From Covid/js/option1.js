class Option1 {
    constructor(){
        this.home = createButton('Home');
        this.command = createElement('h2');
        this.infoButton = createButton('Your Solution');
        this.symptomButtom = createButton('I / Someone Is Having Covid Symptoms');
        this.help = createButton('I Need Medical Help There Is An Emergency Patient');
        this.policeHelp = createButton('I Need Police Help');

    }
    hide(){
        this.home.position(-900,620)
        this.command.position(-900,620)
        this.infoButton.position(-900,620)
        this.symptomButtom.position(-900,620)
        this.help.position(-900,620)
        this.policeHelp.position(-900,620)

    }
    display(){

        this.symptomButtom.position(370,260);
        this.symptomButtom.style('width', '200px');
        this.symptomButtom.style('height', '40px');
        this.symptomButtom.style('background', 'lightblue');

        this.help.position(370,330);
        this.help.style('width', '200px');
        this.help.style('height', '40px');
        this.help.style('background', 'lightblue');

        this.policeHelp.position(370,400);
        this.policeHelp.style('width', '200px');
        this.policeHelp.style('height', '40px');
        this.policeHelp.style('background', 'lightblue');

        this.home.position(900, 620);
        this.home.style('width', '100px');
        this.home.style('height', '30px');
        this.home.style('background','lightgreen');

        this.command.html("What Is Your Emergency ?");
        this.command.position(350, 150);
        this.command.style('font-size', '50px');
        this.command.style('color', 'purple');

        this.infoButton.position(600,260);
        this.infoButton.style('width', '260px');
        this.infoButton.style('height', '250px');
        this.infoButton.style('background', 'yellow');


        this.home.mousePressed(() => {
            game.display();
            appState = 0;
            option1.hide();
        })

        this.symptomButtom.mousePressed(() => {
            option1.symptom();
        })
        
        this.help.mousePressed(() => {
            option1.helpO();
        })

        this.policeHelp.mousePressed(() => {
            option1.police();
        })

    }

    helpO(){
        this.infoButton.html('102 Is The Emergency Telephone Number For Ambulance In India.');
    }

    symptom(){
        this.infoButton.html('For Any Covid-19 Related Issue Or For Covid-19 Help You Can Call _________ 1) Central Helpline No: 011-23978046 _ 2) Northern Part: 011-27708768 ____ 3)Southern Part: 011-29531277  _____  4)Western Part: 011-25195529 ____ 5)New Delhi: 011-23385743  _____ 6)Central Delhi: 011-23270151  _____ 7)Shahdara: 011-22111077  _____ 8)Andaman & Nicobar: 03192-232102');
    }

    police(){
        this.infoButton.html('You Should Call The National Police Helpline Number 112')
    }
}