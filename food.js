function createFood() {
  let cols = floor(400 / gridSize);
  let rows = floor(400/ gridSize);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(gridSize)
  food.add(100,100)

}



