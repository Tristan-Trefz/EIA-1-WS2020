//DOM laden
window.addEventListener("load", function(): void {

//Variablen der einzelnen Karten
let c1: HTMLElement = document.querySelector(".c1");
let c2: HTMLElement = document.querySelector(".c2");
let c3: HTMLElement = document.querySelector(".c3");
let c4: HTMLElement = document.querySelector(".c4");
let c5: HTMLElement = document.querySelector(".c5");
let c6: HTMLElement = document.querySelector(".c6");
let c7: HTMLElement = document.querySelector(".c7");
let c8: HTMLElement = document.querySelector(".c8");
let c9: HTMLElement = document.querySelector(".c9");
let c10: HTMLElement = document.querySelector(".c10");
let c11: HTMLElement = document.querySelector(".c11");
let c12: HTMLElement = document.querySelector(".c12");
let c13: HTMLElement = document.querySelector(".c13");
let c14: HTMLElement = document.querySelector(".c14");
let c15: HTMLElement = document.querySelector(".c15");
let c16: HTMLElement = document.querySelector(".c16");
let c17: HTMLElement = document.querySelector(".c17");
let c18: HTMLElement = document.querySelector(".c18");
let c19: HTMLElement = document.querySelector(".c19");
let c20: HTMLElement = document.querySelector(".c20");
let c21: HTMLElement = document.querySelector(".c21");
let c22: HTMLElement = document.querySelector(".c22");
let c23: HTMLElement = document.querySelector(".c23");
let c24: HTMLElement = document.querySelector(".c24");
let c25: HTMLElement = document.querySelector(".c25");
let c26: HTMLElement = document.querySelector(".c26");
let c27: HTMLElement = document.querySelector(".c27");
let c28: HTMLElement = document.querySelector(".c28");
let c39: HTMLElement = document.querySelector(".c29");
let c30: HTMLElement = document.querySelector(".c30");
let c31: HTMLElement = document.querySelector(".c31");
let c32: HTMLElement = document.querySelector(".c32");

//Variablen fuer Start-Seite und unterschiedliche Spielbretter bzw. Schwierigkeitsgrade    
let start: HTMLElement = document.querySelector("#start");
let easy: HTMLElement = document.querySelector("#easy");
let med: HTMLElement = document.querySelector("#med");
let hard: HTMLElement = document.querySelector("#hard");

//Variablen fuer Navigation bzw. Knoepfe
let ebutton: HTMLElement = document.querySelector("#ebutton");
let mbutton: HTMLElement = document.querySelector("#mbutton");
let hbutton: HTMLElement = document.querySelector("#hbutton");
let eend: HTMLElement = document.querySelector("#eend");
let mend: HTMLElement = document.querySelector("#mend");
let hend: HTMLElement = document.querySelector("#hend");

//Funktionen zur Navigation zu und von der Startseite und den jeweiligen Spielbretten. 
//CSS class "X" = nicht sichtbar
ebutton.addEventListener("click", function(): void {
    start.classList.add("X");
    easy.classList.remove("X");
    c1.classList.add("f-" + Math.floor(Math.random() * (8 - 1 + 1) + 1));
});

mbutton.addEventListener("click", function(): void {
    start.classList.add("X");
    med.classList.remove("X");
});

hbutton.addEventListener("click", function(): void {
    start.classList.add("X");
    hard.classList.remove("X");
});

eend.addEventListener("click", function(): void {
    start.classList.remove("X");
    easy.classList.add("X");
});

mend.addEventListener("click", function(): void {
    start.classList.remove("X");
    med.classList.add("X");
});

hend.addEventListener("click", function(): void {
    start.classList.remove("X");
    hard.classList.add("X");
});



