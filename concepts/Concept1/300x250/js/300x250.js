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
	// var sRays = document.getElementById("sheet0");

  // Functions



	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Animations


  TweenLite.set(wall,  {opacity: 0, scale: 1.75, x: 112, y: 16, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.set(one,   {opacity: 0, scale: 1.75, x: 128, y: 39, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.set(woman, {opacity: 0, scale: 1.75, x: 128, y: 79, ease: Power2.easeIn, delay: 0}, 0);

  TweenLite.to([text11,text12,blue], 1, {opacity: 0,  ease: Power2.easeIn, delay: 2}, 0);
  TweenLite.to([text2,wall,woman], 1, {opacity: 1,  ease: Power2.easeIn, delay: 2}, 0);

  TweenLite.to(text2, 1, {opacity: 0,  ease: Power2.easeIn, delay: 4}, 0);
  TweenLite.to(text3, 1, {opacity: 1,  ease: Power2.easeIn, delay: 4}, 0);
  TweenLite.to(wall, 1, {opacity: 1, scale: 1.45, x: -31, y: 39, ease: Power2.easeIn, delay: 4}, 0);
  TweenLite.to(one, 1,  {opacity: 1, scale: 1,    x: -12, y: 40, ease: Power2.easeIn, delay: 4}, 0);
  TweenLite.to(woman, 1,{opacity: 1, scale: 1,    x: 0,   y: 60, ease: Power2.easeIn, delay: 4}, 0);

  TweenLite.to(text3, 1, {opacity: 0,  ease: Power2.easeIn, delay: 6}, 0);
  TweenLite.to(text4, 1, {opacity: 1,  ease: Power2.easeIn, delay: 6}, 0);
  TweenLite.to(wall, 1,  {opacity: 1, scale: 1.1,    x: 0, y: -20, ease: Power2.easeIn, delay: 6}, 0);
  TweenLite.to(one, 1,   {opacity: 1, scale: 0.67, x: -29, y: -14, ease: Power2.easeIn, delay: 6}, 0);
  TweenLite.to(woman, 1, {opacity: 1, scale: 0.66, x: -20,   y: 3, ease: Power2.easeIn, delay: 6}, 0);
  TweenLite.to([logoblock,scroll], 1, {   y: -89, ease: Power2.easeIn, delay: 6}, 0);

  TweenLite.to(text4, 1, {opacity: 0,  ease: Power2.easeIn, delay: 8}, 0);
  TweenLite.to(text5, 1, {opacity: 1,  ease: Power2.easeIn, delay: 8}, 0);

}//end
