// --換介紹---
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

