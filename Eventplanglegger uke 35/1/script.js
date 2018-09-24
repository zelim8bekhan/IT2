window.onload = oppstart;


function oppstart (){
    document.getElementById("knapp1").onclick = Tekst;
}

function Tekst(){
   
    document.getElementById("verdi").innerHTML = "Denne teksten skal komme opp"
    console.log("Denne teksten skal komme opp");
}
