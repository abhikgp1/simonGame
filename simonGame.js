// var buttonColours = ["red", "blue", "green", "yellow"]
// var gamePattern = [];
// var  userClickedPattern = [];

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    // userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function animatePress(CurrentColour) {
    $("#" + CurrentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + CurrentColour).removeClass("pressed");
    }, 100);
}

// function nextSequence() {
//     var randomNumber = Math.floor(Math.random()*4);
//     var randomChosenColour = buttonColours(randomNumber);
//     // gamePattern.push(randomChosenColour);
//     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//     playSound(randomChosenColour);
// }

function playSound(name) {
    var audio = new Audio(name + ".mp3");
    audio.play();
}