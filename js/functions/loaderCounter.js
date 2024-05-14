//reveal animation
const revealTimeline = gsap.timeline();
revealTimeline.from('.reveal', {
    scale: 0.8,
}).from('.welcome', {
    opacity: 0,
    y: 60,
    onComplete: time
})
// .fromTo('.reveal', {
//     clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
//     duration: 3
// }, {
//     clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
// }, "+=5");

const revealEndTimeline = gsap.timeline({ paused: true });
revealEndTimeline.fromTo('.reveal', {
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
    duration: 3
}, {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
}).to('.reveal', {
    display: none
});
// .fromTo('.hero', {
//     clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
//     opacity: 0
// }, {
//     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
//     // opacity: 1
// });

function time() {
    var a = 0;
    setInterval(() => {
        a = a + Math.floor(Math.random() * 20);
        if (a < 100) {
            document.getElementById("percentage").innerHTML = a + '%';
            console.log(a);
        } else {
            a = 100;
            document.getElementById("percentage").innerHTML = a + '%';
            console.log(a);
            if(a == 100) {
                console.log('Ends');
                revealEndTimeline.play();
            }
        }
    }, 150);
}