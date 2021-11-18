var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();

var pageIntro = function(){
    if($(window).scrollTop() == 0){
        var headerStart = new TimelineMax().add([
            TweenMax.from(".header-line", 0.7, {
                delay: 0.2,
                width: 0,
                ease: Circ.EaseInOut
            }),
            TweenMax.from(".header-set", 0.6, {
                delay: 0.4,
                opacity: 0,
            })
        ])
        var mainStart = new TimelineMax().add([
            TweenMax.from(".main-text-line", 0.5, {
                delay: 0.5,
                width: 0,
            }),
            TweenMax.from(".main-text-top", 0.7, {
                delay: 0.6,
                opacity: 0,
                y: 20,
            }),
            TweenMax.from(".main-text-bottom", 0.7, {
                delay: 0.7,
                opacity: 0,
                y: 20,
            }),
            TweenMax.from(".main-title", 1.2, {
                delay: 0.8,
                y: "150%",
            })
        ])
    }
    var exStart = new TweenMax.from(".ex-btn", 0.5, {
            scale: 0,
    })
}

var exBtnScroll = function(){
    var exBtnSmall = new TweenMax.to(".header-ex", 1, {
        scale: 0.75
    })

    var exBtnSmallTrigger = new ScrollMagic.Scene({
                    triggerElement: "#about",
                            offset: 0,
                            duration: "50%",
                            triggerHook: 1
                        })
                        .setTween(exBtnSmall)
                        .addTo(controller)

}

var aboutScroll = function(){
    var aboutAnimate = new TimelineMax().add([
        TweenMax.from(".about-top .about-left .line-design-top", 0.4, {
            width: 0
        }),
        TweenMax.from(".about-top .about-right .line-design-top", 1.5, {
            delay: 0.2,
            width: 0
        }),
        TweenMax.from(".about-top .about-left .about-left-text", 1, {
            delay: 0.5,
            opacity: 0,
            y: 20
        }),
        TweenMax.from(".about-top .about-right .about-right-mean", 1, {
            delay: 0.8,
            opacity: 0,
            y: 20
        }),
        TweenMax.from(".about-top .about-right .about-right-title", 1, {
            delay: 1,
            opacity: 0,
            y: 20
        }),
        TweenMax.from(".about-bottom .about-left .line-design-top", 0.4, {
            delay: 1.4,
            width: 0
        }),
        TweenMax.from(".about-bottom .about-right .line-design-top", 1.5, {
            delay: 1.6,
            width: 0
        }),
        TweenMax.from(".about-bottom .about-left .about-left-text", 1, {
            delay: 1.9,
            opacity: 0,
            y: 20
        }),
        TweenMax.from(".about-bottom .about-right .about-right-mean", 1, {
            delay: 2.2,
            opacity: 0,
            y: 20
        }),
        TweenMax.from(".about-bottom .about-right .about-right-subtitle", 1, {
            delay: 2.4,
            opacity: 0,
            y: 20
        }),
        
    ])

    var aboutTrigger = new ScrollMagic.Scene({
                    triggerElement: "#about",
                            offset: 0,
                            duration: "50%",
                            triggerHook: 0.4
                        })
                        .setTween(aboutAnimate)
                        .addTo(controller)

}

var researchScroll = function(){
    var researchAnimate = new TimelineMax().add([
        TweenMax.from(".stack6", 1, {
            top: "-564px",
        }),
        TweenMax.from(".stack5", 1, {
            delay: 1.3,
            top: "-564px",
        }),
        TweenMax.from(".stack4", 1, {
            delay: 2.6,
            top: "-564px",
        }),
        TweenMax.from(".stack3", 1, {
            delay: 3.9,
            top: "-564px",
        }),
        TweenMax.from(".stack2", 1, {
            delay: 5.2,
            top: "-564px",
        }),
        TweenMax.from(".stack1", 1, {
            delay: 6.5,
            top: "-564px",
        })
    ])

    var researchTrigger = new ScrollMagic.Scene({
                    triggerElement: "#research",
                            offset: 0,
                            duration: "120%",
                            triggerHook: 0
                        })
                        .setTween(researchAnimate)
                        .addTo(controller)


    var researchAnimate2 = new TimelineMax().add([
        TweenMax.from(".research-right .for-animate:nth-child(1) p", 0.4, {
            y: 100,
        }),
        TweenMax.from(".research-right .for-animate:nth-child(2) p", 0.4, {
            delay: 0.2,
            y: 100,
        }),
        TweenMax.from(".research-right .for-animate:nth-child(3) p", 0.4, {
            delay: 0.4,
            y: 100,
        }),
        TweenMax.from(".research-right .for-animate:nth-child(4) p", 0.4, {
            delay: 0.7,
            y: 100,
        }),
        TweenMax.from(".research-right .for-animate:nth-child(5) p", 0.4, {
            delay: 0.9,
            y: 100,
        }),
    ])           

    var researchTrigger2 = new ScrollMagic.Scene({
        triggerElement: "#research",
                offset: 1100,
                duration: 400,
                triggerHook: 0
            })
            .setTween(researchAnimate2)
            .addTo(controller)

}

var researchScrollM = function(){
    var researchAnimate = new TimelineMax().add([
        TweenMax.from(".stack6", 1, {
            top: "-564px",
        }),
        TweenMax.from(".stack5", 1, {
            delay: 1.3,
            top: "-564px",
        }),
        TweenMax.from(".stack4", 1, {
            delay: 2.6,
            top: "-564px",
        }),
        TweenMax.from(".stack3", 1, {
            delay: 3.9,
            top: "-564px",
        }),
        TweenMax.from(".stack2", 1, {
            delay: 5.2,
            top: "-564px",
        }),
        TweenMax.from(".stack1", 1, {
            delay: 6.5,
            top: "-564px",
        })
    ])

    var researchTrigger = new ScrollMagic.Scene({
                    triggerElement: "#research",
                            offset: 0,
                            duration: "80%",
                            triggerHook: 0
                        })
                        .setTween(researchAnimate)
                        .addTo(controller)


    var researchAnimate2 = new TimelineMax().add([
        TweenMax.from(".research-right .for-animate:nth-child(1) p", 0.4, {
            y: 100,
        }),
        TweenMax.from(".research-right .for-animate:nth-child(2) p", 0.4, {
            delay: 0.2,
            y: 100,
        }),
        TweenMax.from(".research-right .for-animate:nth-child(3) p", 0.4, {
            delay: 0.4,
            y: 100,
        }),
        TweenMax.from(".research-right .for-animate:nth-child(4) p", 0.4, {
            delay: 0.7,
            y: 100,
        }),
        TweenMax.from(".research-right .for-animate:nth-child(5) p", 0.4, {
            delay: 0.9,
            y: 100,
        }),
    ])           

    var researchTrigger2 = new ScrollMagic.Scene({
        triggerElement: "#research",
                offset: 1100,
                duration: 400,
                triggerHook: 0
            })
            .setTween(researchAnimate2)
            .addTo(controller)

}

var goalScroll = function(){
    var goalAnimate = new TimelineMax().add([
        TweenMax.from(".goal-inner .line-design-top", 0.5, {
            width: 0
        }),
        TweenMax.from(".goal-top .goal-num", 0.5, {
            x: "-100%"
        }),
        TweenMax.from(".goal-top .goal-sub", 0.75, {
            x: "-100%"
        }),
        TweenMax.from(".goal-top .goal-text", 1, {
            x: "-100%"
        }),
        TweenMax.from(".goal-bottom .goal-num", 0.5, {
            delay: 0.5,
            x: "-100%"
        }),
        TweenMax.from(".goal-bottom .goal-sub", 0.75, {
            delay: 0.5,
            x: "-100%"
        }),
        TweenMax.from(".goal-bottom .goal-text", 1, {
            delay: 0.5,
            x: "-100%"
        }),
    ])

    var goalTrigger = new ScrollMagic.Scene({
                    triggerElement: "#goal",
                            offset: 0,
                            duration: "70%",
                            triggerHook: 0.3
                        })
                        .setTween(goalAnimate)
                        .addTo(controller)

}
var equipScroll = function(){
    var equipStartAnimate = new TimelineMax().add([
        TweenMax.to("#space", 1, {
            backgroundColor: "#ffffff",
        }),
        TweenMax.to("#equip", 1, {
            backgroundColor: "#ffffff",
        }),
        TweenMax.to(".header-line", 1, {
            backgroundColor: "#000000",
        }),
        TweenMax.to(".header-btn", 1, {
            color: "#000000",
        }),
        TweenMax.to(".equip-title .title-line-bottom", 1, {
            backgroundColor: "#000000",
        }),
        TweenMax.to(".equip-title .title-inner", 1, {
            color: "#000000",
        }),
        TweenMax.to(".equip-title .title-line-bottom", 1, {
            backgroundColor: "#000000",
        }),
        TweenMax.to(".equip-title .title-inner", 1, {
            color: "#000000",
        }),
        TweenMax.to(".ex-mobile-line ", 1, {
            backgroundColor: "#000000",
        }),
        TweenMax.to(".ex-btn-mobile", 1, {
            color: "#000000",
        }),
    ])

    var equipStartTrigger = new ScrollMagic.Scene({
                    triggerElement: "#equip",
                            offset: -100,
                            duration: 200,
                            triggerHook: 0
                        })
                        .setTween(equipStartAnimate)
                        .addTo(controller)

        var equipEndAnimate = new TimelineMax().add([
            TweenMax.to(".header-line", 1, {
                backgroundColor: "#ffffff",
            }),
            TweenMax.to(".header-btn", 1, {
                color: "#ffffff",
            }),
            TweenMax.to(".ex-mobile-line ", 1, {
                backgroundColor: "#ffffff",
            }),
            TweenMax.to(".ex-btn-mobile", 1, {
                color: "#ffffff",
            }),
        ])

        var equipEndTrigger = new ScrollMagic.Scene({
                        triggerElement: "#keyword",
                                offset: -100,
                                duration: 200,
                                triggerHook: 0
                            })
                            .setTween(equipEndAnimate)
                            .addTo(controller)


    var equipAnimate = new TimelineMax().add([
        TweenMax.from(".cont1", 1, {
            y: "100%",
        }),
        TweenMax.from(".hmd", 1, {
            delay: 0.2,
            y: "100%"
        }),
        TweenMax.from(".cont2", 1, {
            delay: 0.3,
            y: "100%"
        }),
        TweenMax.from(".oq-text", 0.5, {
            delay: 0.3,
            opacity: 0,
        }),
    ])

    var equipTrigger = new ScrollMagic.Scene({
                    triggerElement: "#equip",
                            offset: 0,
                            duration: "70%",
                            triggerHook: 0.3
                        })
                        .setTween(equipAnimate)
                        .addTo(controller)

}
var targetScroll = function(){
    var targetAnimate = new TimelineMax().add([
        TweenMax.from(".target-text:nth-child(2) .for-animate span", 1, {
            delay: 0,
            y: 100
        }),
        TweenMax.from(".target-text:nth-child(3) .for-animate span", 1, {
            delay: 0.6,
            y: 100
        }),
        TweenMax.from(".target-text:nth-child(4) .for-animate span", 1, {
            delay: 1.2,
            y: 100
        }),
    ])

    var targetTrigger = new ScrollMagic.Scene({
                    triggerElement: "#target",
                            offset: 0,
                            triggerHook: 0.32
                        })
                        .setTween(targetAnimate)
                        .addTo(controller)

}

var spaceScroll = function(){
    var spaceAnimate = new TimelineMax().add([
        TweenMax.to("#space", 1, {
            backgroundColor: "#ffffff",
        }),
        TweenMax.to("#experience", 1, {
            backgroundColor: "#ffffff",
        }),
        TweenMax.to(".header-line", 1, {
            backgroundColor: "#000000",
        }),
        TweenMax.to(".header-btn", 1, {
            color: "#000000",
        }),
        TweenMax.to(".space-title .title-line-bottom", 1, {
            backgroundColor: "#000000",
        }),
        TweenMax.to(".space-title .title-inner", 1, {
            color: "#000000",
        }),
        TweenMax.to(".experience-title .title-line-bottom", 1, {
            backgroundColor: "#000000",
        }),
        TweenMax.to(".experience-title .title-inner", 1, {
            color: "#000000",
        }),
        TweenMax.from(".text-cs", 1, {
            opacity: 0,
        }),
        TweenMax.to(".ex-mobile-line ", 1, {
            backgroundColor: "#000000",
        }),
        TweenMax.to(".ex-btn-mobile", 1, {
            color: "#000000",
        }),
    ])

    var spaceTrigger = new ScrollMagic.Scene({
                    triggerElement: "#space",
                            offset: -500,
                            duration: 400,
                            triggerHook: 0
                        })
                        .setTween(spaceAnimate)
                        .addTo(controller)

    var spaceEndAnimate = new TimelineMax().add([
                    TweenMax.to(".header-line", 1, {
                        backgroundColor: "#ffffff",
                    }),
                    TweenMax.to(".header-btn", 1, {
                        color: "#ffffff",
                    }),
                    TweenMax.from(".video-title .title-line-bottom", 1, {
                        backgroundColor: "#000000",
                    }),
                    TweenMax.from(".video-title .title-inner", 1, {
                        color: "#000000",
                    }),
                    TweenMax.to(".ex-mobile-line ", 1, {
                        backgroundColor: "#ffffff",
                    }),
                    TweenMax.to(".ex-btn-mobile", 1, {
                        color: "#ffffff",
                    }),
                ])

    var spaceEndTrigger = new ScrollMagic.Scene({
                    triggerElement: "#video",
                            offset: -100,
                            duration: 200,
                            triggerHook: 0
                        })
                        .setTween(spaceEndAnimate)
                        .addTo(controller)

    var spaceImgAnimate = new TimelineMax().add([
                    TweenMax.to(".space-img", 5, {
                        left: "-297%",
                        ease: Linear.easeNone,
                    }),
                    TweenMax.to(".space-text", 1, {
                        delay: 2.2,
                        left: "-100%",
                        ease: Linear.easeNone,
                    }),
                ])

var spaceImgTrigger = new ScrollMagic.Scene({
                    triggerElement: "#space",
                            offset: 200,
                            duration: "460%",
                            triggerHook: 0
                        })
                        .setTween(spaceImgAnimate)
                        .addTo(controller)
    
                       
            


}
var spaceScrollM = function(){
    var spaceAnimate = new TimelineMax().add([
        TweenMax.to("#space", 1, {
            backgroundColor: "#ffffff",
        }),
        TweenMax.to("#experience", 1, {
            backgroundColor: "#ffffff",
        }),
        TweenMax.to(".header-line", 1, {
            backgroundColor: "#000000",
        }),
        TweenMax.to(".header-btn", 1, {
            color: "#000000",
        }),
        TweenMax.to(".space-title .title-line-bottom", 1, {
            backgroundColor: "#000000",
        }),
        TweenMax.to(".space-title .title-inner", 1, {
            color: "#000000",
        }),
        TweenMax.to(".experience-title .title-line-bottom", 1, {
            backgroundColor: "#000000",
        }),
        TweenMax.to(".experience-title .title-inner", 1, {
            color: "#000000",
        }),
        TweenMax.from(".text-cs", 1, {
            opacity: 0,
        }),
        TweenMax.to(".ex-mobile-line ", 1, {
            backgroundColor: "#000000",
        }),
        TweenMax.to(".ex-btn-mobile", 1, {
            color: "#000000",
        }),
    ])

    var spaceTrigger = new ScrollMagic.Scene({
                    triggerElement: "#space",
                            offset: -500,
                            duration: 400,
                            triggerHook: 0
                        })
                        .setTween(spaceAnimate)
                        .addTo(controller)

    var spaceEndAnimate = new TimelineMax().add([
                    TweenMax.to(".header-line", 1, {
                        backgroundColor: "#ffffff",
                    }),
                    TweenMax.to(".header-btn", 1, {
                        color: "#ffffff",
                    }),
                    TweenMax.from(".video-title .title-line-bottom", 1, {
                        backgroundColor: "#000000",
                    }),
                    TweenMax.from(".video-title .title-inner", 1, {
                        color: "#000000",
                    }),
                    TweenMax.to(".ex-mobile-line ", 1, {
                        backgroundColor: "#ffffff",
                    }),
                    TweenMax.to(".ex-btn-mobile", 1, {
                        color: "#ffffff",
                    }),
                ])

    var spaceEndTrigger = new ScrollMagic.Scene({
                    triggerElement: "#video",
                            offset: -100,
                            duration: 200,
                            triggerHook: 0
                        })
                        .setTween(spaceEndAnimate)
                        .addTo(controller)

    var spaceImgAnimate = new TimelineMax().add([
                    TweenMax.to(".space-img", 5, {
                        left: "-297%",
                        ease: Linear.easeNone,
                    }),
                    TweenMax.to(".space-text", 1, {
                        delay: 2.2,
                        left: "-100%",
                        ease: Linear.easeNone,
                    }),
                ])

var spaceImgTrigger = new ScrollMagic.Scene({
                    triggerElement: "#space",
                            offset: 200,
                            duration: "250%",
                            triggerHook: 0
                        })
                        .setTween(spaceImgAnimate)
                        .addTo(controller)
    
                       
            


}

var experienceScroll = function(){
    var experienceAnimate = new TimelineMax().add([
        TweenMax.from(".experience-bg-color", 2, {
            scale: 0,
        }),
    ])

    var experienceTrigger = new ScrollMagic.Scene({
                    triggerElement: "#experience",
                            offset: -200,
                            duration: "90%",
                            triggerHook: 0
                        })
                        .setTween(experienceAnimate)
                        .addTo(controller)


    var experienceBtnAnimate = new TimelineMax().add([
        TweenMax.from(".experience-ex-btn .experience-star .experience-text-inner", 0.6, {
            y: "18vw",
        }),
        TweenMax.from(".experience-ex-btn .experience-text-top .experience-text-inner", 0.6, {
            delay: 0.2,
            y: "18vw",
        }),
        TweenMax.from(".experience-ex-btn .experience-text-bottom .experience-it", 0.6, {
            delay: 0.4,
            y: "18vw",
        }),
        TweenMax.from(".experience-ex-btn .experience-text-bottom .experience-arrow", 0.6, {
            delay: 0.5,
            y: "18vw",
        }),
        TweenMax.from(".experience-video-btn .experience-star .experience-text-inner", 0.6, {
            delay: 0.4,
            y: "18vw",
        }),
        TweenMax.from(".experience-video-btn .experience-text-top .experience-text-inner", 0.6, {
            delay: 0.6,
            y: "18vw",
        }),
        TweenMax.from(".experience-video-btn .experience-text-bottom .experience-it", 0.6, {
            delay: 0.8,
            y: "18vw",
        }),
        TweenMax.from(".experience-video-btn .experience-text-bottom .experience-arrow", 0.6, {
            delay: 0.9,
            y: "18vw",
        }),
    ])

    var experienceTrigger = new ScrollMagic.Scene({
                    triggerElement: "#experience",
                            offset: 110,
                            triggerHook: 0
                        })
                        .setTween(experienceBtnAnimate)
                        .addTo(controller)
                    
}

var videoScroll = function(){
    var videoAnimate = new TimelineMax().add([
        TweenMax.from(".video-bg-inner", 2, {
            scale: 0,
        }),
        TweenMax.from(".video-text", 1, {
            delay: 0.6,
            opacity: 0,
        }),
    ])

    var videoTrigger = new ScrollMagic.Scene({
                    triggerElement: "#video",
                            offset: -300,
                            duration: "90%",
                            triggerHook: 0
                        })
                        .setTween(videoAnimate)
                        .addTo(controller)
}




var mobileSticky = function(){
    var aboutSticky = new ScrollMagic.Scene(
        {triggerElement: "#about", duration: 1140, offset: 0, triggerHook: 0})
    .setPin(".about-title")
    .addTo(controller);
    var researchSticky = new ScrollMagic.Scene(
        {triggerElement: "#research", duration: 2540, offset: 0, triggerHook: 0})
    .setPin(".research-title")
    .addTo(controller);
    var researchSticky2 = new ScrollMagic.Scene(
        {triggerElement: "#research", duration: 1640, offset: -24, triggerHook: 0})
    .setPin(".research-wrap")
    .addTo(controller);
    var equipSticky = new ScrollMagic.Scene(
        {triggerElement: "#equip", duration: 1640, offset: 0, triggerHook: 0})
    .setPin(".equip-title")
    .addTo(controller);
    var equipSticky2 = new ScrollMagic.Scene(
        {triggerElement: "#equip", duration: 640, offset: -60, triggerHook: 0})
    .setPin(".equip-wrap")
    .addTo(controller);
    var keywordSticky = new ScrollMagic.Scene(
        {triggerElement: "#keyword", duration: 1240, offset: 0, triggerHook: 0})
    .setPin(".keyword-title")
    .addTo(controller);
    var keywordSticky2 = new ScrollMagic.Scene(
        {triggerElement: "#keyword", duration: 400, offset: -60, triggerHook: 0})
    .setPin(".keyword-wrap")
    .addTo(controller);
    var targetSticky = new ScrollMagic.Scene(
        {triggerElement: "#target", duration: "120%", offset: 0, triggerHook: 0})
    .setPin(".target-title")
    .addTo(controller);
    var spaceSticky = new ScrollMagic.Scene(
        {triggerElement: "#space", duration: "320%", offset: 0, triggerHook: 0})
    .setPin(".space-title")
    .addTo(controller);
    var spaceSticky2 = new ScrollMagic.Scene(
        {triggerElement: "#space", duration: "270%", offset: 0, triggerHook: 0})
    .setPin(".space-content")
    .addTo(controller);
    var experienceSticky = new ScrollMagic.Scene(
        {triggerElement: "#experience", duration: 1160, offset: 0, triggerHook: 0})
    .setPin(".experience-title")
    .addTo(controller);
    var experienceSticky2 = new ScrollMagic.Scene(
        {triggerElement: "#experience", duration: 320, offset: 0, triggerHook: 0})
    .setPin(".experience-wrap")
    .addTo(controller);
    var videoSticky = new ScrollMagic.Scene(
        {triggerElement: "#video", duration: 1440, offset: 0, triggerHook: 0})
    .setPin(".video-title")
    .addTo(controller);
    var videoSticky2 = new ScrollMagic.Scene(
        {triggerElement: "#video", duration: 400, offset: 0, triggerHook: 0})
    .setPin(".video-wrap")
    .addTo(controller);
    var reviewSticky = new ScrollMagic.Scene(
        {triggerElement: "#review", duration: 840, offset: 0, triggerHook: 0})
    .setPin(".review-title")
    .addTo(controller);
    var teamSticky = new ScrollMagic.Scene(
        {triggerElement: "#team", duration: 1560, offset: 0, triggerHook: 0})
    .setPin(".team-title")
    .addTo(controller);
}



$(document).ready(function($){
    if(!isMobile) {
        console.log('pc');
        pageIntro();
        exBtnScroll();
        aboutScroll();
        researchScroll();
        // goalScroll();
        equipScroll();
        targetScroll();
        spaceScroll();
        experienceScroll();
        videoScroll();        
    } else {
        $('#wrap').css('overflow','hidden');
        $('.sec-title').css('position','relative');
        $('.content').css('position','absolute');
        pageIntro();
        exBtnScroll();
        aboutScroll();
        researchScrollM();
        // goalScroll();
        equipScroll();
        targetScroll();
        spaceScrollM();
        experienceScroll();
        videoScroll();    
        mobileSticky();
    }
});


