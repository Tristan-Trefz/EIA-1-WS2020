var next;
var ergebnis;
next = document.querySelector("#next");
ergebnis = document.querySelector("#ergebnis");
var kontaktListe = [
    {
        Name: "Bob der Baumeister",
        Email: "bobbaumeister@live.de",
        Alter: 35
    },
    {
        Name: "Dr.Seuss",
        Email: "seuss@web.de",
        Alter: 63
    },
    {
        Name: "Frodo Beutlin",
        Email: "frobe87@mail.au",
        Alter: 45
    }
];
var index = 0;
next.addEventListener("click", function () {
    if (index < 2) {
        index++;
        console.log(index);
    }
    else {
        index = 0;
        console.log(index);
    }
    ergebnis.innerHTML = kontaktListe[index].Name + "<br>"
        + kontaktListe[index].Email + "<br>"
        + kontaktListe[index].Alter;
});
//# sourceMappingURL=Objekte.js.map