class Option6 {
    constructor(){
        this.infoButton = createButton('Your Answer')
        this.whatButton = createButton('What Is Covid19 ?');
        this.symptomButton = createButton('What Are The Symptoms Of Covid19 ?');
        this.safetyButton = createButton('What Are The Safety Measures For Covid19 ?');
        this.home = createButton('Home');
        this.carryButton = createButton('What Should One Carry While Going Out ?')
    }

    hide(){
        this.home.position(900, -620);
        this.infoButton.position(900, -620);
        this.symptomButton.position(900, -620);
        this.safetyButton.position(900, -620);
        this.whatButton.position(900, -620);
        this.carryButton.position(900, -620);
    }
    display(){
        this.home.position(900, 620);
        this.home.style('width', '100px');
        this.home.style('height', '30px');
        this.home.style('background','lightgreen');

        this.whatButton.position(370,260);
        this.whatButton.style('width', '200px');
        this.whatButton.style('height', '40px');
        this.whatButton.style('background', 'lightblue');

        this.symptomButton.position(370,330);
        this.symptomButton.style('width', '200px');
        this.symptomButton.style('height', '40px');
        this.symptomButton.style('background', 'lightblue');

        this.safetyButton.position(370,400);
        this.safetyButton.style('width', '200px');
        this.safetyButton.style('height', '40px');
        this.safetyButton.style('background', 'lightblue');

        this.carryButton.position(370,470);
        this.carryButton.style('width', '200px');
        this.carryButton.style('height', '40px');
        this.carryButton.style('background', 'lightblue');

        this.infoButton.position(600,260);
        this.infoButton.style('width', '260px');
        this.infoButton.style('height', '250px');
        this.infoButton.style('background', 'yellow');


        this.home.mousePressed(() => {
            game.display();
            appState = 0;
            option6.hide();
        })

        this.whatButton.mousePressed(() => {
            option6.what();
        })

        this.symptomButton.mousePressed(() => {
            option6.symptom();
        })

        this.safetyButton.mousePressed(() => {
            option6.safety();
        })

        this.carryButton.mousePressed(() => {
            option6.carry();
        })


    }

    what(){
        this.infoButton.html('Coronavirus disease 2019 (COVID-19), also known as the coronavirus or COVID, is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first known case was identified in Wuhan, China, in December 2019. The disease has since spread worldwide, leading to an ongoing pandemic.')
    }

    symptom(){
        this.infoButton.html('As per WHO, most people who become infected experience mild illness like fever and cough taste loss also takes place and recover, but it can be more severe for others');
    }

    safety(){
        this.infoButton.html('We need to follow the lockdown strictly but while going out, Taking safety precautions is a necessity. This means socially-distancing and adhering to new guidelines about how to use public spaces such as shops, gyms, restaurants, and more. Because it can take 14-days for symptoms of the virus to appear, it is possible to be carrying the virus without realizing it. For that reason, taking measures to keep other people safe is also very important.')
    }

    carry(){
        this.infoButton.html('You should go out only when very neccessary. You should carry a mask and a sanitizer with you while going out. Not touching anything will also help you avoid the spread of this virus.')
    }
}