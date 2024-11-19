function boost(){


    function smooth(){
        gsap.registerPlugin(ScrollTrigger);
    
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },  
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
     
     
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    
    ScrollTrigger.refresh();
    
    }
    smooth()
    
    
    
 
    
    
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    
    function files(index) {
      var data = `
       https://zelt.app/assets/img/home/hero/sequence/1.webp
    https://zelt.app/assets/img/home/hero/sequence/2.webp
    https://zelt.app/assets/img/home/hero/sequence/3.webp
    https://zelt.app/assets/img/home/hero/sequence/4.webp
    https://zelt.app/assets/img/home/hero/sequence/5.webp
    https://zelt.app/assets/img/home/hero/sequence/6.webp
    https://zelt.app/assets/img/home/hero/sequence/7.webp
    https://zelt.app/assets/img/home/hero/sequence/8.webp
    https://zelt.app/assets/img/home/hero/sequence/9.webp
    https://zelt.app/assets/img/home/hero/sequence/10.webp
    https://zelt.app/assets/img/home/hero/sequence/11.webp
    https://zelt.app/assets/img/home/hero/sequence/12.webp
    https://zelt.app/assets/img/home/hero/sequence/13.webp
    https://zelt.app/assets/img/home/hero/sequence/14.webp
    https://zelt.app/assets/img/home/hero/sequence/15.webp
    https://zelt.app/assets/img/home/hero/sequence/16.webp
    https://zelt.app/assets/img/home/hero/sequence/17.webp
    https://zelt.app/assets/img/home/hero/sequence/18.webp
    https://zelt.app/assets/img/home/hero/sequence/19.webp
    https://zelt.app/assets/img/home/hero/sequence/20.webp
    https://zelt.app/assets/img/home/hero/sequence/21.webp
    https://zelt.app/assets/img/home/hero/sequence/22.webp
    https://zelt.app/assets/img/home/hero/sequence/23.webp
    https://zelt.app/assets/img/home/hero/sequence/24.webp
    https://zelt.app/assets/img/home/hero/sequence/25.webp
    https://zelt.app/assets/img/home/hero/sequence/26.webp
    https://zelt.app/assets/img/home/hero/sequence/27.webp
    https://zelt.app/assets/img/home/hero/sequence/28.webp
    https://zelt.app/assets/img/home/hero/sequence/29.webp
    https://zelt.app/assets/img/home/hero/sequence/30.webp
    https://zelt.app/assets/img/home/hero/sequence/31.webp
    https://zelt.app/assets/img/home/hero/sequence/32.webp
    https://zelt.app/assets/img/home/hero/sequence/33.webp
    https://zelt.app/assets/img/home/hero/sequence/34.webp
    https://zelt.app/assets/img/home/hero/sequence/35.webp
    https://zelt.app/assets/img/home/hero/sequence/36.webp
    https://zelt.app/assets/img/home/hero/sequence/37.webp
    https://zelt.app/assets/img/home/hero/sequence/38.webp
    https://zelt.app/assets/img/home/hero/sequence/39.webp
    https://zelt.app/assets/img/home/hero/sequence/40.webp
    https://zelt.app/assets/img/home/hero/sequence/41.webp
    https://zelt.app/assets/img/home/hero/sequence/42.webp
    https://zelt.app/assets/img/home/hero/sequence/43.webp
    https://zelt.app/assets/img/home/hero/sequence/44.webp
    https://zelt.app/assets/img/home/hero/sequence/45.webp
    https://zelt.app/assets/img/home/hero/sequence/46.webp
    https://zelt.app/assets/img/home/hero/sequence/47.webp
    https://zelt.app/assets/img/home/hero/sequence/48.webp
    https://zelt.app/assets/img/home/hero/sequence/49.webp
    https://zelt.app/assets/img/home/hero/sequence/50.webp
    https://zelt.app/assets/img/home/hero/sequence/51.webp
    https://zelt.app/assets/img/home/hero/sequence/52.webp
    https://zelt.app/assets/img/home/hero/sequence/53.webp
    https://zelt.app/assets/img/home/hero/sequence/54.webp
    https://zelt.app/assets/img/home/hero/sequence/55.webp
    https://zelt.app/assets/img/home/hero/sequence/56.webp
    https://zelt.app/assets/img/home/hero/sequence/57.webp
    https://zelt.app/assets/img/home/hero/sequence/58.webp
    https://zelt.app/assets/img/home/hero/sequence/59.webp
    https://zelt.app/assets/img/home/hero/sequence/60.webp
    https://zelt.app/assets/img/home/hero/sequence/61.webp
    https://zelt.app/assets/img/home/hero/sequence/62.webp
    https://zelt.app/assets/img/home/hero/sequence/63.webp
    https://zelt.app/assets/img/home/hero/sequence/64.webp
    https://zelt.app/assets/img/home/hero/sequence/65.webp
    https://zelt.app/assets/img/home/hero/sequence/66.webp
    https://zelt.app/assets/img/home/hero/sequence/67.webp
    https://zelt.app/assets/img/home/hero/sequence/68.webp
    https://zelt.app/assets/img/home/hero/sequence/69.webp
    https://zelt.app/assets/img/home/hero/sequence/70.webp
    https://zelt.app/assets/img/home/hero/sequence/71.webp
    https://zelt.app/assets/img/home/hero/sequence/72.webp
    https://zelt.app/assets/img/home/hero/sequence/73.webp
    https://zelt.app/assets/img/home/hero/sequence/74.webp
    https://zelt.app/assets/img/home/hero/sequence/75.webp
    https://zelt.app/assets/img/home/hero/sequence/76.webp
    https://zelt.app/assets/img/home/hero/sequence/77.webp
    https://zelt.app/assets/img/home/hero/sequence/78.webp
    https://zelt.app/assets/img/home/hero/sequence/79.webp
    https://zelt.app/assets/img/home/hero/sequence/80.webp
    https://zelt.app/assets/img/home/hero/sequence/81.webp
    https://zelt.app/assets/img/home/hero/sequence/82.webp
    https://zelt.app/assets/img/home/hero/sequence/83.webp
    https://zelt.app/assets/img/home/hero/sequence/84.webp
    https://zelt.app/assets/img/home/hero/sequence/85.webp
    https://zelt.app/assets/img/home/hero/sequence/86.webp
    https://zelt.app/assets/img/home/hero/sequence/87.webp
    https://zelt.app/assets/img/home/hero/sequence/88.webp
    https://zelt.app/assets/img/home/hero/sequence/89.webp
    https://zelt.app/assets/img/home/hero/sequence/90.webp
    https://zelt.app/assets/img/home/hero/sequence/91.webp
    https://zelt.app/assets/img/home/hero/sequence/92.webp
    https://zelt.app/assets/img/home/hero/sequence/93.webp
    https://zelt.app/assets/img/home/hero/sequence/94.webp
    https://zelt.app/assets/img/home/hero/sequence/95.webp
    https://zelt.app/assets/img/home/hero/sequence/96.webp
    https://zelt.app/assets/img/home/hero/sequence/97.webp
    https://zelt.app/assets/img/home/hero/sequence/98.webp
    https://zelt.app/assets/img/home/hero/sequence/99.webp
    https://zelt.app/assets/img/home/hero/sequence/100.webp
    https://zelt.app/assets/img/home/hero/sequence/101.webp
    https://zelt.app/assets/img/home/hero/sequence/102.webp
    https://zelt.app/assets/img/home/hero/sequence/103.webp
    https://zelt.app/assets/img/home/hero/sequence/104.webp
    https://zelt.app/assets/img/home/hero/sequence/105.webp
    https://zelt.app/assets/img/home/hero/sequence/106.webp
    https://zelt.app/assets/img/home/hero/sequence/107.webp
    https://zelt.app/assets/img/home/hero/sequence/108.webp
    https://zelt.app/assets/img/home/hero/sequence/109.webp
    https://zelt.app/assets/img/home/hero/sequence/110.webp
    https://zelt.app/assets/img/home/hero/sequence/111.webp
    https://zelt.app/assets/img/home/hero/sequence/112.webp
    https://zelt.app/assets/img/home/hero/sequence/113.webp
    https://zelt.app/assets/img/home/hero/sequence/114.webp
    https://zelt.app/assets/img/home/hero/sequence/115.webp
    https://zelt.app/assets/img/home/hero/sequence/116.webp
    https://zelt.app/assets/img/home/hero/sequence/117.webp
    https://zelt.app/assets/img/home/hero/sequence/118.webp
     `;
      return data.split("\n")[index];
    }
    
    const frameCount = 118;
    
    const images = [];
    const imageSeq = {
      frame: 1,
    };
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
    
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#page>canvas`,
       
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });
    
    images[1].onload = render;
    
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
    
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
    
      trigger: ".page-a",
      pin: true,
 
      scroller: `#main`,
     
      start: `top top`,
      end: `600% top`,
    });
    
    
    
    
    
     
    const text = document.querySelector('.text p');
    text.innerHTML =  text.innerText.split('').map(
      (char, i) =>
        `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
    ).join('');
    
    
    }
    
    boost()
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(".b-bottom-div", {
      x: "-76%",  
      scrollTrigger: {
        trigger: ".page-b",
        pin: true,  
        start: "top top",  
        end: "bottom top", 
        scrub: 2,  
        scroller: "#main",  
      }
    });
    
     
    gsap.to(".page-c-main",{
      x: "-200%",
      scrollTrigger:{
        trigger: ".page-c",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: 3,
       
        scroller: "#main",
        
      }
    });
     
 
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"), // make sure #main exists in HTML
      smooth: true,
    });
    
 
    locoScroll.on("scroll", ScrollTrigger.update);
    
   
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
 
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
   
    gsap.registerPlugin(ScrollTrigger);
 
    gsap.to("#c-1", {
      x: "0%", // Moves the element to the left
      scrollTrigger: {
        trigger: "#c-1",
        scroller: "#main", // Locomotive Scroll container
        start: "top top",
        end: "top 50%",
        scrub: 3,
        // Smooth background color change
        scrub: 3,
        onUpdate: (self) => {
          // Smooth background color change
          gsap.to("#c-1", {
            backgroundColor: self.progress >= 0.5 ? "#FFEFBC" : "#FFEFBC",
            duration: 0.5, // Duration for smooth transition
            ease: "power1.inOut"
          });
        }
      }
    }, 's');
    
     
    gsap.to("#c1-img", {
      y:"-150%",
      x: "-90%", // Move image up
      rotate: -25,  
      scrollTrigger: {
        trigger: "#c-1", // Synchronize with #c-1 scroll position
        scroller: "#main", // Locomotive Scroll container
        start: "top 40%",
         
        rotate: '45deg',
        scrub: 3,
      }
    }, 's');
    
     
    gsap.to("#c-2", {
      x: "0%",
      scrollTrigger: {
        trigger: "#c-2",
        scroller: "#main", // use locomotive scroll container
        start: "top",
        end: "top 40%",
        scrub: 3,
        onUpdate: (self) => {
          gsap.to("#c-2", { backgroundColor: self.progress >= 0.5 ? "#736751" : "#736751", duration: 0.5, ease: "power1.inOut" });
        }
      }
    },'s1');


    gsap.to("#c2-img", {
      y:"-150%",
      x: "-90%", // Move image up
      rotate: -25,  
      scrollTrigger: {
        trigger: "#c-2", // Synchronize with #c-1 scroll position
        scroller: "#main", // Locomotive Scroll container
        start: "20% left",
        duration: 2,
        delay: 5,
        rotate: '45deg',
        scrub: 3,
      }
    }, 's1');
    
    
  
    gsap.to("#c-3", {
      x: "0%",
      scrollTrigger: {
        trigger: "#c-3",
        scroller: "#main",  
        start: "top",
        end: "top 40%",
        scrub: 3,
        onUpdate: (self) => {
          gsap.to("#c-3", { backgroundColor: self.progress >= 0.5 ? "#D4BB86" : "#D4BB86", duration: 0.5, ease: "power1.inOut" });
        }
      }
    },'s2');

    gsap.to("#c3-img", {
      y:"-150%",
      x: "-90%", // Move image up
      rotate: -25,  
      scrollTrigger: {
        trigger: "#c-3", // Synchronize with #c-1 scroll position
        scroller: "#main", // Locomotive Scroll container
        start: "90% left",
        duration: 2,
        delay: 3,
        rotate: '45deg',
        scrub: 3,
      }
    }, 's2');
    




     
 

 
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-d",
    pin: true,
    start: "top top",
    end: "bottom top",
    scrub: 2,
    scroller: "#main",
  }
});

tl.to(".d-main img",{
  // y: "50%",
  
})
.to(".d-01", {
  y: "-120%",
  x: "-130%",
  ease: "power1.inOut"
}, "start")
.to(".d-02", {
  y: "25%",
  x: "-130%",
  ease: "power1.inOut"
}, "start")
.to(".d-03", {
  y: "25%",
  x: "130%",
  ease: "power1.inOut"
}, "start")
.to(".d-04", {
  y: "-120%",
  x: "130%",
  ease: "power1.inOut"
}, "start");


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-e",
    pin: true,
    start: "top top",
    end: "bottom top",
    scrub: 2,
    scroller: "#main",
  }
})
tl.to(".e-overlay",{
  top:"-350%",
})



 
 
 


 
 
    