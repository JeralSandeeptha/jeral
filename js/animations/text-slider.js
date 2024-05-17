//register plugin
gsap.registerPlugin(ScrollTrigger);
console.log(ScrollTrigger);

//name animation
// Define the timeline
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".text-slider",
      start: "top 7%", // Pin starts when the top of the trigger element hits the top of the viewport
      end: "+=2000", // Pin ends when the end of the trigger element reaches 1000px from the start
      pin: true, // Pin the element
      scrub: 1, // Smoothly scrub the animation
    //   markers: true
    }
  });
 
// Add animation to the timeline
tl.to(".text-slider .text-slider-inner .text-slider-inner-text", { x: -1700, duration: 2 });