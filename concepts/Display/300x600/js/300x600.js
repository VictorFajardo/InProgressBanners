window.onload = function() {

  // Definitions
 var clickarea = document.getElementById("click-area");
  var one = document.getElementById("one");
  var blue = document.getElementById("blue");
  var woman = document.getElementById("woman");
  var text11 = document.getElementById("text11");
  var text12 = document.getElementById("text12");
  var text2 = document.getElementById("text2");
  var text3 = document.getElementById("text3");
  var text4 = document.getElementById("text4");
  var logoblock = document.getElementById("logo-block");
  var logo = document.getElementById("logo");
  var scroll = document.getElementById("scroll");
  var scrollwrapper = document.getElementById("scroll-wrapper");
	// var sRays = document.getElementById("sheet0");

  // Functions
	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Animations

  TweenLite.set(bg,    {opacity: 1, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.set(one,   {opacity: 0, scale: 1.75, x: 38, y: 39, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.set(woman, {opacity: 0, x: 50, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.set(text3, {opacity: 0, x: 0, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.set(text2, {opacity: 0, x: -50, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.set(text11, {opacity: 0, x: -50, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.set(text12, {opacity: 0, x: 50, ease: Power2.easeIn, delay: 0}, 0);

  TweenLite.to([text11,text12], 0.75, {opacity: 1, x: 0, ease: Power2.easeOut, delay: 0}, 0);

  TweenLite.to([text11,text12,blue], 1, {opacity: 0, ease: Power2.easeIn, delay: 3.5-1}, 0);
  TweenLite.to(bg, 1, {opacity: 1,  ease: Power2.easeOut, delay: 3.5}, 0);
  TweenLite.to(woman, 1, {opacity: 1, x: 0, ease: Power2.easeOut, delay: 3.5}, 0);
  TweenLite.to(text2, 1.25, {opacity: 1, x: 0, ease: Power2.easeOut, delay: 3.5}, 0);

  TweenLite.to(text2, 1, {opacity: 0,  ease: Power2.easeIn, delay: 7-0.5}, 0);
  TweenLite.to(text3, 1, {opacity: 1,  ease: Power2.easeIn, delay: 7+0.5}, 0);
  TweenLite.to(text4, 1, {opacity: 1,  ease: Power2.easeIn, delay: 7+1, x: 0}, 0);

  TweenLite.to(logo, 1, {opacity: 1,  ease: Power2.easeIn, delay: 6.5+0.25}, 0);
  TweenLite.to(one, 1,   {opacity: 1, scale: 0.70, x: 2, y: -82, ease: Power2.easeInOut, delay: 7}, 0);
  TweenLite.to(woman, 1, {opacity: 1, scale: .54, x: 5, y: -14, ease: Power2.easeInOut, delay: 7}, 0);
  TweenLite.to([scroll, logoblock], 1, {y: -102, ease: Power2.easeInOut, delay: 7}, 0);

  TweenLite.to(scrollwrapper, 7, {scrollTop: 28, ease: Power0.easeNone, delay: 7+1}, 0);

}//end
