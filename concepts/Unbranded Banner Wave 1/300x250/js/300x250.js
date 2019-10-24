window.onload = function() {

  // Definitions
  // var clickarea = document.getElementById("click-area");

  // Functions

	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Canvas
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var bgCanvas = document.getElementById("bg-canvas");
  var bgCtx = bgCanvas.getContext("2d");
  var img = new Image();
  var text = new Image();
  var mask = new Image();
  text.src = 'img/text.png';
  img.src = 'img/img.jpg';
  mask.src = 'img/mask.png';
  text.onload = function() {
    imagesLoaded();
  }
  img.onload = function() {
    imagesLoaded();
  }
  mask.onload = function() {
    imagesLoaded();
  }
  var loadedImageCount = 0;
  function imagesLoaded() {
    loadedImageCount++;
    if (loadedImageCount == 3) {
      console.log('all images loaded!')
      bgCtx.drawImage(img, 0, 0, 670, 578);
      bgCtx.globalCompositeOperation = 'destination-in';
      bgCtx.drawImage(mask, 0, 0, 670, 578);
      animations();
      // print();
    }
  }
  ctx.font='bold 21.6px Arial';
  ctx.fillStyle = "white";

  var params = {
    counter: 0,
    numbers: [0],
    factor: 0,
    prev: 0,
    intro: 4,
    height: 23
  };
  
  var introText=[
    {x:221,y:275,w:51,h:23},{x:274,y:275,w:36,h:23},{x:312,y:275,w:42,h:23},{x:355,y:275,w:93,h:23}
  ];
  var whiteText=[
    {x:231,y:68,w:10,h:23},{x:243,y:68,w:42,h:23},{x:286,y:68,w:30,h:23},{x:317,y:68,w:65,h:23},{x:241,y:130,w:50,h:23},{x:292,y:130,w:50,h:23},{x:343,y:130,w:74,h:23},{x:310,y:171,w:93,h:23},{x:272,y:171,w:36,h:23},{x:233,y:171,w:36,h:23},{x:173,y:171,w:59,h:23},{x:272,y:213,w:71,h:23},{x:345,y:213,w:37,h:23},{x:382,y:213,w:13,h:23},{x:395,y:213,w:29,h:23},{x:428,y:213,w:80,h:23},{x:449,y:275,w:56,h:23},{x:371,y:336,w:49,h:23},{x:424,y:336,w:43,h:21},{x:243,y:378,w:59,h:23},{x:303,y:378,w:63,h:23},{x:368,y:378,w:39,h:23},{x:405,y:378,w:18,h:23},{x:294,y:419,w:46,h:23},{x:343,y:419,w:55,h:23},{x:399,y:419,w:19,h:23},{x:227,y:417,w:34,h:23},{x:225,y:439,w:34,h:21},{x:367,y:458,w:15,h:23},{x:381,y:458,w:43,h:23},{x:425,y:458,w:30,h:23},{x:455,y:458,w:30,h:23},{x:145,y:480,w:66,h:23},{x:213,y:480,w:37,h:23},{x:250,y:480,w:13,h:23},{x:264,y:480,w:30,h:23},{x:296,y:480,w:81,h:23},{x:433,y:500,w:60,h:23},{x:494,y:500,w:37,h:23},{x:534,y:500,w:34,h:23},{x:54,y:520,w:69,h:23},{x:381,y:522,w:49,h:23},{x:434,y:522,w:40,h:23},{x:476,y:522,w:12,h:23},{x:489,y:522,w:42,h:23},{x:534,y:522,w:36,h:23},{x:161,y:563,w:47,h:23},{x:210,y:563,w:56,h:23},{x:266,y:563,w:32,h:23},{x:299,y:563,w:118,h:23}
  ];
  var blackText=[
    {x:249,y:25,w:37,h:21},{x:287,y:25,w:43,h:21},{x:332,y:25,w:47,h:21},{x:381,y:25,w:16,h:21},{x:217,y:48,w:80,h:21},{x:299,y:48,w:52,h:21},{x:353,y:48,w:30,h:21},{x:384,y:48,w:14,h:21},{x:400,y:48,w:24,h:21},{x:425,y:48,w:13,h:21},{x:196,y:67,w:31,h:21},{x:386,y:67,w:80,h:21},{x:175,y:89,w:24,h:21},{x:200,y:89,w:58,h:21},{x:260,y:89,w:45,h:21},{x:305,y:89,w:35,h:21},{x:340,y:89,w:11,h:21},{x:350,y:89,w:29,h:21},{x:379,y:89,w:30,h:21},{x:410,y:89,w:52,h:21},{x:461,y:89,w:12,h:21},{x:160,y:110,w:25,h:21},{x:194,y:110,w:15,h:21},{x:168,y:110,w:25,h:21},{x:209,y:110,w:20,h:21},{x:231,y:110,w:30,h:21},{x:261,y:110,w:86,h:21},{x:349,y:110,w:37,h:21},{x:349,y:110,w:37,h:21},{x:387,y:110,w:11,h:21},{x:398,y:110,w:59,h:21},{x:460,y:110,w:28,h:21},{x:142,y:130,w:34,h:21},{x:177,y:130,w:22,h:21},{x:200,y:130,w:38,h:21},{x:419,y:130,w:41,h:21},{x:461,y:130,w:18,h:21},{x:480,y:130,w:18,h:21},{x:130,y:152,w:24,h:21},{x:156,y:152,w:49,h:21},{x:208,y:152,w:50,h:21},{x:262,y:152,w:51,h:21},{x:316,y:152,w:14,h:21},{x:333,y:152,w:21,h:21},{x:357,y:152,w:32,h:21},{x:391,y:152,w:90,h:21},{x:485,y:152,w:25,h:21},{x:108,y:172,w:63,h:21},{x:403,y:172,w:63,h:21},{x:466,y:172,w:30,h:21},{x:497,y:172,w:17,h:21},{x:111,y:193,w:34,h:21},{x:148,y:193,w:29,h:21},{x:178,y:193,w:62,h:21},{x:243,y:193,w:46,h:21},{x:291,y:193,w:26,h:21},{x:318,y:193,w:10,h:21},{x:328,y:193,w:32,h:21},{x:362,y:193,w:20,h:21},{x:384,y:193,w:29,h:21},{x:414,y:193,w:63,h:21},{x:478,y:193,w:38,h:21},{x:118,y:212,w:38,h:21},{x:155,y:212,w:11,h:21},{x:166,y:212,w:59,h:21},{x:227,y:212,w:42,h:21},{x:509,y:212,w:13,h:21},{x:127,y:235,w:32,h:21},{x:161,y:235,w:28,h:21},{x:190,y:235,w:9,h:21},{x:200,y:235,w:43,h:21},{x:245,y:235,w:14,h:21},{x:260,y:235,w:69,h:21},{x:330,y:235,w:42,h:21},{x:373,y:235,w:17,h:21},{x:391,y:235,w:33,h:21},{x:426,y:235,w:89,h:21},{x:142,y:254,w:43,h:21},{x:165,y:254,w:15,h:21},{x:180,y:254,w:69,h:21},{x:251,y:254,w:48,h:21},{x:300,y:254,w:30,h:21},{x:329,y:254,w:13,h:21},{x:341,y:254,w:50,h:21},{x:393,y:254,w:20,h:21},{x:415,y:254,w:34,h:21},{x:451,y:254,w:42,h:21},{x:493,y:254,w:15,h:21},{x:170,y:274,w:48,h:21},{x:179,y:297,w:29,h:21},{x:208,y:297,w:21,h:21},{x:230,y:297,w:31,h:21},{x:262,y:297,w:85,h:21},{x:348,y:297,w:39,h:21},{x:387,y:297,w:11,h:21},{x:398,y:297,w:59,h:21},{x:458,y:297,w:31,h:21},{x:186,y:317,w:53,h:21},{x:241,y:317,w:28,h:21},{x:269,y:317,w:11,h:21},{x:279,y:317,w:45,h:21},{x:325,y:317,w:14,h:21},{x:341,y:317,w:67,h:21},{x:410,y:317,w:43,h:21},{x:452,y:317,w:25,h:21},{x:195,y:336,w:39,h:21},{x:235,y:336,w:9,h:21},{x:245,y:336,w:42,h:21},{x:288,y:336,w:14,h:21},{x:302,y:336,w:66,h:21},{x:245,y:358,w:16,h:21},{x:261,y:358,w:65,h:21},{x:328,y:358,w:75,h:21},{x:404,y:358,w:21,h:21},{x:246,y:400,w:15,h:21},{x:262,y:400,w:85,h:21},{x:348,y:400,w:49,h:21},{x:398,y:400,w:22,h:21},{x:235,y:419,w:56,h:21},{x:262,y:439,w:28,h:21},{x:290,y:439,w:10,h:21},{x:301,y:439,w:43,h:21},{x:346,y:439,w:13,h:21},{x:361,y:439,w:67,h:21},{x:428,y:439,w:18,h:21},{x:177,y:462,w:29,h:21},{x:206,y:462,w:29,h:21},{x:234,y:462,w:11,h:21},{x:244,y:462,w:42,h:21},{x:288,y:462,w:14,h:21},{x:302,y:462,w:66,h:21},{x:368,y:462,w:13,h:21},{x:381,y:462,w:44,h:21},{x:425,y:462,w:30,h:21},{x:456,y:462,w:30,h:21},{x:379,y:482,w:61,h:21},{x:441,y:482,w:30,h:21},{x:472,y:482,w:44,h:21},{x:517,y:482,w:28,h:21},{x:92,y:503,w:41,h:21},{x:134,y:503,w:62,h:21},{x:198,y:503,w:50,h:21},{x:248,y:503,w:26,h:21},{x:273,y:503,w:11,h:21},{x:285,y:503,w:32,h:21},{x:318,y:503,w:21,h:21},{x:340,y:503,w:30,h:21},{x:370,y:503,w:62,h:21},{x:125,y:524,w:38,h:21},{x:164,y:524,w:10,h:21},{x:175,y:524,w:50,h:21},{x:225,y:524,w:14,h:21},{x:240,y:524,w:21,h:21},{x:261,y:524,w:31,h:21},{x:293,y:524,w:84,h:21},{x:572,y:524,w:43,h:21},{x:44,y:544,w:37,h:21},{x:83,y:544,w:28,h:21},{x:113,y:544,w:75,h:21},{x:189,y:544,w:58,h:21},{x:249,y:544,w:39,h:21},{x:288,y:544,w:11,h:21},{x:298,y:544,w:57,h:21},{x:359,y:544,w:44,h:21},{x:404,y:544,w:37,h:21},{x:442,y:544,w:11,h:21},{x:453,y:544,w:52,h:21},{x:506,y:544,w:43,h:21},{x:551,y:544,w:48,h:21},{x:601,y:544,w:27,h:21},{x:36,y:565,w:62,h:21},{x:96,y:565,w:23,h:21},{x:119,y:565,w:39,h:21},{x:421,y:565,w:39,h:21},{x:462,y:565,w:18,h:21},{x:481,y:565,w:34,h:21},{x:515,y:565,w:102,h:21}
  ];
  
  blackText = blackText.sort(function() { return .5 - Math.random(); });
  var matrix = [].concat(whiteText, blackText.slice(0, whiteText.length));
  matrix = matrix.sort(function() { return .5 - Math.random(); });
  matrix = [].concat(matrix, blackText.slice(whiteText.length));
  matrix = [].concat(introText, matrix);

  /* Development Functions */
/*   var point = {x:410,y:316,w:190,h:21};
  
  function print() {
    inPoint.value = JSON.stringify(point);
    ctx.clearRect(0, 0, 670, 578);
    ctx.globalAlpha = 1;
    ctx.drawImage(text, 0, 0, 670, 578);
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.rect(point.x, point.y, point.w, point.h);      
    ctx.fill();
    ctx.closePath();
  }

  inLeft.addEventListener('change', (e) => {
    point.x = parseInt(e.target.value);
    print();
  })
  inTop.addEventListener('change', (e) => {
    point.y = parseInt(e.target.value);
    print();
  })
  inWidth.addEventListener('change', (e) => {
    point.w = parseInt(e.target.value);
    print();
  })
  
  inLeft.value = point.x;
  inTop.value = point.y;
  inWidth.value = point.w;

  copy.addEventListener("click", function() {
    toCopy.value = inPoint.value + ',';
    toCopy.select();
    document.execCommand('copy');
  }); */
  /* End of Development Functions */

  function printingMask(counter) {
    if (counter > matrix.length) counter = matrix.length;
    // console.log(counter);
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(text, 0, 0, 670, 578);
    ctx.fillText("How did this happen?", 223, 293);
    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    for (let i = 0; i < counter; i++) {
      ctx.rect(matrix[i]['x'], matrix[i]['y'], matrix[i]['w'], matrix[i]['h']);
    }
    ctx.fill();
    ctx.closePath();
  }

  function creatingPoints() {
    params.counter = Math.round(params.counter);
    if(params.prev !== params.counter){
      params.factor = Math.round((params.counter + 1) / 4);
      params.numbers[params.counter] = params.counter == 0 ? 0 : params.numbers[params.counter - 1] + params.factor;
      params.prev = params.counter;
      printingMask(params.numbers[params.counter]);
      // this.console.log(params.counter, params.factor, params.numbers[params.counter]);
    }
  }

  // Animations
  function animations() {
    // TweenLite.set(canvas, {height: 250, delay: 0}, 0);
    TweenLite.to(params, 5, {counter: 41, ease: Power0.easeNone, onUpdate: creatingPoints, delay: 0}, 0);
    TweenLite.to(bgCanvas, 2.5, {opacity: .2, ease: Power0.easeNone, delay: 2.5}, 0);
    TweenLite.to([canvas, bgCanvas], 2.5, {x: -79, y: 12, scale: .55, ease: Power1.easeOut, delay: 2.5}, 0);
  }
  
}//end
