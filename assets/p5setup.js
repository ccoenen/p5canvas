function setup() {
  // Override the loadImage method from p5js to enable the usage of relative paths
  let loadImageSuper = loadImage
  loadImage = (path, successCallback, failureCallback) => {
    return loadImageSuper.apply(this, [localPath + path, successCallback, failureCallback])
  }

  createCanvas(windowWidth, windowHeight)
  frameRate(30)
  clear()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  clear()
}

function p5reset() {
  clear()
  fill(255, 255, 255)
  stroke(0, 0, 0)
  textSize(12)
}
