var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}
        document.addEventListener("keypress", function(event) {
            makeSound(event.key);
            buttonAnimation(event.key);
        });

        function makeSound(key){
        switch (key) {
            case "a":
                var audio= new Audio("./Drum Sounds/snare.mp3");
                audio.play();
                break;
            case "b":
                var audio= new Audio("./Drum Sounds/tom-1.mp3");
                audio.play();
                break;
            case "c":
                var audio= new Audio("./Drum Sounds/tom-2.mp3");
                audio.play();
                break;
            case "d":
                var audio= new Audio("./Drum Sounds/floor tom.mp3");
                audio.play();
                break;
            case "e":
                var audio= new Audio("./Drum Sounds/bass drum.mp3");
                audio.play();
                break;
            case "f":
                var audio= new Audio("./Drum Sounds/crash.mp3");
                audio.play();
                break;
            case "g":
                var audio= new Audio("./Drum Sounds/crash.mp3");
                audio.play();
                break;
            case "h":
                var audio= new Audio("./Drum Sounds/universal.mp3");
                audio.play();
                break;
        
            default:console.log(buttonInnerHTML);
                break;
        }
    }


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed"); 
    }, 100);
}
