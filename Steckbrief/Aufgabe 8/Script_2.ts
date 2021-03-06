
window.addEventListener("load", function(): void {

var play: HTMLElement = document.querySelector("#play");
var pause: HTMLElement = document.querySelector("#pause");
var interval1: number;
var loop: number [] = [];
var rec: boolean;
var recActive: HTMLElement = document.querySelector("#recActive");
var recInactive: HTMLElement = document.querySelector("#recInactive");
var del: HTMLElement = document.querySelector("#delete");
var one: HTMLElement = document.querySelector("#one");
var two: HTMLElement = document.querySelector("#two");
var three: HTMLElement = document.querySelector("#three");
var four: HTMLElement = document.querySelector("#four");
var five: HTMLElement = document.querySelector("#five");
var six: HTMLElement = document.querySelector("#six");
var seven: HTMLElement = document.querySelector("#seven");
var eight: HTMLElement = document.querySelector("#eight");

var sounds: HTMLAudioElement[] = [
    new Audio("Assets/BD_EvaMendez.wav"),
    new Audio("Assets/FX_DoItVox.wav"),
    new Audio("Assets/FX_VocLoop_110BPM.wav"),
    new Audio("Assets/FX2.wav"),
    new Audio("Assets/FX3.wav"),
    new Audio("Assets/Ghosthack - Closed Hat (9).wav"),
    new Audio("Assets/SD_SweetLovinVoc1.wav"),
    new Audio("Assets/SD_SweetLovinVoc2.wav"),
    new Audio("Assets/SD_Sütlac1.wav")
];

document.querySelector("#btn0").addEventListener("click", function (): void {
    playSample(0);
    recordSample (0);
});

window.addEventListener("keydown", (event) => {
    if (event.key == "1") {
    playSample(0);
    recordSample (0);
}});

document.querySelector("#btn1").addEventListener("click", function (): void {
    playSample(1);
    recordSample (1);
});

window.addEventListener("keydown", (event) => {
    if (event.key == "2") {
    playSample(1);
    recordSample (1);
}});

document.querySelector("#btn2").addEventListener("click", function (): void {
    playSample(2);
    recordSample (2);
});

window.addEventListener("keydown", (event) => {
    if (event.key == "3") {
    playSample(2);
    recordSample (2);
}});

document.querySelector("#btn3").addEventListener("click", function (): void {
    playSample(3);
    recordSample (3);
});

window.addEventListener("keydown", (event) => {
    if (event.key == "4") {
    playSample(3);
    recordSample (3);
}});

document.querySelector("#btn4").addEventListener("click", function (): void {
    playSample(4);
    recordSample (4);
});

window.addEventListener("keydown", (event) => {
    if (event.key == "5") {
    playSample(4);
    recordSample (4);
}});

document.querySelector("#btn5").addEventListener("click", function (): void {
    playSample(5);
    recordSample (5);
});

window.addEventListener("keydown", (event) => {
    if (event.key == "6") {
    playSample(5);
    recordSample (5);
}});

document.querySelector("#btn6").addEventListener("click", function (): void {
    playSample(6);
    recordSample (6);
});

window.addEventListener("keydown", (event) => {
    if (event.key == "7") {
    playSample(6);
    recordSample (6);
}});

document.querySelector("#btn7").addEventListener("click", function (): void {
    playSample(7);
    recordSample (7);
});

window.addEventListener("keydown", (event) => {
    if (event.key == "8") {
    playSample(7);
    recordSample (7);
}});

document.querySelector("#btn8").addEventListener("click", function (): void {
    playSample(8);
    recordSample (8);
});

window.addEventListener("keydown", (event) => {
    if (event.key == "9") {
    playSample(8);
    recordSample (8);
}});

recInactive.addEventListener("click", function(): void {
    recActive.classList.remove("inv");
    recInactive.classList.add("inv");
    rec = false;
});

recActive.addEventListener("click", function(): void {
        recActive.classList.add("inv");
        recInactive.classList.remove("inv");
        rec = true;
}); 

play.addEventListener("click", function(): void {
    beat(true);
    play.classList.add("inv");
    pause.classList.remove("inv");
});

pause.addEventListener("click", function(): void {
    beat(false);
    pause.classList.add("inv");
    play.classList.remove("inv");
});

del.addEventListener("click", function(): void {
    if (loop.length > 0) {
        loop.length = 0;
    }
});

function playSample(x: number): void {
    if (sounds[x].paused) {
        sounds[x].play();
    } else {
        sounds[x].currentTime = 0;
    }
}

function recordSample (y: number): void {
    if (rec == true) {
        loop.push(y);
        console.log(loop.length);
}}

document.addEventListener("click", function (): void {
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

document.addEventListener("keydown", function (): void {
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

function beat(x: boolean): void {
    if (x == true) {
    interval1 = setInterval(function(): void {
        setTimeout(function(): void {
            playSample(loop[0]);
        },         0);
        setTimeout(function(): void {
            playSample(loop[1]);
        },         250);
        setTimeout(function(): void {
            playSample(loop[2]);
        },         500);
        setTimeout(function(): void {
            playSample(loop[3]);
        },         750);
        setTimeout(function(): void {
            playSample(loop[4]);
        },         1000);
        setTimeout(function(): void {
            playSample(loop[5]);
        },         1250);
        setTimeout(function(): void {
            playSample(loop[6]);
        },         1500);
        setTimeout(function(): void {
            playSample(loop[7]);
        },         1750);
        setTimeout(function(): void {
            playSample(loop[8]);
        },         2000);
    },                      1000);
    } else {
        clearInterval(interval1);
    }
}




});
