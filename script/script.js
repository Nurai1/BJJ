$(document).ready(function(){

	   $('.main-menu').delay(500).animate({
	   opacity:1
	   },2000);

		 $('.news').css('left','-150%');
	   $('.news').delay(500).animate({
	   left:0
	   },1500);

$(window).scroll(function(){

	   if ($(this).width()>1010){

	   if(($(this).scrollTop()>400)){
	   $(".calendar__title").animate({
	   opacity:1
	   },2000);
	   $(".calendar__photo").animate({
	   left:0
	   },1500);
	   }

	   if($(this).scrollTop()>550){
	   $(".animate__link").animate({
	   left:0
	   },1500);
	   }

	   if($(this).scrollTop()>750){
	   $(".documents__title").animate({
	   opacity:1
	   },2000);
	   }

	   if($(this).scrollTop()>1090){
	   $(".documents__link").animate({
	   left:0
	   },1500);
	   }

	   if($(this).scrollTop()>1200){
	   $(".belts, .certification").each(function() {
	   $(this).animate({
	   opacity:1
	   },2000);
	   });
	   }

    }
	else if (($(this).width()<1010) && ($(this).width()>680)){

	   if(($(this).scrollTop()>220)){
	   $(".calendar__title").animate({
	   opacity:1
	   },2000);
	   $(".calendar__photo").animate({
	   right:0
	   },1500);
	   }

	   if($(this).scrollTop()>310){
	   $(".animate__link").animate({
	   left:0
	   },1500);
	   }

	   if($(this).scrollTop()>570){
	   $(".documents__title").animate({
	   opacity:1
	   },2000);
	   }

	   if($(this).scrollTop()>890){
	   $(".documents__link").animate({
	   left:0
	   },1500);
	   }

	   if($(this).scrollTop()>1190){
	   $(".belts, .certification").each(function() {
	   $(this).animate({
	   opacity:1
	   },2000);
	   });
	   }

	}
    else if (($(this).width()<680) && ($(this).width()>=180)){

	   if(($(this).scrollTop()>120)){
	   $(".calendar__title").animate({
	   opacity:1
	   },2000);
	   $(".calendar__photo").animate({
	   right:0
	   },1500);
	   }

	   if($(this).scrollTop()>190){
	   $(".animate__link").animate({
	   left:0
	   },1500);
	   }

	   if($(this).scrollTop()>380){
	   $(".documents__title").animate({
	   opacity:1
	   },2000);
	   }

	   if($(this).scrollTop()>680){
	   $(".documents__link").animate({
	   left:0
	   },1500);
	   }

	   if($(this).scrollTop()>820){
	   $(".belts, .certification").each(function() {
	   $(this).animate({
	   opacity:1
	   },2000);
	   });
	   }

	}
});

	   $("form").submit(function(){
	          $.ajax({
	              type:"POST",
	               url:'php_mailer/examples/contact.php',
	               data:$('form').serialize(),
	               success: function (data) {
	                      // Вывод текста результата отправки в текущей форме
	                      alert('Ваш запрос отправлен, проверьте почту в течение суток.');
	                  }
	          })
	      return false;
	   });

	   $(".hamburger-icon").click(function(){
	   $(".hamburger__menu").slideToggle();
	   })

	   $(".news__show-anchor").click(function(){
  	   $(".news__text").css('height','auto');
  	   $(".news__text").css('overflow','visible');
  	   $(".news__show-anchor").css('display','none');
	   })

     $('.belts__table').hide();
     $('.belts_blue').on('click', function(){
       $('.table_blue').slideToggle();
     });
     $('.belts_green').on('click', function(){
       $('.table_green').slideToggle();
     });
     $('.belts_orange').on('click', function(){
       $('.table_orange').slideToggle();
     });
     $('.belts_gray').on('click', function(){
       $('.table_gray').slideToggle();
     });
})
