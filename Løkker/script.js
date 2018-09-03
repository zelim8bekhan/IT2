
function br(n){
    for (var i = 0; i < n; i++){
        document.writeln("<br>")
    }
}

document.writeln("For løkker");
br(1)


for(var u = 0;u<10;u++){
for(var i = 0; i<10; i++){
    document.writeln("*");
}document.writeln("<br>");

}

for (var j = 5; j > 0; j--){

    for (var i = j; i > 0; i--){
        document.writeln("-");
    }
    document.writeln("<br>");
}






br(3)




document.write("Alle tall fra 0 til 100");
document.write("<br>");

for (var i=0;i<101;i++){
    document.writeln(i);
}