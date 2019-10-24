window.onload = function() {

  // Definitions
  // var clickarea = document.getElementById("click-area");
  var isitop = document.getElementById("isi-top");

  // Functions

	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Animations

  TweenLite.to(img1, .5, {opacity: 1, ease: Power3.easeOut, delay: .5}, 0);
  TweenLite.to(text1a, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 1}, 0);
  TweenLite.to(text1b, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 1.25}, 0);
  TweenLite.to(yes, .5, {opacity: 1, ease: Power2.easeOut, delay: 1.75}, 0);
  TweenLite.to(no, .5, {opacity: 1, ease: Power2.easeOut, delay: 2}, 0);
  TweenLite.to(yes, .25, {scale: 1.2, className: "shadow", ease: Power2.easeOut, delay: 2.25}, 0);
  
  TweenLite.to([text1a, text1b, yes, no], .75, {opacity: 0, ease: Power3.easeOut, delay: 3.5}, 0); 
  TweenLite.to([bg1, img1, img2], 1.5, {x: -67, ease: Power2.easeOut, delay: 3.5}, 0);
  TweenLite.to(text2a, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 3.5}, 0);
  TweenLite.to(text2b, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 3.75}, 0);
  TweenLite.to(img2, .5, {opacity: 1, ease: Power3.easeOut, delay: 4.5}, 0);
  //
  TweenLite.set(img1, {opacity: 0, delay: 6}, 0);
  TweenLite.to(img2, .75, {opacity: 0, ease: Power3.easeOut, delay: 6}, 0);
  TweenLite.to([text2a, text2b], .75, {opacity: 0, ease: Power3.easeOut, delay: 6}, 0); 
  TweenLite.to(img3, .75, {opacity: 1, ease: Power3.easeOut, delay: 6}, 0);
  TweenLite.to(text3, .75, {opacity: 1, x: 6, ease: Power3.easeOut, delay: 6}, 0);

  TweenLite.to(img3, .5, {opacity: 0, ease: Power2.easeOut, delay: 8.5}, 0);
  // TweenLite.to(bg1, 1.2, {x: -120, y: 188, ease: Power2.easeOut, delay: 8.5}, 0);
  // TweenLite.to(img3, 1, {y: 172, ease: Power2.easeOut, delay: 8.5}, 0);
  TweenLite.to(text3, .25, {opacity: 0, ease: Power2.easeOut, delay: 8.5}, 0);
  TweenLite.to(white, .25, {width: 438, ease: Power2.easeOut, delay: 8.5}, 0);
  TweenLite.set(uc, {y: 11, ease: Power2.easeOut, delay: 8.75}, 0);
  TweenLite.set(bg1, {x: -120, y: 168, ease: Power2.easeOut, delay: 8.75}, 0);
  TweenLite.to(bg1, .75, {y: 188, ease: Power2.easeOut, delay: 8.75}, 0);
  TweenLite.to(white, .25, {opacity: 0, ease: Power2.easeOut, delay: 8.75}, 0);
  TweenLite.to(isi, .25, {x: -288, ease: Power2.easeOut, delay: 8.5}, 0);
  TweenLite.to(isitop, .25, {y: -13, ease: Power2.easeOut, delay: 8.75}, 0);
  TweenLite.to([text4, xeljanz, available], .5, {opacity: 1, ease: Power2.easeOut, delay: 9.5}, 0);
  
  TweenLite.to(text4, .5, {opacity: 0, ease: Power2.easeOut, delay: 14}, 0);
  TweenLite.to(text5, .5, {opacity: 1, ease: Power2.easeOut, delay: 14.25}, 0);
  TweenLite.to(cta, .5, {opacity: 1, ease: Power2.easeOut, delay: 14.5}, 0);

}//end
