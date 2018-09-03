Window.onload = oppstart;

function oppstart (){
    //document.getElementById("knapp1").onclick = click;
}

var click = 0;


function clickEn(){
console.log("Funksjonen fungerer");
//document.getElementById("knapp1").innerHTML = knapp1;
knapp1 = knapp1+1;
}


function click(a){
    console.log("her")
    console.log(a.dataset.number)
}