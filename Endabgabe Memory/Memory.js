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
    var c1m = document.querySelector(".c1m");
    var c2m = document.querySelector(".c2m");
    var c3m = document.querySelector(".c3m");
    var c4m = document.querySelector(".c4m");
    var c5m = document.querySelector(".c5m");
    var c6m = document.querySelector(".c6m");
    var c7m = document.querySelector(".c7m");
    var c8m = document.querySelector(".c8m");
    var c9m = document.querySelector(".c9m");
    var c10m = document.querySelector(".c10m");
    var c11m = document.querySelector(".c11m");
    var c12m = document.querySelector(".c12m");
    var c13m = document.querySelector(".c13m");
    var c14m = document.querySelector(".c14m");
    var c15m = document.querySelector(".c15m");
    var c16m = document.querySelector(".c16m");
    var c1h = document.querySelector(".c1h");
    var c2h = document.querySelector(".c2h");
    var c3h = document.querySelector(".c3h");
    var c4h = document.querySelector(".c4h");
    var c5h = document.querySelector(".c5h");
    var c6h = document.querySelector(".c6h");
    var c7h = document.querySelector(".c7h");
    var c8h = document.querySelector(".c8h");
    var c9h = document.querySelector(".c9h");
    var c10h = document.querySelector(".c10h");
    var c11h = document.querySelector(".c11h");
    var c12h = document.querySelector(".c12h");
    var c13h = document.querySelector(".c13h");
    var c14h = document.querySelector(".c14h");
    var c15h = document.querySelector(".c15h");
    var c16h = document.querySelector(".c16h");
    var c17h = document.querySelector(".c17h");
    var c18h = document.querySelector(".c18h");
    var c19h = document.querySelector(".c19h");
    var c20h = document.querySelector(".c20h");
    var c21h = document.querySelector(".c21h");
    var c22h = document.querySelector(".c22h");
    var c23h = document.querySelector(".c23h");
    var c24h = document.querySelector(".c24h");
    var c25h = document.querySelector(".c25h");
    var c26h = document.querySelector(".c26h");
    var c27h = document.querySelector(".c27h");
    var c28h = document.querySelector(".c28h");
    var c29h = document.querySelector(".c29h");
    var c30h = document.querySelector(".c30h");
    var c31h = document.querySelector(".c31h");
    var c32h = document.querySelector(".c32h");
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
    //Arrays fuer die jeweiligen Kartendecks
    var edeck = ["FP-C-1", "FP-C-2", "FP-G-1", "FP-G-2", "FP-O-1", "FP-O-2", "FP-R-1", "FP-R-2"];
    var mdeck = ["FSP-C-1", "FSP-C-2", "FSP-C-3", "FSP-C-4", "FSP-G-1", "FSP-G-2", "FSP-G-3", "FSP-G-4", "FSP-O-1", "FSP-O-2", "FSP-O-3", "FSP-O-4", "FSP-R-1", "FSP-R-2", "FSP-R-3", "FSP-R-4"];
    var hdeck = ["FS-C-1", "FS-C-2", "FS-C-3", "FS-C-4", "FS-G-1", "FS-G-2", "FS-G-3", "FS-G-4", "FS-O-1", "FS-O-2", "FS-O-3", "FS-O-4", "FS-R-1", "FS-R-2", "FS-R-3", "FS-R-4", "FS-P-1", "FS-P-2", "FS-P-3", "FS-P-4", "FS-B-1", "FS-B-2", "FS-B-3", "FS-B-4", "FS-L-1", "FS-L-2", "FS-L-3", "FS-L-4", "FS-Y-1", "FS-Y-2", "FS-Y-3", "FS-Y-4"];
    //Aeussere Funktionen zur Navigation zu und von der Startseite und den jeweiligen Spielbretten. 
    //CSS class "X" = nicht sichtbar
    ebutton.addEventListener("click", function () {
        start.classList.add("X");
        easy.classList.remove("X");
        //Funktion zum Mischen der Karten bei Spiel-Start
        function shuffle(edeck) {
            var currentindex = edeck.length, tempvalue, randomindex;
            //Waehrend es Karten zum mischen gibt...
            while (0 !== currentindex) {
                //Waehle eine zufaellige Karte
                randomindex = Math.floor(Math.random() * currentindex);
                currentindex -= 1;
                //Und tausche es mit der aktuellen Reihenfolge
                tempvalue = edeck[currentindex];
                edeck[currentindex] = edeck[randomindex];
                edeck[randomindex] = tempvalue;
            }
            return edeck;
        }
        shuffle(edeck);
        //Den jeweiligen Raster-Positionen Karten zuweisen
        c1.classList.add(edeck[0] + "X");
        c2.classList.add(edeck[1] + "X");
        c3.classList.add(edeck[2] + "X");
        c4.classList.add(edeck[3] + "X");
        c5.classList.add(edeck[4] + "X");
        c6.classList.add(edeck[5] + "X");
        c7.classList.add(edeck[6] + "X");
        c8.classList.add(edeck[7] + "X");
    });
    mbutton.addEventListener("click", function () {
        start.classList.add("X");
        med.classList.remove("X");
        function shuffle(mdeck) {
            var currentindex = mdeck.length, tempvalue, randomindex;
            while (0 !== currentindex) {
                randomindex = Math.floor(Math.random() * currentindex);
                currentindex -= 1;
                tempvalue = mdeck[currentindex];
                mdeck[currentindex] = mdeck[randomindex];
                mdeck[randomindex] = tempvalue;
            }
            return mdeck;
        }
        shuffle(mdeck);
        c1m.classList.add(mdeck[0] + "X");
        c2m.classList.add(mdeck[1] + "X");
        c3m.classList.add(mdeck[2] + "X");
        c4m.classList.add(mdeck[3] + "X");
        c5m.classList.add(mdeck[4] + "X");
        c6m.classList.add(mdeck[5] + "X");
        c7m.classList.add(mdeck[6] + "X");
        c8m.classList.add(mdeck[7] + "X");
        c9m.classList.add(mdeck[8] + "X");
        c10m.classList.add(mdeck[9] + "X");
        c11m.classList.add(mdeck[10] + "X");
        c12m.classList.add(mdeck[11] + "X");
        c13m.classList.add(mdeck[12] + "X");
        c14m.classList.add(mdeck[13] + "X");
        c15m.classList.add(mdeck[14] + "X");
        c16m.classList.add(mdeck[15] + "X");
    });
    hbutton.addEventListener("click", function () {
        start.classList.add("X");
        hard.classList.remove("X");
        function shuffle(hdeck) {
            var currentindex = hdeck.length, tempvalue, randomindex;
            while (0 !== currentindex) {
                randomindex = Math.floor(Math.random() * currentindex);
                currentindex -= 1;
                tempvalue = hdeck[currentindex];
                hdeck[currentindex] = hdeck[randomindex];
                hdeck[randomindex] = tempvalue;
            }
            return hdeck;
        }
        shuffle(hdeck);
        c1h.classList.add(hdeck[0] + "X");
        c2h.classList.add(hdeck[1] + "X");
        c3h.classList.add(hdeck[2] + "X");
        c4h.classList.add(hdeck[3] + "X");
        c5h.classList.add(hdeck[4] + "X");
        c6h.classList.add(hdeck[5] + "X");
        c7h.classList.add(hdeck[6] + "X");
        c8h.classList.add(hdeck[7] + "X");
        c9h.classList.add(hdeck[8] + "X");
        c10h.classList.add(hdeck[9] + "X");
        c11h.classList.add(hdeck[10] + "X");
        c12h.classList.add(hdeck[11] + "X");
        c13h.classList.add(hdeck[12] + "X");
        c14h.classList.add(hdeck[13] + "X");
        c15h.classList.add(hdeck[14] + "X");
        c16h.classList.add(hdeck[15] + "X");
        c17h.classList.add(hdeck[16] + "X");
        c18h.classList.add(hdeck[17] + "X");
        c19h.classList.add(hdeck[18] + "X");
        c20h.classList.add(hdeck[19] + "X");
        c21h.classList.add(hdeck[20] + "X");
        c22h.classList.add(hdeck[21] + "X");
        c23h.classList.add(hdeck[22] + "X");
        c24h.classList.add(hdeck[23] + "X");
        c25h.classList.add(hdeck[24] + "X");
        c26h.classList.add(hdeck[25] + "X");
        c27h.classList.add(hdeck[26] + "X");
        c28h.classList.add(hdeck[27] + "X");
        c29h.classList.add(hdeck[28] + "X");
        c30h.classList.add(hdeck[29] + "X");
        c31h.classList.add(hdeck[30] + "X");
        c32h.classList.add(hdeck[31] + "X");
    });
    //Funktionen zum beenden des Spiels
    eend.addEventListener("click", function () {
        start.classList.remove("X");
        easy.classList.add("X");
        c1.classList.remove(edeck[0] + "X");
        c2.classList.remove(edeck[1] + "X");
        c3.classList.remove(edeck[2] + "X");
        c4.classList.remove(edeck[3] + "X");
        c5.classList.remove(edeck[4] + "X");
        c6.classList.remove(edeck[5] + "X");
        c7.classList.remove(edeck[6] + "X");
        c8.classList.remove(edeck[7] + "X");
    });
    mend.addEventListener("click", function () {
        start.classList.remove("X");
        med.classList.add("X");
        c1m.classList.remove(mdeck[0] + "X");
        c2m.classList.remove(mdeck[1] + "X");
        c3m.classList.remove(mdeck[2] + "X");
        c4m.classList.remove(mdeck[3] + "X");
        c5m.classList.remove(mdeck[4] + "X");
        c6m.classList.remove(mdeck[5] + "X");
        c7m.classList.remove(mdeck[6] + "X");
        c8m.classList.remove(mdeck[7] + "X");
        c9m.classList.remove(mdeck[8] + "X");
        c10m.classList.remove(mdeck[9] + "X");
        c11m.classList.remove(mdeck[10] + "X");
        c12m.classList.remove(mdeck[11] + "X");
        c13m.classList.remove(mdeck[12] + "X");
        c14m.classList.remove(mdeck[13] + "X");
        c15m.classList.remove(mdeck[14] + "X");
        c16m.classList.remove(mdeck[15] + "X");
    });
    hend.addEventListener("click", function () {
        start.classList.remove("X");
        hard.classList.add("X");
        c1h.classList.remove(hdeck[0] + "X");
        c2h.classList.remove(hdeck[1] + "X");
        c3h.classList.remove(hdeck[2] + "X");
        c4h.classList.remove(hdeck[3] + "X");
        c5h.classList.remove(hdeck[4] + "X");
        c6h.classList.remove(hdeck[5] + "X");
        c7h.classList.remove(hdeck[6] + "X");
        c8h.classList.remove(hdeck[7] + "X");
        c9h.classList.remove(hdeck[8] + "X");
        c10h.classList.remove(hdeck[9] + "X");
        c11h.classList.remove(hdeck[10] + "X");
        c12h.classList.remove(hdeck[11] + "X");
        c13h.classList.remove(hdeck[12] + "X");
        c14h.classList.remove(hdeck[13] + "X");
        c15h.classList.remove(hdeck[14] + "X");
        c16h.classList.remove(hdeck[15] + "X");
        c17h.classList.remove(hdeck[16] + "X");
        c18h.classList.remove(hdeck[17] + "X");
        c19h.classList.remove(hdeck[18] + "X");
        c20h.classList.remove(hdeck[19] + "X");
        c21h.classList.remove(hdeck[20] + "X");
        c22h.classList.remove(hdeck[21] + "X");
        c23h.classList.remove(hdeck[22] + "X");
        c24h.classList.remove(hdeck[23] + "X");
        c25h.classList.remove(hdeck[24] + "X");
        c26h.classList.remove(hdeck[25] + "X");
        c27h.classList.remove(hdeck[26] + "X");
        c28h.classList.remove(hdeck[27] + "X");
        c29h.classList.remove(hdeck[28] + "X");
        c30h.classList.remove(hdeck[29] + "X");
        c31h.classList.remove(hdeck[30] + "X");
        c32h.classList.remove(hdeck[31] + "X");
    });
});
//# sourceMappingURL=Memory.js.map