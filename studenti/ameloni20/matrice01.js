let w = 600;
let t = 0;
function setup() {
  createCanvas(w, w);
}

function draw() {
  background(220);
  
    let n = 10;
    let m = w/n;
  
  for(let fila = 0;  fila <n; fila ++){
    // fila 0,1,2..9 // 10 volte
    
    
  for(col = 0; col<n; col++){
      // col 0,1,2...9 // 10 volte
    
    let x = col*m;
    let y = fila*m;
    let xc = x + m/2;
    let yc = y + m/2;
    let i = (fila*n) + col;
    
      // variabile, min, max, min, max
      let d = map(i, 0, n*n, 2, m); 
       let g = map(i, 0, n*n, 0, 255);
      //let g = map(col, 0, n, 255, 0);
    
        
      //random value
      let v = noise(x/600 + t, y/600 );
      let vg = map(v, 0, 1, 0, 255);
      let z = noise(t + x/100,y/100)
    //circle(col*m, fila*m, d);
    rectMode(CENTER); // quadrato dal centro
    fill(vg); // colore
    circle(xc, yc, z*m); // coordinate, dimensione
    

    
    //testo giustificato al centro
      fill(0);
      textAlign(CENTER, CENTER);
      //text(i, xc, yc);    
      
      }
   }
  t = t + 0.02;    
}