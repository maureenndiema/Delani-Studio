$(document).ready(function () {
    $("#design").click(function () {
        $(".design-hidden").fadeToggle();
        $(".design-showing").fadeToggle();
    });

    $("#development").click(function () {
        $(".development-hidden").fadeToggle();
        $(".development-showing").fadeToggle();
    });

    $("#product").click(function () {
        $(".product-hidden").fadeToggle();
        $(".product-showing").fadeToggle();
    });
});

$(document).ready(function(){
    $("#work1").mouseover(function(){
        $("#overlay1").show();
    }).mouseout(function(){
        $("#overlay1").hide();
    });
    $("#work2").mouseover(function(){
        $("#overlay2").show();
    }).mouseout(function(){
        $("#overlay2").hide();
    });
    $("#work3").mouseover(function(){
        $("#overlay3").show();
    }).mouseout(function(){
        $("#overlay3").hide();
    });
    $("#work4").mouseover(function(){
        $("#overlay4").show();
    }).mouseout(function(){
        $("#overlay4").hide();
    });
    $("#work5").mouseover(function(){
        $("#overlay5").show();
    }).mouseout(function(){
        $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
        $("#overlay6").show();
    }).mouseout(function(){
        $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
        $("#overlay7").show();
    }).mouseout(function(){
        $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
        $("#overlay8").show();
    }).mouseout(function(){
        $("#overlay8").hide();
    });
})

function validate() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email == "" || message == "") {
        alert("Please enter your name, email and message!");
        return false;

    } else {
        alert(name + ",hello,thank you for contacting us. We will get back to you as soon as possible.");
    }
};