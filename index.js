// console.log(document.querySelector("body .internship ").innerHTML);
const dow=document.querySelectorAll(".internship .inte");
    
    dow.forEach(function(val){
        

        val.addEventListener("mouseenter",function (){
            val.childNodes[1].style.visibility="visible";
        })
        val.addEventListener("mouseleave",function (){
            val.childNodes[1].style.visibility="hidden";
        })
    });
    gsap.from(".about", {
        x:800,
        scrollTrigger: {
          trigger: ".about",
          scroller: "body",

          // markers:true,
          start: "top 65%",
          end: "top 45%",
          scrub : 3,
        },
      });
      const skil=document.querySelectorAll("#skills div:nth-child(even)");
      skil.forEach(function(val){
        gsap.from(val, {
            x:-900,
    
            scrollTrigger: {
              trigger: ".skills",
              scroller: "body",
            //   markers:true,
              start: "top 90%",
              end: "top 75%",
              scrub: 1,
            },
          });
      })
      const skil2=document.querySelectorAll("#skills div:nth-child(odd)");
      skil2.forEach(function(val){
        gsap.from(val, {
            x:800,
    
            scrollTrigger: {
              trigger: ".skills",
              scroller: "body",
            //   markers:true,
              start: "top 90%",
              end: "top 75%",
              scrub: 1,
            },
          });
      })
      const inte=document.querySelectorAll(".internship div:nth-child(even)");
      inte.forEach(function(val){
        gsap.from(val, {
            x:800,
            // opacity:0,
            scrollTrigger: {
              trigger: val,
              scroller: "body",
            //   markers:true,
              start: "top 90%",
              end: "top 55%",
              scrub: 1,
            },
          });
      })
      const intee=document.querySelectorAll(".internship div:nth-child(odd)");
      intee.forEach(function(val){
        gsap.from(val, {
            x:-800,
            // opacity:0,
            scrollTrigger: {
              trigger: val,
              scroller: "body",
              // markers:true,
              start: "top 90%",
              end: "top 55%",
              scrub: 1,
            },
          });
      })
      const h11=document.querySelectorAll(".hh11");
      h11.forEach(function(val){
        gsap.from(val, {
            x:-600,
            // opacity:0,
            scrollTrigger: {
              trigger: val,
              scroller: "body",
            //   markers:true,
              start: "top 60%",
              end: "top 45%",
              scrub: 1,
            },
          });
      })
      gsap.from(".form", {
        x:100,
        // opacity:0,
        scrollTrigger: {
          trigger:"form",
          scroller: "body",
        //   markers:true,
          start: "top 90%",
          end: "top 55%",
          scrub: 1,
        },
      });
      const intt2=document.querySelectorAll(".personal div:nth-child(2)");
      intt2.forEach(function(val){
        gsap.from(val, {
            x:800,
            // opacity:0,
            scrollTrigger: {
              trigger: val,
              scroller: "body",
            //   markers:true,
              start: "top 90%",
              end: "top 65%",
              scrub: 1,
            },
          });
      })
      const intt=document.querySelectorAll(".personal div:nth-child(1)");
      intt.forEach(function(val){
        gsap.from(val, {
            x:-800,
            // opacity:0,
            scrollTrigger: {
              trigger: val,
              scroller: "body",
            //   markers:true,
              start: "top 90%",
              end: "top 65%",
              scrub: 1,
            },
          });
      })