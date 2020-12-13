window.addEventListener("load", function () {
    var play = document.querySelector("#play");
    var pause = document.querySelector("#pause");
    var interval1;
    var loop = [];
    var rec;
    var recActive = document.querySelector("#recActive");
    var recInactive = document.querySelector("#recInactive");
    var del = document.querySelector("#delete");
    var one = document.querySelector("#one");
    var two = document.querySelector("#two");
    var three = document.querySelector("#three");
    var four = document.querySelector("#four");
    var five = document.querySelector("#five");
    var six = document.querySelector("#six");
    var seven = document.querySelector("#seven");
    var eight = document.querySelector("#eight");
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
    document.querySelector("#btn0").addEventListener("click", function () {
        playSample(0);
        recordSample(0);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "1") {
            playSample(0);
            recordSample(0);
        }
    });
    document.querySelector("#btn1").addEventListener("click", function () {
        playSample(1);
        recordSample(1);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "2") {
            playSample(1);
            recordSample(1);
        }
    });
    document.querySelector("#btn2").addEventListener("click", function () {
        playSample(2);
        recordSample(2);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "3") {
            playSample(2);
            recordSample(2);
        }
    });
    document.querySelector("#btn3").addEventListener("click", function () {
        playSample(3);
        recordSample(3);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "4") {
            playSample(3);
            recordSample(3);
        }
    });
    document.querySelector("#btn4").addEventListener("click", function () {
        playSample(4);
        recordSample(4);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "5") {
            playSample(4);
            recordSample(4);
        }
    });
    document.querySelector("#btn5").addEventListener("click", function () {
        playSample(5);
        recordSample(5);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "6") {
            playSample(5);
            recordSample(5);
        }
    });
    document.querySelector("#btn6").addEventListener("click", function () {
        playSample(6);
        recordSample(6);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "7") {
            playSample(6);
            recordSample(6);
        }
    });
    document.querySelector("#btn7").addEventListener("click", function () {
        playSample(7);
        recordSample(7);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "8") {
            playSample(7);
            recordSample(7);
        }
    });
    document.querySelector("#btn8").addEventListener("click", function () {
        playSample(8);
        recordSample(8);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "9") {
            playSample(8);
            recordSample(8);
        }
    });
    recInactive.addEventListener("click", function () {
        recActive.classList.remove("inv");
        recInactive.classList.add("inv");
        rec = false;
    });
    recActive.addEventListener("click", function () {
        recActive.classList.add("inv");
        recInactive.classList.remove("inv");
        rec = true;
    });
    play.addEventListener("click", function () {
        beat(true);
        play.classList.add("inv");
        pause.classList.remove("inv");
    });
    pause.addEventListener("click", function () {
        beat(false);
        pause.classList.add("inv");
        play.classList.remove("inv");
    });
    del.addEventListener("click", function () {
        if (loop.length > 0) {
            loop.length = 0;
        }
    });
    function playSample(x) {
        if (sounds[x].paused) {
            sounds[x].play();
        }
        else {
            sounds[x].currentTime = 0;
        }
    }
    function recordSample(y) {
        if (rec == true) {
            loop.push(y);
            console.log(loop.length);
        }
    }
    document.addEventListener("click", function () {
        if (loop.length == 1) {
            one.classList.add("on");
            one.classList.remove("off");
        }
        if (loop.length == 2) {
            two.classList.add("on");
            two.classList.remove("off");
        }
        if (loop.length == 3) {
            three.classList.add("on");
            three.classList.remove("off");
        }
        if (loop.length == 4) {
            four.classList.add("on");
            four.classList.remove("off");
        }
        if (loop.length == 5) {
            five.classList.add("on");
            five.classList.remove("off");
        }
        if (loop.length == 6) {
            six.classList.add("on");
            six.classList.remove("off");
        }
        if (loop.length == 7) {
            seven.classList.add("on");
            seven.classList.remove("off");
        }
        if (loop.length == 8) {
            eight.classList.add("on");
            eight.classList.remove("off");
        }
        if (loop.length == 0) {
            one.classList.remove("on");
            one.classList.add("off");
            two.classList.remove("on");
            two.classList.add("off");
            three.classList.remove("on");
            three.classList.add("off");
            four.classList.remove("on");
            four.classList.add("off");
            five.classList.remove("on");
            five.classList.add("off");
            six.classList.remove("on");
            six.classList.add("off");
            seven.classList.remove("on");
            seven.classList.add("off");
            eight.classList.remove("on");
            eight.classList.add("off");
        }
    });
    function beat(x) {
        if (x == true) {
            interval1 = setInterval(function () {
                setTimeout(function () {
                    playSample(loop[0]);
                }, 0);
                setTimeout(function () {
                    playSample(loop[1]);
                }, 250);
                setTimeout(function () {
                    playSample(loop[2]);
                }, 500);
                setTimeout(function () {
                    playSample(loop[3]);
                }, 750);
                setTimeout(function () {
                    playSample(loop[4]);
                }, 1000);
                setTimeout(function () {
                    playSample(loop[5]);
                }, 1250);
                setTimeout(function () {
                    playSample(loop[6]);
                }, 1500);
                setTimeout(function () {
                    playSample(loop[7]);
                }, 1750);
                setTimeout(function () {
                    playSample(loop[8]);
                }, 2000);
            }, 1000);
        }
        else {
            clearInterval(interval1);
        }
    }
});
//# sourceMappingURL=Script_2.js.map