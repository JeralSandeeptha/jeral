//register plugin
gsap.registerPlugin(ScrollTrigger);
console.log(ScrollTrigger);

//name animation
// Define the timeline
// var tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".profile-section",
//       start: "top 50%", // Pin starts when the top of the trigger element hits the top of the viewport
//       end: "+=1000", // Pin ends when the end of the trigger element reaches 1000px from the start
//       pin: true, // Pin the element
//       scrub: true, // Smoothly scrub the animation
//       markers: true
//     }
//   });

  // Add animation to the timeline
//   tl.from(".profile-para", { opacity: 0, x: 2000, duration: 1 });