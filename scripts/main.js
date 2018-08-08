 function test(){
     document.getElementById("typeString").innerHTML = "Clicked!";
 }

 $( document ).ready(function() {
    alert("Hi");
    console.log("Hello");
});

var instance = new TypeIt('#typeString', {
    strings: ["mobile developer.", "game developer.", "web developer.", "web designer.",],
    //-- Other options...
    breakLines: false,
    loop: true,
    lifeLike: true,
    nextStringDelay: 5000,
});