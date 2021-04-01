let w = 600;
let r = w/4; //raggio del cerchio
let a = 0; //angolo

//array
let xx = [120, 98, 480, 50, 10,];
let yy = [1,2,3,4,5];


function setup() {
  createCanvas(w, w);
  colorMode(HSB);  // H 0-360 S 0-100 B 0-100

  //array operators
  xx.push(550); //aggiunge un elemento alla fine di xx
  yy.push(550); //aggiunge un elemento alla fine di yy
}

function draw() {
  background(0,0,40);

  

  // noFill();
  let h = map(sin(a), -1, 1, 0, 360); //1 -> -1
  fill(h,80,80);
  circle(w/2,w/2,r*2); //xc,yc,r

  let x = w/2 + cos(a) * r; //coordinate primo cerchio
  let y = w/2 + sin(a) * r;

  let x1 = w/2 + sin(a) * r; //coordinate secondo cerchio
  let y1 = w/2 + cos(a) * r;

  fill(h,80,80);
  circle(x,y,40);
  circle(x1,y1,40)

  a = a + 0.01;

  // planet
  let xp = x + cos(a*4) * r/2;
  let yp = y + sin(a*4) * r/2;
  //fill(0);
  //circle(xp,yp+50, 20);
  //line(x,y,xp,yp);

  for(let i = 0; i<xx.length; i++){
    let d = map(i,0, xx.length, 2,64); //dimensione cerchi variabile da 2 a 64
    fill(h,80,80);
    stroke(255);
    circle(xp, yp, 40+a);
    line(xp, yp, x1,y1);
    line(xp, yp, x, y);
}
if(xx.length < 20000){
  xx.push(mouseX);
  yy.push(mouseY);
}


}

function keyTyped(){
  console.log(key);

  //k = random (1,500);
  xx.push(random(w)); // random(min, max) -> random(max)
  yy.push(random(w));
}