window.onload = oppstart;

var antLiter;

function oppstart(){
    document.getElementById("bensinKnapp").onclick=bensin;
    document.getElementById("dieselKnapp").onclick=diesel;
    document.getElementById("resetKnapp").onclick=reset;
}


function bensin(){
    antLiter = document.getElementById("liter").value;
    var sum1 = antLiter * 13.4;
    document.getElementById("tilbakemelding").innerHTML="Prisen for ditt kjøp er: " +sum1;
    if(antLiter>80){
        document.getElementById("tilbakemelding").innerHTML="Du tastet for mye"
   
    }
}

function diesel(){
    antLiter = document.getElementById("liter").value;
    var sum2 = antLiter * 12.9;
    document.getElementById("tilbakemelding").innerHTML="Prisen for ditt kjøp er: " +sum2;
    if(antLiter>80){
        document.getElementById("tilbakemelding").innerHTML="Du tastet for mye"
   
    }
}

function reset(){
    document.getElementById("liter").value ="";
}  //Fra denne lenken:http://jsfiddle.net/JTXN7/10/


