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
//     $(".overlay").hover(function(){
//         $(this).animate({opacity:'1'});
//     },
//     function(){
//         $(this).animate({opacity:'0'})
//     })
// });
    $("#work1 img").mouseover(function(){
        $("#work1 img").hide();
        $("#overlay1").show();
    });
    $("#work1 img").mouseout(function(){
        $("#work1 img").show();
        $("#overlay1").hide();
    });
    
    
 


// validate contact form
function validate() {
    
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        if (name == "" || email  == ""|| message  ==""){
          alert("Please enter your name, email and message!");
           return false;
    
        }
        else{
          alert (name + ",hello,thank you for contacting us. We will get back to you as soon as possible.");
              }
        };


