let next: HTMLElement;
let ergebnis: HTMLElement;

next = document.querySelector("#next");
ergebnis = document.querySelector("#ergebnis");



interface Person {
    Name: string;
    Email: string;
    Alter: number;
}

let kontaktListe: Person[] = [
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

let index: number = 0;

next.addEventListener("click", function(): void {
    if (index < 2){
    index++;
    console.log(index);
    } else {
        index = 0;
        console.log(index);
    }
    
    ergebnis.innerHTML = kontaktListe[index].Name + "<br>"
    + kontaktListe[index].Email + "<br>"
    + kontaktListe[index].Alter;

});

