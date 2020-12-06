window.addEventListener("load", function () {
    var sounds = [
        new Audio('Assets/BD_EvaMendez.wav'),
        new Audio('Assets/FX_DoItVox.wav'),
        new Audio('Assets/FX_VocLoop_110BPM.wav'),
        new Audio('Assets/FX2.wav'),
        new Audio('Assets/FX3.wav'),
        new Audio('Assets/Ghosthack - Closed Hat (9).wav'),
        new Audio('Assets/SD_SweetLovinVoc1.wav'),
        new Audio('Assets/SD_SweetLovinVoc2.wav'),
        new Audio('Assets/SD_Sütlac1.wav')
    ];
    function playSample(x) {
        if (sounds[x].paused) {
            sounds[x].play();
        }
        else {
            sounds[x].currentTime = 0;
        }
        ;
    }
    document.querySelector("#btn0").addEventListener("click", function () {
        playSample(0);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == '1') {
            playSample(0);
        }
    });
    document.querySelector("#btn1").addEventListener("click", function () {
        playSample(1);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == '2') {
            playSample(1);
        }
    });
    document.querySelector("#btn2").addEventListener("click", function () {
        playSample(2);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == '3') {
            playSample(2);
        }
    });
    document.querySelector("#btn3").addEventListener("click", function () {
        playSample(3);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == '4') {
            playSample(3);
        }
    });
    document.querySelector("#btn4").addEventListener("click", function () {
        playSample(4);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == '5') {
            playSample(4);
        }
    });
    document.querySelector("#btn5").addEventListener("click", function () {
        playSample(5);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == '6') {
            playSample(5);
        }
    });
    document.querySelector("#btn6").addEventListener("click", function () {
        playSample(6);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == '7') {
            playSample(6);
        }
    });
    document.querySelector("#btn7").addEventListener("click", function () {
        playSample(7);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == '8') {
            playSample(7);
        }
    });
    document.querySelector("#btn8").addEventListener("click", function () {
        playSample(8);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == '9') {
            playSample(8);
        }
    });
    document.querySelector("#play").addEventListener("click", function () {
        beat();
    });
    function beat() {
        setInterval(function () {
            setTimeout(function () {
                sounds[1].play();
            }, 1000);
            setTimeout(function () {
                sounds[0].play();
            });
            setTimeout(function () {
                sounds[5].play();
            }, 250);
            setTimeout(function () {
                sounds[8].play();
            }, 750);
        }, 500);
    }
});
//# sourceMappingURL=Script_2.js.map