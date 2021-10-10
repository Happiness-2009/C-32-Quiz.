class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Name");
   
   //Create a input box to enter the number
   this.input = createInput("").attribute("placeholder","Answer");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.title1 = createElement('h3')
    this.title3 = createElement('h3')
    this.title2 = createElement('h3')
    this.title4 = createElement('h3')
    this.title5 = createElement('h3')


    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input.hide();
    this.message.hide();




  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(340, 10);
    


    //Create html() and position() for each question, input and answers.
 this.input.position(373, 250);
 this.title1.html("Question: What starts and ends with letter 'E;, but has only one letter? ")
 this.title1.position(130,90);
 this.title2.html("1: Everyone")
 this.title2.position(150,110);
 this.title3.html("2: Envelope")
 this.title3.position(150,130);
 this.title4.html("3: Estimate")
 this.title4.position(150,150);
 this.title5.html("4: Example")
 this.title5.position(150,170);




    this.input1.position(375, 80);
    this.button.position(793, 380);


    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted!")
      this.message.position(180,320);
    })


  }
}
