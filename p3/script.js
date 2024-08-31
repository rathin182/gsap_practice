var Path = "M 10 250 Q 500 250 990 250"

var finalPath = "M 10 250 Q 500 250 990 250"

var string = document.querySelector("#string")

string.addEventListener("mousemove",(e)=>{
    var Path = `M 10 250 Q ${e.x} ${e.y} 990 250`
    gsap.to("svg path",{
        attr:{d:Path},
        duration: 0.2,
        ease:"power3.out"

    })
})
string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration: 1,
        ease:"elastic.out(1,0.2)"
    })
})