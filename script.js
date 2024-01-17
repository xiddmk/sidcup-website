

var crsr = document.querySelector("#cursor")
var blurr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (oye) {
    crsr.style.left = oye.x + "px";
    crsr.style.top = oye.y + "px";
    blurr.style.left = oye.x - 150 + "px";
    blurr.style.top = oye.y - 150 + "px";
})







gsap.to("#nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "80px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10px",
        ends: "end -11px",
        scrub: 2

    }
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "end -100%",
        scrub: 2

    }
})


gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})


gsap.from(".card", {
    scale: 0,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 100%",
        end: "top 55%",
        scrub: 3
    }
})


gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 55%",
        scrub: 2
    }
})

gsap.from("#colon2", {
    y: 40,
    x: 30,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 80%",
        end: "top 55%",
        scrub: 2
    }
})


