document.addEventListener("DOMContentLoaded",()=>{
  
    
        //  mobileScreen

let mobile = gsap.matchMedia();

mobile.add("(max-width:800px)",()=>{

  let menu = document.querySelector("#menu");
  let close = document.querySelector("#close");

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

tl2.from(".para1",{
y:50,
stagger:0.4,
opacity:0,
scrollTrigger:{
    scroller:"body",
    trigger:".para1",
    scrub:2,
    start:"top 90%",
    end:"top 80%"
}
})


tl2.from(".application",{
y:50,
stagger:0.4,
opacity:0,
scrollTrigger:{
    scroller:"body",
    trigger:".application",
    scrub:2,
    start:"top 90%",
    end:"top 70%"
}
})

tl2.from(".Section3P",{
y:50,
stagger:0.4,
opacity:0,
scrollTrigger:{
    scroller:"body",
    trigger:".Section3P",
    scrub:2,
    start:"top 90%",
    end:"top 80%"
}
})


let animate = document.querySelectorAll(".p");
animate.forEach((u)=>{
     tl2.from(u,{
     scale:0,
     opacity:0,
     scrollTrigger:{
    scroller:"body",
    trigger: u,
    scrub:2,
    start:"top 90%",
    end:"top 80%"
  }
  })
})

tl2.from(".para2",{
y:50,
stagger:0.4,
opacity:0,
scrollTrigger:{
    scroller:"body",
    trigger:".para2",
    scrub:2,
    start:"top 90%",
    end:"top 80%"
}
})

let animate2 = document.querySelectorAll(".ACC");

animate2.forEach((an)=>{
  tl2.from(an,{
     scale:0.7,
     opacity:0,
     scrollTrigger:{
    scroller:"body",
    trigger: an,
    scrub:2,
    start:"top 90%",
    end:"top 80%"
  }
  })
})




})
 







})