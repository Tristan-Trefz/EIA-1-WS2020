//DOM laden
window.addEventListener("load", function () {
    //Variablen der einzelnen Karten
    var c1 = document.querySelector(".c1");
    var c2 = document.querySelector(".c2");
    var c3 = document.querySelector(".c3");
    var c4 = document.querySelector(".c4");
    var c5 = document.querySelector(".c5");
    var c6 = document.querySelector(".c6");
    var c7 = document.querySelector(".c7");
    var c8 = document.querySelector(".c8");
    var c9 = document.querySelector(".c9");
    var c10 = document.querySelector(".c10");
    var c11 = document.querySelector(".c11");
    var c12 = document.querySelector(".c12");
    var c13 = document.querySelector(".c13");
    var c14 = document.querySelector(".c14");
    var c15 = document.querySelector(".c15");
    var c16 = document.querySelector(".c16");
    var c17 = document.querySelector(".c17");
    var c18 = document.querySelector(".c18");
    var c19 = document.querySelector(".c19");
    var c20 = document.querySelector(".c20");
    var c21 = document.querySelector(".c21");
    var c22 = document.querySelector(".c22");
    var c23 = document.querySelector(".c23");
    var c24 = document.querySelector(".c24");
    var c25 = document.querySelector(".c25");
    var c26 = document.querySelector(".c26");
    var c27 = document.querySelector(".c27");
    var c28 = document.querySelector(".c28");
    var c39 = document.querySelector(".c29");
    var c30 = document.querySelector(".c30");
    var c31 = document.querySelector(".c31");
    var c32 = document.querySelector(".c32");
    //Variablen fuer Start-Seite und unterschiedliche Spielbretter bzw. Schwierigkeitsgrade    
    var start = document.querySelector("#start");
    var easy = document.querySelector("#easy");
    var med = document.querySelector("#med");
    var hard = document.querySelector("#hard");
    //Variablen fuer Navigation bzw. Knoepfe
    var ebutton = document.querySelector("#ebutton");
    var mbutton = document.querySelector("#mbutton");
    var hbutton = document.querySelector("#hbutton");
    var eend = document.querySelector("#eend");
    var mend = document.querySelector("#mend");
    var hend = document.querySelector("#hend");
    //Funktionen zur Navigation zu und von der Startseite und den jeweiligen Spielbretten. 
    //CSS class "X" = nicht sichtbar
    ebutton.addEventListener("click", function () {
        start.classList.add("X");
        easy.classList.remove("X");
        c1.classList.add("f-" + Math.floor(Math.random() * (8 - 1 + 1) + 1));
    });
    mbutton.addEventListener("click", function () {
        start.classList.add("X");
        med.classList.remove("X");
    });
    hbutton.addEventListener("click", function () {
        start.classList.add("X");
        hard.classList.remove("X");
    });
    eend.addEventListener("click", function () {
        start.classList.remove("X");
        easy.classList.add("X");
    });
    mend.addEventListener("click", function () {
        start.classList.remove("X");
        med.classList.add("X");
    });
    hend.addEventListener("click", function () {
        start.classList.remove("X");
        hard.classList.add("X");
    });
});
//# sourceMappingURL=Memory.js.map