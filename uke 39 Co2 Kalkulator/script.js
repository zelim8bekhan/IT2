window.onload = oppstart;

//Lag en utslippskalkulator for en bensindrevet bil. 
//Vi kan ta utgangspunkt i at en bil slipper ut ca i snitt 150 gram Co2 pr km. 
//Brukeren skal skrive inn hvor lang turen er, og hvor mange passasjerer det er i bilen.

function oppstart(){
    document.getElementById("km").onclick= km;
    document.getElementById("antPers").onclick=antPers;
    document.getElementById("beregnKnapp").onclick=beregnKnapp;
}

var antKm;
var antPers;
var utslipp;

function beregnKnapp(){
    antKm = document.getElementById("km").value
    antPers = document.getElementById("antPers").value
    var sum1 = antKm * 150; 
      utslipp = sum1 / antPers;
      document.getElementById("beregnet").innerHTML ="For denne turen er Co2 utslippet:" + sum1 + "gram." + "For per pers vil dette være:" +  utslipp;  
        
}