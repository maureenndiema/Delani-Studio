// $(".visible").click(function(){
//     $(".visible").hide()
//     $(".hidden").toggle()
//     $("hidden").show()
//     $()
// });
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