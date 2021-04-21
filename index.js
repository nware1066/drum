let numberOfDrums = document.querySelectorAll(".drum").length;

for ( var i = 0; i<numberOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
    });
}
