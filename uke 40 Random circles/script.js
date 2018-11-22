var c = document.getElementById("myCanvas");
/**@type {CanvasRenderingContext2D} */
var ctx = c.getContext("2d"); 


Math.floor((Math.random() * 1000) + 1);

ctx.strokeStyle = 'rgb(200, 22, 82)'     //rød,grønn og blå to siffer hver
ctx.beginPath();
ctx.arc(150, 110, 100, 0, 2 * Math.PI);
ctx.stroke();
