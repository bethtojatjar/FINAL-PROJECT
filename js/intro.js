//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

    $("#door-closed1").hide();
    $("#door-closed2").hide();
    $("#door-closed3").hide();
    $("h2").hide();
    $("h3").hide();
    $("h4").hide();
    $("h5").hide();
    $("#snake-pic").hide();
    

    $("#real-1").click(function(){
        $("#real-1").hide();
        $("#real-1-cover").hide();
        $("#door-closed1").show();
        $("h2").show();
    });

    $("#real-2").click(function(){
        $("#real-2").hide();
        $("#real-2-cover").hide();
        $("#door-closed2").show();
        $("h3").show();
    });

    $("#real-3").click(function(){
        $("#real-3").hide();
        $("#real-3-cover").hide();
        $("#door-closed3").show();
        $("h4").show();
    });

    $("#ai-room").click(function(){
        $("#real-1").hide();
        $("#real-2").hide();
        $("#real-3").hide();
        $("#ai-room").hide();
        $("#table").hide();
        $("#real-1-cover").hide();
        $("#real-2-cover").hide();
        $("#real-3-cover").hide();
        $("#ai-cover").hide();
        $("#door-closed1").hide();
        $("#door-closed2").hide();
        $("#door-closed3").hide();
        $("#letter-left").hide();
        $("#letter-right").hide();
        $("h1").hide();
        $("h2").hide();
        $("h3").hide();
        $("h4").hide();
        $("h5").show();
        $("#snake-pic").show();

        $("#snake-pic").addClass("animate-img");

        setTimeout(function(){
            $("#snake-pic").removeClass("animate-img");
        },20000000);
        
    });

    $("#table").click(function(){
        $("#real-1").show();
        $("#real-2").show();
        $("#real-3").show();
        $("#real-1-cover").show();
        $("#real-2-cover").show();
        $("#real-3-cover").show();
        $("#door-closed1").hide();
        $("#door-closed2").hide();
        $("#door-closed3").hide();
        $("h2").hide();
        $("h3").hide();
        $("h4").hide();
    });








})