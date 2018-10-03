
// if påstand
// sammenligne tall.
 var talla=15;
 var tallb=16;
    if (talla == tallb){
      document.writeln("Begge er like");
    }
    else if(talla>tallb){
      document.writeln("a er større enn b");
    }
    else{
      document.writeln("b er større enn a");
	}

// For løkker
document.writeln("<br>Alle tall fra 0 til 100");
document.writeln("<br>");

var i;
for (i = 0; i<10; i++)
{document.writeln(i);
}

document.writeln("<br> Dette er  5 stjerner");
document.writeln("<br>");
var s;
	for(s = 0; s<10; s++)
		{document.writeln("*");}


document.writeln("<br> Firkant");
document.writeln("<br>");
var k;
var j;
for (var k = 0; k<4; k++)
	{for (j = 0; j<5; j++)
		{document.writeln("*");}
	document.writeln("<br>");
}


document.writeln("<br>Pyramide");
document.writeln("<br>");

//var x;
//var y;
for (k = 0; k<10; k++)
	{
      for (j = 0; j<=k; j++)
		    {
          document.writeln("*");
        }
	  document.writeln("<br>");
	}
document.writeln("<br> Bokstaven E");
document.writeln("<br>");

var antall;
for (k = 1; k<6; k++)
	{if(k == 2 || k == 4){antall=1;}
	else if(k == 3){antall=2;}
	else{antall=4;}
		for (j = 1; j<=antall; j++)
		{document.writeln("*");}
	document.writeln("<br>");
	}

var a;
var b;
document.writeln("<br>Opp ned Pyramide");
document.writeln("<br>");
for (a = 10; a>0; a--)
	{for (b = 0; b<=a; b++)
		{document.writeln("*");}
	document.writeln("<br>");
	}


document.writeln("<br>Alle tall fra 0 til 100<br>");
var i;
for (i = 0; i<=100; i++)
{document.writeln(i);}

document.writeln("<br>Alle partall<br>");
var i;
for (i = 0; i<100; i++)
	{if(i%2==0)
	{document.writeln(i);}
	}


document.writeln("<br>Alle oddetall<br>");
var i;
for (i = 0; i<100; i++)
	{if(i%2|0)
	{document.writeln(i);}
	}

document.writeln("<br>Alle tall delelig med 5<br>");
var i;
for (i = 0; i<101; i++)
	{if(i%5==0)
	{document.writeln(i);}
	}
