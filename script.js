document.addEventListener("DOMContentLoaded",()=>{

// circle cursor

let box = document.querySelector(".box");
let  body= document.querySelector("body");


body.addEventListener("mousemove",(der)=>{
        gsap.to(box,{
          x:der.clientX + window.scrollX,
          y:der.clientY + window.scrollY,
        });
        
      });




                            //  Type.js

  var typed = new Typed('#element', {
      strings: ['I edit stories.', ' That people can feel.'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });



// hoverEffect

let contactIcons = document.querySelectorAll(".blue");

contactIcons.forEach((icons)=>{
icons.addEventListener("mouseover",()=>{
   icons.style.color = "red";
   icons.style.cursor = "pointer";
   icons.style.transform = "scale(1.2)";
   icons.style.transform = "0.3s";
})

icons.addEventListener("mouseout",()=>{
   icons.style.color = "rgb(90, 233, 212)";
   icons.style.cursor = "pointer";
   icons.style.transform = "scale(1)";
   icons.style.transform = "0.3s";
})
})


//  making div clickable
let instaIcon = document.querySelector(".insta");
let x = document.querySelector(".x");
let portfolioBtn = document.querySelector("#PortfolioButton");

instaIcon.addEventListener("click",()=>{
    window.location.href = "https://www.instagram.com/vizualuxe_?igsh=dHdpNzV1eXlieDRp";
})

x.addEventListener("click",()=>{
   window.location.href = "https://x.com/vizualuxe__";
})

portfolioBtn.addEventListener("click",()=>{
   window.location.href = "portfolio.Html";
});
      

                                    // faq section 

let allDetails = document.querySelectorAll(".sixSec details");

allDetails.forEach((detail)=>{
  detail.addEventListener("toggle",()=>{
    if(detail.open)
    {
      allDetails.forEach((el)=>{
        if(el !== detail)
          el.removeAttribute("open");
      })
    }
  })
})


            // DesktopScreen

let desktop = gsap.matchMedia();
desktop.add("(min-width:801px)",()=>{

let tl3 = gsap.timeline();

tl3.from(".herop1",
  {
  y:60,
  opacity:0,
  duration:0.4
})


tl3.from(".herop2",
  {
   y:60,
  opacity:0,
  duration:0.4
  }
)

tl3.from(".hero-right",
  {
  opacity:0,
  duration:0.7
  }
)

tl3.from(".infoPara",
  {
  y:60,
  stagger:1,
  opacity:0,
  scrollTrigger:
  {
     trigger:".infoPara",
     scroller:"body",
     scrub:2,
     start:"top 90%",
     end:"top 65%"
  }
  }
)

tl3.from(".applications",
  {
  y:60,
  stagger:1,
  opacity:0,
  scrollTrigger:
  {
     trigger:".applications",
     scroller:"body",
     scrub:2,
     start:"top 90%",
     end:"top 75%"
  }
  }
)


tl3.from(".serviceTextRow1",
  {
  y:60,
  opacity:0,
  scrollTrigger:
  {
     trigger:".serviceTextRow1",
     scroller:"body",
     scrub:2,
     start:"top 90%",
     end:"top 75%"
  }
  }
)

tl3.from(".serviceTextRow2",
  {
  y:60,
  opacity:0,
  scrollTrigger:
  {
     trigger:".serviceTextRow2",
     scroller:"body",
     scrub:2,
     start:"top 90%",
     end:"top 75%"
  }
  }
)

tl3.from(".myCreations",
  {
  y:60,
  opacity:0,
  scrollTrigger:
  {
     trigger:".myCreations",
     scroller:"body",
     scrub:2,
     start:"top 90%",
     end:"top 75%"
  }
  }
)

tl3.from(".infoPortfolioDetail",
  {
  y:60,
  opacity:0,
  scrollTrigger:
  {
     trigger:".infoPortfolioDetail",
     scroller:"body",
     scrub:2,
     start:"top 90%",
     end:"top 75%"
  }
  }
)

tl3.from(".fourthSecText",
  {
  y:60,
  opacity:0,
  stagger:0.7,
  scrollTrigger:
  {
     trigger:".fourthSecText",
     scroller:"body",
     scrub:2,
     start:"top 90%",
     end:"top 75%"
  }
  }
)


tl3.from(".pakage",
  {
  y:60,
  opacity:0,
  stagger:0.7,
  scrollTrigger:
  {
     trigger:".pakage",
     scroller:"body",
     scrub:2,
     start:"top 90%",
     end:"top 75%"
  }
  }
)

tl3.from(".fifthSecText",
  {
  y:60,
  opacity:0,
  stagger:0.7,
  scrollTrigger:
  {
     trigger:".fifthSecText",
     scroller:"body",
     scrub:2,
     start:"top 90%",
     end:"top 75%"
  }
  }
)


tl3.from(".chooseMeBox",
  {
  y:60,
  opacity:0,
  scale:0.4,
  scrollTrigger:
  {
     trigger:".chooseMeBox",
     scroller:"body",
     scrub:2,
     start:"top 90%",
     end:"top 80%"
  }
  }
)

tl3.from(".FAQ",
  {
  y:60,
  opacity:0,
  scrollTrigger:
  {
     trigger:".FAQ",
     scroller:"body",
     scrub:2,
     start:"top 90%",
     end:"top 80%"
  }
  }
)

tl3.from(".sixSec details",
  {
  stagger:0.8,
  opacity:0,
  scrollTrigger:
  {
     trigger:".sixSec details",
     scroller:"body",
     scrub:2,
     start:"top 90%",
     end:"top 80%"
  }
  }
)





})

        //  mobileScreen

let mobile = gsap.matchMedia();

mobile.add("(max-width:800px)",()=>{

  let menu = document.querySelector("#menu");
  let close = document.querySelector("#close")

let tl1 = gsap.timeline();

tl1.to(".navItems",
  {
    x:"100vw",
    duration:0.7
  }
)

tl1.from(".items",
  {
    x:30,
    stagger:0.3,
    opacity:0
  }
)

tl1.from("#close",
{
     x:20,
     opacity:0
})


tl1.pause();

menu.addEventListener("click",()=>{
  tl1.play();
})

close.addEventListener("click",()=>{
  tl1.reverse();
})





let tl2 = gsap.timeline();

tl2.from(".blue",
  {
    y:30,
    opacity:0,
    stagger:0.2
  }
)

tl2.from(".herop1",
  {
    y:50,
    opacity:0,
    duration:0.3
  
})

tl2.from(".herop2",
  {
    y:50,
    opacity:0,
    duration:0.3
})


tl2.from(".infoPara",
  {
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".infoPara",
      scrub:2,
      start:"top 90%",
      end:"top 50%"
    }
  }
)

tl2.from(".applications",
  {
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".applications",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)

tl2.from(".serviceText",
  {
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".serviceText",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)

tl2.from(".serviceText1",
  {
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".serviceText1",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)

tl2.from(".serviceText2",
  {
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".serviceText2",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)

tl2.from(".serviceText3",
  {
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".serviceText3",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)

tl2.from(".serviceText4",
  {
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".serviceText4",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)

tl2.from(".serviceText5",
  {
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".serviceText5",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)


tl2.from(".serviceText6",
  {
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".serviceText6",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)

tl2.from(".thirdSecText",
  {
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".thirdSecText",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)

tl2.from(".fourthSecText",
  {
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".fourthSecText",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)

tl2.from(".pakageA",
  {
    y:60,
    opacity:0,
    scale:0.8,
    scrollTrigger:{
      scroller:"body",
      trigger:".pakageA",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)

tl2.from(".pakageB",
  {
    y:60,
    opacity:0,
    scale:0.8,
    scrollTrigger:{
      scroller:"body",
      trigger:".pakageB",
      scrub:3,
      start:"top 90%",
      end:"top 80%"
    }
  }
)

tl2.from(".pakageC",
  {
    y:60,
    opacity:0,
    scale:0.8,
    scrollTrigger:{
      scroller:"body",
      trigger:".pakageC",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)


tl2.from(".fifthSecText",
  {
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".fifthSecText",
      scrub:2,
      start:"top 90%",
      end:"top 80%"
    }
  }
)


tl2.from(".chooseMeBox1",
  {
    y:60,
     scale:0.5,
    duration:0.3,
    scrollTrigger:{
      scroller:"body",
      trigger:".chooseMeBox1",
      scrub:3,
      start:"top 95%",
      end:"top 90%"
    }
  }
)

tl2.from(".chooseMeBox2",
  {
    y:60,
    scale:0.5,
    scrollTrigger:{
      scroller:"body",
      trigger:".chooseMeBox2",
      scrub:3,
      start:"top 95%",
      end:"top 90%"
    }
  }
)

tl2.from(".chooseMeBox3",
  {
    y:60,
     scale:0.5,
    scrollTrigger:{
      scroller:"body",
      trigger:".chooseMeBox3",
      scrub:3,
      start:"top 95%",
      end:"top 90%"
    }
  }
)

tl2.from(".faq details",
  {
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:"body",
      trigger:".faq details",
      scrub:3,
      start:"top 95%",
      end:"top 90%"
    }
  }
)




return()=>{
  tl1.kill();
  tl2.kill();
};
})






















    
})