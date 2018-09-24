window.onload = oppstart;

function oppstart(){
    document.getElementById("knapp1").onclick = Bilde;
}

function Bilde(){
    document.getElementById("bilde").innerHTML = "<img src='deserteagle1.jpg' width=300>"

}