
$("#button").click(function(){
    $("#Aurora").fadeToggle();
    $("#Aurora2").show();
    $("#button").html("<p>Scroll Down</p>");
});

$("#button2").dblclick(function() {
    $("body").css("background-color","#9b6bdb");
});

$("h2").click(function() {
    $(".hola").hide();
});

$("show").click(function() {
    $("bella").show();
});