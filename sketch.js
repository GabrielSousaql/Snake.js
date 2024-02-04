let fontBlocks;
let imgFloors,
  imgBorder,
  imgApple,
  imgHeader,
  imgControls,
  imgDefeat,
  imgResume;
let play = true;
let pause = false;
let snake;
let food;
let points = 0;
let gridSize = 20;
let checkColission;

function preload() {
  fontBlocks = loadFont("assets/Daydream.ttf");
  imgFloors = loadImage("assets/grass.png");
  imgBorder = loadImage("assets/border.png");
  imgApple = loadImage("assets/apple.png");
  imgHeader = loadImage("assets/header.png");
  imgControls = loadImage("assets/controls.png");
  imgDefeat = loadImage("assets/defeat.png");
  imgResume = loadImage("assets/resume.png");
}

function setup() {
  createCanvas(600, 600);
  frameRate(10);
  textFont(fontBlocks);
  textSize(24);
  textAlign(CENTER);
  snake = new Snake();
  snake.setMouth(10, 12, 10, 2);
  snake.setEye(5, 5, 2, 4);
  createFood();
}

function draw() {
  background("#1e4620");
  image(imgFloors, 100, 100);
  if (play) {
    snake.draw();
    if (snake.eat(food)) {
      createFood();
    }
    fill(200, 0, 0);
    noStroke();
    image(imgApple, food.x, food.y);

    
    if (pause == true) {
      image(imgResume, 180, 200);
    }
    if (pause == false) {
      snake.update();
    }
    
    if (snake.gameOver()) {
      console.log("END GAME");
      play = false;
    }
  } else {
    image(imgDefeat, 180, 200);
  }

  image(imgBorder, 36, 40);
  image(imgHeader, 82, 0);
  image(imgControls, 185, 500);
  
  textSize(26);
  fill("#FFFFFF");
  text(points, 301, 65);
  
  textSize(24);
  fill("#1e4620");
  text(points, 300, 65);
  
}
