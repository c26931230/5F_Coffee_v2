// index.html slogan動畫
window.addEventListener("scroll", function(){
  let slidein = document.getElementsByClassName("slidein");
  for(let i = 0; i < slidein.length; i++){
      if( ((this.scrollY + this.innerHeight) - slidein[i].offsetHeight / 3) > slidein[i].offsetTop){             
          slidein[i].classList.add("active");
      }else{
          slidein[i].classList.remove("active");
      };
  }

  let fadein = document.getElementsByClassName("fadein");
  for(let i = 0; i < fadein.length; i++){
      if( ((this.scrollY + this.innerHeight) - fadein[i].offsetHeight / 3) > fadein[i].offsetTop){          
          fadein[i].classList.add("active");
      }else{
          fadein[i].classList.remove("active");
      };
  }
// slogan輪播圖
let carouselBtn = document.querySelectorAll("input.carousel_btn");

function carousel(i){
    setTimeout(
        function(){
            carouselBtn[i].click();
            i++;
            if(i <= 2){
                carousel(i);
            }
            if(i > 2){
                let i = 0;
                carousel(i);
            }
        }
        ,4000
    );
}
window.addEventListener("load",carousel(1));

  
  // ----loacation background-------
  $('.shop').mouseover(function(){
      $('.location #coffee_shop_bg').css({
          opacity:".6",
      })
      }).mouseout(function(){
          $('.location #coffee_shop_bg').css({
              opacity:"0",
          })
  })
  $('.school').mouseover(function(){
      $('.location #coffee_school_bg').css({
          opacity:".6",
      })
      }).mouseout(function(){
          $('.location #coffee_school_bg').css({
              opacity:"0",
          })
  })
});

// --menu.html 換介紹---
$(document).ready(function(){
  $('#switch_menu').click(function(){
    if($('.front').hasClass('rotate')){
        $('.front').removeClass('rotate')
    }else{$('.front').addClass('rotate')}
  })
  $('.front').mouseenter(function(){
        if($(this).hasClass('rotate')){
            $(this).removeClass('rotate')
        }else{$(this).addClass('rotate')}
    }
  ).mouseleave(function(){
    if($(this).hasClass('rotate')){
        $(this).removeClass('rotate')
    }else{$(this).addClass('rotate')}
  })
    
})

