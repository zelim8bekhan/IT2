var c = document.getElementById("myCanvas");
/**@type {CanvasRenderingContext2D} */
var ctx = c.getContext("2d");

//bunnen
ctx.fillStyle="	#0000FF";
ctx.fillRect(200,600,550,25);

//selve tårnet
ctx.fillStyle="	#8B008B";
ctx.fillRect(450,50,25,550);

//rundingen for proppelene
ctx.beginPath();
ctx.arc(463, 53, 40, 0, 2 * Math.PI);
ctx.stroke();