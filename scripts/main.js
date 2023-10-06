var isDarkMode = false;

function resizeParticles() {
    $("#particles").height($("#main-banner").height());
}

particlesJS.load('particles', './scripts/particles.json', function() {
    console.log('callback - particles.js config loaded');
    resizeParticles();
  });

window.onresize = function(event) {
    resizeParticles();
};

screen.orientation.onchange = function(event) {
    resizeParticles();
};

function toggleDarkMode(){
    isDarkMode = !isDarkMode;
    console.log("Dark mode toggled to " + isDarkMode);
    if (isDarkMode){
        $("#darkmode-icon").html("<i class='fas fa-moon'></i>");
        $("body").css("background-color","#000000");
        $("section").find("p, h1, h2, h3, h4, h5, .btn").css("color", "white");
        $("section").find(".card").css("background-color","#000000");
        $("section").find(".darken").css("background-color","#000000");
        $("section").find(".card").addClass("border-light");
        $("section").find(".btn").css("border-color","white");
        $("section").find("p a").css("color","#77D2FF");
        $(".separator, #particles").css("background-color","#22222A");
        $(".footer").css("background-color","#22222A");
        var svg = document.getElementById('svgTimeline');
        var elems = svg.contentDocument.querySelectorAll('*[id^="selectable"]');
        elems.forEach(element => element.setAttribute('fill','#ffffff'));

    }
    else {
        $("#darkmode-icon").html("<i class='far fa-moon'></i>");
        $("body").css("background-color","");
        $("section").find("p, h1, h2, h3, h4, h5, .btn").css("color", "");
        $("section").find(".card").css("background-color","");
        $("section").find(".darken").css("background-color","");
        $("section").find(".card").removeClass("border-light");
        $("section").find(".btn").css("border-color","");
        $("section").find("p a").css("color","");
        $(".separator, #particles").css("background-color","");
        $("#ucalgary, #uwaterloo").css('fill','#000000');
        $(".footer").css("background-color","");
        var svg = document.getElementById('svgTimeline');
        var elems = svg.contentDocument.querySelectorAll('*[id^="selectable"]');
        elems.forEach(element => element.setAttribute('fill','#000000'));
    }
    

}

$( document ).ready(function(){
    $('#darkmode-icon').click(function(){
        toggleDarkMode();
    })

    $("body, p, h1, h2, h3, h4, h5, a, .btn, .separator, .darken, section, #particles").addClass("animated-transition");
    resizeParticles();
})