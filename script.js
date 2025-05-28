var typed = new Typed(".text", {
    strings: ["Frontend Developer","Python Developer","Data Analyst", "FullStack Developer", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 50,
    loop: true
});


var typed = new Typed(".type-2", {
    strings: ["Frontend Developer","Python Developer","Data Analyst", "FullStack Developer", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 50,
    loop: true
});








$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");


        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });




    //toggle menu/navscript
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");


    });
});







var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}








// EMAILJS
const contactForm = document.getElementById("contact-form"),
contactMessage = document.getElementById("contact-message")

const sendEmail = (e) =>{
    e.preventDefault()
    //serviceID - templateID - #form -publickey
    emailjs.sendForm("service_85h3gad","template_zflofvw", "#contact-form", "T9WNkvISKGEJ4AmZF")
        .then(() =>{
            //Show sent message
            contactMessage.textContent = "Message sent Successfully ✅" 

            //remove message after five seconds
            setTimeout(() =>{
                contactMessage.textContent =""
            }, 5000)

            //clear input fields
            contactForm.reset()
        }, () =>{
            //Show error message
            contactMessage.textContent = "Message not sent (service error) ❌"



        })
}


contactForm.addEventListener("submit",  sendEmail)