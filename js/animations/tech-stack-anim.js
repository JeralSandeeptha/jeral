gsap.registerPlugin(ScrollTrigger);

const techStack = $('.tech-stack');
const techStackInner = $('.tech-stack');
const sections = gsap.utils.toArray(".stack");
console.log(sections);

gsap.to('.tech-stack-inner', {
    x: "-100%",
    scrollTrigger: {
        trigger: ".tech-stack",
        start: "top top",
        // end: "bottom 0% ",
        end: "bottom -100% ",
        pin: true,
        scrub: 1,
        markers: true
    }
});