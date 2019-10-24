window.onload = function() {

  // Definitions
  // var clickarea = document.getElementById("click-area");

  // Functions

	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Animations

  TweenLite.to(img1, .5, {opacity: 1, ease: Power3.easeOut, delay: .5}, 0);
  TweenLite.to(text1a, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 1}, 0);
  TweenLite.to(text1b, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 1.15}, 0);
  TweenLite.to(text1c, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 1.3}, 0);
  TweenLite.to(text1d, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 1.45}, 0);
  TweenLite.to(yes, .5, {opacity: 1, ease: Power2.easeOut, delay: 1.95}, 0);
  TweenLite.to(no, .5, {opacity: 1, ease: Power2.easeOut, delay: 2}, 0);
  TweenLite.to(yes, .25, {scale: 1.32, className: "shadow", ease: Power2.easeOut, delay: 2.25}, 0);
  
  TweenLite.to([text1a, text1b, text1c, text1d, yes, no], .75, {opacity: 0, ease: Power3.easeOut, delay: 3.5}, 0); 
  TweenLite.to([bg1, img1, img2], 1.5, {x: -271, ease: Power2.easeOut, delay: 3.5}, 0);
  TweenLite.to(text2a, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 3.5}, 0);
  TweenLite.to(text2b, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 3.65}, 0);
  TweenLite.to(text2c, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 3.7}, 0);
  TweenLite.to(text2d, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 3.85}, 0);
  TweenLite.to(text2e, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 4}, 0);
  TweenLite.to(text2f, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 4.15}, 0);
  TweenLite.to(img2, .5, {opacity: 1, ease: Power3.easeOut, delay: 4.5}, 0);
  //
  TweenLite.to(img2, .75, {opacity: 0, ease: Power3.easeOut, delay: 6}, 0);
  TweenLite.to([text2a, text2b, text2c, text2d, text2e, text2f], .75, {opacity: 0, ease: Power3.easeOut, delay: 6}, 0); 
  TweenLite.to(img3, .75, {opacity: 1, ease: Power3.easeOut, delay: 6}, 0);
  TweenLite.to(text3a, .75, {opacity: 1, x: 6, ease: Power3.easeOut, delay: 6}, 0);
  TweenLite.to(text3b, .75, {opacity: 1, x: 6, ease: Power3.easeOut, delay: 6.15}, 0);
  TweenLite.to(text3c, .75, {opacity: 1, x: 6, ease: Power3.easeOut, delay: 6.30}, 0);

  TweenLite.to([img3], .5, {opacity: 0, ease: Power2.easeOut, delay: 8.5}, 0);
  TweenLite.to(bg1, 1.2, {y: 264, x:-273, ease: Power2.easeOut, delay: 8.5}, 0);
  TweenLite.to([img3], 1, {y: 172, ease: Power2.easeOut, delay: 8.5}, 0);
  TweenLite.to(isi, .25, {y: -243, ease: Power2.easeOut, delay: 8.5}, 0);
  TweenLite.to(white, .25, {height: 243, ease: Power2.easeOut, delay: 8.5}, 0);
  TweenLite.to([text4, xeljanz, available], .5, {opacity: 1, ease: Power2.easeOut, delay: 9.5}, 0);

  TweenLite.to(text4, .5, {opacity: 0, ease: Power2.easeOut, delay: 14}, 0);
  TweenLite.to(text5, .5, {opacity: 1, ease: Power2.easeOut, delay: 14.25}, 0);
  TweenLite.to(cta, .5, {opacity: 1, ease: Power2.easeOut, delay: 14.5}, 0);

}//end
