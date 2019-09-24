window.onload = function() {

  // Definitions
   var clickarea = document.getElementById("click-area");
  var wall = document.getElementById("wall");
  var one = document.getElementById("one");
  var blue = document.getElementById("blue");
  var woman = document.getElementById("woman");
  var text11 = document.getElementById("text11");
  var text12 = document.getElementById("text12");
  var text2 = document.getElementById("text2");
  var text3 = document.getElementById("text3");
  var text4 = document.getElementById("text4");
  var text5 = document.getElementById("text5");
  var logoblock = document.getElementById("logo-block");
  var scroll = document.getElementById("scroll");
  var scrollwrapper = document.getElementById("scroll-wrapper");
	// var sRays = document.getElementById("sheet0");

  // Functions



	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Animations

  TweenLite.set(wall,  {opacity: 1, scale: 1, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.set(woman, {opacity: 0, scale: 1.05, x: -10, y:0, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.set(text3, {opacity: 0, x: 0, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.set(text2, {opacity: 0, x: -10, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.set(text11, {opacity: 0, x: 0, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.to(text11, 0.75, {opacity: 1, x:0, ease: Power2.easeOut, delay: 0}, 0);

  TweenLite.to([text11,blue], 1, {opacity: 0, ease: Power2.easeIn, delay: 3.5-1}, 0);
  TweenLite.to(wall, .50, {opacity: 1,  ease: Power2.easeOut, delay: 2.9}, 0);
  TweenLite.to(woman, .50, {opacity: 1, ease: Power0.easeNone, delay: 2.9}, 0);
  TweenLite.to(text2, .75, {opacity: 1, x:0, ease: Power2.easeOut, delay: 3.2}, 0);

  TweenLite.to(text2, 1, {opacity: 0,  ease: Power2.easeIn, delay: 6-0.5}, 0);
  TweenLite.to(text3, 1, {opacity: 1,  ease: Power2.easeInOut, delay: 6}, 0);
  TweenLite.to(wall, 1, {opacity: 1, ease: Power2.easeInOut, delay: 6}, 0);
  TweenLite.to(one, 1,  {opacity: 0, x: 4, y: 0, ease: Power2.easeInOut, delay: 6}, 0);
  TweenLite.to(woman, 1,{opacity: 1, ease: Power2.easeInOut, delay: 6}, 0);

  // TweenLite.to(text3, 1, {opacity: 0,  ease: Power2.easeIn, delay: 11-0.5, x:200}, 0);
  TweenLite.to(text3, 1, {opacity: 0,  ease: Power2.easeIn, delay: 11-0.5}, 0);
  TweenLite.to(logo, 1, {opacity: 1,  ease: Power2.easeIn, delay: 10.5+0.25}, 0);
  TweenLite.to(text5, 1, {opacity: 1,  ease: Power2.easeIn, delay: 10.5+0.25}, 0);
TweenLite.to(woman, 1, {opacity: 1, scale: .60, x: 30, y: -7, ease: Power2.easeInOut, delay: 6}, 0);
  TweenLite.to(one, 1,   {opacity: 1, ease: Power2.easeInOut, delay: 6.3}, 0);


  TweenLite.to(scroll, 1, {x: -190, ease: Power2.easeInOut, delay: 11}, 0);
  TweenLite.to(logoblock, 1, {y:-45, ease: Power2.easeInOut, delay: 11}, 0);

  TweenLite.to(text5, 1, {opacity: 0,  ease: Power2.easeIn, delay: 14}, 0);
  TweenLite.to(text4, 1, {opacity: 1,  ease: Power2.easeIn, delay: 14}, 0);

  TweenLite.to(scrollwrapper, 3, { scrollTop: 75, ease: Power0.easeNone, delay: 11}, 0);

  // TweenLite.to(scrollwrapper, 3.75, {scrollTop: 50, ease: Power1.easeIn, delay: 11}, 0);
  // TweenLite.to(scrollwrapper, 0.15, {scrollTop: 0,  ease: Power2.easeIn, delay: 14.85}, 0);

}//end
