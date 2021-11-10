
var $cursor = $('.cursor');

function moveCircle(e) {
  TweenLite.to($cursor, 0.2, {
    css: {
      left: e.pageX,
      top: e.pageY - scrollY,
    }
  });
}
function scale0() {
    TweenMax.to($cursor, 0.4, {
        scale: 0,
    });
    return false;
}
function scale1() {
    TweenMax.to($cursor, 0.4, {
        scale: 1,
    });
    return false;
}
$(window).on('mousemove', moveCircle)
.on('mouseover', scale1)
.on('mouseleave', scale0);

$('.ex-area').on('mouseover', function(){
    TweenMax.to($cursor, 0.4, {
        scale: 0,
    });
    TweenMax.to(".ex-btn-bg", 0.6, {
        scale: 1,
        ease: Circ.easeOut
    });
    return false;
})
.on('mouseleave', function(){
    TweenMax.to($cursor, 0.4, {
        scale: 1,
    });
    TweenMax.to(".ex-btn-bg", 0.8, {
        scale: 0,
        ease: Circ.easeOut
    });
    return false;
})

$(window).on('resize', function(){
    $('.main-bg').css({
        'width': '100%',
        'height': '100%'
    });
    $('.main-content').css({
        'width': '100%',
        'height': '100%'
    })
    if($(window).width() < 768) {
        $('.header-line').css({
            'width': 'calc(100vw - 32px)'
        })
    }else if($(window).width() > 767) {
        $('.header-line').css({
            'width': 'calc(100vw - 100px)'
        })       
    }
    
})


