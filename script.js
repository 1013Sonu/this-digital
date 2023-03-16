gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---



// --- ORANGE PANEL ---



// --- PURPLE/GREEN PANEL ---




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

function nav(){
  var b = document.querySelector("#box")
  // var npg = document.querySelector("#npg")
  var l1 = document.querySelector("#line1")
  var l2 = document.querySelector("#line2")
  var l3 = document.querySelector("#line3")
  
  
  flag=0
  
  b.addEventListener("click",function(){
      if (flag===0){
          npg.style.right="0%"
          l1.style.transform= "rotate(48deg)"
          l2.style.opacity = "0"
          l3.style.transform= " translateY(-13px) rotate(-48deg)"
  
          flag=1
      }
  
      else{
          npg.style.right="100%"
          l1.style.transform= "rotate(0deg)"
          l2.style.opacity = "1"
          l3.style.transform= "rotate(0deg)"
  
          flag=0
      }
  
  
  })
}
nav()

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  gsap.from("#pg2 h1,#pg2 p",{
    y:30,
    opacity:0,
    stagger:{
      amount:0.5
    },
    scrollTrigger:{
      trigger:"#pg2",
      start:"top 5o%",
      end:"bottom 0%",
      scroller:"#main"
      // markers:true,

    }
  })


  gsap.from("#pg3 #l,#pg3 #r h1,#pg3 #r p,#pg3 a,#pg3 #men,#pg3 h3 ",{
    y:30,
    opacity:0,
    stagger:{
      amount:0.5
    },
    scrollTrigger:{
      trigger:"#pg3",
      start:"top 5o%",
      end:"bottom 0%",
      scroller:"#main"

      // markers:true,

    }
  })


  gsap.from("#pg4 h1, #pg4 #b #brand>img",{
    y:30,
    opacity:0,
    stagger:{
      amount:0.5
    },
    scrollTrigger:{
      trigger:"#pg4",
      start:"top 5o%",
      end:"bottom 0%",
      scroller:"#main"

      // markers:true,

    }
  })


  gsap.from("#pg7 #end #c",{
    y:30,
    opacity:0,
    stagger:{
      amount:0.5
    },
    scrollTrigger:{
      trigger:"#pg7",
      start:"top 5o%",
      end:"bottom 0%",
      scroller:"#main"

      // markers:true,

    }
  })

  

