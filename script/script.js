$(".btn").click(function(){
	$(".menu-burger").toggle();
})

$(function(){
    $('a[href^="#"]').click(function(){
       let target = $(this).attr('href');
       $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
       return false;
    });
 });

$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 1000);
return false;
});
 
});




