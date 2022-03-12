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

});
// validate contact form
function validateContactForm(){
    let isFormValid = true;
    const formInputs = contactForm.find("input,textarea")
     
    formInputs.each(functio(){
        if ($(this).value()){
            $(this).addClass(is-invalid);
            isFormValid = false;
        }
    }
    return isFormValid;
});

function removeFormErrors(){
    contactForm.find("input,textarea").on("keydown", function(){
        if ($(this).hasClass("is-invalid")){
            $(this).removeClass("is-invalid");
        }
    });
}
function clearForm(){
    contactForm.find("input,textarea").each(function){
        $(this).value("");
    }
}
