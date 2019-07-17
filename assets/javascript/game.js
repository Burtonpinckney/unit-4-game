var targetNumber = 0;
var userNumber = 0;
var wins = 0;
var losses = 0;
var crystals = [];

var crystalImages = ["../unit-4-game/assets/images/crystal0.jpg", "../unit-4-game/assets/images/crystal1.jpg", "../unit-4-game/assets/images/crystal2.jpg", "../unit-4-game/assets/images/crystal3.jpg"]


function reset() {
    $("#crystals").empty();

    userNumber = 0;

    targetNumber = Math.floor(Math.random() * 120) + 19;
    //tell js to place targetNumber in the html
    $("#targetNumber").text("Target Number: " + targetNumber);

    for (var i = 0; i < 4; i++) {
        crystals[i] = Math.floor(Math.random() * 12) + 1;
        //tell the loop to place the crystal[i] in the html
        var crystal = $("<img class='crystal' src='" + crystalImages[i] + "'>");
        crystal.attr("value", crystals[i]);

        $("#crystals").append(crystal);

    }
}

$(document).on("click", ".crystal", function() {
    var value = $(this).attr("value");
    console.log(value);
    userNumber+=parseInt(value)
    $('#userNumber').text(userNumber)
    if (userNumber === targetNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
        reset();
    }
    
    if (userNumber > targetNumber) {
        losses++;
        $("#losses").text("Losses: " + losses);
        reset();
    }
})



reset();


