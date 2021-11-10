var desktopScript = function(){
            TweenLite.defaultEase = Linear.easeNone;
            var controller = new ScrollMagic.Controller();

            $(document).ready(function(){
                if($(window).scrollTop() == $('#main').scrollTop()){
                    // console.log($(window).scrollTop());
                    // console.log($('#main').scrollTop());
                    var webStart = new TimelineMax()
                    .add([
                        TweenMax.from(".header-line", 1, {
                            width: 0,}),
                        TweenMax.from(".nav-btn", 0.8, {
                            delay: 0.8,
                            opacity: 0,}),
                        TweenMax.from(".main-bg", 1.8, {
                            delay: 0.8,
                            height: 0,
                            ease: Circ.easeOut}),
                        TweenMax.from(".ex-area", 0.6, {
                            delay: 1,
                            scale: 0,
                            // rotate: -60,
                            ease: Circ.easeOut}),
                        TweenMax.from(".main-text1", 0.8, {
                            delay: 1,
                            y: 50,
                            opacity: 0}),
                        TweenMax.from(".main-text2", 0.8, {
                            delay: 1.3,
                            y: 50,
                            opacity: 0}),
                        TweenMax.from(".main-title", 1.6, {
                            delay: 1.5,
                            marginLeft: "-120%",}),
                    ])
                    webStart;
                } 
                var exRotate = new TweenMax.to('.ex-area', 15, {
                    rotate: 360,
                    repeat: -1,
                    ease: Linear.easeNone,
                })
                
                if($(window).width() < 768) {
                    exRotate.pause();
                    
                }
                $(window).resize(function(){
                    if($(window).width() < 768) {
                        exRotate.pause();
                        new TweenMax.to('.ex-area', 0, {
                            rotate: 0
                        })

                        $('.ex-area').on('mouseover', function(){
                            exRotate.pause();
                        })
                        .on('mouseleave', function(){
                            exRotate.pause();
                        })
                    } else if ($(window).width() > 767){
                        exRotate.resume();
                        var exBtnMotion = new TweenMax.fromTo(".ex-area", 1, {
                                scale: 1,
                                x: 0,
                                y: 0,
                                overwrite: 2,
                            }, 
                            {
                                scale: 0.66,
                                x: 38,
                                y: -18,
                                overwrite: 2,
                        })
            
            
                        var exBtnMotionScroll = new ScrollMagic.Scene({
                        triggerElement: "#main",
                                offset: 600,
                                duration: "100%",
                                triggerHook: 0.3
                            })
                            .setTween(exBtnMotion)
                            .addTo(controller)

                        $('.ex-area').on('mouseover', function(){
                            exRotate.pause();
                        })
                        .on('mouseleave', function(){
                            exRotate.resume();
                        })
                    }
                })
            })
            var exBtnMotion;
            var exBtnMotionScroll;
            var exBtnAction = function() {
                exBtnMotion = new TweenMax.fromTo(".ex-area", 1, {
                        scale: 1,
                        x: 0,
                        y: 0,
                        overwrite: 2,
                    }, 
                    {
                        scale: 0.66,
                        x: 38,
                        y: -18,
                        overwrite: 2,
                })
                exBtnMotionScroll = new ScrollMagic.Scene({
                triggerElement: "#main",
                        offset: 600,
                        duration: "100%",
                        triggerHook: 0.3
                    })
                    .setTween(exBtnMotion)
                    .addTo(controller)
            };
            var exBtnActionFalse = function() {
                exBtnMotion = new TweenMax.fromTo(".ex-area", 1, {
                        scale: 1,
                        x: 0,
                        y: 0,
                        overwrite: 2,
                    }, 
                    {
                        scale: 1,
                        x: 0,
                        y: 0,
                        overwrite: 2,
                })
                exBtnMotionScroll = new ScrollMagic.Scene({
                triggerElement: "#main",
                        offset: 600,
                        duration: "100%",
                        triggerHook: 0.3
                    })
                    .setTween(exBtnMotion)
                    .addTo(controller)
            };
            if($(window).width() < 768) {
                exBtnActionFalse();
            } else if ($(window).width() > 767) {
                exBtnAction();
            }

            $(window).resize(function(){
                if($(window).width() < 768) {
                    exBtnActionFalse();
                } else if ($(window).width() > 767) {
                    exBtnAction();
                }
            })
            

            // about animation

            var aboutMotion = new TimelineMax()
            .add([
                TweenMax.from(".about-top .about-left .line-design-top", 0.4, {
                    width: 0,
                    ease: Power0.easeOut
                }),
                TweenMax.from(".about-top .about-center .line-design-top", 0.6, {
                    delay: 0.2,  
                    width: 0,
                    ease: Power0.easeOut
                }),
                TweenMax.from(".about-top .about-right .line-design-top", 0.8, {
                    delay: 0.82,
                    width: 0,
                    ease: Power0.easeOut
                }),
                TweenMax.from(".about-top .about-left .about-text", 1, {
                    delay: 0.2,
                    opacity: 0,
                    y: 30,
                    ease: Circ.easeOut
                }),
                TweenMax.from(".about-top .about-center .about-mean", 1, {
                    delay: 0.4,  
                    opacity: 0,
                    y: 30,
                    ease: Circ.easeOut
                }),
                TweenMax.from(".about-top .about-right .about-big", 1, {
                    delay: 0.8,  
                    opacity: 0,
                    y: 30,
                    ease: Circ.easeOut
                }),
            ])

            var aboutMotionScroll = new ScrollMagic.Scene({
                triggerElement: "#about",
                offset: 100,
                duration: 1000,
                triggerHook: 0
            })
            .setTween(aboutMotion)
            .addTo(controller)


            var aboutMotion = new TimelineMax()
            .add([
                TweenMax.from(".about-bottom .about-left .line-design-top", 0.4, {
                    width: 0,
                    ease: Power0.easeOut
                }),
                TweenMax.from(".about-bottom .about-center .line-design-top", 0.6, {
                    delay: 0.2,  
                    width: 0,
                    ease: Power0.easeOut
                }),
                TweenMax.from(".about-bottom .about-right .line-design-top", 0.8, {
                    delay: 0.82,
                    width: 0,
                    ease: Power0.easeOut
                }),
                TweenMax.from(".about-bottom .about-left .about-text", 1, {
                    delay: 0.2,
                    opacity: 0,
                    y: 30,
                    ease: Circ.easeOut
                }),
                TweenMax.from(".about-bottom .about-center .about-mean", 1, {
                    delay: 0.4,  
                    opacity: 0,
                    y: 30,
                    ease: Circ.easeOut
                }),
                TweenMax.from(".about-bottom .about-right .about-big", 1, {
                    delay: 0.8,  
                    opacity: 0,
                    y: 30,
                    ease: Circ.easeOut
                }),
            ])

            var aboutMotionScroll = new ScrollMagic.Scene({
                triggerElement: "#about",
                offset: 380,
                duration: 1000,
                triggerHook: 0
            })
            .setTween(aboutMotion)
            .addTo(controller)



            //background animation

            var bgMotion = new TimelineMax()
            .add([
                TweenMax.from(".bg-stack6", 2, {
                    delay: 3,  
                    y: "-648px",
                    ease: Power2.easeInOut
                }),
                TweenMax.from(".bg-stack5", 2, {
                    delay: 6,  
                    y: "-648px",
                    ease: Power2.easeInOut
                }),
                TweenMax.from(".bg-stack4", 2, {
                    delay: 9,  
                    y: "-648px",
                    ease: Power2.easeInOut
                }),
                TweenMax.from(".bg-stack3", 2, {
                    delay: 12,  
                    y: "-648px",
                    ease: Power2.easeInOut
                }),
                TweenMax.from(".bg-stack2", 2, {
                    delay: 15,  
                    y: "-648px",
                    ease: Power2.easeInOut
                }),
                TweenMax.from(".bg-stack1", 2, {
                    delay: 18,  
                    y: "-648px",
                    ease: Power2.easeInOut
                }),
            ])

            var bgMotionScroll = new ScrollMagic.Scene({
                triggerElement: "#background",
                offset: 0,
                duration: 3200,
                triggerHook: 0.3
            })
            .setTween(bgMotion)
            .addTo(controller)


            
            //project animation
            


            //keyword animation


            var keywordMotion = new TimelineMax().add([
                TweenMax.to(".keyword-box1 .keyword-main", 300, {
                    backgroundPositionX: "-240vw",
                    ease: Linear.easeNone,
                    repeat: -1,
                }),
                TweenMax.to(".keyword-box2 .keyword-main", 300, {
                    backgroundPositionX: "220vw",
                    ease: Linear.easeNone,
                    repeat: -1,
                }),
                TweenMax.to(".keyword-box3 .keyword-main", 300, {
                    backgroundPositionX: "-200vw",
                    ease: Linear.easeNone,  
                    repeat: -1,
                }),
            ])

            var keywordMotionScene = new ScrollMagic.Scene({
                triggerElement: ".keyword-list",
                offset: 0,
                triggerHook: 1,
            })
            .setTween(keywordMotion)
            .addTo(controller)
            
            $('.keyword-box').mouseover(function(){
                keywordMotion.pause();
                $('.keyword-box').stop().animate({'opacity':'0.1'}, 250);
                $(this).stop().css({'opacity':'1'});
                $(this).find('.keyword-text').css({'display':'block'});
            }).mouseleave(function(){
                keywordMotion.resume();
                $('.keyword-box').stop().animate({'opacity':'1'}, 200);
                $('.keyword-text').css({'display':'none'});

            })

            var csbgMotion = new TimelineMax().add([
                TweenMax.to("body, .section-wrap", 1, {
                    backgroundColor: "#ffffff",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".nav-btn", 1, {
                    color: "#000000",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".section-title", 1, {
                    color: "#000000",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".ex-area", 1, {
                    backgroundColor: "#ffffff",
                    border: "2px solid #000000",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".ex-btn", 1, {
                    color: "#000000",
                    ease: Linear.easeNone
                }),
            ])
            var csbgMotionScroll = new ScrollMagic.Scene({
                triggerElement: "#space",
                offset: 0,
                duration: 400,
                triggerHook: 0,
            })
            .setTween(csbgMotion)
            .addTo(controller)

            var csbgMotionre = new TimelineMax().add([
                TweenMax.to("body, .section-wrap", 1, {
                    delay: 1,
                    backgroundColor: "#000000",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".ex-area", 1, {
                    backgroundColor: "#000000",
                    border: "2px solid #ffffff",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".ex-btn", 1, {
                    color: "#ffffff",
                    ease: Linear.easeNone
                }),
            ])
            var csbgMotionreScroll = new ScrollMagic.Scene({
                triggerElement: "#goto",
                offset: 200,
                duration: 800,
                triggerHook: 0.2,
            })
            .setTween(csbgMotionre)
            .addTo(controller)

            var csbgMotion1 = new TimelineMax().add([
                TweenMax.to(".nav-btn", 1, {
                    color: "#ffffff",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".section-title", 1, {
                    color: "#ffffff",
                    ease: Linear.easeNone
                }),
            ])
            var csbgMotion1Scroll = new ScrollMagic.Scene({
                triggerElement: "#goto",
                offset: 1550,
                duration: 100,
                triggerHook: 0,
            })
            .setTween(csbgMotion1)
            .addTo(controller)

            var spaceWrapMotion = new TimelineMax().add([
                TweenMax.to(".space-cs", 10, {
                    left: "-100vw",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".space-tr", 10, {
                    left: "0",
                    ease: Linear.easeNone
                }),
            ])

            var spaceWrapMotionScroll = new ScrollMagic.Scene({
                triggerElement: "#space",
                offset: 4000,
                duration: 2000,
                triggerHook: 0
            })
            .setTween(spaceWrapMotion)
            .addTo(controller)


            var csMotion = new TimelineMax().add([
                TweenMax.to(".cs-pic1", 10, {
                    left: "-100vw",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".cs-pic2", 11, {
                    delay: 1.5,
                    left: "-70vw",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".cs-pic3", 12, {
                    delay: 2.7,
                    left: "-40vw",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".cs-pic4", 13, {
                    delay: 4.5,
                    left: "-20vw",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".cs-pic5", 15, {
                    delay: 6,
                    left: "20vw",
                    ease: Linear.easeNone
                }),
            ])

            var csMotionScroll = new ScrollMagic.Scene({
                triggerElement: "#space",
                offset: 500,
                duration: 6000,
                triggerHook: 0
            })
            .setTween(csMotion)
            .addTo(controller)


            var trMotion = new TimelineMax().add([
                TweenMax.to(".tr-pic1", 10, {
                    left: "-100vw",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".tr-pic2", 12, {
                    delay: 1,  
                    left: "-90vw",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".tr-pic3", 14, {
                    delay: 2,
                    left: "-75vw",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".tr-pic4", 14, {
                    delay: 3,
                    left: "-60vw",
                    ease: Linear.easeNone
                }),
                TweenMax.to(".tr-pic5", 16, {
                    delay: 4,
                    left: "-0vw",
                    ease: Linear.easeNone
                }),
            ])


            var trMotionScroll = new ScrollMagic.Scene({
                triggerElement: "#space",
                offset: 3500,
                duration: 8000,
                triggerHook: 0
            })
            .setTween(trMotion)
            .addTo(controller)


            $('.space-pic').mouseover(function(){
                new TweenMax.to($('.space-pic').not(this), 0.3, {
                    filter: "brightness(0.3)",
                    webkitFilter: "brightness(0.3)",
                })
                new TweenMax.to($(this), 0.4, {
                    filter: "brightness(1)",
                    webkitFilter: "brightness(1)",
                })
            }).mouseleave(function(){
                new TweenMax.to($('.space-pic'), 0.3, {
                    filter: "brightness(1)",
                    webkitFilter: "brightness(1)",

                })
            })


            // var keyword1ImgMotion = new TweenMax.to(".keyword1-motion img", 1, {
            //     left: "-300%",
            //     ease: Linear.easeNone
            // })

            // var keyword1ImgMotionScroll = new ScrollMagic.Scene({
            //     triggerElement: ".keyword1-motion",
            //     offset: 0,
            //     duration: 4000,
            //     triggerHook: 0.5
            // })
            // .setTween(keyword1ImgMotion)
            // .addTo(controller)
            
            // var setNav4 = new ScrollMagic.Scene({
            //     triggerElement: "#keyword",
            //     duration: $("#keyword").height(),
            //     offset: 0,
            //     triggerHook: 0
            // })
            // .setPin(".keyword-title")
            // .addTo(controller);


            





            //goto section animation
            
            var gotoBgMotion = new TweenMax.to(".goto-bg", 2, {
                scale: 3,
                
            })

            var gotoBgMotionScroll = new ScrollMagic.Scene({
                triggerElement: "#goto",
                offset: 0,
                duration: $('#goto').height(),
                triggerHook: 1
            })
            .setTween(gotoBgMotion)
            .addTo(controller)
            

            var gotoMotion1 = new TimelineMax().add([
                TweenMax.from(".goto-ex-btn .inner-animate3", 1, {
                    y: "20vw",
                    ease: Power3.easeOut
                }),
                TweenMax.from(".goto-ex-btn .inner-animate2", 1, {
                    delay: 0.1,  
                    y: "20vw",
                    ease: Power3.easeOut
                }),
                TweenMax.from(".goto-ex-btn .inner-animate1", 1, {
                    delay: 0.2,
                    y: "20vw",
                    ease: Power3.easeOut
                }),
            ])

            var gotoMotionScroll1 = new ScrollMagic.Scene({
                triggerElement: "#goto",
                offset: 500,
                triggerHook: 0.3
            })
            .setTween(gotoMotion1)
            .addTo(controller)


            var gotoMotion2 = new TimelineMax().add([
                TweenMax.from(".goto-video-btn .inner-animate3", 1, {
                    y: "20vw",
                    ease: Power3.easeOut
                }),
                TweenMax.from(".goto-video-btn .inner-animate2", 1, {
                    delay: 0.1,  
                    y: "20vw",
                    ease: Power3.easeOut
                }),
                TweenMax.from(".goto-video-btn .inner-animate1", 1, {
                    delay: 0.2,
                    y: "20vw",
                    ease: Power3.easeOut
                }),
            ])

            var gotoMotionScroll2 = new ScrollMagic.Scene({
                triggerElement: "#goto",
                offset: 600,
                triggerHook: 0.3
            })
            .setTween(gotoMotion2)
            .addTo(controller)



            // var gotoMotion3 = new TimelineMax().add([
            //     TweenMax.to(".project-btn", 0.1, {
            //         delay: 0.2,
            //         color: "#000000",
            //         ease: Linear.easeNone,
            //     }),
            //     TweenMax.to(".video-btn", 0.1, {
            //         delay: 0.2,
            //         color: "#000000",
            //         ease: Linear.easeNone,
            //     }),
            //     TweenMax.to(".right-team-btn", 0.1, {
            //         delay: 0.2,
            //         color: "#000000",
            //         ease: Linear.easeNone,
            //     }),
            //     TweenMax.to(".goto-title", 0.1, {
            //         color: "#000000",
            //         ease: Linear.easeNone,
            //     }),
            // ])

            // var gotoMotionScroll3 = new ScrollMagic.Scene({
            //     triggerElement: "#goto",
            //     offset: 430,
            //     duration: 50,
            //     triggerHook: 0.1
            // })
            // .setTween(gotoMotion3)
            // .addTo(controller)


            // var gotoMotion4 = new TimelineMax().add([
            //     TweenMax.to(".project-btn", 0.1, {
            //         delay: 0.2,
            //         color: "#ffffff",
            //         ease: Linear.easeNone,
            //     }),
            //     TweenMax.to(".video-btn", 0.1, {
            //         delay: 0.2,
            //         color: "#ffffff",
            //         ease: Linear.easeNone,
            //     }),
            //     TweenMax.to(".right-team-btn", 0.1, {
            //         delay: 0.2,
            //         color: "#ffffff",
            //         ease: Linear.easeNone,
            //     }),
            //     TweenMax.to(".goto-title", 0.1, {
            //         color: "#ffffff",
            //         ease: Linear.easeNone,
            //     }),
            // ])

            // var gotoMotionScroll4 = new ScrollMagic.Scene({
            //     triggerElement: "#review",
            //     offset: 0,
            //     duration: 100,
            //     triggerHook: 0.3
            // })
            // .setTween(gotoMotion4)
            // .addTo(controller)
            
            

            

            
}


var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

jQuery(document).ready(function($){
    if(!isMobile) {
        console.log('pc');
        
        desktopScript();

    }
});
