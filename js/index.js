// Scale Animation Setup
// .to('@target', @length, {@object})

var move_tween = TweenMax.to('#move-animation', 1, {
  margin: '0px 0px 0px -350px',
  top: '150px',
  ease: Linear.easeNone
});

var changeDisplay_tween = TweenMax.to('#iterations', 1, {
  text:"This changes the text within the preview",
  ease: Linear.easeNone
});

var rotate_tween = TweenMax.to('#move-animation', 2, {
  transform: 'rotate(90deg)',
  ease: Cubic.easeOut
});


// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

var move_scene = new ScrollMagic.Scene({
  triggerElement: '#move-trigger'
})
.setTween(move_tween);

var changeText_scene = new ScrollMagic.Scene({
  triggerElement: '#change-trigger1'
})
.setTween(changeDisplay_tween)
var rotate_scene = new ScrollMagic.Scene({
  triggerElement: '#rotate-trigger'
})
.setTween(rotate_tween);

controller.addScene([
  move_scene,
  changeText_scene,
  rotate_scene
]);





