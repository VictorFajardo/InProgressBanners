window.onload = function() {

  // Definitions
  var clickarea = document.getElementById("click-area");

  // Functions
	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Canvas
  // var bgCanvas = document.getElementById("bg-canvas");
  // var bgCtx = bgCanvas.getContext("2d");
  // var maskCanvas = document.getElementById("mask-canvas");
  // var maskCtx = maskCanvas.getContext("2d");
  // var img = new Image();
  // var shape = new Image();
  // var mask = new Image();
  // img.src = 'img/img.jpg';
  // shape.src = 'img/shape.png';
  // mask.src = 'img/mask.png';
  // img.onload = function() { imagesLoaded(); }
  // shape.onload = function() { imagesLoaded(); }
  // mask.onload = function() { imagesLoaded(); }
  // var loadedImageCount = 0;
  // function imagesLoaded() {
  //   loadedImageCount++;
  //   if (loadedImageCount == 3) {
  //     bgCtx.drawImage(img, 0, 0, 370, 320);
  //     bgCtx.globalCompositeOperation = 'destination-in';
  //     bgCtx.drawImage(shape, 0, 0, 370, 320);
  //   }
  // }
  
  var introText=[
    {"x":224,"y":196,"w":205,"h":17},
  ];
  var whiteText=[
    {"x":211,"y":124,"w":259,"h":17},{"x":190,"y":286,"w":198,"h":17},{"x":277,"y":358,"w":213,"h":17},{"x":242,"y":431,"w":207,"h":17},{"x":273,"y":503,"w":167,"h":17},{"x":395,"y":557,"w":178,"h":17},
  ];
  var blackText=[
    {"x":275,"y":52,"w":97,"h":17},{"x":373,"y":52,"w":43,"h":17},{"x":243,"y":70,"w":165,"h":17},{"x":410,"y":70,"w":44,"h":17},{"x":212,"y":88,"w":44,"h":17},
    {"x":257,"y":88,"w":147,"h":17},{"x":406,"y":88,"w":60,"h":17},{"x":205,"y":106,"w":64,"h":17},{"x":271,"y":106,"w":163,"h":17},{"x":435,"y":106,"w":50,"h":17},
    {"x":167,"y":142,"w":203,"h":17},{"x":372,"y":142,"w":131,"h":17},{"x":168,"y":160,"w":77,"h":17},{"x":168,"y":124,"w":42,"h":17},{"x":472,"y":124,"w":32,"h":17},
    {"x":247,"y":160,"w":160,"h":17},{"x":409,"y":160,"w":101,"h":17},{"x":168,"y":178,"w":87,"h":17},{"x":257,"y":178,"w":147,"h":17},{"x":406,"y":178,"w":112,"h":17},{"x":168,"y":196,"w":54,"h":17},{"x":433,"y":196,"w":91,"h":17},{"x":168,"y":215,"w":21,"h":17},{"x":192,"y":214,"w":183,"h":17},{"x":376,"y":214,"w":150,"h":17},{"x":168,"y":233,"w":77,"h":17},
    {"x":246,"y":233,"w":182,"h":17},{"x":431,"y":233,"w":93,"h":17},{"x":168,"y":251,"w":135,"h":17},{"x":305,"y":251,"w":219,"h":17},{"x":168,"y":268,"w":146,"h":17},{"x":316,"y":269,"w":172,"h":17},{"x":489,"y":269,"w":27,"h":17},
    {"x":389,"y":287,"w":106,"h":17},{"x":190,"y":305,"w":140,"h":17},{"x":332,"y":305,"w":154,"h":17},{"x":201,"y":323,"w":23,"h":17},{"x":226,"y":323,"w":182,"h":17},{"x":411,"y":323,"w":78,"h":17},
    {"x":202,"y":341,"w":57,"h":17},{"x":260,"y":341,"w":229,"h":17},{"x":202,"y":359,"w":73,"h":17},{"x":202,"y":377,"w":145,"h":17},{"x":349,"y":377,"w":141,"h":17},
    {"x":202,"y":396,"w":127,"h":17},{"x":331,"y":396,"w":158,"h":17},{"x":203,"y":414,"w":206,"h":17},{"x":411,"y":414,"w":78,"h":17},{"x":242,"y":450,"w":49,"h":17},{"x":293,"y":450,"w":127,"h":17},{"x":422,"y":450,"w":19,"h":17},
    {"x":242,"y":468,"w":151,"h":17},{"x":394,"y":468,"w":47,"h":17},{"x":234,"y":486,"w":192,"h":17},{"x":428,"y":486,"w":31,"h":17},{"x":213,"y":504,"w":58,"h":17},{"x":441,"y":504,"w":33,"h":17},{"x":172,"y":522,"w":90,"h":17},
    {"x":264,"y":522,"w":249,"h":17},{"x":148,"y":540,"w":144,"h":17},{"x":294,"y":539,"w":127,"h":17},{"x":423,"y":540,"w":117,"h":17},{"x":123,"y":557,"w":94,"h":17},{"x":219,"y":558,"w":174,"h":17},
    {"x":81,"y":577,"w":163,"h":17},{"x":246,"y":577,"w":139,"h":17},{"x":387,"y":577,"w":204,"h":17},

  ];
  var params = {
    loopTime: 2.5,
    aniTime: 1.2,
    delay: 2,
    scale: 2,
    centerX: 335,
    centerY: 289,
    f: 1,
    counter: 0,
    prev: 0,
    mask: 370,
    loops: 3
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
    var cX = 0 + point.x*1.31 + (point.w*1.3) / 2;
    var cY = 0 + point.y*1.31 + (point.h*1.3) / 2;
    el.id = 'point-' + i;
    el.className = i < introText.length ? 'intro' : 'words';
    el.style.left = cX + 'px';
    el.style.top = cY + 'px';
    el.style.height = point.h*1.3 + 'px';
    el.style.width = point.w*1.3 + 'px';
    el.dataset.x = (cX - params.centerX) * params.f;
    el.dataset.y = (cY - params.centerY) * params.f;
    el.dataset.inix =  point.w*1.3 / 2;
    el.dataset.iniy = point.h*1.3 / 2;
    el.style.backgroundPositionX = -point.x*1.31-0 + 'px';
    el.style.backgroundPositionY = -point.y*1.31-0 + 'px';
    nodes.push(el);
    document.getElementById('container').appendChild(el);
  });

  function movingMask() {
    maskCtx.save();
    maskCtx.drawImage(img, 0, 0, 370, 320);
    maskCtx.globalCompositeOperation = 'destination-in';
    maskCtx.drawImage(shape, 0, 0, 370, 320);
    maskCtx.globalCompositeOperation = 'destination-out';
    maskCtx.drawImage(mask, params.mask, 0, 370, 320);
    maskCtx.beginPath();
    maskCtx.rect(0, 0, params.mask + 2, 320);
    maskCtx.fill();
    maskCtx.closePath();
    maskCtx.restore();
  }

  /* Development Functions */
  var devCanvas = document.getElementById("dev");
  var devCtx = devCanvas.getContext("2d");
  var words = new Image();
  words.src = 'img/words.png';

  var point = {"x":168,"y":233,"w":77,"h":17};
  
  function print() {
    inPoint.value = JSON.stringify(point);
    devCtx.drawImage(words, 0, 0, 670, 599);
    devCtx.globalCompositeOperation = 'destination-in';
    // devCtx.globalAlpha = 1;
    // devCtx.clearRect(0, 0, 670, 599);
    // devCtx.globalAlpha = .5;
    devCtx.beginPath();
    blackText.map(el => {
      return devCtx.rect(el.x, el.y, el.w, el.h);      
    }) 
    // devCtx.rect(point.x, point.y, point.w, point.h);      
    
    devCtx.fill();
    devCtx.closePath();
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
  inHeight.addEventListener('change', (e) => {
    point.h = parseInt(e.target.value);
    print();
  })
  
  inLeft.value = point.x;
  inTop.value = point.y;
  inWidth.value = point.w;
  inHeight.value = point.h;
  
  copy.addEventListener("click", function() {
    toCopy.value = inPoint.value + ',';
    toCopy.select();
    document.execCommand('copy');
  });
  
  words.onload = function() { print(); }
  
  /* End of Development Functions */

  // Animations
  // TweenLite.set(params, { onComplete: movingMask, delay: 0 }, 0);
  // nodes.forEach(function (el, i, arr) {
  //   TweenLite.set(el, { x: (el.dataset.x - el.dataset.inix), y: (el.dataset.y - el.dataset.iniy), opacity: 0, scale: params.scale, delay: 0 }, 0);
  //   if (i < introText.length) {
  //     TweenLite.to(el, params.aniTime, { opacity: 1, ease: Power1.easeOut, delay: 0 }, 0);
  //   }
  //   TweenLite.to(el, params.aniTime, { x: - el.dataset.inix, y: - el.dataset.iniy, scale: 1, opacity: i < introText.length ? .65 : 1, transformOrigin: "50% 50%", force3D: true, rotationZ: "0.1deg", translateZ: -100, ease: Power1.easeOut, delay: params.delay + i * (params.loopTime / arr.length) }, 0);
  // });
  // TweenLite.to(bgCanvas, 2.5, { opacity: .2, ease: Power0.easeNone, delay: 3 }, 0);
  // TweenLite.to(container, 3, { x: -39, y: 49, ease: Power2.easeOut, delay: 2 }, 0);
  // TweenLite.to(container, 1, { scale: .4215, ease: Power0.easeNone, delay: 2 }, 0);
  // TweenLite.to(text1, 1, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 4.4 }, 0);
  // TweenLite.to(text2, 1, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 7 }, 0);
  // TweenLite.to(params, 3, { mask: 0, ease: Power0.easeNone, onUpdate: movingMask, delay: 6.6 }, 0);
  // TweenLite.to([bgCanvas, maskCanvas], 3, { y: -18, scale: .78, ease: Power2.easeOut, delay: 6.6 }, 0);
  // TweenLite.to(container, 3, { x: -39, y: 30, scale: .3287, ease: Power2.easeOut, delay: 6.6 }, 0);
  // TweenLite.to([text1, text2], .5, { opacity: 0, ease: Power2.easeOut, delay: 11 }, 0);
  // TweenLite.to(text3, 1, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 11.5 }, 0);
  // TweenLite.to(text4, 1, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 13 }, 0);
  // TweenLite.to(pfizer, 1, { opacity: 1, ease: Power2.easeOut, delay: 13 }, 0);

}//end