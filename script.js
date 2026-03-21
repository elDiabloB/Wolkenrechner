

var unit;
var temp;
var taup;
var elev;
var cloudHight;
var fielDiff;

document.getElementById("einheit").addEventListener("change",onClickLst())

function getValues(){
    temp = parseInt(document.getElementById("temp").value);
    taup = parseInt(document.getElementById("taup").value);
    elev = parseInt(document.getElementById("elev").value);
}

function onClickBtn(){
    getValues();
    berechneHoehe();
    berchneDifferenz();
}

function onClickLst(){
    unit = document.getElementById("einheit").value;
    if(unit == "ft"){
        document.getElementById("aktEinh").innerText = "ft";
    }else{document.getElementById("aktEinh").innerText = "m";}
}

function berechneHoehe(){
    var spread = temp - taup;
    console.log(spread);
    if(unit == "ft"){
        cloudHight = (spread * 400) + elev;
    }else{cloudHight = (spread * 122) + elev}

    document.getElementById("cloud").innerText = cloudHight+" "+unit
}

function berchneDifferenz(){
    fielDiff = cloudHight - elev;
    document.getElementById("field").innerText = fielDiff +" " + unit;
}

//document.getElementById("einheit").addEventListener("change",onClickLst())