window.onload = oppstart;

var tall;

function oppstart (){
    document.getElementById("knapp1").onclick = Generell; //lytter når en trykker på knappen så kjøres funksjonen Generell
    document.getElementById("knapp2").onclick = Næringsmidler; //lytter
    document.getElementById("knapp3").onclick = Persontransport; //lytter
}

function Generell(){
    tall = document.getElementById("forTall").value;
    var sum1 = tall * 1.25;
    console.log("Verdien til tall er : " + sum1);
    document.getElementById("verdi").innerHTML = "Pris med mva på generelle varer er:" + sum1 + "NOK <br><img src = 'logo.png'></img>"
}


function Næringsmidler (){
    tall = document.getElementById("forTall").value;
    var sum2 = tall * 1.15;
    console.log("Verdien til tall er : " + sum2);
    document.getElementById("verdi").innerHTML = "Pris med mva på næringsmidler er:" + sum2 + "NOK";
}

function Persontransport (){
    tall = document.getElementById("forTall").value
    var sum3 = tall * 1.08;
    console.log("Verdien til tall er : " + sum3)
}
