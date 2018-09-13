window.onload = oppstart;

var tall;

function oppstart(){
    document.getElementById("knapp1").onclick = DinBMI;
}

function vekt(){
    tall = document.getElementById("vektId").value
    var sum1 = 35.27 + (0.558 * "vektId");
    console.log("Din BMI er :" + sum1);
}