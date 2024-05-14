//register plugin
gsap.registerPlugin(ScrollTrigger);
console.log(ScrollTrigger);

//name animation
gsap.to('.name-container-inner', {
    x: -150,
    scrollTrigger: {
        trigger: ".name-container",
        start: "top 80%",
        end: "top 20%",
        scrub: 3,
        // markers: true
    }
});

//areas of work animation for text
gsap.from('.content .letter h5', {
    opacity: 0,
    y: 50,
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".areas-of-work",
        start: "top 80%",
        end: "top 20%",
        scrub: 3,
    }
});

//projects animation
gsap.fromTo('.project', {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
}, {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    stagger: 0.75,
    duration: 1,
    scrollTrigger: {
        trigger: ".featured",
        start: "top 50%",
        end: "top 20%",
        scrub: 3,
    }
});

//areas of work animation for text
// gsap.fromTo('.', {
//     clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
// }, {
//     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
//     stagger: 0.75,
//     duration: 1,
//     scrollTrigger: {
//         trigger: ".",
//         start: "top 50%",
//         end: "top 20%",
//         scrub: 3,
//     }
// });