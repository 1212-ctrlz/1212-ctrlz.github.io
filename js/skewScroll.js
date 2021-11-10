import * as smoothScrollbar from "https://cdn.skypack.dev/smooth-scrollbar@8.6.3";

gsap.registerPlugin(ScrollTrigger);



function setup() {

  console.log('setup')

  // setup smooth scroll
  const options = {damping: 0.05}
  const scroll = smoothScrollbar.default.init(
    document.querySelector('#space'), 
    options
  )

  // setup scroll proxy
  scroll.addListener(() => {
    ScrollTrigger.update()
  });

  ScrollTrigger.scrollerProxy("#space", {
    scrollTop(value) {
      return scroll.offset.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  });


  //
//   const imageCon = document.getElementById('imageCon')
//   const image = document.getElementById('image')
//   const text = document.getElementById('text')
  const imageCon = $('.space-pic')
  const image = $('.space-pic img')
  const text = $('.space-title-box')

  gsap.fromTo(imageCon, {
    x: 0,
  }, {
    x: (imageCon.offsetWidth * -1) + window.innerWidth,
    scrollTrigger: {
      scroller: '#scroll-wrapper',
      trigger: imageCon,
      scrub: 0.1,
    }
  })

  gsap.fromTo(image, {
    scale: 1,
  }, {
    scale: 1.5,
    scrollTrigger: {
      scroller: '#scroll-wrapper',
      trigger: imageCon,
      scrub: 0.1,
    }
  })

  gsap.fromTo(text, {
    xPercent: 0,
  }, {
    xPercent: -50,
    scrollTrigger: {
      scroller: '#scroll-wrapper',
      trigger: imageCon,
      scrub: 0.1
    }
  })


  scroll.addListener(() => {
    let skew = scroll._momentum.y * 0.06;

    gsap.to(text, {
      skewX: skew
    })

  });

}


window.addEventListener('resize', setup); 
setup()
