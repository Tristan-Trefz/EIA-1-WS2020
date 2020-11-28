var Europa2008: number = 4965.7;
var Europa2018: number = 4209.3;

var Nordamerika2008: number = 6600.4;
var Nordamerika2018: number = 6035.6;  

var Südamerika2008: number = 1132.6;
var Südamerika2018: number = 1261.5; 

var Afrika2008: number = 1028;
var Afrika2018: number = 1235.5;

var Asien2008: number = 12954.7;
var Asien2018: number = 16274.1;

var Australien2008: number = 1993;
var Australien2018: number = 2100.5;

var Summe2018: number = Europa2018 + Nordamerika2018 + Südamerika2018 + Afrika2018 + Asien2018 + Australien2018;

function europe(){
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in Europe";
    document.querySelector("#absolute").innerHTML= Europa2018 + " Kg CO2";
    document.querySelector("#relative").innerHTML= Math.round(Europa2018/Summe2018*100) + " %";
    document.querySelector("#growth").innerHTML= -Math.round((1-Europa2018/Europa2008)*100) + "% verändert";
    document.querySelector("#absoluteGrowth").innerHTML= -Math.round(Europa2008-Europa2018) + "kg CO2";
    document.querySelector("#chart").style.height= "86px";
}

function northamerica(){
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in North America";
    document.querySelector("#absolute").innerHTML= Nordamerika2018 + " Kg CO2";
    document.querySelector("#relative").innerHTML= Math.round(Nordamerika2018/Summe2018*100) + " %";
    document.querySelector("#growth").innerHTML= -Math.round((1-Nordamerika2018/Nordamerika2008)*100) + "% verändert";
    document.querySelector("#absoluteGrowth").innerHTML= -Math.round(Nordamerika2008-Nordamerika2018) + "kg CO2";
    document.querySelector("#chart").style.height= "81px";
}

function southamerica(){
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in South America";
    document.querySelector("#absolute").innerHTML= Südamerika2018 + " Kg CO2";
    document.querySelector("#relative").innerHTML= Math.round(Südamerika2018/Summe2018*100) + " %";
    document.querySelector("#growth").innerHTML= -Math.round((1-Südamerika2018/Südamerika2008)*100) + "% verändert";
    document.querySelector("#absoluteGrowth").innerHTML= -Math.round(Südamerika2008-Südamerika2018) + "kg CO2";
    document.querySelector("#chart").style.height= "96px";
}

function africa(){
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in Africa";
    document.querySelector("#absolute").innerHTML= Afrika2018 + " Kg CO2";
    document.querySelector("#relative").innerHTML= Math.round(Afrika2018/Summe2018*100) + " %";
    document.querySelector("#growth").innerHTML= -Math.round((1-Afrika2018/Afrika2008)*100) + "% verändert";
    document.querySelector("#absoluteGrowth").innerHTML= -Math.round(Afrika2008-Afrika2018) + "kg CO2";
    document.querySelector("#chart").style.height= "96px";
}

function asia(){
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in Asia";
    document.querySelector("#absolute").innerHTML= Asien2018 + " Kg CO2";
    document.querySelector("#relative").innerHTML= Math.round(Asien2018/Summe2018*100) + " %";
    document.querySelector("#growth").innerHTML= -Math.round((1-Asien2018/Asien2008)*100) + "% verändert";
    document.querySelector("#absoluteGrowth").innerHTML= -Math.round(Asien2008-Asien2018) + "kg CO2";
    document.querySelector("#chart").style.height= "48px";
}

function australia(){
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in Australia";
    document.querySelector("#absolute").innerHTML= Australien2018 + " Kg CO2";
    document.querySelector("#relative").innerHTML= Math.round(Australien2018/Summe2018*100) + " %";
    document.querySelector("#growth").innerHTML= -Math.round((1-Australien2018/Australien2008)*100) + "% verändert";
    document.querySelector("#absoluteGrowth").innerHTML= -Math.round(Australien2008-Australien2018) + "kg CO2";
    document.querySelector("#chart").style.height= "93px";

}