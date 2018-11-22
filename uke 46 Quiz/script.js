// a) Lag et spørrespill hvor brukeren skal svare på et spørsmål ved å trykke på en av tre knapper. 
// Hvis svaret er riktig skal det dukke opp et felt hvor det står Riktig!
// Hvis svaret er feil skal det dukke opp et felt hvor det står Feil! 
// Begynn med å lage spillet med bare ett spørsmål.



window.onload = oppstart;


var svarAlt = [];
svarAlt[0] = ["Oslo", "Trondheim", "Drammen"];
svarAlt[1] = ["Oslo", "Moskva", "Grozny"];
svarAlt[2] = ["Stockholm", "Trondheim", "Drammen"];


var toppScore = [];
toppScore[0]={navn:"Staale",poeng:10};
toppScore[1]={navn:"Per",poeng:8};
toppScore[2]={navn:"Pål",poeng:9};


var sporsmaal = ["Hva er hovedstaden i Norge?", "Hva er hovedtaden i Russland?", "Hva er hovedstaden i Sverige?"];
var fasit = [0,1,0];
var spillerNavn = "";
var spNr = 0;
var antPoeng = 0;

function oppstart(){
    document.getElementById("spill").style.visibility = 'hidden';
    document.getElementById("startSpill").style.visibility = 'hidden';
    document.getElementById("registrerspillerId").style.visibility = 'visible';
    document.getElementById("nesteKnapp").onclick = nesteSporsmal;
    document.getElementById("radioId").onclick = sjekksvar;
    document.getElementById("registrerSpillerKnapp").onclick = registrerSpiller;
}

function registrerSpiller(){
    console.log("funksjonen registrerSpiller fungerer");
    spillerNavn = document.getElementById("navnId").value;
    console.log(spillerNavn);
    document.getElementById("spill").style.visibility = 'visible';
    document.getElementById("registrerspillerId").style.visibility = 'hidden';
    nesteSporsmal();
}

function nesteSporsmal(){
    //console.log("funksjonen nesteSporsmal fungere");
    console.log("Spørsmålsnr:"+spNr+"sporsmaal.length"+sporsmaal.length+" SpillerNavn:" + spillerNavn);
    if(spNr==sporsmaal.length){
      document.writeln("Hei " + spillerNavn +"!<br>");
      document.writeln("Det finnes ingen flere spørsmål. Du fikk :"+antPoeng+" poeng.");

      toppScore.push({navn:spillerNavn,poeng:antPoeng});

      toppScore.sort(function(b,a) {
        return a.poeng + b.poeng;
      });

      document.writeln("<br><br> Toppscore:<br>");
      for(var i = 0; i<=toppScore.length;i++){
        document.writeln(toppScore[i].navn + "  " + toppScore[i].poeng + "<br>");
      }

    }
    document.getElementById('sporsmaalsDiv').innerHTML = "Hei " + spillerNavn + "<br>" + sporsmaal[spNr];
    document.getElementById('svarAlt0').innerHTML = svarAlt[spNr][0];
    document.getElementById('svarAlt1').innerHTML = svarAlt[spNr][1];
    document.getElementById('svarAlt2').innerHTML = svarAlt[spNr][2];
    document.getElementById("radioId0").checked = false;
    document.getElementById("radioId1").checked = false;
    document.getElementById("radioId2").checked = false;
    svar.innerHTML = "";
    spNr++;
}


function sjekksvar(){
  console.log("Funksjonen sjekksvar fungerer");
    var radValg = document.radioId.radioKnapp.value;
    console.log("radValg:"+radValg+"fasit:"+fasit[spNr-1]);
    if(radValg==fasit[spNr-1]){
        svar.innerHTML="Riktig!";
        antPoeng++;
      }
    else {
        svar.innerHTML="feil!";
        antPoeng--;
      }
      poeng.innerHTML="Du har fått: "+antPoeng+"poeng";
}



// var tilDiv = ""
// for (var i = 0; i < sporsmaal.length; i++){
//     console.log (sporsmaal[i]);
//     tilDiv = tilDiv + sporsmaal[i] + "<br>";
// }   
// document.getElementById("sporsmaalsDiv").innerHTML = tilDiv;


//for (var i = 0; i < sporsmaal.lengt; i++) {
    //console.log(spørsmaal[i]);
    
    //}
    
    // function oppstart(){
    //     document.getElementById("nesteKnapp").onclick = nesteSporsmaal;
        
    // }
        