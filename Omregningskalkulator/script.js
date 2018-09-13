
var num0btn = document.getElementById("knapp0")
var num1btn = document.getElementById("knapp1")
var tekstfelt = document.getElementById("tekstFelt")




function tekstFunk(e) {
    tekstfelt.value = e.dataset.num
}

function numnull() {
    tekstfelt.value = 0
}