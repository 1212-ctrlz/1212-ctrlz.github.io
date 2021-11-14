
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

var exBtnRotate = new TweenMax.to(".ex-btn", 15, {
                    rotate: 360,
                    repeat: -1,
                    ease: Linear.easeNone
                })
exBtnRotate.pause();

$('.ex-btn').on('mouseover', function(){
    exBtnRotate.pause();
    TweenMax.to($cursor, 0.4, {
        scale: 0,
    });
    TweenMax.to(".ex-bg", 0.4, {
        scale: 1,
        ease: Circ.easeOut
    });
    return false;
})
.on('mouseleave', function(){
    exBtnRotate.resume();
    TweenMax.to($cursor, 0.4, {
        scale: 1,
    });
    TweenMax.to(".ex-bg", 0.4, {
        scale: 0,
        ease: Circ.easeInOut
    });
    return false;
})



var keyword1Moving = new TweenMax.from(".keyword-main1", 6000, {
    backgroundPositionX: "20000vw",
    repeat: -1,
    ease: Linear.easeNone
})
var keyword2Moving = new TweenMax.from(".keyword-main2", 6000, {
    backgroundPositionX: "-20000vw",
    repeat: -1,
    ease: Linear.easeNone
})
var keyword3Moving = new TweenMax.from(".keyword-main3", 6000, {
    backgroundPositionX: "20000vw",
    repeat: -1,
    ease: Linear.easeNone
})

$('.keyword-box').on('mouseover', function(){
    keyword1Moving.pause();
    keyword2Moving.pause();
    keyword3Moving.pause();
    $('.keyword-box').not(this).stop().animate({'opacity':'0.2'}, 200);
    $(this).find('.keyword-text').css({'display':'flex'}).stop().animate({'opacity':'1'}, 400);
}).on('mouseleave', function(){
    keyword1Moving.resume();
    keyword2Moving.resume();
    keyword3Moving.resume();
    $('.keyword-box').stop().animate({'opacity':'1'}, 200)
    $(this).find('.keyword-text').stop().animate({'opacity':'0'}, 400).css({'display':'none'});
})

$('.space-img-box').on('mouseover', function(){
    $('.space-img-box').not(this).stop().animate({'opacity':'0.2'}, 200);
}).on('mouseleave', function(){
    $('.space-img-box').stop().animate({'opacity':'1'}, 400);
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

    $('.header-line').css({
        'width': '100%'
    })       
    $('.line-design-top').css({
        'width': '100%'
    }) 
})


