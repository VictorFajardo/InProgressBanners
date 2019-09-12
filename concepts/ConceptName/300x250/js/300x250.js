window.onload = function() {

  // Definitions
  // var clickarea = document.getElementById("click-area");

  // Functions

	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Canvas
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  var mask = new Image();
  // Image
  // new Promise((resolve) => {
    mask.onload = () => { img.onload = () => null };
    mask.src = 'img/mask.png';
    img.src = 'img/woman.png';
  // })
  // .then(() => {
    // ctx.save();
    // ctx.drawImage(img, 0, 0, 700, 625);
    // ctx.globalCompositeOperation = 'destination-in';
    // ctx.drawImage(mask, 50, 0, 700, 625);
    // ctx.restore();
    // ctx.save();
    // printingAreas();
  // });

  let height = 24;
  let pointsMatrix = [
    { x: 245, y: 238, w: 60, h: height },
    { x: 305, y: 238, w: 40, h: height },
    { x: 345, y: 238, w: 50, h: height },
    { x: 395, y: 238, w: 110, h: height }
  ];

  function addingBg() {
    ctx.save();
    ctx.globalCompositeOperation = 'source-atop';
    ctx.drawImage(img, 0, 0, 700, 625);
    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(mask, 50, 0, 700, 625);
    ctx.restore();
  }

  function printingMask(counter) {
    console.log(counter);
    ctx.clearRect(0, 0, 700, 625);
    ctx.beginPath();
    for (let i = 0; i < counter; i++) {
      ctx.rect(pointsMatrix[i]['x'], pointsMatrix[i]['y'], pointsMatrix[i]['w'], pointsMatrix[i]['h']);
    }
    ctx.fill();
    ctx.closePath();
    addingBg();
  }

  // printingAreas();

  

  
  
  // Animations
  TweenLite.set(canvas, {height: 250, delay: 0}, 0);
  let myObj = { counter: 0, prev: 0 };
  TweenLite.to(myObj, 4, {counter: 4, ease: Power0.easeNone, onUpdate: () => {
    myObj.counter = Math.round(myObj.counter);
    if(myObj.prev !== myObj.counter){
      printingMask(myObj.counter);
      myObj.prev = myObj.counter;
    }
  }, delay: 0}, 0);
  
}//end
