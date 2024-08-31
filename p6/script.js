var breakTheText = () => {
  var h1 = document.querySelector("h1");
  var h1text = h1.textContent;

  var clutter = "";

  var splitedtext = h1text.split("");
  var halfValue = splitedtext.length / 2;
  splitedtext.forEach((e, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="a">${e}</span>`;
    } else {
      clutter += `<span class="b">${e}</span>`;
    }
  });
  h1.innerHTML = clutter;
};
breakTheText();

gsap.from("h1 .a", {
  y: 70,
  opacity: 0,
  stagger: 0.15,
  delay: 0.5,
  duration: 0.8,
});
gsap.from("h1 .b", {
    y: 70,
    opacity: 0,
    stagger: -0.15,
    delay: 0.5,
    duration: 0.8,
  });
