window.onload = oppstart;

function oppstart(){
    document.getElementById("Fargeskift").onclick = Fargeskift;
}

function Fargeskift(){
    document.getElementById("sirkel").classList.toggle("blue");
}