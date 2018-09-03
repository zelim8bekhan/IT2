console.log("It2 er gøy"); //skriver tekst til console
//alert("ALARM); //dukker opp en poppupboks
//document.write("Dette er en tekst generert i js-koden"); //skirver til body

var mittTall1; //deklarere variabel
mittTall1 = 3;  //tilordna verdien 3 til variabelen mittTall
console.log(mittTall1);  //skriver ut verdien av variabelen mittTall til console
var mittTall2 = "3";  //STRING .Alt som står i herme tekst regnes som tekst
var mittTall3 = 3;  //INTEGER Heltall
var mittTall4 = 3.1415926; //NUMBER Desimaltall
var minListe = ["en","to","tre"]; // ARRAY Liste

var sum;  //Deklarerer variabelen sum

sum = mittTall1 + mittTall3; 
console.log("Dette er summen av mittTall1 og mittTall3 = " + sum);

window.onload = oppstart;  //når vinduet er lastet så skal funkjsonen oppstart kjøre.
//en funkjson sier noe tilbake. er en blokk som gjør noe tilbake 

var tall; //nå er tall en global variabel

function oppstart (){
    document.getElementById("knapp").onclick = skrivUt; //dette er en lytter som lytter på en knapp
    //Når vi trykker på knappen så kjøres funksjonen skrivUt
}

function skrivUt(){
    console.log("Funksjonen skrivUt fungerer");
    //document.getElementById("variabel").innerHTML = "Du trykket på knappen";
tall = document.getElementById("tallInput").value;
    var sum = tall * tall; //dette er lokal variable
    console.log("Verdien til tall er :" + sum);
    document.getElementById("verdi").innerHTML = "Antall kroner" + sum;
}