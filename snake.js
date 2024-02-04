class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(100, 100);
    this.xSpeed = 0;
    this.ySpeed = 0;
  }

  setDirection(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }

  update() {
    let front = this.body[this.body.length - 1].copy();
    this.body.shift();
    front.x += this.xSpeed * gridSize;
    front.y += this.ySpeed * gridSize;
    this.body.push(front);
    checkColission = true;
  }

  draw() {
    fill(0, 130, 0);
    noStroke();

    if (this.body.length > 3) {
      this.drawTail();
      for (let i = 2; i < this.body.length; i++) {
        rect(this.body[i].x, this.body[i].y, gridSize, gridSize);
        this.drawTail();
      }
    } else {
      for (let i = 0; i < this.body.length; i++) {
        rect(this.body[i].x, this.body[i].y, gridSize, gridSize);
      }
    }

    this.drawEye();
    this.drawMouth();
  }

  setMouth(xDisp, yDisp, w, h) {
    this.xDispMouth = xDisp;
    this.yDispMouth = yDisp;
    this.wMouth = w;
    this.hMouth = h;
  }

  drawMouth() {
    fill(0);
    rect(
      this.body[this.body.length - 1].x + this.xDispMouth,
      this.body[this.body.length - 1].y + this.yDispMouth,
      this.wMouth,
      this.hMouth
    );
  }

  setEye(xDisp, yDisp, w, h) {
    this.xDispEye = xDisp;
    this.yDispEye = yDisp;
    this.wEye = w;
    this.hEye = h;
  }

  drawEye() {
    fill(255);
    circle(
      this.body[this.body.length - 1].x + this.xDispEye,
      this.body[this.body.length - 1].y + this.yDispEye,
      5
    );

    fill(0);
    ellipse(
      this.body[this.body.length - 1].x + this.xDispEye,
      this.body[this.body.length - 1].y + this.yDispEye,
      this.wEye,
      this.hEye
    );
  }

  setTail(yDisp0, yDisp1, firstW, firstH, secondW, secondH, xDisp0, xDisp1) {
    this.yDispTail0 = yDisp0;
    this.yDispTail1 = yDisp1;
    this.wTail0 = firstW;
    this.hTail0 = firstH;
    this.wTail1 = secondW;
    this.hTail1 = secondH;
    this.xDispTail0 = xDisp0;
    this.xDispTail1 = xDisp1;
  }

  drawTail() {
    rect(
      this.body[0].x + this.xDispTail0,
      this.body[0].y + this.yDispTail0,
      this.wTail0,
      this.hTail0
    );
    rect(
      this.body[1].x + this.xDispTail1,
      this.body[1].y + this.yDispTail1,
      this.wTail1,
      this.hTail1
    );
  }

  eat(position) {
    let head = this.body[this.body.length - 1];
    if (head.x === position.x && head.y === position.y) {
      checkColission = false;
      this.body.push(createVector(position.x, position.y));
      points += 100;
      return true;
    }
    return false;
  }

  gameOver() {
    let head = this.body[this.body.length - 1];
    if (head.x >= 500 || head.x < 100 || head.y >= 500 || head.y < 100) {
      return true;
    }
    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (head.x === part.x && head.y === part.y && checkColission == true) {
        return true;
      }
    }
    return false;
  }
}
