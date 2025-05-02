let Quote = ["B̷͚̉ę̵͓̖̟̹̊̐̓̿t̴̩͇͇͖̍t̴̲̎e̴̜͇̤̿́r̸̺̩̜͓̻͡͡ ̷͈͓̼̆̑͟ḻ̸̖̗̦̓̾u̶̡̲̖͚͘ͅç̴̧͋̀̉ḳ̴̡̣̼̬̈́̆̾ ̶͔̩̙̆̇̀́n̴̞̟̔̃ë̴̢̘̰̂̎̉̐͜͟x̴̦̓͆̐̽̚t̶̳̣͛͟ ̷̨̣͗̐ẗ̵̢̠́̊͘i̵͉̪͖͚̿̍͟m̸̛͍̩̝̤̌̂̕͜é̶̛̳̂̒̏"]

let col = {
    r: 0,
    g: 0,
    b: 0,
}

// se fait une fois 
function setup() {
  createCanvas(400, 400);
  frameRate(2)
    col.r= random(0,255);
    col.g= random(0,255);
    col.b= random(0,255);
  background(col.r,col.g,col.b);
}

//se met a jour, lit de haut en bas et recommence entre les accolades
function draw() {
   
  fill(100, 10, 210) ;
  stroke("blue") ;
  strokeWeight (7);
  // coordoné x, y, largeur, longueur
  rect(150, random(0,400), 20, 30) ;
  fill("cyan") ;
  stroke("pink") ;
  strokeWeight(random(0, 18))
  ellipse(mouseX, mouseY, 20, 20) ;
  strokeWeight(2) ;
  fill("red") ;
  triangle(random(0,400), 300, 20, 30, 60, 50) ;
  fill(255);
  arc(100, 200, 40, 600, 300, 200 );
  fill("purple");
  text(Quote, random(0, 400), random(0, 400))  
}

  // evennement , cliquer canva puis "bouton clavier"
function keyPressed() {
  saveCanvas();
}