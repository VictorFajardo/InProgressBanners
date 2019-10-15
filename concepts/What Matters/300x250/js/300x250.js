window.onload = function() {

  // Definitions
  // var clickarea = document.getElementById("click-area");

  // Functions

	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Animations

  TweenLite.to(img1, .5, {opacity: 1, ease: Power3.easeOut, delay: .5}, 0);
  TweenLite.to(text1a, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 1}, 0);
  TweenLite.to(text1b, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 1.25}, 0);
  TweenLite.to(yes, .5, {opacity: 1, ease: Power2.easeOut, delay: .5}, 0);
  TweenLite.to(no, .5, {opacity: 1, ease: Power2.easeOut, delay: .75}, 0);
  TweenLite.to(yes, .5, {width: 46.5, height: 21.5, ease: Power2.easeOut, delay: 1.75}, 0);
  
  TweenLite.to([text1a, text1b, yes, no], .75, {opacity: 0, ease: Power3.easeOut, delay: 3.5}, 0); 
  TweenLite.to([bg1, img1, img2, pylon], 1.5, {x: -166, ease: Power2.easeOut, delay: 3.5}, 0);
  TweenLite.to(text2a, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 3.5}, 0);
  TweenLite.to(text2b, .5, {opacity: 1, x: 6, ease: Power2.easeOut, delay: 3.75}, 0);
  TweenLite.to(img2, .5, {opacity: 1, ease: Power3.easeOut, delay: 4.5}, 0);
  //
  TweenLite.to(img2, .75, {opacity: 0, ease: Power3.easeOut, delay: 7.5}, 0);
  TweenLite.to([text2a, text2b], .75, {opacity: 0, ease: Power3.easeOut, delay: 7.5}, 0); 
  TweenLite.to(img3, .75, {opacity: 1, ease: Power3.easeOut, delay: 7.5}, 0);
  TweenLite.to(text3, .75, {opacity: 1, x: 6, ease: Power3.easeOut, delay: 7.5}, 0);

  TweenLite.to([img3, pylon], .5, {opacity: 0, ease: Power2.easeOut, delay: 11.5}, 0);
  TweenLite.to(bg1, 1.2, {y: 202, x:-191, ease: Power2.easeOut, delay: 11.5}, 0);
  TweenLite.to([ img3, pylon], 1, {y: 100, ease: Power2.easeOut, delay: 11.5}, 0);
  TweenLite.to(isi, .25, {y: -118, ease: Power2.easeOut, delay: 11.5}, 0);
  TweenLite.to(text4, .5, {opacity: 1, ease: Power2.easeOut, delay: 12.25}, 0);
  TweenLite.to(text4, .5, {opacity: 0, ease: Power2.easeOut, delay: 14}, 0);


  TweenLite.to([xeljanz, available], 1, {opacity: 1, ease: Power2.easeOut, delay: 14}, 0);
  TweenLite.to(text5, .5, {opacity: 1, ease: Power2.easeOut, delay: 14.25}, 0);
  TweenLite.to(cta, .5, {opacity: 1, ease: Power2.easeOut, delay: 14.5}, 0);
  // TweenLite.to(cta, .5, {scale: 1, ease: Back.easeOut, delay: 14.5}, 0);

  // TweenLite.to(website, .75, {y: -250, ease: Power1.easeInOut, delay: 13}, 0);
  // TweenLite.to(thumb, 1.5, {rotation: 20, ease: Power3.easeOut, delay: 13}, 0);
 /* TweenLite.to(thumb, .5, {rotation: 0, ease: Power3.easeOut, delay: 14.5}, 0);*/

}//end
