 window.onload=oppstart;
 
 var tall = [];
 var bingoTall;
 
 function oppstart(){
     document.getElementById("tallKnapp").onclick = Trykk;
     document.getElementById("resetKnapp").onclick = Reset;
    }
    
function Reset(){
         tall = [];
        document.getElementById("minDiv").innerHTML = tall;
        document.getElementById("minDiv2").innerHTML = "Tallene er tilbakstilt BIATCH!";
    }

function Trykk(){
     bingoTall = Math.floor(Math.random() * 75)  +1;

         while (tall.includes(bingoTall)){
             bingoTall = Math.floor(Math.random() * 75)  +1;

         }
         tall.push(bingoTall);
         tall.sort(function(a, b){return a - b});
         console.log(bingoTall);
         document.getElementById("tallKnapp").innerHTML = bingoTall;
         skrivUTBingoTall();
 }

 function skrivUTBingoTall(){
     var alleTalla = " ";
     for (var i = 0; i < tall.length; i++){
         console.log(tall[i]);
         alleTalla = alleTalla + " " + tall[i];
        }
        console.log(alleTalla);
        document.getElementById("minDiv2").innerHTML = alleTalla;
    }
    
    //Applikasjonen må fungere noe slik som dette her: 
    //Når du trykker på en knapp skal du få opp et tilfeldig tall mellom 1 og 75.
    // Dette tallet skal vises som et stort og fargerikt tall midt på siden. 
    //Når du trykker på knappen igjen skal det første tallet vises i en tallrekke nederst på siden og et nytt tall kommer frem stort og fargerikt midt på siden. 
//Det samme tallet kan ikke forekomme to ganger i en bingorekke. Tallrekken nederst på siden skal være sorterte. Når noen roper bingo er spillet slutt. 
//Da er det viktig at du har mulighet til å resette spillet for å starte på ny trekning


// javascript

// let tallvisning = document.querySelector("#resultat");
// let knapp = document.querySelector("#lagTall");

// knapp.addEventListener("click", bingo);

// function bingo() {
//     tallvisning.innerHTML = Math.round(Math.random() * 75);
// }