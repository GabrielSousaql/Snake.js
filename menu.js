function restart() {
  snake = new Snake();
  snake.setMouth(10, 12, 10, 2);
  snake.setEye(5, 5, 2, 4);
  points = 0;
  createFood();
  play = true;
}

function esc() {
  pause = !pause;
}
