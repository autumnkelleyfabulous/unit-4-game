var randomNumber;
var wins = 0;
var losses = 0;
var computerNumber=  randomMath();
var yourTotal = 0;
var finalScore;

var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

function reset() {
    
    yourTotal= 0;
    $(finalScore).text(yourTotal);
  }

  function won(){
    alert("you win!");
    wins++
    $("#numberWins").text(wins);
    reset();
}

function lost (){
    alert('you lost!');
    losses++;
    $("#numberLosses").text(losses);
}

function randomMath() {
    randomNumber = Math.floor(Math.random() * 120);
    console.log;(randomNumber);
    return randomNumber;

} 

function newFunction() {
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    won();

$(document).ready(function() {
   
// random number from computer

    $(".crystal1").on("click", function(){
        console.log(this);
         yourTotal = yourTotal + crystal1;
         $("#yourTotal").text(finalScore);
         crystal1 =
         Math.floor(Math.random()* 12) +1;
         if(yourTotal == randomNumber) {
             celebrate ();
         }
         else if ( yourTotal > randomNumber) {
             lost();
         
        }
    });
        
    $(".crystal2").on("click", function() {
        yourTotal = yourTotal + crystal2;
        $("#yourTotal").text(finalScore);
        crystal2 =
        Math.floor(Math.random() * 12) +1;
        if(yourTotal == randomNumber) {
            celebrate ();
        }
        else if ( yourTotal > randomNumber) {
            lost();
        }
    });
        
    $(".crystal3").on("click", function() {
        yourTotal = yourTotal + crystal3;
        $("#yourTotal").text(finalScore);
        crystal3 =
        Math.floor(Math.random() *12) +1;
        if(yourTotal == randomNumber) {
            celebrate ();
        }
        else if ( yourTotal > randomNumber) {
            lost();
        }
    });
        
    $(".crystal4").on("click", function() {
        yourTotal = yourTotal + crystal4;
        $("#yourTotal").text(finalScore);
        crystal4 =
        Math.floor(Math.random() *12) +1;
        if(yourTotal == randomNumber) {
            celebrate ();
        }
        else if ( yourTotal > randomNumber) {
            lost();
        }
    });

        // newFunction();

        //  }
  

// function newFunction() {
//     $("#numberWins").text(wins);
//     $("#numberLosses").text(losses);
//     won();
// }
    // each (buttons)
    
    //  ( var i = 0; i < 4; i++){ 
    //   array.forEach(_buttons => {

        //     var random = Math.floor(Math.random() *12
        //     console.log(random);

    // $("#result").html('random number:');

    //
    //     var crystal1= $(<"div">);
    //         button.attr({
    //             "class:" "crystal1",
    //             "data-random": randomNumber

    //         });

    //     $(".btn-crystal1").append(crystal1);
        
    // }

    // $('.btn-crystal1').append(crystal1);
// buttons
   

