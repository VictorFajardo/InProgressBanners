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
    {x:224,y:195,w:53,h:18},{x:277,y:195,w:65,h:18},{x:342,y:195,w:11,h:18},{x:354,y:195,w:26,h:18},{x:381,y:195,w:50,h:18}
  ];
  var whiteText=[
    {x:212,y:124,w:51,h:18},{x:263,y:124,w:49,h:18},{x:313,y:124,w:92,h:18},{x:406,y:124,w:65,h:18},{x:194,y:286,w:32,h:18},{x:226,y:286,w:34,h:18},{x:258,y:286,w:13,h:18},{x:270,y:286,w:56,h:20},{x:326,y:287,w:23,h:18},{x:350,y:285,w:39,h:18},{x:276,y:358,w:64,h:18},{x:340,y:358,w:32,h:18},{x:373,y:358,w:12,h:18},{x:385,y:361,w:26,h:18},{x:244,y:431,w:30,h:18},{x:274,y:431,w:108,h:18},{x:383,y:431,w:25,h:18},{x:407,y:431,w:30,h:18},{x:413,y:361,w:64,h:18},{x:395,y:557,w:51,h:18},{x:447,y:557,w:33,h:18},{x:480,y:560,w:33,h:18},{x:514,y:559,w:52,h:18},{x:272,y:503,w:46,h:18},{x:319,y:503,w:38,h:18},{x:356,y:503,w:12,h:18},{x:368,y:503,w:37,h:18},{x:407,y:504,w:33,h:18}
  ];
  var blackText=[
    {x:292,y:52,w:77,h:17},{x:372,y:52,w:39,h:17},{x:242,y:71,w:39,h:17},{x:280,y:70,w:10,h:17},{x:289,y:70,w:31,h:19},{x:320,y:70,w:50,h:19},{x:370,y:69,w:39,h:19},{x:409,y:69,w:30,h:19},{x:228,y:86,w:30,h:19},{x:257,y:86,w:25,h:19},{x:281,y:86,w:11,h:19},{x:290,y:88,w:39,h:18},{x:330,y:88,w:13,h:18},{x:344,y:88,w:60,h:18},{x:405,y:88,w:37,h:18},{x:442,y:88,w:19,h:18},{x:204,y:106,w:65,h:18},{x:271,y:106,w:43,h:18},{x:314,y:106,w:26,h:18},{x:341,y:107,w:26,h:18},{x:368,y:106,w:66,h:18},{x:435,y:106,w:39,h:18},{x:195,y:122,w:16,h:18},{x:470,y:123,w:21,h:18},{x:189,y:142,w:46,h:18},{x:234,y:142,w:15,h:18},{x:248,y:142,w:20,h:18},{x:267,y:142,w:28,h:18},{x:295,y:142,w:75,h:18},{x:371,y:142,w:34,h:18},{x:406,y:142,w:41,h:18},{x:446,y:142,w:23,h:18},{x:468,y:142,w:31,h:18},{x:186,y:161,w:17,h:18},{x:202,y:160,w:44,h:18},{x:247,y:160,w:33,h:18},{x:280,y:160,w:10,h:18},{x:289,y:160,w:32,h:18},{x:320,y:160,w:50,h:18},{x:370,y:160,w:38,h:18},{x:410,y:160,w:52,h:18},{x:462,y:160,w:15,h:18},{x:476,y:160,w:29,h:18},{x:181,y:179,w:21,h:18},{x:201,y:179,w:20,h:18},{x:221,y:178,w:34,h:18},{x:257,y:178,w:25,h:18},{x:281,y:178,w:11,h:18},{x:291,y:178,w:39,h:18},{x:331,y:178,w:14,h:18},{x:343,y:178,w:62,h:18},{x:405,y:178,w:38,h:18},{x:442,y:178,w:17,h:18},{x:458,y:178,w:31,h:18},{x:488,y:178,w:18,h:18},{x:175,y:196,w:48,h:18},{x:432,y:195,w:42,h:18},{x:474,y:195,w:28,h:18},{x:500,y:195,w:13,h:18},{x:171,y:216,w:19,h:18},{x:190,y:214,w:38,h:18},{x:229,y:214,w:30,h:18},{x:258,y:214,w:10,h:18},{x:269,y:214,w:25,h:18},{x:294,y:215,w:25,h:18},{x:320,y:215,w:56,h:18},{x:376,y:215,w:43,h:18},{x:420,y:215,w:23,h:18},{x:442,y:215,w:10,h:18},{x:452,y:215,w:29,h:18},{x:480,y:215,w:20,h:18},{x:499,y:215,w:20,h:18},{x:169,y:233,w:75,h:18},{x:245,y:233,w:35,h:18},{x:280,y:233,w:41,h:18},{x:320,y:233,w:24,h:18},{x:343,y:233,w:85,h:18},{x:429,y:232,w:44,h:18},{x:472,y:232,w:44,h:18},{x:176,y:252,w:39,h:18},{x:215,y:252,w:50,h:18},{x:265,y:251,w:40,h:18},{x:304,y:251,w:55,h:18},{x:358,y:251,w:14,h:18},{x:371,y:251,w:71,h:18},{x:442,y:251,w:66,h:18},{x:182,y:268,w:20,h:18},{x:201,y:268,w:39,h:18},{x:240,y:268,w:14,h:18},{x:254,y:268,w:60,h:18},{x:315,y:269,w:38,h:18},{x:352,y:269,w:17,h:18},{x:369,y:269,w:29,h:18},{x:400,y:269,w:97,h:18},{x:389,y:286,w:44,h:18},{x:432,y:286,w:27,h:18},{x:459,y:288,w:27,h:18},{x:199,y:304,w:17,h:18},{x:214,y:304,w:10,h:18},{x:223,y:304,w:25,h:18},{x:249,y:305,w:26,h:18},{x:274,y:305,w:58,h:18},{x:331,y:305,w:43,h:18},{x:374,y:305,w:24,h:18},{x:396,y:305,w:12,h:18},{x:408,y:306,w:28,h:18},{x:436,y:306,w:19,h:18},{x:456,y:306,w:26,h:18},{x:201,y:324,w:26,h:18},{x:226,y:323,w:35,h:18},{x:261,y:323,w:41,h:18},{x:302,y:323,w:23,h:18},{x:324,y:324,w:82,h:18},{x:408,y:323,w:46,h:18},{x:454,y:323,w:29,h:18},{x:203,y:341,w:19,h:18},{x:221,y:341,w:39,h:18},{x:260,y:341,w:55,h:18},{x:314,y:341,w:14,h:18},{x:327,y:341,w:69,h:18},{x:398,y:341,w:83,h:18},{x:212,y:358,w:64,h:18},{x:210,y:378,w:15,h:18},{x:224,y:377,w:58,h:18},{x:284,y:378,w:64,h:18},{x:349,y:377,w:43,h:18},{x:392,y:377,w:27,h:18},{x:419,y:379,w:27,h:18},{x:445,y:379,w:27,h:18},{x:205,y:395,w:19,h:18},{x:223,y:395,w:26,h:18},{x:249,y:397,w:26,h:18},{x:276,y:396,w:56,h:18},{x:332,y:396,w:43,h:18},{x:374,y:396,w:25,h:18},{x:397,y:396,w:11,h:18},{x:408,y:397,w:28,h:18},{x:436,y:397,w:19,h:18},{x:456,y:397,w:22,h:18},{x:209,y:413,w:22,h:18},{x:232,y:413,w:30,h:18},{x:262,y:413,w:40,h:18},{x:302,y:413,w:23,h:18},{x:324,y:413,w:84,h:18},{x:411,y:413,w:42,h:18},{x:454,y:413,w:25,h:18},{x:249,y:450,w:42,h:18},{x:293,y:450,w:34,h:18},{x:325,y:450,w:12,h:18},{x:337,y:450,w:47,h:18},{x:383,y:450,w:38,h:18},{x:421,y:449,w:16,h:18},{x:248,y:468,w:14,h:18},{x:262,y:468,w:27,h:18},{x:288,y:468,w:11,h:18},{x:298,y:469,w:45,h:18},{x:342,y:469,w:20,h:18},{x:363,y:468,w:31,h:18},{x:396,y:468,w:42,h:18},{x:236,y:486,w:42,h:18},{x:278,y:486,w:28,h:18},{x:306,y:486,w:39,h:18},{x:346,y:486,w:27,h:18},{x:373,y:487,w:52,h:18},{x:426,y:486,w:22,h:18},{x:214,y:505,w:57,h:18},{x:442,y:503,w:33,h:18},{x:183,y:524,w:28,h:18},{x:211,y:523,w:51,h:18},{x:263,y:522,w:38,h:18},{x:302,y:522,w:31,h:18},{x:331,y:522,w:12,h:18},{x:342,y:523,w:64,h:18},{x:407,y:523,w:44,h:18},{x:451,y:522,w:56,h:18},{x:152,y:541,w:39,h:18},{x:189,y:541,w:21,h:18},{x:211,y:541,w:26,h:18},{x:236,y:541,w:57,h:18},{x:293,y:540,w:36,h:18},{x:327,y:540,w:12,h:18},{x:337,y:540,w:46,h:18},{x:384,y:540,w:37,h:18},{x:423,y:540,w:44,h:18},{x:466,y:540,w:28,h:18},{x:494,y:540,w:38,h:18},{x:122,y:558,w:29,h:18},{x:149,y:558,w:24,h:18},{x:171,y:558,w:48,h:18},{x:220,y:558,w:42,h:18},{x:262,y:558,w:27,h:18},{x:288,y:558,w:11,h:18},{x:288,y:558,w:11,h:18},{x:342,y:559,w:20,h:18},{x:364,y:558,w:30,h:18},{x:298,y:559,w:45,h:18},{x:83,y:577,w:25,h:18},{x:108,y:577,w:54,h:18},{x:160,y:577,w:16,h:18},{x:176,y:577,w:69,h:18},{x:247,y:577,w:16,h:18},{x:264,y:577,w:28,h:18},{x:291,y:576,w:52,h:18},{x:344,y:576,w:43,h:18},{x:388,y:577,w:54,h:18},{x:442,y:577,w:26,h:18},{x:468,y:577,w:42,h:18},{x:509,y:577,w:29,h:18},{x:537,y:577,w:54,h:18}
  ];
  
  var params = {
    loopTime: 2.5,
    aniTime: 1.2,
    delay: 2,
    scale: 2,
    centerX: 335,
    centerY: 204,
    f: 1,
    counter: 0,
    prev: 0,
    mask: 370,
    loops: 1
  }
  var nodes = [];
  
  blackText = blackText.sort(function() { return .5 - Math.random(); });
  var matrix = [].concat(whiteText, blackText.slice(0, whiteText.length));
  matrix = matrix.sort(function() { return .5 - Math.random(); });
  matrix = [].concat(matrix, blackText.slice(whiteText.length));
  matrix = [].concat(introText, matrix);
  introLabels = ['How','did', 'this', 'happen?'];
  
  matrix.forEach(function(point, i) {
    var el = document.createElement('div');
    var cX = 0 + point.x + (point.w) / 2;
    var cY = 0 + point.y + (point.h) / 2;
    el.id = 'point-' + i;
    el.className = i < introText.length ? 'intro' : 'words';
    el.style.left = cX + 'px';
    el.style.top = cY + 'px';
    el.style.height = point.h + 'px';
    el.style.width = point.w + 'px';
    el.dataset.x = (cX - params.centerX) * params.f;
    el.dataset.y = (cY - params.centerY) * params.f;
    el.dataset.inix =  point.w / 2;
    el.dataset.iniy = point.h / 2;
    el.style.backgroundPositionX = -point.x-0 + 'px';
    el.style.backgroundPositionY = -point.y-0 + 'px';
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

  // Animations
  TweenLite.set(params, { onComplete: movingMask, delay: 0 }, 0);
  nodes.forEach(function (el, i, arr) {
    TweenLite.set(el, { x: (el.dataset.x - el.dataset.inix), y: (el.dataset.y - el.dataset.iniy), opacity: 0, scale: params.scale, delay: 0 }, 0);
    if (i < introText.length) {
      TweenLite.to(el, params.aniTime, { opacity: 1, ease: Power1.easeOut, delay: 0 }, 0);
    }
    TweenLite.to(el, params.aniTime, { x: - el.dataset.inix, y: - el.dataset.iniy, scale: 1, opacity: i < introText.length ? .65 : 1, transformOrigin: "50% 50%", force3D: true, rotationZ: "0.1deg", translateZ: -100, ease: Power1.easeOut, delay: params.delay + i * (params.loopTime / arr.length) }, 0);
  });
  TweenLite.to(bgCanvas, 2.5, { opacity: .2, ease: Power0.easeNone, delay: 3 }, 0);
  TweenLite.to(container, 3, { x: -94, y: -59, ease: Power2.easeOut, delay: 2 }, 0);
  TweenLite.to(container, 1, { scale: .4582, ease: Power0.easeNone, delay: 2 }, 0);
  TweenLite.to(text1, 1, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 4.4 }, 0);
  TweenLite.to(text1, 1, { opacity: 0, ease: Power2.easeOut, delay: 6.5 }, 0);
  TweenLite.to(text2, 1, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 7 }, 0);
  TweenLite.to(params, 3, { mask: 0, ease: Power0.easeNone, onUpdate: movingMask, delay: 6.6 }, 0);
  TweenLite.to([bgCanvas, maskCanvas], 3, { x: -9, y: 15, scale: .75, ease: Power2.easeOut, delay: 6.6 }, 0);
  TweenLite.to(container, 3, { x: -103, y: -44, scale: .4142, ease: Power2.easeOut, delay: 6.6 }, 0);
  TweenLite.to([text1, text2], .5, { opacity: 0, ease: Power2.easeOut, delay: 11 }, 0);
  TweenLite.to(text3, 1, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 11.5 }, 0);
  TweenLite.set(cta, {opacity: 1, scale: .1, delay: 12}, 0);
  TweenLite.to(cta, 1, {scale: 1, ease: Back.easeOut, delay: 12}, 0);
  TweenLite.to(text4, 1, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 13 }, 0);
  TweenLite.to([text5, pfizer], 1, { opacity: 1, ease: Power2.easeOut, delay: 13 }, 0);
  TweenLite.set(params, { loop: 1, delay: 15 }, 0);

}//end