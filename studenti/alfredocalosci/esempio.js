let w = 600;
let r = w/4; //raggio del cerchio
let a = 0; //angolo

function setup() {
  createCanvas(w, w);
  colorMode(HSB);  // H 0-360 S 0-100 B 0-100
}

function draw() {
  background(0,0,90);

  // noFill();
  let h = map(sin(a), -1, 1, 0, 360); //1 -> -1
  fill(h,80,80);
  circle(w/2,w/2,r*2); //xc,yc,r

  let x = w/2 + cos(a) * r;
  let y = w/2 + sin(a) * r;

  fill(0);
  circle(x,y,36);

  a = a + 0.01;


  // planet
  let xp = x + cos(a*2) * r/4;
  let yp = y + sin(a*2) * r/4;

  circle(xp,yp, 18);



}

function keyTyped(){
  console.log(key);
}