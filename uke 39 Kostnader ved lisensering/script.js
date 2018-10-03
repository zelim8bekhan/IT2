window.onload = oppstart;

var antNum

function oppstart (){
    document.getElementById("knapp1").onclick = Discount;
}

function Discount(){
   antNum = document.getElementById("antPak").value;
   var sum1 = 99 * antNum;
    if(antNum > 10 && antNum < 19){
     sum1 / 1.1;
   }
   document.getElementById("rabatt").innerHTML = "Prisen er" + sum1;


  
    
}