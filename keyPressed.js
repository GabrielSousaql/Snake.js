function keyPressed() {
  if (pause === false) {
    if (keyCode === UP_ARROW || (key == "w" && snake.ySpeed === 0)) {
      snake.setDirection(0, -1);
      snake.setMouth(12, 0, 2, 10);
      snake.setEye(5, 15, 4, 2);
      snake.setTail(0, 0, 10, 20, 15, 20, 10, 5);
    } else if (keyCode === DOWN_ARROW || (key == "s" && snake.ySpeed === 0)) {
      snake.setDirection(0, 1);
      snake.setMouth(12, 10, 2, 10);
      snake.setEye(5, 5, 4, 2);
      snake.setTail(0, 0, 10, 20, 15, 20, 10, 5);
    } else if (keyCode === RIGHT_ARROW || (key == "d" && snake.xSpeed === 0)) {
      snake.setDirection(1, 0);
      snake.setMouth(10, 12, 10, 2);
      snake.setEye(5, 5, 2, 4);
      snake.setTail(10, 5, 20, 10, 20, 15, 0, 0);
    } else if (keyCode === LEFT_ARROW || (key == "a" && snake.xSpeed === 0)) {
      snake.setDirection(-1, 0);
      snake.setMouth(0, 12, 10, 2);
      snake.setEye(15, 5, 2, 4);
      snake.setTail(10, 5, 20, 10, 20, 15, 0, 0);
    }
  }

  if (play == false && keyCode === ENTER && keyIsPressed) {
    restart();
  }

  if (play == true && keyCode === ESCAPE) {
    esc();
  }

  if (pause == false && keyCode === ALT && keyIsPressed) {
    restart();
  }
}
