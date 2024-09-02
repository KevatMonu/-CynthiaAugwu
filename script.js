const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});



function FirstTimeAnim(){
  var tl = gsap.timeline();

  tl.from("#nav",{
    y: '-10',
    opacity:0,
    duration:2,
    ease: Expo.easeInOut
  })

  .to(".bounding-elem",{
   y:0,
   ease:Expo.easeInOut,
   duration:2,
   stagger:.2
  })

  .from("#hero-footer",{
   y:-10,
   opacity:0,
   duration:1.5,
   delay:-1,
   ease: Expo.easeInOut
   })
}


function circleChapt(){
  var xscale =1;
  var yscale =1;

  var xprev= 0;
  var yprev=0;

  window.addEventListener("mousemove",function(dets){
     var xdiff = dets.clientX -xprev;
     var ydiff = xprev = dets.clientX;

     xprev =dets.clientX;
     yprev =dets.clientY;
  })
}



 FirstTimeAnim();