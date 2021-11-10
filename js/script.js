// var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

// jQuery(document).ready(function($){
//     if(!isMobile) {
//         console.log('pc');
//         if($(window).width() > 767){
            
//         } else if($(window).width() < 768){

//         }
//     }
// });


var webmobileScript = function(){
    TweenLite.defaultEase = Linear.easeNone;
    var controller = new ScrollMagic.Controller();

    $(document).ready(function(){
        if($(window).scrollTop() == $('#main').scrollTop()){
            // console.log($(window).scrollTop());
            // console.log($('#main').scrollTop());
            new TimelineMax()
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
                TweenMax.from(".ex-area", 1, {
                    delay: 1,
                    opacity: 0,
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
        } 
        
    })

    if($(window).width() > 767) {
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
    }


    // about animation
    var setNav1 = new ScrollMagic.Scene({
        triggerElement: "#about",
        duration: 1900,
        offset: 0,
        triggerHook: 0
    })
    .setPin(".about-title")
    .addTo(controller);

    var setAbout = new ScrollMagic.Scene({
        triggerElement: ".about-content",
        duration: 1200,
        offset: 0,
        triggerHook: 0
    })
    .setPin(".about-wrap")
    .addTo(controller);


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
        TweenMax.from(".about-top .about-left .about-text", 1, {
            delay: 0.2,
            opacity: 0,
            y: 20,
            ease: Circ.easeOut
        }),
        TweenMax.from(".about-top .about-center .about-mean", 1, {
            delay: 0.4,  
            opacity: 0,
            y: 20,
            ease: Circ.easeOut
        }),
        TweenMax.from(".about-top .about-right .about-big", 1, {
            delay: 0.8,  
            opacity: 0,
            y: 20,
            ease: Circ.easeOut
        }),
    ])

    var aboutMotionScroll = new ScrollMagic.Scene({
        triggerElement: "#about",
        offset: 0,
        duration: 800,
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
        TweenMax.from(".about-bottom .about-left .about-text", 1, {
            delay: 0.2,
            opacity: 0,
            y: 20,
            ease: Circ.easeOut
        }),
        TweenMax.from(".about-bottom .about-center .about-mean", 1, {
            delay: 0.4,  
            opacity: 0,
            y: 20,
            ease: Circ.easeOut
        }),
        TweenMax.from(".about-bottom .about-right .about-big", 1, {
            delay: 0.8,  
            opacity: 0,
            y: 20,
            ease: Circ.easeOut
        }),
    ])

    var aboutMotionScroll = new ScrollMagic.Scene({
        triggerElement: "#about",
        offset: 800,
        duration: 800,
        triggerHook: 0.3
    })
    .setTween(aboutMotion)
    .addTo(controller)



    //background animation
    var setNav2 = new ScrollMagic.Scene({
        triggerElement: "#background",
        duration: 2570,
        offset: 0,
        triggerHook: 0
    })
    .setPin(".background-title")
    .addTo(controller);

    var setBackground = new ScrollMagic.Scene({
        triggerElement: ".background-content",
        duration: 1600,
        offset: 0,
        triggerHook: 0
    })
    .setPin(".background-wrap")
    .addTo(controller);

    var bgMotion = new TimelineMax()
    .add([
        TweenMax.from(".bg-stack1", 2, {
            delay: 1,  
            x: "-100%",
            ease: Power4.easeOut
        }),
        TweenMax.from(".bg-stack2", 2, {
            delay: 1.7,  
            x: "-100%",
            ease: Power4.easeOut
        }),
        TweenMax.from(".bg-stack3", 2, {
            delay: 2.4,  
            x: "-100%",
            ease: Power4.easeOut
        }),
        TweenMax.from(".bg-stack4", 2, {
            delay: 3.1,  
            x: "-100%",
            ease: Power4.easeOut
        }),
        TweenMax.from(".bg-stack5", 2, {
            delay: 3.8,  
            x: "-100%",
            ease: Power4.easeOut
        }),
        TweenMax.from(".bg-stack6", 2, {
            delay: 4.5,  
            x: "-100%",
            ease: Power4.easeOut
        }),
    ])

    var bgMotionScroll = new ScrollMagic.Scene({
        triggerElement: "#background",
        offset: 0,
        duration: 2000,
        triggerHook: 0.5
    })
    .setTween(bgMotion)
    .addTo(controller)


    var bgText = new TweenMax.from(".bg-text", 1, {  
            y: "20",
            opacity: 0,
        })

    var bgTextScroll = new ScrollMagic.Scene({
        triggerElement: ".bg-stack6",
        offset: 0,
        triggerHook: 0.3
    })
    .setTween(bgText)
    .addTo(controller)



    
    //project animation
    var setNav3 = new ScrollMagic.Scene({
        triggerElement: "#project",
        duration: 1100,
        offset: 0,
        triggerHook: 0
    })
    .setPin(".project-title")
    .addTo(controller);

    var projectText1 = new TimelineMax()
    .add([
        TweenMax.from(".project-box:first-child .project-num", 0.6, {  
            x: "20",
            opacity: 0,
        }),
        TweenMax.from(".project-box:first-child .project-subject", 0.8, {  
            delay: 0.1,
            x: "20",
            opacity: 0,
        }),
        TweenMax.from(".project-box:first-child .project-text", 1, {  
            delay: 0.3,
            x: "20",
            opacity: 0,
        }),
        TweenMax.from(".project-box:last-child .project-num", 0.6, {  
            delay: 0.7,
            x: "-20",
            opacity: 0,
        }),
        TweenMax.from(".project-box:last-child .project-subject", 0.8, {  
            delay: 0.8,
            x: "-20",
            opacity: 0,
        }),
        TweenMax.from(".project-box:last-child .project-text", 1, {  
            delay: 1,
            x: "-20",
            opacity: 0,
        }),
    ])
    var projectTextScroll1 = new ScrollMagic.Scene({
        triggerElement: "#project",
        duration: 200,
        offset: 0,
        triggerHook: 0,
    })
    .setTween(projectText1)
    .addTo(controller)


    //keyword1 animation
    var setNav4 = new ScrollMagic.Scene({
        triggerElement: "#keyword1",
        duration: 3400,
        offset: 0,
        triggerHook: 0
    })
    .setPin(".keyword1-title")
    .addTo(controller);

    var setKeyword1 = new ScrollMagic.Scene({
        triggerElement: "#keyword1",
        duration: 300,
        offset: 540,
        triggerHook: 0
    })
    .setPin(".keyword1-list")
    .addTo(controller);

    var setKeyword1Motion = new ScrollMagic.Scene({
        triggerElement: ".keyword1-motion",
        duration: 3000,
        offset: 0,
        triggerHook: 0.3
    })
    .setPin(".keyword1-motion")
    .addTo(controller);

    var keyword1ListMotion = new TimelineMax().add([
        TweenMax.from(".keyword1-box1 .keyword1-num .line-design-bottom", 0.4, {
            width: 0,
            height: "2px",
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box1 .keyword1-item .line-design-bottom", 0.4, {
            delay: 0.4,  
            width: 0,
            height: "2px",
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box1 .keyword1-text .line-design-bottom", 1.2, {
            delay: 0.9,
            width: 0,
            height: "2px",
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box1 .keyword1-num .keyword1-inner", 0.8, {
            delay: 0.4,
            opacity: 0,
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box1 .keyword1-item .keyword1-inner", 0.8, {
            delay: 0.6,
            opacity: 0,
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box1 .keyword1-text .keyword1-inner", 0.8, {
            delay: 0.8,
            opacity: 0,
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box2 .keyword1-num .line-design-bottom", 0.4, {
            delay: 0.2,  
            width: 0,
            height: "2px",
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box2 .keyword1-item .line-design-bottom", 0.4, {
            delay: 0.6,  
            width: 0,
            height: "2px",
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box2 .keyword1-text .line-design-bottom", 1.2, {
            delay: 1.1,
            width: 0,
            height: "2px",
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box2 .keyword1-num .keyword1-inner", 0.8, {
            delay: 0.6,
            opacity: 0,
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box2 .keyword1-item .keyword1-inner", 0.8, {
            delay: 0.8,
            opacity: 0,
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box2 .keyword1-text .keyword1-inner", 0.8, {
            delay: 1,
            opacity: 0,
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box3 .keyword1-num .line-design-bottom", 0.4, {
            delay: 0.4,  
            width: 0,
            height: "2px",
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box3 .keyword1-item .line-design-bottom", 0.4, {
            delay: 0.8,  
            width: 0,
            height: "2px",
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box3 .keyword1-text .line-design-bottom", 1.2, {
            delay: 1.3,
            width: 0,
            height: "2px",
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box3 .keyword1-num .keyword1-inner", 0.8, {
            delay: 0.8,
            opacity: 0,
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box3 .keyword1-item .keyword1-inner", 0.8, {
            delay: 1,
            opacity: 0,
            ease: Power0.easeOut
        }),
        TweenMax.from(".keyword1-box3 .keyword1-text .keyword1-inner", 0.8, {
            delay: 1.2,
            opacity: 0,
            ease: Power0.easeOut
        }),
    ])

    var keyword1ListMotionScroll = new ScrollMagic.Scene({
        triggerElement: "#keyword1",
        offset: 0,
        duration: 1000,
        triggerHook: 0.5
    })
    .setTween(keyword1ListMotion)
    .addTo(controller)
    

    var keyword1ImgMotion = new TweenMax.to(".keyword1-motion img", 1, {
        left: "-700%",
        ease: Linear.easeNone
    })

    var keyword1ImgMotionScroll = new ScrollMagic.Scene({
        triggerElement: ".keyword1-motion",
        offset: 0,
        duration: 2000,
        triggerHook: 0.8
    })
    .setTween(keyword1ImgMotion)
    .addTo(controller)
    //   .addIndicators({
    //     name:"ex-btn",
    //     colorTrigger: "red",
    //     colorStart: "gray",
    //     colorEnd: "white",
    //   })



    
    //keyword2 animation
    var setNav5 = new ScrollMagic.Scene({
        triggerElement: "#keyword2",
        duration: 3000,
        offset: 0,
        triggerHook: 0
    })
    .setPin(".keyword2-title")
    .addTo(controller);


}

var widthBool;

var resizeScript = function() {
    if($(window).width() > 767) {
        console.log('pc desktop size');
        widthBool = true;
        console.log(widthBool);
        desktopScript();
        
        $(window).resize(function(){
            if($(window).width() < 768) {
                if(widthBool == true) {
                    widthBool = false;
                    console.log(widthBool);
                    // webmobileScript();

                }
            } else if($(window).width() > 767) {
                if(widthBool == false) {
                    widthBool = true;
                    console.log(widthBool); 
                    // desktopScript();
                }
            }
            
        })
    } else if ($(window).width() < 768) {
        console.log('pc mobile size');
        widthBool = true;
        webmobileScript();
        $(window).resize(function(){
            if($(window).width() < 768) {
                if(widthBool == false) {
                    widthBool = true;
                    console.log(widthBool);
                    // webmobileScript();

                }
            } else if($(window).width() > 767) {
                if(widthBool == true) {
                    widthBool = false;
                    console.log(widthBool); 
                    // desktopScript();
                }
            }
            
        })
    }

}