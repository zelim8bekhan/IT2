window.onload = oppstart;


var svarAlt = [];
svarAlt [0] = ["50km/t", "60km/t", "80km/t"]; //80km
svarAlt [1] = ["Refleks", "Penger", "Lader",]; //Refleks 
svarAlt [2] = ["1mm", "1.6mm", "2mm"]; //1.6mm

var sporsmaal = ["Hva blir fartsgrensen når du passerer disse skiltene?<br>img src='80km.jpeg'</img>", "Hva må du alltid ha med i bilen?<br>img src='Refleks.jpeg'</img>", "Hva er minimumskravet til mønsterdybde for sommerdekk?<br> img src ='dekk.jpeg'</img>"];

var fasit=[0,1,0];
var spNr = 0;  //Spørsmåls nummer
var antPoeng = 0;

function oppstart(){
    document.getElementById("spill").style.visibility = 'hidden';
    document.getElementById("nesteKnapp").onclick = nesteSporsmaal;
    document.getElementById("radioId").onclick = radioId;

}

function nesteSporsmaal(){
    console.log("Spørsmålsnr:" + spNr + "sporsmaal.length" + sporsmaal.length);
    if (spNr == sporsmaal.length){
        document.writeln("Det finnes ingen flere spørsmål. Du fikk :" + antPoeng + "poeng");
    }
}

//document.getElementById("sporsmaalDiv").innerHTML = Hei;
// document.getElementById("svarAlt0").innerHTML = svarAlt [svarAlt][0];
// document.getElementById("svarAlt1").innerHTML = svarAlt [svarAlt][1];
// document.getElementById("svarAlt2").innerHTML = svarAlt [svarAlt][2];
// document.getElementById("radioId0").checked = false;
// document.getElementById("radioId1").checked = false;
// document.getElementById("radioId2").checked = false;
// svarAlt.innerHTML = "";
// spNr++;

function radioId(){
    console.log("Funksjonen radioId fungerer");
}


