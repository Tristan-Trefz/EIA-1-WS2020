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
let c1m: HTMLElement = document.querySelector(".c1m");
let c2m: HTMLElement = document.querySelector(".c2m");
let c3m: HTMLElement = document.querySelector(".c3m");
let c4m: HTMLElement = document.querySelector(".c4m");
let c5m: HTMLElement = document.querySelector(".c5m");
let c6m: HTMLElement = document.querySelector(".c6m");
let c7m: HTMLElement = document.querySelector(".c7m");
let c8m: HTMLElement = document.querySelector(".c8m");
let c9m: HTMLElement = document.querySelector(".c9m");
let c10m: HTMLElement = document.querySelector(".c10m");
let c11m: HTMLElement = document.querySelector(".c11m");
let c12m: HTMLElement = document.querySelector(".c12m");
let c13m: HTMLElement = document.querySelector(".c13m");
let c14m: HTMLElement = document.querySelector(".c14m");
let c15m: HTMLElement = document.querySelector(".c15m");
let c16m: HTMLElement = document.querySelector(".c16m");
let c1h: HTMLElement = document.querySelector(".c1h");
let c2h: HTMLElement = document.querySelector(".c2h");
let c3h: HTMLElement = document.querySelector(".c3h");
let c4h: HTMLElement = document.querySelector(".c4h");
let c5h: HTMLElement = document.querySelector(".c5h");
let c6h: HTMLElement = document.querySelector(".c6h");
let c7h: HTMLElement = document.querySelector(".c7h");
let c8h: HTMLElement = document.querySelector(".c8h");
let c9h: HTMLElement = document.querySelector(".c9h");
let c10h: HTMLElement = document.querySelector(".c10h");
let c11h: HTMLElement = document.querySelector(".c11h");
let c12h: HTMLElement = document.querySelector(".c12h");
let c13h: HTMLElement = document.querySelector(".c13h");
let c14h: HTMLElement = document.querySelector(".c14h");
let c15h: HTMLElement = document.querySelector(".c15h");
let c16h: HTMLElement = document.querySelector(".c16h");
let c17h: HTMLElement = document.querySelector(".c17h");
let c18h: HTMLElement = document.querySelector(".c18h");
let c19h: HTMLElement = document.querySelector(".c19h");
let c20h: HTMLElement = document.querySelector(".c20h");
let c21h: HTMLElement = document.querySelector(".c21h");
let c22h: HTMLElement = document.querySelector(".c22h");
let c23h: HTMLElement = document.querySelector(".c23h");
let c24h: HTMLElement = document.querySelector(".c24h");
let c25h: HTMLElement = document.querySelector(".c25h");
let c26h: HTMLElement = document.querySelector(".c26h");
let c27h: HTMLElement = document.querySelector(".c27h");
let c28h: HTMLElement = document.querySelector(".c28h");
let c29h: HTMLElement = document.querySelector(".c29h");
let c30h: HTMLElement = document.querySelector(".c30h");
let c31h: HTMLElement = document.querySelector(".c31h");
let c32h: HTMLElement = document.querySelector(".c32h");

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

//Arrays fuer die jeweiligen Kartendecks
let edeck: string[] = ["FP-C-1", "FP-C-2", "FP-G-1", "FP-G-2", "FP-O-1", "FP-O-2", "FP-R-1", "FP-R-2"]
let mdeck: string[] = ["FSP-C-1", "FSP-C-2", "FSP-C-3", "FSP-C-4", "FSP-G-1", "FSP-G-2", "FSP-G-3", "FSP-G-4", "FSP-O-1", "FSP-O-2", "FSP-O-3", "FSP-O-4", "FSP-R-1", "FSP-R-2", "FSP-R-3", "FSP-R-4"];
let hdeck: string[] = ["FS-C-1", "FS-C-2", "FS-C-3", "FS-C-4", "FS-G-1", "FS-G-2", "FS-G-3", "FS-G-4", "FS-O-1", "FS-O-2", "FS-O-3", "FS-O-4", "FS-R-1", "FS-R-2", "FS-R-3", "FS-R-4", "FS-P-1", "FS-P-2", "FS-P-3", "FS-P-4", "FS-B-1", "FS-B-2", "FS-B-3", "FS-B-4", "FS-L-1", "FS-L-2", "FS-L-3", "FS-L-4", "FS-Y-1", "FS-Y-2", "FS-Y-3", "FS-Y-4"];

//Aeussere Funktionen zur Navigation zu und von der Startseite und den jeweiligen Spielbretten. 
//CSS class "X" = nicht sichtbar
ebutton.addEventListener("click", function(): void {
    start.classList.add("X");
    easy.classList.remove("X");

    //Funktion zum Mischen der Karten bei Spiel-Start
    function shuffle(edeck: string[]): string[] {
        var currentindex: number = edeck.length, tempvalue: string, randomindex: number;

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

mbutton.addEventListener("click", function(): void {
    start.classList.add("X");
    med.classList.remove("X");

    function shuffle(mdeck: string[]): string[] {
        var currentindex: number = mdeck.length, tempvalue: string, randomindex: number;
    
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

hbutton.addEventListener("click", function(): void {
    start.classList.add("X");
    hard.classList.remove("X");

    function shuffle(hdeck: string[]): string[] {
        var currentindex: number = hdeck.length, tempvalue: string, randomindex: number;
    
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
eend.addEventListener("click", function(): void {
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

mend.addEventListener("click", function(): void {
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

hend.addEventListener("click", function(): void {
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
