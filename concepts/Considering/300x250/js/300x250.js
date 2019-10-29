window.onload = function() {

  // Definitions
  var clickarea = document.getElementById("click-area");

  // Functions

	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Animations

  TweenLite.to(square1, .5, {x: -255, ease: Power2.easeOut, delay: .5}, 0);
  TweenLite.to(square2, .5, {x: 330, ease: Power2.easeOut, delay: .5}, 0);
  TweenLite.to(text1, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 1}, 0);

  TweenLite.to(text1, .5, {opacity: 0, x: 0, ease: Power2.easeOut, delay: 3.5}, 0);
  TweenLite.to(square1, .5, {x: 0, ease: Power2.easeOut, delay: 3.75}, 0);
  TweenLite.to(square2, .5, {x: 0, ease: Power2.easeOut, delay: 3.75}, 0);
  TweenLite.to(bg1, 1, {opacity: 0, delay: 3.75}, 0);
  //
  TweenLite.to(square1, .5, {x: -261, ease: Power2.easeOut, delay: 4.25}, 0);
  TweenLite.to(square2, .5, {x: 320, ease: Power2.easeOut, delay: 4.25}, 0);
  TweenLite.to(text2, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 4.5}, 0);
  //
  TweenLite.to(text2, .5, {opacity: 0, x: 0, ease: Power2.easeOut, delay: 8}, 0);
  TweenLite.to(isi, .5, {y: -118, ease: Power2.easeOut, delay: 8.25}, 0);
  TweenLite.to(uc, .5, {y: 17, ease: Power2.easeOut, delay: 8.25}, 0);
  TweenLite.to(square1, .5, {x: 0, ease: Power2.easeOut, delay: 8.25}, 0);
  TweenLite.to(square2, .5, {x: 0, ease: Power2.easeOut, delay: 8.25}, 0);
  TweenLite.to(bg3, .5, {opacity: 1, ease: Power2.easeOut, delay: 8.25}, 0);
  TweenLite.to([xeljanz, available], 1, {opacity: 1, ease: Power2.easeOut, delay: 8.75}, 0);
  TweenLite.to(text3, .5, {opacity: 1, ease: Power2.easeOut, delay: 9}, 0);
  //
  TweenLite.to(text3, .5, {opacity: 0, ease: Power2.easeOut, delay: 11.5}, 0);
  TweenLite.to(text4, .5, {opacity: 1, ease: Power2.easeOut, delay: 11.5}, 0);
  TweenLite.to(hand_pill, 1.25, {x: -106,  ease: Power2.easeOut, delay: 11.75}, 0);
  TweenLite.to(text4, .5, {opacity: 0, ease: Power2.easeOut, delay: 14}, 0);
  TweenLite.to(text5, .5, {opacity: 1, ease: Power2.easeOut, delay: 14}, 0);
  TweenLite.set(cta, {opacity: 1, delay: 14.5}, 0);
  TweenLite.to(cta, .5, {scale: 1, ease: Back.easeOut, delay: 14.5}, 0);

}//end
