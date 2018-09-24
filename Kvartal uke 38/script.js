window.onload = oppstart;

var antNum;


function oppstart(){
    document.getElementById("numFelt").onclick = numFelt;
    document.getElementById("Kvartal").onclick = Kvartal;
    document.getElementById("Reset").onclick = Reset;
}

function Kvartal(){   //måned nr 1,2 eller 3 skal programmet svaret 1 kvartal
    antNum = document.getElementById("numFelt").value;
    if(antNum > 0 && antNum < 4){
        document.getElementById("kvartal").innerHTML="Denne måneden er i første kvartal";
        
    }
    else if(antNum > 4 && antNum < 7){  //måned nr 4,5 eller 6 skal programmet svaret 2 kvartal.
        document.getElementById("kvartal").innerHTML="Denne måneden er i andre kvartal";
    }
    else if (antNum > 7 && antNum <10){   //måned nr 7,8 eller 9 skal programmet svare 3 kvartal.
        document.getElementById("kvartal").innerHTML="Denne måneden er i tredje kvartal";
    }  
    else if (antNum > 10 && antNum <13){   //måned nr 10,11 eller 12 skal programmet svare 3 kvartal.
        document.getElementById("kvartal").innerHTML="Denne måneden er i fjerde kvartal";
    } 
    else if(antNum>12){
        document.getElementById("kvartal").innerHTML="Du tastet over 12"
    }
}

function Reset(){
    document.getElementById("numFelt").value ="";
}