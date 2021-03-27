function zmiana() {
    let paragraf = document.getElementById("dz");
    if(Number(document.getElementById("proc").value)) {
        var p = Number(document.getElementById("proc").value);
        paragraf.style.fontSize = p+"%";
    }
    if(document.getElementById("p").selected){
        paragraf.style.fontStyle = "normal";
    }
    if(document.getElementById("i").selected){
        paragraf.style.fontStyle = "italic";
    }
    if(document.getElementById("red").click){
        paragraf.style.color = "red";
    }
}
function zmiana2() {
    let paragraf = document.getElementById("dz");
    if(Number(document.getElementById("proc").value)) {
        var p = Number(document.getElementById("proc").value);
        paragraf.style.fontSize = p+"%";
    }
    if(document.getElementById("p").selected){
        paragraf.style.fontStyle = "normal";
    }
    if(document.getElementById("i").selected){
        paragraf.style.fontStyle = "italic";
    }
    if(document.getElementById("green").click){
        paragraf.style.color = "green";
    }
}
function zmiana3() {
    let paragraf = document.getElementById("dz");
    if(Number(document.getElementById("proc").value)) {
        var p = Number(document.getElementById("proc").value);
        paragraf.style.fontSize = p+"%";
    }
    if(document.getElementById("p").selected){
    }
        paragraf.style.fontStyle = "normal";
    if(document.getElementById("i").selected){
        paragraf.style.fontStyle = "italic";
    }
    if(document.getElementById("blue").click){
        paragraf.style.color = "blue";
    }
}