var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});



function golaMouseFollow(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".gola").style.transform = `translate(${dets.clientX}px ,${dets.clientY}px) scale(${xscale} ,${yscale})`;
    });
}

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
   delay :-1,
   stagger:0.2
  })

  .from("#hero-footer",{
   y:-10,
   opacity:0,
   duration:1.5,
   delay:-1,
   ease: Expo.easeInOut
   });
}


function golaSkew(){
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove",function(dets){

    clearTimeout(timeout);

    xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
    yscale =gsap.utils.clamp(.8,1.2,dets.clientY - yprev);
   
     xprev =dets.clientX;
     yprev =dets.clientY;

     golaMouseFollow(xscale,yscale);
     
     timeout = setTimeout(function () {
      document.querySelector(
        ".gola"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}


function ImgAnim(){
  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    var gola = document.querySelector(".gola");
    
    elem.addEventListener("mouseenter", function () {

      gsap.to(document.querySelector(".gola"), {
        width: "70px",
        height: "70px",
        ease: Power3,
        duration: 0.5,
        backgroundColor: "rgb(235 229 229 / 81%)"
      });

      gola.innerHTML = "view";
      gola.style.display = "flex";        
      gola.style.justifyContent = "center";   
      gola.style.alignItems = "center"; 
      gola.style.color = "black"; 
    });


    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });

      gola.innerHTML = "";
      
      gsap.to(document.querySelector(".gola"), {
        width: "10px",
        height: "10px",
        ease: Power3,
        duration: 0.3,
        backgroundColor: "#fff",
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });

  });
}

function HoverElem(){
  document.querySelectorAll("#hoverh1").forEach(function (text){
    text.addEventListener('mouseenter', () => {
      gsap.to(text, { x: '2vw', duration: 0.6 });
    });

    text.addEventListener('mouseleave', () => {
      gsap.to(text, { x: '0vw', duration: 0.6 });
    });
  })
}

HoverElem();
golaMouseFollow();
FirstTimeAnim();
golaSkew(); 
ImgAnim()