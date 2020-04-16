window.onload = function() {

  // Definitions
  var clickarea = document.getElementById("click-area");

  // Functions
	cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Canvas
  var bgCanvas = document.getElementById("bg-canvas");
  var bgCtx = bgCanvas.getContext("2d");
  var maskCanvas = document.getElementById("mask-canvas");
  var maskCtx = maskCanvas.getContext("2d");
  var img = new Image();
  var shape = new Image();
  var mask = new Image();
  img.src = 'img/img.jpg';
  shape.src = 'img/shape.png';
  mask.src = 'img/mask.png';
  img.onload = function() { imagesLoaded(); }
  shape.onload = function() { imagesLoaded(); }
  mask.onload = function() { imagesLoaded(); }
  var loadedImageCount = 0;
  function imagesLoaded() {
    loadedImageCount++;
    if (loadedImageCount == 3) {
      bgCtx.drawImage(img, 0, 0, 370, 331);
      bgCtx.globalCompositeOperation = 'destination-in';
      bgCtx.drawImage(shape, 0, 0, 370, 331);
    }
  }
  
  var introText=[
    {x:236,y:259,w:196,h:15}
  ];
  // var whiteText=[
    
  // ];
  var blackText=[
    {x:346,y:204,w:146,h:18},{x:285,y:54,w:122,h:13},{x:252,y:66,w:51,h:15},{x:303,y:66,w:130,h:14},{x:233,y:80,w:126,h:17},{x:358,y:82,w:110,h:16},{x:205,y:97,w:165,h:13},{x:371,y:98,w:96,h:11},{x:174,y:110,w:132,h:9},{x:308,y:110,w:83,h:9},{x:396,y:110,w:70,h:9},{x:189,y:119,w:276,h:11},{x:183,y:130,w:130,h:15},{x:314,y:130,w:119,h:14},{x:433,y:130,w:56,h:14},{x:179,y:145,w:122,h:14},{x:307,y:143,w:64,h:20},{x:373,y:144,w:125,h:15},{x:180,y:160,w:131,h:14},{x:313,y:162,w:187,h:13},{x:153,y:174,w:153,h:11},{x:308,y:173,w:95,h:16},{x:404,y:175,w:92,h:16},{x:141,y:186,w:169,h:16},{x:313,y:190,w:175,h:14},{x:136,y:205,w:209,h:21},{x:157,y:226,w:100,h:17},{x:257,y:227,w:96,h:14},{x:356,y:222,w:128,h:12},{x:358,y:234,w:140,h:14},{x:154,y:244,w:205,h:14},{x:366,y:248,w:149,h:11},{x:164,y:261,w:70,h:13},{x:433,y:259,w:95,h:17},{x:171,y:274,w:141,h:16},{x:312,y:276,w:102,h:11},{x:414,y:275,w:109,h:12},{x:167,y:290,w:151,h:14},{x:318,y:289,w:93,h:14},{x:412,y:286,w:104,h:19},{x:167,y:307,w:70,h:22},{x:237,y:305,w:67,h:11},{x:304,y:305,w:113,h:11},{x:418,y:304,w:100,h:11},{x:239,y:315,w:262,h:12},{x:197,y:329,w:158,h:12},{x:357,y:326,w:132,h:18},{x:194,y:342,w:196,h:9},{x:390,y:344,w:86,h:12},{x:194,y:351,w:180,h:18},{x:373,y:355,w:101,h:13},{x:200,y:368,w:85,h:14},{x:292,y:368,w:85,h:12},{x:378,y:369,w:103,h:12},{x:201,y:382,w:130,h:13},{x:330,y:382,w:133,h:14},{x:214,y:397,w:132,h:11},{x:347,y:396,w:132,h:14},{x:219,y:409,w:147,h:15},{x:367,y:409,w:109,h:17},{x:239,y:425,w:177,h:17},{x:419,y:425,w:72,h:17},{x:247,y:445,w:61,h:19},{x:317,y:443,w:170,h:10},{x:308,y:452,w:188,h:13},{x:242,y:465,w:163,h:16},{x:406,y:466,w:86,h:13},{x:231,y:481,w:152,h:16},{x:385,y:481,w:116,h:19},{x:208,y:497,w:189,h:15},{x:400,y:499,w:97,h:15},{x:202,y:511,w:146,h:15},{x:349,y:513,w:190,h:18},{x:198,y:526,w:149,h:13},{x:353,y:529,w:46,h:15},{x:402,y:529,w:153,h:15},{x:143,y:541,w:208,h:18},{x:353,y:544,w:128,h:14},{x:481,y:543,w:147,h:17},{x:88,y:559,w:196,h:13},{x:283,y:559,w:174,h:12},{x:458,y:562,w:198,h:23},{x:59,y:574,w:86,h:24},{x:146,y:572,w:142,h:15},{x:290,y:570,w:160,h:17},{x:146,y:586,w:119,h:12},{x:265,y:586,w:110,h:12},{x:375,y:586,w:235,h:12},{x:610,y:584,w:50,h:14}
  ];
  var svgs=[
    '<i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195.1 20.7"><text transform="translate(0 14.417)" fill="currentColor" font-family="Arial" font-weight="bold" font-size="16.805">How do I move forward?</text></svg></i>',
    '<i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 21.6"><text transform="translate(0 15.014)" fill="currentColor" font-family="Arial" font-weight="bold" font-size="17.5">I feel speechless.</text></svg></i>'
  ]
  
  
  var params = {
    loopTime: 5.2,
    aniTime: 1.2,
    delay: 1.6,
    scale: 2,
    counter: 0,
    prev: 0,
    mask: 370,
    loop: 1
  }
  var nodes = [];
  
  // var matrix = [].concat(introText, [].concat(whiteText, blackText.sort(function() { return .5 - Math.random(); })));
  var matrix = [].concat(introText, blackText.sort(function() { return .5 - Math.random(); }));
  
  matrix.forEach(function(point, i) {
    var el = document.createElement('div');
    var cX = 0 + point.x + (point.w) / 2;
    var cY = 0 + point.y + (point.h) / 2;
    el.id = 'point-' + i;
    // el.className = i < introText.length + whiteText.length ? 'intro' : 'words';
    el.className = i < introText.length ? 'intro' : 'words';
    // el.className = 'words';
    if (i < introText.length) el.innerHTML = svgs[i]
    el.style.left = cX + 'px';
    el.style.top = cY + 'px';
    el.style.height = point.h + 'px';
    el.style.width = point.w + 'px';
    el.dataset.x = cX;
    el.dataset.y = cY;
    el.dataset.inix =  point.w / 2;
    el.dataset.iniy = point.h / 2;
    el.style.backgroundPositionX = -point.x + 'px';
    el.style.backgroundPositionY = -point.y + 'px';
    nodes.push(el);
    document.getElementById('container').appendChild(el);
  });

  function movingMask() {
    maskCtx.save();
    maskCtx.drawImage(img, 0, 0, 370, 331);
    maskCtx.globalCompositeOperation = 'destination-in';
    maskCtx.drawImage(shape, 0, 0, 370, 331);
    maskCtx.globalCompositeOperation = 'destination-out';
    maskCtx.drawImage(mask, params.mask, 0, 370, 331);
    maskCtx.beginPath();
    maskCtx.rect(0, 0, params.mask + 2, 331);
    maskCtx.fill();
    maskCtx.closePath();
    maskCtx.restore();
  }

  function randomValue() {
    return 25 * ( Math.random() * 4 + 1 ) * ( Math.random() < 0.5 ? -1 : 1 );
  }

    // Animations
  TweenLite.set(params, { onComplete: movingMask, delay: 0 }, 0);
  nodes.forEach(function (el, i, arr) {
    if (i < introText.length) {
      TweenLite.set(el, { x: 63, y: 30, opacity: 0, scale: 2.75, delay: 0 }, 0);
      TweenLite.to(el, params.aniTime, { opacity: 1, ease: Power1.easeOut, delay: 0 }, 0);
      TweenLite.to(el, params.aniTime, { color: '#e8dcdb', ease: Power1.easeIn, delay: params.delay + i * (params.loopTime / arr.length) + 2 }, 0);
    // } else if (i >= introText.length && i < introText.length + whiteText.length) {
    //   TweenLite.set(el, { x: 265, y: -220, opacity: 0, scale: 2.75, delay: 0 }, 0);
    //   TweenLite.to(el, params.aniTime, { opacity: 1, ease: Power1.easeOut, delay: params.aniTime / 2 }, 0);
    //   TweenLite.to(el, params.aniTime, { color: '#002157', ease: Power1.easeIn, delay: params.delay + i * (params.loopTime / arr.length) + 2}, 0);
    } else {
      TweenLite.set(el, { x: randomValue() - el.dataset.inix , y: randomValue() - el.dataset.iniy, opacity: 0, scale: Math.random() * 2 + 2, delay: 0 }, 0);
    }
    TweenLite.to(el, params.aniTime, { x: -el.dataset.inix, y: -el.dataset.iniy, scale: 1, opacity: 1, transformOrigin: "50% 50%", force3D: true, rotationZ: "0.1deg", translateZ: -100, ease: Power1.easeOut, delay: params.delay + i * (params.loopTime / arr.length) }, 0);
  });
  TweenLite.to(bgCanvas, 1, { opacity: .2, ease: Power0.easeNone, delay: 7 }, 0);
  TweenLite.to(text1, 1, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 6 }, 0);
  TweenLite.to([bgCanvas, maskCanvas], 5.5, { x: -14, y: 4, scale: .74, transformOrigin: "50% 50%", force3D: true, rotationZ: "0.1deg", translateZ: -100, ease: Power2.easeOut, delay: 8 }, 0);
  TweenLite.to(container, 5.5, { x: -13, y: 4, scale: .408, transformOrigin: "50% 50%", force3D: true, rotationZ: "0.1deg", translateZ: -100, ease: Power2.easeOut, delay: 8 }, 0);
  TweenLite.to(params, 3, { mask: 0, ease: Power0.easeNone, onUpdate: movingMask, delay: 8 }, 0);
  TweenLite.to(text1, 1, { opacity: 0, ease: Power2.easeOut, delay: 9 }, 0);
  TweenLite.to(text2, 1, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 10 }, 0);
  TweenLite.to([text1, text2], .5, { opacity: 0, ease: Power2.easeOut, delay: 12.5 }, 0);
  TweenLite.to(text3, 1, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 13 }, 0);
  TweenLite.to(cta, 1, {scale: 1, ease: Back.easeOut, delay: 13.5}, 0);
  TweenLite.to(text4, 1, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 14 }, 0);
  TweenLite.to([text5, pfizer], 1, { opacity: 1, ease: Power2.easeOut, delay: 14 }, 0);

}//end