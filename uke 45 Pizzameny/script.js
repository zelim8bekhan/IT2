// Lag en pizzameny ved hjelp av lister. Skriv ut lista ved ved hjelp av en løkke i konsollen. 
// Vi skal nå utvide pizzamenyen, slik at det nå også er informasjon om ingredienser og pris(er) for hver pizza.
// Skriv ut hele menyen med pizzanavn, ingredienser og pris
// Lag et enkelt bestillingssystem, der brukeren kan bestille pizza og drikke. 
// Systemet skal være enkelt, og skal bestå av to rullgardin-menyer. 
// I den ene skal brukeren velge seg en pizza, og i den andre velges det antall drikke. 
// Når brukeren har bestilt så vises det en kvittering som inneholder navn på pizza og antall drikke vises på skjermen.
// Totalpris med og uten mva skal også vises. Kom også med en kort forklaring på nettsiden om hvordan du har løst oppgaven.


// var pizzaListe = new Array;



// pizzaListe [0] = ['Kvess','Drømmen', 'Snadder', 'Biffen','Flammen'];
// pizzaListe['Kvess'] = ['ost', 'tomatsaus', 'skinke', 'sjampinjong'];
// pizzaListe ['Drømmen'] = ['ost', 'tomatsaus', 'kjøttdeig', 'paprika'];

//     for (var i  =0; i < pizzaListe.length; i++){
//         console.log(pizzaListe[i]);
//     }

window.onload=oppstart; 

var antDrikke = 0;
var prisDrikke = 49;

function oppstart(){
    //document.getElementById("meny").onclick = skrivUtMeny;
    //document.getElementById("drikke").onchange = bestilleDrikke;
    document.getElementById("totalKnapp").onclick = rengUt;

var meny = new Array ();

meny [0] = {pizzanavn: "Biff&ost", pris: 190, ingredienser: "Løk,, biff & ost"};
meny [1] = {pizzanavn: "Ost&kylling", pris:180, ingredienser: "krydder, ost og kylling"};
meny [2] = {pizzanavn: "Kvess", pris: 165, ingredienser: "ost, tomatsaus, skinke og sjampinjong"};
meny [3] = {pizzanavn: "Drømmen", pris: 189, ingredienser: "ost, tomatsaus, kjøttdeig og paprika"};
meny [4] = {pizzanavn: "Biffen", pris: 199, ingredienser: "biff, ost, tomatsaus og løk"};

// function bestilleDrikke(){
    //     console.log("Bestille drikke fungerer")
    //     var x = document.getElementById("drikke");
    //     var i = x.selectedIndex;
    //     document.getElementById("minDiv").innerHTML = "Du har valgt pizza nr: " + meny[i].pizzanavn;
    // }
    
    
    
    function bestilleDrikke(){
        antDrikke = document.getElementById("drikke").value;
        document.getElementById("drikkebestilling").innerHTML = "Du har bestilt: " + antDrikke + "  Pris du må betale : " + antDrikke*49;
        var total = antDrikke*prisDrikke + meny[i].pris;
    }
    
    
    function skrivUtMeny(){
        var tilDiv = " ";
        for (let i = 0; i < meny.length; i++){
            console.log(meny[i].pizzanavn)
            tilDiv = tilDiv + "NR: " + i + " " + meny[i].pizzanavn + "Pris: " + meny[i].pris + "Ingredienser" + meny[i].ingredienser + "<br>";
        }
        document.getElementById("pizzaDiv").innerHTML = tilDiv;
    }

    // function regnUt (){
    //     document.getElementById("pizza").value;

    // }