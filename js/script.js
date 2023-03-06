$(document).ready(function(){
  AOS.init();

  $('.nav').mouseenter(function(){
      $('.sub-menu-box').addClass('active');
  });

  $('.sub-menu-box').mouseleave(function(){
      $('.sub-menu-box').removeClass('active');
  });

  var ww =$(window).width();
  var swiper = undefined;

  function layout(){

    if(ww >= 1140  && swiper == undefined){
      swiper = new Swiper(".mySwiper", {
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: true,
        breakpoints:{
          1530:{
            slidesPerView: 3,
            spaceBetween: 108,
            slidesPerGroup: 1,    
          },
          1140:{
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,    
          }
        }
      });
    } else if(ww < 1140 && swiper != undefined){
      console.log('des')
      swiper.destroy()
      swiper=undefined

    }
  }
  layout();


  // 리사이즈시 자동호출
  $(window).resize(function(){
    ww = $(window).width();
    layout();
  });



  // 햄버거버튼 클릭하면 햄버거 모양이 X모양, 햄버거메뉴박스 나타남
  $('#hamburger').click(function(){
    $(this).toggleClass('active');
    $('.hamburger-menu-box').toggleClass('active');
  });
  

  
  $('.hamburger-sub-menu-main-name').click(function(){
    $(this).siblings('.hamburger-sub-menu').slideToggle();
    $(this).parent('.hamburger-menu').siblings().children('.hamburger-sub-menu').slideUp();
  });

  $(window).scroll(function(){
    const h = $(window).scrollTop();
    console.log(h);

    if(h >= 1000){
      $('.logo').addClass('on');
    }else{
      $('.logo').removeClass('on');
    }
  });
  
});