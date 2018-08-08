 function test(){
     document.getElementById("typeString").innerHTML = "Clicked!";
 }

var instance = new TypeIt('#typeString', {
    strings: ["mobile developer.", "game developer.", "web developer.", "web designer.",],
    //-- Other options...
    breakLines: false,
    loop: true,
    lifeLike: true,
    nextStringDelay: 5000,
});