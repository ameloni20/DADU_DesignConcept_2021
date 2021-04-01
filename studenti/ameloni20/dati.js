let w = 600;

let x = 120;
let y = 300

//array
let xx = [120, 98, 480, 50, 10,];
let yy = [1,2,3,4,5];

function setup() {
  createCanvas(w, w);
  //array operators
  xx.push(550); //aggiunge un elemento alla fine di xx
  yy.push(550); //aggiunge un elemento alla fine di yy

  console.log(xx);
  console.log(xx.length);
  console.log(xx[2]); //identifica elemento, conta da zero
}

function draw() {
    background(200);
    circle(x,y, 20);

    // un cerchio per ogni elemento dell' array

    fill(0,32);
    //noStroke();
    for(let i = 0; i<xx.length; i++){
        let d = map(i,0, xx.length, 2,150); //dimensione cerchi variabile da 2 a 64
        circle(xx[i], yy[i], d);
        line(xx[i], yy[i], xx[i]+d,yy[i]+d);
    }
    if(xx.length < 20000){
      xx.push(mouseX);
      yy.push(mouseY);
    }
}

function keyTyped(){
  console.log(key);

  xx.push(random(w)); // random(min, max) -> random(max)
  yy.push(random(w));
}
