// Contact outer-circle stagger
var outerCircle = $("#outer-circle circle");

TweenMax.staggerTo(
  outerCircle, .1, {fill: "#F74B16", scale: 1.25, transformOrigin: "50% 50%", delay: .5}, .025
);
