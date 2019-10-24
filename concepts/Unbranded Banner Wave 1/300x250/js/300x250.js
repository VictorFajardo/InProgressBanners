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
    console.log('text.png loaded!');
    img.onload = function() {
      console.log('img.jpg loaded!');
      mask.onload = function() {
        console.log('mask.png loaded!');
        bgCtx.drawImage(img, 0, 0, 670, 578);
        bgCtx.globalCompositeOperation = 'destination-in';
        bgCtx.drawImage(mask, 0, 0, 670, 578);
        // animations();
        print();
      }
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
  
  var introText = [
    {x: 221, y: 275, w: 51},
    {x: 274, y: 275, w: 36},
    {x: 312, y: 275, w: 42},
    {x: 355, y: 275, w: 93}
  ];
  var whiteText = [
    {x: 231, y: 68, w: 10},
    {x: 243, y: 68, w: 42},
    {x: 286, y: 68, w: 30},
    {x: 317, y: 68, w: 65},
    {x: 241, y: 130, w: 50},
    {x: 292, y: 130, w: 50},
    {x: 343, y: 130, w: 74},
    {x: 310, y: 171, w: 93},
    {x: 272, y: 171, w: 36},
    {x: 233, y: 171, w: 36},
    {x: 173, y: 171, w: 59},
    {x: 272, y: 213, w: 71},
    {x: 345, y: 213, w: 37},
    {x: 382, y: 213, w: 13},
    {x: 395, y: 213, w: 29},
    {x: 428, y: 213, w: 80},
    {x: 243, y: 378, w: 59},
    {x: 303, y: 378, w: 63},
    {x: 368, y: 378, w: 39},
    {x: 405, y: 378, w: 18},
    {x: 294, y: 419, w: 46},
    {x: 343, y: 419, w: 55},
    {x: 399, y: 419, w: 19},
    {x: 227, y: 417, w: 34},
    {x: 367, y: 458, w: 15},
    {x: 381, y: 458, w: 43},
    {x: 425, y: 458, w: 30},
    {x: 455, y: 458, w: 30},
    {x: 145, y: 480, w: 66},
    {x: 213, y: 480, w: 37},
    {x: 250, y: 480, w: 13},
    {x: 264, y: 480, w: 30},
    {x: 296, y: 480, w: 81},
    {x: 433, y: 500, w: 60},
    {x: 494, y: 500, w: 37},
    {x: 534, y: 500, w: 34},
    {x: 54, y: 520, w: 69},
    {x: 381, y: 522, w: 49},
    {x: 434, y: 522, w: 40},
    {x: 476, y: 522, w: 12},
    {x: 489, y: 522, w: 42},
    {x: 534, y: 522, w: 36},
    {x: 161, y: 563, w: 47},
    {x: 210, y: 563, w: 56},
    {x: 266, y: 563, w: 32},
    {x: 299, y: 563, w: 118}
  ]

  var blackText = [
    {x: 249, y: 25, w: 37},
    {"x":287,"y":25,"w":43},
    {"x":332,"y":25,"w":47},
    {"x":381,"y":25,"w":16},
    {"x":217,"y":46,"w":80},
    {"x":299,"y":46,"w":52},
    {"x":353,"y":46,"w":30},
    {"x":384,"y":46,"w":14},
    {"x":400,"y":46,"w":24},
    {"x":425,"y":46,"w":13},
    {"x":196,"y":67,"w":31},
    {"x":386,"y":67,"w":62},
    {"x":448,"y":67,"w":11},
    {"x":175,"y":88,"w":24},
    {"x":200,"y":88,"w":58},
    {"x":379,"y":88,"w":30},
    {"x":410,"y":88,"w":52},
    {"x":461,"y":88,"w":12},
    {"x":168,"y":108,"w":25},
    {"x":168,"y":108,"w":25},
    {"x":209,"y":108,"w":20},
    {"x":231,"y":108,"w":30},
    {"x":261,"y":108,"w":86},
    {"x":349,"y":108,"w":37},
    {"x":349,"y":108,"w":37},
    {"x":398,"y":108,"w":59},
    {"x":460,"y":108,"w":28},
    {"x":142,"y":130,"w":34},
    {"x":177,"y":130,"w":22},
    {"x":200,"y":130,"w":38},
    {"x":419,"y":130,"w":41},
    {"x":461,"y":130,"w":18},
    {"x":480,"y":130,"w":18},
    {"x":130,"y":149,"w":24},

  ]
  // var matrix = [].concat(introText, whiteText);
  // var matrix = [...introText, ...whiteText, ...blackText];
  var matrix = [...blackText];

  /* Development Functions */
  var point = {"x":130,"y":149,"w":24};
  
  function print() {
    // console.clear();
    // console.log(point);
    inPoint.value = JSON.stringify(point);
    ctx.clearRect(0, 0, 670, 578);
    ctx.globalAlpha = 1;
    ctx.drawImage(text, 0, 0, 670, 578);
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.rect(point.x, point.y, point.w, params.height);      
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
  });
  /* End of Development Functions */

  function printingMask(counter) {
    if(counter == 0) {
      ctx.clearRect(0, 0, 670, 578);
    } else if (counter <= matrix.length) {
      console.log(counter);
      ctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(text, 0, 0, 670, 578);
      ctx.fillText("How did this happen?", 223, 293);
      ctx.globalCompositeOperation = 'destination-in';
      ctx.beginPath();
      for (let i = 0; i < counter; i++) {
        ctx.rect(matrix[i]['x'], matrix[i]['y'], matrix[i]['w'], params.height);
      }
      ctx.fill();
      ctx.closePath();
      // addingBg();
    }
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
    TweenLite.to(params, 3, {counter: 30, ease: Power0.easeNone, onUpdate: creatingPoints, delay: 0}, 0);
    TweenLite.to(bgCanvas, 1, {opacity: .2, ease: Power2.easeOut, delay: 2}, 0);
  }
  
}//end
