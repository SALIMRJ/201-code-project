'use strict';
//Welcoming
var grade=0 ; 
var userName = prompt("what is your name?");
alert("Welcome " + userName);
confirm("lets play guessing game");
//console.log(userName);

FirstTest(); 
Q6();
Q7(); 








function FirstTest(){
//firs qustion
var favTeam = prompt(" Is Barcelona my favourate football team?");
if (favTeam.toLowerCase() === "yes" || favTeam.toLowerCase() === "y") {
   //console.log("!!!!!True!!!!");
   alert("!!!!!True!!!!")
   counter();
}
else if (favTeam.toLowerCase() === null || favTeam.toLowerCase() === "") {
   //console.log("why you did not answer?! ");
   alert("why you did not answer?! ");
}

else {
   console.log("wrong");
   alert("wrong");
}
FirstTest2();
}







//console.log("Welcome again "+userName);
alert("Welcome again " + userName);

//end of lab one

// 6th question
function Q6(){
   var trueAnswer = 3;
   for (var i = 1; i <= 4; i++) {
      var guissNumber = prompt("I put a number in my head, can you guess what it?");
      if (parseInt(guissNumber) === 3) { alert("Amazing!!!!"); counter(); break; }
      if (parseInt(guissNumber) <= 2) {
         alert("too low");
      }
      if (parseInt(guissNumber) >= 4) {
         alert("too high");}
         if (i === 4) { alert("the answer is 3!"); }
      
   }
}


// 7th question
function Q7(){

   var countriesList = ['JORDAN', 'ENGLAND', 'UAE', 'USA', 'LEBANON', 'PALASTINE'];

   var correct = false;
   var j = 0;
   while (j <= 5 && correct === false) {
      var favcountry = prompt('Guess what is my fovourate countries? ALL LETTERS ARE CAPITAL');
      for (var js = 0; js < countriesList.length; js++) {
   
         if (favcountry.toLowerCase() === countriesList[js].toLowerCase()) {
            alert("TRUE");
            var correct = true;
            counter();
            break;
         }
      }
      j++;
   }
   alert('THE ANSWERS '+'JORDAN, ENGLAND, UAE, USA, LEBANON, PALASTINE');
   alert('YOUR SCOORE '+grade.toString()+' from 7');
}

function FirstTest2(){

   
//second quesstion
var fruit = prompt("Do I like Apple?");
if (fruit.toLowerCase() === "yes" || fruit.toLowerCase() === "y") {
   //console.log("no I do not");
   alert("no I do not ");
}
else if (fruit.toLowerCase() === "no" || fruit.toLowerCase() === "n") {
   //console.log("you are good!");
   alert("you are good!");
   counter();
}
else {
   //console.log("-1; you did not answer!!");
   alert("-1; you did not answer!!");
}
FirstTest3();

}


function FirstTest3(){

   // third question
var movie = prompt("Is interstellar my favourate movie?");
if (movie.toLowerCase() === "yes" || movie.toLowerCase() === "y") {
   //console.log("true");
   alert("true");
   counter();
}
else if (movie.toLowerCase() === "" || movie.toeLowerCase() === null) {
   //console.log("you did not answer");
   alert("you did not answer");
}
else {
   //console.log("false");
   alert("false");
}

FirstTest4();
}


function FirstTest4(){
   // 4th question
   var facTecCompany = prompt(" Is apple my favourate company?")
   if (facTecCompany.toLowerCase() === "y" || facTecCompany.toLowerCase() === "y") {
      //console.log("yes,I like its products");
      alert("yes,I like its products");
      counter();
   }
   else if (facTecCompany.toLowerCase() === null || facTecCompany.toLowerCase() === "") {
      //console.log("empty answer!");
      alert("empty answer!");
   }
   else {
      //console.log("false ");
      alert("false");
   }
   FirstTest5();
}
function FirstTest5(){
   //5th question
var basketBall = prompt("Do I like BasketBall yes or no ?")
if (basketBall.toLowerCase() === "yes" || basketBall.toLowerCase() === "y") {
   //console.log("no I do not");
   alert("no I do not");
}
else if (basketBall.toLowerCase() === "no" || basketBall.toLowerCase() === "n") {
   //console.log("true");
   alert("true");
   counter();
}
else {
   //console.log("-1 for empty asnwer and random");
   alert("-1 for empty and rondom answer");
}
}

function AlertAll(text1,text2){

   alert(text1,text2);



}




function counter(){
grade++;

}