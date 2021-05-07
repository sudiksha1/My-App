class Option7{
    constructor(){
        this.title1 = createElement('h2');
        this.taskI1= createInput('Your Task To Be Done');
        this.taskI2= createInput('Your Task To Be Done');
        this.taskI3= createInput('Your Task To Be Done');
        this.taskI4= createInput('Your Task To Be Done');
        this.taskI5= createInput('Your Task To Be Done');
        this.taskI6= createInput('Your Task To Be Done');
        this.taskI7= createInput('Your Task To Be Done');

        this.go1 = createButton('Go');
        this.go2 = createButton('Go')
        this.go3 = createButton('Go')
        this.go4 = createButton('Go');
        this.go5 = createButton('Go')
        this.go6 = createButton('Go')
        this.go7 = createButton('Go');
     
        this.state=0;

        this.input1 = null;
        this.input2 = null;
        this.input3 = null;
        this.input4 = null;
        this.input5 = null;
        this.input6 = null;
        this.input7 = null;

        this.task1 = createElement('h3');
        this.task2 = createElement('h3');
        this.task3 = createElement('h3');
        this.task4 = createElement('h3');
        this.task5 = createElement('h3');
        this.task6 = createElement('h3');
        this.task7 = createElement('h3');

        this.result1 = createButton('Not Done');
        this.result2 = createButton('Not Done');
        this.result3 = createButton('Not Done');
        this.result4 = createButton('Not Done');
        this.result5 = createButton('Not Done');
        this.result6 = createButton('Not Done');
        this.result7 = createButton('Not Done');

        this.tittle = createElement('h2');
        this.command = createElement('h3');
        this.home = createButton('Home');
    }
    hide(){
        this.taskI1.position(-570,400);
        this.taskI2.position(-570,400);
        this.taskI3.position(-570,400);
        this.taskI4.position(-570,400);
        this.taskI5.position(-570,400);
        this.taskI6.position(-570,400);
        this.taskI7.position(-570,400);
     
        this.go1.position(-370,400);
        this.go2.position(-370,400);
        this.go3.position(-370,400);
        this.go4.position(-370,400);
        this.go5.position(-370,400);
        this.go6.position(-370,400);
        this.go7.position(-370,400);
  
        this.task1.position(-370,400);
        this.task2.position(-370,400);
        this.task3.position(-370,400);
        this.task4.position(-370,400);
        this.task5.position(-370,400);
        this.task6.position(-370,400);
        this.task7.position(-370,400);
        this.result1.position(-370,400);
        this.result2.position(-370,400);
        this.result3.position(-370,400);
        this.result4.position(-370,400);
        this.result5.position(-370,400);
        this.result6.position(-370,400);
        this.result7.position(-370,400);
        this.tittle.position(-370,400);
        this.command.position(-670,400);
        this.home.position(-370,400);
        this.title1.position(-1370,400);
        
    }
    display(){
     /*   if(this.go1.mousePressed && this.state===0){
            this.input1 = this.task.value();
            this.state = 1;
            this.task1.html(this.input1);
            this.task1.position(360, 350);
            this.task1.style('font-size', '50px');
            this.task1.style('color', 'Blue');
    
        }*/

        this.title1.html("So Make Your To Do List And Follow It ;-P");
        this.title1.position(350, 150);
        this.title1.style('font-size', '50px');
        this.title1.style('color', 'purple');

        this.taskI1.position(350,300);
        this.taskI1.style('width', '400px');
        this.taskI1.style('height', '20px');
        this.taskI1.style('background', 'lavender');

        this.go1.position(760,300);
        this.go1.style('width', '100px');
        this.go1.style('height', '30px');
        this.go1.style('background', 'lightpink');

        this.home.position(900, 620);
        this.home.style('width', '100px');
        this.home.style('height', '30px');
        this.home.style('background','lightgreen');

        this.go1.mousePressed(() => {
            option7.tasks1();
        })
        this.go2.mousePressed(() => {
            option7.tasks2();
        })
        this.go3.mousePressed(() => {
            option7.tasks3();
        })
        this.go4.mousePressed(() => {
            option7.tasks4();
        })
        this.go5.mousePressed(() => {
            option7.tasks5();
        })
        this.go6.mousePressed(() => {
            option7.tasks6();
        })
        this.go7.mousePressed(() => {
            option7.tasks7();
        })

            this.home.mousePressed(() => {
                game.display();
                appState = 0;
                option7.hide();
            })

        this.result1.mousePressed(() => {
            this.result1.html('~ Done')
        })
        this.result2.mousePressed(() => {
            this.result2.html('~ Done')
        })
        this.result3.mousePressed(() => {
            this.result3.html('~ Done')
        })
        this.result4.mousePressed(() => {
            this.result4.html('~ Done')
        })
        this.result5.mousePressed(() => {
            this.result5.html('~ Done')
        })
        this.result6.mousePressed(() => {
            this.result6.html('~ Done')
        })
        this.result7.mousePressed(() => {
            this.result7.html('~ Done')
        })

    }

    tasks1(){
        this.input1 = this.taskI1.value();
        this.task1.html(this.input1);
        this.task1.position(470, 310);
        this.task1.style('font-size', '30px');
        this.task1.style('color', 'Orange');
        
        this.result1.position(360,340);
        this.result1.style('width', '90px');
        this.result1.style('height', '30px');
        this.result1.style('background', 'lightgreen');

        this.command.html('Click On The Not Done Button When You Complete The Task');
        this.command.position(370, 600);
        this.command.style('font-size', '25px');
        this.command.style('color', 'Orange');

        this.taskI1.hide();
        this.taskI2.position(350,300);
        this.taskI2.style('width', '400px');
        this.taskI2.style('height', '20px');
        this.taskI2.style('background', 'lavender');
       
        this.go1.hide();
        this.go2.position(760,300);
        this.go2.style('width', '100px');
        this.go2.style('height', '30px');
        this.go2.style('background', 'lightpink');

    }

    tasks2(){
        this.input2 = this.taskI2.value();
        this.task2.html(this.input2);
        this.task2.position(470, 350);
        this.task2.style('font-size', '30px');
        this.task2.style('color', 'Orange');

        this.result2.position(360,380);
        this.result2.style('width', '90px');
        this.result2.style('height', '30px');
        this.result2.style('background', 'lightgreen');

        this.taskI2.hide();
        this.taskI3.position(350,300);
        this.taskI3.style('width', '400px');
        this.taskI3.style('height', '20px');
        this.taskI3.style('background', 'lavender');
       
        this.go2.hide();
        this.go3.position(760,300);
        this.go3.style('width', '100px');
        this.go3.style('height', '30px');
        this.go3.style('background', 'lightpink');
  
    }

    tasks3(){
        this.input3 = this.taskI3.value();
        this.task3.html(this.input3);
        this.task3.position(470, 390);
        this.task3.style('font-size', '30px');
        this.task3.style('color', 'Orange');
        
        this.result3.position(360,420);
        this.result3.style('width', '90px');
        this.result3.style('height', '30px');
        this.result3.style('background', 'lightgreen');

        this.taskI3.hide();
        this.taskI4.position(350,300);
        this.taskI4.style('width', '400px');
        this.taskI4.style('height', '20px');
        this.taskI4.style('background', 'lavender');
       
        this.go3.hide();
        this.go4.position(760,300);
        this.go4.style('width', '100px');
        this.go4.style('height', '30px');
        this.go4.style('background', 'lightpink');

    }

    tasks4(){
        this.input4 = this.taskI4.value();
        this.task4.html(this.input4);
        this.task4.position(470, 430);
        this.task4.style('font-size', '30px');
        this.task4.style('color', 'Orange');
        
        this.result4.position(360,460);
        this.result4.style('width', '90px');
        this.result4.style('height', '30px');
        this.result4.style('background', 'lightgreen');

        this.taskI4.hide();
        this.taskI5.position(350,300);
        this.taskI5.style('width', '400px');
        this.taskI5.style('height', '20px');
        this.taskI5.style('background', 'lavender');
       
        this.go4.hide();
        this.go5.position(760,300);
        this.go5.style('width', '100px');
        this.go5.style('height', '30px');
        this.go5.style('background', 'lightpink');

    }

    tasks5(){
        this.input5 = this.taskI5.value();
        this.task5.html(this.input5);
        this.task5.position(470, 470);
        this.task5.style('font-size', '30px');
        this.task5.style('color', 'Orange');
        
        this.result5.position(360,500);
        this.result5.style('width', '90px');
        this.result5.style('height', '30px');
        this.result5.style('background', 'lightgreen');

        this.taskI5.hide();
        this.taskI6.position(350,300);
        this.taskI6.style('width', '400px');
        this.taskI6.style('height', '20px');
        this.taskI6.style('background', 'lavender');
       
        this.go5.hide();
        this.go6.position(760,300);
        this.go6.style('width', '100px');
        this.go6.style('height', '30px');
        this.go6.style('background', 'lightpink');

    }
    
    tasks6(){
        this.input6 = this.taskI6.value();
        this.task6.html(this.input6);
        this.task6.position(470, 510);
        this.task6.style('font-size', '30px');
        this.task6.style('color', 'Orange');
        
        this.result6.position(360,540);
        this.result6.style('width', '90px');
        this.result6.style('height', '30px');
        this.result6.style('background', 'lightgreen');

        this.taskI6.hide();
        this.taskI7.position(350,300);
        this.taskI7.style('width', '400px');
        this.taskI7.style('height', '20px');
        this.taskI7.style('background', 'lavender');
       
        this.go6.hide();
        this.go7.position(760,300);
        this.go7.style('width', '100px');
        this.go7.style('height', '30px');
        this.go7.style('background', 'lightpink');

    }

    tasks7(){
        this.input7 = this.taskI7.value();
        this.task7.html(this.input7);
        this.task7.position(470, 550);
        this.task7.style('font-size', '30px');
        this.task7.style('color', 'Orange');
        
        this.result7.position(360,580);
        this.result7.style('width', '90px');
        this.result7.style('height', '30px');
        this.result7.style('background', 'lightgreen');

        this.taskI7.hide();
        this.go7.hide();

        this.tittle.html("Your To Do List");
        this.tittle.position(350, 230);
        this.tittle.style('font-size', '50px');
        this.tittle.style('color', 'red');
    }
}