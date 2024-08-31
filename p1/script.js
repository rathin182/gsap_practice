// gsap.to("#box",{
//     y: 1500,
//     duration: 1,
//     delay: 1,
//     rotate:360,
//     borderRadius: "50%",
//     repet:1,
//     repet:-1,
//     yoyo: true
// })

// gsap.from("h1", {
//   opacity: 0,
//   backgroundColor: "red",
//   duration: 1,
//   y: 30,
//   delay: 1,
//   stagger: -1,
//   stagger: 1,
// });

// var tl = gsap.timeline();
// tl.to("#box1", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });
// tl.to("#box2", {
//   x: 1500,
//   duration: 1.5,
// });
// tl.to("#box3", {
//   x: 1500,
//   duration: 1.5,
// });


var tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:.5,
})
tl.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    delay:.5,
    stagger: .3,
})