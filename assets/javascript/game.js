// Setting up random numbers 1-12 for each crystal
var blue;
var green;
var pink;
var yellow;
var userTotal = 0;
var wins = 0;
var losses = 0;
var Random;

// Resets the game
function reset() {
    Random
    console.log(Random)
    $('#randomNumber').html(Random);
    blue = Math.floor(Math.random() * 12) + 1
    green = Math.floor(Math.random() * 12) + 1
    pink = Math.floor(Math.random() * 12) + 1
    yellow = Math.floor(Math.random() * 12) + 1
    userTotal = 0;
    $('#finalTotal').html(userTotal);
}

// Selects a random number 19 - 120 to be shown at the start of the game 
var Random = Math.floor(Math.random() * 120) + 19

// Appending random number to the randomNumber id in the html doc
$('#randomNumber').html(Random);

//  Decaring variables for scoreboard
$('#numWins').html(wins);
$('#numLosses').html(losses);

// Sets up click for jewels
$('#blue').on('click', function() {
    userTotal = userTotal + blue;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').html(userTotal);

    //Sets win/lose conditions
    if (userTotal == Random) {
        huzzah();
    } else if (userTotal > Random) {
        loser();
    }
})

$('#green').on('click', function() {
    userTotal = userTotal + green;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').html(userTotal);

    //sets win/lose conditions
    if (userTotal == Random) {
        yay();
    } else if (userTotal > Random) {
        loser();
    }
})

$('#pink').on('click', function() {
    userTotal = userTotal + pink;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').html(userTotal);

    if (userTotal == Random) {
        yay();
    } else if (userTotal > Random) {
        loser();
    }
})

$('#yellow').on('click', function() {
    userTotal = userTotal + yellow;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').html(userTotal);

    if (userTotal == Random) {
        yay();
    } else if (userTotal > Random) {
        loser();
    }

    // Adds the wins to the userTotal
    function huzzah() {
        alert("You won!");
        wins++;
        $('#numWins').html(wins);
        reset();
    }
    // Adds the losses to the userTotal
    function loser() {
        alert("You lose!");
        losses++;
        $('#numLosses').html(losses);
        reset()
    }
});