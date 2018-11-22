 window.onload=oppstart;

    function oppstart

var sum;
    var minTall = ['12','23','34','45','56','67','78','-23'];

    //var minimum = Math.min.apply(null,minTall);


    console.log(minTall);

    function antallNegative(){
        var teller = 0;
        for (let index = 0; index < minTall.length; index++) {
            if (tall[index]<0){teller++}

        }
            document.getElementById(minDiv).innerHTML = "Antall negative tall i lista er:" + sum;
    }

    function minsteTall(){

        minTall.sort();
        for (let index = 0; index < minTall.length; index++) {
            console.log(tall[index]);
        }
        document.getElementById(minDiv).innerHTML = "Minste tallet er :" + mninTall.sort[0];

    }

    function summenavPartall(){
        var sumPartall = 0;

        for (let index = 0; index < minTall.length; index++) {

            if (minTall[index]%2==0){sumPartall+tall[index]
                console.log(tall[index]);
            }

        }

    }
