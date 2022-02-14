const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let video;


function setup(){
    let myCanvas = createCanvas(600,600);
    myCanvas.parent("Canvas");
    background(0);

    video = createCapture(VIDEO);
    video.size(100, 100);

}

function draw() {

    background(0);
    let w = width/video.width;
    let h = height/video.height;
    video.loadPixels();
    for (let i = 0; i < video.width; i++) {
        for (let j = 0; j < video.height; j++) {
          const pixelIndex = (i + j * video.width) * 4;
          const r = video.pixels[pixelIndex + 0];
          const g = video.pixels[pixelIndex + 1];
          const b = video.pixels[pixelIndex + 2];
          const avg = (r + g + b) / 3;
          

        let rr = leaf_RGB["r"] + random(-50, 50);
        let gg = leaf_RGB["g"]  + random(-50, 50);
        let bb = leaf_RGB["b"] + random(-50, 50);
        fill(rr, gg, bb,155)
        //fill('rgb(0,255,0)');

          
          const len = density.length;
          const charIndex = floor(map(avg,0,255,len,0));
          
          textSize(w);
          textAlign(CENTER, CENTER);
          text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
          
          
        }
      }
      
      
    }