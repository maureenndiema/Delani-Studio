// $(".visible").click(function(){
//     $(".visible").hide()
//     $(".hidden").toggle()
//     $("hidden").show()
//     $()
// });
$(document).ready(function(){
var contactForm= $("contactform")
$(function(){
    contactForm.on("submit", function(){
        e.preventDefault()
        let formValid = validContactForm();
        if (formValid){
            const name = ("input.name").value()
            alert("Thank you ${name}, your message has been received");
            clearForm();
        }
    }
});
$("#design").click(function(){
    $(".design-hidden").toggle();
    $(".design-showing").toggle();
});

$("#development").click(function(){
    $(".development-hidden").toggle();
    $(".development-showing").toggle();
});

$("#product-management").click(function(){
    $(".product-management-hidden").toggle();
    $(".product-management-showing").toggle();

}):