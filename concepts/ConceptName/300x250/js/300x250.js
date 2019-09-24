window.onload = function() {

  // Definitions
  // var clickarea = document.getElementById("click-area");

  // Functions

	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Canvas
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let img = new Image();
  let mask = new Image();
  img.src = 'img/woman.jpg';
  text.src = 'img/text.png';
  mask.src = 'img/mask.png';
  Image
  new Promise((resolve) => {
    text.onload = () => { img.onload = () => { mask.onload = () => { resolve() } } };
  })
  .then(() => {
    ctx.drawImage(img, 0, 0, 700, 625);
    ctx.globalCompositeOperation = 'source-in';
    ctx.drawImage(text, 0, 0, 700, 625);
    ctx.globalCompositeOperation = 'source-over';
    addingBase();

    for (let i = 0; i < matrix.length; i++) {
      ctx.strokeRect(matrix[i]['x'], matrix[i]['y'], matrix[i]['w'], matrix[i]['h']);
    }
  });

  let params = {
    counter: 0,
    numbers: [0],
    factor: 0,
    prev: 0,
    intro: 4,
    height: 22
  };
  let introText = [
    { x: 205, y: 238, w: 57, h: params.height },
    { x: 262, y: 238, w: 40, h: params.height },
    { x: 302, y: 238, w: 46, h: params.height },
    { x: 348, y: 238, w: 102, h: params.height }
  ];
  let boldText = [
    { x: 205, y: 238, w: 57, h: params.height },
    { x: 262, y: 238, w: 40, h: params.height },
    { x: 302, y: 238, w: 46, h: params.height },
    { x: 348, y: 238, w: 102, h: params.height },

    { x: 333, y: 105, w: 57, h: params.height },
    { x: 390, y: 105, w: 46, h: params.height },
    { x: 436, y: 105, w: 14, h: params.height },
    { x: 450, y: 105, w: 45, h: params.height },
    { x: 495, y: 105, w: 42, h: params.height },

    { x: 162, y: 150, w: 62, h: params.height },
    { x: 224, y: 150, w: 41, h: params.height },
    { x: 265, y: 150, w: 41, h: params.height },
    { x: 306, y: 150, w: 100, h: params.height },

    { x: 264, y: 348, w: 38, h: params.height },
    { x: 302, y: 348, w: 14, h: params.height },
    { x: 316, y: 348, w: 34, h: params.height },
    { x: 350, y: 348, w: 88, h: params.height },

    { x: 241, y: 412, w: 54, h: params.height },
    { x: 295, y: 412, w: 54, h: params.height },

    { x: 152, y: 458, w: 80, h: params.height },
    { x: 232, y: 458, w: 104, h: params.height }
  ];

  boldText.sort(function(a, b){return 0.5 - Math.random()});
  matrix = introText.concat(boldText);

  let addingBase = () => {
    //normal text
    ctx.font = "19.8px Arial";
    ctx.fillText("don't feel sick. Do I have a choice? Why is this happening?", 24, 212);
    ctx.fillText("What about our trip?", 24, 255);
    ctx.fillText("\"What am", 454, 255);
    //bold text
    ctx.font='bold 23px Arial';
    ctx.fillText("Who can I talk to?", 337, 125);
    ctx.fillText("What are my options?", 164, 168);
    ctx.fillText("How did this happen?", 210, 255);
    ctx.fillText("Where did I go wrong?", 188, 365);
    ctx.fillText("Why me?", 244, 430);
    ctx.fillText("Strong enough?", 154, 474);
  }

  let addingBg = () => {
    ctx.globalCompositeOperation = 'source-in';
    ctx.drawImage(img, 0, 0, 700, 625);
  }

  let printingMask = (counter) => {
    if(counter == 0) {
      ctx.clearRect(0, 0, 700, 625);
    } else if (counter <= matrix.length) {
      // console.log(counter);
      ctx.clearRect(0, 0, 700, 625);
      ctx.globalCompositeOperation = 'source-over';
      addingBase();
      ctx.globalCompositeOperation = 'destination-in';
      ctx.beginPath();
      for (let i = 0; i < counter; i++) {
        ctx.rect(matrix[i]['x'], matrix[i]['y'], matrix[i]['w'], matrix[i]['h']);
      }
      ctx.fill();
      ctx.closePath();
      addingBg();
    }
  }

  let creatingPoints = () => {
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
  TweenLite.set(canvas, {height: 250, delay: 0}, 0);
  // TweenLite.to(params, 3, {counter: 30, ease: Power0.easeNone, onUpdate: creatingPoints, delay: 0}, 0);
  
}//end
