

window.onload = oppstart;

var tall = [];
var bingoTall;

function oppstart(){
document.getElementById("nyttTall").onclick = lagTall;
document.getElementById("nullstill").onclick = tilbakestill;
}

function tilbakestill(){
    tall = [];
    document.getElementById("sisteTall").innerHTML = tall;
    document.getElementById("tallRekke").innerHTML = "Alle talla er naa tilbakestilt";
}

function skrivUTBingoTall() {
        var alleTalla = " ";
        for (var i = 0; i < tall.length; i++) {
            console.log(tall[i]);
            alleTalla = alleTalla + " " + tall[i];
        }
        console.log(alleTalla);
        document.getElementById("tallRekke").innerHTML = alleTalla;
}
   
function lagTall(){
    bingoTall = Math.floor((Math.random() * 75) + 1);
    
    while(tall.includes(bingoTall)){
        bingoTall = Math.floor((Math.random() * 75) + 1);
    }
    tall.push(bingoTall);
    tall.sort(function (a, b) { return a - b });
    console.log(bingoTall);
    document.getElementById("sisteTall").innerHTML = bingoTall;
    skrivUTBingoTall();
}

