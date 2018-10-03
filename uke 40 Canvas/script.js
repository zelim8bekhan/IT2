var c = document.getElementById("myCanvas");
/**@type {CanvasRenderingContext2D} */
var ctx = c.getContext("2d");

//selve huset og vinduene
ctx.fillStyle="	#0000FF";
ctx.fillRect(50,100,250,200);
//vinduene venstre
ctx.fillStyle="#B3B6B7";
ctx.fillRect(75,150,25,20);
ctx.fillRect(75,125,25,20);
ctx.fillRect(105,125,25,20);
ctx.fillRect(105,150,25,20);

//vinnduer høyre
ctx.fillStyle="#B3B6B7";
ctx.fillRect(250,150,25,20);
ctx.fillRect(250,125,25,20);
ctx.fillRect(220,125,25,20);
ctx.fillRect(220,150,25,20);

//Første streken for taket på høyre siden
ctx.beginPath()
ctx.lineWidth="5"
ctx.strokeStyle="#17202A";
ctx.moveTo(300,100);
ctx.lineTo(170,20);

//for venstre siden
ctx.fillStyle="#17202A";
ctx.lineTo(50,100);
ctx.closePath();
ctx.fill();
ctx.stroke(); //Betyr at den skal tegne



