// --menu.html 換介紹---
$(document).ready(function(){
  $(document).scroll(function(){
    button_appear()
  })
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
    button_appear()
    //   menu clicked me button
    function button_appear(){
      let outerHeight = $('#coffee').outerHeight();
      let offsetTop = $('#coffee').offset().top;
      let teaOuterHeight = $('#tea').outerHeight();
      let teaOffsetTop = $('#tea').offset().top;
      if(scrollY + innerHeight - outerHeight / 4 > offsetTop){
          $('#switch_menu').addClass('active')
      }
      else if(scrollY + innerHeight - teaOuterHeight  > teaOffsetTop){
        $('#switch_menu').removeClass('active')
    }
      // else if(scrollY + innerHeight - teaOuterHeight > teaOffsetTop){
      //   $('#switch_menu').removeClass('active')
      // }
      else{
          $('#switch_menu').removeClass('active')
      }
    }
      
  })


// //   menu clicked me button
// function button_appear(){
//   let outerHeight = $('#coffee').outerHeight();
//   let offsetTop = $('#coffee').offset().top;
//   if(scrollY + innerHeight - outerHeight / 3 > offsetTop){
//       $('#switch_menu').addClass('active')
//   }else{
//       $('#switch_menu').removeClass('active')
//   }
// }