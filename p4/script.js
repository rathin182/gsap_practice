var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
main.addEventListener("mousemove", function (e) {
  gsap.to(cursor,{
    x:e.x,
    y:e.y,
    duration:1,
    ease:"back.out(2.7)"
  })
});
